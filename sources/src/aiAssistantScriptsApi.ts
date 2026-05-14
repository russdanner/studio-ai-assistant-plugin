import { fetchContentXML, fetchItemsByPath } from '@craftercms/studio-ui/services/content';
import { firstValueFrom, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { buildStudioAuthHeaders } from './aiAssistantApi';

const BASE = '/studio/api/2/plugin/script/plugins/org/craftercms/aiassistant/studio/aiassistant/scripts';

function withSite(url: string, siteId: string): string {
  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}siteId=${encodeURIComponent(siteId)}`;
}

function unwrapPluginScriptBody(body: unknown): unknown {
  if (!body || typeof body !== 'object') return body;
  const o = body as Record<string, unknown>;
  const inner = o.result;
  if (inner && typeof inner === 'object' && !Array.isArray(inner)) return inner;
  return body;
}

export type AiAssistantScriptsIndexTool = {
  id: string;
  script: string;
  description: string;
  studioPath: string;
  hasSource: boolean;
  byteLength: number;
};

export type AiAssistantScriptsIndexItem = {
  id: string;
  studioPath: string | null;
  hasSource: boolean;
  byteLength: number;
};

export type AiAssistantScriptsToolPromptOverrideRow = {
  key: string;
  studioPath: string;
  hasOverride: boolean;
  byteLength: number;
};

export type AiAssistantPromptDetailResponse = {
  ok?: boolean;
  message?: string;
  key?: string;
  /** Classpath plugin KEY.md if present, else built-in Groovy literal (used when site file is missing or blank). */
  defaultText?: string;
  /** Raw UTF-8 of site prompts/KEY.md (may be blank). */
  siteFileText?: string;
  siteOverrideEffective?: boolean;
  defaultTextTruncated?: boolean;
  siteFileTruncated?: boolean;
};

export type AiAssistantScriptsIndexResponse = {
  ok?: boolean;
  message?: string;
  registryStudioPath?: string;
  registryText?: string;
  tools?: AiAssistantScriptsIndexTool[];
  imageGenerators?: AiAssistantScriptsIndexItem[];
  llmScripts?: AiAssistantScriptsIndexItem[];
  toolPromptOverrides?: AiAssistantScriptsToolPromptOverrideRow[];
};

export async function fetchAiAssistantPromptDetail(siteId: string, key: string): Promise<AiAssistantPromptDetailResponse> {
  const res = await fetch(
    `${withSite(`${BASE}/prompt`, siteId)}&key=${encodeURIComponent(key)}`,
    {
      method: 'GET',
      credentials: 'include',
      headers: { ...buildStudioAuthHeaders() }
    }
  );
  const raw = await res.json().catch(() => ({}));
  const data = unwrapPluginScriptBody(raw) as AiAssistantPromptDetailResponse;
  if (!res.ok) {
    return { ok: false, message: data.message ?? (raw as { message?: string }).message ?? res.statusText };
  }
  return data;
}

export async function fetchAiAssistantScriptsIndex(siteId: string): Promise<AiAssistantScriptsIndexResponse> {
  const res = await fetch(withSite(`${BASE}/index`, siteId), {
    method: 'GET',
    credentials: 'include',
    headers: { ...buildStudioAuthHeaders() }
  });
  const raw = await res.json().catch(() => ({}));
  const data = unwrapPluginScriptBody(raw) as AiAssistantScriptsIndexResponse;
  if (!res.ok) {
    return { ok: false, message: data.message ?? (raw as { message?: string }).message ?? res.statusText };
  }
  return data;
}

export async function postAiAssistantScriptsMutate(
  siteId: string,
  payload: Record<string, unknown>
): Promise<{ ok?: boolean; message?: string }> {
  const res = await fetch(withSite(`${BASE}/mutate`, siteId), {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...buildStudioAuthHeaders()
    },
    body: JSON.stringify({ siteId, ...payload })
  });
  const raw = await res.json().catch(() => ({}));
  const data = unwrapPluginScriptBody(raw) as { ok?: boolean; message?: string };
  if (!res.ok) {
    return { ok: false, message: data.message ?? (raw as { message?: string }).message ?? res.statusText };
  }
  return data;
}

/** Studio configuration path for {@code writeConfiguration} / {@code fetchConfigurationJSON} (no leading slash). */
export function studioConfigRelativePath(studioModulePath: string): string {
  const p = (studioModulePath ?? '').trim();
  return p.startsWith('/') ? p.slice(1) : p;
}

/** Sandbox repo path for {@code tools.json} (same file as Studio module {@code scripts/aiassistant/config/tools.json}). */
export const TOOLS_JSON_SANDBOX_PATH = '/config/studio/scripts/aiassistant/config/tools.json';

function utf8TextFromContentPayload(raw: unknown): string {
  if (raw == null) return '';
  if (typeof raw === 'string') return raw;
  if (typeof raw === 'object' && !Array.isArray(raw)) {
    const o = raw as Record<string, unknown>;
    const content = o.content;
    if (typeof content === 'string') return content;
    const configuration = o.configuration;
    if (typeof configuration === 'string') return configuration;
  }
  return '';
}

/**
 * Reads UTF-8 text for a file under {@code /config/studio/...} via content APIs when present.
 * Does not call {@code get_configuration}, so a missing optional file does not produce Studio {@code ContentNotFoundException} logs.
 */
export async function fetchOptionalStudioSandboxUtf8(siteId: string, sandboxPath: string): Promise<string> {
  const sid = (siteId || '').trim();
  const path = (sandboxPath || '').trim().startsWith('/') ? (sandboxPath || '').trim() : `/${(sandboxPath || '').trim()}`;
  if (!sid || !path) return '';
  try {
    const listings = (await firstValueFrom(
      fetchItemsByPath(sid, [path], { preferContent: true })
    )) as unknown as { missingItems?: string[]; 0?: unknown };
    if (Array.isArray(listings?.missingItems) && listings.missingItems.includes(path)) {
      return '';
    }
    if (!listings?.[0]) {
      return '';
    }
    const raw = await firstValueFrom(fetchContentXML(sid, path, { lock: false }).pipe(catchError(() => of(null))));
    return utf8TextFromContentPayload(raw).trim();
  } catch {
    return '';
  }
}
