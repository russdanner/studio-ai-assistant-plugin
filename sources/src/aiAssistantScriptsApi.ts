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
