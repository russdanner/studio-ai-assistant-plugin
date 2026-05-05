const { Fragment, jsx, jsxs } = craftercms.libs?.reactJsxRuntime;
const require$$2 = craftercms.libs?.reactJsxRuntime && Object.prototype.hasOwnProperty.call(craftercms.libs?.reactJsxRuntime, 'default') ? craftercms.libs?.reactJsxRuntime['default'] : craftercms.libs?.reactJsxRuntime;
const { useTheme, Box, CircularProgress, Typography, TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell, Stack, Tooltip, IconButton, Tabs, Tab, Button, Divider, TextField, Chip, FormControlLabel, Switch, Popover, paperClasses, GlobalStyles, Menu, MenuItem, ListItemIcon, ListItemText, Dialog, DialogContent, Alert, FormControl, InputLabel, Select, List, ListItem, Checkbox, ListItemButton, Badge, DialogTitle, DialogActions, Avatar, useMediaQuery } = craftercms.libs.MaterialUI;
const { useRef, useState, useEffect, useCallback, useMemo, useLayoutEffect } = craftercms.libs.React;
const MinimizedBar = craftercms.components.MinimizedBar && Object.prototype.hasOwnProperty.call(craftercms.components.MinimizedBar, 'default') ? craftercms.components.MinimizedBar['default'] : craftercms.components.MinimizedBar;
const DialogHeader = craftercms.components.DialogHeader && Object.prototype.hasOwnProperty.call(craftercms.components.DialogHeader, 'default') ? craftercms.components.DialogHeader['default'] : craftercms.components.DialogHeader;
const AlertDialog = craftercms.components.AlertDialog && Object.prototype.hasOwnProperty.call(craftercms.components.AlertDialog, 'default') ? craftercms.components.AlertDialog['default'] : craftercms.components.AlertDialog;
const PrimaryButton = craftercms.components.PrimaryButton && Object.prototype.hasOwnProperty.call(craftercms.components.PrimaryButton, 'default') ? craftercms.components.PrimaryButton['default'] : craftercms.components.PrimaryButton;
const SecondaryButton = craftercms.components.SecondaryButton && Object.prototype.hasOwnProperty.call(craftercms.components.SecondaryButton, 'default') ? craftercms.components.SecondaryButton['default'] : craftercms.components.SecondaryButton;
const { keyframes, useTheme: useTheme$1 } = craftercms.libs.MaterialUI;
const SendRounded = craftercms.utils.constants.components.get('@mui/icons-material/SendRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/SendRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/SendRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/SendRounded');
const StopRounded = craftercms.utils.constants.components.get('@mui/icons-material/StopRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/StopRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/StopRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/StopRounded');
const ContentCopyRounded = craftercms.utils.constants.components.get('@mui/icons-material/ContentCopyRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/ContentCopyRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/ContentCopyRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/ContentCopyRounded');
const ReplayRounded = craftercms.utils.constants.components.get('@mui/icons-material/ReplayRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/ReplayRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/ReplayRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/ReplayRounded');
const CloseRounded = craftercms.utils.constants.components.get('@mui/icons-material/CloseRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/CloseRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/CloseRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/CloseRounded');
const AddCommentRounded = craftercms.utils.constants.components.get('@mui/icons-material/AddCommentRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/AddCommentRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/AddCommentRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/AddCommentRounded');
const MicRounded = craftercms.utils.constants.components.get('@mui/icons-material/MicRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/MicRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/MicRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/MicRounded');
const AssignmentRounded = craftercms.utils.constants.components.get('@mui/icons-material/AssignmentRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/AssignmentRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/AssignmentRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/AssignmentRounded');
const { useSelector, useDispatch } = craftercms.libs.ReactRedux;
const { fetchContentXML } = craftercms.services.content;
const { fetchConfigurationXML } = craftercms.services.configuration;
const { createAction } = craftercms.libs.ReduxToolkit;
const { getHostToGuestBus, getHostToHostBus, getGuestToHostBus } = craftercms.utils.subjects;
const { firstValueFrom } = craftercms.libs.rxjs;
const { getGlobalHeaders } = craftercms.utils.ajax;
const { getXSRFToken, getRequestForgeryTokenHeaderName } = craftercms.utils.auth;
const DragIndicatorRounded = craftercms.utils.constants.components.get('@mui/icons-material/DragIndicatorRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/DragIndicatorRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/DragIndicatorRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/DragIndicatorRounded');
const { createSvgIcon: createSvgIcon$1 } = craftercms.libs.MaterialUI;
const { createPortal } = craftercms.libs.ReactDOM;
const ToolsPanelListItemButton = craftercms.components.ToolsPanelListItemButton && Object.prototype.hasOwnProperty.call(craftercms.components.ToolsPanelListItemButton, 'default') ? craftercms.components.ToolsPanelListItemButton['default'] : craftercms.components.ToolsPanelListItemButton;
const { createToolsPanelPage, createWidgetDescriptor } = craftercms.utils.state;
const RemoveRounded = craftercms.utils.constants.components.get('@mui/icons-material/RemoveRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/RemoveRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/RemoveRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/RemoveRounded');
const OpenInBrowserRounded = craftercms.utils.constants.components.get('@mui/icons-material/OpenInBrowserRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/OpenInBrowserRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/OpenInBrowserRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/OpenInBrowserRounded');
const Box$1 = craftercms.libs.MaterialUI.Box && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Box, 'default') ? craftercms.libs.MaterialUI.Box['default'] : craftercms.libs.MaterialUI.Box;
const SystemIcon = craftercms.components.SystemIcon && Object.prototype.hasOwnProperty.call(craftercms.components.SystemIcon, 'default') ? craftercms.components.SystemIcon['default'] : craftercms.components.SystemIcon;
const ChatRounded = craftercms.utils.constants.components.get('@mui/icons-material/ChatRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/ChatRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/ChatRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/ChatRounded');
const EditRounded = craftercms.utils.constants.components.get('@mui/icons-material/EditRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/EditRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/EditRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/EditRounded');
const SmartToyRounded = craftercms.utils.constants.components.get('@mui/icons-material/SmartToyRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/SmartToyRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/SmartToyRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/SmartToyRounded');
const SupportAgentRounded = craftercms.utils.constants.components.get('@mui/icons-material/SupportAgentRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/SupportAgentRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/SupportAgentRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/SupportAgentRounded');
const PsychologyRounded = craftercms.utils.constants.components.get('@mui/icons-material/PsychologyRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/PsychologyRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/PsychologyRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/PsychologyRounded');
const { useIntl } = craftercms.libs.ReactIntl;
const { getPossibleTranslation } = craftercms.utils.i18n;
const { fetchAll } = craftercms.services.users;
const { getInitials, toColor } = craftercms.utils.string;
const require$$0 = craftercms.libs.MaterialUI && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI, 'default') ? craftercms.libs.MaterialUI['default'] : craftercms.libs.MaterialUI;
const ChevronRightRounded = craftercms.utils.constants.components.get('@mui/icons-material/ChevronRightRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/ChevronRightRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/ChevronRightRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/ChevronRightRounded');
const InfoOutlined = craftercms.utils.constants.components.get('@mui/icons-material/InfoOutlined') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/InfoOutlined'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/InfoOutlined')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/InfoOutlined');
const ChevronLeftRounded = craftercms.utils.constants.components.get('@mui/icons-material/ChevronLeftRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/ChevronLeftRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/ChevronLeftRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/ChevronLeftRounded');
const ExpandMoreRounded = craftercms.utils.constants.components.get('@mui/icons-material/ExpandMoreRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/ExpandMoreRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/ExpandMoreRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/ExpandMoreRounded');

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function useActiveSiteId() {
  return useSelector((state) => state.sites.active);
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function useActiveUser() {
  return useSelector((state) => state.user);
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const useSelection =
  useSelector ;

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function useItemsByPath() {
  return useSelection((state) => state.content.itemsByPath);
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function usePreviewGuest() {
  return useSelector((state) => state.preview.guest);
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function useCurrentPreviewItem() {
  const { path } = usePreviewGuest() ?? {};
  const items = useItemsByPath();
  return items?.[path];
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const fetchGuestModel = /*#__PURE__*/ createAction('FETCH_GUEST_MODEL');
const updateFieldValueOperation = /*#__PURE__*/ createAction('UPDATE_FIELD_VALUE_OPERATION');
const assetDragStarted = /*#__PURE__*/ createAction('ASSET_DRAG_STARTED');
const assetDragEnded = /*#__PURE__*/ createAction('ASSET_DRAG_ENDED');
const contentTypesResponse = /*#__PURE__*/ createAction('CONTENT_TYPES_RESPONSE');
const reloadRequest = /*#__PURE__*/ createAction('RELOAD_REQUEST');
const contentTypeDropTargetsResponse = /*#__PURE__*/ createAction('CONTENT_TYPE_DROP_TARGETS_RESPONSE');
/*#__PURE__*/ createAction(contentTypeDropTargetsResponse.type);
const setPreviewEditMode = /*#__PURE__*/ createAction('EDIT_MODE_CHANGED');
// endregion
// region ICE panel stack
const pushIcePanelPage = /*#__PURE__*/ createAction('PUSH_ICE_PANEL_PAGE');

const CRAFTERQ_CHAT_USER_HEADER = 'X-CrafterQ-Chat-User';
/**
 * Thrown when the HTTP response body ends without an SSE frame carrying {@code metadata.completed} or
 * {@code metadata.error} — e.g. network drop, proxy reset, Studio thread died, or browser navigated away.
 */
class AiAssistantIncompleteStreamError extends Error {
    constructor() {
        super('The connection closed before the assistant finished sending the reply (Studio never sent a completion signal). What you see above is only partial output.');
        this.name = 'AiAssistantIncompleteStreamError';
    }
}
const CRAFTERQ_CHAT_USER_STORAGE_KEY = 'crafterq.chatUser';
function getStoredChatUser() {
    try {
        return window.localStorage.getItem(CRAFTERQ_CHAT_USER_STORAGE_KEY);
    }
    catch {
        return null;
    }
}
/**
 * Streams chat responses via SSE (text/event-stream) using fetch streaming.
 * This mirrors the widget behavior: POST /v1/chats?stream=true&agentId=...
 */
/**
 * Reads the Studio Experience Builder {@code crafterPreview} cookie when present (document.cookie).
 * Used to authorize {@code GetPreviewHtml} on the server via the chat POST body {@code previewToken}.
 */
function readCrafterPreviewTokenFromCookie() {
    if (typeof document === 'undefined')
        return undefined;
    const parts = document.cookie.split(';');
    for (const raw of parts) {
        const p = raw.trim();
        const low = p.toLowerCase();
        if (!low.startsWith('crafterpreview='))
            continue;
        const v = p.slice(p.indexOf('=') + 1).trim();
        if (!v)
            return undefined;
        try {
            return decodeURIComponent(v);
        }
        catch {
            return v;
        }
    }
    return undefined;
}
function buildStudioAuthHeaders() {
    const out = {};
    const global = getGlobalHeaders();
    for (const [k, v] of Object.entries(global)) {
        if (v != null && String(v).trim() !== '')
            out[k] = String(v);
    }
    const xsrfToken = getXSRFToken();
    const xsrfHeaderName = getRequestForgeryTokenHeaderName();
    if (xsrfToken && xsrfHeaderName)
        out[xsrfHeaderName] = xsrfToken;
    return out;
}
async function streamChat(args) {
    const { agentId, prompt, chatId, contentPath, contentTypeId, contentTypeLabel, studioPreviewPageUrl, authoringSurface, formEngineClientJsonApply, formEngineItemPath, llm, llmModel, imageModel, openAiApiKey, siteId, previewToken, enableTools, omitTools, expertSkills, translateBatchConcurrency, signal, onMessage, onRawSseDataLine } = args;
    const token = getStoredChatUser();
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
        ...buildStudioAuthHeaders()
    };
    if (token)
        headers[CRAFTERQ_CHAT_USER_HEADER] = token;
    let pluginStreamUrl = '/studio/api/2/plugin/script/plugins/org/craftercms/aiassistant/studio/aiassistant/ai/stream';
    if (siteId) {
        pluginStreamUrl += (pluginStreamUrl.includes('?') ? '&' : '?') + 'siteId=' + encodeURIComponent(siteId);
    }
    const requestBody = chatId != null && String(chatId).trim() !== ''
        ? { agentId, prompt: prompt ?? '', chatId }
        : { agentId, prompt: prompt ?? '' };
    if (siteId != null && String(siteId).trim() !== '')
        requestBody.siteId = String(siteId).trim();
    if (llm != null && String(llm).trim() !== '')
        requestBody.llm = llm;
    if (llmModel != null && String(llmModel).trim() !== '')
        requestBody.llmModel = String(llmModel).trim();
    if (imageModel != null && String(imageModel).trim() !== '')
        requestBody.imageModel = String(imageModel).trim();
    if (openAiApiKey != null && String(openAiApiKey).trim() !== '')
        requestBody.openAiApiKey = String(openAiApiKey).trim();
    if (contentPath != null && String(contentPath).trim() !== '')
        requestBody.contentPath = String(contentPath).trim();
    if (contentTypeId != null && String(contentTypeId).trim() !== '')
        requestBody.contentTypeId = String(contentTypeId).trim();
    if (contentTypeLabel != null && String(contentTypeLabel).trim() !== '')
        requestBody.contentTypeLabel = String(contentTypeLabel).trim();
    if (studioPreviewPageUrl != null && String(studioPreviewPageUrl).trim() !== '')
        requestBody.studioPreviewPageUrl = String(studioPreviewPageUrl).trim();
    if (authoringSurface != null && String(authoringSurface).trim() !== '')
        requestBody.authoringSurface = String(authoringSurface).trim();
    if (formEngineClientJsonApply === true)
        requestBody.formEngineClientJsonApply = true;
    if (formEngineItemPath != null && String(formEngineItemPath).trim() !== '')
        requestBody.formEngineItemPath = String(formEngineItemPath).trim();
    if (omitTools === true)
        requestBody.omitTools = true;
    if (enableTools === false ||
        (typeof enableTools === 'string' && ['false', '0', 'no'].includes(enableTools.trim().toLowerCase()))) {
        requestBody.enableTools = false;
    }
    if (previewToken != null && String(previewToken).trim() !== '') {
        requestBody.previewToken = String(previewToken).trim();
    }
    if (Array.isArray(expertSkills) && expertSkills.length > 0) {
        requestBody.expertSkills = expertSkills.map((s) => ({
            name: s.name,
            url: s.url,
            description: s.description
        }));
    }
    if (translateBatchConcurrency != null &&
        Number.isFinite(translateBatchConcurrency) &&
        translateBatchConcurrency >= 1 &&
        translateBatchConcurrency <= 64) {
        requestBody.translateBatchConcurrency = Math.floor(translateBatchConcurrency);
    }
    const streamFromResponse = async (res, failPrefix) => {
        if (!res.ok) {
            const text = await res.text().catch(() => '');
            throw new Error(`${failPrefix} failed (${res.status}): ${text || res.statusText}`);
        }
        const reader = res.body?.getReader();
        if (!reader)
            throw new Error(`${failPrefix}: no response body reader available`);
        const decoder = new TextDecoder('utf-8');
        let buffer = '';
        /** Server may keep the HTTP connection open after the last SSE event; resolve as soon as we see a terminal frame. */
        let sawTerminalEvent = false;
        const dispatchSseDataLine = (jsonLine) => {
            try {
                onRawSseDataLine?.(jsonLine);
                const evt = JSON.parse(jsonLine);
                onMessage(evt);
                const m = evt.metadata;
                if (m && (m.completed === true || m.error === true)) {
                    sawTerminalEvent = true;
                }
            }
            catch {
                // ignore malformed chunks
            }
        };
        const processBufferFrames = () => {
            let frameEnd;
            while ((frameEnd = buffer.indexOf('\n\n')) !== -1) {
                const frame = buffer.slice(0, frameEnd);
                buffer = buffer.slice(frameEnd + 2);
                const lines = frame.split('\n');
                for (const rawLine of lines) {
                    const line = rawLine.trimEnd();
                    if (!line.startsWith('data:'))
                        continue;
                    const data = line.slice('data:'.length).trim();
                    if (!data)
                        continue;
                    dispatchSseDataLine(data);
                }
            }
        };
        while (true) {
            const { value, done } = await reader.read();
            if (done)
                break;
            buffer += decoder.decode(value, { stream: true });
            processBufferFrames();
            if (sawTerminalEvent) {
                try {
                    await reader.cancel();
                }
                catch {
                    // ignore
                }
                return;
            }
        }
        if (!sawTerminalEvent) {
            throw new AiAssistantIncompleteStreamError();
        }
    };
    const res = await fetch(pluginStreamUrl, {
        method: 'POST',
        credentials: 'include',
        headers,
        body: JSON.stringify(requestBody),
        signal
    });
    await streamFromResponse(res, 'Plugin stream');
}

function ok$1() {}

function unreachable() {}

/**
 * @typedef Options
 *   Configuration for `stringify`.
 * @property {boolean} [padLeft=true]
 *   Whether to pad a space before a token.
 * @property {boolean} [padRight=false]
 *   Whether to pad a space after a token.
 */


/**
 * Serialize an array of strings or numbers to comma-separated tokens.
 *
 * @param {Array<string|number>} values
 *   List of tokens.
 * @param {Options} [options]
 *   Configuration for `stringify` (optional).
 * @returns {string}
 *   Comma-separated tokens.
 */
function stringify$1(values, options) {
  const settings = {};

  // Ensure the last empty entry is seen.
  const input = values[values.length - 1] === '' ? [...values, ''] : values;

  return input
    .join(
      (settings.padRight ? ' ' : '') +
        ',' +
        (settings.padLeft === false ? '' : ' ')
    )
    .trim()
}

/**
 * @typedef Options
 *   Configuration.
 * @property {boolean | null | undefined} [jsx=false]
 *   Support JSX identifiers (default: `false`).
 */

const nameRe = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
const nameReJsx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;

/** @type {Options} */
const emptyOptions$3 = {};

/**
 * Checks if the given value is a valid identifier name.
 *
 * @param {string} name
 *   Identifier to check.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {boolean}
 *   Whether `name` can be an identifier.
 */
function name(name, options) {
  const settings = emptyOptions$3;
  const re = settings.jsx ? nameReJsx : nameRe;
  return re.test(name)
}

/**
 * @typedef {import('hast').Nodes} Nodes
 */

// HTML whitespace expression.
// See <https://infra.spec.whatwg.org/#ascii-whitespace>.
const re = /[ \t\n\f\r]/g;

/**
 * Check if the given value is *inter-element whitespace*.
 *
 * @param {Nodes | string} thing
 *   Thing to check (`Node` or `string`).
 * @returns {boolean}
 *   Whether the `value` is inter-element whitespace (`boolean`): consisting of
 *   zero or more of space, tab (`\t`), line feed (`\n`), carriage return
 *   (`\r`), or form feed (`\f`); if a node is passed it must be a `Text` node,
 *   whose `value` field is checked.
 */
function whitespace(thing) {
  return typeof thing === 'object'
    ? thing.type === 'text'
      ? empty$1(thing.value)
      : false
    : empty$1(thing)
}

/**
 * @param {string} value
 * @returns {boolean}
 */
function empty$1(value) {
  return value.replace(re, '') === ''
}

/**
 * @import {Schema as SchemaType, Space} from 'property-information'
 */

/** @type {SchemaType} */
class Schema {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(property, normal, space) {
    this.normal = normal;
    this.property = property;

    if (space) {
      this.space = space;
    }
  }
}

Schema.prototype.normal = {};
Schema.prototype.property = {};
Schema.prototype.space = undefined;

/**
 * @import {Info, Space} from 'property-information'
 */


/**
 * @param {ReadonlyArray<Schema>} definitions
 *   Definitions.
 * @param {Space | undefined} [space]
 *   Space.
 * @returns {Schema}
 *   Schema.
 */
function merge(definitions, space) {
  /** @type {Record<string, Info>} */
  const property = {};
  /** @type {Record<string, string>} */
  const normal = {};

  for (const definition of definitions) {
    Object.assign(property, definition.property);
    Object.assign(normal, definition.normal);
  }

  return new Schema(property, normal, space)
}

/**
 * Get the cleaned case insensitive form of an attribute or property.
 *
 * @param {string} value
 *   An attribute-like or property-like name.
 * @returns {string}
 *   Value that can be used to look up the properly cased property on a
 *   `Schema`.
 */
function normalize$1(value) {
  return value.toLowerCase()
}

/**
 * @import {Info as InfoType} from 'property-information'
 */

/** @type {InfoType} */
class Info {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(property, attribute) {
    this.attribute = attribute;
    this.property = property;
  }
}

Info.prototype.attribute = '';
Info.prototype.booleanish = false;
Info.prototype.boolean = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.commaSeparated = false;
Info.prototype.defined = false;
Info.prototype.mustUseProperty = false;
Info.prototype.number = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.property = '';
Info.prototype.spaceSeparated = false;
Info.prototype.space = undefined;

let powers = 0;

const boolean = increment();
const booleanish = increment();
const overloadedBoolean = increment();
const number = increment();
const spaceSeparated = increment();
const commaSeparated = increment();
const commaOrSpaceSeparated = increment();

function increment() {
  return 2 ** ++powers
}

var types = /*#__PURE__*/Object.freeze({
  __proto__: null,
  boolean: boolean,
  booleanish: booleanish,
  commaOrSpaceSeparated: commaOrSpaceSeparated,
  commaSeparated: commaSeparated,
  number: number,
  overloadedBoolean: overloadedBoolean,
  spaceSeparated: spaceSeparated
});

/**
 * @import {Space} from 'property-information'
 */


const checks = /** @type {ReadonlyArray<keyof typeof types>} */ (
  Object.keys(types)
);

class DefinedInfo extends Info {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(property, attribute, mask, space) {
    let index = -1;

    super(property, attribute);

    mark(this, 'space', space);

    if (typeof mask === 'number') {
      while (++index < checks.length) {
        const check = checks[index];
        mark(this, checks[index], (mask & types[check]) === types[check]);
      }
    }
  }
}

DefinedInfo.prototype.defined = true;

/**
 * @template {keyof DefinedInfo} Key
 *   Key type.
 * @param {DefinedInfo} values
 *   Info.
 * @param {Key} key
 *   Key.
 * @param {DefinedInfo[Key]} value
 *   Value.
 * @returns {undefined}
 *   Nothing.
 */
function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}

/**
 * @import {Info, Space} from 'property-information'
 */


/**
 * @param {Definition} definition
 *   Definition.
 * @returns {Schema}
 *   Schema.
 */
function create(definition) {
  /** @type {Record<string, Info>} */
  const properties = {};
  /** @type {Record<string, string>} */
  const normals = {};

  for (const [property, value] of Object.entries(definition.properties)) {
    const info = new DefinedInfo(
      property,
      definition.transform(definition.attributes || {}, property),
      value,
      definition.space
    );

    if (
      definition.mustUseProperty &&
      definition.mustUseProperty.includes(property)
    ) {
      info.mustUseProperty = true;
    }

    properties[property] = info;

    normals[normalize$1(property)] = property;
    normals[normalize$1(info.attribute)] = property;
  }

  return new Schema(properties, normals, definition.space)
}

const aria$1 = create({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  },
  transform(_, property) {
    return property === 'role'
      ? property
      : 'aria-' + property.slice(4).toLowerCase()
  }
});

/**
 * @param {Record<string, string>} attributes
 *   Attributes.
 * @param {string} attribute
 *   Attribute.
 * @returns {string}
 *   Transformed attribute.
 */
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}

/**
 * @param {Record<string, string>} attributes
 *   Attributes.
 * @param {string} property
 *   Property.
 * @returns {string}
 *   Transformed property.
 */
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase())
}

const html$3 = create({
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    blocking: spaceSeparated,
    capture: null,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: overloadedBoolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: boolean,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shadowRootClonable: boolean,
    shadowRootDelegatesFocus: boolean,
    shadowRootMode: null,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    writingSuggestions: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: boolean, // Lists. Use CSS to reduce space between items instead
    declare: boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: number, // `<img>` and `<object>`
    leftMargin: number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: number, // `<body>`
    marginWidth: number, // `<body>`
    noResize: boolean, // `<frame>`
    noHref: boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  },
  space: 'html',
  transform: caseInsensitiveTransform
});

const svg$1 = create({
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    transformOrigin: 'transform-origin',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null, // SEMI_COLON_SEPARATED
    keySplines: null, // SEMI_COLON_SEPARATED
    keyTimes: null, // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: 'svg',
  transform: caseSensitiveTransform
});

const xlink = create({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: 'xlink',
  transform(_, property) {
    return 'xlink:' + property.slice(5).toLowerCase()
  }
});

const xmlns = create({
  attributes: {xmlnsxlink: 'xmlns:xlink'},
  properties: {xmlnsXLink: null, xmlns: null},
  space: 'xmlns',
  transform: caseInsensitiveTransform
});

const xml = create({
  properties: {xmlBase: null, xmlLang: null, xmlSpace: null},
  space: 'xml',
  transform(_, property) {
    return 'xml:' + property.slice(3).toLowerCase()
  }
});

/**
 * Special cases for React (`Record<string, string>`).
 *
 * `hast` is close to `React` but differs in a couple of cases.
 * To get a React property from a hast property,
 * check if it is in `hastToReact`.
 * If it is, use the corresponding value;
 * otherwise, use the hast property.
 *
 * @type {Record<string, string>}
 */
const hastToReact = {
  classId: 'classID',
  dataType: 'datatype',
  itemId: 'itemID',
  strokeDashArray: 'strokeDasharray',
  strokeDashOffset: 'strokeDashoffset',
  strokeLineCap: 'strokeLinecap',
  strokeLineJoin: 'strokeLinejoin',
  strokeMiterLimit: 'strokeMiterlimit',
  typeOf: 'typeof',
  xLinkActuate: 'xlinkActuate',
  xLinkArcRole: 'xlinkArcrole',
  xLinkHref: 'xlinkHref',
  xLinkRole: 'xlinkRole',
  xLinkShow: 'xlinkShow',
  xLinkTitle: 'xlinkTitle',
  xLinkType: 'xlinkType',
  xmlnsXLink: 'xmlnsXlink'
};

/**
 * @import {Schema} from 'property-information'
 */


const cap$1 = /[A-Z]/g;
const dash = /-[a-z]/g;
const valid = /^data[-\w.:]+$/i;

/**
 * Look up info on a property.
 *
 * In most cases the given `schema` contains info on the property.
 * All standard,
 * most legacy,
 * and some non-standard properties are supported.
 * For these cases,
 * the returned `Info` has hints about the value of the property.
 *
 * `name` can also be a valid data attribute or property,
 * in which case an `Info` object with the correctly cased `attribute` and
 * `property` is returned.
 *
 * `name` can be an unknown attribute,
 * in which case an `Info` object with `attribute` and `property` set to the
 * given name is returned.
 * It is not recommended to provide unsupported legacy or recently specced
 * properties.
 *
 *
 * @param {Schema} schema
 *   Schema;
 *   either the `html` or `svg` export.
 * @param {string} value
 *   An attribute-like or property-like name;
 *   it will be passed through `normalize` to hopefully find the correct info.
 * @returns {Info}
 *   Info.
 */
function find(schema, value) {
  const normal = normalize$1(value);
  let property = value;
  let Type = Info;

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === 'data' && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      // Turn it into a property.
      const rest = value.slice(5).replace(dash, camelcase);
      property = 'data' + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      // Turn it into an attribute.
      const rest = value.slice(4);

      if (!dash.test(rest)) {
        let dashes = rest.replace(cap$1, kebab);

        if (dashes.charAt(0) !== '-') {
          dashes = '-' + dashes;
        }

        value = 'data' + dashes;
      }
    }

    Type = DefinedInfo;
  }

  return new Type(property, value)
}

/**
 * @param {string} $0
 *   Value.
 * @returns {string}
 *   Kebab.
 */
function kebab($0) {
  return '-' + $0.toLowerCase()
}

/**
 * @param {string} $0
 *   Value.
 * @returns {string}
 *   Camel.
 */
function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}

// Note: types exposed from `index.d.ts`.

const html$2 = merge([aria$1, html$3, xlink, xmlns, xml], 'html');

const svg = merge([aria$1, svg$1, xlink, xmlns, xml], 'svg');

/**
 * Parse space-separated tokens to an array of strings.
 *
 * @param {string} value
 *   Space-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */

/**
 * Serialize an array of strings as space separated-tokens.
 *
 * @param {Array<string|number>} values
 *   List of tokens.
 * @returns {string}
 *   Space-separated tokens.
 */
function stringify(values) {
  return values.join(' ').trim()
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var cjs$2 = {};

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
function index$1 (style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) ; else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
}

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}

var cjs$1 = index$1;

var __importDefault$1 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(cjs$2, "__esModule", { value: true });
cjs$2.default = StyleToObject;
const inline_style_parser_1 = __importDefault$1(cjs$1);
/**
 * Parses inline style to object.
 *
 * @param style - Inline style.
 * @param iterator - Iterator.
 * @returns - Style object or null.
 *
 * @example Parsing inline style to object:
 *
 * ```js
 * import parse from 'style-to-object';
 * parse('line-height: 42;'); // { 'line-height': '42' }
 * ```
 */
function StyleToObject(style, iterator) {
    let styleObject = null;
    if (!style || typeof style !== 'string') {
        return styleObject;
    }
    const declarations = (0, inline_style_parser_1.default)(style);
    const hasIterator = typeof iterator === 'function';
    declarations.forEach((declaration) => {
        if (declaration.type !== 'declaration') {
            return;
        }
        const { property, value } = declaration;
        if (hasIterator) {
            iterator(property, value, declaration);
        }
        else if (value) {
            styleObject = styleObject || {};
            styleObject[property] = value;
        }
    });
    return styleObject;
}

var utilities = {};

Object.defineProperty(utilities, "__esModule", { value: true });
utilities.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9_-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
/**
 * Checks whether to skip camelCase.
 */
var skipCamelCase = function (property) {
    return !property ||
        NO_HYPHEN_REGEX.test(property) ||
        CUSTOM_PROPERTY_REGEX.test(property);
};
/**
 * Replacer that capitalizes first character.
 */
var capitalize = function (match, character) {
    return character.toUpperCase();
};
/**
 * Replacer that removes beginning hyphen of vendor prefix property.
 */
var trimHyphen = function (match, prefix) { return "".concat(prefix, "-"); };
/**
 * CamelCases a CSS property.
 */
var camelCase = function (property, options) {
    if (options === void 0) { options = {}; }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
        // `-ms` vendor prefix should not be capitalized
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    }
    else {
        // for non-React, remove first hyphen so vendor prefix is not capitalized
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
utilities.camelCase = camelCase;

var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var style_to_object_1 = __importDefault(cjs$2);
var utilities_1 = utilities;
/**
 * Parses CSS inline style to JavaScript object (camelCased).
 */
function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    (0, style_to_object_1.default)(style, function (property, value) {
        // skip CSS comment
        if (property && value) {
            output[(0, utilities_1.camelCase)(property, options)] = value;
        }
    });
    return output;
}
StyleToJS.default = StyleToJS;
var cjs = StyleToJS;


var styleToJs = /*@__PURE__*/getDefaultExportFromCjs(cjs);

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */

/**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 */

/**
 * Get the ending point of `node`.
 *
 * @param node
 *   Node.
 * @returns
 *   Point.
 */
const pointEnd = point$2('end');

/**
 * Get the starting point of `node`.
 *
 * @param node
 *   Node.
 * @returns
 *   Point.
 */
const pointStart = point$2('start');

/**
 * Get the positional info of `node`.
 *
 * @param {'end' | 'start'} type
 *   Side.
 * @returns
 *   Getter.
 */
function point$2(type) {
  return point

  /**
   * Get the point info of `node` at a bound side.
   *
   * @param {Node | NodeLike | null | undefined} [node]
   * @returns {Point | undefined}
   */
  function point(node) {
    const point = (node && node.position && node.position[type]) || {};

    if (
      typeof point.line === 'number' &&
      point.line > 0 &&
      typeof point.column === 'number' &&
      point.column > 0
    ) {
      return {
        line: point.line,
        column: point.column,
        offset:
          typeof point.offset === 'number' && point.offset > -1
            ? point.offset
            : undefined
      }
    }
  }
}

/**
 * Get the positional info of `node`.
 *
 * @param {Node | NodeLike | null | undefined} [node]
 *   Node.
 * @returns {Position | undefined}
 *   Position.
 */
function position$1(node) {
  const start = pointStart(node);
  const end = pointEnd(node);

  if (start && end) {
    return {start, end}
  }
}

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */

/**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 */

/**
 * Serialize the positional info of a point, position (start and end points),
 * or node.
 *
 * @param {Node | NodeLike | Point | PointLike | Position | PositionLike | null | undefined} [value]
 *   Node, position, or point.
 * @returns {string}
 *   Pretty printed positional info of a node (`string`).
 *
 *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)
 *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for
 *   column, `s` for `start`, and `e` for end.
 *   An empty string (`''`) is returned if the given value is neither `node`,
 *   `position`, nor `point`.
 */
function stringifyPosition(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return ''
  }

  // Node.
  if ('position' in value || 'type' in value) {
    return position(value.position)
  }

  // Position.
  if ('start' in value || 'end' in value) {
    return position(value)
  }

  // Point.
  if ('line' in value || 'column' in value) {
    return point$1(value)
  }

  // ?
  return ''
}

/**
 * @param {Point | PointLike | null | undefined} point
 * @returns {string}
 */
function point$1(point) {
  return index(point && point.line) + ':' + index(point && point.column)
}

/**
 * @param {Position | PositionLike | null | undefined} pos
 * @returns {string}
 */
function position(pos) {
  return point$1(pos && pos.start) + '-' + point$1(pos && pos.end)
}

/**
 * @param {number | null | undefined} value
 * @returns {number}
 */
function index(value) {
  return value && typeof value === 'number' ? value : 1
}

/**
 * @import {Node, Point, Position} from 'unist'
 */


/**
 * Message.
 */
class VFileMessage extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(causeOrReason, optionsOrParentOrPlace, origin) {
    super();

    if (typeof optionsOrParentOrPlace === 'string') {
      origin = optionsOrParentOrPlace;
      optionsOrParentOrPlace = undefined;
    }

    /** @type {string} */
    let reason = '';
    /** @type {Options} */
    let options = {};
    let legacyCause = false;

    if (optionsOrParentOrPlace) {
      // Point.
      if (
        'line' in optionsOrParentOrPlace &&
        'column' in optionsOrParentOrPlace
      ) {
        options = {place: optionsOrParentOrPlace};
      }
      // Position.
      else if (
        'start' in optionsOrParentOrPlace &&
        'end' in optionsOrParentOrPlace
      ) {
        options = {place: optionsOrParentOrPlace};
      }
      // Node.
      else if ('type' in optionsOrParentOrPlace) {
        options = {
          ancestors: [optionsOrParentOrPlace],
          place: optionsOrParentOrPlace.position
        };
      }
      // Options.
      else {
        options = {...optionsOrParentOrPlace};
      }
    }

    if (typeof causeOrReason === 'string') {
      reason = causeOrReason;
    }
    // Error.
    else if (!options.cause && causeOrReason) {
      legacyCause = true;
      reason = causeOrReason.message;
      options.cause = causeOrReason;
    }

    if (!options.ruleId && !options.source && typeof origin === 'string') {
      const index = origin.indexOf(':');

      if (index === -1) {
        options.ruleId = origin;
      } else {
        options.source = origin.slice(0, index);
        options.ruleId = origin.slice(index + 1);
      }
    }

    if (!options.place && options.ancestors && options.ancestors) {
      const parent = options.ancestors[options.ancestors.length - 1];

      if (parent) {
        options.place = parent.position;
      }
    }

    const start =
      options.place && 'start' in options.place
        ? options.place.start
        : options.place;

    /**
     * Stack of ancestor nodes surrounding the message.
     *
     * @type {Array<Node> | undefined}
     */
    this.ancestors = options.ancestors || undefined;

    /**
     * Original error cause of the message.
     *
     * @type {Error | undefined}
     */
    this.cause = options.cause || undefined;

    /**
     * Starting column of message.
     *
     * @type {number | undefined}
     */
    this.column = start ? start.column : undefined;

    /**
     * State of problem.
     *
     * * `true` — error, file not usable
     * * `false` — warning, change may be needed
     * * `undefined` — change likely not needed
     *
     * @type {boolean | null | undefined}
     */
    this.fatal = undefined;

    /**
     * Path of a file (used throughout the `VFile` ecosystem).
     *
     * @type {string | undefined}
     */
    this.file = '';

    // Field from `Error`.
    /**
     * Reason for message.
     *
     * @type {string}
     */
    this.message = reason;

    /**
     * Starting line of error.
     *
     * @type {number | undefined}
     */
    this.line = start ? start.line : undefined;

    // Field from `Error`.
    /**
     * Serialized positional info of message.
     *
     * On normal errors, this would be something like `ParseError`, buit in
     * `VFile` messages we use this space to show where an error happened.
     */
    this.name = stringifyPosition(options.place) || '1:1';

    /**
     * Place of message.
     *
     * @type {Point | Position | undefined}
     */
    this.place = options.place || undefined;

    /**
     * Reason for message, should use markdown.
     *
     * @type {string}
     */
    this.reason = this.message;

    /**
     * Category of message (example: `'my-rule'`).
     *
     * @type {string | undefined}
     */
    this.ruleId = options.ruleId || undefined;

    /**
     * Namespace of message (example: `'my-package'`).
     *
     * @type {string | undefined}
     */
    this.source = options.source || undefined;

    // Field from `Error`.
    /**
     * Stack of message.
     *
     * This is used by normal errors to show where something happened in
     * programming code, irrelevant for `VFile` messages,
     *
     * @type {string}
     */
    this.stack =
      legacyCause && options.cause && typeof options.cause.stack === 'string'
        ? options.cause.stack
        : '';

    // The following fields are “well known”.
    // Not standard.
    // Feel free to add other non-standard fields to your messages.

    /**
     * Specify the source value that’s being reported, which is deemed
     * incorrect.
     *
     * @type {string | undefined}
     */
    this.actual = undefined;

    /**
     * Suggest acceptable values that can be used instead of `actual`.
     *
     * @type {Array<string> | undefined}
     */
    this.expected = undefined;

    /**
     * Long form description of the message (you should use markdown).
     *
     * @type {string | undefined}
     */
    this.note = undefined;

    /**
     * Link to docs for the message.
     *
     * > 👉 **Note**: this must be an absolute URL that can be passed as `x`
     * > to `new URL(x)`.
     *
     * @type {string | undefined}
     */
    this.url = undefined;
  }
}

VFileMessage.prototype.file = '';
VFileMessage.prototype.name = '';
VFileMessage.prototype.reason = '';
VFileMessage.prototype.message = '';
VFileMessage.prototype.stack = '';
VFileMessage.prototype.column = undefined;
VFileMessage.prototype.line = undefined;
VFileMessage.prototype.ancestors = undefined;
VFileMessage.prototype.cause = undefined;
VFileMessage.prototype.fatal = undefined;
VFileMessage.prototype.place = undefined;
VFileMessage.prototype.ruleId = undefined;
VFileMessage.prototype.source = undefined;

/**
 * @import {Identifier, Literal, MemberExpression} from 'estree'
 * @import {Jsx, JsxDev, Options, Props} from 'hast-util-to-jsx-runtime'
 * @import {Element, Nodes, Parents, Root, Text} from 'hast'
 * @import {MdxFlowExpressionHast, MdxTextExpressionHast} from 'mdast-util-mdx-expression'
 * @import {MdxJsxFlowElementHast, MdxJsxTextElementHast} from 'mdast-util-mdx-jsx'
 * @import {MdxjsEsmHast} from 'mdast-util-mdxjs-esm'
 * @import {Position} from 'unist'
 * @import {Child, Create, Field, JsxElement, State, Style} from './types.js'
 */


// To do: next major: `Object.hasOwn`.
const own$5 = {}.hasOwnProperty;

/** @type {Map<string, number>} */
const emptyMap = new Map();

const cap = /[A-Z]/g;

// `react-dom` triggers a warning for *any* white space in tables.
// To follow GFM, `mdast-util-to-hast` injects line endings between elements.
// Other tools might do so too, but they don’t do here, so we remove all of
// that.

// See: <https://github.com/facebook/react/pull/7081>.
// See: <https://github.com/facebook/react/pull/7515>.
// See: <https://github.com/remarkjs/remark-react/issues/64>.
// See: <https://github.com/rehypejs/rehype-react/pull/29>.
// See: <https://github.com/rehypejs/rehype-react/pull/32>.
// See: <https://github.com/rehypejs/rehype-react/pull/45>.
const tableElements = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']);

const tableCellElement = new Set(['td', 'th']);

const docs = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';

/**
 * Transform a hast tree to preact, react, solid, svelte, vue, etc.,
 * with an automatic JSX runtime.
 *
 * @param {Nodes} tree
 *   Tree to transform.
 * @param {Options} options
 *   Configuration (required).
 * @returns {JsxElement}
 *   JSX element.
 */

function toJsxRuntime(tree, options) {
  if (!options || options.Fragment === undefined) {
    throw new TypeError('Expected `Fragment` in options')
  }

  const filePath = options.filePath || undefined;
  /** @type {Create} */
  let create;

  if (options.development) {
    if (typeof options.jsxDEV !== 'function') {
      throw new TypeError(
        'Expected `jsxDEV` in options when `development: true`'
      )
    }

    create = developmentCreate(filePath, options.jsxDEV);
  } else {
    if (typeof options.jsx !== 'function') {
      throw new TypeError('Expected `jsx` in production options')
    }

    if (typeof options.jsxs !== 'function') {
      throw new TypeError('Expected `jsxs` in production options')
    }

    create = productionCreate(filePath, options.jsx, options.jsxs);
  }

  /** @type {State} */
  const state = {
    Fragment: options.Fragment,
    ancestors: [],
    components: options.components || {},
    create,
    elementAttributeNameCase: options.elementAttributeNameCase || 'react',
    evaluater: options.createEvaluater ? options.createEvaluater() : undefined,
    filePath,
    ignoreInvalidStyle: options.ignoreInvalidStyle || false,
    passKeys: options.passKeys !== false,
    passNode: options.passNode || false,
    schema: options.space === 'svg' ? svg : html$2,
    stylePropertyNameCase: options.stylePropertyNameCase || 'dom',
    tableCellAlignToStyle: options.tableCellAlignToStyle !== false
  };

  const result = one$1(state, tree, undefined);

  // JSX element.
  if (result && typeof result !== 'string') {
    return result
  }

  // Text node or something that turned into nothing.
  return state.create(
    tree,
    state.Fragment,
    {children: result || undefined},
    undefined
  )
}

/**
 * Transform a node.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Nodes} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */
function one$1(state, node, key) {
  if (node.type === 'element') {
    return element$1(state, node, key)
  }

  if (node.type === 'mdxFlowExpression' || node.type === 'mdxTextExpression') {
    return mdxExpression(state, node)
  }

  if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
    return mdxJsxElement(state, node, key)
  }

  if (node.type === 'mdxjsEsm') {
    return mdxEsm(state, node)
  }

  if (node.type === 'root') {
    return root$3(state, node, key)
  }

  if (node.type === 'text') {
    return text$6(state, node)
  }
}

/**
 * Handle element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Element} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */
function element$1(state, node, key) {
  const parentSchema = state.schema;
  let schema = parentSchema;

  if (node.tagName.toLowerCase() === 'svg' && parentSchema.space === 'html') {
    schema = svg;
    state.schema = schema;
  }

  state.ancestors.push(node);

  const type = findComponentFromName(state, node.tagName, false);
  const props = createElementProps(state, node);
  let children = createChildren(state, node);

  if (tableElements.has(node.tagName)) {
    children = children.filter(function (child) {
      return typeof child === 'string' ? !whitespace(child) : true
    });
  }

  addNode(state, props, type, node);
  addChildren(props, children);

  // Restore.
  state.ancestors.pop();
  state.schema = parentSchema;

  return state.create(node, type, props, key)
}

/**
 * Handle MDX expression.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxFlowExpressionHast | MdxTextExpressionHast} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */
function mdxExpression(state, node) {
  if (node.data && node.data.estree && state.evaluater) {
    const program = node.data.estree;
    const expression = program.body[0];
    ok$1(expression.type === 'ExpressionStatement');

    // Assume result is a child.
    return /** @type {Child | undefined} */ (
      state.evaluater.evaluateExpression(expression.expression)
    )
  }

  crashEstree(state, node.position);
}

/**
 * Handle MDX ESM.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxjsEsmHast} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */
function mdxEsm(state, node) {
  if (node.data && node.data.estree && state.evaluater) {
    // Assume result is a child.
    return /** @type {Child | undefined} */ (
      state.evaluater.evaluateProgram(node.data.estree)
    )
  }

  crashEstree(state, node.position);
}

/**
 * Handle MDX JSX.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */
function mdxJsxElement(state, node, key) {
  const parentSchema = state.schema;
  let schema = parentSchema;

  if (node.name === 'svg' && parentSchema.space === 'html') {
    schema = svg;
    state.schema = schema;
  }

  state.ancestors.push(node);

  const type =
    node.name === null
      ? state.Fragment
      : findComponentFromName(state, node.name, true);
  const props = createJsxElementProps(state, node);
  const children = createChildren(state, node);

  addNode(state, props, type, node);
  addChildren(props, children);

  // Restore.
  state.ancestors.pop();
  state.schema = parentSchema;

  return state.create(node, type, props, key)
}

/**
 * Handle root.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Root} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */
function root$3(state, node, key) {
  /** @type {Props} */
  const props = {};

  addChildren(props, createChildren(state, node));

  return state.create(node, state.Fragment, props, key)
}

/**
 * Handle text.
 *
 * @param {State} _
 *   Info passed around.
 * @param {Text} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */
function text$6(_, node) {
  return node.value
}

/**
 * Add `node` to props.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Props} props
 *   Props.
 * @param {unknown} type
 *   Type.
 * @param {Element | MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Node.
 * @returns {undefined}
 *   Nothing.
 */
function addNode(state, props, type, node) {
  // If this is swapped out for a component:
  if (typeof type !== 'string' && type !== state.Fragment && state.passNode) {
    props.node = node;
  }
}

/**
 * Add children to props.
 *
 * @param {Props} props
 *   Props.
 * @param {Array<Child>} children
 *   Children.
 * @returns {undefined}
 *   Nothing.
 */
function addChildren(props, children) {
  if (children.length > 0) {
    const value = children.length > 1 ? children : children[0];

    if (value) {
      props.children = value;
    }
  }
}

/**
 * @param {string | undefined} _
 *   Path to file.
 * @param {Jsx} jsx
 *   Dynamic.
 * @param {Jsx} jsxs
 *   Static.
 * @returns {Create}
 *   Create a production element.
 */
function productionCreate(_, jsx, jsxs) {
  return create
  /** @type {Create} */
  function create(_, type, props, key) {
    // Only an array when there are 2 or more children.
    const isStaticChildren = Array.isArray(props.children);
    const fn = isStaticChildren ? jsxs : jsx;
    return key ? fn(type, props, key) : fn(type, props)
  }
}

/**
 * @param {string | undefined} filePath
 *   Path to file.
 * @param {JsxDev} jsxDEV
 *   Development.
 * @returns {Create}
 *   Create a development element.
 */
function developmentCreate(filePath, jsxDEV) {
  return create
  /** @type {Create} */
  function create(node, type, props, key) {
    // Only an array when there are 2 or more children.
    const isStaticChildren = Array.isArray(props.children);
    const point = pointStart(node);
    return jsxDEV(
      type,
      props,
      key,
      isStaticChildren,
      {
        columnNumber: point ? point.column - 1 : undefined,
        fileName: filePath,
        lineNumber: point ? point.line : undefined
      },
      undefined
    )
  }
}

/**
 * Create props from an element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Element} node
 *   Current element.
 * @returns {Props}
 *   Props.
 */
function createElementProps(state, node) {
  /** @type {Props} */
  const props = {};
  /** @type {string | undefined} */
  let alignValue;
  /** @type {string} */
  let prop;

  for (prop in node.properties) {
    if (prop !== 'children' && own$5.call(node.properties, prop)) {
      const result = createProperty(state, prop, node.properties[prop]);

      if (result) {
        const [key, value] = result;

        if (
          state.tableCellAlignToStyle &&
          key === 'align' &&
          typeof value === 'string' &&
          tableCellElement.has(node.tagName)
        ) {
          alignValue = value;
        } else {
          props[key] = value;
        }
      }
    }
  }

  if (alignValue) {
    // Assume style is an object.
    const style = /** @type {Style} */ (props.style || (props.style = {}));
    style[state.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] =
      alignValue;
  }

  return props
}

/**
 * Create props from a JSX element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Current JSX element.
 * @returns {Props}
 *   Props.
 */
function createJsxElementProps(state, node) {
  /** @type {Props} */
  const props = {};

  for (const attribute of node.attributes) {
    if (attribute.type === 'mdxJsxExpressionAttribute') {
      if (attribute.data && attribute.data.estree && state.evaluater) {
        const program = attribute.data.estree;
        const expression = program.body[0];
        ok$1(expression.type === 'ExpressionStatement');
        const objectExpression = expression.expression;
        ok$1(objectExpression.type === 'ObjectExpression');
        const property = objectExpression.properties[0];
        ok$1(property.type === 'SpreadElement');

        Object.assign(
          props,
          state.evaluater.evaluateExpression(property.argument)
        );
      } else {
        crashEstree(state, node.position);
      }
    } else {
      // For JSX, the author is responsible of passing in the correct values.
      const name = attribute.name;
      /** @type {unknown} */
      let value;

      if (attribute.value && typeof attribute.value === 'object') {
        if (
          attribute.value.data &&
          attribute.value.data.estree &&
          state.evaluater
        ) {
          const program = attribute.value.data.estree;
          const expression = program.body[0];
          ok$1(expression.type === 'ExpressionStatement');
          value = state.evaluater.evaluateExpression(expression.expression);
        } else {
          crashEstree(state, node.position);
        }
      } else {
        value = attribute.value === null ? true : attribute.value;
      }

      // Assume a prop.
      props[name] = /** @type {Props[keyof Props]} */ (value);
    }
  }

  return props
}

/**
 * Create children.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Parents} node
 *   Current element.
 * @returns {Array<Child>}
 *   Children.
 */
function createChildren(state, node) {
  /** @type {Array<Child>} */
  const children = [];
  let index = -1;
  /** @type {Map<string, number>} */
  // Note: test this when Solid doesn’t want to merge my upcoming PR.
  /* c8 ignore next */
  const countsByName = state.passKeys ? new Map() : emptyMap;

  while (++index < node.children.length) {
    const child = node.children[index];
    /** @type {string | undefined} */
    let key;

    if (state.passKeys) {
      const name =
        child.type === 'element'
          ? child.tagName
          : child.type === 'mdxJsxFlowElement' ||
              child.type === 'mdxJsxTextElement'
            ? child.name
            : undefined;

      if (name) {
        const count = countsByName.get(name) || 0;
        key = name + '-' + count;
        countsByName.set(name, count + 1);
      }
    }

    const result = one$1(state, child, key);
    if (result !== undefined) children.push(result);
  }

  return children
}

/**
 * Handle a property.
 *
 * @param {State} state
 *   Info passed around.
 * @param {string} prop
 *   Key.
 * @param {Array<number | string> | boolean | number | string | null | undefined} value
 *   hast property value.
 * @returns {Field | undefined}
 *   Field for runtime, optional.
 */
function createProperty(state, prop, value) {
  const info = find(state.schema, prop);

  // Ignore nullish and `NaN` values.
  if (
    value === null ||
    value === undefined ||
    (typeof value === 'number' && Number.isNaN(value))
  ) {
    return
  }

  if (Array.isArray(value)) {
    // Accept `array`.
    // Most props are space-separated.
    value = info.commaSeparated ? stringify$1(value) : stringify(value);
  }

  // React only accepts `style` as object.
  if (info.property === 'style') {
    let styleObject =
      typeof value === 'object' ? value : parseStyle(state, String(value));

    if (state.stylePropertyNameCase === 'css') {
      styleObject = transformStylesToCssCasing(styleObject);
    }

    return ['style', styleObject]
  }

  return [
    state.elementAttributeNameCase === 'react' && info.space
      ? hastToReact[info.property] || info.property
      : info.attribute,
    value
  ]
}

/**
 * Parse a CSS declaration to an object.
 *
 * @param {State} state
 *   Info passed around.
 * @param {string} value
 *   CSS declarations.
 * @returns {Style}
 *   Properties.
 * @throws
 *   Throws `VFileMessage` when CSS cannot be parsed.
 */
function parseStyle(state, value) {
  try {
    return styleToJs(value, {reactCompat: true})
  } catch (error) {
    if (state.ignoreInvalidStyle) {
      return {}
    }

    const cause = /** @type {Error} */ (error);
    const message = new VFileMessage('Cannot parse `style` attribute', {
      ancestors: state.ancestors,
      cause,
      ruleId: 'style',
      source: 'hast-util-to-jsx-runtime'
    });
    message.file = state.filePath || undefined;
    message.url = docs + '#cannot-parse-style-attribute';

    throw message
  }
}

/**
 * Create a JSX name from a string.
 *
 * @param {State} state
 *   To do.
 * @param {string} name
 *   Name.
 * @param {boolean} allowExpression
 *   Allow member expressions and identifiers.
 * @returns {unknown}
 *   To do.
 */
function findComponentFromName(state, name$1, allowExpression) {
  /** @type {Identifier | Literal | MemberExpression} */
  let result;

  if (!allowExpression) {
    result = {type: 'Literal', value: name$1};
  } else if (name$1.includes('.')) {
    const identifiers = name$1.split('.');
    let index = -1;
    /** @type {Identifier | Literal | MemberExpression | undefined} */
    let node;

    while (++index < identifiers.length) {
      /** @type {Identifier | Literal} */
      const prop = name(identifiers[index])
        ? {type: 'Identifier', name: identifiers[index]}
        : {type: 'Literal', value: identifiers[index]};
      node = node
        ? {
            type: 'MemberExpression',
            object: node,
            property: prop,
            computed: Boolean(index && prop.type === 'Literal'),
            optional: false
          }
        : prop;
    }
    result = node;
  } else {
    result =
      name(name$1) && !/^[a-z]/.test(name$1)
        ? {type: 'Identifier', name: name$1}
        : {type: 'Literal', value: name$1};
  }

  // Only literals can be passed in `components` currently.
  // No identifiers / member expressions.
  if (result.type === 'Literal') {
    const name = /** @type {string | number} */ (result.value);
    return own$5.call(state.components, name) ? state.components[name] : name
  }

  // Assume component.
  if (state.evaluater) {
    return state.evaluater.evaluateExpression(result)
  }

  crashEstree(state);
}

/**
 * @param {State} state
 * @param {Position | undefined} [place]
 * @returns {never}
 */
function crashEstree(state, place) {
  const message = new VFileMessage(
    'Cannot handle MDX estrees without `createEvaluater`',
    {
      ancestors: state.ancestors,
      place,
      ruleId: 'mdx-estree',
      source: 'hast-util-to-jsx-runtime'
    }
  );
  message.file = state.filePath || undefined;
  message.url = docs + '#cannot-handle-mdx-estrees-without-createevaluater';

  throw message
}

/**
 * Transform a DOM casing style object to a CSS casing style object.
 *
 * @param {Style} domCasing
 * @returns {Style}
 */
function transformStylesToCssCasing(domCasing) {
  /** @type {Style} */
  const cssCasing = {};
  /** @type {string} */
  let from;

  for (from in domCasing) {
    if (own$5.call(domCasing, from)) {
      cssCasing[transformStyleToCssCasing(from)] = domCasing[from];
    }
  }

  return cssCasing
}

/**
 * Transform a DOM casing style field to a CSS casing style field.
 *
 * @param {string} from
 * @returns {string}
 */
function transformStyleToCssCasing(from) {
  let to = from.replace(cap, toDash);
  // Handle `ms-xxx` -> `-ms-xxx`.
  if (to.slice(0, 3) === 'ms-') to = '-' + to;
  return to
}

/**
 * Make `$0` dash cased.
 *
 * @param {string} $0
 *   Capitalized ASCII leter.
 * @returns {string}
 *   Dash and lower letter.
 */
function toDash($0) {
  return '-' + $0.toLowerCase()
}

/**
 * HTML URL properties.
 *
 * Each key is a property name and each value is a list of tag names it applies
 * to or `null` if it applies to all elements.
 *
 * @type {Record<string, Array<string> | null>}
 */
const urlAttributes = {
  action: ['form'],
  cite: ['blockquote', 'del', 'ins', 'q'],
  data: ['object'],
  formAction: ['button', 'input'],
  href: ['a', 'area', 'base', 'link'],
  icon: ['menuitem'],
  itemId: null,
  manifest: ['html'],
  ping: ['a', 'area'],
  poster: ['video'],
  src: [
    'audio',
    'embed',
    'iframe',
    'img',
    'input',
    'script',
    'source',
    'track',
    'video'
  ]
};

/**
 * @typedef {import('mdast').Nodes} Nodes
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [includeImageAlt=true]
 *   Whether to use `alt` for `image`s (default: `true`).
 * @property {boolean | null | undefined} [includeHtml=true]
 *   Whether to use `value` of HTML (default: `true`).
 */

/** @type {Options} */
const emptyOptions$2 = {};

/**
 * Get the text content of a node or list of nodes.
 *
 * Prefers the node’s plain-text fields, otherwise serializes its children,
 * and if the given value is an array, serialize the nodes in it.
 *
 * @param {unknown} [value]
 *   Thing to serialize, typically `Node`.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {string}
 *   Serialized `value`.
 */
function toString$1(value, options) {
  const settings = emptyOptions$2;
  const includeImageAlt =
    typeof settings.includeImageAlt === 'boolean'
      ? settings.includeImageAlt
      : true;
  const includeHtml =
    typeof settings.includeHtml === 'boolean' ? settings.includeHtml : true;

  return one(value, includeImageAlt, includeHtml)
}

/**
 * One node or several nodes.
 *
 * @param {unknown} value
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized node.
 */
function one(value, includeImageAlt, includeHtml) {
  if (node(value)) {
    if ('value' in value) {
      return value.type === 'html' && !includeHtml ? '' : value.value
    }

    if (includeImageAlt && 'alt' in value && value.alt) {
      return value.alt
    }

    if ('children' in value) {
      return all(value.children, includeImageAlt, includeHtml)
    }
  }

  if (Array.isArray(value)) {
    return all(value, includeImageAlt, includeHtml)
  }

  return ''
}

/**
 * Serialize a list of nodes.
 *
 * @param {Array<unknown>} values
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized nodes.
 */
function all(values, includeImageAlt, includeHtml) {
  /** @type {Array<string>} */
  const result = [];
  let index = -1;

  while (++index < values.length) {
    result[index] = one(values[index], includeImageAlt, includeHtml);
  }

  return result.join('')
}

/**
 * Check if `value` looks like a node.
 *
 * @param {unknown} value
 *   Thing.
 * @returns {value is Nodes}
 *   Whether `value` is a node.
 */
function node(value) {
  return Boolean(value && typeof value === 'object')
}

/**
 * Map of named character references.
 *
 * @type {Record<string, string>}
 */
const characterEntities = {
  AElig: 'Æ',
  AMP: '&',
  Aacute: 'Á',
  Abreve: 'Ă',
  Acirc: 'Â',
  Acy: 'А',
  Afr: '𝔄',
  Agrave: 'À',
  Alpha: 'Α',
  Amacr: 'Ā',
  And: '⩓',
  Aogon: 'Ą',
  Aopf: '𝔸',
  ApplyFunction: '⁡',
  Aring: 'Å',
  Ascr: '𝒜',
  Assign: '≔',
  Atilde: 'Ã',
  Auml: 'Ä',
  Backslash: '∖',
  Barv: '⫧',
  Barwed: '⌆',
  Bcy: 'Б',
  Because: '∵',
  Bernoullis: 'ℬ',
  Beta: 'Β',
  Bfr: '𝔅',
  Bopf: '𝔹',
  Breve: '˘',
  Bscr: 'ℬ',
  Bumpeq: '≎',
  CHcy: 'Ч',
  COPY: '©',
  Cacute: 'Ć',
  Cap: '⋒',
  CapitalDifferentialD: 'ⅅ',
  Cayleys: 'ℭ',
  Ccaron: 'Č',
  Ccedil: 'Ç',
  Ccirc: 'Ĉ',
  Cconint: '∰',
  Cdot: 'Ċ',
  Cedilla: '¸',
  CenterDot: '·',
  Cfr: 'ℭ',
  Chi: 'Χ',
  CircleDot: '⊙',
  CircleMinus: '⊖',
  CirclePlus: '⊕',
  CircleTimes: '⊗',
  ClockwiseContourIntegral: '∲',
  CloseCurlyDoubleQuote: '”',
  CloseCurlyQuote: '’',
  Colon: '∷',
  Colone: '⩴',
  Congruent: '≡',
  Conint: '∯',
  ContourIntegral: '∮',
  Copf: 'ℂ',
  Coproduct: '∐',
  CounterClockwiseContourIntegral: '∳',
  Cross: '⨯',
  Cscr: '𝒞',
  Cup: '⋓',
  CupCap: '≍',
  DD: 'ⅅ',
  DDotrahd: '⤑',
  DJcy: 'Ђ',
  DScy: 'Ѕ',
  DZcy: 'Џ',
  Dagger: '‡',
  Darr: '↡',
  Dashv: '⫤',
  Dcaron: 'Ď',
  Dcy: 'Д',
  Del: '∇',
  Delta: 'Δ',
  Dfr: '𝔇',
  DiacriticalAcute: '´',
  DiacriticalDot: '˙',
  DiacriticalDoubleAcute: '˝',
  DiacriticalGrave: '`',
  DiacriticalTilde: '˜',
  Diamond: '⋄',
  DifferentialD: 'ⅆ',
  Dopf: '𝔻',
  Dot: '¨',
  DotDot: '⃜',
  DotEqual: '≐',
  DoubleContourIntegral: '∯',
  DoubleDot: '¨',
  DoubleDownArrow: '⇓',
  DoubleLeftArrow: '⇐',
  DoubleLeftRightArrow: '⇔',
  DoubleLeftTee: '⫤',
  DoubleLongLeftArrow: '⟸',
  DoubleLongLeftRightArrow: '⟺',
  DoubleLongRightArrow: '⟹',
  DoubleRightArrow: '⇒',
  DoubleRightTee: '⊨',
  DoubleUpArrow: '⇑',
  DoubleUpDownArrow: '⇕',
  DoubleVerticalBar: '∥',
  DownArrow: '↓',
  DownArrowBar: '⤓',
  DownArrowUpArrow: '⇵',
  DownBreve: '̑',
  DownLeftRightVector: '⥐',
  DownLeftTeeVector: '⥞',
  DownLeftVector: '↽',
  DownLeftVectorBar: '⥖',
  DownRightTeeVector: '⥟',
  DownRightVector: '⇁',
  DownRightVectorBar: '⥗',
  DownTee: '⊤',
  DownTeeArrow: '↧',
  Downarrow: '⇓',
  Dscr: '𝒟',
  Dstrok: 'Đ',
  ENG: 'Ŋ',
  ETH: 'Ð',
  Eacute: 'É',
  Ecaron: 'Ě',
  Ecirc: 'Ê',
  Ecy: 'Э',
  Edot: 'Ė',
  Efr: '𝔈',
  Egrave: 'È',
  Element: '∈',
  Emacr: 'Ē',
  EmptySmallSquare: '◻',
  EmptyVerySmallSquare: '▫',
  Eogon: 'Ę',
  Eopf: '𝔼',
  Epsilon: 'Ε',
  Equal: '⩵',
  EqualTilde: '≂',
  Equilibrium: '⇌',
  Escr: 'ℰ',
  Esim: '⩳',
  Eta: 'Η',
  Euml: 'Ë',
  Exists: '∃',
  ExponentialE: 'ⅇ',
  Fcy: 'Ф',
  Ffr: '𝔉',
  FilledSmallSquare: '◼',
  FilledVerySmallSquare: '▪',
  Fopf: '𝔽',
  ForAll: '∀',
  Fouriertrf: 'ℱ',
  Fscr: 'ℱ',
  GJcy: 'Ѓ',
  GT: '>',
  Gamma: 'Γ',
  Gammad: 'Ϝ',
  Gbreve: 'Ğ',
  Gcedil: 'Ģ',
  Gcirc: 'Ĝ',
  Gcy: 'Г',
  Gdot: 'Ġ',
  Gfr: '𝔊',
  Gg: '⋙',
  Gopf: '𝔾',
  GreaterEqual: '≥',
  GreaterEqualLess: '⋛',
  GreaterFullEqual: '≧',
  GreaterGreater: '⪢',
  GreaterLess: '≷',
  GreaterSlantEqual: '⩾',
  GreaterTilde: '≳',
  Gscr: '𝒢',
  Gt: '≫',
  HARDcy: 'Ъ',
  Hacek: 'ˇ',
  Hat: '^',
  Hcirc: 'Ĥ',
  Hfr: 'ℌ',
  HilbertSpace: 'ℋ',
  Hopf: 'ℍ',
  HorizontalLine: '─',
  Hscr: 'ℋ',
  Hstrok: 'Ħ',
  HumpDownHump: '≎',
  HumpEqual: '≏',
  IEcy: 'Е',
  IJlig: 'Ĳ',
  IOcy: 'Ё',
  Iacute: 'Í',
  Icirc: 'Î',
  Icy: 'И',
  Idot: 'İ',
  Ifr: 'ℑ',
  Igrave: 'Ì',
  Im: 'ℑ',
  Imacr: 'Ī',
  ImaginaryI: 'ⅈ',
  Implies: '⇒',
  Int: '∬',
  Integral: '∫',
  Intersection: '⋂',
  InvisibleComma: '⁣',
  InvisibleTimes: '⁢',
  Iogon: 'Į',
  Iopf: '𝕀',
  Iota: 'Ι',
  Iscr: 'ℐ',
  Itilde: 'Ĩ',
  Iukcy: 'І',
  Iuml: 'Ï',
  Jcirc: 'Ĵ',
  Jcy: 'Й',
  Jfr: '𝔍',
  Jopf: '𝕁',
  Jscr: '𝒥',
  Jsercy: 'Ј',
  Jukcy: 'Є',
  KHcy: 'Х',
  KJcy: 'Ќ',
  Kappa: 'Κ',
  Kcedil: 'Ķ',
  Kcy: 'К',
  Kfr: '𝔎',
  Kopf: '𝕂',
  Kscr: '𝒦',
  LJcy: 'Љ',
  LT: '<',
  Lacute: 'Ĺ',
  Lambda: 'Λ',
  Lang: '⟪',
  Laplacetrf: 'ℒ',
  Larr: '↞',
  Lcaron: 'Ľ',
  Lcedil: 'Ļ',
  Lcy: 'Л',
  LeftAngleBracket: '⟨',
  LeftArrow: '←',
  LeftArrowBar: '⇤',
  LeftArrowRightArrow: '⇆',
  LeftCeiling: '⌈',
  LeftDoubleBracket: '⟦',
  LeftDownTeeVector: '⥡',
  LeftDownVector: '⇃',
  LeftDownVectorBar: '⥙',
  LeftFloor: '⌊',
  LeftRightArrow: '↔',
  LeftRightVector: '⥎',
  LeftTee: '⊣',
  LeftTeeArrow: '↤',
  LeftTeeVector: '⥚',
  LeftTriangle: '⊲',
  LeftTriangleBar: '⧏',
  LeftTriangleEqual: '⊴',
  LeftUpDownVector: '⥑',
  LeftUpTeeVector: '⥠',
  LeftUpVector: '↿',
  LeftUpVectorBar: '⥘',
  LeftVector: '↼',
  LeftVectorBar: '⥒',
  Leftarrow: '⇐',
  Leftrightarrow: '⇔',
  LessEqualGreater: '⋚',
  LessFullEqual: '≦',
  LessGreater: '≶',
  LessLess: '⪡',
  LessSlantEqual: '⩽',
  LessTilde: '≲',
  Lfr: '𝔏',
  Ll: '⋘',
  Lleftarrow: '⇚',
  Lmidot: 'Ŀ',
  LongLeftArrow: '⟵',
  LongLeftRightArrow: '⟷',
  LongRightArrow: '⟶',
  Longleftarrow: '⟸',
  Longleftrightarrow: '⟺',
  Longrightarrow: '⟹',
  Lopf: '𝕃',
  LowerLeftArrow: '↙',
  LowerRightArrow: '↘',
  Lscr: 'ℒ',
  Lsh: '↰',
  Lstrok: 'Ł',
  Lt: '≪',
  Map: '⤅',
  Mcy: 'М',
  MediumSpace: ' ',
  Mellintrf: 'ℳ',
  Mfr: '𝔐',
  MinusPlus: '∓',
  Mopf: '𝕄',
  Mscr: 'ℳ',
  Mu: 'Μ',
  NJcy: 'Њ',
  Nacute: 'Ń',
  Ncaron: 'Ň',
  Ncedil: 'Ņ',
  Ncy: 'Н',
  NegativeMediumSpace: '​',
  NegativeThickSpace: '​',
  NegativeThinSpace: '​',
  NegativeVeryThinSpace: '​',
  NestedGreaterGreater: '≫',
  NestedLessLess: '≪',
  NewLine: '\n',
  Nfr: '𝔑',
  NoBreak: '⁠',
  NonBreakingSpace: ' ',
  Nopf: 'ℕ',
  Not: '⫬',
  NotCongruent: '≢',
  NotCupCap: '≭',
  NotDoubleVerticalBar: '∦',
  NotElement: '∉',
  NotEqual: '≠',
  NotEqualTilde: '≂̸',
  NotExists: '∄',
  NotGreater: '≯',
  NotGreaterEqual: '≱',
  NotGreaterFullEqual: '≧̸',
  NotGreaterGreater: '≫̸',
  NotGreaterLess: '≹',
  NotGreaterSlantEqual: '⩾̸',
  NotGreaterTilde: '≵',
  NotHumpDownHump: '≎̸',
  NotHumpEqual: '≏̸',
  NotLeftTriangle: '⋪',
  NotLeftTriangleBar: '⧏̸',
  NotLeftTriangleEqual: '⋬',
  NotLess: '≮',
  NotLessEqual: '≰',
  NotLessGreater: '≸',
  NotLessLess: '≪̸',
  NotLessSlantEqual: '⩽̸',
  NotLessTilde: '≴',
  NotNestedGreaterGreater: '⪢̸',
  NotNestedLessLess: '⪡̸',
  NotPrecedes: '⊀',
  NotPrecedesEqual: '⪯̸',
  NotPrecedesSlantEqual: '⋠',
  NotReverseElement: '∌',
  NotRightTriangle: '⋫',
  NotRightTriangleBar: '⧐̸',
  NotRightTriangleEqual: '⋭',
  NotSquareSubset: '⊏̸',
  NotSquareSubsetEqual: '⋢',
  NotSquareSuperset: '⊐̸',
  NotSquareSupersetEqual: '⋣',
  NotSubset: '⊂⃒',
  NotSubsetEqual: '⊈',
  NotSucceeds: '⊁',
  NotSucceedsEqual: '⪰̸',
  NotSucceedsSlantEqual: '⋡',
  NotSucceedsTilde: '≿̸',
  NotSuperset: '⊃⃒',
  NotSupersetEqual: '⊉',
  NotTilde: '≁',
  NotTildeEqual: '≄',
  NotTildeFullEqual: '≇',
  NotTildeTilde: '≉',
  NotVerticalBar: '∤',
  Nscr: '𝒩',
  Ntilde: 'Ñ',
  Nu: 'Ν',
  OElig: 'Œ',
  Oacute: 'Ó',
  Ocirc: 'Ô',
  Ocy: 'О',
  Odblac: 'Ő',
  Ofr: '𝔒',
  Ograve: 'Ò',
  Omacr: 'Ō',
  Omega: 'Ω',
  Omicron: 'Ο',
  Oopf: '𝕆',
  OpenCurlyDoubleQuote: '“',
  OpenCurlyQuote: '‘',
  Or: '⩔',
  Oscr: '𝒪',
  Oslash: 'Ø',
  Otilde: 'Õ',
  Otimes: '⨷',
  Ouml: 'Ö',
  OverBar: '‾',
  OverBrace: '⏞',
  OverBracket: '⎴',
  OverParenthesis: '⏜',
  PartialD: '∂',
  Pcy: 'П',
  Pfr: '𝔓',
  Phi: 'Φ',
  Pi: 'Π',
  PlusMinus: '±',
  Poincareplane: 'ℌ',
  Popf: 'ℙ',
  Pr: '⪻',
  Precedes: '≺',
  PrecedesEqual: '⪯',
  PrecedesSlantEqual: '≼',
  PrecedesTilde: '≾',
  Prime: '″',
  Product: '∏',
  Proportion: '∷',
  Proportional: '∝',
  Pscr: '𝒫',
  Psi: 'Ψ',
  QUOT: '"',
  Qfr: '𝔔',
  Qopf: 'ℚ',
  Qscr: '𝒬',
  RBarr: '⤐',
  REG: '®',
  Racute: 'Ŕ',
  Rang: '⟫',
  Rarr: '↠',
  Rarrtl: '⤖',
  Rcaron: 'Ř',
  Rcedil: 'Ŗ',
  Rcy: 'Р',
  Re: 'ℜ',
  ReverseElement: '∋',
  ReverseEquilibrium: '⇋',
  ReverseUpEquilibrium: '⥯',
  Rfr: 'ℜ',
  Rho: 'Ρ',
  RightAngleBracket: '⟩',
  RightArrow: '→',
  RightArrowBar: '⇥',
  RightArrowLeftArrow: '⇄',
  RightCeiling: '⌉',
  RightDoubleBracket: '⟧',
  RightDownTeeVector: '⥝',
  RightDownVector: '⇂',
  RightDownVectorBar: '⥕',
  RightFloor: '⌋',
  RightTee: '⊢',
  RightTeeArrow: '↦',
  RightTeeVector: '⥛',
  RightTriangle: '⊳',
  RightTriangleBar: '⧐',
  RightTriangleEqual: '⊵',
  RightUpDownVector: '⥏',
  RightUpTeeVector: '⥜',
  RightUpVector: '↾',
  RightUpVectorBar: '⥔',
  RightVector: '⇀',
  RightVectorBar: '⥓',
  Rightarrow: '⇒',
  Ropf: 'ℝ',
  RoundImplies: '⥰',
  Rrightarrow: '⇛',
  Rscr: 'ℛ',
  Rsh: '↱',
  RuleDelayed: '⧴',
  SHCHcy: 'Щ',
  SHcy: 'Ш',
  SOFTcy: 'Ь',
  Sacute: 'Ś',
  Sc: '⪼',
  Scaron: 'Š',
  Scedil: 'Ş',
  Scirc: 'Ŝ',
  Scy: 'С',
  Sfr: '𝔖',
  ShortDownArrow: '↓',
  ShortLeftArrow: '←',
  ShortRightArrow: '→',
  ShortUpArrow: '↑',
  Sigma: 'Σ',
  SmallCircle: '∘',
  Sopf: '𝕊',
  Sqrt: '√',
  Square: '□',
  SquareIntersection: '⊓',
  SquareSubset: '⊏',
  SquareSubsetEqual: '⊑',
  SquareSuperset: '⊐',
  SquareSupersetEqual: '⊒',
  SquareUnion: '⊔',
  Sscr: '𝒮',
  Star: '⋆',
  Sub: '⋐',
  Subset: '⋐',
  SubsetEqual: '⊆',
  Succeeds: '≻',
  SucceedsEqual: '⪰',
  SucceedsSlantEqual: '≽',
  SucceedsTilde: '≿',
  SuchThat: '∋',
  Sum: '∑',
  Sup: '⋑',
  Superset: '⊃',
  SupersetEqual: '⊇',
  Supset: '⋑',
  THORN: 'Þ',
  TRADE: '™',
  TSHcy: 'Ћ',
  TScy: 'Ц',
  Tab: '\t',
  Tau: 'Τ',
  Tcaron: 'Ť',
  Tcedil: 'Ţ',
  Tcy: 'Т',
  Tfr: '𝔗',
  Therefore: '∴',
  Theta: 'Θ',
  ThickSpace: '  ',
  ThinSpace: ' ',
  Tilde: '∼',
  TildeEqual: '≃',
  TildeFullEqual: '≅',
  TildeTilde: '≈',
  Topf: '𝕋',
  TripleDot: '⃛',
  Tscr: '𝒯',
  Tstrok: 'Ŧ',
  Uacute: 'Ú',
  Uarr: '↟',
  Uarrocir: '⥉',
  Ubrcy: 'Ў',
  Ubreve: 'Ŭ',
  Ucirc: 'Û',
  Ucy: 'У',
  Udblac: 'Ű',
  Ufr: '𝔘',
  Ugrave: 'Ù',
  Umacr: 'Ū',
  UnderBar: '_',
  UnderBrace: '⏟',
  UnderBracket: '⎵',
  UnderParenthesis: '⏝',
  Union: '⋃',
  UnionPlus: '⊎',
  Uogon: 'Ų',
  Uopf: '𝕌',
  UpArrow: '↑',
  UpArrowBar: '⤒',
  UpArrowDownArrow: '⇅',
  UpDownArrow: '↕',
  UpEquilibrium: '⥮',
  UpTee: '⊥',
  UpTeeArrow: '↥',
  Uparrow: '⇑',
  Updownarrow: '⇕',
  UpperLeftArrow: '↖',
  UpperRightArrow: '↗',
  Upsi: 'ϒ',
  Upsilon: 'Υ',
  Uring: 'Ů',
  Uscr: '𝒰',
  Utilde: 'Ũ',
  Uuml: 'Ü',
  VDash: '⊫',
  Vbar: '⫫',
  Vcy: 'В',
  Vdash: '⊩',
  Vdashl: '⫦',
  Vee: '⋁',
  Verbar: '‖',
  Vert: '‖',
  VerticalBar: '∣',
  VerticalLine: '|',
  VerticalSeparator: '❘',
  VerticalTilde: '≀',
  VeryThinSpace: ' ',
  Vfr: '𝔙',
  Vopf: '𝕍',
  Vscr: '𝒱',
  Vvdash: '⊪',
  Wcirc: 'Ŵ',
  Wedge: '⋀',
  Wfr: '𝔚',
  Wopf: '𝕎',
  Wscr: '𝒲',
  Xfr: '𝔛',
  Xi: 'Ξ',
  Xopf: '𝕏',
  Xscr: '𝒳',
  YAcy: 'Я',
  YIcy: 'Ї',
  YUcy: 'Ю',
  Yacute: 'Ý',
  Ycirc: 'Ŷ',
  Ycy: 'Ы',
  Yfr: '𝔜',
  Yopf: '𝕐',
  Yscr: '𝒴',
  Yuml: 'Ÿ',
  ZHcy: 'Ж',
  Zacute: 'Ź',
  Zcaron: 'Ž',
  Zcy: 'З',
  Zdot: 'Ż',
  ZeroWidthSpace: '​',
  Zeta: 'Ζ',
  Zfr: 'ℨ',
  Zopf: 'ℤ',
  Zscr: '𝒵',
  aacute: 'á',
  abreve: 'ă',
  ac: '∾',
  acE: '∾̳',
  acd: '∿',
  acirc: 'â',
  acute: '´',
  acy: 'а',
  aelig: 'æ',
  af: '⁡',
  afr: '𝔞',
  agrave: 'à',
  alefsym: 'ℵ',
  aleph: 'ℵ',
  alpha: 'α',
  amacr: 'ā',
  amalg: '⨿',
  amp: '&',
  and: '∧',
  andand: '⩕',
  andd: '⩜',
  andslope: '⩘',
  andv: '⩚',
  ang: '∠',
  ange: '⦤',
  angle: '∠',
  angmsd: '∡',
  angmsdaa: '⦨',
  angmsdab: '⦩',
  angmsdac: '⦪',
  angmsdad: '⦫',
  angmsdae: '⦬',
  angmsdaf: '⦭',
  angmsdag: '⦮',
  angmsdah: '⦯',
  angrt: '∟',
  angrtvb: '⊾',
  angrtvbd: '⦝',
  angsph: '∢',
  angst: 'Å',
  angzarr: '⍼',
  aogon: 'ą',
  aopf: '𝕒',
  ap: '≈',
  apE: '⩰',
  apacir: '⩯',
  ape: '≊',
  apid: '≋',
  apos: "'",
  approx: '≈',
  approxeq: '≊',
  aring: 'å',
  ascr: '𝒶',
  ast: '*',
  asymp: '≈',
  asympeq: '≍',
  atilde: 'ã',
  auml: 'ä',
  awconint: '∳',
  awint: '⨑',
  bNot: '⫭',
  backcong: '≌',
  backepsilon: '϶',
  backprime: '‵',
  backsim: '∽',
  backsimeq: '⋍',
  barvee: '⊽',
  barwed: '⌅',
  barwedge: '⌅',
  bbrk: '⎵',
  bbrktbrk: '⎶',
  bcong: '≌',
  bcy: 'б',
  bdquo: '„',
  becaus: '∵',
  because: '∵',
  bemptyv: '⦰',
  bepsi: '϶',
  bernou: 'ℬ',
  beta: 'β',
  beth: 'ℶ',
  between: '≬',
  bfr: '𝔟',
  bigcap: '⋂',
  bigcirc: '◯',
  bigcup: '⋃',
  bigodot: '⨀',
  bigoplus: '⨁',
  bigotimes: '⨂',
  bigsqcup: '⨆',
  bigstar: '★',
  bigtriangledown: '▽',
  bigtriangleup: '△',
  biguplus: '⨄',
  bigvee: '⋁',
  bigwedge: '⋀',
  bkarow: '⤍',
  blacklozenge: '⧫',
  blacksquare: '▪',
  blacktriangle: '▴',
  blacktriangledown: '▾',
  blacktriangleleft: '◂',
  blacktriangleright: '▸',
  blank: '␣',
  blk12: '▒',
  blk14: '░',
  blk34: '▓',
  block: '█',
  bne: '=⃥',
  bnequiv: '≡⃥',
  bnot: '⌐',
  bopf: '𝕓',
  bot: '⊥',
  bottom: '⊥',
  bowtie: '⋈',
  boxDL: '╗',
  boxDR: '╔',
  boxDl: '╖',
  boxDr: '╓',
  boxH: '═',
  boxHD: '╦',
  boxHU: '╩',
  boxHd: '╤',
  boxHu: '╧',
  boxUL: '╝',
  boxUR: '╚',
  boxUl: '╜',
  boxUr: '╙',
  boxV: '║',
  boxVH: '╬',
  boxVL: '╣',
  boxVR: '╠',
  boxVh: '╫',
  boxVl: '╢',
  boxVr: '╟',
  boxbox: '⧉',
  boxdL: '╕',
  boxdR: '╒',
  boxdl: '┐',
  boxdr: '┌',
  boxh: '─',
  boxhD: '╥',
  boxhU: '╨',
  boxhd: '┬',
  boxhu: '┴',
  boxminus: '⊟',
  boxplus: '⊞',
  boxtimes: '⊠',
  boxuL: '╛',
  boxuR: '╘',
  boxul: '┘',
  boxur: '└',
  boxv: '│',
  boxvH: '╪',
  boxvL: '╡',
  boxvR: '╞',
  boxvh: '┼',
  boxvl: '┤',
  boxvr: '├',
  bprime: '‵',
  breve: '˘',
  brvbar: '¦',
  bscr: '𝒷',
  bsemi: '⁏',
  bsim: '∽',
  bsime: '⋍',
  bsol: '\\',
  bsolb: '⧅',
  bsolhsub: '⟈',
  bull: '•',
  bullet: '•',
  bump: '≎',
  bumpE: '⪮',
  bumpe: '≏',
  bumpeq: '≏',
  cacute: 'ć',
  cap: '∩',
  capand: '⩄',
  capbrcup: '⩉',
  capcap: '⩋',
  capcup: '⩇',
  capdot: '⩀',
  caps: '∩︀',
  caret: '⁁',
  caron: 'ˇ',
  ccaps: '⩍',
  ccaron: 'č',
  ccedil: 'ç',
  ccirc: 'ĉ',
  ccups: '⩌',
  ccupssm: '⩐',
  cdot: 'ċ',
  cedil: '¸',
  cemptyv: '⦲',
  cent: '¢',
  centerdot: '·',
  cfr: '𝔠',
  chcy: 'ч',
  check: '✓',
  checkmark: '✓',
  chi: 'χ',
  cir: '○',
  cirE: '⧃',
  circ: 'ˆ',
  circeq: '≗',
  circlearrowleft: '↺',
  circlearrowright: '↻',
  circledR: '®',
  circledS: 'Ⓢ',
  circledast: '⊛',
  circledcirc: '⊚',
  circleddash: '⊝',
  cire: '≗',
  cirfnint: '⨐',
  cirmid: '⫯',
  cirscir: '⧂',
  clubs: '♣',
  clubsuit: '♣',
  colon: ':',
  colone: '≔',
  coloneq: '≔',
  comma: ',',
  commat: '@',
  comp: '∁',
  compfn: '∘',
  complement: '∁',
  complexes: 'ℂ',
  cong: '≅',
  congdot: '⩭',
  conint: '∮',
  copf: '𝕔',
  coprod: '∐',
  copy: '©',
  copysr: '℗',
  crarr: '↵',
  cross: '✗',
  cscr: '𝒸',
  csub: '⫏',
  csube: '⫑',
  csup: '⫐',
  csupe: '⫒',
  ctdot: '⋯',
  cudarrl: '⤸',
  cudarrr: '⤵',
  cuepr: '⋞',
  cuesc: '⋟',
  cularr: '↶',
  cularrp: '⤽',
  cup: '∪',
  cupbrcap: '⩈',
  cupcap: '⩆',
  cupcup: '⩊',
  cupdot: '⊍',
  cupor: '⩅',
  cups: '∪︀',
  curarr: '↷',
  curarrm: '⤼',
  curlyeqprec: '⋞',
  curlyeqsucc: '⋟',
  curlyvee: '⋎',
  curlywedge: '⋏',
  curren: '¤',
  curvearrowleft: '↶',
  curvearrowright: '↷',
  cuvee: '⋎',
  cuwed: '⋏',
  cwconint: '∲',
  cwint: '∱',
  cylcty: '⌭',
  dArr: '⇓',
  dHar: '⥥',
  dagger: '†',
  daleth: 'ℸ',
  darr: '↓',
  dash: '‐',
  dashv: '⊣',
  dbkarow: '⤏',
  dblac: '˝',
  dcaron: 'ď',
  dcy: 'д',
  dd: 'ⅆ',
  ddagger: '‡',
  ddarr: '⇊',
  ddotseq: '⩷',
  deg: '°',
  delta: 'δ',
  demptyv: '⦱',
  dfisht: '⥿',
  dfr: '𝔡',
  dharl: '⇃',
  dharr: '⇂',
  diam: '⋄',
  diamond: '⋄',
  diamondsuit: '♦',
  diams: '♦',
  die: '¨',
  digamma: 'ϝ',
  disin: '⋲',
  div: '÷',
  divide: '÷',
  divideontimes: '⋇',
  divonx: '⋇',
  djcy: 'ђ',
  dlcorn: '⌞',
  dlcrop: '⌍',
  dollar: '$',
  dopf: '𝕕',
  dot: '˙',
  doteq: '≐',
  doteqdot: '≑',
  dotminus: '∸',
  dotplus: '∔',
  dotsquare: '⊡',
  doublebarwedge: '⌆',
  downarrow: '↓',
  downdownarrows: '⇊',
  downharpoonleft: '⇃',
  downharpoonright: '⇂',
  drbkarow: '⤐',
  drcorn: '⌟',
  drcrop: '⌌',
  dscr: '𝒹',
  dscy: 'ѕ',
  dsol: '⧶',
  dstrok: 'đ',
  dtdot: '⋱',
  dtri: '▿',
  dtrif: '▾',
  duarr: '⇵',
  duhar: '⥯',
  dwangle: '⦦',
  dzcy: 'џ',
  dzigrarr: '⟿',
  eDDot: '⩷',
  eDot: '≑',
  eacute: 'é',
  easter: '⩮',
  ecaron: 'ě',
  ecir: '≖',
  ecirc: 'ê',
  ecolon: '≕',
  ecy: 'э',
  edot: 'ė',
  ee: 'ⅇ',
  efDot: '≒',
  efr: '𝔢',
  eg: '⪚',
  egrave: 'è',
  egs: '⪖',
  egsdot: '⪘',
  el: '⪙',
  elinters: '⏧',
  ell: 'ℓ',
  els: '⪕',
  elsdot: '⪗',
  emacr: 'ē',
  empty: '∅',
  emptyset: '∅',
  emptyv: '∅',
  emsp13: ' ',
  emsp14: ' ',
  emsp: ' ',
  eng: 'ŋ',
  ensp: ' ',
  eogon: 'ę',
  eopf: '𝕖',
  epar: '⋕',
  eparsl: '⧣',
  eplus: '⩱',
  epsi: 'ε',
  epsilon: 'ε',
  epsiv: 'ϵ',
  eqcirc: '≖',
  eqcolon: '≕',
  eqsim: '≂',
  eqslantgtr: '⪖',
  eqslantless: '⪕',
  equals: '=',
  equest: '≟',
  equiv: '≡',
  equivDD: '⩸',
  eqvparsl: '⧥',
  erDot: '≓',
  erarr: '⥱',
  escr: 'ℯ',
  esdot: '≐',
  esim: '≂',
  eta: 'η',
  eth: 'ð',
  euml: 'ë',
  euro: '€',
  excl: '!',
  exist: '∃',
  expectation: 'ℰ',
  exponentiale: 'ⅇ',
  fallingdotseq: '≒',
  fcy: 'ф',
  female: '♀',
  ffilig: 'ﬃ',
  fflig: 'ﬀ',
  ffllig: 'ﬄ',
  ffr: '𝔣',
  filig: 'ﬁ',
  fjlig: 'fj',
  flat: '♭',
  fllig: 'ﬂ',
  fltns: '▱',
  fnof: 'ƒ',
  fopf: '𝕗',
  forall: '∀',
  fork: '⋔',
  forkv: '⫙',
  fpartint: '⨍',
  frac12: '½',
  frac13: '⅓',
  frac14: '¼',
  frac15: '⅕',
  frac16: '⅙',
  frac18: '⅛',
  frac23: '⅔',
  frac25: '⅖',
  frac34: '¾',
  frac35: '⅗',
  frac38: '⅜',
  frac45: '⅘',
  frac56: '⅚',
  frac58: '⅝',
  frac78: '⅞',
  frasl: '⁄',
  frown: '⌢',
  fscr: '𝒻',
  gE: '≧',
  gEl: '⪌',
  gacute: 'ǵ',
  gamma: 'γ',
  gammad: 'ϝ',
  gap: '⪆',
  gbreve: 'ğ',
  gcirc: 'ĝ',
  gcy: 'г',
  gdot: 'ġ',
  ge: '≥',
  gel: '⋛',
  geq: '≥',
  geqq: '≧',
  geqslant: '⩾',
  ges: '⩾',
  gescc: '⪩',
  gesdot: '⪀',
  gesdoto: '⪂',
  gesdotol: '⪄',
  gesl: '⋛︀',
  gesles: '⪔',
  gfr: '𝔤',
  gg: '≫',
  ggg: '⋙',
  gimel: 'ℷ',
  gjcy: 'ѓ',
  gl: '≷',
  glE: '⪒',
  gla: '⪥',
  glj: '⪤',
  gnE: '≩',
  gnap: '⪊',
  gnapprox: '⪊',
  gne: '⪈',
  gneq: '⪈',
  gneqq: '≩',
  gnsim: '⋧',
  gopf: '𝕘',
  grave: '`',
  gscr: 'ℊ',
  gsim: '≳',
  gsime: '⪎',
  gsiml: '⪐',
  gt: '>',
  gtcc: '⪧',
  gtcir: '⩺',
  gtdot: '⋗',
  gtlPar: '⦕',
  gtquest: '⩼',
  gtrapprox: '⪆',
  gtrarr: '⥸',
  gtrdot: '⋗',
  gtreqless: '⋛',
  gtreqqless: '⪌',
  gtrless: '≷',
  gtrsim: '≳',
  gvertneqq: '≩︀',
  gvnE: '≩︀',
  hArr: '⇔',
  hairsp: ' ',
  half: '½',
  hamilt: 'ℋ',
  hardcy: 'ъ',
  harr: '↔',
  harrcir: '⥈',
  harrw: '↭',
  hbar: 'ℏ',
  hcirc: 'ĥ',
  hearts: '♥',
  heartsuit: '♥',
  hellip: '…',
  hercon: '⊹',
  hfr: '𝔥',
  hksearow: '⤥',
  hkswarow: '⤦',
  hoarr: '⇿',
  homtht: '∻',
  hookleftarrow: '↩',
  hookrightarrow: '↪',
  hopf: '𝕙',
  horbar: '―',
  hscr: '𝒽',
  hslash: 'ℏ',
  hstrok: 'ħ',
  hybull: '⁃',
  hyphen: '‐',
  iacute: 'í',
  ic: '⁣',
  icirc: 'î',
  icy: 'и',
  iecy: 'е',
  iexcl: '¡',
  iff: '⇔',
  ifr: '𝔦',
  igrave: 'ì',
  ii: 'ⅈ',
  iiiint: '⨌',
  iiint: '∭',
  iinfin: '⧜',
  iiota: '℩',
  ijlig: 'ĳ',
  imacr: 'ī',
  image: 'ℑ',
  imagline: 'ℐ',
  imagpart: 'ℑ',
  imath: 'ı',
  imof: '⊷',
  imped: 'Ƶ',
  in: '∈',
  incare: '℅',
  infin: '∞',
  infintie: '⧝',
  inodot: 'ı',
  int: '∫',
  intcal: '⊺',
  integers: 'ℤ',
  intercal: '⊺',
  intlarhk: '⨗',
  intprod: '⨼',
  iocy: 'ё',
  iogon: 'į',
  iopf: '𝕚',
  iota: 'ι',
  iprod: '⨼',
  iquest: '¿',
  iscr: '𝒾',
  isin: '∈',
  isinE: '⋹',
  isindot: '⋵',
  isins: '⋴',
  isinsv: '⋳',
  isinv: '∈',
  it: '⁢',
  itilde: 'ĩ',
  iukcy: 'і',
  iuml: 'ï',
  jcirc: 'ĵ',
  jcy: 'й',
  jfr: '𝔧',
  jmath: 'ȷ',
  jopf: '𝕛',
  jscr: '𝒿',
  jsercy: 'ј',
  jukcy: 'є',
  kappa: 'κ',
  kappav: 'ϰ',
  kcedil: 'ķ',
  kcy: 'к',
  kfr: '𝔨',
  kgreen: 'ĸ',
  khcy: 'х',
  kjcy: 'ќ',
  kopf: '𝕜',
  kscr: '𝓀',
  lAarr: '⇚',
  lArr: '⇐',
  lAtail: '⤛',
  lBarr: '⤎',
  lE: '≦',
  lEg: '⪋',
  lHar: '⥢',
  lacute: 'ĺ',
  laemptyv: '⦴',
  lagran: 'ℒ',
  lambda: 'λ',
  lang: '⟨',
  langd: '⦑',
  langle: '⟨',
  lap: '⪅',
  laquo: '«',
  larr: '←',
  larrb: '⇤',
  larrbfs: '⤟',
  larrfs: '⤝',
  larrhk: '↩',
  larrlp: '↫',
  larrpl: '⤹',
  larrsim: '⥳',
  larrtl: '↢',
  lat: '⪫',
  latail: '⤙',
  late: '⪭',
  lates: '⪭︀',
  lbarr: '⤌',
  lbbrk: '❲',
  lbrace: '{',
  lbrack: '[',
  lbrke: '⦋',
  lbrksld: '⦏',
  lbrkslu: '⦍',
  lcaron: 'ľ',
  lcedil: 'ļ',
  lceil: '⌈',
  lcub: '{',
  lcy: 'л',
  ldca: '⤶',
  ldquo: '“',
  ldquor: '„',
  ldrdhar: '⥧',
  ldrushar: '⥋',
  ldsh: '↲',
  le: '≤',
  leftarrow: '←',
  leftarrowtail: '↢',
  leftharpoondown: '↽',
  leftharpoonup: '↼',
  leftleftarrows: '⇇',
  leftrightarrow: '↔',
  leftrightarrows: '⇆',
  leftrightharpoons: '⇋',
  leftrightsquigarrow: '↭',
  leftthreetimes: '⋋',
  leg: '⋚',
  leq: '≤',
  leqq: '≦',
  leqslant: '⩽',
  les: '⩽',
  lescc: '⪨',
  lesdot: '⩿',
  lesdoto: '⪁',
  lesdotor: '⪃',
  lesg: '⋚︀',
  lesges: '⪓',
  lessapprox: '⪅',
  lessdot: '⋖',
  lesseqgtr: '⋚',
  lesseqqgtr: '⪋',
  lessgtr: '≶',
  lesssim: '≲',
  lfisht: '⥼',
  lfloor: '⌊',
  lfr: '𝔩',
  lg: '≶',
  lgE: '⪑',
  lhard: '↽',
  lharu: '↼',
  lharul: '⥪',
  lhblk: '▄',
  ljcy: 'љ',
  ll: '≪',
  llarr: '⇇',
  llcorner: '⌞',
  llhard: '⥫',
  lltri: '◺',
  lmidot: 'ŀ',
  lmoust: '⎰',
  lmoustache: '⎰',
  lnE: '≨',
  lnap: '⪉',
  lnapprox: '⪉',
  lne: '⪇',
  lneq: '⪇',
  lneqq: '≨',
  lnsim: '⋦',
  loang: '⟬',
  loarr: '⇽',
  lobrk: '⟦',
  longleftarrow: '⟵',
  longleftrightarrow: '⟷',
  longmapsto: '⟼',
  longrightarrow: '⟶',
  looparrowleft: '↫',
  looparrowright: '↬',
  lopar: '⦅',
  lopf: '𝕝',
  loplus: '⨭',
  lotimes: '⨴',
  lowast: '∗',
  lowbar: '_',
  loz: '◊',
  lozenge: '◊',
  lozf: '⧫',
  lpar: '(',
  lparlt: '⦓',
  lrarr: '⇆',
  lrcorner: '⌟',
  lrhar: '⇋',
  lrhard: '⥭',
  lrm: '‎',
  lrtri: '⊿',
  lsaquo: '‹',
  lscr: '𝓁',
  lsh: '↰',
  lsim: '≲',
  lsime: '⪍',
  lsimg: '⪏',
  lsqb: '[',
  lsquo: '‘',
  lsquor: '‚',
  lstrok: 'ł',
  lt: '<',
  ltcc: '⪦',
  ltcir: '⩹',
  ltdot: '⋖',
  lthree: '⋋',
  ltimes: '⋉',
  ltlarr: '⥶',
  ltquest: '⩻',
  ltrPar: '⦖',
  ltri: '◃',
  ltrie: '⊴',
  ltrif: '◂',
  lurdshar: '⥊',
  luruhar: '⥦',
  lvertneqq: '≨︀',
  lvnE: '≨︀',
  mDDot: '∺',
  macr: '¯',
  male: '♂',
  malt: '✠',
  maltese: '✠',
  map: '↦',
  mapsto: '↦',
  mapstodown: '↧',
  mapstoleft: '↤',
  mapstoup: '↥',
  marker: '▮',
  mcomma: '⨩',
  mcy: 'м',
  mdash: '—',
  measuredangle: '∡',
  mfr: '𝔪',
  mho: '℧',
  micro: 'µ',
  mid: '∣',
  midast: '*',
  midcir: '⫰',
  middot: '·',
  minus: '−',
  minusb: '⊟',
  minusd: '∸',
  minusdu: '⨪',
  mlcp: '⫛',
  mldr: '…',
  mnplus: '∓',
  models: '⊧',
  mopf: '𝕞',
  mp: '∓',
  mscr: '𝓂',
  mstpos: '∾',
  mu: 'μ',
  multimap: '⊸',
  mumap: '⊸',
  nGg: '⋙̸',
  nGt: '≫⃒',
  nGtv: '≫̸',
  nLeftarrow: '⇍',
  nLeftrightarrow: '⇎',
  nLl: '⋘̸',
  nLt: '≪⃒',
  nLtv: '≪̸',
  nRightarrow: '⇏',
  nVDash: '⊯',
  nVdash: '⊮',
  nabla: '∇',
  nacute: 'ń',
  nang: '∠⃒',
  nap: '≉',
  napE: '⩰̸',
  napid: '≋̸',
  napos: 'ŉ',
  napprox: '≉',
  natur: '♮',
  natural: '♮',
  naturals: 'ℕ',
  nbsp: ' ',
  nbump: '≎̸',
  nbumpe: '≏̸',
  ncap: '⩃',
  ncaron: 'ň',
  ncedil: 'ņ',
  ncong: '≇',
  ncongdot: '⩭̸',
  ncup: '⩂',
  ncy: 'н',
  ndash: '–',
  ne: '≠',
  neArr: '⇗',
  nearhk: '⤤',
  nearr: '↗',
  nearrow: '↗',
  nedot: '≐̸',
  nequiv: '≢',
  nesear: '⤨',
  nesim: '≂̸',
  nexist: '∄',
  nexists: '∄',
  nfr: '𝔫',
  ngE: '≧̸',
  nge: '≱',
  ngeq: '≱',
  ngeqq: '≧̸',
  ngeqslant: '⩾̸',
  nges: '⩾̸',
  ngsim: '≵',
  ngt: '≯',
  ngtr: '≯',
  nhArr: '⇎',
  nharr: '↮',
  nhpar: '⫲',
  ni: '∋',
  nis: '⋼',
  nisd: '⋺',
  niv: '∋',
  njcy: 'њ',
  nlArr: '⇍',
  nlE: '≦̸',
  nlarr: '↚',
  nldr: '‥',
  nle: '≰',
  nleftarrow: '↚',
  nleftrightarrow: '↮',
  nleq: '≰',
  nleqq: '≦̸',
  nleqslant: '⩽̸',
  nles: '⩽̸',
  nless: '≮',
  nlsim: '≴',
  nlt: '≮',
  nltri: '⋪',
  nltrie: '⋬',
  nmid: '∤',
  nopf: '𝕟',
  not: '¬',
  notin: '∉',
  notinE: '⋹̸',
  notindot: '⋵̸',
  notinva: '∉',
  notinvb: '⋷',
  notinvc: '⋶',
  notni: '∌',
  notniva: '∌',
  notnivb: '⋾',
  notnivc: '⋽',
  npar: '∦',
  nparallel: '∦',
  nparsl: '⫽⃥',
  npart: '∂̸',
  npolint: '⨔',
  npr: '⊀',
  nprcue: '⋠',
  npre: '⪯̸',
  nprec: '⊀',
  npreceq: '⪯̸',
  nrArr: '⇏',
  nrarr: '↛',
  nrarrc: '⤳̸',
  nrarrw: '↝̸',
  nrightarrow: '↛',
  nrtri: '⋫',
  nrtrie: '⋭',
  nsc: '⊁',
  nsccue: '⋡',
  nsce: '⪰̸',
  nscr: '𝓃',
  nshortmid: '∤',
  nshortparallel: '∦',
  nsim: '≁',
  nsime: '≄',
  nsimeq: '≄',
  nsmid: '∤',
  nspar: '∦',
  nsqsube: '⋢',
  nsqsupe: '⋣',
  nsub: '⊄',
  nsubE: '⫅̸',
  nsube: '⊈',
  nsubset: '⊂⃒',
  nsubseteq: '⊈',
  nsubseteqq: '⫅̸',
  nsucc: '⊁',
  nsucceq: '⪰̸',
  nsup: '⊅',
  nsupE: '⫆̸',
  nsupe: '⊉',
  nsupset: '⊃⃒',
  nsupseteq: '⊉',
  nsupseteqq: '⫆̸',
  ntgl: '≹',
  ntilde: 'ñ',
  ntlg: '≸',
  ntriangleleft: '⋪',
  ntrianglelefteq: '⋬',
  ntriangleright: '⋫',
  ntrianglerighteq: '⋭',
  nu: 'ν',
  num: '#',
  numero: '№',
  numsp: ' ',
  nvDash: '⊭',
  nvHarr: '⤄',
  nvap: '≍⃒',
  nvdash: '⊬',
  nvge: '≥⃒',
  nvgt: '>⃒',
  nvinfin: '⧞',
  nvlArr: '⤂',
  nvle: '≤⃒',
  nvlt: '<⃒',
  nvltrie: '⊴⃒',
  nvrArr: '⤃',
  nvrtrie: '⊵⃒',
  nvsim: '∼⃒',
  nwArr: '⇖',
  nwarhk: '⤣',
  nwarr: '↖',
  nwarrow: '↖',
  nwnear: '⤧',
  oS: 'Ⓢ',
  oacute: 'ó',
  oast: '⊛',
  ocir: '⊚',
  ocirc: 'ô',
  ocy: 'о',
  odash: '⊝',
  odblac: 'ő',
  odiv: '⨸',
  odot: '⊙',
  odsold: '⦼',
  oelig: 'œ',
  ofcir: '⦿',
  ofr: '𝔬',
  ogon: '˛',
  ograve: 'ò',
  ogt: '⧁',
  ohbar: '⦵',
  ohm: 'Ω',
  oint: '∮',
  olarr: '↺',
  olcir: '⦾',
  olcross: '⦻',
  oline: '‾',
  olt: '⧀',
  omacr: 'ō',
  omega: 'ω',
  omicron: 'ο',
  omid: '⦶',
  ominus: '⊖',
  oopf: '𝕠',
  opar: '⦷',
  operp: '⦹',
  oplus: '⊕',
  or: '∨',
  orarr: '↻',
  ord: '⩝',
  order: 'ℴ',
  orderof: 'ℴ',
  ordf: 'ª',
  ordm: 'º',
  origof: '⊶',
  oror: '⩖',
  orslope: '⩗',
  orv: '⩛',
  oscr: 'ℴ',
  oslash: 'ø',
  osol: '⊘',
  otilde: 'õ',
  otimes: '⊗',
  otimesas: '⨶',
  ouml: 'ö',
  ovbar: '⌽',
  par: '∥',
  para: '¶',
  parallel: '∥',
  parsim: '⫳',
  parsl: '⫽',
  part: '∂',
  pcy: 'п',
  percnt: '%',
  period: '.',
  permil: '‰',
  perp: '⊥',
  pertenk: '‱',
  pfr: '𝔭',
  phi: 'φ',
  phiv: 'ϕ',
  phmmat: 'ℳ',
  phone: '☎',
  pi: 'π',
  pitchfork: '⋔',
  piv: 'ϖ',
  planck: 'ℏ',
  planckh: 'ℎ',
  plankv: 'ℏ',
  plus: '+',
  plusacir: '⨣',
  plusb: '⊞',
  pluscir: '⨢',
  plusdo: '∔',
  plusdu: '⨥',
  pluse: '⩲',
  plusmn: '±',
  plussim: '⨦',
  plustwo: '⨧',
  pm: '±',
  pointint: '⨕',
  popf: '𝕡',
  pound: '£',
  pr: '≺',
  prE: '⪳',
  prap: '⪷',
  prcue: '≼',
  pre: '⪯',
  prec: '≺',
  precapprox: '⪷',
  preccurlyeq: '≼',
  preceq: '⪯',
  precnapprox: '⪹',
  precneqq: '⪵',
  precnsim: '⋨',
  precsim: '≾',
  prime: '′',
  primes: 'ℙ',
  prnE: '⪵',
  prnap: '⪹',
  prnsim: '⋨',
  prod: '∏',
  profalar: '⌮',
  profline: '⌒',
  profsurf: '⌓',
  prop: '∝',
  propto: '∝',
  prsim: '≾',
  prurel: '⊰',
  pscr: '𝓅',
  psi: 'ψ',
  puncsp: ' ',
  qfr: '𝔮',
  qint: '⨌',
  qopf: '𝕢',
  qprime: '⁗',
  qscr: '𝓆',
  quaternions: 'ℍ',
  quatint: '⨖',
  quest: '?',
  questeq: '≟',
  quot: '"',
  rAarr: '⇛',
  rArr: '⇒',
  rAtail: '⤜',
  rBarr: '⤏',
  rHar: '⥤',
  race: '∽̱',
  racute: 'ŕ',
  radic: '√',
  raemptyv: '⦳',
  rang: '⟩',
  rangd: '⦒',
  range: '⦥',
  rangle: '⟩',
  raquo: '»',
  rarr: '→',
  rarrap: '⥵',
  rarrb: '⇥',
  rarrbfs: '⤠',
  rarrc: '⤳',
  rarrfs: '⤞',
  rarrhk: '↪',
  rarrlp: '↬',
  rarrpl: '⥅',
  rarrsim: '⥴',
  rarrtl: '↣',
  rarrw: '↝',
  ratail: '⤚',
  ratio: '∶',
  rationals: 'ℚ',
  rbarr: '⤍',
  rbbrk: '❳',
  rbrace: '}',
  rbrack: ']',
  rbrke: '⦌',
  rbrksld: '⦎',
  rbrkslu: '⦐',
  rcaron: 'ř',
  rcedil: 'ŗ',
  rceil: '⌉',
  rcub: '}',
  rcy: 'р',
  rdca: '⤷',
  rdldhar: '⥩',
  rdquo: '”',
  rdquor: '”',
  rdsh: '↳',
  real: 'ℜ',
  realine: 'ℛ',
  realpart: 'ℜ',
  reals: 'ℝ',
  rect: '▭',
  reg: '®',
  rfisht: '⥽',
  rfloor: '⌋',
  rfr: '𝔯',
  rhard: '⇁',
  rharu: '⇀',
  rharul: '⥬',
  rho: 'ρ',
  rhov: 'ϱ',
  rightarrow: '→',
  rightarrowtail: '↣',
  rightharpoondown: '⇁',
  rightharpoonup: '⇀',
  rightleftarrows: '⇄',
  rightleftharpoons: '⇌',
  rightrightarrows: '⇉',
  rightsquigarrow: '↝',
  rightthreetimes: '⋌',
  ring: '˚',
  risingdotseq: '≓',
  rlarr: '⇄',
  rlhar: '⇌',
  rlm: '‏',
  rmoust: '⎱',
  rmoustache: '⎱',
  rnmid: '⫮',
  roang: '⟭',
  roarr: '⇾',
  robrk: '⟧',
  ropar: '⦆',
  ropf: '𝕣',
  roplus: '⨮',
  rotimes: '⨵',
  rpar: ')',
  rpargt: '⦔',
  rppolint: '⨒',
  rrarr: '⇉',
  rsaquo: '›',
  rscr: '𝓇',
  rsh: '↱',
  rsqb: ']',
  rsquo: '’',
  rsquor: '’',
  rthree: '⋌',
  rtimes: '⋊',
  rtri: '▹',
  rtrie: '⊵',
  rtrif: '▸',
  rtriltri: '⧎',
  ruluhar: '⥨',
  rx: '℞',
  sacute: 'ś',
  sbquo: '‚',
  sc: '≻',
  scE: '⪴',
  scap: '⪸',
  scaron: 'š',
  sccue: '≽',
  sce: '⪰',
  scedil: 'ş',
  scirc: 'ŝ',
  scnE: '⪶',
  scnap: '⪺',
  scnsim: '⋩',
  scpolint: '⨓',
  scsim: '≿',
  scy: 'с',
  sdot: '⋅',
  sdotb: '⊡',
  sdote: '⩦',
  seArr: '⇘',
  searhk: '⤥',
  searr: '↘',
  searrow: '↘',
  sect: '§',
  semi: ';',
  seswar: '⤩',
  setminus: '∖',
  setmn: '∖',
  sext: '✶',
  sfr: '𝔰',
  sfrown: '⌢',
  sharp: '♯',
  shchcy: 'щ',
  shcy: 'ш',
  shortmid: '∣',
  shortparallel: '∥',
  shy: '­',
  sigma: 'σ',
  sigmaf: 'ς',
  sigmav: 'ς',
  sim: '∼',
  simdot: '⩪',
  sime: '≃',
  simeq: '≃',
  simg: '⪞',
  simgE: '⪠',
  siml: '⪝',
  simlE: '⪟',
  simne: '≆',
  simplus: '⨤',
  simrarr: '⥲',
  slarr: '←',
  smallsetminus: '∖',
  smashp: '⨳',
  smeparsl: '⧤',
  smid: '∣',
  smile: '⌣',
  smt: '⪪',
  smte: '⪬',
  smtes: '⪬︀',
  softcy: 'ь',
  sol: '/',
  solb: '⧄',
  solbar: '⌿',
  sopf: '𝕤',
  spades: '♠',
  spadesuit: '♠',
  spar: '∥',
  sqcap: '⊓',
  sqcaps: '⊓︀',
  sqcup: '⊔',
  sqcups: '⊔︀',
  sqsub: '⊏',
  sqsube: '⊑',
  sqsubset: '⊏',
  sqsubseteq: '⊑',
  sqsup: '⊐',
  sqsupe: '⊒',
  sqsupset: '⊐',
  sqsupseteq: '⊒',
  squ: '□',
  square: '□',
  squarf: '▪',
  squf: '▪',
  srarr: '→',
  sscr: '𝓈',
  ssetmn: '∖',
  ssmile: '⌣',
  sstarf: '⋆',
  star: '☆',
  starf: '★',
  straightepsilon: 'ϵ',
  straightphi: 'ϕ',
  strns: '¯',
  sub: '⊂',
  subE: '⫅',
  subdot: '⪽',
  sube: '⊆',
  subedot: '⫃',
  submult: '⫁',
  subnE: '⫋',
  subne: '⊊',
  subplus: '⪿',
  subrarr: '⥹',
  subset: '⊂',
  subseteq: '⊆',
  subseteqq: '⫅',
  subsetneq: '⊊',
  subsetneqq: '⫋',
  subsim: '⫇',
  subsub: '⫕',
  subsup: '⫓',
  succ: '≻',
  succapprox: '⪸',
  succcurlyeq: '≽',
  succeq: '⪰',
  succnapprox: '⪺',
  succneqq: '⪶',
  succnsim: '⋩',
  succsim: '≿',
  sum: '∑',
  sung: '♪',
  sup1: '¹',
  sup2: '²',
  sup3: '³',
  sup: '⊃',
  supE: '⫆',
  supdot: '⪾',
  supdsub: '⫘',
  supe: '⊇',
  supedot: '⫄',
  suphsol: '⟉',
  suphsub: '⫗',
  suplarr: '⥻',
  supmult: '⫂',
  supnE: '⫌',
  supne: '⊋',
  supplus: '⫀',
  supset: '⊃',
  supseteq: '⊇',
  supseteqq: '⫆',
  supsetneq: '⊋',
  supsetneqq: '⫌',
  supsim: '⫈',
  supsub: '⫔',
  supsup: '⫖',
  swArr: '⇙',
  swarhk: '⤦',
  swarr: '↙',
  swarrow: '↙',
  swnwar: '⤪',
  szlig: 'ß',
  target: '⌖',
  tau: 'τ',
  tbrk: '⎴',
  tcaron: 'ť',
  tcedil: 'ţ',
  tcy: 'т',
  tdot: '⃛',
  telrec: '⌕',
  tfr: '𝔱',
  there4: '∴',
  therefore: '∴',
  theta: 'θ',
  thetasym: 'ϑ',
  thetav: 'ϑ',
  thickapprox: '≈',
  thicksim: '∼',
  thinsp: ' ',
  thkap: '≈',
  thksim: '∼',
  thorn: 'þ',
  tilde: '˜',
  times: '×',
  timesb: '⊠',
  timesbar: '⨱',
  timesd: '⨰',
  tint: '∭',
  toea: '⤨',
  top: '⊤',
  topbot: '⌶',
  topcir: '⫱',
  topf: '𝕥',
  topfork: '⫚',
  tosa: '⤩',
  tprime: '‴',
  trade: '™',
  triangle: '▵',
  triangledown: '▿',
  triangleleft: '◃',
  trianglelefteq: '⊴',
  triangleq: '≜',
  triangleright: '▹',
  trianglerighteq: '⊵',
  tridot: '◬',
  trie: '≜',
  triminus: '⨺',
  triplus: '⨹',
  trisb: '⧍',
  tritime: '⨻',
  trpezium: '⏢',
  tscr: '𝓉',
  tscy: 'ц',
  tshcy: 'ћ',
  tstrok: 'ŧ',
  twixt: '≬',
  twoheadleftarrow: '↞',
  twoheadrightarrow: '↠',
  uArr: '⇑',
  uHar: '⥣',
  uacute: 'ú',
  uarr: '↑',
  ubrcy: 'ў',
  ubreve: 'ŭ',
  ucirc: 'û',
  ucy: 'у',
  udarr: '⇅',
  udblac: 'ű',
  udhar: '⥮',
  ufisht: '⥾',
  ufr: '𝔲',
  ugrave: 'ù',
  uharl: '↿',
  uharr: '↾',
  uhblk: '▀',
  ulcorn: '⌜',
  ulcorner: '⌜',
  ulcrop: '⌏',
  ultri: '◸',
  umacr: 'ū',
  uml: '¨',
  uogon: 'ų',
  uopf: '𝕦',
  uparrow: '↑',
  updownarrow: '↕',
  upharpoonleft: '↿',
  upharpoonright: '↾',
  uplus: '⊎',
  upsi: 'υ',
  upsih: 'ϒ',
  upsilon: 'υ',
  upuparrows: '⇈',
  urcorn: '⌝',
  urcorner: '⌝',
  urcrop: '⌎',
  uring: 'ů',
  urtri: '◹',
  uscr: '𝓊',
  utdot: '⋰',
  utilde: 'ũ',
  utri: '▵',
  utrif: '▴',
  uuarr: '⇈',
  uuml: 'ü',
  uwangle: '⦧',
  vArr: '⇕',
  vBar: '⫨',
  vBarv: '⫩',
  vDash: '⊨',
  vangrt: '⦜',
  varepsilon: 'ϵ',
  varkappa: 'ϰ',
  varnothing: '∅',
  varphi: 'ϕ',
  varpi: 'ϖ',
  varpropto: '∝',
  varr: '↕',
  varrho: 'ϱ',
  varsigma: 'ς',
  varsubsetneq: '⊊︀',
  varsubsetneqq: '⫋︀',
  varsupsetneq: '⊋︀',
  varsupsetneqq: '⫌︀',
  vartheta: 'ϑ',
  vartriangleleft: '⊲',
  vartriangleright: '⊳',
  vcy: 'в',
  vdash: '⊢',
  vee: '∨',
  veebar: '⊻',
  veeeq: '≚',
  vellip: '⋮',
  verbar: '|',
  vert: '|',
  vfr: '𝔳',
  vltri: '⊲',
  vnsub: '⊂⃒',
  vnsup: '⊃⃒',
  vopf: '𝕧',
  vprop: '∝',
  vrtri: '⊳',
  vscr: '𝓋',
  vsubnE: '⫋︀',
  vsubne: '⊊︀',
  vsupnE: '⫌︀',
  vsupne: '⊋︀',
  vzigzag: '⦚',
  wcirc: 'ŵ',
  wedbar: '⩟',
  wedge: '∧',
  wedgeq: '≙',
  weierp: '℘',
  wfr: '𝔴',
  wopf: '𝕨',
  wp: '℘',
  wr: '≀',
  wreath: '≀',
  wscr: '𝓌',
  xcap: '⋂',
  xcirc: '◯',
  xcup: '⋃',
  xdtri: '▽',
  xfr: '𝔵',
  xhArr: '⟺',
  xharr: '⟷',
  xi: 'ξ',
  xlArr: '⟸',
  xlarr: '⟵',
  xmap: '⟼',
  xnis: '⋻',
  xodot: '⨀',
  xopf: '𝕩',
  xoplus: '⨁',
  xotime: '⨂',
  xrArr: '⟹',
  xrarr: '⟶',
  xscr: '𝓍',
  xsqcup: '⨆',
  xuplus: '⨄',
  xutri: '△',
  xvee: '⋁',
  xwedge: '⋀',
  yacute: 'ý',
  yacy: 'я',
  ycirc: 'ŷ',
  ycy: 'ы',
  yen: '¥',
  yfr: '𝔶',
  yicy: 'ї',
  yopf: '𝕪',
  yscr: '𝓎',
  yucy: 'ю',
  yuml: 'ÿ',
  zacute: 'ź',
  zcaron: 'ž',
  zcy: 'з',
  zdot: 'ż',
  zeetrf: 'ℨ',
  zeta: 'ζ',
  zfr: '𝔷',
  zhcy: 'ж',
  zigrarr: '⇝',
  zopf: '𝕫',
  zscr: '𝓏',
  zwj: '‍',
  zwnj: '‌'
};

// To do: next major: use `Object.hasOwn`.
const own$4 = {}.hasOwnProperty;

/**
 * Decode a single character reference (without the `&` or `;`).
 * You probably only need this when you’re building parsers yourself that follow
 * different rules compared to HTML.
 * This is optimized to be tiny in browsers.
 *
 * @param {string} value
 *   `notin` (named), `#123` (deci), `#x123` (hexa).
 * @returns {string|false}
 *   Decoded reference.
 */
function decodeNamedCharacterReference(value) {
  return own$4.call(characterEntities, value) ? characterEntities[value] : false
}

/**
 * Like `Array#splice`, but smarter for giant arrays.
 *
 * `Array#splice` takes all items to be inserted as individual argument which
 * causes a stack overflow in V8 when trying to insert 100k items for instance.
 *
 * Otherwise, this does not return the removed items, and takes `items` as an
 * array instead of rest parameters.
 *
 * @template {unknown} T
 *   Item type.
 * @param {Array<T>} list
 *   List to operate on.
 * @param {number} start
 *   Index to remove/insert at (can be negative).
 * @param {number} remove
 *   Number of items to remove.
 * @param {Array<T>} items
 *   Items to inject into `list`.
 * @returns {undefined}
 *   Nothing.
 */
function splice(list, start, remove, items) {
  const end = list.length;
  let chunkStart = 0;
  /** @type {Array<unknown>} */
  let parameters;

  // Make start between zero and `end` (included).
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;

  // No need to chunk the items if there’s only a couple (10k) items.
  if (items.length < 10000) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    // @ts-expect-error Hush, it’s fine.
    list.splice(...parameters);
  } else {
    // Delete `remove` items starting from `start`
    if (remove) list.splice(start, remove);

    // Insert the items in chunks to not cause stack overflows.
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 10000);
      parameters.unshift(start, 0);
      // @ts-expect-error Hush, it’s fine.
      list.splice(...parameters);
      chunkStart += 10000;
      start += 10000;
    }
  }
}

/**
 * Append `items` (an array) at the end of `list` (another array).
 * When `list` was empty, returns `items` instead.
 *
 * This prevents a potentially expensive operation when `list` is empty,
 * and adds items in batches to prevent V8 from hanging.
 *
 * @template {unknown} T
 *   Item type.
 * @param {Array<T>} list
 *   List to operate on.
 * @param {Array<T>} items
 *   Items to add to `list`.
 * @returns {Array<T>}
 *   Either `list` or `items`.
 */
function push(list, items) {
  if (list.length > 0) {
    splice(list, list.length, 0, items);
    return list;
  }
  return items;
}

/**
 * @import {
 *   Extension,
 *   Handles,
 *   HtmlExtension,
 *   NormalizedExtension
 * } from 'micromark-util-types'
 */


const hasOwnProperty = {}.hasOwnProperty;

/**
 * Combine multiple syntax extensions into one.
 *
 * @param {ReadonlyArray<Extension>} extensions
 *   List of syntax extensions.
 * @returns {NormalizedExtension}
 *   A single combined extension.
 */
function combineExtensions(extensions) {
  /** @type {NormalizedExtension} */
  const all = {};
  let index = -1;

  while (++index < extensions.length) {
    syntaxExtension(all, extensions[index]);
  }

  return all
}

/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all
 *   Extension to merge into.
 * @param {Extension} extension
 *   Extension to merge.
 * @returns {undefined}
 *   Nothing.
 */
function syntaxExtension(all, extension) {
  /** @type {keyof Extension} */
  let hook;

  for (hook in extension) {
    const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
    /** @type {Record<string, unknown>} */
    const left = maybe || (all[hook] = {});
    /** @type {Record<string, unknown> | undefined} */
    const right = extension[hook];
    /** @type {string} */
    let code;

    if (right) {
      for (code in right) {
        if (!hasOwnProperty.call(left, code)) left[code] = [];
        const value = right[code];
        constructs(
          // @ts-expect-error Looks like a list.
          left[code],
          Array.isArray(value) ? value : value ? [value] : []
        );
      }
    }
  }
}

/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {Array<unknown>} existing
 *   List of constructs to merge into.
 * @param {Array<unknown>} list
 *   List of constructs to merge.
 * @returns {undefined}
 *   Nothing.
 */
function constructs(existing, list) {
  let index = -1;
  /** @type {Array<unknown>} */
  const before = [];

  while (++index < list.length) {
(list[index].add === 'after' ? existing : before).push(list[index]);
  }

  splice(existing, 0, 0, before);
}

/**
 * Turn the number (in string form as either hexa- or plain decimal) coming from
 * a numeric character reference into a character.
 *
 * Sort of like `String.fromCodePoint(Number.parseInt(value, base))`, but makes
 * non-characters and control characters safe.
 *
 * @param {string} value
 *   Value to decode.
 * @param {number} base
 *   Numeric base.
 * @returns {string}
 *   Character.
 */
function decodeNumericCharacterReference(value, base) {
  const code = Number.parseInt(value, base);
  if (
  // C0 except for HT, LF, FF, CR, space.
  code < 9 || code === 11 || code > 13 && code < 32 ||
  // Control character (DEL) of C0, and C1 controls.
  code > 126 && code < 160 ||
  // Lone high surrogates and low surrogates.
  code > 55_295 && code < 57_344 ||
  // Noncharacters.
  code > 64_975 && code < 65_008 || /* eslint-disable no-bitwise */
  (code & 65_535) === 65_535 || (code & 65_535) === 65_534 || /* eslint-enable no-bitwise */
  // Out of range
  code > 1_114_111) {
    return "\uFFFD";
  }
  return String.fromCodePoint(code);
}

/**
 * Normalize an identifier (as found in references, definitions).
 *
 * Collapses markdown whitespace, trim, and then lower- and uppercase.
 *
 * Some characters are considered “uppercase”, such as U+03F4 (`ϴ`), but if their
 * lowercase counterpart (U+03B8 (`θ`)) is uppercased will result in a different
 * uppercase character (U+0398 (`Θ`)).
 * So, to get a canonical form, we perform both lower- and uppercase.
 *
 * Using uppercase last makes sure keys will never interact with default
 * prototypal values (such as `constructor`): nothing in the prototype of
 * `Object` is uppercase.
 *
 * @param {string} value
 *   Identifier to normalize.
 * @returns {string}
 *   Normalized identifier.
 */
function normalizeIdentifier(value) {
  return value
  // Collapse markdown whitespace.
  .replace(/[\t\n\r ]+/g, " ")
  // Trim.
  .replace(/^ | $/g, '')
  // Some characters are considered “uppercase”, but if their lowercase
  // counterpart is uppercased will result in a different uppercase
  // character.
  // Hence, to get that form, we perform both lower- and uppercase.
  // Upper case makes sure keys will not interact with default prototypal
  // methods: no method is uppercase.
  .toLowerCase().toUpperCase();
}

/**
 * @import {Code} from 'micromark-util-types'
 */

/**
 * Check whether the character code represents an ASCII alpha (`a` through `z`,
 * case insensitive).
 *
 * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.
 *
 * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)
 * to U+005A (`Z`).
 *
 * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)
 * to U+007A (`z`).
 *
 * @param code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
const asciiAlpha = regexCheck(/[A-Za-z]/);

/**
 * Check whether the character code represents an ASCII alphanumeric (`a`
 * through `z`, case insensitive, or `0` through `9`).
 *
 * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha
 * (see `asciiAlpha`).
 *
 * @param code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);

/**
 * Check whether the character code represents an ASCII atext.
 *
 * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in
 * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),
 * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F
 * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E
 * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE
 * (`{`) to U+007E TILDE (`~`).
 *
 * See:
 * **\[RFC5322]**:
 * [Internet Message Format](https://tools.ietf.org/html/rfc5322).
 * P. Resnick.
 * IETF.
 *
 * @param code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);

/**
 * Check whether a character code is an ASCII control character.
 *
 * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)
 * to U+001F (US), or U+007F (DEL).
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
function asciiControl(code) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < 32 || code === 127)
  );
}

/**
 * Check whether the character code represents an ASCII digit (`0` through `9`).
 *
 * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to
 * U+0039 (`9`).
 *
 * @param code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
const asciiDigit = regexCheck(/\d/);

/**
 * Check whether the character code represents an ASCII hex digit (`a` through
 * `f`, case insensitive, or `0` through `9`).
 *
 * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex
 * digit, or an ASCII lower hex digit.
 *
 * An **ASCII upper hex digit** is a character in the inclusive range U+0041
 * (`A`) to U+0046 (`F`).
 *
 * An **ASCII lower hex digit** is a character in the inclusive range U+0061
 * (`a`) to U+0066 (`f`).
 *
 * @param code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);

/**
 * Check whether the character code represents ASCII punctuation.
 *
 * An **ASCII punctuation** is a character in the inclusive ranges U+0021
 * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT
 * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT
 * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).
 *
 * @param code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);

/**
 * Check whether a character code is a markdown line ending.
 *
 * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN
 * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).
 *
 * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE
 * RETURN (CR) are replaced by these virtual characters depending on whether
 * they occurred together.
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
function markdownLineEnding(code) {
  return code !== null && code < -2;
}

/**
 * Check whether a character code is a markdown line ending (see
 * `markdownLineEnding`) or markdown space (see `markdownSpace`).
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
function markdownLineEndingOrSpace(code) {
  return code !== null && (code < 0 || code === 32);
}

/**
 * Check whether a character code is a markdown space.
 *
 * A **markdown space** is the concrete character U+0020 SPACE (SP) and the
 * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).
 *
 * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is
 * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL
 * SPACE (VS) characters, depending on the column at which the tab occurred.
 *
 * @param {Code} code
 *   Code.
 * @returns {boolean}
 *   Whether it matches.
 */
function markdownSpace(code) {
  return code === -2 || code === -1 || code === 32;
}

// Size note: removing ASCII from the regex and using `asciiPunctuation` here
// In fact adds to the bundle size.
/**
 * Check whether the character code represents Unicode punctuation.
 *
 * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,
 * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`
 * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`
 * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII
 * punctuation (see `asciiPunctuation`).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 *
 * @param code
 *   Code.
 * @returns
 *   Whether it matches.
 */
const unicodePunctuation = regexCheck(/\p{P}|\p{S}/u);

/**
 * Check whether the character code represents Unicode whitespace.
 *
 * Note that this does handle micromark specific markdown whitespace characters.
 * See `markdownLineEndingOrSpace` to check that.
 *
 * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,
 * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),
 * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\[UNICODE]**).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 *
 * @param code
 *   Code.
 * @returns
 *   Whether it matches.
 */
const unicodeWhitespace = regexCheck(/\s/);

/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 *   Expression.
 * @returns {(code: Code) => boolean}
 *   Check.
 */
function regexCheck(regex) {
  return check;

  /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code
   *   Character code.
   * @returns {boolean}
   *   Whether the character code matches the bound regex.
   */
  function check(code) {
    return code !== null && code > -1 && regex.test(String.fromCharCode(code));
  }
}

/**
 * Normalize a URL.
 *
 * Encode unsafe characters with percent-encoding, skipping already encoded
 * sequences.
 *
 * @param {string} value
 *   URI to normalize.
 * @returns {string}
 *   Normalized URI.
 */
function normalizeUri(value) {
  /** @type {Array<string>} */
  const result = [];
  let index = -1;
  let start = 0;
  let skip = 0;
  while (++index < value.length) {
    const code = value.charCodeAt(index);
    /** @type {string} */
    let replace = '';

    // A correct percent encoded value.
    if (code === 37 && asciiAlphanumeric(value.charCodeAt(index + 1)) && asciiAlphanumeric(value.charCodeAt(index + 2))) {
      skip = 2;
    }
    // ASCII.
    else if (code < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {
        replace = String.fromCharCode(code);
      }
    }
    // Astral.
    else if (code > 55_295 && code < 57_344) {
      const next = value.charCodeAt(index + 1);

      // A correct surrogate pair.
      if (code < 56_320 && next > 56_319 && next < 57_344) {
        replace = String.fromCharCode(code, next);
        skip = 1;
      }
      // Lone surrogate.
      else {
        replace = "\uFFFD";
      }
    }
    // Unicode.
    else {
      replace = String.fromCharCode(code);
    }
    if (replace) {
      result.push(value.slice(start, index), encodeURIComponent(replace));
      start = index + skip + 1;
      replace = '';
    }
    if (skip) {
      index += skip;
      skip = 0;
    }
  }
  return result.join('') + value.slice(start);
}

/**
 * @import {Effects, State, TokenType} from 'micromark-util-types'
 */


// To do: implement `spaceOrTab`, `spaceOrTabMinMax`, `spaceOrTabWithOptions`.

/**
 * Parse spaces and tabs.
 *
 * There is no `nok` parameter:
 *
 * *   spaces in markdown are often optional, in which case this factory can be
 *     used and `ok` will be switched to whether spaces were found or not
 * *   one line ending or space can be detected with `markdownSpace(code)` right
 *     before using `factorySpace`
 *
 * ###### Examples
 *
 * Where `␉` represents a tab (plus how much it expands) and `␠` represents a
 * single space.
 *
 * ```markdown
 * ␉
 * ␠␠␠␠
 * ␉␠
 * ```
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {TokenType} type
 *   Type (`' \t'`).
 * @param {number | undefined} [max=Infinity]
 *   Max (exclusive).
 * @returns {State}
 *   Start state.
 */
function factorySpace(effects, ok, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;

  /** @type {State} */
  function start(code) {
    if (markdownSpace(code)) {
      effects.enter(type);
      return prefix(code);
    }
    return ok(code);
  }

  /** @type {State} */
  function prefix(code) {
    if (markdownSpace(code) && size++ < limit) {
      effects.consume(code);
      return prefix;
    }
    effects.exit(type);
    return ok(code);
  }
}

/**
 * @import {
 *   InitialConstruct,
 *   Initializer,
 *   State,
 *   TokenizeContext,
 *   Token
 * } from 'micromark-util-types'
 */

/** @type {InitialConstruct} */
const content$1 = {
  tokenize: initializeContent
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Initializer}
 *   Content.
 */
function initializeContent(effects) {
  const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  /** @type {Token} */
  let previous;
  return contentStart;

  /** @type {State} */
  function afterContentStartConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return factorySpace(effects, contentStart, "linePrefix");
  }

  /** @type {State} */
  function paragraphInitial(code) {
    effects.enter("paragraph");
    return lineStart(code);
  }

  /** @type {State} */
  function lineStart(code) {
    const token = effects.enter("chunkText", {
      contentType: "text",
      previous
    });
    if (previous) {
      previous.next = token;
    }
    previous = token;
    return data(code);
  }

  /** @type {State} */
  function data(code) {
    if (code === null) {
      effects.exit("chunkText");
      effects.exit("paragraph");
      effects.consume(code);
      return;
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit("chunkText");
      return lineStart;
    }

    // Data.
    effects.consume(code);
    return data;
  }
}

/**
 * @import {
 *   Construct,
 *   ContainerState,
 *   InitialConstruct,
 *   Initializer,
 *   Point,
 *   State,
 *   TokenizeContext,
 *   Tokenizer,
 *   Token
 * } from 'micromark-util-types'
 */

/** @type {InitialConstruct} */
const document$2 = {
  tokenize: initializeDocument
};

/** @type {Construct} */
const containerConstruct = {
  tokenize: tokenizeContainer
};

/**
 * @this {TokenizeContext}
 *   Self.
 * @type {Initializer}
 *   Initializer.
 */
function initializeDocument(effects) {
  const self = this;
  /** @type {Array<StackItem>} */
  const stack = [];
  let continued = 0;
  /** @type {TokenizeContext | undefined} */
  let childFlow;
  /** @type {Token | undefined} */
  let childToken;
  /** @type {number} */
  let lineStartOffset;
  return start;

  /** @type {State} */
  function start(code) {
    // First we iterate through the open blocks, starting with the root
    // document, and descending through last children down to the last open
    // block.
    // Each block imposes a condition that the line must satisfy if the block is
    // to remain open.
    // For example, a block quote requires a `>` character.
    // A paragraph requires a non-blank line.
    // In this phase we may match all or just some of the open blocks.
    // But we cannot close unmatched blocks yet, because we may have a lazy
    // continuation line.
    if (continued < stack.length) {
      const item = stack[continued];
      self.containerState = item[1];
      return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code);
    }

    // Done.
    return checkNewContainers(code);
  }

  /** @type {State} */
  function documentContinue(code) {
    continued++;

    // Note: this field is called `_closeFlow` but it also closes containers.
    // Perhaps a good idea to rename it but it’s already used in the wild by
    // extensions.
    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = undefined;
      if (childFlow) {
        closeFlow();
      }

      // Note: this algorithm for moving events around is similar to the
      // algorithm when dealing with lazy lines in `writeToChild`.
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      /** @type {Point | undefined} */
      let point;

      // Find the flow chunk.
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === 'exit' && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          point = self.events[indexBeforeFlow][1].end;
          break;
        }
      }
      exitContainers(continued);

      // Fix positions.
      let index = indexBeforeExits;
      while (index < self.events.length) {
        self.events[index][1].end = {
          ...point
        };
        index++;
      }

      // Inject the exits earlier (they’re still also at the end).
      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));

      // Discard the duplicate exits.
      self.events.length = index;
      return checkNewContainers(code);
    }
    return start(code);
  }

  /** @type {State} */
  function checkNewContainers(code) {
    // Next, after consuming the continuation markers for existing blocks, we
    // look for new block starts (e.g. `>` for a block quote).
    // If we encounter a new block start, we close any blocks unmatched in
    // step 1 before creating the new block as a child of the last matched
    // block.
    if (continued === stack.length) {
      // No need to `check` whether there’s a container, of `exitContainers`
      // would be moot.
      // We can instead immediately `attempt` to parse one.
      if (!childFlow) {
        return documentContinued(code);
      }

      // If we have concrete content, such as block HTML or fenced code,
      // we can’t have containers “pierce” into them, so we can immediately
      // start.
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code);
      }

      // If we do have flow, it could still be a blank line,
      // but we’d be interrupting it w/ a new container if there’s a current
      // construct.
      // To do: next major: remove `_gfmTableDynamicInterruptHack` (no longer
      // needed in micromark-extension-gfm-table@1.0.6).
      self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
    }

    // Check if there is a new container.
    self.containerState = {};
    return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code);
  }

  /** @type {State} */
  function thereIsANewContainer(code) {
    if (childFlow) closeFlow();
    exitContainers(continued);
    return documentContinued(code);
  }

  /** @type {State} */
  function thereIsNoNewContainer(code) {
    self.parser.lazy[self.now().line] = continued !== stack.length;
    lineStartOffset = self.now().offset;
    return flowStart(code);
  }

  /** @type {State} */
  function documentContinued(code) {
    // Try new containers.
    self.containerState = {};
    return effects.attempt(containerConstruct, containerContinue, flowStart)(code);
  }

  /** @type {State} */
  function containerContinue(code) {
    continued++;
    stack.push([self.currentConstruct, self.containerState]);
    // Try another.
    return documentContinued(code);
  }

  /** @type {State} */
  function flowStart(code) {
    if (code === null) {
      if (childFlow) closeFlow();
      exitContainers(0);
      effects.consume(code);
      return;
    }
    childFlow = childFlow || self.parser.flow(self.now());
    effects.enter("chunkFlow", {
      _tokenizer: childFlow,
      contentType: "flow",
      previous: childToken
    });
    return flowContinue(code);
  }

  /** @type {State} */
  function flowContinue(code) {
    if (code === null) {
      writeToChild(effects.exit("chunkFlow"), true);
      exitContainers(0);
      effects.consume(code);
      return;
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      writeToChild(effects.exit("chunkFlow"));
      // Get ready for the next line.
      continued = 0;
      self.interrupt = undefined;
      return start;
    }
    effects.consume(code);
    return flowContinue;
  }

  /**
   * @param {Token} token
   *   Token.
   * @param {boolean | undefined} [endOfFile]
   *   Whether the token is at the end of the file (default: `false`).
   * @returns {undefined}
   *   Nothing.
   */
  function writeToChild(token, endOfFile) {
    const stream = self.sliceStream(token);
    if (endOfFile) stream.push(null);
    token.previous = childToken;
    if (childToken) childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream);

    // Alright, so we just added a lazy line:
    //
    // ```markdown
    // > a
    // b.
    //
    // Or:
    //
    // > ~~~c
    // d
    //
    // Or:
    //
    // > | e |
    // f
    // ```
    //
    // The construct in the second example (fenced code) does not accept lazy
    // lines, so it marked itself as done at the end of its first line, and
    // then the content construct parses `d`.
    // Most constructs in markdown match on the first line: if the first line
    // forms a construct, a non-lazy line can’t “unmake” it.
    //
    // The construct in the third example is potentially a GFM table, and
    // those are *weird*.
    // It *could* be a table, from the first line, if the following line
    // matches a condition.
    // In this case, that second line is lazy, which “unmakes” the first line
    // and turns the whole into one content block.
    //
    // We’ve now parsed the non-lazy and the lazy line, and can figure out
    // whether the lazy line started a new flow block.
    // If it did, we exit the current containers between the two flow blocks.
    if (self.parser.lazy[token.start.line]) {
      let index = childFlow.events.length;
      while (index--) {
        if (
        // The token starts before the line ending…
        childFlow.events[index][1].start.offset < lineStartOffset && (
        // …and either is not ended yet…
        !childFlow.events[index][1].end ||
        // …or ends after it.
        childFlow.events[index][1].end.offset > lineStartOffset)) {
          // Exit: there’s still something open, which means it’s a lazy line
          // part of something.
          return;
        }
      }

      // Note: this algorithm for moving events around is similar to the
      // algorithm when closing flow in `documentContinue`.
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      /** @type {boolean | undefined} */
      let seen;
      /** @type {Point | undefined} */
      let point;

      // Find the previous chunk (the one before the lazy line).
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === 'exit' && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point = self.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      exitContainers(continued);

      // Fix positions.
      index = indexBeforeExits;
      while (index < self.events.length) {
        self.events[index][1].end = {
          ...point
        };
        index++;
      }

      // Inject the exits earlier (they’re still also at the end).
      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));

      // Discard the duplicate exits.
      self.events.length = index;
    }
  }

  /**
   * @param {number} size
   *   Size.
   * @returns {undefined}
   *   Nothing.
   */
  function exitContainers(size) {
    let index = stack.length;

    // Exit open containers.
    while (index-- > size) {
      const entry = stack[index];
      self.containerState = entry[1];
      entry[0].exit.call(self, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = undefined;
    childFlow = undefined;
    self.containerState._closeFlow = undefined;
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 *   Tokenizer.
 */
function tokenizeContainer(effects, ok, nok) {
  // Always populated by defaults.

  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok, nok), "linePrefix", this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);
}

/**
 * @import {Code} from 'micromark-util-types'
 */

/**
 * Classify whether a code represents whitespace, punctuation, or something
 * else.
 *
 * Used for attention (emphasis, strong), whose sequences can open or close
 * based on the class of surrounding characters.
 *
 * > 👉 **Note**: eof (`null`) is seen as whitespace.
 *
 * @param {Code} code
 *   Code.
 * @returns {typeof constants.characterGroupWhitespace | typeof constants.characterGroupPunctuation | undefined}
 *   Group.
 */
function classifyCharacter(code) {
  if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
    return 1;
  }
  if (unicodePunctuation(code)) {
    return 2;
  }
}

/**
 * @import {Event, Resolver, TokenizeContext} from 'micromark-util-types'
 */

/**
 * Call all `resolveAll`s.
 *
 * @param {ReadonlyArray<{resolveAll?: Resolver | undefined}>} constructs
 *   List of constructs, optionally with `resolveAll`s.
 * @param {Array<Event>} events
 *   List of events.
 * @param {TokenizeContext} context
 *   Context used by `tokenize`.
 * @returns {Array<Event>}
 *   Changed events.
 */
function resolveAll(constructs, events, context) {
  /** @type {Array<Resolver>} */
  const called = [];
  let index = -1;

  while (++index < constructs.length) {
    const resolve = constructs[index].resolveAll;

    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }

  return events
}

/**
 * @import {
 *   Code,
 *   Construct,
 *   Event,
 *   Point,
 *   Resolver,
 *   State,
 *   TokenizeContext,
 *   Tokenizer,
 *   Token
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const attention = {
  name: 'attention',
  resolveAll: resolveAllAttention,
  tokenize: tokenizeAttention
};

/**
 * Take all events and resolve attention to emphasis or strong.
 *
 * @type {Resolver}
 */
// eslint-disable-next-line complexity
function resolveAllAttention(events, context) {
  let index = -1;
  /** @type {number} */
  let open;
  /** @type {Token} */
  let group;
  /** @type {Token} */
  let text;
  /** @type {Token} */
  let openingSequence;
  /** @type {Token} */
  let closingSequence;
  /** @type {number} */
  let use;
  /** @type {Array<Event>} */
  let nextEvents;
  /** @type {number} */
  let offset;

  // Walk through all events.
  //
  // Note: performance of this is fine on an mb of normal markdown, but it’s
  // a bottleneck for malicious stuff.
  while (++index < events.length) {
    // Find a token that can close.
    if (events[index][0] === 'enter' && events[index][1].type === 'attentionSequence' && events[index][1]._close) {
      open = index;

      // Now walk back to find an opener.
      while (open--) {
        // Find a token that can open the closer.
        if (events[open][0] === 'exit' && events[open][1].type === 'attentionSequence' && events[open][1]._open &&
        // If the markers are the same:
        context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
          // If the opening can close or the closing can open,
          // and the close size *is not* a multiple of three,
          // but the sum of the opening and closing size *is* multiple of three,
          // then don’t match.
          if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) {
            continue;
          }

          // Number of markers to use from the sequence.
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
          const start = {
            ...events[open][1].end
          };
          const end = {
            ...events[index][1].start
          };
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: {
              ...events[open][1].end
            }
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...events[index][1].start
            },
            end
          };
          text = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: {
              ...events[open][1].end
            },
            end: {
              ...events[index][1].start
            }
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: {
              ...openingSequence.start
            },
            end: {
              ...closingSequence.end
            }
          };
          events[open][1].end = {
            ...openingSequence.start
          };
          events[index][1].start = {
            ...closingSequence.end
          };
          nextEvents = [];

          // If there are more markers in the opening, add them before.
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [['enter', events[open][1], context], ['exit', events[open][1], context]]);
          }

          // Opening.
          nextEvents = push(nextEvents, [['enter', group, context], ['enter', openingSequence, context], ['exit', openingSequence, context], ['enter', text, context]]);

          // Always populated by defaults.

          // Between.
          nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context));

          // Closing.
          nextEvents = push(nextEvents, [['exit', text, context], ['enter', closingSequence, context], ['exit', closingSequence, context], ['exit', group, context]]);

          // If there are more markers in the closing, add them after.
          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [['enter', events[index][1], context], ['exit', events[index][1], context]]);
          } else {
            offset = 0;
          }
          splice(events, open - 1, index - open + 3, nextEvents);
          index = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }

  // Remove remaining sequences.
  index = -1;
  while (++index < events.length) {
    if (events[index][1].type === 'attentionSequence') {
      events[index][1].type = 'data';
    }
  }
  return events;
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeAttention(effects, ok) {
  const attentionMarkers = this.parser.constructs.attentionMarkers.null;
  const previous = this.previous;
  const before = classifyCharacter(previous);

  /** @type {NonNullable<Code>} */
  let marker;
  return start;

  /**
   * Before a sequence.
   *
   * ```markdown
   * > | **
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    marker = code;
    effects.enter('attentionSequence');
    return inside(code);
  }

  /**
   * In a sequence.
   *
   * ```markdown
   * > | **
   *     ^^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    if (code === marker) {
      effects.consume(code);
      return inside;
    }
    const token = effects.exit('attentionSequence');

    // To do: next major: move this to resolver, just like `markdown-rs`.
    const after = classifyCharacter(code);

    // Always populated by defaults.

    const open = !after || after === 2 && before || attentionMarkers.includes(code);
    const close = !before || before === 2 && after || attentionMarkers.includes(previous);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok(code);
  }
}

/**
 * Move a point a bit.
 *
 * Note: `move` only works inside lines! It’s not possible to move past other
 * chunks (replacement characters, tabs, or line endings).
 *
 * @param {Point} point
 *   Point.
 * @param {number} offset
 *   Amount to move.
 * @returns {undefined}
 *   Nothing.
 */
function movePoint(point, offset) {
  point.column += offset;
  point.offset += offset;
  point._bufferIndex += offset;
}

/**
 * @import {
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const autolink = {
  name: 'autolink',
  tokenize: tokenizeAutolink
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeAutolink(effects, ok, nok) {
  let size = 0;
  return start;

  /**
   * Start of an autolink.
   *
   * ```markdown
   * > | a<https://example.com>b
   *      ^
   * > | a<user@example.com>b
   *      ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }

  /**
   * After `<`, at protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *       ^
   * > | a<user@example.com>b
   *       ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      return schemeOrEmailAtext;
    }
    if (code === 64) {
      return nok(code);
    }
    return emailAtext(code);
  }

  /**
   * At second byte of protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *        ^
   * > | a<user@example.com>b
   *        ^
   * ```
   *
   * @type {State}
   */
  function schemeOrEmailAtext(code) {
    // ASCII alphanumeric and `+`, `-`, and `.`.
    if (code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) {
      // Count the previous alphabetical from `open` too.
      size = 1;
      return schemeInsideOrEmailAtext(code);
    }
    return emailAtext(code);
  }

  /**
   * In ambiguous protocol or atext.
   *
   * ```markdown
   * > | a<https://example.com>b
   *        ^
   * > | a<user@example.com>b
   *        ^
   * ```
   *
   * @type {State}
   */
  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code);
      size = 0;
      return urlInside;
    }

    // ASCII alphanumeric and `+`, `-`, and `.`.
    if ((code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) && size++ < 32) {
      effects.consume(code);
      return schemeInsideOrEmailAtext;
    }
    size = 0;
    return emailAtext(code);
  }

  /**
   * After protocol, in URL.
   *
   * ```markdown
   * > | a<https://example.com>b
   *             ^
   * ```
   *
   * @type {State}
   */
  function urlInside(code) {
    if (code === 62) {
      effects.exit("autolinkProtocol");
      effects.enter("autolinkMarker");
      effects.consume(code);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok;
    }

    // ASCII control, space, or `<`.
    if (code === null || code === 32 || code === 60 || asciiControl(code)) {
      return nok(code);
    }
    effects.consume(code);
    return urlInside;
  }

  /**
   * In email atext.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *              ^
   * ```
   *
   * @type {State}
   */
  function emailAtext(code) {
    if (code === 64) {
      effects.consume(code);
      return emailAtSignOrDot;
    }
    if (asciiAtext(code)) {
      effects.consume(code);
      return emailAtext;
    }
    return nok(code);
  }

  /**
   * In label, after at-sign or dot.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *                 ^       ^
   * ```
   *
   * @type {State}
   */
  function emailAtSignOrDot(code) {
    return asciiAlphanumeric(code) ? emailLabel(code) : nok(code);
  }

  /**
   * In label, where `.` and `>` are allowed.
   *
   * ```markdown
   * > | a<user.name@example.com>b
   *                   ^
   * ```
   *
   * @type {State}
   */
  function emailLabel(code) {
    if (code === 46) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code === 62) {
      // Exit, then change the token type.
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      effects.enter("autolinkMarker");
      effects.consume(code);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok;
    }
    return emailValue(code);
  }

  /**
   * In label, where `.` and `>` are *not* allowed.
   *
   * Though, this is also used in `emailLabel` to parse other values.
   *
   * ```markdown
   * > | a<user.name@ex-ample.com>b
   *                    ^
   * ```
   *
   * @type {State}
   */
  function emailValue(code) {
    // ASCII alphanumeric or `-`.
    if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
      const next = code === 45 ? emailValue : emailLabel;
      effects.consume(code);
      return next;
    }
    return nok(code);
  }
}

/**
 * @import {
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const blankLine = {
  partial: true,
  tokenize: tokenizeBlankLine
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeBlankLine(effects, ok, nok) {
  return start;

  /**
   * Start of blank line.
   *
   * > 👉 **Note**: `␠` represents a space character.
   *
   * ```markdown
   * > | ␠␠␊
   *     ^
   * > | ␊
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    return markdownSpace(code) ? factorySpace(effects, after, "linePrefix")(code) : after(code);
  }

  /**
   * At eof/eol, after optional whitespace.
   *
   * > 👉 **Note**: `␠` represents a space character.
   *
   * ```markdown
   * > | ␠␠␊
   *       ^
   * > | ␊
   *     ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
  }
}

/**
 * @import {
 *   Construct,
 *   Exiter,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const blockQuote = {
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit: exit$1,
  name: 'blockQuote',
  tokenize: tokenizeBlockQuoteStart
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeBlockQuoteStart(effects, ok, nok) {
  const self = this;
  return start;

  /**
   * Start of block quote.
   *
   * ```markdown
   * > | > a
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (code === 62) {
      const state = self.containerState;
      if (!state.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        state.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code);
  }

  /**
   * After `>`, before optional whitespace.
   *
   * ```markdown
   * > | > a
   *      ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    if (markdownSpace(code)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok;
    }
    effects.exit("blockQuotePrefix");
    return ok(code);
  }
}

/**
 * Start of block quote continuation.
 *
 * ```markdown
 *   | > a
 * > | > b
 *     ^
 * ```
 *
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  const self = this;
  return contStart;

  /**
   * Start of block quote continuation.
   *
   * Also used to parse the first block quote opening.
   *
   * ```markdown
   *   | > a
   * > | > b
   *     ^
   * ```
   *
   * @type {State}
   */
  function contStart(code) {
    if (markdownSpace(code)) {
      // Always populated by defaults.

      return factorySpace(effects, contBefore, "linePrefix", self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4)(code);
    }
    return contBefore(code);
  }

  /**
   * At `>`, after optional whitespace.
   *
   * Also used to parse the first block quote opening.
   *
   * ```markdown
   *   | > a
   * > | > b
   *     ^
   * ```
   *
   * @type {State}
   */
  function contBefore(code) {
    return effects.attempt(blockQuote, ok, nok)(code);
  }
}

/** @type {Exiter} */
function exit$1(effects) {
  effects.exit("blockQuote");
}

/**
 * @import {
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const characterEscape = {
  name: 'characterEscape',
  tokenize: tokenizeCharacterEscape
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeCharacterEscape(effects, ok, nok) {
  return start;

  /**
   * Start of character escape.
   *
   * ```markdown
   * > | a\*b
   *      ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code);
    effects.exit("escapeMarker");
    return inside;
  }

  /**
   * After `\`, at punctuation.
   *
   * ```markdown
   * > | a\*b
   *       ^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    // ASCII punctuation.
    if (asciiPunctuation(code)) {
      effects.enter("characterEscapeValue");
      effects.consume(code);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok;
    }
    return nok(code);
  }
}

/**
 * @import {
 *   Code,
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const characterReference = {
  name: 'characterReference',
  tokenize: tokenizeCharacterReference
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeCharacterReference(effects, ok, nok) {
  const self = this;
  let size = 0;
  /** @type {number} */
  let max;
  /** @type {(code: Code) => boolean} */
  let test;
  return start;

  /**
   * Start of character reference.
   *
   * ```markdown
   * > | a&amp;b
   *      ^
   * > | a&#123;b
   *      ^
   * > | a&#x9;b
   *      ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code);
    effects.exit("characterReferenceMarker");
    return open;
  }

  /**
   * After `&`, at `#` for numeric references or alphanumeric for named
   * references.
   *
   * ```markdown
   * > | a&amp;b
   *       ^
   * > | a&#123;b
   *       ^
   * > | a&#x9;b
   *       ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (code === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max = 31;
    test = asciiAlphanumeric;
    return value(code);
  }

  /**
   * After `#`, at `x` for hexadecimals or digit for decimals.
   *
   * ```markdown
   * > | a&#123;b
   *        ^
   * > | a&#x9;b
   *        ^
   * ```
   *
   * @type {State}
   */
  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test = asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test = asciiDigit;
    return value(code);
  }

  /**
   * After markers (`&#x`, `&#`, or `&`), in value, before `;`.
   *
   * The character reference kind defines what and how many characters are
   * allowed.
   *
   * ```markdown
   * > | a&amp;b
   *       ^^^
   * > | a&#123;b
   *        ^^^
   * > | a&#x9;b
   *         ^
   * ```
   *
   * @type {State}
   */
  function value(code) {
    if (code === 59 && size) {
      const token = effects.exit("characterReferenceValue");
      if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token))) {
        return nok(code);
      }

      // To do: `markdown-rs` uses a different name:
      // `CharacterReferenceMarkerSemi`.
      effects.enter("characterReferenceMarker");
      effects.consume(code);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok;
    }
    if (test(code) && size++ < max) {
      effects.consume(code);
      return value;
    }
    return nok(code);
  }
}

/**
 * @import {
 *   Code,
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const nonLazyContinuation = {
  partial: true,
  tokenize: tokenizeNonLazyContinuation
};

/** @type {Construct} */
const codeFenced = {
  concrete: true,
  name: 'codeFenced',
  tokenize: tokenizeCodeFenced
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeCodeFenced(effects, ok, nok) {
  const self = this;
  /** @type {Construct} */
  const closeStart = {
    partial: true,
    tokenize: tokenizeCloseStart
  };
  let initialPrefix = 0;
  let sizeOpen = 0;
  /** @type {NonNullable<Code>} */
  let marker;
  return start;

  /**
   * Start of code.
   *
   * ```markdown
   * > | ~~~js
   *     ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // To do: parse whitespace like `markdown-rs`.
    return beforeSequenceOpen(code);
  }

  /**
   * In opening fence, after prefix, at sequence.
   *
   * ```markdown
   * > | ~~~js
   *     ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function beforeSequenceOpen(code) {
    const tail = self.events[self.events.length - 1];
    initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    marker = code;
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    return sequenceOpen(code);
  }

  /**
   * In opening fence sequence.
   *
   * ```markdown
   * > | ~~~js
   *      ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function sequenceOpen(code) {
    if (code === marker) {
      sizeOpen++;
      effects.consume(code);
      return sequenceOpen;
    }
    if (sizeOpen < 3) {
      return nok(code);
    }
    effects.exit("codeFencedFenceSequence");
    return markdownSpace(code) ? factorySpace(effects, infoBefore, "whitespace")(code) : infoBefore(code);
  }

  /**
   * In opening fence, after the sequence (and optional whitespace), before info.
   *
   * ```markdown
   * > | ~~~js
   *        ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function infoBefore(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit("codeFencedFence");
      return self.interrupt ? ok(code) : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info(code);
  }

  /**
   * In info.
   *
   * ```markdown
   * > | ~~~js
   *        ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function info(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return infoBefore(code);
    }
    if (markdownSpace(code)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace(effects, metaBefore, "whitespace")(code);
    }
    if (code === 96 && code === marker) {
      return nok(code);
    }
    effects.consume(code);
    return info;
  }

  /**
   * In opening fence, after info and whitespace, before meta.
   *
   * ```markdown
   * > | ~~~js eval
   *           ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function metaBefore(code) {
    if (code === null || markdownLineEnding(code)) {
      return infoBefore(code);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code);
  }

  /**
   * In meta.
   *
   * ```markdown
   * > | ~~~js eval
   *           ^
   *   | alert(1)
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function meta(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return infoBefore(code);
    }
    if (code === 96 && code === marker) {
      return nok(code);
    }
    effects.consume(code);
    return meta;
  }

  /**
   * At eol/eof in code, before a non-lazy closing fence or content.
   *
   * ```markdown
   * > | ~~~js
   *          ^
   * > | alert(1)
   *             ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function atNonLazyBreak(code) {
    return effects.attempt(closeStart, after, contentBefore)(code);
  }

  /**
   * Before code content, not a closing fence, at eol.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *             ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function contentBefore(code) {
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return contentStart;
  }

  /**
   * Before code content, not a closing fence.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function contentStart(code) {
    return initialPrefix > 0 && markdownSpace(code) ? factorySpace(effects, beforeContentChunk, "linePrefix", initialPrefix + 1)(code) : beforeContentChunk(code);
  }

  /**
   * Before code content, after optional prefix.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function beforeContentChunk(code) {
    if (code === null || markdownLineEnding(code)) {
      return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code);
    }
    effects.enter("codeFlowValue");
    return contentChunk(code);
  }

  /**
   * In code content.
   *
   * ```markdown
   *   | ~~~js
   * > | alert(1)
   *     ^^^^^^^^
   *   | ~~~
   * ```
   *
   * @type {State}
   */
  function contentChunk(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit("codeFlowValue");
      return beforeContentChunk(code);
    }
    effects.consume(code);
    return contentChunk;
  }

  /**
   * After code.
   *
   * ```markdown
   *   | ~~~js
   *   | alert(1)
   * > | ~~~
   *        ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    effects.exit("codeFenced");
    return ok(code);
  }

  /**
   * @this {TokenizeContext}
   *   Context.
   * @type {Tokenizer}
   */
  function tokenizeCloseStart(effects, ok, nok) {
    let size = 0;
    return startBefore;

    /**
     *
     *
     * @type {State}
     */
    function startBefore(code) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return start;
    }

    /**
     * Before closing fence, at optional whitespace.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */
    function start(code) {
      // Always populated by defaults.

      // To do: `enter` here or in next state?
      effects.enter("codeFencedFence");
      return markdownSpace(code) ? factorySpace(effects, beforeSequenceClose, "linePrefix", self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4)(code) : beforeSequenceClose(code);
    }

    /**
     * In closing fence, after optional whitespace, at sequence.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */
    function beforeSequenceClose(code) {
      if (code === marker) {
        effects.enter("codeFencedFenceSequence");
        return sequenceClose(code);
      }
      return nok(code);
    }

    /**
     * In closing fence sequence.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *     ^
     * ```
     *
     * @type {State}
     */
    function sequenceClose(code) {
      if (code === marker) {
        size++;
        effects.consume(code);
        return sequenceClose;
      }
      if (size >= sizeOpen) {
        effects.exit("codeFencedFenceSequence");
        return markdownSpace(code) ? factorySpace(effects, sequenceCloseAfter, "whitespace")(code) : sequenceCloseAfter(code);
      }
      return nok(code);
    }

    /**
     * After closing fence sequence, after optional whitespace.
     *
     * ```markdown
     *   | ~~~js
     *   | alert(1)
     * > | ~~~
     *        ^
     * ```
     *
     * @type {State}
     */
    function sequenceCloseAfter(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit("codeFencedFence");
        return ok(code);
      }
      return nok(code);
    }
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeNonLazyContinuation(effects, ok, nok) {
  const self = this;
  return start;

  /**
   *
   *
   * @type {State}
   */
  function start(code) {
    if (code === null) {
      return nok(code);
    }
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return lineStart;
  }

  /**
   *
   *
   * @type {State}
   */
  function lineStart(code) {
    return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
  }
}

/**
 * @import {
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const codeIndented = {
  name: 'codeIndented',
  tokenize: tokenizeCodeIndented
};

/** @type {Construct} */
const furtherStart = {
  partial: true,
  tokenize: tokenizeFurtherStart
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeCodeIndented(effects, ok, nok) {
  const self = this;
  return start;

  /**
   * Start of code (indented).
   *
   * > **Parsing note**: it is not needed to check if this first line is a
   * > filled line (that it has a non-whitespace character), because blank lines
   * > are parsed already, so we never run into that.
   *
   * ```markdown
   * > |     aaa
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // To do: manually check if interrupting like `markdown-rs`.

    effects.enter("codeIndented");
    // To do: use an improved `space_or_tab` function like `markdown-rs`,
    // so that we can drop the next state.
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code);
  }

  /**
   * At start, after 1 or 4 spaces.
   *
   * ```markdown
   * > |     aaa
   *         ^
   * ```
   *
   * @type {State}
   */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? atBreak(code) : nok(code);
  }

  /**
   * At a break.
   *
   * ```markdown
   * > |     aaa
   *         ^  ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (code === null) {
      return after(code);
    }
    if (markdownLineEnding(code)) {
      return effects.attempt(furtherStart, atBreak, after)(code);
    }
    effects.enter("codeFlowValue");
    return inside(code);
  }

  /**
   * In code content.
   *
   * ```markdown
   * > |     aaa
   *         ^^^^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit("codeFlowValue");
      return atBreak(code);
    }
    effects.consume(code);
    return inside;
  }

  /** @type {State} */
  function after(code) {
    effects.exit("codeIndented");
    // To do: allow interrupting like `markdown-rs`.
    // Feel free to interrupt.
    // tokenizer.interrupt = false
    return ok(code);
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeFurtherStart(effects, ok, nok) {
  const self = this;
  return furtherStart;

  /**
   * At eol, trying to parse another indent.
   *
   * ```markdown
   * > |     aaa
   *            ^
   *   |     bbb
   * ```
   *
   * @type {State}
   */
  function furtherStart(code) {
    // To do: improve `lazy` / `pierce` handling.
    // If this is a lazy line, it can’t be code.
    if (self.parser.lazy[self.now().line]) {
      return nok(code);
    }
    if (markdownLineEnding(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return furtherStart;
    }

    // To do: the code here in `micromark-js` is a bit different from
    // `markdown-rs` because there it can attempt spaces.
    // We can’t yet.
    //
    // To do: use an improved `space_or_tab` function like `markdown-rs`,
    // so that we can drop the next state.
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code);
  }

  /**
   * At start, after 1 or 4 spaces.
   *
   * ```markdown
   * > |     aaa
   *         ^
   * ```
   *
   * @type {State}
   */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok(code) : markdownLineEnding(code) ? furtherStart(code) : nok(code);
  }
}

/**
 * @import {
 *   Construct,
 *   Previous,
 *   Resolver,
 *   State,
 *   TokenizeContext,
 *   Tokenizer,
 *   Token
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const codeText = {
  name: 'codeText',
  previous: previous$1,
  resolve: resolveCodeText,
  tokenize: tokenizeCodeText
};

// To do: next major: don’t resolve, like `markdown-rs`.
/** @type {Resolver} */
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  /** @type {number} */
  let index;
  /** @type {number | undefined} */
  let enter;

  // If we start and end with an EOL or a space.
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === 'space') && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === 'space')) {
    index = headEnterIndex;

    // And we have data.
    while (++index < tailExitIndex) {
      if (events[index][1].type === "codeTextData") {
        // Then we have padding.
        events[headEnterIndex][1].type = "codeTextPadding";
        events[tailExitIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }

  // Merge adjacent spaces and data.
  index = headEnterIndex - 1;
  tailExitIndex++;
  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (index !== tailExitIndex && events[index][1].type !== "lineEnding") {
        enter = index;
      }
    } else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
      events[enter][1].type = "codeTextData";
      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end;
        events.splice(enter + 2, index - enter - 2);
        tailExitIndex -= index - enter - 2;
        index = enter + 2;
      }
      enter = undefined;
    }
  }
  return events;
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Previous}
 */
function previous$1(code) {
  // If there is a previous code, there will always be a tail.
  return code !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeCodeText(effects, ok, nok) {
  let sizeOpen = 0;
  /** @type {number} */
  let size;
  /** @type {Token} */
  let token;
  return start;

  /**
   * Start of code (text).
   *
   * ```markdown
   * > | `a`
   *     ^
   * > | \`a`
   *      ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return sequenceOpen(code);
  }

  /**
   * In opening sequence.
   *
   * ```markdown
   * > | `a`
   *     ^
   * ```
   *
   * @type {State}
   */
  function sequenceOpen(code) {
    if (code === 96) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeTextSequence");
    return between(code);
  }

  /**
   * Between something and something else.
   *
   * ```markdown
   * > | `a`
   *      ^^
   * ```
   *
   * @type {State}
   */
  function between(code) {
    // EOF.
    if (code === null) {
      return nok(code);
    }

    // To do: next major: don’t do spaces in resolve, but when compiling,
    // like `markdown-rs`.
    // Tabs don’t work, and virtual spaces don’t make sense.
    if (code === 32) {
      effects.enter('space');
      effects.consume(code);
      effects.exit('space');
      return between;
    }

    // Closing fence? Could also be data.
    if (code === 96) {
      token = effects.enter("codeTextSequence");
      size = 0;
      return sequenceClose(code);
    }
    if (markdownLineEnding(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return between;
    }

    // Data.
    effects.enter("codeTextData");
    return data(code);
  }

  /**
   * In data.
   *
   * ```markdown
   * > | `a`
   *      ^
   * ```
   *
   * @type {State}
   */
  function data(code) {
    if (code === null || code === 32 || code === 96 || markdownLineEnding(code)) {
      effects.exit("codeTextData");
      return between(code);
    }
    effects.consume(code);
    return data;
  }

  /**
   * In closing sequence.
   *
   * ```markdown
   * > | `a`
   *       ^
   * ```
   *
   * @type {State}
   */
  function sequenceClose(code) {
    // More.
    if (code === 96) {
      effects.consume(code);
      size++;
      return sequenceClose;
    }

    // Done!
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok(code);
    }

    // More or less accents: mark as data.
    token.type = "codeTextData";
    return data(code);
  }
}

/**
 * Some of the internal operations of micromark do lots of editing
 * operations on very large arrays. This runs into problems with two
 * properties of most circa-2020 JavaScript interpreters:
 *
 *  - Array-length modifications at the high end of an array (push/pop) are
 *    expected to be common and are implemented in (amortized) time
 *    proportional to the number of elements added or removed, whereas
 *    other operations (shift/unshift and splice) are much less efficient.
 *  - Function arguments are passed on the stack, so adding tens of thousands
 *    of elements to an array with `arr.push(...newElements)` will frequently
 *    cause stack overflows. (see <https://stackoverflow.com/questions/22123769/rangeerror-maximum-call-stack-size-exceeded-why>)
 *
 * SpliceBuffers are an implementation of gap buffers, which are a
 * generalization of the "queue made of two stacks" idea. The splice buffer
 * maintains a cursor, and moving the cursor has cost proportional to the
 * distance the cursor moves, but inserting, deleting, or splicing in
 * new information at the cursor is as efficient as the push/pop operation.
 * This allows for an efficient sequence of splices (or pushes, pops, shifts,
 * or unshifts) as long such edits happen at the same part of the array or
 * generally sweep through the array from the beginning to the end.
 *
 * The interface for splice buffers also supports large numbers of inputs by
 * passing a single array argument rather passing multiple arguments on the
 * function call stack.
 *
 * @template T
 *   Item type.
 */
class SpliceBuffer {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(initial) {
    /** @type {Array<T>} */
    this.left = initial ? [...initial] : [];
    /** @type {Array<T>} */
    this.right = [];
  }

  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(index) {
    if (index < 0 || index >= this.left.length + this.right.length) {
      throw new RangeError('Cannot access index `' + index + '` in a splice buffer of size `' + (this.left.length + this.right.length) + '`');
    }
    if (index < this.left.length) return this.left[index];
    return this.right[this.right.length - index + this.left.length - 1];
  }

  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }

  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    this.setCursor(0);
    return this.right.pop();
  }

  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(start, end) {
    /** @type {number} */
    const stop = end === null || end === undefined ? Number.POSITIVE_INFINITY : end;
    if (stop < this.left.length) {
      return this.left.slice(start, stop);
    }
    if (start > this.left.length) {
      return this.right.slice(this.right.length - stop + this.left.length, this.right.length - start + this.left.length).reverse();
    }
    return this.left.slice(start).concat(this.right.slice(this.right.length - stop + this.left.length).reverse());
  }

  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(start, deleteCount, items) {
    /** @type {number} */
    const count = deleteCount || 0;
    this.setCursor(Math.trunc(start));
    const removed = this.right.splice(this.right.length - count, Number.POSITIVE_INFINITY);
    if (items) chunkedPush(this.left, items);
    return removed.reverse();
  }

  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    this.setCursor(Number.POSITIVE_INFINITY);
    return this.left.pop();
  }

  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(item) {
    this.setCursor(Number.POSITIVE_INFINITY);
    this.left.push(item);
  }

  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(items) {
    this.setCursor(Number.POSITIVE_INFINITY);
    chunkedPush(this.left, items);
  }

  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(item) {
    this.setCursor(0);
    this.right.push(item);
  }

  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(items) {
    this.setCursor(0);
    chunkedPush(this.right, items.reverse());
  }

  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(n) {
    if (n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0) return;
    if (n < this.left.length) {
      // Move cursor to the this.left
      const removed = this.left.splice(n, Number.POSITIVE_INFINITY);
      chunkedPush(this.right, removed.reverse());
    } else {
      // Move cursor to the this.right
      const removed = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
      chunkedPush(this.left, removed.reverse());
    }
  }
}

/**
 * Avoid stack overflow by pushing items onto the stack in segments
 *
 * @template T
 *   Item type.
 * @param {Array<T>} list
 *   List to inject into.
 * @param {ReadonlyArray<T>} right
 *   Items to inject.
 * @return {undefined}
 *   Nothing.
 */
function chunkedPush(list, right) {
  /** @type {number} */
  let chunkStart = 0;
  if (right.length < 10000) {
    list.push(...right);
  } else {
    while (chunkStart < right.length) {
      list.push(...right.slice(chunkStart, chunkStart + 10000));
      chunkStart += 10000;
    }
  }
}

/**
 * @import {Chunk, Event, Token} from 'micromark-util-types'
 */


/**
 * Tokenize subcontent.
 *
 * @param {Array<Event>} eventsArray
 *   List of events.
 * @returns {boolean}
 *   Whether subtokens were found.
 */
// eslint-disable-next-line complexity
function subtokenize(eventsArray) {
  /** @type {Record<string, number>} */
  const jumps = {};
  let index = -1;
  /** @type {Event} */
  let event;
  /** @type {number | undefined} */
  let lineIndex;
  /** @type {number} */
  let otherIndex;
  /** @type {Event} */
  let otherEvent;
  /** @type {Array<Event>} */
  let parameters;
  /** @type {Array<Event>} */
  let subevents;
  /** @type {boolean | undefined} */
  let more;
  const events = new SpliceBuffer(eventsArray);
  while (++index < events.length) {
    while (index in jumps) {
      index = jumps[index];
    }
    event = events.get(index);

    // Add a hook for the GFM tasklist extension, which needs to know if text
    // is in the first content of a list item.
    if (index && event[1].type === "chunkFlow" && events.get(index - 1)[1].type === "listItemPrefix") {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === "content") {
            break;
          }
          if (subevents[otherIndex][1].type === "chunkText") {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }

    // Enter.
    if (event[0] === 'enter') {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index));
        index = jumps[index];
        more = true;
      }
    }
    // Exit.
    else if (event[1]._container) {
      otherIndex = index;
      lineIndex = undefined;
      while (otherIndex--) {
        otherEvent = events.get(otherIndex);
        if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
          if (otherEvent[0] === 'enter') {
            if (lineIndex) {
              events.get(lineIndex)[1].type = "lineEndingBlank";
            }
            otherEvent[1].type = "lineEnding";
            lineIndex = otherIndex;
          }
        } else if (otherEvent[1].type === "linePrefix" || otherEvent[1].type === "listItemIndent") ; else {
          break;
        }
      }
      if (lineIndex) {
        // Fix position.
        event[1].end = {
          ...events.get(lineIndex)[1].start
        };

        // Switch container exit w/ line endings.
        parameters = events.slice(lineIndex, index);
        parameters.unshift(event);
        events.splice(lineIndex, index - lineIndex + 1, parameters);
      }
    }
  }

  // The changes to the `events` buffer must be copied back into the eventsArray
  splice(eventsArray, 0, Number.POSITIVE_INFINITY, events.slice(0));
  return !more;
}

/**
 * Tokenize embedded tokens.
 *
 * @param {SpliceBuffer<Event>} events
 *   Events.
 * @param {number} eventIndex
 *   Index.
 * @returns {Record<string, number>}
 *   Gaps.
 */
function subcontent(events, eventIndex) {
  const token = events.get(eventIndex)[1];
  const context = events.get(eventIndex)[2];
  let startPosition = eventIndex - 1;
  /** @type {Array<number>} */
  const startPositions = [];
  let tokenizer = token._tokenizer;
  if (!tokenizer) {
    tokenizer = context.parser[token.contentType](token.start);
    if (token._contentTypeTextTrailing) {
      tokenizer._contentTypeTextTrailing = true;
    }
  }
  const childEvents = tokenizer.events;
  /** @type {Array<[number, number]>} */
  const jumps = [];
  /** @type {Record<string, number>} */
  const gaps = {};
  /** @type {Array<Chunk>} */
  let stream;
  /** @type {Token | undefined} */
  let previous;
  let index = -1;
  /** @type {Token | undefined} */
  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start];

  // Loop forward through the linked tokens to pass them in order to the
  // subtokenizer.
  while (current) {
    // Find the position of the event for this token.
    while (events.get(++startPosition)[1] !== current) {
      // Empty.
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = undefined;
      }
    }

    // Unravel the next token.
    previous = current;
    current = current.next;
  }

  // Now, loop back through all events (and linked tokens), to figure out which
  // parts belong where.
  current = token;
  while (++index < childEvents.length) {
    if (
    // Find a void token that includes a break.
    childEvents[index][0] === 'exit' && childEvents[index - 1][0] === 'enter' && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
      start = index + 1;
      breaks.push(start);
      // Help GC.
      current._tokenizer = undefined;
      current.previous = undefined;
      current = current.next;
    }
  }

  // Help GC.
  tokenizer.events = [];

  // If there’s one more token (which is the cases for lines that end in an
  // EOF), that’s perfect: the last point we found starts it.
  // If there isn’t then make sure any remaining content is added to it.
  if (current) {
    // Help GC.
    current._tokenizer = undefined;
    current.previous = undefined;
  } else {
    breaks.pop();
  }

  // Now splice the events from the subtokenizer into the current events,
  // moving back to front so that splice indices aren’t affected.
  index = breaks.length;
  while (index--) {
    const slice = childEvents.slice(breaks[index], breaks[index + 1]);
    const start = startPositions.pop();
    jumps.push([start, start + slice.length - 1]);
    events.splice(start, 2, slice);
  }
  jumps.reverse();
  index = -1;
  while (++index < jumps.length) {
    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
    adjust += jumps[index][1] - jumps[index][0] - 1;
  }
  return gaps;
}

/**
 * @import {
 *   Construct,
 *   Resolver,
 *   State,
 *   TokenizeContext,
 *   Tokenizer,
 *   Token
 * } from 'micromark-util-types'
 */

/**
 * No name because it must not be turned off.
 * @type {Construct}
 */
const content = {
  resolve: resolveContent,
  tokenize: tokenizeContent
};

/** @type {Construct} */
const continuationConstruct = {
  partial: true,
  tokenize: tokenizeContinuation
};

/**
 * Content is transparent: it’s parsed right now. That way, definitions are also
 * parsed right now: before text in paragraphs (specifically, media) are parsed.
 *
 * @type {Resolver}
 */
function resolveContent(events) {
  subtokenize(events);
  return events;
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeContent(effects, ok) {
  /** @type {Token | undefined} */
  let previous;
  return chunkStart;

  /**
   * Before a content chunk.
   *
   * ```markdown
   * > | abc
   *     ^
   * ```
   *
   * @type {State}
   */
  function chunkStart(code) {
    effects.enter("content");
    previous = effects.enter("chunkContent", {
      contentType: "content"
    });
    return chunkInside(code);
  }

  /**
   * In a content chunk.
   *
   * ```markdown
   * > | abc
   *     ^^^
   * ```
   *
   * @type {State}
   */
  function chunkInside(code) {
    if (code === null) {
      return contentEnd(code);
    }

    // To do: in `markdown-rs`, each line is parsed on its own, and everything
    // is stitched together resolving.
    if (markdownLineEnding(code)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code);
    }

    // Data.
    effects.consume(code);
    return chunkInside;
  }

  /**
   *
   *
   * @type {State}
   */
  function contentEnd(code) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok(code);
  }

  /**
   *
   *
   * @type {State}
   */
  function contentContinue(code) {
    effects.consume(code);
    effects.exit("chunkContent");
    previous.next = effects.enter("chunkContent", {
      contentType: "content",
      previous
    });
    previous = previous.next;
    return chunkInside;
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeContinuation(effects, ok, nok) {
  const self = this;
  return startLookahead;

  /**
   *
   *
   * @type {State}
   */
  function startLookahead(code) {
    effects.exit("chunkContent");
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return factorySpace(effects, prefixed, "linePrefix");
  }

  /**
   *
   *
   * @type {State}
   */
  function prefixed(code) {
    if (code === null || markdownLineEnding(code)) {
      return nok(code);
    }

    // Always populated by defaults.

    const tail = self.events[self.events.length - 1];
    if (!self.parser.constructs.disable.null.includes('codeIndented') && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok(code);
    }
    return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
  }
}

/**
 * @import {Effects, State, TokenType} from 'micromark-util-types'
 */

/**
 * Parse destinations.
 *
 * ###### Examples
 *
 * ```markdown
 * <a>
 * <a\>b>
 * <a b>
 * <a)>
 * a
 * a\)b
 * a(b)c
 * a(b)
 * ```
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {State} nok
 *   State switched to when unsuccessful.
 * @param {TokenType} type
 *   Type for whole (`<a>` or `b`).
 * @param {TokenType} literalType
 *   Type when enclosed (`<a>`).
 * @param {TokenType} literalMarkerType
 *   Type for enclosing (`<` and `>`).
 * @param {TokenType} rawType
 *   Type when not enclosed (`b`).
 * @param {TokenType} stringType
 *   Type for the value (`a` or `b`).
 * @param {number | undefined} [max=Infinity]
 *   Depth of nested parens (inclusive).
 * @returns {State}
 *   Start state.
 */
function factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;

  /**
   * Start of destination.
   *
   * ```markdown
   * > | <aa>
   *     ^
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (code === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      return enclosedBefore;
    }

    // ASCII control, space, closing paren.
    if (code === null || code === 32 || code === 41 || asciiControl(code)) {
      return nok(code);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return raw(code);
  }

  /**
   * After `<`, at an enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */
  function enclosedBefore(code) {
    if (code === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return enclosed(code);
  }

  /**
   * In enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */
  function enclosed(code) {
    if (code === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return enclosedBefore(code);
    }
    if (code === null || code === 60 || markdownLineEnding(code)) {
      return nok(code);
    }
    effects.consume(code);
    return code === 92 ? enclosedEscape : enclosed;
  }

  /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | <a\*a>
   *        ^
   * ```
   *
   * @type {State}
   */
  function enclosedEscape(code) {
    if (code === 60 || code === 62 || code === 92) {
      effects.consume(code);
      return enclosed;
    }
    return enclosed(code);
  }

  /**
   * In raw destination.
   *
   * ```markdown
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function raw(code) {
    if (!balance && (code === null || code === 41 || markdownLineEndingOrSpace(code))) {
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok(code);
    }
    if (balance < limit && code === 40) {
      effects.consume(code);
      balance++;
      return raw;
    }
    if (code === 41) {
      effects.consume(code);
      balance--;
      return raw;
    }

    // ASCII control (but *not* `\0`) and space and `(`.
    // Note: in `markdown-rs`, `\0` exists in codes, in `micromark-js` it
    // doesn’t.
    if (code === null || code === 32 || code === 40 || asciiControl(code)) {
      return nok(code);
    }
    effects.consume(code);
    return code === 92 ? rawEscape : raw;
  }

  /**
   * After `\`, at special character.
   *
   * ```markdown
   * > | a\*a
   *       ^
   * ```
   *
   * @type {State}
   */
  function rawEscape(code) {
    if (code === 40 || code === 41 || code === 92) {
      effects.consume(code);
      return raw;
    }
    return raw(code);
  }
}

/**
 * @import {
 *   Effects,
 *   State,
 *   TokenizeContext,
 *   TokenType
 * } from 'micromark-util-types'
 */

/**
 * Parse labels.
 *
 * > 👉 **Note**: labels in markdown are capped at 999 characters in the string.
 *
 * ###### Examples
 *
 * ```markdown
 * [a]
 * [a
 * b]
 * [a\]b]
 * ```
 *
 * @this {TokenizeContext}
 *   Tokenize context.
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {State} nok
 *   State switched to when unsuccessful.
 * @param {TokenType} type
 *   Type of the whole label (`[a]`).
 * @param {TokenType} markerType
 *   Type for the markers (`[` and `]`).
 * @param {TokenType} stringType
 *   Type for the identifier (`a`).
 * @returns {State}
 *   Start state.
 */
function factoryLabel(effects, ok, nok, type, markerType, stringType) {
  const self = this;
  let size = 0;
  /** @type {boolean} */
  let seen;
  return start;

  /**
   * Start of label.
   *
   * ```markdown
   * > | [a]
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }

  /**
   * In label, at something, before something else.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (size > 999 || code === null || code === 91 || code === 93 && !seen ||
    // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    code === 94 && !size && '_hiddenFootnoteSupport' in self.parser.constructs) {
      return nok(code);
    }
    if (code === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }

    // To do: indent? Link chunks and EOLs together?
    if (markdownLineEnding(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return labelInside(code);
  }

  /**
   * In label, in text.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */
  function labelInside(code) {
    if (code === null || code === 91 || code === 93 || markdownLineEnding(code) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code);
    }
    effects.consume(code);
    if (!seen) seen = !markdownSpace(code);
    return code === 92 ? labelEscape : labelInside;
  }

  /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | [a\*a]
   *        ^
   * ```
   *
   * @type {State}
   */
  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return labelInside;
    }
    return labelInside(code);
  }
}

/**
 * @import {
 *   Code,
 *   Effects,
 *   State,
 *   TokenType
 * } from 'micromark-util-types'
 */

/**
 * Parse titles.
 *
 * ###### Examples
 *
 * ```markdown
 * "a"
 * 'b'
 * (c)
 * "a
 * b"
 * 'a
 *     b'
 * (a\)b)
 * ```
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {State} nok
 *   State switched to when unsuccessful.
 * @param {TokenType} type
 *   Type of the whole title (`"a"`, `'b'`, `(c)`).
 * @param {TokenType} markerType
 *   Type for the markers (`"`, `'`, `(`, and `)`).
 * @param {TokenType} stringType
 *   Type for the value (`a`).
 * @returns {State}
 *   Start state.
 */
function factoryTitle(effects, ok, nok, type, markerType, stringType) {
  /** @type {NonNullable<Code>} */
  let marker;
  return start;

  /**
   * Start of title.
   *
   * ```markdown
   * > | "a"
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (code === 34 || code === 39 || code === 40) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      marker = code === 40 ? 41 : code;
      return begin;
    }
    return nok(code);
  }

  /**
   * After opening marker.
   *
   * This is also used at the closing marker.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */
  function begin(code) {
    if (code === marker) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    return atBreak(code);
  }

  /**
   * At something, before something else.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (code === marker) {
      effects.exit(stringType);
      return begin(marker);
    }
    if (code === null) {
      return nok(code);
    }

    // Note: blank lines can’t exist in content.
    if (markdownLineEnding(code)) {
      // To do: use `space_or_tab_eol_with_options`, connect.
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return factorySpace(effects, atBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return inside(code);
  }

  /**
   *
   *
   * @type {State}
   */
  function inside(code) {
    if (code === marker || code === null || markdownLineEnding(code)) {
      effects.exit("chunkString");
      return atBreak(code);
    }
    effects.consume(code);
    return code === 92 ? escape : inside;
  }

  /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | "a\*b"
   *      ^
   * ```
   *
   * @type {State}
   */
  function escape(code) {
    if (code === marker || code === 92) {
      effects.consume(code);
      return inside;
    }
    return inside(code);
  }
}

/**
 * @import {Effects, State} from 'micromark-util-types'
 */

/**
 * Parse spaces and tabs.
 *
 * There is no `nok` parameter:
 *
 * *   line endings or spaces in markdown are often optional, in which case this
 *     factory can be used and `ok` will be switched to whether spaces were found
 *     or not
 * *   one line ending or space can be detected with
 *     `markdownLineEndingOrSpace(code)` right before using `factoryWhitespace`
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @returns {State}
 *   Start state.
 */
function factoryWhitespace(effects, ok) {
  /** @type {boolean} */
  let seen;
  return start;

  /** @type {State} */
  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if (markdownSpace(code)) {
      return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code);
    }
    return ok(code);
  }
}

/**
 * @import {
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const definition$1 = {
  name: 'definition',
  tokenize: tokenizeDefinition
};

/** @type {Construct} */
const titleBefore = {
  partial: true,
  tokenize: tokenizeTitleBefore
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeDefinition(effects, ok, nok) {
  const self = this;
  /** @type {string} */
  let identifier;
  return start;

  /**
   * At start of a definition.
   *
   * ```markdown
   * > | [a]: b "c"
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // Do not interrupt paragraphs (but do follow definitions).
    // To do: do `interrupt` the way `markdown-rs` does.
    // To do: parse whitespace the way `markdown-rs` does.
    effects.enter("definition");
    return before(code);
  }

  /**
   * After optional whitespace, at `[`.
   *
   * ```markdown
   * > | [a]: b "c"
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    // To do: parse whitespace the way `markdown-rs` does.

    return factoryLabel.call(self, effects, labelAfter,
    // Note: we don’t need to reset the way `markdown-rs` does.
    nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code);
  }

  /**
   * After label.
   *
   * ```markdown
   * > | [a]: b "c"
   *        ^
   * ```
   *
   * @type {State}
   */
  function labelAfter(code) {
    identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
    if (code === 58) {
      effects.enter("definitionMarker");
      effects.consume(code);
      effects.exit("definitionMarker");
      return markerAfter;
    }
    return nok(code);
  }

  /**
   * After marker.
   *
   * ```markdown
   * > | [a]: b "c"
   *         ^
   * ```
   *
   * @type {State}
   */
  function markerAfter(code) {
    // Note: whitespace is optional.
    return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, destinationBefore)(code) : destinationBefore(code);
  }

  /**
   * Before destination.
   *
   * ```markdown
   * > | [a]: b "c"
   *          ^
   * ```
   *
   * @type {State}
   */
  function destinationBefore(code) {
    return factoryDestination(effects, destinationAfter,
    // Note: we don’t need to reset the way `markdown-rs` does.
    nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(code);
  }

  /**
   * After destination.
   *
   * ```markdown
   * > | [a]: b "c"
   *           ^
   * ```
   *
   * @type {State}
   */
  function destinationAfter(code) {
    return effects.attempt(titleBefore, after, after)(code);
  }

  /**
   * After definition.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    return markdownSpace(code) ? factorySpace(effects, afterWhitespace, "whitespace")(code) : afterWhitespace(code);
  }

  /**
   * After definition, after optional whitespace.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */
  function afterWhitespace(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit("definition");

      // Note: we don’t care about uniqueness.
      // It’s likely that that doesn’t happen very frequently.
      // It is more likely that it wastes precious time.
      self.parser.defined.push(identifier);

      // To do: `markdown-rs` interrupt.
      // // You’d be interrupting.
      // tokenizer.interrupt = true
      return ok(code);
    }
    return nok(code);
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeTitleBefore(effects, ok, nok) {
  return titleBefore;

  /**
   * After destination, at whitespace.
   *
   * ```markdown
   * > | [a]: b
   *           ^
   * > | [a]: b "c"
   *           ^
   * ```
   *
   * @type {State}
   */
  function titleBefore(code) {
    return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, beforeMarker)(code) : nok(code);
  }

  /**
   * At title.
   *
   * ```markdown
   *   | [a]: b
   * > | "c"
   *     ^
   * ```
   *
   * @type {State}
   */
  function beforeMarker(code) {
    return factoryTitle(effects, titleAfter, nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code);
  }

  /**
   * After title.
   *
   * ```markdown
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */
  function titleAfter(code) {
    return markdownSpace(code) ? factorySpace(effects, titleAfterOptionalWhitespace, "whitespace")(code) : titleAfterOptionalWhitespace(code);
  }

  /**
   * After title, after optional whitespace.
   *
   * ```markdown
   * > | [a]: b "c"
   *               ^
   * ```
   *
   * @type {State}
   */
  function titleAfterOptionalWhitespace(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
  }
}

/**
 * @import {
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const hardBreakEscape = {
  name: 'hardBreakEscape',
  tokenize: tokenizeHardBreakEscape
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeHardBreakEscape(effects, ok, nok) {
  return start;

  /**
   * Start of a hard break (escape).
   *
   * ```markdown
   * > | a\
   *      ^
   *   | b
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter("hardBreakEscape");
    effects.consume(code);
    return after;
  }

  /**
   * After `\`, at eol.
   *
   * ```markdown
   * > | a\
   *       ^
   *   | b
   * ```
   *
   *  @type {State}
   */
  function after(code) {
    if (markdownLineEnding(code)) {
      effects.exit("hardBreakEscape");
      return ok(code);
    }
    return nok(code);
  }
}

/**
 * @import {
 *   Construct,
 *   Resolver,
 *   State,
 *   TokenizeContext,
 *   Tokenizer,
 *   Token
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const headingAtx = {
  name: 'headingAtx',
  resolve: resolveHeadingAtx,
  tokenize: tokenizeHeadingAtx
};

/** @type {Resolver} */
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  /** @type {Token} */
  let content;
  /** @type {Token} */
  let text;

  // Prefix whitespace, part of the opening.
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }

  // Suffix whitespace, part of the closing.
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [['enter', content, context], ['enter', text, context], ['exit', text, context], ['exit', content, context]]);
  }
  return events;
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeHeadingAtx(effects, ok, nok) {
  let size = 0;
  return start;

  /**
   * Start of a heading (atx).
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // To do: parse indent like `markdown-rs`.
    effects.enter("atxHeading");
    return before(code);
  }

  /**
   * After optional whitespace, at `#`.
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    effects.enter("atxHeadingSequence");
    return sequenceOpen(code);
  }

  /**
   * In opening sequence.
   *
   * ```markdown
   * > | ## aa
   *     ^
   * ```
   *
   * @type {State}
   */
  function sequenceOpen(code) {
    if (code === 35 && size++ < 6) {
      effects.consume(code);
      return sequenceOpen;
    }

    // Always at least one `#`.
    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit("atxHeadingSequence");
      return atBreak(code);
    }
    return nok(code);
  }

  /**
   * After something, before something else.
   *
   * ```markdown
   * > | ## aa
   *       ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (code === 35) {
      effects.enter("atxHeadingSequence");
      return sequenceFurther(code);
    }
    if (code === null || markdownLineEnding(code)) {
      effects.exit("atxHeading");
      // To do: interrupt like `markdown-rs`.
      // // Feel free to interrupt.
      // tokenizer.interrupt = false
      return ok(code);
    }
    if (markdownSpace(code)) {
      return factorySpace(effects, atBreak, "whitespace")(code);
    }

    // To do: generate `data` tokens, add the `text` token later.
    // Needs edit map, see: `markdown.rs`.
    effects.enter("atxHeadingText");
    return data(code);
  }

  /**
   * In further sequence (after whitespace).
   *
   * Could be normal “visible” hashes in the heading or a final sequence.
   *
   * ```markdown
   * > | ## aa ##
   *           ^
   * ```
   *
   * @type {State}
   */
  function sequenceFurther(code) {
    if (code === 35) {
      effects.consume(code);
      return sequenceFurther;
    }
    effects.exit("atxHeadingSequence");
    return atBreak(code);
  }

  /**
   * In text.
   *
   * ```markdown
   * > | ## aa
   *        ^
   * ```
   *
   * @type {State}
   */
  function data(code) {
    if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
      effects.exit("atxHeadingText");
      return atBreak(code);
    }
    effects.consume(code);
    return data;
  }
}

/**
 * List of lowercase HTML “block” tag names.
 *
 * The list, when parsing HTML (flow), results in more relaxed rules (condition
 * 6).
 * Because they are known blocks, the HTML-like syntax doesn’t have to be
 * strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 *
 * > 👉 **Note**: `search` was added in `CommonMark@0.31`.
 */
const htmlBlockNames = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'search',
  'section',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
];

/**
 * List of lowercase HTML “raw” tag names.
 *
 * The list, when parsing HTML (flow), results in HTML that can include lines
 * without exiting, until a closing tag also in this list is found (condition
 * 1).
 *
 * This module is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 *
 * > 👉 **Note**: `textarea` was added in `CommonMark@0.30`.
 */
const htmlRawNames = ['pre', 'script', 'style', 'textarea'];

/**
 * @import {
 *   Code,
 *   Construct,
 *   Resolver,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */


/** @type {Construct} */
const htmlFlow = {
  concrete: true,
  name: 'htmlFlow',
  resolveTo: resolveToHtmlFlow,
  tokenize: tokenizeHtmlFlow
};

/** @type {Construct} */
const blankLineBefore = {
  partial: true,
  tokenize: tokenizeBlankLineBefore
};
const nonLazyContinuationStart = {
  partial: true,
  tokenize: tokenizeNonLazyContinuationStart
};

/** @type {Resolver} */
function resolveToHtmlFlow(events) {
  let index = events.length;
  while (index--) {
    if (events[index][0] === 'enter' && events[index][1].type === "htmlFlow") {
      break;
    }
  }
  if (index > 1 && events[index - 2][1].type === "linePrefix") {
    // Add the prefix start to the HTML token.
    events[index][1].start = events[index - 2][1].start;
    // Add the prefix start to the HTML line token.
    events[index + 1][1].start = events[index - 2][1].start;
    // Remove the line prefix.
    events.splice(index - 2, 2);
  }
  return events;
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeHtmlFlow(effects, ok, nok) {
  const self = this;
  /** @type {number} */
  let marker;
  /** @type {boolean} */
  let closingTag;
  /** @type {string} */
  let buffer;
  /** @type {number} */
  let index;
  /** @type {Code} */
  let markerB;
  return start;

  /**
   * Start of HTML (flow).
   *
   * ```markdown
   * > | <x />
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // To do: parse indent like `markdown-rs`.
    return before(code);
  }

  /**
   * At `<`, after optional whitespace.
   *
   * ```markdown
   * > | <x />
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code);
    return open;
  }

  /**
   * After `<`, at tag name or other stuff.
   *
   * ```markdown
   * > | <x />
   *      ^
   * > | <!doctype>
   *      ^
   * > | <!--xxx-->
   *      ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationOpen;
    }
    if (code === 47) {
      effects.consume(code);
      closingTag = true;
      return tagCloseStart;
    }
    if (code === 63) {
      effects.consume(code);
      marker = 3;
      // To do:
      // tokenizer.concrete = true
      // To do: use `markdown-rs` style interrupt.
      // While we’re in an instruction instead of a declaration, we’re on a `?`
      // right now, so we do need to search for `>`, similar to declarations.
      return self.interrupt ? ok : continuationDeclarationInside;
    }

    // ASCII alphabetical.
    if (asciiAlpha(code)) {
      // Always the case.
      effects.consume(code);
      buffer = String.fromCharCode(code);
      return tagName;
    }
    return nok(code);
  }

  /**
   * After `<!`, at declaration, comment, or CDATA.
   *
   * ```markdown
   * > | <!doctype>
   *       ^
   * > | <!--xxx-->
   *       ^
   * > | <![CDATA[>&<]]>
   *       ^
   * ```
   *
   * @type {State}
   */
  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code);
      marker = 2;
      return commentOpenInside;
    }
    if (code === 91) {
      effects.consume(code);
      marker = 5;
      index = 0;
      return cdataOpenInside;
    }

    // ASCII alphabetical.
    if (asciiAlpha(code)) {
      effects.consume(code);
      marker = 4;
      // // Do not form containers.
      // tokenizer.concrete = true
      return self.interrupt ? ok : continuationDeclarationInside;
    }
    return nok(code);
  }

  /**
   * After `<!-`, inside a comment, at another `-`.
   *
   * ```markdown
   * > | <!--xxx-->
   *        ^
   * ```
   *
   * @type {State}
   */
  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code);
      // // Do not form containers.
      // tokenizer.concrete = true
      return self.interrupt ? ok : continuationDeclarationInside;
    }
    return nok(code);
  }

  /**
   * After `<![`, inside CDATA, expecting `CDATA[`.
   *
   * ```markdown
   * > | <![CDATA[>&<]]>
   *        ^^^^^^
   * ```
   *
   * @type {State}
   */
  function cdataOpenInside(code) {
    const value = "CDATA[";
    if (code === value.charCodeAt(index++)) {
      effects.consume(code);
      if (index === value.length) {
        // // Do not form containers.
        // tokenizer.concrete = true
        return self.interrupt ? ok : continuation;
      }
      return cdataOpenInside;
    }
    return nok(code);
  }

  /**
   * After `</`, in closing tag, at tag name.
   *
   * ```markdown
   * > | </x>
   *       ^
   * ```
   *
   * @type {State}
   */
  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      // Always the case.
      effects.consume(code);
      buffer = String.fromCharCode(code);
      return tagName;
    }
    return nok(code);
  }

  /**
   * In tag name.
   *
   * ```markdown
   * > | <ab>
   *      ^^
   * > | </ab>
   *       ^^
   * ```
   *
   * @type {State}
   */
  function tagName(code) {
    if (code === null || code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      const slash = code === 47;
      const name = buffer.toLowerCase();
      if (!slash && !closingTag && htmlRawNames.includes(name)) {
        marker = 1;
        // // Do not form containers.
        // tokenizer.concrete = true
        return self.interrupt ? ok(code) : continuation(code);
      }
      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        marker = 6;
        if (slash) {
          effects.consume(code);
          return basicSelfClosing;
        }

        // // Do not form containers.
        // tokenizer.concrete = true
        return self.interrupt ? ok(code) : continuation(code);
      }
      marker = 7;
      // Do not support complete HTML when interrupting.
      return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code) : closingTag ? completeClosingTagAfter(code) : completeAttributeNameBefore(code);
    }

    // ASCII alphanumerical and `-`.
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return tagName;
    }
    return nok(code);
  }

  /**
   * After closing slash of a basic tag name.
   *
   * ```markdown
   * > | <div/>
   *          ^
   * ```
   *
   * @type {State}
   */
  function basicSelfClosing(code) {
    if (code === 62) {
      effects.consume(code);
      // // Do not form containers.
      // tokenizer.concrete = true
      return self.interrupt ? ok : continuation;
    }
    return nok(code);
  }

  /**
   * After closing slash of a complete tag name.
   *
   * ```markdown
   * > | <x/>
   *        ^
   * ```
   *
   * @type {State}
   */
  function completeClosingTagAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeClosingTagAfter;
    }
    return completeEnd(code);
  }

  /**
   * At an attribute name.
   *
   * At first, this state is used after a complete tag name, after whitespace,
   * where it expects optional attributes or the end of the tag.
   * It is also reused after attributes, when expecting more optional
   * attributes.
   *
   * ```markdown
   * > | <a />
   *        ^
   * > | <a :b>
   *        ^
   * > | <a _b>
   *        ^
   * > | <a b>
   *        ^
   * > | <a >
   *        ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeNameBefore(code) {
    if (code === 47) {
      effects.consume(code);
      return completeEnd;
    }

    // ASCII alphanumerical and `:` and `_`.
    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code);
      return completeAttributeName;
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeNameBefore;
    }
    return completeEnd(code);
  }

  /**
   * In attribute name.
   *
   * ```markdown
   * > | <a :b>
   *         ^
   * > | <a _b>
   *         ^
   * > | <a b>
   *         ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeName(code) {
    // ASCII alphanumerical and `-`, `.`, `:`, and `_`.
    if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code);
  }

  /**
   * After attribute name, at an optional initializer, the end of the tag, or
   * whitespace.
   *
   * ```markdown
   * > | <a b>
   *         ^
   * > | <a b=c>
   *         ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code);
  }

  /**
   * Before unquoted, double quoted, or single quoted attribute value, allowing
   * whitespace.
   *
   * ```markdown
   * > | <a b=c>
   *          ^
   * > | <a b="c">
   *          ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeValueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }
    if (code === 34 || code === 39) {
      effects.consume(code);
      markerB = code;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }
    return completeAttributeValueUnquoted(code);
  }

  /**
   * In double or single quoted attribute value.
   *
   * ```markdown
   * > | <a b="c">
   *           ^
   * > | <a b='c'>
   *           ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeValueQuoted(code) {
    if (code === markerB) {
      effects.consume(code);
      markerB = null;
      return completeAttributeValueQuotedAfter;
    }
    if (code === null || markdownLineEnding(code)) {
      return nok(code);
    }
    effects.consume(code);
    return completeAttributeValueQuoted;
  }

  /**
   * In unquoted attribute value.
   *
   * ```markdown
   * > | <a b=c>
   *          ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 47 || code === 60 || code === 61 || code === 62 || code === 96 || markdownLineEndingOrSpace(code)) {
      return completeAttributeNameAfter(code);
    }
    effects.consume(code);
    return completeAttributeValueUnquoted;
  }

  /**
   * After double or single quoted attribute value, before whitespace or the
   * end of the tag.
   *
   * ```markdown
   * > | <a b="c">
   *            ^
   * ```
   *
   * @type {State}
   */
  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || markdownSpace(code)) {
      return completeAttributeNameBefore(code);
    }
    return nok(code);
  }

  /**
   * In certain circumstances of a complete tag where only an `>` is allowed.
   *
   * ```markdown
   * > | <a b="c">
   *             ^
   * ```
   *
   * @type {State}
   */
  function completeEnd(code) {
    if (code === 62) {
      effects.consume(code);
      return completeAfter;
    }
    return nok(code);
  }

  /**
   * After `>` in a complete tag.
   *
   * ```markdown
   * > | <x>
   *        ^
   * ```
   *
   * @type {State}
   */
  function completeAfter(code) {
    if (code === null || markdownLineEnding(code)) {
      // // Do not form containers.
      // tokenizer.concrete = true
      return continuation(code);
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAfter;
    }
    return nok(code);
  }

  /**
   * In continuation of any HTML kind.
   *
   * ```markdown
   * > | <!--xxx-->
   *          ^
   * ```
   *
   * @type {State}
   */
  function continuation(code) {
    if (code === 45 && marker === 2) {
      effects.consume(code);
      return continuationCommentInside;
    }
    if (code === 60 && marker === 1) {
      effects.consume(code);
      return continuationRawTagOpen;
    }
    if (code === 62 && marker === 4) {
      effects.consume(code);
      return continuationClose;
    }
    if (code === 63 && marker === 3) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    if (code === 93 && marker === 5) {
      effects.consume(code);
      return continuationCdataInside;
    }
    if (markdownLineEnding(code) && (marker === 6 || marker === 7)) {
      effects.exit("htmlFlowData");
      return effects.check(blankLineBefore, continuationAfter, continuationStart)(code);
    }
    if (code === null || markdownLineEnding(code)) {
      effects.exit("htmlFlowData");
      return continuationStart(code);
    }
    effects.consume(code);
    return continuation;
  }

  /**
   * In continuation, at eol.
   *
   * ```markdown
   * > | <x>
   *        ^
   *   | asd
   * ```
   *
   * @type {State}
   */
  function continuationStart(code) {
    return effects.check(nonLazyContinuationStart, continuationStartNonLazy, continuationAfter)(code);
  }

  /**
   * In continuation, at eol, before non-lazy content.
   *
   * ```markdown
   * > | <x>
   *        ^
   *   | asd
   * ```
   *
   * @type {State}
   */
  function continuationStartNonLazy(code) {
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return continuationBefore;
  }

  /**
   * In continuation, before non-lazy content.
   *
   * ```markdown
   *   | <x>
   * > | asd
   *     ^
   * ```
   *
   * @type {State}
   */
  function continuationBefore(code) {
    if (code === null || markdownLineEnding(code)) {
      return continuationStart(code);
    }
    effects.enter("htmlFlowData");
    return continuation(code);
  }

  /**
   * In comment continuation, after one `-`, expecting another.
   *
   * ```markdown
   * > | <!--xxx-->
   *             ^
   * ```
   *
   * @type {State}
   */
  function continuationCommentInside(code) {
    if (code === 45) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    return continuation(code);
  }

  /**
   * In raw continuation, after `<`, at `/`.
   *
   * ```markdown
   * > | <script>console.log(1)</script>
   *                            ^
   * ```
   *
   * @type {State}
   */
  function continuationRawTagOpen(code) {
    if (code === 47) {
      effects.consume(code);
      buffer = '';
      return continuationRawEndTag;
    }
    return continuation(code);
  }

  /**
   * In raw continuation, after `</`, in a raw tag name.
   *
   * ```markdown
   * > | <script>console.log(1)</script>
   *                             ^^^^^^
   * ```
   *
   * @type {State}
   */
  function continuationRawEndTag(code) {
    if (code === 62) {
      const name = buffer.toLowerCase();
      if (htmlRawNames.includes(name)) {
        effects.consume(code);
        return continuationClose;
      }
      return continuation(code);
    }
    if (asciiAlpha(code) && buffer.length < 8) {
      // Always the case.
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return continuationRawEndTag;
    }
    return continuation(code);
  }

  /**
   * In cdata continuation, after `]`, expecting `]>`.
   *
   * ```markdown
   * > | <![CDATA[>&<]]>
   *                  ^
   * ```
   *
   * @type {State}
   */
  function continuationCdataInside(code) {
    if (code === 93) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    return continuation(code);
  }

  /**
   * In declaration or instruction continuation, at `>`.
   *
   * ```markdown
   * > | <!-->
   *         ^
   * > | <?>
   *       ^
   * > | <!q>
   *        ^
   * > | <!--ab-->
   *             ^
   * > | <![CDATA[>&<]]>
   *                   ^
   * ```
   *
   * @type {State}
   */
  function continuationDeclarationInside(code) {
    if (code === 62) {
      effects.consume(code);
      return continuationClose;
    }

    // More dashes.
    if (code === 45 && marker === 2) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    return continuation(code);
  }

  /**
   * In closed continuation: everything we get until the eol/eof is part of it.
   *
   * ```markdown
   * > | <!doctype>
   *               ^
   * ```
   *
   * @type {State}
   */
  function continuationClose(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit("htmlFlowData");
      return continuationAfter(code);
    }
    effects.consume(code);
    return continuationClose;
  }

  /**
   * Done.
   *
   * ```markdown
   * > | <!doctype>
   *               ^
   * ```
   *
   * @type {State}
   */
  function continuationAfter(code) {
    effects.exit("htmlFlow");
    // // Feel free to interrupt.
    // tokenizer.interrupt = false
    // // No longer concrete.
    // tokenizer.concrete = false
    return ok(code);
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeNonLazyContinuationStart(effects, ok, nok) {
  const self = this;
  return start;

  /**
   * At eol, before continuation.
   *
   * ```markdown
   * > | * ```js
   *            ^
   *   | b
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return after;
    }
    return nok(code);
  }

  /**
   * A continuation.
   *
   * ```markdown
   *   | * ```js
   * > | b
   *     ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeBlankLineBefore(effects, ok, nok) {
  return start;

  /**
   * Before eol, expecting blank line.
   *
   * ```markdown
   * > | <div>
   *          ^
   *   |
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return effects.attempt(blankLine, ok, nok);
  }
}

/**
 * @import {
 *   Code,
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const htmlText = {
  name: 'htmlText',
  tokenize: tokenizeHtmlText
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeHtmlText(effects, ok, nok) {
  const self = this;
  /** @type {NonNullable<Code> | undefined} */
  let marker;
  /** @type {number} */
  let index;
  /** @type {State} */
  let returnState;
  return start;

  /**
   * Start of HTML (text).
   *
   * ```markdown
   * > | a <b> c
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code);
    return open;
  }

  /**
   * After `<`, at tag name or other stuff.
   *
   * ```markdown
   * > | a <b> c
   *        ^
   * > | a <!doctype> c
   *        ^
   * > | a <!--b--> c
   *        ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationOpen;
    }
    if (code === 47) {
      effects.consume(code);
      return tagCloseStart;
    }
    if (code === 63) {
      effects.consume(code);
      return instruction;
    }

    // ASCII alphabetical.
    if (asciiAlpha(code)) {
      effects.consume(code);
      return tagOpen;
    }
    return nok(code);
  }

  /**
   * After `<!`, at declaration, comment, or CDATA.
   *
   * ```markdown
   * > | a <!doctype> c
   *         ^
   * > | a <!--b--> c
   *         ^
   * > | a <![CDATA[>&<]]> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentOpenInside;
    }
    if (code === 91) {
      effects.consume(code);
      index = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code)) {
      effects.consume(code);
      return declaration;
    }
    return nok(code);
  }

  /**
   * In a comment, after `<!-`, at another `-`.
   *
   * ```markdown
   * > | a <!--b--> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code);
      return commentEnd;
    }
    return nok(code);
  }

  /**
   * In comment.
   *
   * ```markdown
   * > | a <!--b--> c
   *           ^
   * ```
   *
   * @type {State}
   */
  function comment(code) {
    if (code === null) {
      return nok(code);
    }
    if (code === 45) {
      effects.consume(code);
      return commentClose;
    }
    if (markdownLineEnding(code)) {
      returnState = comment;
      return lineEndingBefore(code);
    }
    effects.consume(code);
    return comment;
  }

  /**
   * In comment, after `-`.
   *
   * ```markdown
   * > | a <!--b--> c
   *             ^
   * ```
   *
   * @type {State}
   */
  function commentClose(code) {
    if (code === 45) {
      effects.consume(code);
      return commentEnd;
    }
    return comment(code);
  }

  /**
   * In comment, after `--`.
   *
   * ```markdown
   * > | a <!--b--> c
   *              ^
   * ```
   *
   * @type {State}
   */
  function commentEnd(code) {
    return code === 62 ? end(code) : code === 45 ? commentClose(code) : comment(code);
  }

  /**
   * After `<![`, in CDATA, expecting `CDATA[`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *          ^^^^^^
   * ```
   *
   * @type {State}
   */
  function cdataOpenInside(code) {
    const value = "CDATA[";
    if (code === value.charCodeAt(index++)) {
      effects.consume(code);
      return index === value.length ? cdata : cdataOpenInside;
    }
    return nok(code);
  }

  /**
   * In CDATA.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                ^^^
   * ```
   *
   * @type {State}
   */
  function cdata(code) {
    if (code === null) {
      return nok(code);
    }
    if (code === 93) {
      effects.consume(code);
      return cdataClose;
    }
    if (markdownLineEnding(code)) {
      returnState = cdata;
      return lineEndingBefore(code);
    }
    effects.consume(code);
    return cdata;
  }

  /**
   * In CDATA, after `]`, at another `]`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                    ^
   * ```
   *
   * @type {State}
   */
  function cdataClose(code) {
    if (code === 93) {
      effects.consume(code);
      return cdataEnd;
    }
    return cdata(code);
  }

  /**
   * In CDATA, after `]]`, at `>`.
   *
   * ```markdown
   * > | a <![CDATA[>&<]]> b
   *                     ^
   * ```
   *
   * @type {State}
   */
  function cdataEnd(code) {
    if (code === 62) {
      return end(code);
    }
    if (code === 93) {
      effects.consume(code);
      return cdataEnd;
    }
    return cdata(code);
  }

  /**
   * In declaration.
   *
   * ```markdown
   * > | a <!b> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function declaration(code) {
    if (code === null || code === 62) {
      return end(code);
    }
    if (markdownLineEnding(code)) {
      returnState = declaration;
      return lineEndingBefore(code);
    }
    effects.consume(code);
    return declaration;
  }

  /**
   * In instruction.
   *
   * ```markdown
   * > | a <?b?> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function instruction(code) {
    if (code === null) {
      return nok(code);
    }
    if (code === 63) {
      effects.consume(code);
      return instructionClose;
    }
    if (markdownLineEnding(code)) {
      returnState = instruction;
      return lineEndingBefore(code);
    }
    effects.consume(code);
    return instruction;
  }

  /**
   * In instruction, after `?`, at `>`.
   *
   * ```markdown
   * > | a <?b?> c
   *           ^
   * ```
   *
   * @type {State}
   */
  function instructionClose(code) {
    return code === 62 ? end(code) : instruction(code);
  }

  /**
   * After `</`, in closing tag, at tag name.
   *
   * ```markdown
   * > | a </b> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function tagCloseStart(code) {
    // ASCII alphabetical.
    if (asciiAlpha(code)) {
      effects.consume(code);
      return tagClose;
    }
    return nok(code);
  }

  /**
   * After `</x`, in a tag name.
   *
   * ```markdown
   * > | a </b> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function tagClose(code) {
    // ASCII alphanumerical and `-`.
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagClose;
    }
    return tagCloseBetween(code);
  }

  /**
   * In closing tag, after tag name.
   *
   * ```markdown
   * > | a </b> c
   *          ^
   * ```
   *
   * @type {State}
   */
  function tagCloseBetween(code) {
    if (markdownLineEnding(code)) {
      returnState = tagCloseBetween;
      return lineEndingBefore(code);
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return tagCloseBetween;
    }
    return end(code);
  }

  /**
   * After `<x`, in opening tag name.
   *
   * ```markdown
   * > | a <b> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function tagOpen(code) {
    // ASCII alphanumerical and `-`.
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagOpen;
    }
    if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code);
    }
    return nok(code);
  }

  /**
   * In opening tag, after tag name.
   *
   * ```markdown
   * > | a <b> c
   *         ^
   * ```
   *
   * @type {State}
   */
  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code);
      return end;
    }

    // ASCII alphabetical and `:` and `_`.
    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding(code)) {
      returnState = tagOpenBetween;
      return lineEndingBefore(code);
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenBetween;
    }
    return end(code);
  }

  /**
   * In attribute name.
   *
   * ```markdown
   * > | a <b c> d
   *          ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeName(code) {
    // ASCII alphabetical and `-`, `.`, `:`, and `_`.
    if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code);
  }

  /**
   * After attribute name, before initializer, the end of the tag, or
   * whitespace.
   *
   * ```markdown
   * > | a <b c> d
   *           ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeNameAfter;
      return lineEndingBefore(code);
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code);
  }

  /**
   * Before unquoted, double quoted, or single quoted attribute value, allowing
   * whitespace.
   *
   * ```markdown
   * > | a <b c=d> e
   *            ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }
    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueBefore;
      return lineEndingBefore(code);
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code);
    return tagOpenAttributeValueUnquoted;
  }

  /**
   * In double or single quoted attribute value.
   *
   * ```markdown
   * > | a <b c="d"> e
   *             ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code);
      marker = undefined;
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code === null) {
      return nok(code);
    }
    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueQuoted;
      return lineEndingBefore(code);
    }
    effects.consume(code);
    return tagOpenAttributeValueQuoted;
  }

  /**
   * In unquoted attribute value.
   *
   * ```markdown
   * > | a <b c=d> e
   *            ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
      return nok(code);
    }
    if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code);
    }
    effects.consume(code);
    return tagOpenAttributeValueUnquoted;
  }

  /**
   * After double or single quoted attribute value, before whitespace or the end
   * of the tag.
   *
   * ```markdown
   * > | a <b c="d"> e
   *               ^
   * ```
   *
   * @type {State}
   */
  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code);
    }
    return nok(code);
  }

  /**
   * In certain circumstances of a tag where only an `>` is allowed.
   *
   * ```markdown
   * > | a <b c="d"> e
   *               ^
   * ```
   *
   * @type {State}
   */
  function end(code) {
    if (code === 62) {
      effects.consume(code);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok;
    }
    return nok(code);
  }

  /**
   * At eol.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   * > | a <!--a
   *            ^
   *   | b-->
   * ```
   *
   * @type {State}
   */
  function lineEndingBefore(code) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return lineEndingAfter;
  }

  /**
   * After eol, at optional whitespace.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   *   | a <!--a
   * > | b-->
   *     ^
   * ```
   *
   * @type {State}
   */
  function lineEndingAfter(code) {
    // Always populated by defaults.

    return markdownSpace(code) ? factorySpace(effects, lineEndingAfterPrefix, "linePrefix", self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4)(code) : lineEndingAfterPrefix(code);
  }

  /**
   * After eol, after optional whitespace.
   *
   * > 👉 **Note**: we can’t have blank lines in text, so no need to worry about
   * > empty tokens.
   *
   * ```markdown
   *   | a <!--a
   * > | b-->
   *     ^
   * ```
   *
   * @type {State}
   */
  function lineEndingAfterPrefix(code) {
    effects.enter("htmlTextData");
    return returnState(code);
  }
}

/**
 * @import {
 *   Construct,
 *   Event,
 *   Resolver,
 *   State,
 *   TokenizeContext,
 *   Tokenizer,
 *   Token
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const labelEnd = {
  name: 'labelEnd',
  resolveAll: resolveAllLabelEnd,
  resolveTo: resolveToLabelEnd,
  tokenize: tokenizeLabelEnd
};

/** @type {Construct} */
const resourceConstruct = {
  tokenize: tokenizeResource
};
/** @type {Construct} */
const referenceFullConstruct = {
  tokenize: tokenizeReferenceFull
};
/** @type {Construct} */
const referenceCollapsedConstruct = {
  tokenize: tokenizeReferenceCollapsed
};

/** @type {Resolver} */
function resolveAllLabelEnd(events) {
  let index = -1;
  /** @type {Array<Event>} */
  const newEvents = [];
  while (++index < events.length) {
    const token = events[index][1];
    newEvents.push(events[index]);
    if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
      // Remove the marker.
      const offset = token.type === "labelImage" ? 4 : 2;
      token.type = "data";
      index += offset;
    }
  }

  // If the events are equal, we don't have to copy newEvents to events
  if (events.length !== newEvents.length) {
    splice(events, 0, events.length, newEvents);
  }
  return events;
}

/** @type {Resolver} */
function resolveToLabelEnd(events, context) {
  let index = events.length;
  let offset = 0;
  /** @type {Token} */
  let token;
  /** @type {number | undefined} */
  let open;
  /** @type {number | undefined} */
  let close;
  /** @type {Array<Event>} */
  let media;

  // Find an opening.
  while (index--) {
    token = events[index][1];
    if (open) {
      // If we see another link, or inactive link label, we’ve been here before.
      if (token.type === "link" || token.type === "labelLink" && token._inactive) {
        break;
      }

      // Mark other link openings as inactive, as we can’t have links in
      // links.
      if (events[index][0] === 'enter' && token.type === "labelLink") {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index][0] === 'enter' && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
        open = index;
        if (token.type !== "labelLink") {
          offset = 2;
          break;
        }
      }
    } else if (token.type === "labelEnd") {
      close = index;
    }
  }
  const group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: {
      ...events[open][1].start
    },
    end: {
      ...events[events.length - 1][1].end
    }
  };
  const label = {
    type: "label",
    start: {
      ...events[open][1].start
    },
    end: {
      ...events[close][1].end
    }
  };
  const text = {
    type: "labelText",
    start: {
      ...events[open + offset + 2][1].end
    },
    end: {
      ...events[close - 2][1].start
    }
  };
  media = [['enter', group, context], ['enter', label, context]];

  // Opening marker.
  media = push(media, events.slice(open + 1, open + offset + 3));

  // Text open.
  media = push(media, [['enter', text, context]]);

  // Always populated by defaults.

  // Between.
  media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));

  // Text close, marker close, label close.
  media = push(media, [['exit', text, context], events[close - 2], events[close - 1], ['exit', label, context]]);

  // Reference, resource, or so.
  media = push(media, events.slice(close + 1));

  // Media close.
  media = push(media, [['exit', group, context]]);
  splice(events, open, events.length, media);
  return events;
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeLabelEnd(effects, ok, nok) {
  const self = this;
  let index = self.events.length;
  /** @type {Token} */
  let labelStart;
  /** @type {boolean} */
  let defined;

  // Find an opening.
  while (index--) {
    if ((self.events[index][1].type === "labelImage" || self.events[index][1].type === "labelLink") && !self.events[index][1]._balanced) {
      labelStart = self.events[index][1];
      break;
    }
  }
  return start;

  /**
   * Start of label end.
   *
   * ```markdown
   * > | [a](b) c
   *       ^
   * > | [a][b] c
   *       ^
   * > | [a][] b
   *       ^
   * > | [a] b
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // If there is not an okay opening.
    if (!labelStart) {
      return nok(code);
    }

    // If the corresponding label (link) start is marked as inactive,
    // it means we’d be wrapping a link, like this:
    //
    // ```markdown
    // > | a [b [c](d) e](f) g.
    //                  ^
    // ```
    //
    // We can’t have that, so it’s just balanced brackets.
    if (labelStart._inactive) {
      return labelEndNok(code);
    }
    defined = self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    })));
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return after;
  }

  /**
   * After `]`.
   *
   * ```markdown
   * > | [a](b) c
   *       ^
   * > | [a][b] c
   *       ^
   * > | [a][] b
   *       ^
   * > | [a] b
   *       ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    // Note: `markdown-rs` also parses GFM footnotes here, which for us is in
    // an extension.

    // Resource (`[asd](fgh)`)?
    if (code === 40) {
      return effects.attempt(resourceConstruct, labelEndOk, defined ? labelEndOk : labelEndNok)(code);
    }

    // Full (`[asd][fgh]`) or collapsed (`[asd][]`) reference?
    if (code === 91) {
      return effects.attempt(referenceFullConstruct, labelEndOk, defined ? referenceNotFull : labelEndNok)(code);
    }

    // Shortcut (`[asd]`) reference?
    return defined ? labelEndOk(code) : labelEndNok(code);
  }

  /**
   * After `]`, at `[`, but not at a full reference.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] b
   *        ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */
  function referenceNotFull(code) {
    return effects.attempt(referenceCollapsedConstruct, labelEndOk, labelEndNok)(code);
  }

  /**
   * Done, we found something.
   *
   * ```markdown
   * > | [a](b) c
   *           ^
   * > | [a][b] c
   *           ^
   * > | [a][] b
   *          ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */
  function labelEndOk(code) {
    // Note: `markdown-rs` does a bunch of stuff here.
    return ok(code);
  }

  /**
   * Done, it’s nothing.
   *
   * There was an okay opening, but we didn’t match anything.
   *
   * ```markdown
   * > | [a](b c
   *        ^
   * > | [a][b c
   *        ^
   * > | [a] b
   *        ^
   * ```
   *
   * @type {State}
   */
  function labelEndNok(code) {
    labelStart._balanced = true;
    return nok(code);
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeResource(effects, ok, nok) {
  return resourceStart;

  /**
   * At a resource.
   *
   * ```markdown
   * > | [a](b) c
   *        ^
   * ```
   *
   * @type {State}
   */
  function resourceStart(code) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code);
    effects.exit("resourceMarker");
    return resourceBefore;
  }

  /**
   * In resource, after `(`, at optional whitespace.
   *
   * ```markdown
   * > | [a](b) c
   *         ^
   * ```
   *
   * @type {State}
   */
  function resourceBefore(code) {
    return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, resourceOpen)(code) : resourceOpen(code);
  }

  /**
   * In resource, after optional whitespace, at `)` or a destination.
   *
   * ```markdown
   * > | [a](b) c
   *         ^
   * ```
   *
   * @type {State}
   */
  function resourceOpen(code) {
    if (code === 41) {
      return resourceEnd(code);
    }
    return factoryDestination(effects, resourceDestinationAfter, resourceDestinationMissing, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code);
  }

  /**
   * In resource, after destination, at optional whitespace.
   *
   * ```markdown
   * > | [a](b) c
   *          ^
   * ```
   *
   * @type {State}
   */
  function resourceDestinationAfter(code) {
    return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, resourceBetween)(code) : resourceEnd(code);
  }

  /**
   * At invalid destination.
   *
   * ```markdown
   * > | [a](<<) b
   *         ^
   * ```
   *
   * @type {State}
   */
  function resourceDestinationMissing(code) {
    return nok(code);
  }

  /**
   * In resource, after destination and whitespace, at `(` or title.
   *
   * ```markdown
   * > | [a](b ) c
   *           ^
   * ```
   *
   * @type {State}
   */
  function resourceBetween(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(effects, resourceTitleAfter, nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code);
    }
    return resourceEnd(code);
  }

  /**
   * In resource, after title, at optional whitespace.
   *
   * ```markdown
   * > | [a](b "c") d
   *              ^
   * ```
   *
   * @type {State}
   */
  function resourceTitleAfter(code) {
    return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, resourceEnd)(code) : resourceEnd(code);
  }

  /**
   * In resource, at `)`.
   *
   * ```markdown
   * > | [a](b) d
   *          ^
   * ```
   *
   * @type {State}
   */
  function resourceEnd(code) {
    if (code === 41) {
      effects.enter("resourceMarker");
      effects.consume(code);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok;
    }
    return nok(code);
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeReferenceFull(effects, ok, nok) {
  const self = this;
  return referenceFull;

  /**
   * In a reference (full), at the `[`.
   *
   * ```markdown
   * > | [a][b] d
   *        ^
   * ```
   *
   * @type {State}
   */
  function referenceFull(code) {
    return factoryLabel.call(self, effects, referenceFullAfter, referenceFullMissing, "reference", "referenceMarker", "referenceString")(code);
  }

  /**
   * In a reference (full), after `]`.
   *
   * ```markdown
   * > | [a][b] d
   *          ^
   * ```
   *
   * @type {State}
   */
  function referenceFullAfter(code) {
    return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok(code) : nok(code);
  }

  /**
   * In reference (full) that was missing.
   *
   * ```markdown
   * > | [a][b d
   *        ^
   * ```
   *
   * @type {State}
   */
  function referenceFullMissing(code) {
    return nok(code);
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeReferenceCollapsed(effects, ok, nok) {
  return referenceCollapsedStart;

  /**
   * In reference (collapsed), at `[`.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] d
   *        ^
   * ```
   *
   * @type {State}
   */
  function referenceCollapsedStart(code) {
    // We only attempt a collapsed label if there’s a `[`.

    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code);
    effects.exit("referenceMarker");
    return referenceCollapsedOpen;
  }

  /**
   * In reference (collapsed), at `]`.
   *
   * > 👉 **Note**: we only get here if the label is defined.
   *
   * ```markdown
   * > | [a][] d
   *         ^
   * ```
   *
   *  @type {State}
   */
  function referenceCollapsedOpen(code) {
    if (code === 93) {
      effects.enter("referenceMarker");
      effects.consume(code);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok;
    }
    return nok(code);
  }
}

/**
 * @import {
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */


/** @type {Construct} */
const labelStartImage = {
  name: 'labelStartImage',
  resolveAll: labelEnd.resolveAll,
  tokenize: tokenizeLabelStartImage
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeLabelStartImage(effects, ok, nok) {
  const self = this;
  return start;

  /**
   * Start of label (image) start.
   *
   * ```markdown
   * > | a ![b] c
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code);
    effects.exit("labelImageMarker");
    return open;
  }

  /**
   * After `!`, at `[`.
   *
   * ```markdown
   * > | a ![b] c
   *        ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (code === 91) {
      effects.enter("labelMarker");
      effects.consume(code);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code);
  }

  /**
   * After `![`.
   *
   * ```markdown
   * > | a ![b] c
   *         ^
   * ```
   *
   * This is needed in because, when GFM footnotes are enabled, images never
   * form when started with a `^`.
   * Instead, links form:
   *
   * ```markdown
   * ![^a](b)
   *
   * ![^a][b]
   *
   * [b]: c
   * ```
   *
   * ```html
   * <p>!<a href=\"b\">^a</a></p>
   * <p>!<a href=\"c\">^a</a></p>
   * ```
   *
   * @type {State}
   */
  function after(code) {
    // To do: use a new field to do this, this is still needed for
    // `micromark-extension-gfm-footnote`, but the `label-start-link`
    // behavior isn’t.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs ? nok(code) : ok(code);
  }
}

/**
 * @import {
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */


/** @type {Construct} */
const labelStartLink = {
  name: 'labelStartLink',
  resolveAll: labelEnd.resolveAll,
  tokenize: tokenizeLabelStartLink
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeLabelStartLink(effects, ok, nok) {
  const self = this;
  return start;

  /**
   * Start of label (link) start.
   *
   * ```markdown
   * > | a [b] c
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }

  /** @type {State} */
  function after(code) {
    // To do: this isn’t needed in `micromark-extension-gfm-footnote`,
    // remove.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs ? nok(code) : ok(code);
  }
}

/**
 * @import {
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const lineEnding = {
  name: 'lineEnding',
  tokenize: tokenizeLineEnding
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeLineEnding(effects, ok) {
  return start;

  /** @type {State} */
  function start(code) {
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return factorySpace(effects, ok, "linePrefix");
  }
}

/**
 * @import {
 *   Code,
 *   Construct,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const thematicBreak$2 = {
  name: 'thematicBreak',
  tokenize: tokenizeThematicBreak
};

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeThematicBreak(effects, ok, nok) {
  let size = 0;
  /** @type {NonNullable<Code>} */
  let marker;
  return start;

  /**
   * Start of thematic break.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter("thematicBreak");
    // To do: parse indent like `markdown-rs`.
    return before(code);
  }

  /**
   * After optional whitespace, at marker.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    marker = code;
    return atBreak(code);
  }

  /**
   * After something, before something else.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */
  function atBreak(code) {
    if (code === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code);
    }
    if (size >= 3 && (code === null || markdownLineEnding(code))) {
      effects.exit("thematicBreak");
      return ok(code);
    }
    return nok(code);
  }

  /**
   * In sequence.
   *
   * ```markdown
   * > | ***
   *     ^
   * ```
   *
   * @type {State}
   */
  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return markdownSpace(code) ? factorySpace(effects, atBreak, "whitespace")(code) : atBreak(code);
  }
}

/**
 * @import {
 *   Code,
 *   Construct,
 *   Exiter,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */


/** @type {Construct} */
const list$2 = {
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd,
  name: 'list',
  tokenize: tokenizeListStart
};

/** @type {Construct} */
const listItemPrefixWhitespaceConstruct = {
  partial: true,
  tokenize: tokenizeListItemPrefixWhitespace
};

/** @type {Construct} */
const indentConstruct = {
  partial: true,
  tokenize: tokenizeIndent$1
};

// To do: `markdown-rs` parses list items on their own and later stitches them
// together.

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeListStart(effects, ok, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;

  /** @type {State} */
  function start(code) {
    const kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self.containerState.marker || code === self.containerState.marker : asciiDigit(code)) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code === 42 || code === 45 ? effects.check(thematicBreak$2, nok, atMarker)(code) : atMarker(code);
      }
      if (!self.interrupt || code === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code);
      }
    }
    return nok(code);
  }

  /** @type {State} */
  function inside(code) {
    if (asciiDigit(code) && ++size < 10) {
      effects.consume(code);
      return inside;
    }
    if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
      effects.exit("listItemValue");
      return atMarker(code);
    }
    return nok(code);
  }

  /**
   * @type {State}
   **/
  function atMarker(code) {
    effects.enter("listItemMarker");
    effects.consume(code);
    effects.exit("listItemMarker");
    self.containerState.marker = self.containerState.marker || code;
    return effects.check(blankLine,
    // Can’t be empty when interrupting.
    self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }

  /** @type {State} */
  function onBlank(code) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code);
  }

  /** @type {State} */
  function otherPrefix(code) {
    if (markdownSpace(code)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code);
  }

  /** @type {State} */
  function endOfPrefix(code) {
    self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok(code);
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeListContinuation(effects, ok, nok) {
  const self = this;
  self.containerState._closeFlow = undefined;
  return effects.check(blankLine, onBlank, notBlank);

  /** @type {State} */
  function onBlank(code) {
    self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;

    // We have a blank line.
    // Still, try to consume at most the items size.
    return factorySpace(effects, ok, "listItemIndent", self.containerState.size + 1)(code);
  }

  /** @type {State} */
  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
      self.containerState.furtherBlankLines = undefined;
      self.containerState.initialBlankLine = undefined;
      return notInCurrentItem(code);
    }
    self.containerState.furtherBlankLines = undefined;
    self.containerState.initialBlankLine = undefined;
    return effects.attempt(indentConstruct, ok, notInCurrentItem)(code);
  }

  /** @type {State} */
  function notInCurrentItem(code) {
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true;
    // As we’re closing flow, we’re no longer interrupting.
    self.interrupt = undefined;
    // Always populated by defaults.

    return factorySpace(effects, effects.attempt(list$2, ok, nok), "linePrefix", self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4)(code);
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeIndent$1(effects, ok, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);

  /** @type {State} */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok(code) : nok(code);
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Exiter}
 */
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  const self = this;

  // Always populated by defaults.

  return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4 + 1);

  /** @type {State} */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return !markdownSpace(code) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok(code) : nok(code);
  }
}

/**
 * @import {
 *   Code,
 *   Construct,
 *   Resolver,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

/** @type {Construct} */
const setextUnderline = {
  name: 'setextUnderline',
  resolveTo: resolveToSetextUnderline,
  tokenize: tokenizeSetextUnderline
};

/** @type {Resolver} */
function resolveToSetextUnderline(events, context) {
  // To do: resolve like `markdown-rs`.
  let index = events.length;
  /** @type {number | undefined} */
  let content;
  /** @type {number | undefined} */
  let text;
  /** @type {number | undefined} */
  let definition;

  // Find the opening of the content.
  // It’ll always exist: we don’t tokenize if it isn’t there.
  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === "content") {
        content = index;
        break;
      }
      if (events[index][1].type === "paragraph") {
        text = index;
      }
    }
    // Exit
    else {
      if (events[index][1].type === "content") {
        // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1);
      }
      if (!definition && events[index][1].type === "definition") {
        definition = index;
      }
    }
  }
  const heading = {
    type: "setextHeading",
    start: {
      ...events[content][1].start
    },
    end: {
      ...events[events.length - 1][1].end
    }
  };

  // Change the paragraph to setext heading text.
  events[text][1].type = "setextHeadingText";

  // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.
  if (definition) {
    events.splice(text, 0, ['enter', heading, context]);
    events.splice(definition + 1, 0, ['exit', events[content][1], context]);
    events[content][1].end = {
      ...events[definition][1].end
    };
  } else {
    events[content][1] = heading;
  }

  // Add the heading exit at the end.
  events.push(['exit', heading, context]);
  return events;
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeSetextUnderline(effects, ok, nok) {
  const self = this;
  /** @type {NonNullable<Code>} */
  let marker;
  return start;

  /**
   * At start of heading (setext) underline.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    let index = self.events.length;
    /** @type {boolean | undefined} */
    let paragraph;
    // Find an opening.
    while (index--) {
      // Skip enter/exit of line ending, line prefix, and content.
      // We can now either have a definition or a paragraph.
      if (self.events[index][1].type !== "lineEnding" && self.events[index][1].type !== "linePrefix" && self.events[index][1].type !== "content") {
        paragraph = self.events[index][1].type === "paragraph";
        break;
      }
    }

    // To do: handle lazy/pierce like `markdown-rs`.
    // To do: parse indent like `markdown-rs`.
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
      effects.enter("setextHeadingLine");
      marker = code;
      return before(code);
    }
    return nok(code);
  }

  /**
   * After optional whitespace, at `-` or `=`.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */
  function before(code) {
    effects.enter("setextHeadingLineSequence");
    return inside(code);
  }

  /**
   * In sequence.
   *
   * ```markdown
   *   | aa
   * > | ==
   *     ^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    if (code === marker) {
      effects.consume(code);
      return inside;
    }
    effects.exit("setextHeadingLineSequence");
    return markdownSpace(code) ? factorySpace(effects, after, "lineSuffix")(code) : after(code);
  }

  /**
   * After sequence, after optional whitespace.
   *
   * ```markdown
   *   | aa
   * > | ==
   *       ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit("setextHeadingLine");
      return ok(code);
    }
    return nok(code);
  }
}

/**
 * @import {
 *   InitialConstruct,
 *   Initializer,
 *   State,
 *   TokenizeContext
 * } from 'micromark-util-types'
 */

/** @type {InitialConstruct} */
const flow$1 = {
  tokenize: initializeFlow
};

/**
 * @this {TokenizeContext}
 *   Self.
 * @type {Initializer}
 *   Initializer.
 */
function initializeFlow(effects) {
  const self = this;
  const initial = effects.attempt(
  // Try to parse a blank line.
  blankLine, atBlankEnding,
  // Try to parse initial flow (essentially, only code).
  effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content, afterConstruct)), "linePrefix")));
  return initial;

  /** @type {State} */
  function atBlankEnding(code) {
    if (code === null) {
      effects.consume(code);
      return;
    }
    effects.enter("lineEndingBlank");
    effects.consume(code);
    effects.exit("lineEndingBlank");
    self.currentConstruct = undefined;
    return initial;
  }

  /** @type {State} */
  function afterConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    self.currentConstruct = undefined;
    return initial;
  }
}

/**
 * @import {
 *   Code,
 *   InitialConstruct,
 *   Initializer,
 *   Resolver,
 *   State,
 *   TokenizeContext
 * } from 'micromark-util-types'
 */

const resolver = {
  resolveAll: createResolver()
};
const string$1 = initializeFactory('string');
const text$5 = initializeFactory('text');

/**
 * @param {'string' | 'text'} field
 *   Field.
 * @returns {InitialConstruct}
 *   Construct.
 */
function initializeFactory(field) {
  return {
    resolveAll: createResolver(field === 'text' ? resolveAllLineSuffixes : undefined),
    tokenize: initializeText
  };

  /**
   * @this {TokenizeContext}
   *   Context.
   * @type {Initializer}
   */
  function initializeText(effects) {
    const self = this;
    const constructs = this.parser.constructs[field];
    const text = effects.attempt(constructs, start, notText);
    return start;

    /** @type {State} */
    function start(code) {
      return atBreak(code) ? text(code) : notText(code);
    }

    /** @type {State} */
    function notText(code) {
      if (code === null) {
        effects.consume(code);
        return;
      }
      effects.enter("data");
      effects.consume(code);
      return data;
    }

    /** @type {State} */
    function data(code) {
      if (atBreak(code)) {
        effects.exit("data");
        return text(code);
      }

      // Data.
      effects.consume(code);
      return data;
    }

    /**
     * @param {Code} code
     *   Code.
     * @returns {boolean}
     *   Whether the code is a break.
     */
    function atBreak(code) {
      if (code === null) {
        return true;
      }
      const list = constructs[code];
      let index = -1;
      if (list) {
        // Always populated by defaults.

        while (++index < list.length) {
          const item = list[index];
          if (!item.previous || item.previous.call(self, self.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}

/**
 * @param {Resolver | undefined} [extraResolver]
 *   Resolver.
 * @returns {Resolver}
 *   Resolver.
 */
function createResolver(extraResolver) {
  return resolveAllText;

  /** @type {Resolver} */
  function resolveAllText(events, context) {
    let index = -1;
    /** @type {number | undefined} */
    let enter;

    // A rather boring computation (to merge adjacent `data` events) which
    // improves mm performance by 29%.
    while (++index <= events.length) {
      if (enter === undefined) {
        if (events[index] && events[index][1].type === "data") {
          enter = index;
          index++;
        }
      } else if (!events[index] || events[index][1].type !== "data") {
        // Don’t do anything if there is one data token.
        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end;
          events.splice(enter + 2, index - enter - 2);
          index = enter + 2;
        }
        enter = undefined;
      }
    }
    return extraResolver ? extraResolver(events, context) : events;
  }
}

/**
 * A rather ugly set of instructions which again looks at chunks in the input
 * stream.
 * The reason to do this here is that it is *much* faster to parse in reverse.
 * And that we can’t hook into `null` to split the line suffix before an EOF.
 * To do: figure out if we can make this into a clean utility, or even in core.
 * As it will be useful for GFMs literal autolink extension (and maybe even
 * tables?)
 *
 * @type {Resolver}
 */
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0; // Skip first.

  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      /** @type {boolean | undefined} */
      let tabs;
      while (index--) {
        const chunk = chunks[index];
        if (typeof chunk === 'string') {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex) break;
          bufferIndex = -1;
        }
        // Number
        else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) ; else {
          // Replacement character, exit.
          index++;
          break;
        }
      }

      // Allow final trailing whitespace.
      if (context._contentTypeTextTrailing && eventIndex === events.length) {
        size = 0;
      }
      if (size) {
        const token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex,
            _index: data.start._index + index,
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size
          },
          end: {
            ...data.end
          }
        };
        data.end = {
          ...token.start
        };
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(eventIndex, 0, ['enter', token, context], ['exit', token, context]);
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}

/**
 * @import {Extension} from 'micromark-util-types'
 */


/** @satisfies {Extension['document']} */
const document$1 = {
  [42]: list$2,
  [43]: list$2,
  [45]: list$2,
  [48]: list$2,
  [49]: list$2,
  [50]: list$2,
  [51]: list$2,
  [52]: list$2,
  [53]: list$2,
  [54]: list$2,
  [55]: list$2,
  [56]: list$2,
  [57]: list$2,
  [62]: blockQuote
};

/** @satisfies {Extension['contentInitial']} */
const contentInitial = {
  [91]: definition$1
};

/** @satisfies {Extension['flowInitial']} */
const flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};

/** @satisfies {Extension['flow']} */
const flow = {
  [35]: headingAtx,
  [42]: thematicBreak$2,
  [45]: [setextUnderline, thematicBreak$2],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak$2,
  [96]: codeFenced,
  [126]: codeFenced
};

/** @satisfies {Extension['string']} */
const string = {
  [38]: characterReference,
  [92]: characterEscape
};

/** @satisfies {Extension['text']} */
const text$4 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};

/** @satisfies {Extension['insideSpan']} */
const insideSpan = {
  null: [attention, resolver]
};

/** @satisfies {Extension['attentionMarkers']} */
const attentionMarkers = {
  null: [42, 95]
};

/** @satisfies {Extension['disable']} */
const disable = {
  null: []
};

var defaultConstructs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  attentionMarkers: attentionMarkers,
  contentInitial: contentInitial,
  disable: disable,
  document: document$1,
  flow: flow,
  flowInitial: flowInitial,
  insideSpan: insideSpan,
  string: string,
  text: text$4
});

/**
 * @import {
 *   Chunk,
 *   Code,
 *   ConstructRecord,
 *   Construct,
 *   Effects,
 *   InitialConstruct,
 *   ParseContext,
 *   Point,
 *   State,
 *   TokenizeContext,
 *   Token
 * } from 'micromark-util-types'
 */

/**
 * Create a tokenizer.
 * Tokenizers deal with one type of data (e.g., containers, flow, text).
 * The parser is the object dealing with it all.
 * `initialize` works like other constructs, except that only its `tokenize`
 * function is used, in which case it doesn’t receive an `ok` or `nok`.
 * `from` can be given to set the point before the first character, although
 * when further lines are indented, they must be set with `defineSkip`.
 *
 * @param {ParseContext} parser
 *   Parser.
 * @param {InitialConstruct} initialize
 *   Construct.
 * @param {Omit<Point, '_bufferIndex' | '_index'> | undefined} [from]
 *   Point (optional).
 * @returns {TokenizeContext}
 *   Context.
 */
function createTokenizer(parser, initialize, from) {
  /** @type {Point} */
  let point = {
    _bufferIndex: -1,
    _index: 0,
    line: from && from.line || 1,
    column: from && from.column || 1,
    offset: from && from.offset || 0
  };
  /** @type {Record<string, number>} */
  const columnStart = {};
  /** @type {Array<Construct>} */
  const resolveAllConstructs = [];
  /** @type {Array<Chunk>} */
  let chunks = [];
  /** @type {Array<Token>} */
  let stack = [];

  /**
   * Tools used for tokenizing.
   *
   * @type {Effects}
   */
  const effects = {
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    consume,
    enter,
    exit,
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };

  /**
   * State and tools for resolving and serializing.
   *
   * @type {TokenizeContext}
   */
  const context = {
    code: null,
    containerState: {},
    defineSkip,
    events: [],
    now,
    parser,
    previous: null,
    sliceSerialize,
    sliceStream,
    write
  };

  /**
   * The state function.
   *
   * @type {State | undefined}
   */
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;

  /** @type {TokenizeContext['write']} */
  function write(slice) {
    chunks = push(chunks, slice);
    main();

    // Exit if we’re not done, resolve might change stuff.
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);

    // Otherwise, resolve, and exit.
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }

  //
  // Tools.
  //

  /** @type {TokenizeContext['sliceSerialize']} */
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }

  /** @type {TokenizeContext['sliceStream']} */
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }

  /** @type {TokenizeContext['now']} */
  function now() {
    // This is a hot path, so we clone manually instead of `Object.assign({}, point)`
    const {
      _bufferIndex,
      _index,
      line,
      column,
      offset
    } = point;
    return {
      _bufferIndex,
      _index,
      line,
      column,
      offset
    };
  }

  /** @type {TokenizeContext['defineSkip']} */
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }

  //
  // State management.
  //

  /**
   * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
   * `consume`).
   * Here is where we walk through the chunks, which either include strings of
   * several characters, or numerical character codes.
   * The reason to do this in a loop instead of a call is so the stack can
   * drain.
   *
   * @returns {undefined}
   *   Nothing.
   */
  function main() {
    /** @type {number} */
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];

      // If we’re in a buffer chunk, loop through it.
      if (typeof chunk === 'string') {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }

  /**
   * Deal with one code.
   *
   * @param {Code} code
   *   Code.
   * @returns {undefined}
   *   Nothing.
   */
  function go(code) {
    state = state(code);
  }

  /** @type {Effects['consume']} */
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }

    // Not in a string chunk.
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;

      // At end of string chunk.
      if (point._bufferIndex ===
      // Points w/ non-negative `_bufferIndex` reference
      // strings.
      /** @type {string} */
      chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }

    // Expose the previous character.
    context.previous = code;
  }

  /** @type {Effects['enter']} */
  function enter(type, fields) {
    /** @type {Token} */
    // @ts-expect-error Patch instead of assign required fields to help GC.
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(['enter', token, context]);
    stack.push(token);
    return token;
  }

  /** @type {Effects['exit']} */
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(['exit', token, context]);
    return token;
  }

  /**
   * Use results.
   *
   * @type {ReturnHandle}
   */
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }

  /**
   * Discard results.
   *
   * @type {ReturnHandle}
   */
  function onsuccessfulcheck(_, info) {
    info.restore();
  }

  /**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   *   Callback.
   * @param {{interrupt?: boolean | undefined} | undefined} [fields]
   *   Fields.
   */
  function constructFactory(onreturn, fields) {
    return hook;

    /**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Array<Construct> | ConstructRecord | Construct} constructs
     *   Constructs.
     * @param {State} returnState
     *   State.
     * @param {State | undefined} [bogusState]
     *   State.
     * @returns {State}
     *   State.
     */
    function hook(constructs, returnState, bogusState) {
      /** @type {ReadonlyArray<Construct>} */
      let listOfConstructs;
      /** @type {number} */
      let constructIndex;
      /** @type {Construct} */
      let currentConstruct;
      /** @type {Info} */
      let info;
      return Array.isArray(constructs) ? /* c8 ignore next 1 */
      handleListOfConstructs(constructs) : 'tokenize' in constructs ?
      // Looks like a construct.
      handleListOfConstructs([(/** @type {Construct} */constructs)]) : handleMapOfConstructs(constructs);

      /**
       * Handle a list of construct.
       *
       * @param {ConstructRecord} map
       *   Constructs.
       * @returns {State}
       *   State.
       */
      function handleMapOfConstructs(map) {
        return start;

        /** @type {State} */
        function start(code) {
          const left = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
          // To do: add more extension tests.
          /* c8 ignore next 2 */
          ...(Array.isArray(left) ? left : left ? [left] : []), ...(Array.isArray(all) ? all : all ? [all] : [])];
          return handleListOfConstructs(list)(code);
        }
      }

      /**
       * Handle a list of construct.
       *
       * @param {ReadonlyArray<Construct>} list
       *   Constructs.
       * @returns {State}
       *   State.
       */
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }

      /**
       * Handle a single construct.
       *
       * @param {Construct} construct
       *   Construct.
       * @returns {State}
       *   State.
       */
      function handleConstruct(construct) {
        return start;

        /** @type {State} */
        function start(code) {
          // To do: not needed to store if there is no bogus state, probably?
          // Currently doesn’t work because `inspect` in document does a check
          // w/o a bogus, which doesn’t make sense. But it does seem to help perf
          // by not storing.
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }

          // Always populated by defaults.

          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
          // If we do have fields, create an object w/ `context` as its
          // prototype.
          // This allows a “live binding”, which is needed for `interrupt`.
          fields ? Object.assign(Object.create(context), fields) : context, effects, ok, nok)(code);
        }
      }

      /** @type {State} */
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }

      /** @type {State} */
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }

  /**
   * @param {Construct} construct
   *   Construct.
   * @param {number} from
   *   From.
   * @returns {undefined}
   *   Nothing.
   */
  function addResult(construct, from) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(context.events, from, context.events.length - from, construct.resolve(context.events.slice(from), context));
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }

  /**
   * Store state.
   *
   * @returns {Info}
   *   Info.
   */
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      from: startEventsIndex,
      restore
    };

    /**
     * Restore state.
     *
     * @returns {undefined}
     *   Nothing.
     */
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }

  /**
   * Move the current point a bit forward in the line when it’s on a column
   * skip.
   *
   * @returns {undefined}
   *   Nothing.
   */
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}

/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {ReadonlyArray<Chunk>} chunks
 *   Chunks.
 * @param {Pick<Token, 'end' | 'start'>} token
 *   Token.
 * @returns {Array<Chunk>}
 *   Chunks.
 */
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  /** @type {Array<Chunk>} */
  let view;
  if (startIndex === endIndex) {
    // @ts-expect-error `_bufferIndex` is used on string chunks.
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      const head = view[0];
      if (typeof head === 'string') {
        view[0] = head.slice(startBufferIndex);
        /* c8 ignore next 4 -- used to be used, no longer */
      } else {
        view.shift();
      }
    }
    if (endBufferIndex > 0) {
      // @ts-expect-error `_bufferIndex` is used on string chunks.
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}

/**
 * Get the string value of a slice of chunks.
 *
 * @param {ReadonlyArray<Chunk>} chunks
 *   Chunks.
 * @param {boolean | undefined} [expandTabs=false]
 *   Whether to expand tabs (default: `false`).
 * @returns {string}
 *   Result.
 */
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  /** @type {Array<string>} */
  const result = [];
  /** @type {boolean | undefined} */
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    /** @type {string} */
    let value;
    if (typeof chunk === 'string') {
      value = chunk;
    } else switch (chunk) {
      case -5:
        {
          value = "\r";
          break;
        }
      case -4:
        {
          value = "\n";
          break;
        }
      case -3:
        {
          value = "\r" + "\n";
          break;
        }
      case -2:
        {
          value = expandTabs ? " " : "\t";
          break;
        }
      case -1:
        {
          if (!expandTabs && atTab) continue;
          value = " ";
          break;
        }
      default:
        {
          // Currently only replacement character.
          value = String.fromCharCode(chunk);
        }
    }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join('');
}

/**
 * @import {
 *   Create,
 *   FullNormalizedExtension,
 *   InitialConstruct,
 *   ParseContext,
 *   ParseOptions
 * } from 'micromark-util-types'
 */


/**
 * @param {ParseOptions | null | undefined} [options]
 *   Configuration (optional).
 * @returns {ParseContext}
 *   Parser.
 */
function parse(options) {
  const settings = options || {};
  const constructs = /** @type {FullNormalizedExtension} */
  combineExtensions([defaultConstructs, ...(settings.extensions || [])]);

  /** @type {ParseContext} */
  const parser = {
    constructs,
    content: create(content$1),
    defined: [],
    document: create(document$2),
    flow: create(flow$1),
    lazy: {},
    string: create(string$1),
    text: create(text$5)
  };
  return parser;

  /**
   * @param {InitialConstruct} initial
   *   Construct to start with.
   * @returns {Create}
   *   Create a tokenizer.
   */
  function create(initial) {
    return creator;
    /** @type {Create} */
    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}

/**
 * @import {Event} from 'micromark-util-types'
 */


/**
 * @param {Array<Event>} events
 *   Events.
 * @returns {Array<Event>}
 *   Events.
 */
function postprocess(events) {
  while (!subtokenize(events)) {
    // Empty
  }
  return events;
}

/**
 * @import {Chunk, Code, Encoding, Value} from 'micromark-util-types'
 */

/**
 * @callback Preprocessor
 *   Preprocess a value.
 * @param {Value} value
 *   Value.
 * @param {Encoding | null | undefined} [encoding]
 *   Encoding when `value` is a typed array (optional).
 * @param {boolean | null | undefined} [end=false]
 *   Whether this is the last chunk (default: `false`).
 * @returns {Array<Chunk>}
 *   Chunks.
 */

const search = /[\0\t\n\r]/g;

/**
 * @returns {Preprocessor}
 *   Preprocess a value.
 */
function preprocess() {
  let column = 1;
  let buffer = '';
  /** @type {boolean | undefined} */
  let start = true;
  /** @type {boolean | undefined} */
  let atCarriageReturn;
  return preprocessor;

  /** @type {Preprocessor} */
  // eslint-disable-next-line complexity
  function preprocessor(value, encoding, end) {
    /** @type {Array<Chunk>} */
    const chunks = [];
    /** @type {RegExpMatchArray | null} */
    let match;
    /** @type {number} */
    let next;
    /** @type {number} */
    let startPosition;
    /** @type {number} */
    let endPosition;
    /** @type {Code} */
    let code;
    value = buffer + (typeof value === 'string' ? value.toString() : new TextDecoder(encoding || undefined).decode(value));
    startPosition = 0;
    buffer = '';
    if (start) {
      // To do: `markdown-rs` actually parses BOMs (byte order mark).
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = undefined;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== undefined ? match.index : value.length;
      code = value.charCodeAt(endPosition);
      if (!match) {
        buffer = value.slice(startPosition);
        break;
      }
      if (code === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = undefined;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = undefined;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code) {
          case 0:
            {
              chunks.push(65533);
              column++;
              break;
            }
          case 9:
            {
              next = Math.ceil(column / 4) * 4;
              chunks.push(-2);
              while (column++ < next) chunks.push(-1);
              break;
            }
          case 10:
            {
              chunks.push(-4);
              column = 1;
              break;
            }
          default:
            {
              atCarriageReturn = true;
              column = 1;
            }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn) chunks.push(-5);
      if (buffer) chunks.push(buffer);
      chunks.push(null);
    }
    return chunks;
  }
}

const characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

/**
 * Decode markdown strings (which occur in places such as fenced code info
 * strings, destinations, labels, and titles).
 *
 * The “string” content type allows character escapes and -references.
 * This decodes those.
 *
 * @param {string} value
 *   Value to decode.
 * @returns {string}
 *   Decoded value.
 */
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}

/**
 * @param {string} $0
 *   Match.
 * @param {string} $1
 *   Character escape.
 * @param {string} $2
 *   Character reference.
 * @returns {string}
 *   Decoded value
 */
function decode($0, $1, $2) {
  if ($1) {
    // Escape.
    return $1;
  }

  // Reference.
  const head = $2.charCodeAt(0);
  if (head === 35) {
    const head = $2.charCodeAt(1);
    const hex = head === 120 || head === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}

/**
 * @import {
 *   Break,
 *   Blockquote,
 *   Code,
 *   Definition,
 *   Emphasis,
 *   Heading,
 *   Html,
 *   Image,
 *   InlineCode,
 *   Link,
 *   ListItem,
 *   List,
 *   Nodes,
 *   Paragraph,
 *   PhrasingContent,
 *   ReferenceType,
 *   Root,
 *   Strong,
 *   Text,
 *   ThematicBreak
 * } from 'mdast'
 * @import {
 *   Encoding,
 *   Event,
 *   Token,
 *   Value
 * } from 'micromark-util-types'
 * @import {Point} from 'unist'
 * @import {
 *   CompileContext,
 *   CompileData,
 *   Config,
 *   Extension,
 *   Handle,
 *   OnEnterError,
 *   Options
 * } from './types.js'
 */

const own$3 = {}.hasOwnProperty;

/**
 * Turn markdown into a syntax tree.
 *
 * @overload
 * @param {Value} value
 * @param {Encoding | null | undefined} [encoding]
 * @param {Options | null | undefined} [options]
 * @returns {Root}
 *
 * @overload
 * @param {Value} value
 * @param {Options | null | undefined} [options]
 * @returns {Root}
 *
 * @param {Value} value
 *   Markdown to parse.
 * @param {Encoding | Options | null | undefined} [encoding]
 *   Character encoding for when `value` is `Buffer`.
 * @param {Options | null | undefined} [options]
 *   Configuration.
 * @returns {Root}
 *   mdast tree.
 */
function fromMarkdown(value, encoding, options) {
  if (encoding && typeof encoding === 'object') {
    options = encoding;
    encoding = undefined;
  }
  return compiler(options)(postprocess(parse(options).document().write(preprocess()(value, encoding, true))));
}

/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options | null | undefined} [options]
 */
function compiler(options) {
  /** @type {Config} */
  const config = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: opener(link),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading),
      blockQuote: opener(blockQuote),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis),
      hardBreakEscape: opener(hardBreak),
      hardBreakTrailing: opener(hardBreak),
      htmlFlow: opener(html, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html, buffer),
      htmlTextData: onenterdata,
      image: opener(image),
      label: buffer,
      link: opener(link),
      listItem: opener(listItem),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list, onenterlistordered),
      listUnordered: opener(list),
      paragraph: opener(paragraph),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading),
      strong: opener(strong),
      thematicBreak: opener(thematicBreak)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      characterReference: onexitcharacterreference,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  };
  configure(config, (options || {}).mdastExtensions || []);

  /** @type {CompileData} */
  const data = {};
  return compile;

  /**
   * Turn micromark events into an mdast tree.
   *
   * @param {Array<Event>} events
   *   Events.
   * @returns {Root}
   *   mdast tree.
   */
  function compile(events) {
    /** @type {Root} */
    let tree = {
      type: 'root',
      children: []
    };
    /** @type {Omit<CompileContext, 'sliceSerialize'>} */
    const context = {
      stack: [tree],
      tokenStack: [],
      config,
      enter,
      exit,
      buffer,
      resume,
      data
    };
    /** @type {Array<number>} */
    const listStack = [];
    let index = -1;
    while (++index < events.length) {
      // We preprocess lists to add `listItem` tokens, and to infer whether
      // items the list itself are spread out.
      if (events[index][1].type === "listOrdered" || events[index][1].type === "listUnordered") {
        if (events[index][0] === 'enter') {
          listStack.push(index);
        } else {
          const tail = listStack.pop();
          index = prepareList(events, tail, index);
        }
      }
    }
    index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own$3.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(Object.assign({
          sliceSerialize: events[index][2].sliceSerialize
        }, context), events[index][1]);
      }
    }

    // Handle tokens still being open.
    if (context.tokenStack.length > 0) {
      const tail = context.tokenStack[context.tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, undefined, tail[0]);
    }

    // Figure out `root` position.
    tree.position = {
      start: point(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    };

    // Call transforms.
    index = -1;
    while (++index < config.transforms.length) {
      tree = config.transforms[index](tree) || tree;
    }
    return tree;
  }

  /**
   * @param {Array<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */
  function prepareList(events, start, length) {
    let index = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    /** @type {Token | undefined} */
    let listItem;
    /** @type {number | undefined} */
    let lineIndex;
    /** @type {number | undefined} */
    let firstBlankLineIndex;
    /** @type {boolean | undefined} */
    let atMarker;
    while (++index <= length) {
      const event = events[index];
      switch (event[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote":
          {
            if (event[0] === 'enter') {
              containerBalance++;
            } else {
              containerBalance--;
            }
            atMarker = undefined;
            break;
          }
        case "lineEndingBlank":
          {
            if (event[0] === 'enter') {
              if (listItem && !atMarker && !containerBalance && !firstBlankLineIndex) {
                firstBlankLineIndex = index;
              }
              atMarker = undefined;
            }
            break;
          }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          {
            // Empty.

            break;
          }
        default:
          {
            atMarker = undefined;
          }
      }
      if (!containerBalance && event[0] === 'enter' && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === 'exit' && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem) {
          let tailIndex = index;
          lineIndex = undefined;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === 'exit') continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") ; else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem._spread = true;
          }

          // Fix position.
          listItem.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index, 0, ['exit', listItem, event[2]]);
          index++;
          length++;
        }

        // Create a new list item.
        if (event[1].type === "listItemPrefix") {
          /** @type {Token} */
          const item = {
            type: 'listItem',
            _spread: false,
            start: Object.assign({}, event[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: undefined
          };
          listItem = item;
          events.splice(index, 0, ['enter', item, event[2]]);
          index++;
          length++;
          firstBlankLineIndex = undefined;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length;
  }

  /**
   * Create an opener handle.
   *
   * @param {(token: Token) => Nodes} create
   *   Create a node.
   * @param {Handle | undefined} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */
  function opener(create, and) {
    return open;

    /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {undefined}
     */
    function open(token) {
      enter.call(this, create(token), token);
      if (and) and.call(this, token);
    }
  }

  /**
   * @type {CompileContext['buffer']}
   */
  function buffer() {
    this.stack.push({
      type: 'fragment',
      children: []
    });
  }

  /**
   * @type {CompileContext['enter']}
   */
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    /** @type {Array<Nodes>} */
    const siblings = parent.children;
    siblings.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler || undefined]);
    node.position = {
      start: point(token.start),
      // @ts-expect-error: `end` will be patched later.
      end: undefined
    };
  }

  /**
   * Create a closer handle.
   *
   * @param {Handle | undefined} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */
  function closer(and) {
    return close;

    /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {undefined}
     */
    function close(token) {
      if (and) and.call(this, token);
      exit.call(this, token);
    }
  }

  /**
   * @type {CompileContext['exit']}
   */
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error('Cannot close `' + token.type + '` (' + stringifyPosition({
        start: token.start,
        end: token.end
      }) + '): it’s not open');
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
  }

  /**
   * @type {CompileContext['resume']}
   */
  function resume() {
    return toString$1(this.stack.pop());
  }

  //
  // Handlers.
  //

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterlistordered() {
    this.data.expectingFirstListItemValue = true;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterlistitemvalue(token) {
    if (this.data.expectingFirstListItemValue) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      this.data.expectingFirstListItemValue = undefined;
    }
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodefencedfenceinfo() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.lang = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodefencedfencemeta() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.meta = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodefencedfence() {
    // Exit if this is the closing fence.
    if (this.data.flowCodeInside) return;
    this.buffer();
    this.data.flowCodeInside = true;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodefenced() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
    this.data.flowCodeInside = undefined;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodeindented() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data.replace(/(\r?\n|\r)$/g, '');
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitdefinitionlabelstring(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitdefinitiontitlestring() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitdefinitiondestinationstring() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitatxheadingsequence(token) {
    const node = this.stack[this.stack.length - 1];
    if (!node.depth) {
      const depth = this.sliceSerialize(token).length;
      node.depth = depth;
    }
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitsetextheadingtext() {
    this.data.setextHeadingSlurpLineEnding = true;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitsetextheadinglinesequence(token) {
    const node = this.stack[this.stack.length - 1];
    node.depth = this.sliceSerialize(token).codePointAt(0) === 61 ? 1 : 2;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitsetextheading() {
    this.data.setextHeadingSlurpLineEnding = undefined;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onenterdata(token) {
    const node = this.stack[this.stack.length - 1];
    /** @type {Array<Nodes>} */
    const siblings = node.children;
    let tail = siblings[siblings.length - 1];
    if (!tail || tail.type !== 'text') {
      // Add a new text node.
      tail = text();
      tail.position = {
        start: point(token.start),
        // @ts-expect-error: we’ll add `end` later.
        end: undefined
      };
      siblings.push(tail);
    }
    this.stack.push(tail);
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point(token.end);
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];
    // If we’re at a hard break, include the line ending in there.
    if (this.data.atHardBreak) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point(token.end);
      this.data.atHardBreak = undefined;
      return;
    }
    if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexithardbreak() {
    this.data.atHardBreak = true;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexithtmlflow() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexithtmltext() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitcodetext() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitlink() {
    const node = this.stack[this.stack.length - 1];
    // Note: there are also `identifier` and `label` fields on this link node!
    // These are used / cleaned here.

    // To do: clean.
    if (this.data.inReference) {
      /** @type {ReferenceType} */
      const referenceType = this.data.referenceType || 'shortcut';
      node.type += 'Reference';
      // @ts-expect-error: mutate.
      node.referenceType = referenceType;
      // @ts-expect-error: mutate.
      delete node.url;
      delete node.title;
    } else {
      // @ts-expect-error: mutate.
      delete node.identifier;
      // @ts-expect-error: mutate.
      delete node.label;
    }
    this.data.referenceType = undefined;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitimage() {
    const node = this.stack[this.stack.length - 1];
    // Note: there are also `identifier` and `label` fields on this link node!
    // These are used / cleaned here.

    // To do: clean.
    if (this.data.inReference) {
      /** @type {ReferenceType} */
      const referenceType = this.data.referenceType || 'shortcut';
      node.type += 'Reference';
      // @ts-expect-error: mutate.
      node.referenceType = referenceType;
      // @ts-expect-error: mutate.
      delete node.url;
      delete node.title;
    } else {
      // @ts-expect-error: mutate.
      delete node.identifier;
      // @ts-expect-error: mutate.
      delete node.label;
    }
    this.data.referenceType = undefined;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitlabeltext(token) {
    const string = this.sliceSerialize(token);
    const ancestor = this.stack[this.stack.length - 2];
    // @ts-expect-error: stash this on the node, as it might become a reference
    // later.
    ancestor.label = decodeString(string);
    // @ts-expect-error: same as above.
    ancestor.identifier = normalizeIdentifier(string).toLowerCase();
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node = this.stack[this.stack.length - 1];
    // Assume a reference.
    this.data.inReference = true;
    if (node.type === 'link') {
      /** @type {Array<PhrasingContent>} */
      const children = fragment.children;
      node.children = children;
    } else {
      node.alt = value;
    }
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitresourcedestinationstring() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitresourcetitlestring() {
    const data = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitresource() {
    this.data.inReference = undefined;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onenterreference() {
    this.data.referenceType = 'collapsed';
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitreferencestring(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    // @ts-expect-error: stash this on the node, as it might become a reference
    // later.
    node.label = label;
    // @ts-expect-error: same as above.
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    this.data.referenceType = 'full';
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */

  function onexitcharacterreferencemarker(token) {
    this.data.characterReferenceType = token.type;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcharacterreferencevalue(token) {
    const data = this.sliceSerialize(token);
    const type = this.data.characterReferenceType;
    /** @type {string} */
    let value;
    if (type) {
      value = decodeNumericCharacterReference(data, type === "characterReferenceMarkerNumeric" ? 10 : 16);
      this.data.characterReferenceType = undefined;
    } else {
      const result = decodeNamedCharacterReference(data);
      value = result;
    }
    const tail = this.stack[this.stack.length - 1];
    tail.value += value;
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcharacterreference(token) {
    const tail = this.stack.pop();
    tail.position.end = point(token.end);
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = this.sliceSerialize(token);
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = 'mailto:' + this.sliceSerialize(token);
  }

  //
  // Creaters.
  //

  /** @returns {Blockquote} */
  function blockQuote() {
    return {
      type: 'blockquote',
      children: []
    };
  }

  /** @returns {Code} */
  function codeFlow() {
    return {
      type: 'code',
      lang: null,
      meta: null,
      value: ''
    };
  }

  /** @returns {InlineCode} */
  function codeText() {
    return {
      type: 'inlineCode',
      value: ''
    };
  }

  /** @returns {Definition} */
  function definition() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: ''
    };
  }

  /** @returns {Emphasis} */
  function emphasis() {
    return {
      type: 'emphasis',
      children: []
    };
  }

  /** @returns {Heading} */
  function heading() {
    return {
      type: 'heading',
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }

  /** @returns {Break} */
  function hardBreak() {
    return {
      type: 'break'
    };
  }

  /** @returns {Html} */
  function html() {
    return {
      type: 'html',
      value: ''
    };
  }

  /** @returns {Image} */
  function image() {
    return {
      type: 'image',
      title: null,
      url: '',
      alt: null
    };
  }

  /** @returns {Link} */
  function link() {
    return {
      type: 'link',
      title: null,
      url: '',
      children: []
    };
  }

  /**
   * @param {Token} token
   * @returns {List}
   */
  function list(token) {
    return {
      type: 'list',
      ordered: token.type === 'listOrdered',
      start: null,
      spread: token._spread,
      children: []
    };
  }

  /**
   * @param {Token} token
   * @returns {ListItem}
   */
  function listItem(token) {
    return {
      type: 'listItem',
      spread: token._spread,
      checked: null,
      children: []
    };
  }

  /** @returns {Paragraph} */
  function paragraph() {
    return {
      type: 'paragraph',
      children: []
    };
  }

  /** @returns {Strong} */
  function strong() {
    return {
      type: 'strong',
      children: []
    };
  }

  /** @returns {Text} */
  function text() {
    return {
      type: 'text',
      value: ''
    };
  }

  /** @returns {ThematicBreak} */
  function thematicBreak() {
    return {
      type: 'thematicBreak'
    };
  }
}

/**
 * Copy a point-like value.
 *
 * @param {Point} d
 *   Point-like value.
 * @returns {Point}
 *   unist point.
 */
function point(d) {
  return {
    line: d.line,
    column: d.column,
    offset: d.offset
  };
}

/**
 * @param {Config} combined
 * @param {Array<Array<Extension> | Extension>} extensions
 * @returns {undefined}
 */
function configure(combined, extensions) {
  let index = -1;
  while (++index < extensions.length) {
    const value = extensions[index];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
}

/**
 * @param {Config} combined
 * @param {Extension} extension
 * @returns {undefined}
 */
function extension(combined, extension) {
  /** @type {keyof Extension} */
  let key;
  for (key in extension) {
    if (own$3.call(extension, key)) {
      switch (key) {
        case 'canContainEols':
          {
            const right = extension[key];
            if (right) {
              combined[key].push(...right);
            }
            break;
          }
        case 'transforms':
          {
            const right = extension[key];
            if (right) {
              combined[key].push(...right);
            }
            break;
          }
        case 'enter':
        case 'exit':
          {
            const right = extension[key];
            if (right) {
              Object.assign(combined[key], right);
            }
            break;
          }
        // No default
      }
    }
  }
}

/** @type {OnEnterError} */
function defaultOnError(left, right) {
  if (left) {
    throw new Error('Cannot close `' + left.type + '` (' + stringifyPosition({
      start: left.start,
      end: left.end
    }) + '): a different token (`' + right.type + '`, ' + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ') is open');
  } else {
    throw new Error('Cannot close document, a token (`' + right.type + '`, ' + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ') is still open');
  }
}

/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-from-markdown').Options} FromMarkdownOptions
 * @typedef {import('unified').Parser<Root>} Parser
 * @typedef {import('unified').Processor<Root>} Processor
 */


/**
 * Aadd support for parsing from markdown.
 *
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns {undefined}
 *   Nothing.
 */
function remarkParse(options) {
  /** @type {Processor} */
  // @ts-expect-error: TS in JSDoc generates wrong types if `this` is typed regularly.
  const self = this;

  self.parser = parser;

  /**
   * @type {Parser}
   */
  function parser(doc) {
    return fromMarkdown(doc, {
      ...self.data('settings'),
      ...options,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: self.data('micromarkExtensions') || [],
      mdastExtensions: self.data('fromMarkdownExtensions') || []
    })
  }
}

/**
 * @import {Element} from 'hast'
 * @import {Blockquote} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `blockquote` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Blockquote} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function blockquote$1(state, node) {
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: state.wrap(state.all(node), true)
  };
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Element, Text} from 'hast'
 * @import {Break} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `break` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Break} node
 *   mdast node.
 * @returns {Array<Element | Text>}
 *   hast element content.
 */
function hardBreak$1(state, node) {
  /** @type {Element} */
  const result = {type: 'element', tagName: 'br', properties: {}, children: []};
  state.patch(node, result);
  return [state.applyData(node, result), {type: 'text', value: '\n'}]
}

/**
 * @import {Element, Properties} from 'hast'
 * @import {Code} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `code` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Code} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function code$2(state, node) {
  const value = node.value ? node.value + '\n' : '';
  /** @type {Properties} */
  const properties = {};
  // Someone can write `js&#x20;python&#x9;ruby`.
  const language = node.lang ? node.lang.split(/\s+/) : [];

  // GH/CM still drop the non-first languages.
  if (language.length > 0) {
    properties.className = ['language-' + language[0]];
  }

  // Create `<code>`.
  /** @type {Element} */
  let result = {
    type: 'element',
    tagName: 'code',
    properties,
    children: [{type: 'text', value}]
  };

  if (node.meta) {
    result.data = {meta: node.meta};
  }

  state.patch(node, result);
  result = state.applyData(node, result);

  // Create `<pre>`.
  result = {type: 'element', tagName: 'pre', properties: {}, children: [result]};
  state.patch(node, result);
  return result
}

/**
 * @import {Element} from 'hast'
 * @import {Delete} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `delete` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Delete} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function strikethrough(state, node) {
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'del',
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Element} from 'hast'
 * @import {Emphasis} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `emphasis` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Emphasis} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function emphasis$1(state, node) {
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'em',
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Element} from 'hast'
 * @import {FootnoteReference} from 'mdast'
 * @import {State} from '../state.js'
 */


/**
 * Turn an mdast `footnoteReference` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {FootnoteReference} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function footnoteReference$1(state, node) {
  const clobberPrefix =
    typeof state.options.clobberPrefix === 'string'
      ? state.options.clobberPrefix
      : 'user-content-';
  const id = String(node.identifier).toUpperCase();
  const safeId = normalizeUri(id.toLowerCase());
  const index = state.footnoteOrder.indexOf(id);
  /** @type {number} */
  let counter;

  let reuseCounter = state.footnoteCounts.get(id);

  if (reuseCounter === undefined) {
    reuseCounter = 0;
    state.footnoteOrder.push(id);
    counter = state.footnoteOrder.length;
  } else {
    counter = index + 1;
  }

  reuseCounter += 1;
  state.footnoteCounts.set(id, reuseCounter);

  /** @type {Element} */
  const link = {
    type: 'element',
    tagName: 'a',
    properties: {
      href: '#' + clobberPrefix + 'fn-' + safeId,
      id:
        clobberPrefix +
        'fnref-' +
        safeId +
        (reuseCounter > 1 ? '-' + reuseCounter : ''),
      dataFootnoteRef: true,
      ariaDescribedBy: ['footnote-label']
    },
    children: [{type: 'text', value: String(counter)}]
  };
  state.patch(node, link);

  /** @type {Element} */
  const sup = {
    type: 'element',
    tagName: 'sup',
    properties: {},
    children: [link]
  };
  state.patch(node, sup);
  return state.applyData(node, sup)
}

/**
 * @import {Element} from 'hast'
 * @import {Heading} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `heading` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Heading} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function heading$1(state, node) {
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'h' + node.depth,
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Element} from 'hast'
 * @import {Html} from 'mdast'
 * @import {State} from '../state.js'
 * @import {Raw} from '../../index.js'
 */

/**
 * Turn an mdast `html` node into hast (`raw` node in dangerous mode, otherwise
 * nothing).
 *
 * @param {State} state
 *   Info passed around.
 * @param {Html} node
 *   mdast node.
 * @returns {Element | Raw | undefined}
 *   hast node.
 */
function html$1(state, node) {
  if (state.options.allowDangerousHtml) {
    /** @type {Raw} */
    const result = {type: 'raw', value: node.value};
    state.patch(node, result);
    return state.applyData(node, result)
  }

  return undefined
}

/**
 * @import {ElementContent} from 'hast'
 * @import {Reference, Nodes} from 'mdast'
 * @import {State} from './state.js'
 */

/**
 * Return the content of a reference without definition as plain text.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Extract<Nodes, Reference>} node
 *   Reference node (image, link).
 * @returns {Array<ElementContent>}
 *   hast content.
 */
function revert(state, node) {
  const subtype = node.referenceType;
  let suffix = ']';

  if (subtype === 'collapsed') {
    suffix += '[]';
  } else if (subtype === 'full') {
    suffix += '[' + (node.label || node.identifier) + ']';
  }

  if (node.type === 'imageReference') {
    return [{type: 'text', value: '![' + node.alt + suffix}]
  }

  const contents = state.all(node);
  const head = contents[0];

  if (head && head.type === 'text') {
    head.value = '[' + head.value;
  } else {
    contents.unshift({type: 'text', value: '['});
  }

  const tail = contents[contents.length - 1];

  if (tail && tail.type === 'text') {
    tail.value += suffix;
  } else {
    contents.push({type: 'text', value: suffix});
  }

  return contents
}

/**
 * @import {ElementContent, Element, Properties} from 'hast'
 * @import {ImageReference} from 'mdast'
 * @import {State} from '../state.js'
 */


/**
 * Turn an mdast `imageReference` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {ImageReference} node
 *   mdast node.
 * @returns {Array<ElementContent> | ElementContent}
 *   hast node.
 */
function imageReference$1(state, node) {
  const id = String(node.identifier).toUpperCase();
  const definition = state.definitionById.get(id);

  if (!definition) {
    return revert(state, node)
  }

  /** @type {Properties} */
  const properties = {src: normalizeUri(definition.url || ''), alt: node.alt};

  if (definition.title !== null && definition.title !== undefined) {
    properties.title = definition.title;
  }

  /** @type {Element} */
  const result = {type: 'element', tagName: 'img', properties, children: []};
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Element, Properties} from 'hast'
 * @import {Image} from 'mdast'
 * @import {State} from '../state.js'
 */


/**
 * Turn an mdast `image` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Image} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function image$1(state, node) {
  /** @type {Properties} */
  const properties = {src: normalizeUri(node.url)};

  if (node.alt !== null && node.alt !== undefined) {
    properties.alt = node.alt;
  }

  if (node.title !== null && node.title !== undefined) {
    properties.title = node.title;
  }

  /** @type {Element} */
  const result = {type: 'element', tagName: 'img', properties, children: []};
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Element, Text} from 'hast'
 * @import {InlineCode} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `inlineCode` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {InlineCode} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function inlineCode$1(state, node) {
  /** @type {Text} */
  const text = {type: 'text', value: node.value.replace(/\r?\n|\r/g, ' ')};
  state.patch(node, text);

  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'code',
    properties: {},
    children: [text]
  };
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {ElementContent, Element, Properties} from 'hast'
 * @import {LinkReference} from 'mdast'
 * @import {State} from '../state.js'
 */


/**
 * Turn an mdast `linkReference` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {LinkReference} node
 *   mdast node.
 * @returns {Array<ElementContent> | ElementContent}
 *   hast node.
 */
function linkReference$1(state, node) {
  const id = String(node.identifier).toUpperCase();
  const definition = state.definitionById.get(id);

  if (!definition) {
    return revert(state, node)
  }

  /** @type {Properties} */
  const properties = {href: normalizeUri(definition.url || '')};

  if (definition.title !== null && definition.title !== undefined) {
    properties.title = definition.title;
  }

  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'a',
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Element, Properties} from 'hast'
 * @import {Link} from 'mdast'
 * @import {State} from '../state.js'
 */


/**
 * Turn an mdast `link` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Link} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function link$1(state, node) {
  /** @type {Properties} */
  const properties = {href: normalizeUri(node.url)};

  if (node.title !== null && node.title !== undefined) {
    properties.title = node.title;
  }

  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'a',
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {ElementContent, Element, Properties} from 'hast'
 * @import {ListItem, Parents} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `listItem` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {ListItem} node
 *   mdast node.
 * @param {Parents | undefined} parent
 *   Parent of `node`.
 * @returns {Element}
 *   hast node.
 */
function listItem$1(state, node, parent) {
  const results = state.all(node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  /** @type {Properties} */
  const properties = {};
  /** @type {Array<ElementContent>} */
  const children = [];

  if (typeof node.checked === 'boolean') {
    const head = results[0];
    /** @type {Element} */
    let paragraph;

    if (head && head.type === 'element' && head.tagName === 'p') {
      paragraph = head;
    } else {
      paragraph = {type: 'element', tagName: 'p', properties: {}, children: []};
      results.unshift(paragraph);
    }

    if (paragraph.children.length > 0) {
      paragraph.children.unshift({type: 'text', value: ' '});
    }

    paragraph.children.unshift({
      type: 'element',
      tagName: 'input',
      properties: {type: 'checkbox', checked: node.checked, disabled: true},
      children: []
    });

    // According to github-markdown-css, this class hides bullet.
    // See: <https://github.com/sindresorhus/github-markdown-css>.
    properties.className = ['task-list-item'];
  }

  let index = -1;

  while (++index < results.length) {
    const child = results[index];

    // Add eols before nodes, except if this is a loose, first paragraph.
    if (
      loose ||
      index !== 0 ||
      child.type !== 'element' ||
      child.tagName !== 'p'
    ) {
      children.push({type: 'text', value: '\n'});
    }

    if (child.type === 'element' && child.tagName === 'p' && !loose) {
      children.push(...child.children);
    } else {
      children.push(child);
    }
  }

  const tail = results[results.length - 1];

  // Add a final eol.
  if (tail && (loose || tail.type !== 'element' || tail.tagName !== 'p')) {
    children.push({type: 'text', value: '\n'});
  }

  /** @type {Element} */
  const result = {type: 'element', tagName: 'li', properties, children};
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @param {Parents} node
 * @return {Boolean}
 */
function listLoose(node) {
  let loose = false;
  if (node.type === 'list') {
    loose = node.spread || false;
    const children = node.children;
    let index = -1;

    while (!loose && ++index < children.length) {
      loose = listItemLoose(children[index]);
    }
  }

  return loose
}

/**
 * @param {ListItem} node
 * @return {Boolean}
 */
function listItemLoose(node) {
  const spread = node.spread;

  return spread === null || spread === undefined
    ? node.children.length > 1
    : spread
}

/**
 * @import {Element, Properties} from 'hast'
 * @import {List} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `list` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {List} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function list$1(state, node) {
  /** @type {Properties} */
  const properties = {};
  const results = state.all(node);
  let index = -1;

  if (typeof node.start === 'number' && node.start !== 1) {
    properties.start = node.start;
  }

  // Like GitHub, add a class for custom styling.
  while (++index < results.length) {
    const child = results[index];

    if (
      child.type === 'element' &&
      child.tagName === 'li' &&
      child.properties &&
      Array.isArray(child.properties.className) &&
      child.properties.className.includes('task-list-item')
    ) {
      properties.className = ['contains-task-list'];
      break
    }
  }

  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: node.ordered ? 'ol' : 'ul',
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Element} from 'hast'
 * @import {Paragraph} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `paragraph` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Paragraph} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function paragraph$1(state, node) {
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'p',
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Parents as HastParents, Root as HastRoot} from 'hast'
 * @import {Root as MdastRoot} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `root` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdastRoot} node
 *   mdast node.
 * @returns {HastParents}
 *   hast node.
 */
function root$2(state, node) {
  /** @type {HastRoot} */
  const result = {type: 'root', children: state.wrap(state.all(node))};
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Element} from 'hast'
 * @import {Strong} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `strong` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Strong} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function strong$1(state, node) {
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'strong',
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Table} from 'mdast'
 * @import {Element} from 'hast'
 * @import {State} from '../state.js'
 */


/**
 * Turn an mdast `table` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Table} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function table(state, node) {
  const rows = state.all(node);
  const firstRow = rows.shift();
  /** @type {Array<Element>} */
  const tableContent = [];

  if (firstRow) {
    /** @type {Element} */
    const head = {
      type: 'element',
      tagName: 'thead',
      properties: {},
      children: state.wrap([firstRow], true)
    };
    state.patch(node.children[0], head);
    tableContent.push(head);
  }

  if (rows.length > 0) {
    /** @type {Element} */
    const body = {
      type: 'element',
      tagName: 'tbody',
      properties: {},
      children: state.wrap(rows, true)
    };

    const start = pointStart(node.children[1]);
    const end = pointEnd(node.children[node.children.length - 1]);
    if (start && end) body.position = {start, end};
    tableContent.push(body);
  }

  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'table',
    properties: {},
    children: state.wrap(tableContent, true)
  };
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Element, ElementContent, Properties} from 'hast'
 * @import {Parents, TableRow} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `tableRow` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {TableRow} node
 *   mdast node.
 * @param {Parents | undefined} parent
 *   Parent of `node`.
 * @returns {Element}
 *   hast node.
 */
function tableRow(state, node, parent) {
  const siblings = parent ? parent.children : undefined;
  // Generate a body row when without parent.
  const rowIndex = siblings ? siblings.indexOf(node) : 1;
  const tagName = rowIndex === 0 ? 'th' : 'td';
  // To do: option to use `style`?
  const align = parent && parent.type === 'table' ? parent.align : undefined;
  const length = align ? align.length : node.children.length;
  let cellIndex = -1;
  /** @type {Array<ElementContent>} */
  const cells = [];

  while (++cellIndex < length) {
    // Note: can also be undefined.
    const cell = node.children[cellIndex];
    /** @type {Properties} */
    const properties = {};
    const alignValue = align ? align[cellIndex] : undefined;

    if (alignValue) {
      properties.align = alignValue;
    }

    /** @type {Element} */
    let result = {type: 'element', tagName, properties, children: []};

    if (cell) {
      result.children = state.all(cell);
      state.patch(cell, result);
      result = state.applyData(cell, result);
    }

    cells.push(result);
  }

  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'tr',
    properties: {},
    children: state.wrap(cells, true)
  };
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Element} from 'hast'
 * @import {TableCell} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `tableCell` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {TableCell} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function tableCell(state, node) {
  // Note: this function is normally not called: see `table-row` for how rows
  // and their cells are compiled.
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'td', // Assume body cell.
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result)
}

const tab = 9; /* `\t` */
const space = 32; /* ` ` */

/**
 * Remove initial and final spaces and tabs at the line breaks in `value`.
 * Does not trim initial and final spaces and tabs of the value itself.
 *
 * @param {string} value
 *   Value to trim.
 * @returns {string}
 *   Trimmed value.
 */
function trimLines(value) {
  const source = String(value);
  const search = /\r?\n|\r/g;
  let match = search.exec(source);
  let last = 0;
  /** @type {Array<string>} */
  const lines = [];

  while (match) {
    lines.push(
      trimLine(source.slice(last, match.index), last > 0, true),
      match[0]
    );

    last = match.index + match[0].length;
    match = search.exec(source);
  }

  lines.push(trimLine(source.slice(last), last > 0, false));

  return lines.join('')
}

/**
 * @param {string} value
 *   Line to trim.
 * @param {boolean} start
 *   Whether to trim the start of the line.
 * @param {boolean} end
 *   Whether to trim the end of the line.
 * @returns {string}
 *   Trimmed line.
 */
function trimLine(value, start, end) {
  let startIndex = 0;
  let endIndex = value.length;

  if (start) {
    let code = value.codePointAt(startIndex);

    while (code === tab || code === space) {
      startIndex++;
      code = value.codePointAt(startIndex);
    }
  }

  if (end) {
    let code = value.codePointAt(endIndex - 1);

    while (code === tab || code === space) {
      endIndex--;
      code = value.codePointAt(endIndex - 1);
    }
  }

  return endIndex > startIndex ? value.slice(startIndex, endIndex) : ''
}

/**
 * @import {Element as HastElement, Text as HastText} from 'hast'
 * @import {Text as MdastText} from 'mdast'
 * @import {State} from '../state.js'
 */


/**
 * Turn an mdast `text` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdastText} node
 *   mdast node.
 * @returns {HastElement | HastText}
 *   hast node.
 */
function text$3(state, node) {
  /** @type {HastText} */
  const result = {type: 'text', value: trimLines(String(node.value))};
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Element} from 'hast'
 * @import {ThematicBreak} from 'mdast'
 * @import {State} from '../state.js'
 */

/**
 * Turn an mdast `thematicBreak` node into hast.
 *
 * @param {State} state
 *   Info passed around.
 * @param {ThematicBreak} node
 *   mdast node.
 * @returns {Element}
 *   hast node.
 */
function thematicBreak$1(state, node) {
  /** @type {Element} */
  const result = {
    type: 'element',
    tagName: 'hr',
    properties: {},
    children: []
  };
  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * @import {Handlers} from '../state.js'
 */


/**
 * Default handlers for nodes.
 *
 * @satisfies {Handlers}
 */
const handlers = {
  blockquote: blockquote$1,
  break: hardBreak$1,
  code: code$2,
  delete: strikethrough,
  emphasis: emphasis$1,
  footnoteReference: footnoteReference$1,
  heading: heading$1,
  html: html$1,
  imageReference: imageReference$1,
  image: image$1,
  inlineCode: inlineCode$1,
  linkReference: linkReference$1,
  link: link$1,
  listItem: listItem$1,
  list: list$1,
  paragraph: paragraph$1,
  // @ts-expect-error: root is different, but hard to type.
  root: root$2,
  strong: strong$1,
  table,
  tableCell,
  tableRow,
  text: text$3,
  thematicBreak: thematicBreak$1,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};

// Return nothing for nodes that are ignored.
function ignore() {
  return undefined
}

const VOID       = -1;
const PRIMITIVE  = 0;
const ARRAY      = 1;
const OBJECT     = 2;
const DATE       = 3;
const REGEXP     = 4;
const MAP        = 5;
const SET        = 6;
const ERROR      = 7;
const BIGINT     = 8;
// export const SYMBOL = 9;

const env = typeof self === 'object' ? self : globalThis;

const deserializer = ($, _) => {
  const as = (out, index) => {
    $.set(index, out);
    return out;
  };

  const unpair = index => {
    if ($.has(index))
      return $.get(index);

    const [type, value] = _[index];
    switch (type) {
      case PRIMITIVE:
      case VOID:
        return as(value, index);
      case ARRAY: {
        const arr = as([], index);
        for (const index of value)
          arr.push(unpair(index));
        return arr;
      }
      case OBJECT: {
        const object = as({}, index);
        for (const [key, index] of value)
          object[unpair(key)] = unpair(index);
        return object;
      }
      case DATE:
        return as(new Date(value), index);
      case REGEXP: {
        const {source, flags} = value;
        return as(new RegExp(source, flags), index);
      }
      case MAP: {
        const map = as(new Map, index);
        for (const [key, index] of value)
          map.set(unpair(key), unpair(index));
        return map;
      }
      case SET: {
        const set = as(new Set, index);
        for (const index of value)
          set.add(unpair(index));
        return set;
      }
      case ERROR: {
        const {name, message} = value;
        return as(new env[name](message), index);
      }
      case BIGINT:
        return as(BigInt(value), index);
      case 'BigInt':
        return as(Object(BigInt(value)), index);
      case 'ArrayBuffer':
        return as(new Uint8Array(value).buffer, value);
      case 'DataView': {
        const { buffer } = new Uint8Array(value);
        return as(new DataView(buffer), value);
      }
    }
    return as(new env[type](value), index);
  };

  return unpair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns a deserialized value from a serialized array of Records.
 * @param {Record[]} serialized a previously serialized value.
 * @returns {any}
 */
const deserialize = serialized => deserializer(new Map, serialized)(0);

const EMPTY = '';

const {toString} = {};
const {keys} = Object;

const typeOf = value => {
  const type = typeof value;
  if (type !== 'object' || !value)
    return [PRIMITIVE, type];

  const asString = toString.call(value).slice(8, -1);
  switch (asString) {
    case 'Array':
      return [ARRAY, EMPTY];
    case 'Object':
      return [OBJECT, EMPTY];
    case 'Date':
      return [DATE, EMPTY];
    case 'RegExp':
      return [REGEXP, EMPTY];
    case 'Map':
      return [MAP, EMPTY];
    case 'Set':
      return [SET, EMPTY];
    case 'DataView':
      return [ARRAY, asString];
  }

  if (asString.includes('Array'))
    return [ARRAY, asString];

  if (asString.includes('Error'))
    return [ERROR, asString];

  return [OBJECT, asString];
};

const shouldSkip = ([TYPE, type]) => (
  TYPE === PRIMITIVE &&
  (type === 'function' || type === 'symbol')
);

const serializer = (strict, json, $, _) => {

  const as = (out, value) => {
    const index = _.push(out) - 1;
    $.set(value, index);
    return index;
  };

  const pair = value => {
    if ($.has(value))
      return $.get(value);

    let [TYPE, type] = typeOf(value);
    switch (TYPE) {
      case PRIMITIVE: {
        let entry = value;
        switch (type) {
          case 'bigint':
            TYPE = BIGINT;
            entry = value.toString();
            break;
          case 'function':
          case 'symbol':
            if (strict)
              throw new TypeError('unable to serialize ' + type);
            entry = null;
            break;
          case 'undefined':
            return as([VOID], value);
        }
        return as([TYPE, entry], value);
      }
      case ARRAY: {
        if (type) {
          let spread = value;
          if (type === 'DataView') {
            spread = new Uint8Array(value.buffer);
          }
          else if (type === 'ArrayBuffer') {
            spread = new Uint8Array(value);
          }
          return as([type, [...spread]], value);
        }

        const arr = [];
        const index = as([TYPE, arr], value);
        for (const entry of value)
          arr.push(pair(entry));
        return index;
      }
      case OBJECT: {
        if (type) {
          switch (type) {
            case 'BigInt':
              return as([type, value.toString()], value);
            case 'Boolean':
            case 'Number':
            case 'String':
              return as([type, value.valueOf()], value);
          }
        }

        if (json && ('toJSON' in value))
          return pair(value.toJSON());

        const entries = [];
        const index = as([TYPE, entries], value);
        for (const key of keys(value)) {
          if (strict || !shouldSkip(typeOf(value[key])))
            entries.push([pair(key), pair(value[key])]);
        }
        return index;
      }
      case DATE:
        return as([TYPE, value.toISOString()], value);
      case REGEXP: {
        const {source, flags} = value;
        return as([TYPE, {source, flags}], value);
      }
      case MAP: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const [key, entry] of value) {
          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))
            entries.push([pair(key), pair(entry)]);
        }
        return index;
      }
      case SET: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const entry of value) {
          if (strict || !shouldSkip(typeOf(entry)))
            entries.push(pair(entry));
        }
        return index;
      }
    }

    const {message} = value;
    return as([TYPE, {name: type, message}], value);
  };

  return pair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns an array of serialized Records.
 * @param {any} value a serializable value.
 * @param {{json?: boolean, lossy?: boolean}?} options an object with a `lossy` or `json` property that,
 *  if `true`, will not throw errors on incompatible types, and behave more
 *  like JSON stringify would behave. Symbol and Function will be discarded.
 * @returns {Record[]}
 */
 const serialize$1 = (value, {json, lossy} = {}) => {
  const _ = [];
  return serializer(!(json || lossy), !!json, new Map, _)(value), _;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns an array of serialized Records.
 * @param {any} any a serializable value.
 * @param {{transfer?: any[], json?: boolean, lossy?: boolean}?} options an object with
 * a transfer option (ignored when polyfilled) and/or non standard fields that
 * fallback to the polyfill if present.
 * @returns {Record[]}
 */
var structuredClone$1 = typeof structuredClone === "function" ?
  /* c8 ignore start */
  (any, options) => (
    options && ('json' in options || 'lossy' in options) ?
      deserialize(serialize$1(any, options)) : structuredClone(any)
  ) :
  (any, options) => deserialize(serialize$1(any, options));

/**
 * @import {ElementContent, Element} from 'hast'
 * @import {State} from './state.js'
 */


/**
 * Generate the default content that GitHub uses on backreferences.
 *
 * @param {number} _
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param {number} rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns {Array<ElementContent>}
 *   Content.
 */
function defaultFootnoteBackContent(_, rereferenceIndex) {
  /** @type {Array<ElementContent>} */
  const result = [{type: 'text', value: '↩'}];

  if (rereferenceIndex > 1) {
    result.push({
      type: 'element',
      tagName: 'sup',
      properties: {},
      children: [{type: 'text', value: String(rereferenceIndex)}]
    });
  }

  return result
}

/**
 * Generate the default label that GitHub uses on backreferences.
 *
 * @param {number} referenceIndex
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param {number} rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns {string}
 *   Label.
 */
function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
  return (
    'Back to reference ' +
    (referenceIndex + 1) +
    (rereferenceIndex > 1 ? '-' + rereferenceIndex : '')
  )
}

/**
 * Generate a hast footer for called footnote definitions.
 *
 * @param {State} state
 *   Info passed around.
 * @returns {Element | undefined}
 *   `section` element or `undefined`.
 */
// eslint-disable-next-line complexity
function footer(state) {
  const clobberPrefix =
    typeof state.options.clobberPrefix === 'string'
      ? state.options.clobberPrefix
      : 'user-content-';
  const footnoteBackContent =
    state.options.footnoteBackContent || defaultFootnoteBackContent;
  const footnoteBackLabel =
    state.options.footnoteBackLabel || defaultFootnoteBackLabel;
  const footnoteLabel = state.options.footnoteLabel || 'Footnotes';
  const footnoteLabelTagName = state.options.footnoteLabelTagName || 'h2';
  const footnoteLabelProperties = state.options.footnoteLabelProperties || {
    className: ['sr-only']
  };
  /** @type {Array<ElementContent>} */
  const listItems = [];
  let referenceIndex = -1;

  while (++referenceIndex < state.footnoteOrder.length) {
    const definition = state.footnoteById.get(
      state.footnoteOrder[referenceIndex]
    );

    if (!definition) {
      continue
    }

    const content = state.all(definition);
    const id = String(definition.identifier).toUpperCase();
    const safeId = normalizeUri(id.toLowerCase());
    let rereferenceIndex = 0;
    /** @type {Array<ElementContent>} */
    const backReferences = [];
    const counts = state.footnoteCounts.get(id);

    // eslint-disable-next-line no-unmodified-loop-condition
    while (counts !== undefined && ++rereferenceIndex <= counts) {
      if (backReferences.length > 0) {
        backReferences.push({type: 'text', value: ' '});
      }

      let children =
        typeof footnoteBackContent === 'string'
          ? footnoteBackContent
          : footnoteBackContent(referenceIndex, rereferenceIndex);

      if (typeof children === 'string') {
        children = {type: 'text', value: children};
      }

      backReferences.push({
        type: 'element',
        tagName: 'a',
        properties: {
          href:
            '#' +
            clobberPrefix +
            'fnref-' +
            safeId +
            (rereferenceIndex > 1 ? '-' + rereferenceIndex : ''),
          dataFootnoteBackref: '',
          ariaLabel:
            typeof footnoteBackLabel === 'string'
              ? footnoteBackLabel
              : footnoteBackLabel(referenceIndex, rereferenceIndex),
          className: ['data-footnote-backref']
        },
        children: Array.isArray(children) ? children : [children]
      });
    }

    const tail = content[content.length - 1];

    if (tail && tail.type === 'element' && tail.tagName === 'p') {
      const tailTail = tail.children[tail.children.length - 1];
      if (tailTail && tailTail.type === 'text') {
        tailTail.value += ' ';
      } else {
        tail.children.push({type: 'text', value: ' '});
      }

      tail.children.push(...backReferences);
    } else {
      content.push(...backReferences);
    }

    /** @type {Element} */
    const listItem = {
      type: 'element',
      tagName: 'li',
      properties: {id: clobberPrefix + 'fn-' + safeId},
      children: state.wrap(content, true)
    };

    state.patch(definition, listItem);

    listItems.push(listItem);
  }

  if (listItems.length === 0) {
    return
  }

  return {
    type: 'element',
    tagName: 'section',
    properties: {dataFootnotes: true, className: ['footnotes']},
    children: [
      {
        type: 'element',
        tagName: footnoteLabelTagName,
        properties: {
          ...structuredClone$1(footnoteLabelProperties),
          id: 'footnote-label'
        },
        children: [{type: 'text', value: footnoteLabel}]
      },
      {type: 'text', value: '\n'},
      {
        type: 'element',
        tagName: 'ol',
        properties: {},
        children: state.wrap(listItems, true)
      },
      {type: 'text', value: '\n'}
    ]
  }
}

/**
 * @import {Node, Parent} from 'unist'
 */


/**
 * Generate an assertion from a test.
 *
 * Useful if you’re going to test many nodes, for example when creating a
 * utility where something else passes a compatible test.
 *
 * The created function is a bit faster because it expects valid input only:
 * a `node`, `index`, and `parent`.
 *
 * @param {Test} test
 *   *   when nullish, checks if `node` is a `Node`.
 *   *   when `string`, works like passing `(node) => node.type === test`.
 *   *   when `function` checks if function passed the node is true.
 *   *   when `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
 *   *   when `array`, checks if any one of the subtests pass.
 * @returns {Check}
 *   An assertion.
 */
const convert =
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  (
    /**
     * @param {Test} [test]
     * @returns {Check}
     */
    function (test) {
      if (test === null || test === undefined) {
        return ok
      }

      if (typeof test === 'function') {
        return castFactory(test)
      }

      if (typeof test === 'object') {
        return Array.isArray(test)
          ? anyFactory(test)
          : // Cast because `ReadonlyArray` goes into the above but `isArray`
            // narrows to `Array`.
            propertiesFactory(/** @type {Props} */ (test))
      }

      if (typeof test === 'string') {
        return typeFactory(test)
      }

      throw new Error('Expected function, string, or object as test')
    }
  );

/**
 * @param {Array<Props | TestFunction | string>} tests
 * @returns {Check}
 */
function anyFactory(tests) {
  /** @type {Array<Check>} */
  const checks = [];
  let index = -1;

  while (++index < tests.length) {
    checks[index] = convert(tests[index]);
  }

  return castFactory(any)

  /**
   * @this {unknown}
   * @type {TestFunction}
   */
  function any(...parameters) {
    let index = -1;

    while (++index < checks.length) {
      if (checks[index].apply(this, parameters)) return true
    }

    return false
  }
}

/**
 * Turn an object into a test for a node with a certain fields.
 *
 * @param {Props} check
 * @returns {Check}
 */
function propertiesFactory(check) {
  const checkAsRecord = /** @type {Record<string, unknown>} */ (check);

  return castFactory(all)

  /**
   * @param {Node} node
   * @returns {boolean}
   */
  function all(node) {
    const nodeAsRecord = /** @type {Record<string, unknown>} */ (
      /** @type {unknown} */ (node)
    );

    /** @type {string} */
    let key;

    for (key in check) {
      if (nodeAsRecord[key] !== checkAsRecord[key]) return false
    }

    return true
  }
}

/**
 * Turn a string into a test for a node with a certain type.
 *
 * @param {string} check
 * @returns {Check}
 */
function typeFactory(check) {
  return castFactory(type)

  /**
   * @param {Node} node
   */
  function type(node) {
    return node && node.type === check
  }
}

/**
 * Turn a custom test into a test for a node that passes that test.
 *
 * @param {TestFunction} testFunction
 * @returns {Check}
 */
function castFactory(testFunction) {
  return check

  /**
   * @this {unknown}
   * @type {Check}
   */
  function check(value, index, parent) {
    return Boolean(
      looksLikeANode(value) &&
        testFunction.call(
          this,
          value,
          typeof index === 'number' ? index : undefined,
          parent || undefined
        )
    )
  }
}

function ok() {
  return true
}

/**
 * @param {unknown} value
 * @returns {value is Node}
 */
function looksLikeANode(value) {
  return value !== null && typeof value === 'object' && 'type' in value
}

/**
 * @param {string} d
 * @returns {string}
 */
function color(d) {
  return d
}

/**
 * @import {Node as UnistNode, Parent as UnistParent} from 'unist'
 */


/** @type {Readonly<ActionTuple>} */
const empty = [];

/**
 * Continue traversing as normal.
 */
const CONTINUE = true;

/**
 * Stop traversing immediately.
 */
const EXIT = false;

/**
 * Do not traverse this node’s children.
 */
const SKIP = 'skip';

/**
 * Visit nodes, with ancestral information.
 *
 * This algorithm performs *depth-first* *tree traversal* in *preorder*
 * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).
 *
 * You can choose for which nodes `visitor` is called by passing a `test`.
 * For complex tests, you should test yourself in `visitor`, as it will be
 * faster and will have improved type information.
 *
 * Walking the tree is an intensive task.
 * Make use of the return values of the visitor when possible.
 * Instead of walking a tree multiple times, walk it once, use `unist-util-is`
 * to check if a node matches, and then perform different operations.
 *
 * You can change the tree.
 * See `Visitor` for more info.
 *
 * @overload
 * @param {Tree} tree
 * @param {Check} check
 * @param {BuildVisitor<Tree, Check>} visitor
 * @param {boolean | null | undefined} [reverse]
 * @returns {undefined}
 *
 * @overload
 * @param {Tree} tree
 * @param {BuildVisitor<Tree>} visitor
 * @param {boolean | null | undefined} [reverse]
 * @returns {undefined}
 *
 * @param {UnistNode} tree
 *   Tree to traverse.
 * @param {Visitor | Test} test
 *   `unist-util-is`-compatible test
 * @param {Visitor | boolean | null | undefined} [visitor]
 *   Handle each node.
 * @param {boolean | null | undefined} [reverse]
 *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).
 * @returns {undefined}
 *   Nothing.
 *
 * @template {UnistNode} Tree
 *   Node type.
 * @template {Test} Check
 *   `unist-util-is`-compatible test.
 */
function visitParents(tree, test, visitor, reverse) {
  /** @type {Test} */
  let check;

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    // @ts-expect-error no visitor given, so `visitor` is test.
    visitor = test;
  } else {
    // @ts-expect-error visitor given, so `test` isn’t a visitor.
    check = test;
  }

  const is = convert(check);
  const step = reverse ? -1 : 1;

  factory(tree, undefined, [])();

  /**
   * @param {UnistNode} node
   * @param {number | undefined} index
   * @param {Array<UnistParent>} parents
   */
  function factory(node, index, parents) {
    const value = /** @type {Record<string, unknown>} */ (
      node && typeof node === 'object' ? node : {}
    );

    if (typeof value.type === 'string') {
      const name =
        // `hast`
        typeof value.tagName === 'string'
          ? value.tagName
          : // `xast`
            typeof value.name === 'string'
            ? value.name
            : undefined;

      Object.defineProperty(visit, 'name', {
        value:
          'node (' + color(node.type + (name ? '<' + name + '>' : '')) + ')'
      });
    }

    return visit

    function visit() {
      /** @type {Readonly<ActionTuple>} */
      let result = empty;
      /** @type {Readonly<ActionTuple>} */
      let subresult;
      /** @type {number} */
      let offset;
      /** @type {Array<UnistParent>} */
      let grandparents;

      if (!test || is(node, index, parents[parents.length - 1] || undefined)) {
        // @ts-expect-error: `visitor` is now a visitor.
        result = toResult(visitor(node, parents));

        if (result[0] === EXIT) {
          return result
        }
      }

      if ('children' in node && node.children) {
        const nodeAsParent = /** @type {UnistParent} */ (node);

        if (nodeAsParent.children && result[0] !== SKIP) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);

          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset];

            subresult = factory(child, offset, grandparents)();

            if (subresult[0] === EXIT) {
              return subresult
            }

            offset =
              typeof subresult[1] === 'number' ? subresult[1] : offset + step;
          }
        }
      }

      return result
    }
  }
}

/**
 * Turn a return value into a clean result.
 *
 * @param {VisitorResult} value
 *   Valid return values from visitors.
 * @returns {Readonly<ActionTuple>}
 *   Clean result.
 */
function toResult(value) {
  if (Array.isArray(value)) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return value === null || value === undefined ? empty : [value]
}

/**
 * @import {Node as UnistNode, Parent as UnistParent} from 'unist'
 * @import {VisitorResult} from 'unist-util-visit-parents'
 */


/**
 * Visit nodes.
 *
 * This algorithm performs *depth-first* *tree traversal* in *preorder*
 * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).
 *
 * You can choose for which nodes `visitor` is called by passing a `test`.
 * For complex tests, you should test yourself in `visitor`, as it will be
 * faster and will have improved type information.
 *
 * Walking the tree is an intensive task.
 * Make use of the return values of the visitor when possible.
 * Instead of walking a tree multiple times, walk it once, use `unist-util-is`
 * to check if a node matches, and then perform different operations.
 *
 * You can change the tree.
 * See `Visitor` for more info.
 *
 * @overload
 * @param {Tree} tree
 * @param {Check} check
 * @param {BuildVisitor<Tree, Check>} visitor
 * @param {boolean | null | undefined} [reverse]
 * @returns {undefined}
 *
 * @overload
 * @param {Tree} tree
 * @param {BuildVisitor<Tree>} visitor
 * @param {boolean | null | undefined} [reverse]
 * @returns {undefined}
 *
 * @param {UnistNode} tree
 *   Tree to traverse.
 * @param {Visitor | Test} testOrVisitor
 *   `unist-util-is`-compatible test (optional, omit to pass a visitor).
 * @param {Visitor | boolean | null | undefined} [visitorOrReverse]
 *   Handle each node (when test is omitted, pass `reverse`).
 * @param {boolean | null | undefined} [maybeReverse=false]
 *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).
 * @returns {undefined}
 *   Nothing.
 *
 * @template {UnistNode} Tree
 *   Node type.
 * @template {Test} Check
 *   `unist-util-is`-compatible test.
 */
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  /** @type {boolean | null | undefined} */
  let reverse;
  /** @type {Test} */
  let test;
  /** @type {Visitor} */
  let visitor;

  if (
    typeof testOrVisitor === 'function' &&
    typeof visitorOrReverse !== 'function'
  ) {
    test = undefined;
    visitor = testOrVisitor;
    reverse = visitorOrReverse;
  } else {
    // @ts-expect-error: assume the overload with test was given.
    test = testOrVisitor;
    // @ts-expect-error: assume the overload with test was given.
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }

  visitParents(tree, test, overload, reverse);

  /**
   * @param {UnistNode} node
   * @param {Array<UnistParent>} parents
   */
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    const index = parent ? parent.children.indexOf(node) : undefined;
    return visitor(node, index, parent)
  }
}

/**
 * @import {
 *   ElementContent as HastElementContent,
 *   Element as HastElement,
 *   Nodes as HastNodes,
 *   Properties as HastProperties,
 *   RootContent as HastRootContent,
 *   Text as HastText
 * } from 'hast'
 * @import {
 *   Definition as MdastDefinition,
 *   FootnoteDefinition as MdastFootnoteDefinition,
 *   Nodes as MdastNodes,
 *   Parents as MdastParents
 * } from 'mdast'
 * @import {VFile} from 'vfile'
 * @import {
 *   FootnoteBackContentTemplate,
 *   FootnoteBackLabelTemplate
 * } from './footer.js'
 */


const own$2 = {}.hasOwnProperty;

/** @type {Options} */
const emptyOptions$1 = {};

/**
 * Create `state` from an mdast tree.
 *
 * @param {MdastNodes} tree
 *   mdast node to transform.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {State}
 *   `state` function.
 */
function createState(tree, options) {
  const settings = options || emptyOptions$1;
  /** @type {Map<string, MdastDefinition>} */
  const definitionById = new Map();
  /** @type {Map<string, MdastFootnoteDefinition>} */
  const footnoteById = new Map();
  /** @type {Map<string, number>} */
  const footnoteCounts = new Map();
  /** @type {Handlers} */
  // @ts-expect-error: the root handler returns a root.
  // Hard to type.
  const handlers$1 = {...handlers, ...settings.handlers};

  /** @type {State} */
  const state = {
    all,
    applyData,
    definitionById,
    footnoteById,
    footnoteCounts,
    footnoteOrder: [],
    handlers: handlers$1,
    one,
    options: settings,
    patch: patch$1,
    wrap: wrap$1
  };

  visit(tree, function (node) {
    if (node.type === 'definition' || node.type === 'footnoteDefinition') {
      const map = node.type === 'definition' ? definitionById : footnoteById;
      const id = String(node.identifier).toUpperCase();

      // Mimick CM behavior of link definitions.
      // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/9032189/lib/index.js#L20-L21>.
      if (!map.has(id)) {
        // @ts-expect-error: node type matches map.
        map.set(id, node);
      }
    }
  });

  return state

  /**
   * Transform an mdast node into a hast node.
   *
   * @param {MdastNodes} node
   *   mdast node.
   * @param {MdastParents | undefined} [parent]
   *   Parent of `node`.
   * @returns {Array<HastElementContent> | HastElementContent | undefined}
   *   Resulting hast node.
   */
  function one(node, parent) {
    const type = node.type;
    const handle = state.handlers[type];

    if (own$2.call(state.handlers, type) && handle) {
      return handle(state, node, parent)
    }

    if (state.options.passThrough && state.options.passThrough.includes(type)) {
      if ('children' in node) {
        const {children, ...shallow} = node;
        const result = structuredClone$1(shallow);
        // @ts-expect-error: TS doesn’t understand…
        result.children = state.all(node);
        // @ts-expect-error: TS doesn’t understand…
        return result
      }

      // @ts-expect-error: it’s custom.
      return structuredClone$1(node)
    }

    const unknown = state.options.unknownHandler || defaultUnknownHandler;

    return unknown(state, node, parent)
  }

  /**
   * Transform the children of an mdast node into hast nodes.
   *
   * @param {MdastNodes} parent
   *   mdast node to compile
   * @returns {Array<HastElementContent>}
   *   Resulting hast nodes.
   */
  function all(parent) {
    /** @type {Array<HastElementContent>} */
    const values = [];

    if ('children' in parent) {
      const nodes = parent.children;
      let index = -1;
      while (++index < nodes.length) {
        const result = state.one(nodes[index], parent);

        // To do: see if we van clean this? Can we merge texts?
        if (result) {
          if (index && nodes[index - 1].type === 'break') {
            if (!Array.isArray(result) && result.type === 'text') {
              result.value = trimMarkdownSpaceStart(result.value);
            }

            if (!Array.isArray(result) && result.type === 'element') {
              const head = result.children[0];

              if (head && head.type === 'text') {
                head.value = trimMarkdownSpaceStart(head.value);
              }
            }
          }

          if (Array.isArray(result)) {
            values.push(...result);
          } else {
            values.push(result);
          }
        }
      }
    }

    return values
  }
}

/**
 * Copy a node’s positional info.
 *
 * @param {MdastNodes} from
 *   mdast node to copy from.
 * @param {HastNodes} to
 *   hast node to copy into.
 * @returns {undefined}
 *   Nothing.
 */
function patch$1(from, to) {
  if (from.position) to.position = position$1(from);
}

/**
 * Honor the `data` of `from` and maybe generate an element instead of `to`.
 *
 * @template {HastNodes} Type
 *   Node type.
 * @param {MdastNodes} from
 *   mdast node to use data from.
 * @param {Type} to
 *   hast node to change.
 * @returns {HastElement | Type}
 *   Nothing.
 */
function applyData(from, to) {
  /** @type {HastElement | Type} */
  let result = to;

  // Handle `data.hName`, `data.hProperties, `data.hChildren`.
  if (from && from.data) {
    const hName = from.data.hName;
    const hChildren = from.data.hChildren;
    const hProperties = from.data.hProperties;

    if (typeof hName === 'string') {
      // Transforming the node resulted in an element with a different name
      // than wanted:
      if (result.type === 'element') {
        result.tagName = hName;
      }
      // Transforming the node resulted in a non-element, which happens for
      // raw, text, and root nodes (unless custom handlers are passed).
      // The intent of `hName` is to create an element, but likely also to keep
      // the content around (otherwise: pass `hChildren`).
      else {
        /** @type {Array<HastElementContent>} */
        // @ts-expect-error: assume no doctypes in `root`.
        const children = 'children' in result ? result.children : [result];
        result = {type: 'element', tagName: hName, properties: {}, children};
      }
    }

    if (result.type === 'element' && hProperties) {
      Object.assign(result.properties, structuredClone$1(hProperties));
    }

    if (
      'children' in result &&
      result.children &&
      hChildren !== null &&
      hChildren !== undefined
    ) {
      result.children = hChildren;
    }
  }

  return result
}

/**
 * Transform an unknown node.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdastNodes} node
 *   Unknown mdast node.
 * @returns {HastElement | HastText}
 *   Resulting hast node.
 */
function defaultUnknownHandler(state, node) {
  const data = node.data || {};
  /** @type {HastElement | HastText} */
  const result =
    'value' in node &&
    !(own$2.call(data, 'hProperties') || own$2.call(data, 'hChildren'))
      ? {type: 'text', value: node.value}
      : {
          type: 'element',
          tagName: 'div',
          properties: {},
          children: state.all(node)
        };

  state.patch(node, result);
  return state.applyData(node, result)
}

/**
 * Wrap `nodes` with line endings between each node.
 *
 * @template {HastRootContent} Type
 *   Node type.
 * @param {Array<Type>} nodes
 *   List of nodes to wrap.
 * @param {boolean | undefined} [loose=false]
 *   Whether to add line endings at start and end (default: `false`).
 * @returns {Array<HastText | Type>}
 *   Wrapped nodes.
 */
function wrap$1(nodes, loose) {
  /** @type {Array<HastText | Type>} */
  const result = [];
  let index = -1;

  if (loose) {
    result.push({type: 'text', value: '\n'});
  }

  while (++index < nodes.length) {
    if (index) result.push({type: 'text', value: '\n'});
    result.push(nodes[index]);
  }

  if (loose && nodes.length > 0) {
    result.push({type: 'text', value: '\n'});
  }

  return result
}

/**
 * Trim spaces and tabs at the start of `value`.
 *
 * @param {string} value
 *   Value to trim.
 * @returns {string}
 *   Result.
 */
function trimMarkdownSpaceStart(value) {
  let index = 0;
  let code = value.charCodeAt(index);

  while (code === 9 || code === 32) {
    index++;
    code = value.charCodeAt(index);
  }

  return value.slice(index)
}

/**
 * @import {Nodes as HastNodes} from 'hast'
 * @import {Nodes as MdastNodes} from 'mdast'
 * @import {Options} from './state.js'
 */


/**
 * Transform mdast to hast.
 *
 * ##### Notes
 *
 * ###### HTML
 *
 * Raw HTML is available in mdast as `html` nodes and can be embedded in hast
 * as semistandard `raw` nodes.
 * Most utilities ignore `raw` nodes but two notable ones don’t:
 *
 * *   `hast-util-to-html` also has an option `allowDangerousHtml` which will
 *     output the raw HTML.
 *     This is typically discouraged as noted by the option name but is useful
 *     if you completely trust authors
 * *   `hast-util-raw` can handle the raw embedded HTML strings by parsing them
 *     into standard hast nodes (`element`, `text`, etc).
 *     This is a heavy task as it needs a full HTML parser, but it is the only
 *     way to support untrusted content
 *
 * ###### Footnotes
 *
 * Many options supported here relate to footnotes.
 * Footnotes are not specified by CommonMark, which we follow by default.
 * They are supported by GitHub, so footnotes can be enabled in markdown with
 * `mdast-util-gfm`.
 *
 * The options `footnoteBackLabel` and `footnoteLabel` define natural language
 * that explains footnotes, which is hidden for sighted users but shown to
 * assistive technology.
 * When your page is not in English, you must define translated values.
 *
 * Back references use ARIA attributes, but the section label itself uses a
 * heading that is hidden with an `sr-only` class.
 * To show it to sighted users, define different attributes in
 * `footnoteLabelProperties`.
 *
 * ###### Clobbering
 *
 * Footnotes introduces a problem, as it links footnote calls to footnote
 * definitions on the page through `id` attributes generated from user content,
 * which results in DOM clobbering.
 *
 * DOM clobbering is this:
 *
 * ```html
 * <p id=x></p>
 * <script>alert(x) // `x` now refers to the DOM `p#x` element</script>
 * ```
 *
 * Elements by their ID are made available by browsers on the `window` object,
 * which is a security risk.
 * Using a prefix solves this problem.
 *
 * More information on how to handle clobbering and the prefix is explained in
 * Example: headings (DOM clobbering) in `rehype-sanitize`.
 *
 * ###### Unknown nodes
 *
 * Unknown nodes are nodes with a type that isn’t in `handlers` or `passThrough`.
 * The default behavior for unknown nodes is:
 *
 * *   when the node has a `value` (and doesn’t have `data.hName`,
 *     `data.hProperties`, or `data.hChildren`, see later), create a hast `text`
 *     node
 * *   otherwise, create a `<div>` element (which could be changed with
 *     `data.hName`), with its children mapped from mdast to hast as well
 *
 * This behavior can be changed by passing an `unknownHandler`.
 *
 * @param {MdastNodes} tree
 *   mdast tree.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {HastNodes}
 *   hast tree.
 */
function toHast(tree, options) {
  const state = createState(tree, options);
  const node = state.one(tree, undefined);
  const foot = footer(state);
  /** @type {HastNodes} */
  const result = Array.isArray(node)
    ? {type: 'root', children: node}
    : node || {type: 'root', children: []};

  if (foot) {
    result.children.push({type: 'text', value: '\n'}, foot);
  }

  return result
}

/**
 * @import {Root as HastRoot} from 'hast'
 * @import {Root as MdastRoot} from 'mdast'
 * @import {Options as ToHastOptions} from 'mdast-util-to-hast'
 * @import {Processor} from 'unified'
 * @import {VFile} from 'vfile'
 */


/**
 * Turn markdown into HTML.
 *
 * ##### Notes
 *
 * ###### Signature
 *
 * * if a processor is given,
 *   runs the (rehype) plugins used on it with a hast tree,
 *   then discards the result (*bridge mode*)
 * * otherwise,
 *   returns a hast tree,
 *   the plugins used after `remarkRehype` are rehype plugins (*mutate mode*)
 *
 * > 👉 **Note**:
 * > It’s highly unlikely that you want to pass a `processor`.
 *
 * ###### HTML
 *
 * Raw HTML is available in mdast as `html` nodes and can be embedded in hast
 * as semistandard `raw` nodes.
 * Most plugins ignore `raw` nodes but two notable ones don’t:
 *
 * * `rehype-stringify` also has an option `allowDangerousHtml` which will
 *   output the raw HTML.
 *   This is typically discouraged as noted by the option name but is useful if
 *   you completely trust authors
 * * `rehype-raw` can handle the raw embedded HTML strings by parsing them
 *   into standard hast nodes (`element`, `text`, etc);
 *   this is a heavy task as it needs a full HTML parser,
 *   but it is the only way to support untrusted content
 *
 * ###### Footnotes
 *
 * Many options supported here relate to footnotes.
 * Footnotes are not specified by CommonMark,
 * which we follow by default.
 * They are supported by GitHub,
 * so footnotes can be enabled in markdown with `remark-gfm`.
 *
 * The options `footnoteBackLabel` and `footnoteLabel` define natural language
 * that explains footnotes,
 * which is hidden for sighted users but shown to assistive technology.
 * When your page is not in English,
 * you must define translated values.
 *
 * Back references use ARIA attributes,
 * but the section label itself uses a heading that is hidden with an
 * `sr-only` class.
 * To show it to sighted users,
 * define different attributes in `footnoteLabelProperties`.
 *
 * ###### Clobbering
 *
 * Footnotes introduces a problem,
 * as it links footnote calls to footnote definitions on the page through `id`
 * attributes generated from user content,
 * which results in DOM clobbering.
 *
 * DOM clobbering is this:
 *
 * ```html
 * <p id=x></p>
 * <script>alert(x) // `x` now refers to the DOM `p#x` element</script>
 * ```
 *
 * Elements by their ID are made available by browsers on the `window` object,
 * which is a security risk.
 * Using a prefix solves this problem.
 *
 * More information on how to handle clobbering and the prefix is explained in
 * *Example: headings (DOM clobbering)* in `rehype-sanitize`.
 *
 * ###### Unknown nodes
 *
 * Unknown nodes are nodes with a type that isn’t in `handlers` or `passThrough`.
 * The default behavior for unknown nodes is:
 *
 * * when the node has a `value`
 *   (and doesn’t have `data.hName`, `data.hProperties`, or `data.hChildren`,
 *   see later),
 *   create a hast `text` node
 * * otherwise,
 *   create a `<div>` element (which could be changed with `data.hName`),
 *   with its children mapped from mdast to hast as well
 *
 * This behavior can be changed by passing an `unknownHandler`.
 *
 * @overload
 * @param {Processor} processor
 * @param {Readonly<Options> | null | undefined} [options]
 * @returns {TransformBridge}
 *
 * @overload
 * @param {Readonly<Options> | null | undefined} [options]
 * @returns {TransformMutate}
 *
 * @overload
 * @param {Readonly<Options> | Processor | null | undefined} [destination]
 * @param {Readonly<Options> | null | undefined} [options]
 * @returns {TransformBridge | TransformMutate}
 *
 * @param {Readonly<Options> | Processor | null | undefined} [destination]
 *   Processor or configuration (optional).
 * @param {Readonly<Options> | null | undefined} [options]
 *   When a processor was given,
 *   configuration (optional).
 * @returns {TransformBridge | TransformMutate}
 *   Transform.
 */
function remarkRehype(destination, options) {
  if (destination && 'run' in destination) {
    /**
     * @type {TransformBridge}
     */
    return async function (tree, file) {
      // Cast because root in -> root out.
      const hastTree = /** @type {HastRoot} */ (
        toHast(tree, {file, ...options})
      );
      await destination.run(hastTree, file);
    }
  }

  /**
   * @type {TransformMutate}
   */
  return function (tree, file) {
    // Cast because root in -> root out.
    // To do: in the future, disallow ` || options` fallback.
    // With `unified-engine`, `destination` can be `undefined` but
    // `options` will be the file set.
    // We should not pass that as `options`.
    return /** @type {HastRoot} */ (
      toHast(tree, {file, ...(destination || options)})
    )
  }
}

/**
 * Throw a given error.
 *
 * @param {Error|null|undefined} [error]
 *   Maybe error.
 * @returns {asserts error is null|undefined}
 */
function bail(error) {
  if (error) {
    throw error
  }
}

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject$1 = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

var extend = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject$1(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject$1(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};

var extend$1 = /*@__PURE__*/getDefaultExportFromCjs(extend);

function isPlainObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}

// To do: remove `void`s
// To do: remove `null` from output of our APIs, allow it as user APIs.

/**
 * @typedef {(error?: Error | null | undefined, ...output: Array<any>) => void} Callback
 *   Callback.
 *
 * @typedef {(...input: Array<any>) => any} Middleware
 *   Ware.
 *
 * @typedef Pipeline
 *   Pipeline.
 * @property {Run} run
 *   Run the pipeline.
 * @property {Use} use
 *   Add middleware.
 *
 * @typedef {(...input: Array<any>) => void} Run
 *   Call all middleware.
 *
 *   Calls `done` on completion with either an error or the output of the
 *   last middleware.
 *
 *   > 👉 **Note**: as the length of input defines whether async functions get a
 *   > `next` function,
 *   > it’s recommended to keep `input` at one value normally.

 *
 * @typedef {(fn: Middleware) => Pipeline} Use
 *   Add middleware.
 */

/**
 * Create new middleware.
 *
 * @returns {Pipeline}
 *   Pipeline.
 */
function trough() {
  /** @type {Array<Middleware>} */
  const fns = [];
  /** @type {Pipeline} */
  const pipeline = {run, use};

  return pipeline

  /** @type {Run} */
  function run(...values) {
    let middlewareIndex = -1;
    /** @type {Callback} */
    const callback = values.pop();

    if (typeof callback !== 'function') {
      throw new TypeError('Expected function as last argument, not ' + callback)
    }

    next(null, ...values);

    /**
     * Run the next `fn`, or we’re done.
     *
     * @param {Error | null | undefined} error
     * @param {Array<any>} output
     */
    function next(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index = -1;

      if (error) {
        callback(error);
        return
      }

      // Copy non-nullish input into values.
      while (++index < values.length) {
        if (output[index] === null || output[index] === undefined) {
          output[index] = values[index];
        }
      }

      // Save the newly created `output` for the next call.
      values = output;

      // Next or done.
      if (fn) {
        wrap(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }

  /** @type {Use} */
  function use(middelware) {
    if (typeof middelware !== 'function') {
      throw new TypeError(
        'Expected `middelware` to be a function, not ' + middelware
      )
    }

    fns.push(middelware);
    return pipeline
  }
}

/**
 * Wrap `middleware` into a uniform interface.
 *
 * You can pass all input to the resulting function.
 * `callback` is then called with the output of `middleware`.
 *
 * If `middleware` accepts more arguments than the later given in input,
 * an extra `done` function is passed to it after that input,
 * which must be called by `middleware`.
 *
 * The first value in `input` is the main input value.
 * All other input values are the rest input values.
 * The values given to `callback` are the input values,
 * merged with every non-nullish output value.
 *
 * * if `middleware` throws an error,
 *   returns a promise that is rejected,
 *   or calls the given `done` function with an error,
 *   `callback` is called with that error
 * * if `middleware` returns a value or returns a promise that is resolved,
 *   that value is the main output value
 * * if `middleware` calls `done`,
 *   all non-nullish values except for the first one (the error) overwrite the
 *   output values
 *
 * @param {Middleware} middleware
 *   Function to wrap.
 * @param {Callback} callback
 *   Callback called with the output of `middleware`.
 * @returns {Run}
 *   Wrapped middleware.
 */
function wrap(middleware, callback) {
  /** @type {boolean} */
  let called;

  return wrapped

  /**
   * Call `middleware`.
   * @this {any}
   * @param {Array<any>} parameters
   * @returns {void}
   */
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    /** @type {any} */
    let result;

    if (fnExpectsCallback) {
      parameters.push(done);
    }

    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      const exception = /** @type {Error} */ (error);

      // Well, this is quite the pickle.
      // `middleware` received a callback and called it synchronously, but that
      // threw an error.
      // The only thing left to do is to throw the thing instead.
      if (fnExpectsCallback && called) {
        throw exception
      }

      return done(exception)
    }

    if (!fnExpectsCallback) {
      if (result && result.then && typeof result.then === 'function') {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }

  /**
   * Call `callback`, only once.
   *
   * @type {Callback}
   */
  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }

  /**
   * Call `done` with one value.
   *
   * @param {any} [value]
   */
  function then(value) {
    done(null, value);
  }
}

// A derivative work based on:
// <https://github.com/browserify/path-browserify>.
// Which is licensed:
//
// MIT License
//
// Copyright (c) 2013 James Halliday
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// A derivative work based on:
//
// Parts of that are extracted from Node’s internal `path` module:
// <https://github.com/nodejs/node/blob/master/lib/path.js>.
// Which is licensed:
//
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

const minpath = {basename, dirname, extname, join, sep: '/'};

/* eslint-disable max-depth, complexity */

/**
 * Get the basename from a path.
 *
 * @param {string} path
 *   File path.
 * @param {string | null | undefined} [extname]
 *   Extension to strip.
 * @returns {string}
 *   Stem or basename.
 */
function basename(path, extname) {
  if (extname !== undefined && typeof extname !== 'string') {
    throw new TypeError('"ext" argument must be a string')
  }

  assertPath$1(path);
  let start = 0;
  let end = -1;
  let index = path.length;
  /** @type {boolean | undefined} */
  let seenNonSlash;

  if (
    extname === undefined ||
    extname.length === 0 ||
    extname.length > path.length
  ) {
    while (index--) {
      if (path.codePointAt(index) === 47 /* `/` */) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now.
        if (seenNonSlash) {
          start = index + 1;
          break
        }
      } else if (end < 0) {
        // We saw the first non-path separator, mark this as the end of our
        // path component.
        seenNonSlash = true;
        end = index + 1;
      }
    }

    return end < 0 ? '' : path.slice(start, end)
  }

  if (extname === path) {
    return ''
  }

  let firstNonSlashEnd = -1;
  let extnameIndex = extname.length - 1;

  while (index--) {
    if (path.codePointAt(index) === 47 /* `/` */) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now.
      if (seenNonSlash) {
        start = index + 1;
        break
      }
    } else {
      if (firstNonSlashEnd < 0) {
        // We saw the first non-path separator, remember this index in case
        // we need it if the extension ends up not matching.
        seenNonSlash = true;
        firstNonSlashEnd = index + 1;
      }

      if (extnameIndex > -1) {
        // Try to match the explicit extension.
        if (path.codePointAt(index) === extname.codePointAt(extnameIndex--)) {
          if (extnameIndex < 0) {
            // We matched the extension, so mark this as the end of our path
            // component
            end = index;
          }
        } else {
          // Extension does not match, so our result is the entire path
          // component
          extnameIndex = -1;
          end = firstNonSlashEnd;
        }
      }
    }
  }

  if (start === end) {
    end = firstNonSlashEnd;
  } else if (end < 0) {
    end = path.length;
  }

  return path.slice(start, end)
}

/**
 * Get the dirname from a path.
 *
 * @param {string} path
 *   File path.
 * @returns {string}
 *   File path.
 */
function dirname(path) {
  assertPath$1(path);

  if (path.length === 0) {
    return '.'
  }

  let end = -1;
  let index = path.length;
  /** @type {boolean | undefined} */
  let unmatchedSlash;

  // Prefix `--` is important to not run on `0`.
  while (--index) {
    if (path.codePointAt(index) === 47 /* `/` */) {
      if (unmatchedSlash) {
        end = index;
        break
      }
    } else if (!unmatchedSlash) {
      // We saw the first non-path separator
      unmatchedSlash = true;
    }
  }

  return end < 0
    ? path.codePointAt(0) === 47 /* `/` */
      ? '/'
      : '.'
    : end === 1 && path.codePointAt(0) === 47 /* `/` */
      ? '//'
      : path.slice(0, end)
}

/**
 * Get an extname from a path.
 *
 * @param {string} path
 *   File path.
 * @returns {string}
 *   Extname.
 */
function extname(path) {
  assertPath$1(path);

  let index = path.length;

  let end = -1;
  let startPart = 0;
  let startDot = -1;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find.
  let preDotState = 0;
  /** @type {boolean | undefined} */
  let unmatchedSlash;

  while (index--) {
    const code = path.codePointAt(index);

    if (code === 47 /* `/` */) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now.
      if (unmatchedSlash) {
        startPart = index + 1;
        break
      }

      continue
    }

    if (end < 0) {
      // We saw the first non-path separator, mark this as the end of our
      // extension.
      unmatchedSlash = true;
      end = index + 1;
    }

    if (code === 46 /* `.` */) {
      // If this is our first dot, mark it as the start of our extension.
      if (startDot < 0) {
        startDot = index;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot > -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension.
      preDotState = -1;
    }
  }

  if (
    startDot < 0 ||
    end < 0 ||
    // We saw a non-dot character immediately before the dot.
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly `..`.
    (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
  ) {
    return ''
  }

  return path.slice(startDot, end)
}

/**
 * Join segments from a path.
 *
 * @param {Array<string>} segments
 *   Path segments.
 * @returns {string}
 *   File path.
 */
function join(...segments) {
  let index = -1;
  /** @type {string | undefined} */
  let joined;

  while (++index < segments.length) {
    assertPath$1(segments[index]);

    if (segments[index]) {
      joined =
        joined === undefined ? segments[index] : joined + '/' + segments[index];
    }
  }

  return joined === undefined ? '.' : normalize(joined)
}

/**
 * Normalize a basic file path.
 *
 * @param {string} path
 *   File path.
 * @returns {string}
 *   File path.
 */
// Note: `normalize` is not exposed as `path.normalize`, so some code is
// manually removed from it.
function normalize(path) {
  assertPath$1(path);

  const absolute = path.codePointAt(0) === 47; /* `/` */

  // Normalize the path according to POSIX rules.
  let value = normalizeString(path, !absolute);

  if (value.length === 0 && !absolute) {
    value = '.';
  }

  if (value.length > 0 && path.codePointAt(path.length - 1) === 47 /* / */) {
    value += '/';
  }

  return absolute ? '/' + value : value
}

/**
 * Resolve `.` and `..` elements in a path with directory names.
 *
 * @param {string} path
 *   File path.
 * @param {boolean} allowAboveRoot
 *   Whether `..` can move above root.
 * @returns {string}
 *   File path.
 */
function normalizeString(path, allowAboveRoot) {
  let result = '';
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let index = -1;
  /** @type {number | undefined} */
  let code;
  /** @type {number} */
  let lastSlashIndex;

  while (++index <= path.length) {
    if (index < path.length) {
      code = path.codePointAt(index);
    } else if (code === 47 /* `/` */) {
      break
    } else {
      code = 47; /* `/` */
    }

    if (code === 47 /* `/` */) {
      if (lastSlash === index - 1 || dots === 1) ; else if (lastSlash !== index - 1 && dots === 2) {
        if (
          result.length < 2 ||
          lastSegmentLength !== 2 ||
          result.codePointAt(result.length - 1) !== 46 /* `.` */ ||
          result.codePointAt(result.length - 2) !== 46 /* `.` */
        ) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf('/');

            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = '';
                lastSegmentLength = 0;
              } else {
                result = result.slice(0, lastSlashIndex);
                lastSegmentLength = result.length - 1 - result.lastIndexOf('/');
              }

              lastSlash = index;
              dots = 0;
              continue
            }
          } else if (result.length > 0) {
            result = '';
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue
          }
        }

        if (allowAboveRoot) {
          result = result.length > 0 ? result + '/..' : '..';
          lastSegmentLength = 2;
        }
      } else {
        if (result.length > 0) {
          result += '/' + path.slice(lastSlash + 1, index);
        } else {
          result = path.slice(lastSlash + 1, index);
        }

        lastSegmentLength = index - lastSlash - 1;
      }

      lastSlash = index;
      dots = 0;
    } else if (code === 46 /* `.` */ && dots > -1) {
      dots++;
    } else {
      dots = -1;
    }
  }

  return result
}

/**
 * Make sure `path` is a string.
 *
 * @param {string} path
 *   File path.
 * @returns {asserts path is string}
 *   Nothing.
 */
function assertPath$1(path) {
  if (typeof path !== 'string') {
    throw new TypeError(
      'Path must be a string. Received ' + JSON.stringify(path)
    )
  }
}

/* eslint-enable max-depth, complexity */

// Somewhat based on:
// <https://github.com/defunctzombie/node-process/blob/master/browser.js>.
// But I don’t think one tiny line of code can be copyrighted. 😅
const minproc = {cwd};

function cwd() {
  return '/'
}

/**
 * Checks if a value has the shape of a WHATWG URL object.
 *
 * Using a symbol or instanceof would not be able to recognize URL objects
 * coming from other implementations (e.g. in Electron), so instead we are
 * checking some well known properties for a lack of a better test.
 *
 * We use `href` and `protocol` as they are the only properties that are
 * easy to retrieve and calculate due to the lazy nature of the getters.
 *
 * We check for auth attribute to distinguish legacy url instance with
 * WHATWG URL instance.
 *
 * @param {unknown} fileUrlOrPath
 *   File path or URL.
 * @returns {fileUrlOrPath is URL}
 *   Whether it’s a URL.
 */
// From: <https://github.com/nodejs/node/blob/6a3403c/lib/internal/url.js#L720>
function isUrl(fileUrlOrPath) {
  return Boolean(
    fileUrlOrPath !== null &&
      typeof fileUrlOrPath === 'object' &&
      'href' in fileUrlOrPath &&
      fileUrlOrPath.href &&
      'protocol' in fileUrlOrPath &&
      fileUrlOrPath.protocol &&
      // @ts-expect-error: indexing is fine.
      fileUrlOrPath.auth === undefined
  )
}

// See: <https://github.com/nodejs/node/blob/6a3403c/lib/internal/url.js>

/**
 * @param {URL | string} path
 *   File URL.
 * @returns {string}
 *   File URL.
 */
function urlToPath(path) {
  if (typeof path === 'string') {
    path = new URL(path);
  } else if (!isUrl(path)) {
    /** @type {NodeJS.ErrnoException} */
    const error = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        path +
        '`'
    );
    error.code = 'ERR_INVALID_ARG_TYPE';
    throw error
  }

  if (path.protocol !== 'file:') {
    /** @type {NodeJS.ErrnoException} */
    const error = new TypeError('The URL must be of scheme file');
    error.code = 'ERR_INVALID_URL_SCHEME';
    throw error
  }

  return getPathFromURLPosix(path)
}

/**
 * Get a path from a POSIX URL.
 *
 * @param {URL} url
 *   URL.
 * @returns {string}
 *   File path.
 */
function getPathFromURLPosix(url) {
  if (url.hostname !== '') {
    /** @type {NodeJS.ErrnoException} */
    const error = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    error.code = 'ERR_INVALID_FILE_URL_HOST';
    throw error
  }

  const pathname = url.pathname;
  let index = -1;

  while (++index < pathname.length) {
    if (
      pathname.codePointAt(index) === 37 /* `%` */ &&
      pathname.codePointAt(index + 1) === 50 /* `2` */
    ) {
      const third = pathname.codePointAt(index + 2);
      if (third === 70 /* `F` */ || third === 102 /* `f` */) {
        /** @type {NodeJS.ErrnoException} */
        const error = new TypeError(
          'File URL path must not include encoded / characters'
        );
        error.code = 'ERR_INVALID_FILE_URL_PATH';
        throw error
      }
    }
  }

  return decodeURIComponent(pathname)
}

/**
 * @import {Node, Point, Position} from 'unist'
 * @import {Options as MessageOptions} from 'vfile-message'
 * @import {Compatible, Data, Map, Options, Value} from 'vfile'
 */


/**
 * Order of setting (least specific to most), we need this because otherwise
 * `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
 * stem can be set.
 */
const order = /** @type {const} */ ([
  'history',
  'path',
  'basename',
  'stem',
  'extname',
  'dirname'
]);

class VFile {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(value) {
    /** @type {Options | VFile} */
    let options;

    if (!value) {
      options = {};
    } else if (isUrl(value)) {
      options = {path: value};
    } else if (typeof value === 'string' || isUint8Array$1(value)) {
      options = {value};
    } else {
      options = value;
    }

    /* eslint-disable no-unused-expressions */

    /**
     * Base of `path` (default: `process.cwd()` or `'/'` in browsers).
     *
     * @type {string}
     */
    // Prevent calling `cwd` (which could be expensive) if it’s not needed;
    // the empty string will be overridden in the next block.
    this.cwd = 'cwd' in options ? '' : minproc.cwd();

    /**
     * Place to store custom info (default: `{}`).
     *
     * It’s OK to store custom data directly on the file but moving it to
     * `data` is recommended.
     *
     * @type {Data}
     */
    this.data = {};

    /**
     * List of file paths the file moved between.
     *
     * The first is the original path and the last is the current path.
     *
     * @type {Array<string>}
     */
    this.history = [];

    /**
     * List of messages associated with the file.
     *
     * @type {Array<VFileMessage>}
     */
    this.messages = [];

    /**
     * Raw value.
     *
     * @type {Value}
     */
    this.value;

    // The below are non-standard, they are “well-known”.
    // As in, used in several tools.
    /**
     * Source map.
     *
     * This type is equivalent to the `RawSourceMap` type from the `source-map`
     * module.
     *
     * @type {Map | null | undefined}
     */
    this.map;

    /**
     * Custom, non-string, compiled, representation.
     *
     * This is used by unified to store non-string results.
     * One example is when turning markdown into React nodes.
     *
     * @type {unknown}
     */
    this.result;

    /**
     * Whether a file was saved to disk.
     *
     * This is used by vfile reporters.
     *
     * @type {boolean}
     */
    this.stored;
    /* eslint-enable no-unused-expressions */

    // Set path related properties in the correct order.
    let index = -1;

    while (++index < order.length) {
      const field = order[index];

      // Note: we specifically use `in` instead of `hasOwnProperty` to accept
      // `vfile`s too.
      if (
        field in options &&
        options[field] !== undefined &&
        options[field] !== null
      ) {
        // @ts-expect-error: TS doesn’t understand basic reality.
        this[field] = field === 'history' ? [...options[field]] : options[field];
      }
    }

    /** @type {string} */
    let field;

    // Set non-path related properties.
    for (field in options) {
      // @ts-expect-error: fine to set other things.
      if (!order.includes(field)) {
        // @ts-expect-error: fine to set other things.
        this[field] = options[field];
      }
    }
  }

  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path === 'string'
      ? minpath.basename(this.path)
      : undefined
  }

  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(basename) {
    assertNonEmpty(basename, 'basename');
    assertPart(basename, 'basename');
    this.path = minpath.join(this.dirname || '', basename);
  }

  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path === 'string'
      ? minpath.dirname(this.path)
      : undefined
  }

  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(dirname) {
    assertPath(this.basename, 'dirname');
    this.path = minpath.join(dirname || '', this.basename);
  }

  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path === 'string'
      ? minpath.extname(this.path)
      : undefined
  }

  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(extname) {
    assertPart(extname, 'extname');
    assertPath(this.dirname, 'extname');

    if (extname) {
      if (extname.codePointAt(0) !== 46 /* `.` */) {
        throw new Error('`extname` must start with `.`')
      }

      if (extname.includes('.', 1)) {
        throw new Error('`extname` cannot contain multiple dots')
      }
    }

    this.path = minpath.join(this.dirname, this.stem + (extname || ''));
  }

  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1]
  }

  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(path) {
    if (isUrl(path)) {
      path = urlToPath(path);
    }

    assertNonEmpty(path, 'path');

    if (this.path !== path) {
      this.history.push(path);
    }
  }

  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path === 'string'
      ? minpath.basename(this.path, this.extname)
      : undefined
  }

  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(stem) {
    assertNonEmpty(stem, 'stem');
    assertPart(stem, 'stem');
    this.path = minpath.join(this.dirname || '', stem + (this.extname || ''));
  }

  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(causeOrReason, optionsOrParentOrPlace, origin) {
    // @ts-expect-error: the overloads are fine.
    const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);

    message.fatal = true;

    throw message
  }

  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(causeOrReason, optionsOrParentOrPlace, origin) {
    // @ts-expect-error: the overloads are fine.
    const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);

    message.fatal = undefined;

    return message
  }

  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = new VFileMessage(
      // @ts-expect-error: the overloads are fine.
      causeOrReason,
      optionsOrParentOrPlace,
      origin
    );

    if (this.path) {
      message.name = this.path + ':' + message.name;
      message.file = this.path;
    }

    message.fatal = false;

    this.messages.push(message);

    return message
  }

  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(encoding) {
    if (this.value === undefined) {
      return ''
    }

    if (typeof this.value === 'string') {
      return this.value
    }

    const decoder = new TextDecoder(encoding || undefined);
    return decoder.decode(this.value)
  }
}

/**
 * Assert that `part` is not a path (as in, does not contain `path.sep`).
 *
 * @param {string | null | undefined} part
 *   File path part.
 * @param {string} name
 *   Part name.
 * @returns {undefined}
 *   Nothing.
 */
function assertPart(part, name) {
  if (part && part.includes(minpath.sep)) {
    throw new Error(
      '`' + name + '` cannot be a path: did not expect `' + minpath.sep + '`'
    )
  }
}

/**
 * Assert that `part` is not empty.
 *
 * @param {string | undefined} part
 *   Thing.
 * @param {string} name
 *   Part name.
 * @returns {asserts part is string}
 *   Nothing.
 */
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty')
  }
}

/**
 * Assert `path` exists.
 *
 * @param {string | undefined} path
 *   Path.
 * @param {string} name
 *   Dependency name.
 * @returns {asserts path is string}
 *   Nothing.
 */
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too')
  }
}

/**
 * Assert `value` is an `Uint8Array`.
 *
 * @param {unknown} value
 *   thing.
 * @returns {value is Uint8Array}
 *   Whether `value` is an `Uint8Array`.
 */
function isUint8Array$1(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      'byteLength' in value &&
      'byteOffset' in value
  )
}

const CallableInstance =
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  (
    /** @type {unknown} */
    (
      /**
       * @this {Function}
       * @param {string | symbol} property
       * @returns {(...parameters: Array<unknown>) => unknown}
       */
      function (property) {
        const self = this;
        const constr = self.constructor;
        const proto = /** @type {Record<string | symbol, Function>} */ (
          // Prototypes do exist.
          // type-coverage:ignore-next-line
          constr.prototype
        );
        const value = proto[property];
        /** @type {(...parameters: Array<unknown>) => unknown} */
        const apply = function () {
          return value.apply(apply, arguments)
        };

        Object.setPrototypeOf(apply, proto);

        // Not needed for us in `unified`: we only call this on the `copy`
        // function,
        // and we don't need to add its fields (`length`, `name`)
        // over.
        // See also: GH-246.
        // const names = Object.getOwnPropertyNames(value)
        //
        // for (const p of names) {
        //   const descriptor = Object.getOwnPropertyDescriptor(value, p)
        //   if (descriptor) Object.defineProperty(apply, p, descriptor)
        // }

        return apply
      }
    )
  );

/**
 * @typedef {import('trough').Pipeline} Pipeline
 *
 * @typedef {import('unist').Node} Node
 *
 * @typedef {import('vfile').Compatible} Compatible
 * @typedef {import('vfile').Value} Value
 *
 * @typedef {import('../index.js').CompileResultMap} CompileResultMap
 * @typedef {import('../index.js').Data} Data
 * @typedef {import('../index.js').Settings} Settings
 */


// To do: next major: drop `Compiler`, `Parser`: prefer lowercase.

// To do: we could start yielding `never` in TS when a parser is missing and
// `parse` is called.
// Currently, we allow directly setting `processor.parser`, which is untyped.

const own$1 = {}.hasOwnProperty;

/**
 * @template {Node | undefined} [ParseTree=undefined]
 *   Output of `parse` (optional).
 * @template {Node | undefined} [HeadTree=undefined]
 *   Input for `run` (optional).
 * @template {Node | undefined} [TailTree=undefined]
 *   Output for `run` (optional).
 * @template {Node | undefined} [CompileTree=undefined]
 *   Input of `stringify` (optional).
 * @template {CompileResults | undefined} [CompileResult=undefined]
 *   Output of `stringify` (optional).
 * @extends {CallableInstance<[], Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>>}
 */
class Processor extends CallableInstance {
  /**
   * Create a processor.
   */
  constructor() {
    // If `Processor()` is called (w/o new), `copy` is called instead.
    super('copy');

    /**
     * Compiler to use (deprecated).
     *
     * @deprecated
     *   Use `compiler` instead.
     * @type {(
     *   Compiler<
     *     CompileTree extends undefined ? Node : CompileTree,
     *     CompileResult extends undefined ? CompileResults : CompileResult
     *   > |
     *   undefined
     * )}
     */
    this.Compiler = undefined;

    /**
     * Parser to use (deprecated).
     *
     * @deprecated
     *   Use `parser` instead.
     * @type {(
     *   Parser<ParseTree extends undefined ? Node : ParseTree> |
     *   undefined
     * )}
     */
    this.Parser = undefined;

    // Note: the following fields are considered private.
    // However, they are needed for tests, and TSC generates an untyped
    // `private freezeIndex` field for, which trips `type-coverage` up.
    // Instead, we use `@deprecated` to visualize that they shouldn’t be used.
    /**
     * Internal list of configured plugins.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {Array<PluginTuple<Array<unknown>>>}
     */
    this.attachers = [];

    /**
     * Compiler to use.
     *
     * @type {(
     *   Compiler<
     *     CompileTree extends undefined ? Node : CompileTree,
     *     CompileResult extends undefined ? CompileResults : CompileResult
     *   > |
     *   undefined
     * )}
     */
    this.compiler = undefined;

    /**
     * Internal state to track where we are while freezing.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {number}
     */
    this.freezeIndex = -1;

    /**
     * Internal state to track whether we’re frozen.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {boolean | undefined}
     */
    this.frozen = undefined;

    /**
     * Internal state.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {Data}
     */
    this.namespace = {};

    /**
     * Parser to use.
     *
     * @type {(
     *   Parser<ParseTree extends undefined ? Node : ParseTree> |
     *   undefined
     * )}
     */
    this.parser = undefined;

    /**
     * Internal list of configured transformers.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {Pipeline}
     */
    this.transformers = trough();
  }

  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    // Cast as the type parameters will be the same after attaching.
    const destination =
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */ (
        new Processor()
      );
    let index = -1;

    while (++index < this.attachers.length) {
      const attacher = this.attachers[index];
      destination.use(...attacher);
    }

    destination.data(extend$1(true, {}, this.namespace));

    return destination
  }

  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(key, value) {
    if (typeof key === 'string') {
      // Set `key`.
      if (arguments.length === 2) {
        assertUnfrozen('data', this.frozen);
        this.namespace[key] = value;
        return this
      }

      // Get `key`.
      return (own$1.call(this.namespace, key) && this.namespace[key]) || undefined
    }

    // Set space.
    if (key) {
      assertUnfrozen('data', this.frozen);
      this.namespace = key;
      return this
    }

    // Get space.
    return this.namespace
  }

  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen) {
      return this
    }

    // Cast so that we can type plugins easier.
    // Plugins are supposed to be usable on different processors, not just on
    // this exact processor.
    const self = /** @type {Processor} */ (/** @type {unknown} */ (this));

    while (++this.freezeIndex < this.attachers.length) {
      const [attacher, ...options] = this.attachers[this.freezeIndex];

      if (options[0] === false) {
        continue
      }

      if (options[0] === true) {
        options[0] = undefined;
      }

      const transformer = attacher.call(self, ...options);

      if (typeof transformer === 'function') {
        this.transformers.use(transformer);
      }
    }

    this.frozen = true;
    this.freezeIndex = Number.POSITIVE_INFINITY;

    return this
  }

  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(file) {
    this.freeze();
    const realFile = vfile(file);
    const parser = this.parser || this.Parser;
    assertParser('parse', parser);
    return parser(String(realFile), realFile)
  }

  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(file, done) {
    const self = this;

    this.freeze();
    assertParser('process', this.parser || this.Parser);
    assertCompiler('process', this.compiler || this.Compiler);

    return done ? executor(undefined, done) : new Promise(executor)

    // Note: `void`s needed for TS.
    /**
     * @param {((file: VFileWithOutput<CompileResult>) => undefined | void) | undefined} resolve
     * @param {(error: Error | undefined) => undefined | void} reject
     * @returns {undefined}
     */
    function executor(resolve, reject) {
      const realFile = vfile(file);
      // Assume `ParseTree` (the result of the parser) matches `HeadTree` (the
      // input of the first transform).
      const parseTree =
        /** @type {HeadTree extends undefined ? Node : HeadTree} */ (
          /** @type {unknown} */ (self.parse(realFile))
        );

      self.run(parseTree, realFile, function (error, tree, file) {
        if (error || !tree || !file) {
          return realDone(error)
        }

        // Assume `TailTree` (the output of the last transform) matches
        // `CompileTree` (the input of the compiler).
        const compileTree =
          /** @type {CompileTree extends undefined ? Node : CompileTree} */ (
            /** @type {unknown} */ (tree)
          );

        const compileResult = self.stringify(compileTree, file);

        if (looksLikeAValue(compileResult)) {
          file.value = compileResult;
        } else {
          file.result = compileResult;
        }

        realDone(error, /** @type {VFileWithOutput<CompileResult>} */ (file));
      });

      /**
       * @param {Error | undefined} error
       * @param {VFileWithOutput<CompileResult> | undefined} [file]
       * @returns {undefined}
       */
      function realDone(error, file) {
        if (error || !file) {
          reject(error);
        } else if (resolve) {
          resolve(file);
        } else {
          done(undefined, file);
        }
      }
    }
  }

  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(file) {
    /** @type {boolean} */
    let complete = false;
    /** @type {VFileWithOutput<CompileResult> | undefined} */
    let result;

    this.freeze();
    assertParser('processSync', this.parser || this.Parser);
    assertCompiler('processSync', this.compiler || this.Compiler);

    this.process(file, realDone);
    assertDone('processSync', 'process', complete);

    return result

    /**
     * @type {ProcessCallback<VFileWithOutput<CompileResult>>}
     */
    function realDone(error, file) {
      complete = true;
      bail(error);
      result = file;
    }
  }

  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(tree, file, done) {
    assertNode(tree);
    this.freeze();

    const transformers = this.transformers;

    if (!done && typeof file === 'function') {
      done = file;
      file = undefined;
    }

    return done ? executor(undefined, done) : new Promise(executor)

    // Note: `void`s needed for TS.
    /**
     * @param {(
     *   ((tree: TailTree extends undefined ? Node : TailTree) => undefined | void) |
     *   undefined
     * )} resolve
     * @param {(error: Error) => undefined | void} reject
     * @returns {undefined}
     */
    function executor(resolve, reject) {
      const realFile = vfile(file);
      transformers.run(tree, realFile, realDone);

      /**
       * @param {Error | undefined} error
       * @param {Node} outputTree
       * @param {VFile} file
       * @returns {undefined}
       */
      function realDone(error, outputTree, file) {
        const resultingTree =
          /** @type {TailTree extends undefined ? Node : TailTree} */ (
            outputTree || tree
          );

        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(resultingTree);
        } else {
          done(undefined, resultingTree, file);
        }
      }
    }
  }

  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(tree, file) {
    /** @type {boolean} */
    let complete = false;
    /** @type {(TailTree extends undefined ? Node : TailTree) | undefined} */
    let result;

    this.run(tree, file, realDone);

    assertDone('runSync', 'run', complete);
    return result

    /**
     * @type {RunCallback<TailTree extends undefined ? Node : TailTree>}
     */
    function realDone(error, tree) {
      bail(error);
      result = tree;
      complete = true;
    }
  }

  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(tree, file) {
    this.freeze();
    const realFile = vfile(file);
    const compiler = this.compiler || this.Compiler;
    assertCompiler('stringify', compiler);
    assertNode(tree);

    return compiler(tree, realFile)
  }

  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(value, ...parameters) {
    const attachers = this.attachers;
    const namespace = this.namespace;

    assertUnfrozen('use', this.frozen);

    if (value === null || value === undefined) ; else if (typeof value === 'function') {
      addPlugin(value, parameters);
    } else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError('Expected usable value, not `' + value + '`')
    }

    return this

    /**
     * @param {Pluggable} value
     * @returns {undefined}
     */
    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value, []);
      } else if (typeof value === 'object') {
        if (Array.isArray(value)) {
          const [plugin, ...parameters] =
            /** @type {PluginTuple<Array<unknown>>} */ (value);
          addPlugin(plugin, parameters);
        } else {
          addPreset(value);
        }
      } else {
        throw new TypeError('Expected usable value, not `' + value + '`')
      }
    }

    /**
     * @param {Preset} result
     * @returns {undefined}
     */
    function addPreset(result) {
      if (!('plugins' in result) && !('settings' in result)) {
        throw new Error(
          'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither'
        )
      }

      addList(result.plugins);

      if (result.settings) {
        namespace.settings = extend$1(true, namespace.settings, result.settings);
      }
    }

    /**
     * @param {PluggableList | null | undefined} plugins
     * @returns {undefined}
     */
    function addList(plugins) {
      let index = -1;

      if (plugins === null || plugins === undefined) ; else if (Array.isArray(plugins)) {
        while (++index < plugins.length) {
          const thing = plugins[index];
          add(thing);
        }
      } else {
        throw new TypeError('Expected a list of plugins, not `' + plugins + '`')
      }
    }

    /**
     * @param {Plugin} plugin
     * @param {Array<unknown>} parameters
     * @returns {undefined}
     */
    function addPlugin(plugin, parameters) {
      let index = -1;
      let entryIndex = -1;

      while (++index < attachers.length) {
        if (attachers[index][0] === plugin) {
          entryIndex = index;
          break
        }
      }

      if (entryIndex === -1) {
        attachers.push([plugin, ...parameters]);
      }
      // Only set if there was at least a `primary` value, otherwise we’d change
      // `arguments.length`.
      else if (parameters.length > 0) {
        let [primary, ...rest] = parameters;
        const currentPrimary = attachers[entryIndex][1];
        if (isPlainObject(currentPrimary) && isPlainObject(primary)) {
          primary = extend$1(true, currentPrimary, primary);
        }

        attachers[entryIndex] = [plugin, primary, ...rest];
      }
    }
  }
}

// Note: this returns a *callable* instance.
// That’s why it’s documented as a function.
/**
 * Create a new processor.
 *
 * @example
 *   This example shows how a new processor can be created (from `remark`) and linked
 *   to **stdin**(4) and **stdout**(4).
 *
 *   ```js
 *   import process from 'node:process'
 *   import concatStream from 'concat-stream'
 *   import {remark} from 'remark'
 *
 *   process.stdin.pipe(
 *     concatStream(function (buf) {
 *       process.stdout.write(String(remark().processSync(buf)))
 *     })
 *   )
 *   ```
 *
 * @returns
 *   New *unfrozen* processor (`processor`).
 *
 *   This processor is configured to work the same as its ancestor.
 *   When the descendant processor is configured in the future it does not
 *   affect the ancestral processor.
 */
const unified = new Processor().freeze();

/**
 * Assert a parser is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Parser}
 */
function assertParser(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `parser`')
  }
}

/**
 * Assert a compiler is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Compiler}
 */
function assertCompiler(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `compiler`')
  }
}

/**
 * Assert the processor is not frozen.
 *
 * @param {string} name
 * @param {unknown} frozen
 * @returns {asserts frozen is false}
 */
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      'Cannot call `' +
        name +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.'
    )
  }
}

/**
 * Assert `node` is a unist node.
 *
 * @param {unknown} node
 * @returns {asserts node is Node}
 */
function assertNode(node) {
  // `isPlainObj` unfortunately uses `any` instead of `unknown`.
  // type-coverage:ignore-next-line
  if (!isPlainObject(node) || typeof node.type !== 'string') {
    throw new TypeError('Expected node, got `' + node + '`')
    // Fine.
  }
}

/**
 * Assert that `complete` is `true`.
 *
 * @param {string} name
 * @param {string} asyncName
 * @param {unknown} complete
 * @returns {asserts complete is true}
 */
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      '`' + name + '` finished async. Use `' + asyncName + '` instead'
    )
  }
}

/**
 * @param {Compatible | undefined} [value]
 * @returns {VFile}
 */
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value)
}

/**
 * @param {Compatible | undefined} [value]
 * @returns {value is VFile}
 */
function looksLikeAVFile(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      'message' in value &&
      'messages' in value
  )
}

/**
 * @param {unknown} [value]
 * @returns {value is Value}
 */
function looksLikeAValue(value) {
  return typeof value === 'string' || isUint8Array(value)
}

/**
 * Assert `value` is an `Uint8Array`.
 *
 * @param {unknown} value
 *   thing.
 * @returns {value is Uint8Array}
 *   Whether `value` is an `Uint8Array`.
 */
function isUint8Array(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      'byteLength' in value &&
      'byteOffset' in value
  )
}

/**
 * @import {Element, Nodes, Parents, Root} from 'hast'
 * @import {Root as MdastRoot} from 'mdast'
 * @const {ComponentType, JSX, ReactElement, ReactNode} = craftercms.libs.React
 * @import {Options as RemarkRehypeOptions} from 'remark-rehype'
 * @import {BuildVisitor} from 'unist-util-visit'
 * @import {PluggableList, Processor} from 'unified'
 */


const changelog =
  'https://github.com/remarkjs/react-markdown/blob/main/changelog.md';

/** @type {PluggableList} */
const emptyPlugins = [];
/** @type {Readonly<RemarkRehypeOptions>} */
const emptyRemarkRehypeOptions = {allowDangerousHtml: true};
const safeProtocol$1 = /^(https?|ircs?|mailto|xmpp)$/i;

// Mutable because we `delete` any time it’s used and a message is sent.
/** @type {ReadonlyArray<Readonly<Deprecation>>} */
const deprecations = [
  {from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser'},
  {from: 'allowDangerousHtml', id: 'remove-buggy-html-in-markdown-parser'},
  {
    from: 'allowNode',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes',
    to: 'allowElement'
  },
  {
    from: 'allowedTypes',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes',
    to: 'allowedElements'
  },
  {from: 'className', id: 'remove-classname'},
  {
    from: 'disallowedTypes',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes',
    to: 'disallowedElements'
  },
  {from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser'},
  {from: 'includeElementIndex', id: '#remove-includeelementindex'},
  {
    from: 'includeNodeIndex',
    id: 'change-includenodeindex-to-includeelementindex'
  },
  {from: 'linkTarget', id: 'remove-linktarget'},
  {from: 'plugins', id: 'change-plugins-to-remarkplugins', to: 'remarkPlugins'},
  {from: 'rawSourcePos', id: '#remove-rawsourcepos'},
  {from: 'renderers', id: 'change-renderers-to-components', to: 'components'},
  {from: 'source', id: 'change-source-to-children', to: 'children'},
  {from: 'sourcePos', id: '#remove-sourcepos'},
  {from: 'transformImageUri', id: '#add-urltransform', to: 'urlTransform'},
  {from: 'transformLinkUri', id: '#add-urltransform', to: 'urlTransform'}
];

/**
 * Component to render markdown.
 *
 * This is a synchronous component.
 * When using async plugins,
 * see {@linkcode MarkdownAsync} or {@linkcode MarkdownHooks}.
 *
 * @param {Readonly<Options>} options
 *   Props.
 * @returns {ReactElement}
 *   React element.
 */
function Markdown(options) {
  const processor = createProcessor(options);
  const file = createFile(options);
  return post(processor.runSync(processor.parse(file), file), options)
}

/**
 * Set up the `unified` processor.
 *
 * @param {Readonly<Options>} options
 *   Props.
 * @returns {Processor<MdastRoot, MdastRoot, Root, undefined, undefined>}
 *   Result.
 */
function createProcessor(options) {
  const rehypePlugins = options.rehypePlugins || emptyPlugins;
  const remarkPlugins = options.remarkPlugins || emptyPlugins;
  const remarkRehypeOptions = options.remarkRehypeOptions
    ? {...options.remarkRehypeOptions, ...emptyRemarkRehypeOptions}
    : emptyRemarkRehypeOptions;

  const processor = unified()
    .use(remarkParse)
    .use(remarkPlugins)
    .use(remarkRehype, remarkRehypeOptions)
    .use(rehypePlugins);

  return processor
}

/**
 * Set up the virtual file.
 *
 * @param {Readonly<Options>} options
 *   Props.
 * @returns {VFile}
 *   Result.
 */
function createFile(options) {
  const children = options.children || '';
  const file = new VFile();

  if (typeof children === 'string') {
    file.value = children;
  }

  return file
}

/**
 * Process the result from unified some more.
 *
 * @param {Nodes} tree
 *   Tree.
 * @param {Readonly<Options>} options
 *   Props.
 * @returns {ReactElement}
 *   React element.
 */
function post(tree, options) {
  const allowedElements = options.allowedElements;
  const allowElement = options.allowElement;
  const components = options.components;
  const disallowedElements = options.disallowedElements;
  const skipHtml = options.skipHtml;
  const unwrapDisallowed = options.unwrapDisallowed;
  const urlTransform = options.urlTransform || defaultUrlTransform;

  for (const deprecation of deprecations) {
    if (Object.hasOwn(options, deprecation.from)) {
      unreachable(
        'Unexpected `' +
          deprecation.from +
          '` prop, ' +
          (deprecation.to
            ? 'use `' + deprecation.to + '` instead'
            : 'remove it') +
          ' (see <' +
          changelog +
          '#' +
          deprecation.id +
          '> for more info)'
      );
    }
  }

  visit(tree, transform);

  return toJsxRuntime(tree, {
    Fragment,
    components,
    ignoreInvalidStyle: true,
    jsx,
    jsxs,
    passKeys: true,
    passNode: true
  })

  /** @type {BuildVisitor<Root>} */
  function transform(node, index, parent) {
    if (node.type === 'raw' && parent && typeof index === 'number') {
      if (skipHtml) {
        parent.children.splice(index, 1);
      } else {
        parent.children[index] = {type: 'text', value: node.value};
      }

      return index
    }

    if (node.type === 'element') {
      /** @type {string} */
      let key;

      for (key in urlAttributes) {
        if (
          Object.hasOwn(urlAttributes, key) &&
          Object.hasOwn(node.properties, key)
        ) {
          const value = node.properties[key];
          const test = urlAttributes[key];
          if (test === null || test.includes(node.tagName)) {
            node.properties[key] = urlTransform(String(value || ''), key, node);
          }
        }
      }
    }

    if (node.type === 'element') {
      let remove = allowedElements
        ? !allowedElements.includes(node.tagName)
        : disallowedElements
          ? disallowedElements.includes(node.tagName)
          : false;

      if (!remove && allowElement && typeof index === 'number') {
        remove = !allowElement(node, index, parent);
      }

      if (remove && parent && typeof index === 'number') {
        if (unwrapDisallowed && node.children) {
          parent.children.splice(index, 1, ...node.children);
        } else {
          parent.children.splice(index, 1);
        }

        return index
      }
    }
  }
}

/**
 * Make a URL safe.
 *
 * @satisfies {UrlTransform}
 * @param {string} value
 *   URL.
 * @returns {string}
 *   Safe URL.
 */
function defaultUrlTransform(value) {
  // Same as:
  // <https://github.com/micromark/micromark/blob/929275e/packages/micromark-util-sanitize-uri/dev/index.js#L34>
  // But without the `encode` part.
  const colon = value.indexOf(':');
  const questionMark = value.indexOf('?');
  const numberSign = value.indexOf('#');
  const slash = value.indexOf('/');

  if (
    // If there is no protocol, it’s relative.
    colon === -1 ||
    // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    (slash !== -1 && colon > slash) ||
    (questionMark !== -1 && colon > questionMark) ||
    (numberSign !== -1 && colon > numberSign) ||
    // It is a protocol, it should be allowed.
    safeProtocol$1.test(value.slice(0, colon))
  ) {
    return value
  }

  return ''
}

/**
 * Count how often a character (or substring) is used in a string.
 *
 * @param {string} value
 *   Value to search in.
 * @param {string} character
 *   Character (or substring) to look for.
 * @return {number}
 *   Number of times `character` occurred in `value`.
 */
function ccount(value, character) {
  const source = String(value);

  if (typeof character !== 'string') {
    throw new TypeError('Expected character')
  }

  let count = 0;
  let index = source.indexOf(character);

  while (index !== -1) {
    count++;
    index = source.indexOf(character, index + character.length);
  }

  return count
}

function escapeStringRegexp(string) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	// Escape characters with special meaning either inside or outside character sets.
	// Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
	return string
		.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
		.replace(/-/g, '\\x2d');
}

/**
 * @import {Nodes, Parents, PhrasingContent, Root, Text} from 'mdast'
 * @import {BuildVisitor, Test, VisitorResult} from 'unist-util-visit-parents'
 */


/**
 * Find patterns in a tree and replace them.
 *
 * The algorithm searches the tree in *preorder* for complete values in `Text`
 * nodes.
 * Partial matches are not supported.
 *
 * @param {Nodes} tree
 *   Tree to change.
 * @param {FindAndReplaceList | FindAndReplaceTuple} list
 *   Patterns to find.
 * @param {Options | null | undefined} [options]
 *   Configuration (when `find` is not `Find`).
 * @returns {undefined}
 *   Nothing.
 */
function findAndReplace(tree, list, options) {
  const settings = options || {};
  const ignored = convert(settings.ignore || []);
  const pairs = toPairs(list);
  let pairIndex = -1;

  while (++pairIndex < pairs.length) {
    visitParents(tree, 'text', visitor);
  }

  /** @type {BuildVisitor<Root, 'text'>} */
  function visitor(node, parents) {
    let index = -1;
    /** @type {Parents | undefined} */
    let grandparent;

    while (++index < parents.length) {
      const parent = parents[index];
      /** @type {Array<Nodes> | undefined} */
      const siblings = grandparent ? grandparent.children : undefined;

      if (
        ignored(
          parent,
          siblings ? siblings.indexOf(parent) : undefined,
          grandparent
        )
      ) {
        return
      }

      grandparent = parent;
    }

    if (grandparent) {
      return handler(node, parents)
    }
  }

  /**
   * Handle a text node which is not in an ignored parent.
   *
   * @param {Text} node
   *   Text node.
   * @param {Array<Parents>} parents
   *   Parents.
   * @returns {VisitorResult}
   *   Result.
   */
  function handler(node, parents) {
    const parent = parents[parents.length - 1];
    const find = pairs[pairIndex][0];
    const replace = pairs[pairIndex][1];
    let start = 0;
    /** @type {Array<Nodes>} */
    const siblings = parent.children;
    const index = siblings.indexOf(node);
    let change = false;
    /** @type {Array<PhrasingContent>} */
    let nodes = [];

    find.lastIndex = 0;

    let match = find.exec(node.value);

    while (match) {
      const position = match.index;
      /** @type {RegExpMatchObject} */
      const matchObject = {
        index: match.index,
        input: match.input,
        stack: [...parents, node]
      };
      let value = replace(...match, matchObject);

      if (typeof value === 'string') {
        value = value.length > 0 ? {type: 'text', value} : undefined;
      }

      // It wasn’t a match after all.
      if (value === false) {
        // False acts as if there was no match.
        // So we need to reset `lastIndex`, which currently being at the end of
        // the current match, to the beginning.
        find.lastIndex = position + 1;
      } else {
        if (start !== position) {
          nodes.push({
            type: 'text',
            value: node.value.slice(start, position)
          });
        }

        if (Array.isArray(value)) {
          nodes.push(...value);
        } else if (value) {
          nodes.push(value);
        }

        start = position + match[0].length;
        change = true;
      }

      if (!find.global) {
        break
      }

      match = find.exec(node.value);
    }

    if (change) {
      if (start < node.value.length) {
        nodes.push({type: 'text', value: node.value.slice(start)});
      }

      parent.children.splice(index, 1, ...nodes);
    } else {
      nodes = [node];
    }

    return index + nodes.length
  }
}

/**
 * Turn a tuple or a list of tuples into pairs.
 *
 * @param {FindAndReplaceList | FindAndReplaceTuple} tupleOrList
 *   Schema.
 * @returns {Pairs}
 *   Clean pairs.
 */
function toPairs(tupleOrList) {
  /** @type {Pairs} */
  const result = [];

  if (!Array.isArray(tupleOrList)) {
    throw new TypeError('Expected find and replace tuple or list of tuples')
  }

  /** @type {FindAndReplaceList} */
  // @ts-expect-error: correct.
  const list =
    !tupleOrList[0] || Array.isArray(tupleOrList[0])
      ? tupleOrList
      : [tupleOrList];

  let index = -1;

  while (++index < list.length) {
    const tuple = list[index];
    result.push([toExpression(tuple[0]), toFunction(tuple[1])]);
  }

  return result
}

/**
 * Turn a find into an expression.
 *
 * @param {Find} find
 *   Find.
 * @returns {RegExp}
 *   Expression.
 */
function toExpression(find) {
  return typeof find === 'string' ? new RegExp(escapeStringRegexp(find), 'g') : find
}

/**
 * Turn a replace into a function.
 *
 * @param {Replace} replace
 *   Replace.
 * @returns {ReplaceFunction}
 *   Function.
 */
function toFunction(replace) {
  return typeof replace === 'function'
    ? replace
    : function () {
        return replace
      }
}

/**
 * @import {RegExpMatchObject, ReplaceFunction} from 'mdast-util-find-and-replace'
 * @import {CompileContext, Extension as FromMarkdownExtension, Handle as FromMarkdownHandle, Transform as FromMarkdownTransform} from 'mdast-util-from-markdown'
 * @import {ConstructName, Options as ToMarkdownExtension} from 'mdast-util-to-markdown'
 * @import {Link, PhrasingContent} from 'mdast'
 */


/** @type {ConstructName} */
const inConstruct = 'phrasing';
/** @type {Array<ConstructName>} */
const notInConstruct = ['autolink', 'link', 'image', 'label'];

/**
 * Create an extension for `mdast-util-from-markdown` to enable GFM autolink
 * literals in markdown.
 *
 * @returns {FromMarkdownExtension}
 *   Extension for `mdast-util-to-markdown` to enable GFM autolink literals.
 */
function gfmAutolinkLiteralFromMarkdown() {
  return {
    transforms: [transformGfmAutolinkLiterals],
    enter: {
      literalAutolink: enterLiteralAutolink,
      literalAutolinkEmail: enterLiteralAutolinkValue,
      literalAutolinkHttp: enterLiteralAutolinkValue,
      literalAutolinkWww: enterLiteralAutolinkValue
    },
    exit: {
      literalAutolink: exitLiteralAutolink,
      literalAutolinkEmail: exitLiteralAutolinkEmail,
      literalAutolinkHttp: exitLiteralAutolinkHttp,
      literalAutolinkWww: exitLiteralAutolinkWww
    }
  }
}

/**
 * Create an extension for `mdast-util-to-markdown` to enable GFM autolink
 * literals in markdown.
 *
 * @returns {ToMarkdownExtension}
 *   Extension for `mdast-util-to-markdown` to enable GFM autolink literals.
 */
function gfmAutolinkLiteralToMarkdown() {
  return {
    unsafe: [
      {
        character: '@',
        before: '[+\\-.\\w]',
        after: '[\\-.\\w]',
        inConstruct,
        notInConstruct
      },
      {
        character: '.',
        before: '[Ww]',
        after: '[\\-.\\w]',
        inConstruct,
        notInConstruct
      },
      {
        character: ':',
        before: '[ps]',
        after: '\\/',
        inConstruct,
        notInConstruct
      }
    ]
  }
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function enterLiteralAutolink(token) {
  this.enter({type: 'link', title: null, url: '', children: []}, token);
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  const node = this.stack[this.stack.length - 1];
  ok$1(node.type === 'link');
  node.url = 'http://' + this.sliceSerialize(token);
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exitLiteralAutolink(token) {
  this.exit(token);
}

/** @type {FromMarkdownTransform} */
function transformGfmAutolinkLiterals(tree) {
  findAndReplace(
    tree,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
      [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, findEmail]
    ],
    {ignore: ['link', 'linkReference']}
  );
}

/**
 * @type {ReplaceFunction}
 * @param {string} _
 * @param {string} protocol
 * @param {string} domain
 * @param {string} path
 * @param {RegExpMatchObject} match
 * @returns {Array<PhrasingContent> | Link | false}
 */
// eslint-disable-next-line max-params
function findUrl(_, protocol, domain, path, match) {
  let prefix = '';

  // Not an expected previous character.
  if (!previous(match)) {
    return false
  }

  // Treat `www` as part of the domain.
  if (/^w/i.test(protocol)) {
    domain = protocol + domain;
    protocol = '';
    prefix = 'http://';
  }

  if (!isCorrectDomain(domain)) {
    return false
  }

  const parts = splitUrl(domain + path);

  if (!parts[0]) return false

  /** @type {Link} */
  const result = {
    type: 'link',
    title: null,
    url: prefix + protocol + parts[0],
    children: [{type: 'text', value: protocol + parts[0]}]
  };

  if (parts[1]) {
    return [result, {type: 'text', value: parts[1]}]
  }

  return result
}

/**
 * @type {ReplaceFunction}
 * @param {string} _
 * @param {string} atext
 * @param {string} label
 * @param {RegExpMatchObject} match
 * @returns {Link | false}
 */
function findEmail(_, atext, label, match) {
  if (
    // Not an expected previous character.
    !previous(match, true) ||
    // Label ends in not allowed character.
    /[-\d_]$/.test(label)
  ) {
    return false
  }

  return {
    type: 'link',
    title: null,
    url: 'mailto:' + atext + '@' + label,
    children: [{type: 'text', value: atext + '@' + label}]
  }
}

/**
 * @param {string} domain
 * @returns {boolean}
 */
function isCorrectDomain(domain) {
  const parts = domain.split('.');

  if (
    parts.length < 2 ||
    (parts[parts.length - 1] &&
      (/_/.test(parts[parts.length - 1]) ||
        !/[a-zA-Z\d]/.test(parts[parts.length - 1]))) ||
    (parts[parts.length - 2] &&
      (/_/.test(parts[parts.length - 2]) ||
        !/[a-zA-Z\d]/.test(parts[parts.length - 2])))
  ) {
    return false
  }

  return true
}

/**
 * @param {string} url
 * @returns {[string, string | undefined]}
 */
function splitUrl(url) {
  const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);

  if (!trailExec) {
    return [url, undefined]
  }

  url = url.slice(0, trailExec.index);

  let trail = trailExec[0];
  let closingParenIndex = trail.indexOf(')');
  const openingParens = ccount(url, '(');
  let closingParens = ccount(url, ')');

  while (closingParenIndex !== -1 && openingParens > closingParens) {
    url += trail.slice(0, closingParenIndex + 1);
    trail = trail.slice(closingParenIndex + 1);
    closingParenIndex = trail.indexOf(')');
    closingParens++;
  }

  return [url, trail]
}

/**
 * @param {RegExpMatchObject} match
 * @param {boolean | null | undefined} [email=false]
 * @returns {boolean}
 */
function previous(match, email) {
  const code = match.input.charCodeAt(match.index - 1);

  return (
    (match.index === 0 ||
      unicodeWhitespace(code) ||
      unicodePunctuation(code)) &&
    // If it’s an email, the previous character should not be a slash.
    (!email || code !== 47)
  )
}

/**
 * @import {
 *   CompileContext,
 *   Extension as FromMarkdownExtension,
 *   Handle as FromMarkdownHandle
 * } from 'mdast-util-from-markdown'
 * @import {ToMarkdownOptions} from 'mdast-util-gfm-footnote'
 * @import {
 *   Handle as ToMarkdownHandle,
 *   Map,
 *   Options as ToMarkdownExtension
 * } from 'mdast-util-to-markdown'
 * @import {FootnoteDefinition, FootnoteReference} from 'mdast'
 */


footnoteReference.peek = footnoteReferencePeek;

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function enterFootnoteCallString() {
  this.buffer();
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function enterFootnoteCall(token) {
  this.enter({type: 'footnoteReference', identifier: '', label: ''}, token);
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function enterFootnoteDefinitionLabelString() {
  this.buffer();
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function enterFootnoteDefinition(token) {
  this.enter(
    {type: 'footnoteDefinition', identifier: '', label: '', children: []},
    token
  );
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exitFootnoteCallString(token) {
  const label = this.resume();
  const node = this.stack[this.stack.length - 1];
  ok$1(node.type === 'footnoteReference');
  node.identifier = normalizeIdentifier(
    this.sliceSerialize(token)
  ).toLowerCase();
  node.label = label;
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exitFootnoteCall(token) {
  this.exit(token);
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exitFootnoteDefinitionLabelString(token) {
  const label = this.resume();
  const node = this.stack[this.stack.length - 1];
  ok$1(node.type === 'footnoteDefinition');
  node.identifier = normalizeIdentifier(
    this.sliceSerialize(token)
  ).toLowerCase();
  node.label = label;
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exitFootnoteDefinition(token) {
  this.exit(token);
}

/** @type {ToMarkdownHandle} */
function footnoteReferencePeek() {
  return '['
}

/**
 * @type {ToMarkdownHandle}
 * @param {FootnoteReference} node
 */
function footnoteReference(node, _, state, info) {
  const tracker = state.createTracker(info);
  let value = tracker.move('[^');
  const exit = state.enter('footnoteReference');
  const subexit = state.enter('reference');
  value += tracker.move(
    state.safe(state.associationId(node), {after: ']', before: value})
  );
  subexit();
  exit();
  value += tracker.move(']');
  return value
}

/**
 * Create an extension for `mdast-util-from-markdown` to enable GFM footnotes
 * in markdown.
 *
 * @returns {FromMarkdownExtension}
 *   Extension for `mdast-util-from-markdown`.
 */
function gfmFootnoteFromMarkdown() {
  return {
    enter: {
      gfmFootnoteCallString: enterFootnoteCallString,
      gfmFootnoteCall: enterFootnoteCall,
      gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
      gfmFootnoteDefinition: enterFootnoteDefinition
    },
    exit: {
      gfmFootnoteCallString: exitFootnoteCallString,
      gfmFootnoteCall: exitFootnoteCall,
      gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
      gfmFootnoteDefinition: exitFootnoteDefinition
    }
  }
}

/**
 * Create an extension for `mdast-util-to-markdown` to enable GFM footnotes
 * in markdown.
 *
 * @param {ToMarkdownOptions | null | undefined} [options]
 *   Configuration (optional).
 * @returns {ToMarkdownExtension}
 *   Extension for `mdast-util-to-markdown`.
 */
function gfmFootnoteToMarkdown(options) {
  // To do: next major: change default.
  let firstLineBlank = false;

  if (options && options.firstLineBlank) {
    firstLineBlank = true;
  }

  return {
    handlers: {footnoteDefinition, footnoteReference},
    // This is on by default already.
    unsafe: [{character: '[', inConstruct: ['label', 'phrasing', 'reference']}]
  }

  /**
   * @type {ToMarkdownHandle}
   * @param {FootnoteDefinition} node
   */
  function footnoteDefinition(node, _, state, info) {
    const tracker = state.createTracker(info);
    let value = tracker.move('[^');
    const exit = state.enter('footnoteDefinition');
    const subexit = state.enter('label');
    value += tracker.move(
      state.safe(state.associationId(node), {before: value, after: ']'})
    );
    subexit();

    value += tracker.move(']:');

    if (node.children && node.children.length > 0) {
      tracker.shift(4);

      value += tracker.move(
        (firstLineBlank ? '\n' : ' ') +
          state.indentLines(
            state.containerFlow(node, tracker.current()),
            firstLineBlank ? mapAll : mapExceptFirst
          )
      );
    }

    exit();

    return value
  }
}

/** @type {Map} */
function mapExceptFirst(line, index, blank) {
  return index === 0 ? line : mapAll(line, index, blank)
}

/** @type {Map} */
function mapAll(line, index, blank) {
  return (blank ? '' : '    ') + line
}

/**
 * @typedef {import('mdast').Delete} Delete
 *
 * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext
 * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
 * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
 *
 * @typedef {import('mdast-util-to-markdown').ConstructName} ConstructName
 * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
 * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
 */

/**
 * List of constructs that occur in phrasing (paragraphs, headings), but cannot
 * contain strikethrough.
 * So they sort of cancel each other out.
 * Note: could use a better name.
 *
 * Note: keep in sync with: <https://github.com/syntax-tree/mdast-util-to-markdown/blob/8ce8dbf/lib/unsafe.js#L14>
 *
 * @type {Array<ConstructName>}
 */
const constructsWithoutStrikethrough = [
  'autolink',
  'destinationLiteral',
  'destinationRaw',
  'reference',
  'titleQuote',
  'titleApostrophe'
];

handleDelete.peek = peekDelete;

/**
 * Create an extension for `mdast-util-from-markdown` to enable GFM
 * strikethrough in markdown.
 *
 * @returns {FromMarkdownExtension}
 *   Extension for `mdast-util-from-markdown` to enable GFM strikethrough.
 */
function gfmStrikethroughFromMarkdown() {
  return {
    canContainEols: ['delete'],
    enter: {strikethrough: enterStrikethrough},
    exit: {strikethrough: exitStrikethrough}
  }
}

/**
 * Create an extension for `mdast-util-to-markdown` to enable GFM
 * strikethrough in markdown.
 *
 * @returns {ToMarkdownExtension}
 *   Extension for `mdast-util-to-markdown` to enable GFM strikethrough.
 */
function gfmStrikethroughToMarkdown() {
  return {
    unsafe: [
      {
        character: '~',
        inConstruct: 'phrasing',
        notInConstruct: constructsWithoutStrikethrough
      }
    ],
    handlers: {delete: handleDelete}
  }
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function enterStrikethrough(token) {
  this.enter({type: 'delete', children: []}, token);
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exitStrikethrough(token) {
  this.exit(token);
}

/**
 * @type {ToMarkdownHandle}
 * @param {Delete} node
 */
function handleDelete(node, _, state, info) {
  const tracker = state.createTracker(info);
  const exit = state.enter('strikethrough');
  let value = tracker.move('~~');
  value += state.containerPhrasing(node, {
    ...tracker.current(),
    before: value,
    after: '~'
  });
  value += tracker.move('~~');
  exit();
  return value
}

/** @type {ToMarkdownHandle} */
function peekDelete() {
  return '~'
}

// To do: next major: remove.
/**
 * @typedef {Options} MarkdownTableOptions
 *   Configuration.
 */

/**
 * @typedef Options
 *   Configuration.
 * @property {boolean | null | undefined} [alignDelimiters=true]
 *   Whether to align the delimiters (default: `true`);
 *   they are aligned by default:
 *
 *   ```markdown
 *   | Alpha | B     |
 *   | ----- | ----- |
 *   | C     | Delta |
 *   ```
 *
 *   Pass `false` to make them staggered:
 *
 *   ```markdown
 *   | Alpha | B |
 *   | - | - |
 *   | C | Delta |
 *   ```
 * @property {ReadonlyArray<string | null | undefined> | string | null | undefined} [align]
 *   How to align columns (default: `''`);
 *   one style for all columns or styles for their respective columns;
 *   each style is either `'l'` (left), `'r'` (right), or `'c'` (center);
 *   other values are treated as `''`, which doesn’t place the colon in the
 *   alignment row but does align left;
 *   *only the lowercased first character is used, so `Right` is fine.*
 * @property {boolean | null | undefined} [delimiterEnd=true]
 *   Whether to end each row with the delimiter (default: `true`).
 *
 *   > 👉 **Note**: please don’t use this: it could create fragile structures
 *   > that aren’t understandable to some markdown parsers.
 *
 *   When `true`, there are ending delimiters:
 *
 *   ```markdown
 *   | Alpha | B     |
 *   | ----- | ----- |
 *   | C     | Delta |
 *   ```
 *
 *   When `false`, there are no ending delimiters:
 *
 *   ```markdown
 *   | Alpha | B
 *   | ----- | -----
 *   | C     | Delta
 *   ```
 * @property {boolean | null | undefined} [delimiterStart=true]
 *   Whether to begin each row with the delimiter (default: `true`).
 *
 *   > 👉 **Note**: please don’t use this: it could create fragile structures
 *   > that aren’t understandable to some markdown parsers.
 *
 *   When `true`, there are starting delimiters:
 *
 *   ```markdown
 *   | Alpha | B     |
 *   | ----- | ----- |
 *   | C     | Delta |
 *   ```
 *
 *   When `false`, there are no starting delimiters:
 *
 *   ```markdown
 *   Alpha | B     |
 *   ----- | ----- |
 *   C     | Delta |
 *   ```
 * @property {boolean | null | undefined} [padding=true]
 *   Whether to add a space of padding between delimiters and cells
 *   (default: `true`).
 *
 *   When `true`, there is padding:
 *
 *   ```markdown
 *   | Alpha | B     |
 *   | ----- | ----- |
 *   | C     | Delta |
 *   ```
 *
 *   When `false`, there is no padding:
 *
 *   ```markdown
 *   |Alpha|B    |
 *   |-----|-----|
 *   |C    |Delta|
 *   ```
 * @property {((value: string) => number) | null | undefined} [stringLength]
 *   Function to detect the length of table cell content (optional);
 *   this is used when aligning the delimiters (`|`) between table cells;
 *   full-width characters and emoji mess up delimiter alignment when viewing
 *   the markdown source;
 *   to fix this, you can pass this function,
 *   which receives the cell content and returns its “visible” size;
 *   note that what is and isn’t visible depends on where the text is displayed.
 *
 *   Without such a function, the following:
 *
 *   ```js
 *   markdownTable([
 *     ['Alpha', 'Bravo'],
 *     ['中文', 'Charlie'],
 *     ['👩‍❤️‍👩', 'Delta']
 *   ])
 *   ```
 *
 *   Yields:
 *
 *   ```markdown
 *   | Alpha | Bravo |
 *   | - | - |
 *   | 中文 | Charlie |
 *   | 👩‍❤️‍👩 | Delta |
 *   ```
 *
 *   With [`string-width`](https://github.com/sindresorhus/string-width):
 *
 *   ```js
 *   import stringWidth from 'string-width'
 *
 *   markdownTable(
 *     [
 *       ['Alpha', 'Bravo'],
 *       ['中文', 'Charlie'],
 *       ['👩‍❤️‍👩', 'Delta']
 *     ],
 *     {stringLength: stringWidth}
 *   )
 *   ```
 *
 *   Yields:
 *
 *   ```markdown
 *   | Alpha | Bravo   |
 *   | ----- | ------- |
 *   | 中文  | Charlie |
 *   | 👩‍❤️‍👩    | Delta   |
 *   ```
 */

/**
 * @param {string} value
 *   Cell value.
 * @returns {number}
 *   Cell size.
 */
function defaultStringLength(value) {
  return value.length
}

/**
 * Generate a markdown
 * ([GFM](https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables))
 * table.
 *
 * @param {ReadonlyArray<ReadonlyArray<string | null | undefined>>} table
 *   Table data (matrix of strings).
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns {string}
 *   Result.
 */
function markdownTable(table, options) {
  const settings = options || {};
  // To do: next major: change to spread.
  const align = (settings.align || []).concat();
  const stringLength = settings.stringLength || defaultStringLength;
  /** @type {Array<number>} Character codes as symbols for alignment per column. */
  const alignments = [];
  /** @type {Array<Array<string>>} Cells per row. */
  const cellMatrix = [];
  /** @type {Array<Array<number>>} Sizes of each cell per row. */
  const sizeMatrix = [];
  /** @type {Array<number>} */
  const longestCellByColumn = [];
  let mostCellsPerRow = 0;
  let rowIndex = -1;

  // This is a superfluous loop if we don’t align delimiters, but otherwise we’d
  // do superfluous work when aligning, so optimize for aligning.
  while (++rowIndex < table.length) {
    /** @type {Array<string>} */
    const row = [];
    /** @type {Array<number>} */
    const sizes = [];
    let columnIndex = -1;

    if (table[rowIndex].length > mostCellsPerRow) {
      mostCellsPerRow = table[rowIndex].length;
    }

    while (++columnIndex < table[rowIndex].length) {
      const cell = serialize(table[rowIndex][columnIndex]);

      if (settings.alignDelimiters !== false) {
        const size = stringLength(cell);
        sizes[columnIndex] = size;

        if (
          longestCellByColumn[columnIndex] === undefined ||
          size > longestCellByColumn[columnIndex]
        ) {
          longestCellByColumn[columnIndex] = size;
        }
      }

      row.push(cell);
    }

    cellMatrix[rowIndex] = row;
    sizeMatrix[rowIndex] = sizes;
  }

  // Figure out which alignments to use.
  let columnIndex = -1;

  if (typeof align === 'object' && 'length' in align) {
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = toAlignment(align[columnIndex]);
    }
  } else {
    const code = toAlignment(align);

    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = code;
    }
  }

  // Inject the alignment row.
  columnIndex = -1;
  /** @type {Array<string>} */
  const row = [];
  /** @type {Array<number>} */
  const sizes = [];

  while (++columnIndex < mostCellsPerRow) {
    const code = alignments[columnIndex];
    let before = '';
    let after = '';

    if (code === 99 /* `c` */) {
      before = ':';
      after = ':';
    } else if (code === 108 /* `l` */) {
      before = ':';
    } else if (code === 114 /* `r` */) {
      after = ':';
    }

    // There *must* be at least one hyphen-minus in each alignment cell.
    let size =
      settings.alignDelimiters === false
        ? 1
        : Math.max(
            1,
            longestCellByColumn[columnIndex] - before.length - after.length
          );

    const cell = before + '-'.repeat(size) + after;

    if (settings.alignDelimiters !== false) {
      size = before.length + size + after.length;

      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size;
      }

      sizes[columnIndex] = size;
    }

    row[columnIndex] = cell;
  }

  // Inject the alignment row.
  cellMatrix.splice(1, 0, row);
  sizeMatrix.splice(1, 0, sizes);

  rowIndex = -1;
  /** @type {Array<string>} */
  const lines = [];

  while (++rowIndex < cellMatrix.length) {
    const row = cellMatrix[rowIndex];
    const sizes = sizeMatrix[rowIndex];
    columnIndex = -1;
    /** @type {Array<string>} */
    const line = [];

    while (++columnIndex < mostCellsPerRow) {
      const cell = row[columnIndex] || '';
      let before = '';
      let after = '';

      if (settings.alignDelimiters !== false) {
        const size =
          longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0);
        const code = alignments[columnIndex];

        if (code === 114 /* `r` */) {
          before = ' '.repeat(size);
        } else if (code === 99 /* `c` */) {
          if (size % 2) {
            before = ' '.repeat(size / 2 + 0.5);
            after = ' '.repeat(size / 2 - 0.5);
          } else {
            before = ' '.repeat(size / 2);
            after = before;
          }
        } else {
          after = ' '.repeat(size);
        }
      }

      if (settings.delimiterStart !== false && !columnIndex) {
        line.push('|');
      }

      if (
        settings.padding !== false &&
        // Don’t add the opening space if we’re not aligning and the cell is
        // empty: there will be a closing space.
        !(settings.alignDelimiters === false && cell === '') &&
        (settings.delimiterStart !== false || columnIndex)
      ) {
        line.push(' ');
      }

      if (settings.alignDelimiters !== false) {
        line.push(before);
      }

      line.push(cell);

      if (settings.alignDelimiters !== false) {
        line.push(after);
      }

      if (settings.padding !== false) {
        line.push(' ');
      }

      if (
        settings.delimiterEnd !== false ||
        columnIndex !== mostCellsPerRow - 1
      ) {
        line.push('|');
      }
    }

    lines.push(
      settings.delimiterEnd === false
        ? line.join('').replace(/ +$/, '')
        : line.join('')
    );
  }

  return lines.join('\n')
}

/**
 * @param {string | null | undefined} [value]
 *   Value to serialize.
 * @returns {string}
 *   Result.
 */
function serialize(value) {
  return value === null || value === undefined ? '' : String(value)
}

/**
 * @param {string | null | undefined} value
 *   Value.
 * @returns {number}
 *   Alignment.
 */
function toAlignment(value) {
  const code = typeof value === 'string' ? value.codePointAt(0) : 0;

  return code === 67 /* `C` */ || code === 99 /* `c` */
    ? 99 /* `c` */
    : code === 76 /* `L` */ || code === 108 /* `l` */
      ? 108 /* `l` */
      : code === 82 /* `R` */ || code === 114 /* `r` */
        ? 114 /* `r` */
        : 0
}

/**
 * @import {Blockquote, Parents} from 'mdast'
 * @import {Info, Map, State} from 'mdast-util-to-markdown'
 */

/**
 * @param {Blockquote} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function blockquote(node, _, state, info) {
  const exit = state.enter('blockquote');
  const tracker = state.createTracker(info);
  tracker.move('> ');
  tracker.shift(2);
  const value = state.indentLines(
    state.containerFlow(node, tracker.current()),
    map$1
  );
  exit();
  return value
}

/** @type {Map} */
function map$1(line, _, blank) {
  return '>' + (blank ? '' : ' ') + line
}

/**
 * @import {ConstructName, Unsafe} from 'mdast-util-to-markdown'
 */

/**
 * @param {Array<ConstructName>} stack
 * @param {Unsafe} pattern
 * @returns {boolean}
 */
function patternInScope(stack, pattern) {
  return (
    listInScope(stack, pattern.inConstruct, true) &&
    !listInScope(stack, pattern.notInConstruct, false)
  )
}

/**
 * @param {Array<ConstructName>} stack
 * @param {Unsafe['inConstruct']} list
 * @param {boolean} none
 * @returns {boolean}
 */
function listInScope(stack, list, none) {
  if (typeof list === 'string') {
    list = [list];
  }

  if (!list || list.length === 0) {
    return none
  }

  let index = -1;

  while (++index < list.length) {
    if (stack.includes(list[index])) {
      return true
    }
  }

  return false
}

/**
 * @import {Break, Parents} from 'mdast'
 * @import {Info, State} from 'mdast-util-to-markdown'
 */


/**
 * @param {Break} _
 * @param {Parents | undefined} _1
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function hardBreak(_, _1, state, info) {
  let index = -1;

  while (++index < state.unsafe.length) {
    // If we can’t put eols in this construct (setext headings, tables), use a
    // space instead.
    if (
      state.unsafe[index].character === '\n' &&
      patternInScope(state.stack, state.unsafe[index])
    ) {
      return /[ \t]/.test(info.before) ? '' : ' '
    }
  }

  return '\\\n'
}

/**
 * Get the count of the longest repeating streak of `substring` in `value`.
 *
 * @param {string} value
 *   Content to search in.
 * @param {string} substring
 *   Substring to look for, typically one character.
 * @returns {number}
 *   Count of most frequent adjacent `substring`s in `value`.
 */
function longestStreak(value, substring) {
  const source = String(value);
  let index = source.indexOf(substring);
  let expected = index;
  let count = 0;
  let max = 0;

  if (typeof substring !== 'string') {
    throw new TypeError('Expected substring')
  }

  while (index !== -1) {
    if (index === expected) {
      if (++count > max) {
        max = count;
      }
    } else {
      count = 1;
    }

    expected = index + substring.length;
    index = source.indexOf(substring, expected);
  }

  return max
}

/**
 * @import {State} from 'mdast-util-to-markdown'
 * @import {Code} from 'mdast'
 */

/**
 * @param {Code} node
 * @param {State} state
 * @returns {boolean}
 */
function formatCodeAsIndented(node, state) {
  return Boolean(
    state.options.fences === false &&
      node.value &&
      // If there’s no info…
      !node.lang &&
      // And there’s a non-whitespace character…
      /[^ \r\n]/.test(node.value) &&
      // And the value doesn’t start or end in a blank…
      !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node.value)
  )
}

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */

/**
 * @param {State} state
 * @returns {Exclude<Options['fence'], null | undefined>}
 */
function checkFence(state) {
  const marker = state.options.fence || '`';

  if (marker !== '`' && marker !== '~') {
    throw new Error(
      'Cannot serialize code with `' +
        marker +
        '` for `options.fence`, expected `` ` `` or `~`'
    )
  }

  return marker
}

/**
 * @import {Info, Map, State} from 'mdast-util-to-markdown'
 * @import {Code, Parents} from 'mdast'
 */


/**
 * @param {Code} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function code$1(node, _, state, info) {
  const marker = checkFence(state);
  const raw = node.value || '';
  const suffix = marker === '`' ? 'GraveAccent' : 'Tilde';

  if (formatCodeAsIndented(node, state)) {
    const exit = state.enter('codeIndented');
    const value = state.indentLines(raw, map);
    exit();
    return value
  }

  const tracker = state.createTracker(info);
  const sequence = marker.repeat(Math.max(longestStreak(raw, marker) + 1, 3));
  const exit = state.enter('codeFenced');
  let value = tracker.move(sequence);

  if (node.lang) {
    const subexit = state.enter(`codeFencedLang${suffix}`);
    value += tracker.move(
      state.safe(node.lang, {
        before: value,
        after: ' ',
        encode: ['`'],
        ...tracker.current()
      })
    );
    subexit();
  }

  if (node.lang && node.meta) {
    const subexit = state.enter(`codeFencedMeta${suffix}`);
    value += tracker.move(' ');
    value += tracker.move(
      state.safe(node.meta, {
        before: value,
        after: '\n',
        encode: ['`'],
        ...tracker.current()
      })
    );
    subexit();
  }

  value += tracker.move('\n');

  if (raw) {
    value += tracker.move(raw + '\n');
  }

  value += tracker.move(sequence);
  exit();
  return value
}

/** @type {Map} */
function map(line, _, blank) {
  return (blank ? '' : '    ') + line
}

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */

/**
 * @param {State} state
 * @returns {Exclude<Options['quote'], null | undefined>}
 */
function checkQuote(state) {
  const marker = state.options.quote || '"';

  if (marker !== '"' && marker !== "'") {
    throw new Error(
      'Cannot serialize title with `' +
        marker +
        '` for `options.quote`, expected `"`, or `\'`'
    )
  }

  return marker
}

/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Definition, Parents} from 'mdast'
 */


/**
 * @param {Definition} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function definition(node, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? 'Quote' : 'Apostrophe';
  const exit = state.enter('definition');
  let subexit = state.enter('label');
  const tracker = state.createTracker(info);
  let value = tracker.move('[');
  value += tracker.move(
    state.safe(state.associationId(node), {
      before: value,
      after: ']',
      ...tracker.current()
    })
  );
  value += tracker.move(']: ');

  subexit();

  if (
    // If there’s no url, or…
    !node.url ||
    // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node.url)
  ) {
    subexit = state.enter('destinationLiteral');
    value += tracker.move('<');
    value += tracker.move(
      state.safe(node.url, {before: value, after: '>', ...tracker.current()})
    );
    value += tracker.move('>');
  } else {
    // No whitespace, raw is prettier.
    subexit = state.enter('destinationRaw');
    value += tracker.move(
      state.safe(node.url, {
        before: value,
        after: node.title ? ' ' : '\n',
        ...tracker.current()
      })
    );
  }

  subexit();

  if (node.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(' ' + quote);
    value += tracker.move(
      state.safe(node.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }

  exit();

  return value
}

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */

/**
 * @param {State} state
 * @returns {Exclude<Options['emphasis'], null | undefined>}
 */
function checkEmphasis(state) {
  const marker = state.options.emphasis || '*';

  if (marker !== '*' && marker !== '_') {
    throw new Error(
      'Cannot serialize emphasis with `' +
        marker +
        '` for `options.emphasis`, expected `*`, or `_`'
    )
  }

  return marker
}

/**
 * Encode a code point as a character reference.
 *
 * @param {number} code
 *   Code point to encode.
 * @returns {string}
 *   Encoded character reference.
 */
function encodeCharacterReference(code) {
  return '&#x' + code.toString(16).toUpperCase() + ';'
}

/**
 * @import {EncodeSides} from '../types.js'
 */


/**
 * Check whether to encode (as a character reference) the characters
 * surrounding an attention run.
 *
 * Which characters are around an attention run influence whether it works or
 * not.
 *
 * See <https://github.com/orgs/syntax-tree/discussions/60> for more info.
 * See this markdown in a particular renderer to see what works:
 *
 * ```markdown
 * |                         | A (letter inside) | B (punctuation inside) | C (whitespace inside) | D (nothing inside) |
 * | ----------------------- | ----------------- | ---------------------- | --------------------- | ------------------ |
 * | 1 (letter outside)      | x*y*z             | x*.*z                  | x* *z                 | x**z               |
 * | 2 (punctuation outside) | .*y*.             | .*.*.                  | .* *.                 | .**.               |
 * | 3 (whitespace outside)  | x *y* z           | x *.* z                | x * * z               | x ** z             |
 * | 4 (nothing outside)     | *x*               | *.*                    | * *                   | **                 |
 * ```
 *
 * @param {number} outside
 *   Code point on the outer side of the run.
 * @param {number} inside
 *   Code point on the inner side of the run.
 * @param {'*' | '_'} marker
 *   Marker of the run.
 *   Underscores are handled more strictly (they form less often) than
 *   asterisks.
 * @returns {EncodeSides}
 *   Whether to encode characters.
 */
// Important: punctuation must never be encoded.
// Punctuation is solely used by markdown constructs.
// And by encoding itself.
// Encoding them will break constructs or double encode things.
function encodeInfo(outside, inside, marker) {
  const outsideKind = classifyCharacter(outside);
  const insideKind = classifyCharacter(inside);

  // Letter outside:
  if (outsideKind === undefined) {
    return insideKind === undefined
      ? // Letter inside:
        // we have to encode *both* letters for `_` as it is looser.
        // it already forms for `*` (and GFMs `~`).
        marker === '_'
        ? {inside: true, outside: true}
        : {inside: false, outside: false}
      : insideKind === 1
        ? // Whitespace inside: encode both (letter, whitespace).
          {inside: true, outside: true}
        : // Punctuation inside: encode outer (letter)
          {inside: false, outside: true}
  }

  // Whitespace outside:
  if (outsideKind === 1) {
    return insideKind === undefined
      ? // Letter inside: already forms.
        {inside: false, outside: false}
      : insideKind === 1
        ? // Whitespace inside: encode both (whitespace).
          {inside: true, outside: true}
        : // Punctuation inside: already forms.
          {inside: false, outside: false}
  }

  // Punctuation outside:
  return insideKind === undefined
    ? // Letter inside: already forms.
      {inside: false, outside: false}
    : insideKind === 1
      ? // Whitespace inside: encode inner (whitespace).
        {inside: true, outside: false}
      : // Punctuation inside: already forms.
        {inside: false, outside: false}
}

/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Emphasis, Parents} from 'mdast'
 */


emphasis.peek = emphasisPeek;

/**
 * @param {Emphasis} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function emphasis(node, _, state, info) {
  const marker = checkEmphasis(state);
  const exit = state.enter('emphasis');
  const tracker = state.createTracker(info);
  const before = tracker.move(marker);

  let between = tracker.move(
    state.containerPhrasing(node, {
      after: marker,
      before,
      ...tracker.current()
    })
  );
  const betweenHead = between.charCodeAt(0);
  const open = encodeInfo(
    info.before.charCodeAt(info.before.length - 1),
    betweenHead,
    marker
  );

  if (open.inside) {
    between = encodeCharacterReference(betweenHead) + between.slice(1);
  }

  const betweenTail = between.charCodeAt(between.length - 1);
  const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);

  if (close.inside) {
    between = between.slice(0, -1) + encodeCharacterReference(betweenTail);
  }

  const after = tracker.move(marker);

  exit();

  state.attentionEncodeSurroundingInfo = {
    after: close.outside,
    before: open.outside
  };
  return before + between + after
}

/**
 * @param {Emphasis} _
 * @param {Parents | undefined} _1
 * @param {State} state
 * @returns {string}
 */
function emphasisPeek(_, _1, state) {
  return state.options.emphasis || '*'
}

/**
 * @import {State} from 'mdast-util-to-markdown'
 * @import {Heading} from 'mdast'
 */


/**
 * @param {Heading} node
 * @param {State} state
 * @returns {boolean}
 */
function formatHeadingAsSetext(node, state) {
  let literalWithBreak = false;

  // Look for literals with a line break.
  // Note that this also
  visit(node, function (node) {
    if (
      ('value' in node && /\r?\n|\r/.test(node.value)) ||
      node.type === 'break'
    ) {
      literalWithBreak = true;
      return EXIT
    }
  });

  return Boolean(
    (!node.depth || node.depth < 3) &&
      toString$1(node) &&
      (state.options.setext || literalWithBreak)
  )
}

/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Heading, Parents} from 'mdast'
 */


/**
 * @param {Heading} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function heading(node, _, state, info) {
  const rank = Math.max(Math.min(6, node.depth || 1), 1);
  const tracker = state.createTracker(info);

  if (formatHeadingAsSetext(node, state)) {
    const exit = state.enter('headingSetext');
    const subexit = state.enter('phrasing');
    const value = state.containerPhrasing(node, {
      ...tracker.current(),
      before: '\n',
      after: '\n'
    });
    subexit();
    exit();

    return (
      value +
      '\n' +
      (rank === 1 ? '=' : '-').repeat(
        // The whole size…
        value.length -
          // Minus the position of the character after the last EOL (or
          // 0 if there is none)…
          (Math.max(value.lastIndexOf('\r'), value.lastIndexOf('\n')) + 1)
      )
    )
  }

  const sequence = '#'.repeat(rank);
  const exit = state.enter('headingAtx');
  const subexit = state.enter('phrasing');

  // Note: for proper tracking, we should reset the output positions when there
  // is no content returned, because then the space is not output.
  // Practically, in that case, there is no content, so it doesn’t matter that
  // we’ve tracked one too many characters.
  tracker.move(sequence + ' ');

  let value = state.containerPhrasing(node, {
    before: '# ',
    after: '\n',
    ...tracker.current()
  });

  if (/^[\t ]/.test(value)) {
    // To do: what effect has the character reference on tracking?
    value = encodeCharacterReference(value.charCodeAt(0)) + value.slice(1);
  }

  value = value ? sequence + ' ' + value : sequence;

  if (state.options.closeAtx) {
    value += ' ' + sequence;
  }

  subexit();
  exit();

  return value
}

/**
 * @import {Html} from 'mdast'
 */

html.peek = htmlPeek;

/**
 * @param {Html} node
 * @returns {string}
 */
function html(node) {
  return node.value || ''
}

/**
 * @returns {string}
 */
function htmlPeek() {
  return '<'
}

/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Image, Parents} from 'mdast'
 */


image.peek = imagePeek;

/**
 * @param {Image} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function image(node, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? 'Quote' : 'Apostrophe';
  const exit = state.enter('image');
  let subexit = state.enter('label');
  const tracker = state.createTracker(info);
  let value = tracker.move('![');
  value += tracker.move(
    state.safe(node.alt, {before: value, after: ']', ...tracker.current()})
  );
  value += tracker.move('](');

  subexit();

  if (
    // If there’s no url but there is a title…
    (!node.url && node.title) ||
    // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node.url)
  ) {
    subexit = state.enter('destinationLiteral');
    value += tracker.move('<');
    value += tracker.move(
      state.safe(node.url, {before: value, after: '>', ...tracker.current()})
    );
    value += tracker.move('>');
  } else {
    // No whitespace, raw is prettier.
    subexit = state.enter('destinationRaw');
    value += tracker.move(
      state.safe(node.url, {
        before: value,
        after: node.title ? ' ' : ')',
        ...tracker.current()
      })
    );
  }

  subexit();

  if (node.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(' ' + quote);
    value += tracker.move(
      state.safe(node.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }

  value += tracker.move(')');
  exit();

  return value
}

/**
 * @returns {string}
 */
function imagePeek() {
  return '!'
}

/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {ImageReference, Parents} from 'mdast'
 */

imageReference.peek = imageReferencePeek;

/**
 * @param {ImageReference} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function imageReference(node, _, state, info) {
  const type = node.referenceType;
  const exit = state.enter('imageReference');
  let subexit = state.enter('label');
  const tracker = state.createTracker(info);
  let value = tracker.move('![');
  const alt = state.safe(node.alt, {
    before: value,
    after: ']',
    ...tracker.current()
  });
  value += tracker.move(alt + '][');

  subexit();
  // Hide the fact that we’re in phrasing, because escapes don’t work.
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter('reference');
  // Note: for proper tracking, we should reset the output positions when we end
  // up making a `shortcut` reference, because then there is no brace output.
  // Practically, in that case, there is no content, so it doesn’t matter that
  // we’ve tracked one too many characters.
  const reference = state.safe(state.associationId(node), {
    before: value,
    after: ']',
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit();

  if (type === 'full' || !alt || alt !== reference) {
    value += tracker.move(reference + ']');
  } else if (type === 'shortcut') {
    // Remove the unwanted `[`.
    value = value.slice(0, -1);
  } else {
    value += tracker.move(']');
  }

  return value
}

/**
 * @returns {string}
 */
function imageReferencePeek() {
  return '!'
}

/**
 * @import {State} from 'mdast-util-to-markdown'
 * @import {InlineCode, Parents} from 'mdast'
 */

inlineCode.peek = inlineCodePeek;

/**
 * @param {InlineCode} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @returns {string}
 */
function inlineCode(node, _, state) {
  let value = node.value || '';
  let sequence = '`';
  let index = -1;

  // If there is a single grave accent on its own in the code, use a fence of
  // two.
  // If there are two in a row, use one.
  while (new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value)) {
    sequence += '`';
  }

  // If this is not just spaces or eols (tabs don’t count), and either the
  // first or last character are a space, eol, or tick, then pad with spaces.
  if (
    /[^ \r\n]/.test(value) &&
    ((/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value)) || /^`|`$/.test(value))
  ) {
    value = ' ' + value + ' ';
  }

  // We have a potential problem: certain characters after eols could result in
  // blocks being seen.
  // For example, if someone injected the string `'\n# b'`, then that would
  // result in an ATX heading.
  // We can’t escape characters in `inlineCode`, but because eols are
  // transformed to spaces when going from markdown to HTML anyway, we can swap
  // them out.
  while (++index < state.unsafe.length) {
    const pattern = state.unsafe[index];
    const expression = state.compilePattern(pattern);
    /** @type {RegExpExecArray | null} */
    let match;

    // Only look for `atBreak`s.
    // Btw: note that `atBreak` patterns will always start the regex at LF or
    // CR.
    if (!pattern.atBreak) continue

    while ((match = expression.exec(value))) {
      let position = match.index;

      // Support CRLF (patterns only look for one of the characters).
      if (
        value.charCodeAt(position) === 10 /* `\n` */ &&
        value.charCodeAt(position - 1) === 13 /* `\r` */
      ) {
        position--;
      }

      value = value.slice(0, position) + ' ' + value.slice(match.index + 1);
    }
  }

  return sequence + value + sequence
}

/**
 * @returns {string}
 */
function inlineCodePeek() {
  return '`'
}

/**
 * @import {State} from 'mdast-util-to-markdown'
 * @import {Link} from 'mdast'
 */


/**
 * @param {Link} node
 * @param {State} state
 * @returns {boolean}
 */
function formatLinkAsAutolink(node, state) {
  const raw = toString$1(node);

  return Boolean(
    !state.options.resourceLink &&
      // If there’s a url…
      node.url &&
      // And there’s a no title…
      !node.title &&
      // And the content of `node` is a single text node…
      node.children &&
      node.children.length === 1 &&
      node.children[0].type === 'text' &&
      // And if the url is the same as the content…
      (raw === node.url || 'mailto:' + raw === node.url) &&
      // And that starts w/ a protocol…
      /^[a-z][a-z+.-]+:/i.test(node.url) &&
      // And that doesn’t contain ASCII control codes (character escapes and
      // references don’t work), space, or angle brackets…
      !/[\0- <>\u007F]/.test(node.url)
  )
}

/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Link, Parents} from 'mdast'
 * @import {Exit} from '../types.js'
 */


link.peek = linkPeek;

/**
 * @param {Link} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function link(node, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? 'Quote' : 'Apostrophe';
  const tracker = state.createTracker(info);
  /** @type {Exit} */
  let exit;
  /** @type {Exit} */
  let subexit;

  if (formatLinkAsAutolink(node, state)) {
    // Hide the fact that we’re in phrasing, because escapes don’t work.
    const stack = state.stack;
    state.stack = [];
    exit = state.enter('autolink');
    let value = tracker.move('<');
    value += tracker.move(
      state.containerPhrasing(node, {
        before: value,
        after: '>',
        ...tracker.current()
      })
    );
    value += tracker.move('>');
    exit();
    state.stack = stack;
    return value
  }

  exit = state.enter('link');
  subexit = state.enter('label');
  let value = tracker.move('[');
  value += tracker.move(
    state.containerPhrasing(node, {
      before: value,
      after: '](',
      ...tracker.current()
    })
  );
  value += tracker.move('](');
  subexit();

  if (
    // If there’s no url but there is a title…
    (!node.url && node.title) ||
    // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node.url)
  ) {
    subexit = state.enter('destinationLiteral');
    value += tracker.move('<');
    value += tracker.move(
      state.safe(node.url, {before: value, after: '>', ...tracker.current()})
    );
    value += tracker.move('>');
  } else {
    // No whitespace, raw is prettier.
    subexit = state.enter('destinationRaw');
    value += tracker.move(
      state.safe(node.url, {
        before: value,
        after: node.title ? ' ' : ')',
        ...tracker.current()
      })
    );
  }

  subexit();

  if (node.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(' ' + quote);
    value += tracker.move(
      state.safe(node.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }

  value += tracker.move(')');

  exit();
  return value
}

/**
 * @param {Link} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @returns {string}
 */
function linkPeek(node, _, state) {
  return formatLinkAsAutolink(node, state) ? '<' : '['
}

/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {LinkReference, Parents} from 'mdast'
 */

linkReference.peek = linkReferencePeek;

/**
 * @param {LinkReference} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function linkReference(node, _, state, info) {
  const type = node.referenceType;
  const exit = state.enter('linkReference');
  let subexit = state.enter('label');
  const tracker = state.createTracker(info);
  let value = tracker.move('[');
  const text = state.containerPhrasing(node, {
    before: value,
    after: ']',
    ...tracker.current()
  });
  value += tracker.move(text + '][');

  subexit();
  // Hide the fact that we’re in phrasing, because escapes don’t work.
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter('reference');
  // Note: for proper tracking, we should reset the output positions when we end
  // up making a `shortcut` reference, because then there is no brace output.
  // Practically, in that case, there is no content, so it doesn’t matter that
  // we’ve tracked one too many characters.
  const reference = state.safe(state.associationId(node), {
    before: value,
    after: ']',
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit();

  if (type === 'full' || !text || text !== reference) {
    value += tracker.move(reference + ']');
  } else if (type === 'shortcut') {
    // Remove the unwanted `[`.
    value = value.slice(0, -1);
  } else {
    value += tracker.move(']');
  }

  return value
}

/**
 * @returns {string}
 */
function linkReferencePeek() {
  return '['
}

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */

/**
 * @param {State} state
 * @returns {Exclude<Options['bullet'], null | undefined>}
 */
function checkBullet(state) {
  const marker = state.options.bullet || '*';

  if (marker !== '*' && marker !== '+' && marker !== '-') {
    throw new Error(
      'Cannot serialize items with `' +
        marker +
        '` for `options.bullet`, expected `*`, `+`, or `-`'
    )
  }

  return marker
}

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */


/**
 * @param {State} state
 * @returns {Exclude<Options['bullet'], null | undefined>}
 */
function checkBulletOther(state) {
  const bullet = checkBullet(state);
  const bulletOther = state.options.bulletOther;

  if (!bulletOther) {
    return bullet === '*' ? '-' : '*'
  }

  if (bulletOther !== '*' && bulletOther !== '+' && bulletOther !== '-') {
    throw new Error(
      'Cannot serialize items with `' +
        bulletOther +
        '` for `options.bulletOther`, expected `*`, `+`, or `-`'
    )
  }

  if (bulletOther === bullet) {
    throw new Error(
      'Expected `bullet` (`' +
        bullet +
        '`) and `bulletOther` (`' +
        bulletOther +
        '`) to be different'
    )
  }

  return bulletOther
}

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */

/**
 * @param {State} state
 * @returns {Exclude<Options['bulletOrdered'], null | undefined>}
 */
function checkBulletOrdered(state) {
  const marker = state.options.bulletOrdered || '.';

  if (marker !== '.' && marker !== ')') {
    throw new Error(
      'Cannot serialize items with `' +
        marker +
        '` for `options.bulletOrdered`, expected `.` or `)`'
    )
  }

  return marker
}

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */

/**
 * @param {State} state
 * @returns {Exclude<Options['rule'], null | undefined>}
 */
function checkRule(state) {
  const marker = state.options.rule || '*';

  if (marker !== '*' && marker !== '-' && marker !== '_') {
    throw new Error(
      'Cannot serialize rules with `' +
        marker +
        '` for `options.rule`, expected `*`, `-`, or `_`'
    )
  }

  return marker
}

/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {List, Parents} from 'mdast'
 */


/**
 * @param {List} node
 * @param {Parents | undefined} parent
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function list(node, parent, state, info) {
  const exit = state.enter('list');
  const bulletCurrent = state.bulletCurrent;
  /** @type {string} */
  let bullet = node.ordered ? checkBulletOrdered(state) : checkBullet(state);
  /** @type {string} */
  const bulletOther = node.ordered
    ? bullet === '.'
      ? ')'
      : '.'
    : checkBulletOther(state);
  let useDifferentMarker =
    parent && state.bulletLastUsed ? bullet === state.bulletLastUsed : false;

  if (!node.ordered) {
    const firstListItem = node.children ? node.children[0] : undefined;

    // If there’s an empty first list item directly in two list items,
    // we have to use a different bullet:
    //
    // ```markdown
    // * - *
    // ```
    //
    // …because otherwise it would become one big thematic break.
    if (
      // Bullet could be used as a thematic break marker:
      (bullet === '*' || bullet === '-') &&
      // Empty first list item:
      firstListItem &&
      (!firstListItem.children || !firstListItem.children[0]) &&
      // Directly in two other list items:
      state.stack[state.stack.length - 1] === 'list' &&
      state.stack[state.stack.length - 2] === 'listItem' &&
      state.stack[state.stack.length - 3] === 'list' &&
      state.stack[state.stack.length - 4] === 'listItem' &&
      // That are each the first child.
      state.indexStack[state.indexStack.length - 1] === 0 &&
      state.indexStack[state.indexStack.length - 2] === 0 &&
      state.indexStack[state.indexStack.length - 3] === 0
    ) {
      useDifferentMarker = true;
    }

    // If there’s a thematic break at the start of the first list item,
    // we have to use a different bullet:
    //
    // ```markdown
    // * ---
    // ```
    //
    // …because otherwise it would become one big thematic break.
    if (checkRule(state) === bullet && firstListItem) {
      let index = -1;

      while (++index < node.children.length) {
        const item = node.children[index];

        if (
          item &&
          item.type === 'listItem' &&
          item.children &&
          item.children[0] &&
          item.children[0].type === 'thematicBreak'
        ) {
          useDifferentMarker = true;
          break
        }
      }
    }
  }

  if (useDifferentMarker) {
    bullet = bulletOther;
  }

  state.bulletCurrent = bullet;
  const value = state.containerFlow(node, info);
  state.bulletLastUsed = bullet;
  state.bulletCurrent = bulletCurrent;
  exit();
  return value
}

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */

/**
 * @param {State} state
 * @returns {Exclude<Options['listItemIndent'], null | undefined>}
 */
function checkListItemIndent(state) {
  const style = state.options.listItemIndent || 'one';

  if (style !== 'tab' && style !== 'one' && style !== 'mixed') {
    throw new Error(
      'Cannot serialize items with `' +
        style +
        '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`'
    )
  }

  return style
}

/**
 * @import {Info, Map, State} from 'mdast-util-to-markdown'
 * @import {ListItem, Parents} from 'mdast'
 */


/**
 * @param {ListItem} node
 * @param {Parents | undefined} parent
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function listItem(node, parent, state, info) {
  const listItemIndent = checkListItemIndent(state);
  let bullet = state.bulletCurrent || checkBullet(state);

  // Add the marker value for ordered lists.
  if (parent && parent.type === 'list' && parent.ordered) {
    bullet =
      (typeof parent.start === 'number' && parent.start > -1
        ? parent.start
        : 1) +
      (state.options.incrementListMarker === false
        ? 0
        : parent.children.indexOf(node)) +
      bullet;
  }

  let size = bullet.length + 1;

  if (
    listItemIndent === 'tab' ||
    (listItemIndent === 'mixed' &&
      ((parent && parent.type === 'list' && parent.spread) || node.spread))
  ) {
    size = Math.ceil(size / 4) * 4;
  }

  const tracker = state.createTracker(info);
  tracker.move(bullet + ' '.repeat(size - bullet.length));
  tracker.shift(size);
  const exit = state.enter('listItem');
  const value = state.indentLines(
    state.containerFlow(node, tracker.current()),
    map
  );
  exit();

  return value

  /** @type {Map} */
  function map(line, index, blank) {
    if (index) {
      return (blank ? '' : ' '.repeat(size)) + line
    }

    return (blank ? bullet : bullet + ' '.repeat(size - bullet.length)) + line
  }
}

/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Paragraph, Parents} from 'mdast'
 */

/**
 * @param {Paragraph} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function paragraph(node, _, state, info) {
  const exit = state.enter('paragraph');
  const subexit = state.enter('phrasing');
  const value = state.containerPhrasing(node, info);
  subexit();
  exit();
  return value
}

/**
 * @typedef {import('mdast').Html} Html
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 */


/**
 * Check if the given value is *phrasing content*.
 *
 * > 👉 **Note**: Excludes `html`, which can be both phrasing or flow.
 *
 * @param node
 *   Thing to check, typically `Node`.
 * @returns
 *   Whether `value` is phrasing content.
 */

const phrasing =
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  (
    convert([
      'break',
      'delete',
      'emphasis',
      // To do: next major: removed since footnotes were added to GFM.
      'footnote',
      'footnoteReference',
      'image',
      'imageReference',
      'inlineCode',
      // Enabled by `mdast-util-math`:
      'inlineMath',
      'link',
      'linkReference',
      // Enabled by `mdast-util-mdx`:
      'mdxJsxTextElement',
      // Enabled by `mdast-util-mdx`:
      'mdxTextExpression',
      'strong',
      'text',
      // Enabled by `mdast-util-directive`:
      'textDirective'
    ])
  );

/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Parents, Root} from 'mdast'
 */


/**
 * @param {Root} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function root$1(node, _, state, info) {
  // Note: `html` nodes are ambiguous.
  const hasPhrasing = node.children.some(function (d) {
    return phrasing(d)
  });

  const container = hasPhrasing ? state.containerPhrasing : state.containerFlow;
  return container.call(state, node, info)
}

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */

/**
 * @param {State} state
 * @returns {Exclude<Options['strong'], null | undefined>}
 */
function checkStrong(state) {
  const marker = state.options.strong || '*';

  if (marker !== '*' && marker !== '_') {
    throw new Error(
      'Cannot serialize strong with `' +
        marker +
        '` for `options.strong`, expected `*`, or `_`'
    )
  }

  return marker
}

/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Parents, Strong} from 'mdast'
 */


strong.peek = strongPeek;

/**
 * @param {Strong} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function strong(node, _, state, info) {
  const marker = checkStrong(state);
  const exit = state.enter('strong');
  const tracker = state.createTracker(info);
  const before = tracker.move(marker + marker);

  let between = tracker.move(
    state.containerPhrasing(node, {
      after: marker,
      before,
      ...tracker.current()
    })
  );
  const betweenHead = between.charCodeAt(0);
  const open = encodeInfo(
    info.before.charCodeAt(info.before.length - 1),
    betweenHead,
    marker
  );

  if (open.inside) {
    between = encodeCharacterReference(betweenHead) + between.slice(1);
  }

  const betweenTail = between.charCodeAt(between.length - 1);
  const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);

  if (close.inside) {
    between = between.slice(0, -1) + encodeCharacterReference(betweenTail);
  }

  const after = tracker.move(marker + marker);

  exit();

  state.attentionEncodeSurroundingInfo = {
    after: close.outside,
    before: open.outside
  };
  return before + between + after
}

/**
 * @param {Strong} _
 * @param {Parents | undefined} _1
 * @param {State} state
 * @returns {string}
 */
function strongPeek(_, _1, state) {
  return state.options.strong || '*'
}

/**
 * @import {Info, State} from 'mdast-util-to-markdown'
 * @import {Parents, Text} from 'mdast'
 */

/**
 * @param {Text} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
function text$2(node, _, state, info) {
  return state.safe(node.value, info)
}

/**
 * @import {Options, State} from 'mdast-util-to-markdown'
 */

/**
 * @param {State} state
 * @returns {Exclude<Options['ruleRepetition'], null | undefined>}
 */
function checkRuleRepetition(state) {
  const repetition = state.options.ruleRepetition || 3;

  if (repetition < 3) {
    throw new Error(
      'Cannot serialize rules with repetition `' +
        repetition +
        '` for `options.ruleRepetition`, expected `3` or more'
    )
  }

  return repetition
}

/**
 * @import {State} from 'mdast-util-to-markdown'
 * @import {Parents, ThematicBreak} from 'mdast'
 */


/**
 * @param {ThematicBreak} _
 * @param {Parents | undefined} _1
 * @param {State} state
 * @returns {string}
 */
function thematicBreak(_, _1, state) {
  const value = (
    checkRule(state) + (state.options.ruleSpaces ? ' ' : '')
  ).repeat(checkRuleRepetition(state));

  return state.options.ruleSpaces ? value.slice(0, -1) : value
}

/**
 * Default (CommonMark) handlers.
 */
const handle = {
  blockquote,
  break: hardBreak,
  code: code$1,
  definition,
  emphasis,
  hardBreak,
  heading,
  html,
  image,
  imageReference,
  inlineCode,
  link,
  linkReference,
  list,
  listItem,
  paragraph,
  root: root$1,
  strong,
  text: text$2,
  thematicBreak
};

/**
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('mdast').Table} Table
 * @typedef {import('mdast').TableCell} TableCell
 * @typedef {import('mdast').TableRow} TableRow
 *
 * @typedef {import('markdown-table').Options} MarkdownTableOptions
 *
 * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext
 * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
 * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
 *
 * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
 * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
 * @typedef {import('mdast-util-to-markdown').State} State
 * @typedef {import('mdast-util-to-markdown').Info} Info
 */


/**
 * Create an extension for `mdast-util-from-markdown` to enable GFM tables in
 * markdown.
 *
 * @returns {FromMarkdownExtension}
 *   Extension for `mdast-util-from-markdown` to enable GFM tables.
 */
function gfmTableFromMarkdown() {
  return {
    enter: {
      table: enterTable,
      tableData: enterCell,
      tableHeader: enterCell,
      tableRow: enterRow
    },
    exit: {
      codeText: exitCodeText,
      table: exitTable,
      tableData: exit,
      tableHeader: exit,
      tableRow: exit
    }
  }
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function enterTable(token) {
  const align = token._align;
  this.enter(
    {
      type: 'table',
      align: align.map(function (d) {
        return d === 'none' ? null : d
      }),
      children: []
    },
    token
  );
  this.data.inTable = true;
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exitTable(token) {
  this.exit(token);
  this.data.inTable = undefined;
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function enterRow(token) {
  this.enter({type: 'tableRow', children: []}, token);
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exit(token) {
  this.exit(token);
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function enterCell(token) {
  this.enter({type: 'tableCell', children: []}, token);
}

// Overwrite the default code text data handler to unescape escaped pipes when
// they are in tables.
/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exitCodeText(token) {
  let value = this.resume();

  if (this.data.inTable) {
    value = value.replace(/\\([\\|])/g, replace);
  }

  const node = this.stack[this.stack.length - 1];
  ok$1(node.type === 'inlineCode');
  node.value = value;
  this.exit(token);
}

/**
 * @param {string} $0
 * @param {string} $1
 * @returns {string}
 */
function replace($0, $1) {
  // Pipes work, backslashes don’t (but can’t escape pipes).
  return $1 === '|' ? $1 : $0
}

/**
 * Create an extension for `mdast-util-to-markdown` to enable GFM tables in
 * markdown.
 *
 * @param {Options | null | undefined} [options]
 *   Configuration.
 * @returns {ToMarkdownExtension}
 *   Extension for `mdast-util-to-markdown` to enable GFM tables.
 */
function gfmTableToMarkdown(options) {
  const settings = options || {};
  const padding = settings.tableCellPadding;
  const alignDelimiters = settings.tablePipeAlign;
  const stringLength = settings.stringLength;
  const around = padding ? ' ' : '|';

  return {
    unsafe: [
      {character: '\r', inConstruct: 'tableCell'},
      {character: '\n', inConstruct: 'tableCell'},
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      {atBreak: true, character: '|', after: '[\t :-]'},
      // A pipe in a cell must be encoded.
      {character: '|', inConstruct: 'tableCell'},
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      {atBreak: true, character: ':', after: '-'},
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      {atBreak: true, character: '-', after: '[:|-]'}
    ],
    handlers: {
      inlineCode: inlineCodeWithTable,
      table: handleTable,
      tableCell: handleTableCell,
      tableRow: handleTableRow
    }
  }

  /**
   * @type {ToMarkdownHandle}
   * @param {Table} node
   */
  function handleTable(node, _, state, info) {
    return serializeData(handleTableAsData(node, state, info), node.align)
  }

  /**
   * This function isn’t really used normally, because we handle rows at the
   * table level.
   * But, if someone passes in a table row, this ensures we make somewhat sense.
   *
   * @type {ToMarkdownHandle}
   * @param {TableRow} node
   */
  function handleTableRow(node, _, state, info) {
    const row = handleTableRowAsData(node, state, info);
    const value = serializeData([row]);
    // `markdown-table` will always add an align row
    return value.slice(0, value.indexOf('\n'))
  }

  /**
   * @type {ToMarkdownHandle}
   * @param {TableCell} node
   */
  function handleTableCell(node, _, state, info) {
    const exit = state.enter('tableCell');
    const subexit = state.enter('phrasing');
    const value = state.containerPhrasing(node, {
      ...info,
      before: around,
      after: around
    });
    subexit();
    exit();
    return value
  }

  /**
   * @param {Array<Array<string>>} matrix
   * @param {Array<string | null | undefined> | null | undefined} [align]
   */
  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength
    })
  }

  /**
   * @param {Table} node
   * @param {State} state
   * @param {Info} info
   */
  function handleTableAsData(node, state, info) {
    const children = node.children;
    let index = -1;
    /** @type {Array<Array<string>>} */
    const result = [];
    const subexit = state.enter('table');

    while (++index < children.length) {
      result[index] = handleTableRowAsData(children[index], state, info);
    }

    subexit();

    return result
  }

  /**
   * @param {TableRow} node
   * @param {State} state
   * @param {Info} info
   */
  function handleTableRowAsData(node, state, info) {
    const children = node.children;
    let index = -1;
    /** @type {Array<string>} */
    const result = [];
    const subexit = state.enter('tableRow');

    while (++index < children.length) {
      // Note: the positional info as used here is incorrect.
      // Making it correct would be impossible due to aligning cells?
      // And it would need copy/pasting `markdown-table` into this project.
      result[index] = handleTableCell(children[index], node, state, info);
    }

    subexit();

    return result
  }

  /**
   * @type {ToMarkdownHandle}
   * @param {InlineCode} node
   */
  function inlineCodeWithTable(node, parent, state) {
    let value = handle.inlineCode(node, parent, state);

    if (state.stack.includes('tableCell')) {
      value = value.replace(/\|/g, '\\$&');
    }

    return value
  }
}

/**
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext
 * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
 * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
 * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
 * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle
 */


/**
 * Create an extension for `mdast-util-from-markdown` to enable GFM task
 * list items in markdown.
 *
 * @returns {FromMarkdownExtension}
 *   Extension for `mdast-util-from-markdown` to enable GFM task list items.
 */
function gfmTaskListItemFromMarkdown() {
  return {
    exit: {
      taskListCheckValueChecked: exitCheck,
      taskListCheckValueUnchecked: exitCheck,
      paragraph: exitParagraphWithTaskListItem
    }
  }
}

/**
 * Create an extension for `mdast-util-to-markdown` to enable GFM task list
 * items in markdown.
 *
 * @returns {ToMarkdownExtension}
 *   Extension for `mdast-util-to-markdown` to enable GFM task list items.
 */
function gfmTaskListItemToMarkdown() {
  return {
    unsafe: [{atBreak: true, character: '-', after: '[:|-]'}],
    handlers: {listItem: listItemWithTaskListItem}
  }
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exitCheck(token) {
  // We’re always in a paragraph, in a list item.
  const node = this.stack[this.stack.length - 2];
  ok$1(node.type === 'listItem');
  node.checked = token.type === 'taskListCheckValueChecked';
}

/**
 * @this {CompileContext}
 * @type {FromMarkdownHandle}
 */
function exitParagraphWithTaskListItem(token) {
  const parent = this.stack[this.stack.length - 2];

  if (
    parent &&
    parent.type === 'listItem' &&
    typeof parent.checked === 'boolean'
  ) {
    const node = this.stack[this.stack.length - 1];
    ok$1(node.type === 'paragraph');
    const head = node.children[0];

    if (head && head.type === 'text') {
      const siblings = parent.children;
      let index = -1;
      /** @type {Paragraph | undefined} */
      let firstParaghraph;

      while (++index < siblings.length) {
        const sibling = siblings[index];
        if (sibling.type === 'paragraph') {
          firstParaghraph = sibling;
          break
        }
      }

      if (firstParaghraph === node) {
        // Must start with a space or a tab.
        head.value = head.value.slice(1);

        if (head.value.length === 0) {
          node.children.shift();
        } else if (
          node.position &&
          head.position &&
          typeof head.position.start.offset === 'number'
        ) {
          head.position.start.column++;
          head.position.start.offset++;
          node.position.start = Object.assign({}, head.position.start);
        }
      }
    }
  }

  this.exit(token);
}

/**
 * @type {ToMarkdownHandle}
 * @param {ListItem} node
 */
function listItemWithTaskListItem(node, parent, state, info) {
  const head = node.children[0];
  const checkable =
    typeof node.checked === 'boolean' && head && head.type === 'paragraph';
  const checkbox = '[' + (node.checked ? 'x' : ' ') + '] ';
  const tracker = state.createTracker(info);

  if (checkable) {
    tracker.move(checkbox);
  }

  let value = handle.listItem(node, parent, state, {
    ...info,
    ...tracker.current()
  });

  if (checkable) {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
  }

  return value

  /**
   * @param {string} $0
   * @returns {string}
   */
  function check($0) {
    return $0 + checkbox
  }
}

/**
 * @import {Extension as FromMarkdownExtension} from 'mdast-util-from-markdown'
 * @import {Options} from 'mdast-util-gfm'
 * @import {Options as ToMarkdownExtension} from 'mdast-util-to-markdown'
 */


/**
 * Create an extension for `mdast-util-from-markdown` to enable GFM (autolink
 * literals, footnotes, strikethrough, tables, tasklists).
 *
 * @returns {Array<FromMarkdownExtension>}
 *   Extension for `mdast-util-from-markdown` to enable GFM (autolink literals,
 *   footnotes, strikethrough, tables, tasklists).
 */
function gfmFromMarkdown() {
  return [
    gfmAutolinkLiteralFromMarkdown(),
    gfmFootnoteFromMarkdown(),
    gfmStrikethroughFromMarkdown(),
    gfmTableFromMarkdown(),
    gfmTaskListItemFromMarkdown()
  ]
}

/**
 * Create an extension for `mdast-util-to-markdown` to enable GFM (autolink
 * literals, footnotes, strikethrough, tables, tasklists).
 *
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {ToMarkdownExtension}
 *   Extension for `mdast-util-to-markdown` to enable GFM (autolink literals,
 *   footnotes, strikethrough, tables, tasklists).
 */
function gfmToMarkdown(options) {
  return {
    extensions: [
      gfmAutolinkLiteralToMarkdown(),
      gfmFootnoteToMarkdown(options),
      gfmStrikethroughToMarkdown(),
      gfmTableToMarkdown(options),
      gfmTaskListItemToMarkdown()
    ]
  }
}

/**
 * @import {Code, ConstructRecord, Event, Extension, Previous, State, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */

const wwwPrefix = {
  tokenize: tokenizeWwwPrefix,
  partial: true
};
const domain = {
  tokenize: tokenizeDomain,
  partial: true
};
const path = {
  tokenize: tokenizePath,
  partial: true
};
const trail = {
  tokenize: tokenizeTrail,
  partial: true
};
const emailDomainDotTrail = {
  tokenize: tokenizeEmailDomainDotTrail,
  partial: true
};
const wwwAutolink = {
  name: 'wwwAutolink',
  tokenize: tokenizeWwwAutolink,
  previous: previousWww
};
const protocolAutolink = {
  name: 'protocolAutolink',
  tokenize: tokenizeProtocolAutolink,
  previous: previousProtocol
};
const emailAutolink = {
  name: 'emailAutolink',
  tokenize: tokenizeEmailAutolink,
  previous: previousEmail
};

/** @type {ConstructRecord} */
const text$1 = {};

/**
 * Create an extension for `micromark` to support GitHub autolink literal
 * syntax.
 *
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions` to enable GFM
 *   autolink literal syntax.
 */
function gfmAutolinkLiteral() {
  return {
    text: text$1
  };
}

/** @type {Code} */
let code = 48;

// Add alphanumerics.
while (code < 123) {
  text$1[code] = emailAutolink;
  code++;
  if (code === 58) code = 65;else if (code === 91) code = 97;
}
text$1[43] = emailAutolink;
text$1[45] = emailAutolink;
text$1[46] = emailAutolink;
text$1[95] = emailAutolink;
text$1[72] = [emailAutolink, protocolAutolink];
text$1[104] = [emailAutolink, protocolAutolink];
text$1[87] = [emailAutolink, wwwAutolink];
text$1[119] = [emailAutolink, wwwAutolink];

// To do: perform email autolink literals on events, afterwards.
// That’s where `markdown-rs` and `cmark-gfm` perform it.
// It should look for `@`, then for atext backwards, and then for a label
// forwards.
// To do: `mailto:`, `xmpp:` protocol as prefix.

/**
 * Email autolink literal.
 *
 * ```markdown
 * > | a contact@example.org b
 *       ^^^^^^^^^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeEmailAutolink(effects, ok, nok) {
  const self = this;
  /** @type {boolean | undefined} */
  let dot;
  /** @type {boolean} */
  let data;
  return start;

  /**
   * Start of email autolink literal.
   *
   * ```markdown
   * > | a contact@example.org b
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (!gfmAtext(code) || !previousEmail.call(self, self.previous) || previousUnbalanced(self.events)) {
      return nok(code);
    }
    effects.enter('literalAutolink');
    effects.enter('literalAutolinkEmail');
    return atext(code);
  }

  /**
   * In email atext.
   *
   * ```markdown
   * > | a contact@example.org b
   *       ^
   * ```
   *
   * @type {State}
   */
  function atext(code) {
    if (gfmAtext(code)) {
      effects.consume(code);
      return atext;
    }
    if (code === 64) {
      effects.consume(code);
      return emailDomain;
    }
    return nok(code);
  }

  /**
   * In email domain.
   *
   * The reference code is a bit overly complex as it handles the `@`, of which
   * there may be just one.
   * Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L318>
   *
   * ```markdown
   * > | a contact@example.org b
   *               ^
   * ```
   *
   * @type {State}
   */
  function emailDomain(code) {
    // Dot followed by alphanumerical (not `-` or `_`).
    if (code === 46) {
      return effects.check(emailDomainDotTrail, emailDomainAfter, emailDomainDot)(code);
    }

    // Alphanumerical, `-`, and `_`.
    if (code === 45 || code === 95 || asciiAlphanumeric(code)) {
      data = true;
      effects.consume(code);
      return emailDomain;
    }

    // To do: `/` if xmpp.

    // Note: normally we’d truncate trailing punctuation from the link.
    // However, email autolink literals cannot contain any of those markers,
    // except for `.`, but that can only occur if it isn’t trailing.
    // So we can ignore truncating!
    return emailDomainAfter(code);
  }

  /**
   * In email domain, on dot that is not a trail.
   *
   * ```markdown
   * > | a contact@example.org b
   *                      ^
   * ```
   *
   * @type {State}
   */
  function emailDomainDot(code) {
    effects.consume(code);
    dot = true;
    return emailDomain;
  }

  /**
   * After email domain.
   *
   * ```markdown
   * > | a contact@example.org b
   *                          ^
   * ```
   *
   * @type {State}
   */
  function emailDomainAfter(code) {
    // Domain must not be empty, must include a dot, and must end in alphabetical.
    // Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L332>.
    if (data && dot && asciiAlpha(self.previous)) {
      effects.exit('literalAutolinkEmail');
      effects.exit('literalAutolink');
      return ok(code);
    }
    return nok(code);
  }
}

/**
 * `www` autolink literal.
 *
 * ```markdown
 * > | a www.example.org b
 *       ^^^^^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeWwwAutolink(effects, ok, nok) {
  const self = this;
  return wwwStart;

  /**
   * Start of www autolink literal.
   *
   * ```markdown
   * > | www.example.com/a?b#c
   *     ^
   * ```
   *
   * @type {State}
   */
  function wwwStart(code) {
    if (code !== 87 && code !== 119 || !previousWww.call(self, self.previous) || previousUnbalanced(self.events)) {
      return nok(code);
    }
    effects.enter('literalAutolink');
    effects.enter('literalAutolinkWww');
    // Note: we *check*, so we can discard the `www.` we parsed.
    // If it worked, we consider it as a part of the domain.
    return effects.check(wwwPrefix, effects.attempt(domain, effects.attempt(path, wwwAfter), nok), nok)(code);
  }

  /**
   * After a www autolink literal.
   *
   * ```markdown
   * > | www.example.com/a?b#c
   *                          ^
   * ```
   *
   * @type {State}
   */
  function wwwAfter(code) {
    effects.exit('literalAutolinkWww');
    effects.exit('literalAutolink');
    return ok(code);
  }
}

/**
 * Protocol autolink literal.
 *
 * ```markdown
 * > | a https://example.org b
 *       ^^^^^^^^^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeProtocolAutolink(effects, ok, nok) {
  const self = this;
  let buffer = '';
  let seen = false;
  return protocolStart;

  /**
   * Start of protocol autolink literal.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *     ^
   * ```
   *
   * @type {State}
   */
  function protocolStart(code) {
    if ((code === 72 || code === 104) && previousProtocol.call(self, self.previous) && !previousUnbalanced(self.events)) {
      effects.enter('literalAutolink');
      effects.enter('literalAutolinkHttp');
      buffer += String.fromCodePoint(code);
      effects.consume(code);
      return protocolPrefixInside;
    }
    return nok(code);
  }

  /**
   * In protocol.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *     ^^^^^
   * ```
   *
   * @type {State}
   */
  function protocolPrefixInside(code) {
    // `5` is size of `https`
    if (asciiAlpha(code) && buffer.length < 5) {
      // @ts-expect-error: definitely number.
      buffer += String.fromCodePoint(code);
      effects.consume(code);
      return protocolPrefixInside;
    }
    if (code === 58) {
      const protocol = buffer.toLowerCase();
      if (protocol === 'http' || protocol === 'https') {
        effects.consume(code);
        return protocolSlashesInside;
      }
    }
    return nok(code);
  }

  /**
   * In slashes.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *           ^^
   * ```
   *
   * @type {State}
   */
  function protocolSlashesInside(code) {
    if (code === 47) {
      effects.consume(code);
      if (seen) {
        return afterProtocol;
      }
      seen = true;
      return protocolSlashesInside;
    }
    return nok(code);
  }

  /**
   * After protocol, before domain.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *             ^
   * ```
   *
   * @type {State}
   */
  function afterProtocol(code) {
    // To do: this is different from `markdown-rs`:
    // https://github.com/wooorm/markdown-rs/blob/b3a921c761309ae00a51fe348d8a43adbc54b518/src/construct/gfm_autolink_literal.rs#L172-L182
    return code === null || asciiControl(code) || markdownLineEndingOrSpace(code) || unicodeWhitespace(code) || unicodePunctuation(code) ? nok(code) : effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code);
  }

  /**
   * After a protocol autolink literal.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *                              ^
   * ```
   *
   * @type {State}
   */
  function protocolAfter(code) {
    effects.exit('literalAutolinkHttp');
    effects.exit('literalAutolink');
    return ok(code);
  }
}

/**
 * `www` prefix.
 *
 * ```markdown
 * > | a www.example.org b
 *       ^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeWwwPrefix(effects, ok, nok) {
  let size = 0;
  return wwwPrefixInside;

  /**
   * In www prefix.
   *
   * ```markdown
   * > | www.example.com
   *     ^^^^
   * ```
   *
   * @type {State}
   */
  function wwwPrefixInside(code) {
    if ((code === 87 || code === 119) && size < 3) {
      size++;
      effects.consume(code);
      return wwwPrefixInside;
    }
    if (code === 46 && size === 3) {
      effects.consume(code);
      return wwwPrefixAfter;
    }
    return nok(code);
  }

  /**
   * After www prefix.
   *
   * ```markdown
   * > | www.example.com
   *         ^
   * ```
   *
   * @type {State}
   */
  function wwwPrefixAfter(code) {
    // If there is *anything*, we can link.
    return code === null ? nok(code) : ok(code);
  }
}

/**
 * Domain.
 *
 * ```markdown
 * > | a https://example.org b
 *               ^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDomain(effects, ok, nok) {
  /** @type {boolean | undefined} */
  let underscoreInLastSegment;
  /** @type {boolean | undefined} */
  let underscoreInLastLastSegment;
  /** @type {boolean | undefined} */
  let seen;
  return domainInside;

  /**
   * In domain.
   *
   * ```markdown
   * > | https://example.com/a
   *             ^^^^^^^^^^^
   * ```
   *
   * @type {State}
   */
  function domainInside(code) {
    // Check whether this marker, which is a trailing punctuation
    // marker, optionally followed by more trailing markers, and then
    // followed by an end.
    if (code === 46 || code === 95) {
      return effects.check(trail, domainAfter, domainAtPunctuation)(code);
    }

    // GH documents that only alphanumerics (other than `-`, `.`, and `_`) can
    // occur, which sounds like ASCII only, but they also support `www.點看.com`,
    // so that’s Unicode.
    // Instead of some new production for Unicode alphanumerics, markdown
    // already has that for Unicode punctuation and whitespace, so use those.
    // Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L12>.
    if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code) || code !== 45 && unicodePunctuation(code)) {
      return domainAfter(code);
    }
    seen = true;
    effects.consume(code);
    return domainInside;
  }

  /**
   * In domain, at potential trailing punctuation, that was not trailing.
   *
   * ```markdown
   * > | https://example.com
   *                    ^
   * ```
   *
   * @type {State}
   */
  function domainAtPunctuation(code) {
    // There is an underscore in the last segment of the domain
    if (code === 95) {
      underscoreInLastSegment = true;
    }
    // Otherwise, it’s a `.`: save the last segment underscore in the
    // penultimate segment slot.
    else {
      underscoreInLastLastSegment = underscoreInLastSegment;
      underscoreInLastSegment = undefined;
    }
    effects.consume(code);
    return domainInside;
  }

  /**
   * After domain.
   *
   * ```markdown
   * > | https://example.com/a
   *                        ^
   * ```
   *
   * @type {State} */
  function domainAfter(code) {
    // Note: that’s GH says a dot is needed, but it’s not true:
    // <https://github.com/github/cmark-gfm/issues/279>
    if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) {
      return nok(code);
    }
    return ok(code);
  }
}

/**
 * Path.
 *
 * ```markdown
 * > | a https://example.org/stuff b
 *                          ^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizePath(effects, ok) {
  let sizeOpen = 0;
  let sizeClose = 0;
  return pathInside;

  /**
   * In path.
   *
   * ```markdown
   * > | https://example.com/a
   *                        ^^
   * ```
   *
   * @type {State}
   */
  function pathInside(code) {
    if (code === 40) {
      sizeOpen++;
      effects.consume(code);
      return pathInside;
    }

    // To do: `markdown-rs` also needs this.
    // If this is a paren, and there are less closings than openings,
    // we don’t check for a trail.
    if (code === 41 && sizeClose < sizeOpen) {
      return pathAtPunctuation(code);
    }

    // Check whether this trailing punctuation marker is optionally
    // followed by more trailing markers, and then followed
    // by an end.
    if (code === 33 || code === 34 || code === 38 || code === 39 || code === 41 || code === 42 || code === 44 || code === 46 || code === 58 || code === 59 || code === 60 || code === 63 || code === 93 || code === 95 || code === 126) {
      return effects.check(trail, ok, pathAtPunctuation)(code);
    }
    if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
      return ok(code);
    }
    effects.consume(code);
    return pathInside;
  }

  /**
   * In path, at potential trailing punctuation, that was not trailing.
   *
   * ```markdown
   * > | https://example.com/a"b
   *                          ^
   * ```
   *
   * @type {State}
   */
  function pathAtPunctuation(code) {
    // Count closing parens.
    if (code === 41) {
      sizeClose++;
    }
    effects.consume(code);
    return pathInside;
  }
}

/**
 * Trail.
 *
 * This calls `ok` if this *is* the trail, followed by an end, which means
 * the entire trail is not part of the link.
 * It calls `nok` if this *is* part of the link.
 *
 * ```markdown
 * > | https://example.com").
 *                        ^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeTrail(effects, ok, nok) {
  return trail;

  /**
   * In trail of domain or path.
   *
   * ```markdown
   * > | https://example.com").
   *                        ^
   * ```
   *
   * @type {State}
   */
  function trail(code) {
    // Regular trailing punctuation.
    if (code === 33 || code === 34 || code === 39 || code === 41 || code === 42 || code === 44 || code === 46 || code === 58 || code === 59 || code === 63 || code === 95 || code === 126) {
      effects.consume(code);
      return trail;
    }

    // `&` followed by one or more alphabeticals and then a `;`, is
    // as a whole considered as trailing punctuation.
    // In all other cases, it is considered as continuation of the URL.
    if (code === 38) {
      effects.consume(code);
      return trailCharacterReferenceStart;
    }

    // Needed because we allow literals after `[`, as we fix:
    // <https://github.com/github/cmark-gfm/issues/278>.
    // Check that it is not followed by `(` or `[`.
    if (code === 93) {
      effects.consume(code);
      return trailBracketAfter;
    }
    if (
    // `<` is an end.
    code === 60 ||
    // So is whitespace.
    code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
      return ok(code);
    }
    return nok(code);
  }

  /**
   * In trail, after `]`.
   *
   * > 👉 **Note**: this deviates from `cmark-gfm` to fix a bug.
   * > See end of <https://github.com/github/cmark-gfm/issues/278> for more.
   *
   * ```markdown
   * > | https://example.com](
   *                         ^
   * ```
   *
   * @type {State}
   */
  function trailBracketAfter(code) {
    // Whitespace or something that could start a resource or reference is the end.
    // Switch back to trail otherwise.
    if (code === null || code === 40 || code === 91 || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
      return ok(code);
    }
    return trail(code);
  }

  /**
   * In character-reference like trail, after `&`.
   *
   * ```markdown
   * > | https://example.com&amp;).
   *                         ^
   * ```
   *
   * @type {State}
   */
  function trailCharacterReferenceStart(code) {
    // When non-alpha, it’s not a trail.
    return asciiAlpha(code) ? trailCharacterReferenceInside(code) : nok(code);
  }

  /**
   * In character-reference like trail.
   *
   * ```markdown
   * > | https://example.com&amp;).
   *                         ^
   * ```
   *
   * @type {State}
   */
  function trailCharacterReferenceInside(code) {
    // Switch back to trail if this is well-formed.
    if (code === 59) {
      effects.consume(code);
      return trail;
    }
    if (asciiAlpha(code)) {
      effects.consume(code);
      return trailCharacterReferenceInside;
    }

    // It’s not a trail.
    return nok(code);
  }
}

/**
 * Dot in email domain trail.
 *
 * This calls `ok` if this *is* the trail, followed by an end, which means
 * the trail is not part of the link.
 * It calls `nok` if this *is* part of the link.
 *
 * ```markdown
 * > | contact@example.org.
 *                        ^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeEmailDomainDotTrail(effects, ok, nok) {
  return start;

  /**
   * Dot.
   *
   * ```markdown
   * > | contact@example.org.
   *                    ^   ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // Must be dot.
    effects.consume(code);
    return after;
  }

  /**
   * After dot.
   *
   * ```markdown
   * > | contact@example.org.
   *                     ^   ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    // Not a trail if alphanumeric.
    return asciiAlphanumeric(code) ? nok(code) : ok(code);
  }
}

/**
 * See:
 * <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L156>.
 *
 * @type {Previous}
 */
function previousWww(code) {
  return code === null || code === 40 || code === 42 || code === 95 || code === 91 || code === 93 || code === 126 || markdownLineEndingOrSpace(code);
}

/**
 * See:
 * <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L214>.
 *
 * @type {Previous}
 */
function previousProtocol(code) {
  return !asciiAlpha(code);
}

/**
 * @this {TokenizeContext}
 * @type {Previous}
 */
function previousEmail(code) {
  // Do not allow a slash “inside” atext.
  // The reference code is a bit weird, but that’s what it results in.
  // Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L307>.
  // Other than slash, every preceding character is allowed.
  return !(code === 47 || gfmAtext(code));
}

/**
 * @param {Code} code
 * @returns {boolean}
 */
function gfmAtext(code) {
  return code === 43 || code === 45 || code === 46 || code === 95 || asciiAlphanumeric(code);
}

/**
 * @param {Array<Event>} events
 * @returns {boolean}
 */
function previousUnbalanced(events) {
  let index = events.length;
  let result = false;
  while (index--) {
    const token = events[index][1];
    if ((token.type === 'labelLink' || token.type === 'labelImage') && !token._balanced) {
      result = true;
      break;
    }

    // If we’ve seen this token, and it was marked as not having any unbalanced
    // bracket before it, we can exit.
    if (token._gfmAutolinkLiteralWalkedInto) {
      result = false;
      break;
    }
  }
  if (events.length > 0 && !result) {
    // Mark the last token as “walked into” w/o finding
    // anything.
    events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
  }
  return result;
}

/**
 * @import {Event, Exiter, Extension, Resolver, State, Token, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */

const indent = {
  tokenize: tokenizeIndent,
  partial: true
};

// To do: micromark should support a `_hiddenGfmFootnoteSupport`, which only
// affects label start (image).
// That will let us drop `tokenizePotentialGfmFootnote*`.
// It currently has a `_hiddenFootnoteSupport`, which affects that and more.
// That can be removed when `micromark-extension-footnote` is archived.

/**
 * Create an extension for `micromark` to enable GFM footnote syntax.
 *
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions` to
 *   enable GFM footnote syntax.
 */
function gfmFootnote() {
  /** @type {Extension} */
  return {
    document: {
      [91]: {
        name: 'gfmFootnoteDefinition',
        tokenize: tokenizeDefinitionStart,
        continuation: {
          tokenize: tokenizeDefinitionContinuation
        },
        exit: gfmFootnoteDefinitionEnd
      }
    },
    text: {
      [91]: {
        name: 'gfmFootnoteCall',
        tokenize: tokenizeGfmFootnoteCall
      },
      [93]: {
        name: 'gfmPotentialFootnoteCall',
        add: 'after',
        tokenize: tokenizePotentialGfmFootnoteCall,
        resolveTo: resolveToPotentialGfmFootnoteCall
      }
    }
  };
}

// To do: remove after micromark update.
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizePotentialGfmFootnoteCall(effects, ok, nok) {
  const self = this;
  let index = self.events.length;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  /** @type {Token} */
  let labelStart;

  // Find an opening.
  while (index--) {
    const token = self.events[index][1];
    if (token.type === "labelImage") {
      labelStart = token;
      break;
    }

    // Exit if we’ve walked far enough.
    if (token.type === 'gfmFootnoteCall' || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") {
      break;
    }
  }
  return start;

  /**
   * @type {State}
   */
  function start(code) {
    if (!labelStart || !labelStart._balanced) {
      return nok(code);
    }
    const id = normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    }));
    if (id.codePointAt(0) !== 94 || !defined.includes(id.slice(1))) {
      return nok(code);
    }
    effects.enter('gfmFootnoteCallLabelMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteCallLabelMarker');
    return ok(code);
  }
}

// To do: remove after micromark update.
/** @type {Resolver} */
function resolveToPotentialGfmFootnoteCall(events, context) {
  let index = events.length;

  // Find an opening.
  while (index--) {
    if (events[index][1].type === "labelImage" && events[index][0] === 'enter') {
      events[index][1];
      break;
    }
  }
  // Change the `labelImageMarker` to a `data`.
  events[index + 1][1].type = "data";
  events[index + 3][1].type = 'gfmFootnoteCallLabelMarker';

  // The whole (without `!`):
  /** @type {Token} */
  const call = {
    type: 'gfmFootnoteCall',
    start: Object.assign({}, events[index + 3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  // The `^` marker
  /** @type {Token} */
  const marker = {
    type: 'gfmFootnoteCallMarker',
    start: Object.assign({}, events[index + 3][1].end),
    end: Object.assign({}, events[index + 3][1].end)
  };
  // Increment the end 1 character.
  marker.end.column++;
  marker.end.offset++;
  marker.end._bufferIndex++;
  /** @type {Token} */
  const string = {
    type: 'gfmFootnoteCallString',
    start: Object.assign({}, marker.end),
    end: Object.assign({}, events[events.length - 1][1].start)
  };
  /** @type {Token} */
  const chunk = {
    type: "chunkString",
    contentType: 'string',
    start: Object.assign({}, string.start),
    end: Object.assign({}, string.end)
  };

  /** @type {Array<Event>} */
  const replacement = [
  // Take the `labelImageMarker` (now `data`, the `!`)
  events[index + 1], events[index + 2], ['enter', call, context],
  // The `[`
  events[index + 3], events[index + 4],
  // The `^`.
  ['enter', marker, context], ['exit', marker, context],
  // Everything in between.
  ['enter', string, context], ['enter', chunk, context], ['exit', chunk, context], ['exit', string, context],
  // The ending (`]`, properly parsed and labelled).
  events[events.length - 2], events[events.length - 1], ['exit', call, context]];
  events.splice(index, events.length - index + 1, ...replacement);
  return events;
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeGfmFootnoteCall(effects, ok, nok) {
  const self = this;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let size = 0;
  /** @type {boolean} */
  let data;

  // Note: the implementation of `markdown-rs` is different, because it houses
  // core *and* extensions in one project.
  // Therefore, it can include footnote logic inside `label-end`.
  // We can’t do that, but luckily, we can parse footnotes in a simpler way than
  // needed for labels.
  return start;

  /**
   * Start of footnote label.
   *
   * ```markdown
   * > | a [^b] c
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('gfmFootnoteCall');
    effects.enter('gfmFootnoteCallLabelMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteCallLabelMarker');
    return callStart;
  }

  /**
   * After `[`, at `^`.
   *
   * ```markdown
   * > | a [^b] c
   *        ^
   * ```
   *
   * @type {State}
   */
  function callStart(code) {
    if (code !== 94) return nok(code);
    effects.enter('gfmFootnoteCallMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteCallMarker');
    effects.enter('gfmFootnoteCallString');
    effects.enter('chunkString').contentType = 'string';
    return callData;
  }

  /**
   * In label.
   *
   * ```markdown
   * > | a [^b] c
   *         ^
   * ```
   *
   * @type {State}
   */
  function callData(code) {
    if (
    // Too long.
    size > 999 ||
    // Closing brace with nothing.
    code === 93 && !data ||
    // Space or tab is not supported by GFM for some reason.
    // `\n` and `[` not being supported makes sense.
    code === null || code === 91 || markdownLineEndingOrSpace(code)) {
      return nok(code);
    }
    if (code === 93) {
      effects.exit('chunkString');
      const token = effects.exit('gfmFootnoteCallString');
      if (!defined.includes(normalizeIdentifier(self.sliceSerialize(token)))) {
        return nok(code);
      }
      effects.enter('gfmFootnoteCallLabelMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteCallLabelMarker');
      effects.exit('gfmFootnoteCall');
      return ok;
    }
    if (!markdownLineEndingOrSpace(code)) {
      data = true;
    }
    size++;
    effects.consume(code);
    return code === 92 ? callEscape : callData;
  }

  /**
   * On character after escape.
   *
   * ```markdown
   * > | a [^b\c] d
   *           ^
   * ```
   *
   * @type {State}
   */
  function callEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return callData;
    }
    return callData(code);
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDefinitionStart(effects, ok, nok) {
  const self = this;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  /** @type {string} */
  let identifier;
  let size = 0;
  /** @type {boolean | undefined} */
  let data;
  return start;

  /**
   * Start of GFM footnote definition.
   *
   * ```markdown
   * > | [^a]: b
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('gfmFootnoteDefinition')._container = true;
    effects.enter('gfmFootnoteDefinitionLabel');
    effects.enter('gfmFootnoteDefinitionLabelMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteDefinitionLabelMarker');
    return labelAtMarker;
  }

  /**
   * In label, at caret.
   *
   * ```markdown
   * > | [^a]: b
   *      ^
   * ```
   *
   * @type {State}
   */
  function labelAtMarker(code) {
    if (code === 94) {
      effects.enter('gfmFootnoteDefinitionMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteDefinitionMarker');
      effects.enter('gfmFootnoteDefinitionLabelString');
      effects.enter('chunkString').contentType = 'string';
      return labelInside;
    }
    return nok(code);
  }

  /**
   * In label.
   *
   * > 👉 **Note**: `cmark-gfm` prevents whitespace from occurring in footnote
   * > definition labels.
   *
   * ```markdown
   * > | [^a]: b
   *       ^
   * ```
   *
   * @type {State}
   */
  function labelInside(code) {
    if (
    // Too long.
    size > 999 ||
    // Closing brace with nothing.
    code === 93 && !data ||
    // Space or tab is not supported by GFM for some reason.
    // `\n` and `[` not being supported makes sense.
    code === null || code === 91 || markdownLineEndingOrSpace(code)) {
      return nok(code);
    }
    if (code === 93) {
      effects.exit('chunkString');
      const token = effects.exit('gfmFootnoteDefinitionLabelString');
      identifier = normalizeIdentifier(self.sliceSerialize(token));
      effects.enter('gfmFootnoteDefinitionLabelMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteDefinitionLabelMarker');
      effects.exit('gfmFootnoteDefinitionLabel');
      return labelAfter;
    }
    if (!markdownLineEndingOrSpace(code)) {
      data = true;
    }
    size++;
    effects.consume(code);
    return code === 92 ? labelEscape : labelInside;
  }

  /**
   * After `\`, at a special character.
   *
   * > 👉 **Note**: `cmark-gfm` currently does not support escaped brackets:
   * > <https://github.com/github/cmark-gfm/issues/240>
   *
   * ```markdown
   * > | [^a\*b]: c
   *         ^
   * ```
   *
   * @type {State}
   */
  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return labelInside;
    }
    return labelInside(code);
  }

  /**
   * After definition label.
   *
   * ```markdown
   * > | [^a]: b
   *         ^
   * ```
   *
   * @type {State}
   */
  function labelAfter(code) {
    if (code === 58) {
      effects.enter('definitionMarker');
      effects.consume(code);
      effects.exit('definitionMarker');
      if (!defined.includes(identifier)) {
        defined.push(identifier);
      }

      // Any whitespace after the marker is eaten, forming indented code
      // is not possible.
      // No space is also fine, just like a block quote marker.
      return factorySpace(effects, whitespaceAfter, 'gfmFootnoteDefinitionWhitespace');
    }
    return nok(code);
  }

  /**
   * After definition prefix.
   *
   * ```markdown
   * > | [^a]: b
   *           ^
   * ```
   *
   * @type {State}
   */
  function whitespaceAfter(code) {
    // `markdown-rs` has a wrapping token for the prefix that is closed here.
    return ok(code);
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDefinitionContinuation(effects, ok, nok) {
  /// Start of footnote definition continuation.
  ///
  /// ```markdown
  ///   | [^a]: b
  /// > |     c
  ///     ^
  /// ```
  //
  // Either a blank line, which is okay, or an indented thing.
  return effects.check(blankLine, ok, effects.attempt(indent, ok, nok));
}

/** @type {Exiter} */
function gfmFootnoteDefinitionEnd(effects) {
  effects.exit('gfmFootnoteDefinition');
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeIndent(effects, ok, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, 'gfmFootnoteDefinitionIndent', 4 + 1);

  /**
   * @type {State}
   */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === 'gfmFootnoteDefinitionIndent' && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok(code) : nok(code);
  }
}

/**
 * @import {Options} from 'micromark-extension-gfm-strikethrough'
 * @import {Event, Extension, Resolver, State, Token, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */

/**
 * Create an extension for `micromark` to enable GFM strikethrough syntax.
 *
 * @param {Options | null | undefined} [options={}]
 *   Configuration.
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions`, to
 *   enable GFM strikethrough syntax.
 */
function gfmStrikethrough(options) {
  const options_ = options || {};
  let single = options_.singleTilde;
  const tokenizer = {
    name: 'strikethrough',
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };
  if (single === null || single === undefined) {
    single = true;
  }
  return {
    text: {
      [126]: tokenizer
    },
    insideSpan: {
      null: [tokenizer]
    },
    attentionMarkers: {
      null: [126]
    }
  };

  /**
   * Take events and resolve strikethrough.
   *
   * @type {Resolver}
   */
  function resolveAllStrikethrough(events, context) {
    let index = -1;

    // Walk through all events.
    while (++index < events.length) {
      // Find a token that can close.
      if (events[index][0] === 'enter' && events[index][1].type === 'strikethroughSequenceTemporary' && events[index][1]._close) {
        let open = index;

        // Now walk back to find an opener.
        while (open--) {
          // Find a token that can open the closer.
          if (events[open][0] === 'exit' && events[open][1].type === 'strikethroughSequenceTemporary' && events[open][1]._open &&
          // If the sizes are the same:
          events[index][1].end.offset - events[index][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
            events[index][1].type = 'strikethroughSequence';
            events[open][1].type = 'strikethroughSequence';

            /** @type {Token} */
            const strikethrough = {
              type: 'strikethrough',
              start: Object.assign({}, events[open][1].start),
              end: Object.assign({}, events[index][1].end)
            };

            /** @type {Token} */
            const text = {
              type: 'strikethroughText',
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index][1].start)
            };

            // Opening.
            /** @type {Array<Event>} */
            const nextEvents = [['enter', strikethrough, context], ['enter', events[open][1], context], ['exit', events[open][1], context], ['enter', text, context]];
            const insideSpan = context.parser.constructs.insideSpan.null;
            if (insideSpan) {
              // Between.
              splice(nextEvents, nextEvents.length, 0, resolveAll(insideSpan, events.slice(open + 1, index), context));
            }

            // Closing.
            splice(nextEvents, nextEvents.length, 0, [['exit', text, context], ['enter', events[index][1], context], ['exit', events[index][1], context], ['exit', strikethrough, context]]);
            splice(events, open - 1, index - open + 3, nextEvents);
            index = open + nextEvents.length - 2;
            break;
          }
        }
      }
    }
    index = -1;
    while (++index < events.length) {
      if (events[index][1].type === 'strikethroughSequenceTemporary') {
        events[index][1].type = "data";
      }
    }
    return events;
  }

  /**
   * @this {TokenizeContext}
   * @type {Tokenizer}
   */
  function tokenizeStrikethrough(effects, ok, nok) {
    const previous = this.previous;
    const events = this.events;
    let size = 0;
    return start;

    /** @type {State} */
    function start(code) {
      if (previous === 126 && events[events.length - 1][1].type !== "characterEscape") {
        return nok(code);
      }
      effects.enter('strikethroughSequenceTemporary');
      return more(code);
    }

    /** @type {State} */
    function more(code) {
      const before = classifyCharacter(previous);
      if (code === 126) {
        // If this is the third marker, exit.
        if (size > 1) return nok(code);
        effects.consume(code);
        size++;
        return more;
      }
      if (size < 2 && !single) return nok(code);
      const token = effects.exit('strikethroughSequenceTemporary');
      const after = classifyCharacter(code);
      token._open = !after || after === 2 && Boolean(before);
      token._close = !before || before === 2 && Boolean(after);
      return ok(code);
    }
  }
}

/**
 * @import {Event} from 'micromark-util-types'
 */

// Port of `edit_map.rs` from `markdown-rs`.
// This should move to `markdown-js` later.

// Deal with several changes in events, batching them together.
//
// Preferably, changes should be kept to a minimum.
// Sometimes, it’s needed to change the list of events, because parsing can be
// messy, and it helps to expose a cleaner interface of events to the compiler
// and other users.
// It can also help to merge many adjacent similar events.
// And, in other cases, it’s needed to parse subcontent: pass some events
// through another tokenizer and inject the result.

/**
 * @typedef {[number, number, Array<Event>]} Change
 * @typedef {[number, number, number]} Jump
 */

/**
 * Tracks a bunch of edits.
 */
class EditMap {
  /**
   * Create a new edit map.
   */
  constructor() {
    /**
     * Record of changes.
     *
     * @type {Array<Change>}
     */
    this.map = [];
  }

  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(index, remove, add) {
    addImplementation(this, index, remove, add);
  }

  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }

  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(events) {
    this.map.sort(function (a, b) {
      return a[0] - b[0];
    });

    /* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
    if (this.map.length === 0) {
      return;
    }

    // To do: if links are added in events, like they are in `markdown-rs`,
    // this is needed.
    // // Calculate jumps: where items in the current list move to.
    // /** @type {Array<Jump>} */
    // const jumps = []
    // let index = 0
    // let addAcc = 0
    // let removeAcc = 0
    // while (index < this.map.length) {
    //   const [at, remove, add] = this.map[index]
    //   removeAcc += remove
    //   addAcc += add.length
    //   jumps.push([at, removeAcc, addAcc])
    //   index += 1
    // }
    //
    // . shiftLinks(events, jumps)

    let index = this.map.length;
    /** @type {Array<Array<Event>>} */
    const vecs = [];
    while (index > 0) {
      index -= 1;
      vecs.push(events.slice(this.map[index][0] + this.map[index][1]), this.map[index][2]);

      // Truncate rest.
      events.length = this.map[index][0];
    }
    vecs.push(events.slice());
    events.length = 0;
    let slice = vecs.pop();
    while (slice) {
      for (const element of slice) {
        events.push(element);
      }
      slice = vecs.pop();
    }

    // Truncate everything.
    this.map.length = 0;
  }
}

/**
 * Create an edit.
 *
 * @param {EditMap} editMap
 * @param {number} at
 * @param {number} remove
 * @param {Array<Event>} add
 * @returns {undefined}
 */
function addImplementation(editMap, at, remove, add) {
  let index = 0;

  /* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
  if (remove === 0 && add.length === 0) {
    return;
  }
  while (index < editMap.map.length) {
    if (editMap.map[index][0] === at) {
      editMap.map[index][1] += remove;

      // To do: before not used by tables, use when moving to micromark.
      // if (before) {
      //   add.push(...editMap.map[index][2])
      //   editMap.map[index][2] = add
      // } else {
      editMap.map[index][2].push(...add);
      // }

      return;
    }
    index += 1;
  }
  editMap.map.push([at, remove, add]);
}

// /**
//  * Shift `previous` and `next` links according to `jumps`.
//  *
//  * This fixes links in case there are events removed or added between them.
//  *
//  * @param {Array<Event>} events
//  * @param {Array<Jump>} jumps
//  */
// function shiftLinks(events, jumps) {
//   let jumpIndex = 0
//   let index = 0
//   let add = 0
//   let rm = 0

//   while (index < events.length) {
//     const rmCurr = rm

//     while (jumpIndex < jumps.length && jumps[jumpIndex][0] <= index) {
//       add = jumps[jumpIndex][2]
//       rm = jumps[jumpIndex][1]
//       jumpIndex += 1
//     }

//     // Ignore items that will be removed.
//     if (rm > rmCurr) {
//       index += rm - rmCurr
//     } else {
//       // ?
//       // if let Some(link) = &events[index].link {
//       //     if let Some(next) = link.next {
//       //         events[next].link.as_mut().unwrap().previous = Some(index + add - rm);
//       //         while jumpIndex < jumps.len() && jumps[jumpIndex].0 <= next {
//       //             add = jumps[jumpIndex].2;
//       //             rm = jumps[jumpIndex].1;
//       //             jumpIndex += 1;
//       //         }
//       //         events[index].link.as_mut().unwrap().next = Some(next + add - rm);
//       //         index = next;
//       //         continue;
//       //     }
//       // }
//       index += 1
//     }
//   }
// }

/**
 * @import {Event} from 'micromark-util-types'
 */

/**
 * @typedef {'center' | 'left' | 'none' | 'right'} Align
 */

/**
 * Figure out the alignment of a GFM table.
 *
 * @param {Readonly<Array<Event>>} events
 *   List of events.
 * @param {number} index
 *   Table enter event.
 * @returns {Array<Align>}
 *   List of aligns.
 */
function gfmTableAlign(events, index) {
  let inDelimiterRow = false;
  /** @type {Array<Align>} */
  const align = [];
  while (index < events.length) {
    const event = events[index];
    if (inDelimiterRow) {
      if (event[0] === 'enter') {
        // Start of alignment value: set a new column.
        // To do: `markdown-rs` uses `tableDelimiterCellValue`.
        if (event[1].type === 'tableContent') {
          align.push(events[index + 1][1].type === 'tableDelimiterMarker' ? 'left' : 'none');
        }
      }
      // Exits:
      // End of alignment value: change the column.
      // To do: `markdown-rs` uses `tableDelimiterCellValue`.
      else if (event[1].type === 'tableContent') {
        if (events[index - 1][1].type === 'tableDelimiterMarker') {
          const alignIndex = align.length - 1;
          align[alignIndex] = align[alignIndex] === 'left' ? 'center' : 'right';
        }
      }
      // Done!
      else if (event[1].type === 'tableDelimiterRow') {
        break;
      }
    } else if (event[0] === 'enter' && event[1].type === 'tableDelimiterRow') {
      inDelimiterRow = true;
    }
    index += 1;
  }
  return align;
}

/**
 * @import {Event, Extension, Point, Resolver, State, Token, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */


/**
 * Create an HTML extension for `micromark` to support GitHub tables syntax.
 *
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions` to enable GFM
 *   table syntax.
 */
function gfmTable() {
  return {
    flow: {
      null: {
        name: 'table',
        tokenize: tokenizeTable,
        resolveAll: resolveTable
      }
    }
  };
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeTable(effects, ok, nok) {
  const self = this;
  let size = 0;
  let sizeB = 0;
  /** @type {boolean | undefined} */
  let seen;
  return start;

  /**
   * Start of a GFM table.
   *
   * If there is a valid table row or table head before, then we try to parse
   * another row.
   * Otherwise, we try to parse a head.
   *
   * ```markdown
   * > | | a |
   *     ^
   *   | | - |
   * > | | b |
   *     ^
   * ```
   * @type {State}
   */
  function start(code) {
    let index = self.events.length - 1;
    while (index > -1) {
      const type = self.events[index][1].type;
      if (type === "lineEnding" ||
      // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      type === "linePrefix") index--;else break;
    }
    const tail = index > -1 ? self.events[index][1].type : null;
    const next = tail === 'tableHead' || tail === 'tableRow' ? bodyRowStart : headRowBefore;

    // Don’t allow lazy body rows.
    if (next === bodyRowStart && self.parser.lazy[self.now().line]) {
      return nok(code);
    }
    return next(code);
  }

  /**
   * Before table head row.
   *
   * ```markdown
   * > | | a |
   *     ^
   *   | | - |
   *   | | b |
   * ```
   *
   * @type {State}
   */
  function headRowBefore(code) {
    effects.enter('tableHead');
    effects.enter('tableRow');
    return headRowStart(code);
  }

  /**
   * Before table head row, after whitespace.
   *
   * ```markdown
   * > | | a |
   *     ^
   *   | | - |
   *   | | b |
   * ```
   *
   * @type {State}
   */
  function headRowStart(code) {
    if (code === 124) {
      return headRowBreak(code);
    }

    // To do: micromark-js should let us parse our own whitespace in extensions,
    // like `markdown-rs`:
    //
    // ```js
    // // 4+ spaces.
    // if (markdownSpace(code)) {
    //   return nok(code)
    // }
    // ```

    seen = true;
    // Count the first character, that isn’t a pipe, double.
    sizeB += 1;
    return headRowBreak(code);
  }

  /**
   * At break in table head row.
   *
   * ```markdown
   * > | | a |
   *     ^
   *       ^
   *         ^
   *   | | - |
   *   | | b |
   * ```
   *
   * @type {State}
   */
  function headRowBreak(code) {
    if (code === null) {
      // Note: in `markdown-rs`, we need to reset, in `micromark-js` we don‘t.
      return nok(code);
    }
    if (markdownLineEnding(code)) {
      // If anything other than one pipe (ignoring whitespace) was used, it’s fine.
      if (sizeB > 1) {
        sizeB = 0;
        // To do: check if this works.
        // Feel free to interrupt:
        self.interrupt = true;
        effects.exit('tableRow');
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return headDelimiterStart;
      }

      // Note: in `markdown-rs`, we need to reset, in `micromark-js` we don‘t.
      return nok(code);
    }
    if (markdownSpace(code)) {
      // To do: check if this is fine.
      // effects.attempt(State::Next(StateName::GfmTableHeadRowBreak), State::Nok)
      // State::Retry(space_or_tab(tokenizer))
      return factorySpace(effects, headRowBreak, "whitespace")(code);
    }
    sizeB += 1;
    if (seen) {
      seen = false;
      // Header cell count.
      size += 1;
    }
    if (code === 124) {
      effects.enter('tableCellDivider');
      effects.consume(code);
      effects.exit('tableCellDivider');
      // Whether a delimiter was seen.
      seen = true;
      return headRowBreak;
    }

    // Anything else is cell data.
    effects.enter("data");
    return headRowData(code);
  }

  /**
   * In table head row data.
   *
   * ```markdown
   * > | | a |
   *       ^
   *   | | - |
   *   | | b |
   * ```
   *
   * @type {State}
   */
  function headRowData(code) {
    if (code === null || code === 124 || markdownLineEndingOrSpace(code)) {
      effects.exit("data");
      return headRowBreak(code);
    }
    effects.consume(code);
    return code === 92 ? headRowEscape : headRowData;
  }

  /**
   * In table head row escape.
   *
   * ```markdown
   * > | | a\-b |
   *         ^
   *   | | ---- |
   *   | | c    |
   * ```
   *
   * @type {State}
   */
  function headRowEscape(code) {
    if (code === 92 || code === 124) {
      effects.consume(code);
      return headRowData;
    }
    return headRowData(code);
  }

  /**
   * Before delimiter row.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *     ^
   *   | | b |
   * ```
   *
   * @type {State}
   */
  function headDelimiterStart(code) {
    // Reset `interrupt`.
    self.interrupt = false;

    // Note: in `markdown-rs`, we need to handle piercing here too.
    if (self.parser.lazy[self.now().line]) {
      return nok(code);
    }
    effects.enter('tableDelimiterRow');
    // Track if we’ve seen a `:` or `|`.
    seen = false;
    if (markdownSpace(code)) {
      return factorySpace(effects, headDelimiterBefore, "linePrefix", self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4)(code);
    }
    return headDelimiterBefore(code);
  }

  /**
   * Before delimiter row, after optional whitespace.
   *
   * Reused when a `|` is found later, to parse another cell.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *     ^
   *   | | b |
   * ```
   *
   * @type {State}
   */
  function headDelimiterBefore(code) {
    if (code === 45 || code === 58) {
      return headDelimiterValueBefore(code);
    }
    if (code === 124) {
      seen = true;
      // If we start with a pipe, we open a cell marker.
      effects.enter('tableCellDivider');
      effects.consume(code);
      effects.exit('tableCellDivider');
      return headDelimiterCellBefore;
    }

    // More whitespace / empty row not allowed at start.
    return headDelimiterNok(code);
  }

  /**
   * After `|`, before delimiter cell.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *      ^
   * ```
   *
   * @type {State}
   */
  function headDelimiterCellBefore(code) {
    if (markdownSpace(code)) {
      return factorySpace(effects, headDelimiterValueBefore, "whitespace")(code);
    }
    return headDelimiterValueBefore(code);
  }

  /**
   * Before delimiter cell value.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *       ^
   * ```
   *
   * @type {State}
   */
  function headDelimiterValueBefore(code) {
    // Align: left.
    if (code === 58) {
      sizeB += 1;
      seen = true;
      effects.enter('tableDelimiterMarker');
      effects.consume(code);
      effects.exit('tableDelimiterMarker');
      return headDelimiterLeftAlignmentAfter;
    }

    // Align: none.
    if (code === 45) {
      sizeB += 1;
      // To do: seems weird that this *isn’t* left aligned, but that state is used?
      return headDelimiterLeftAlignmentAfter(code);
    }
    if (code === null || markdownLineEnding(code)) {
      return headDelimiterCellAfter(code);
    }
    return headDelimiterNok(code);
  }

  /**
   * After delimiter cell left alignment marker.
   *
   * ```markdown
   *   | | a  |
   * > | | :- |
   *        ^
   * ```
   *
   * @type {State}
   */
  function headDelimiterLeftAlignmentAfter(code) {
    if (code === 45) {
      effects.enter('tableDelimiterFiller');
      return headDelimiterFiller(code);
    }

    // Anything else is not ok after the left-align colon.
    return headDelimiterNok(code);
  }

  /**
   * In delimiter cell filler.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *       ^
   * ```
   *
   * @type {State}
   */
  function headDelimiterFiller(code) {
    if (code === 45) {
      effects.consume(code);
      return headDelimiterFiller;
    }

    // Align is `center` if it was `left`, `right` otherwise.
    if (code === 58) {
      seen = true;
      effects.exit('tableDelimiterFiller');
      effects.enter('tableDelimiterMarker');
      effects.consume(code);
      effects.exit('tableDelimiterMarker');
      return headDelimiterRightAlignmentAfter;
    }
    effects.exit('tableDelimiterFiller');
    return headDelimiterRightAlignmentAfter(code);
  }

  /**
   * After delimiter cell right alignment marker.
   *
   * ```markdown
   *   | |  a |
   * > | | -: |
   *         ^
   * ```
   *
   * @type {State}
   */
  function headDelimiterRightAlignmentAfter(code) {
    if (markdownSpace(code)) {
      return factorySpace(effects, headDelimiterCellAfter, "whitespace")(code);
    }
    return headDelimiterCellAfter(code);
  }

  /**
   * After delimiter cell.
   *
   * ```markdown
   *   | |  a |
   * > | | -: |
   *          ^
   * ```
   *
   * @type {State}
   */
  function headDelimiterCellAfter(code) {
    if (code === 124) {
      return headDelimiterBefore(code);
    }
    if (code === null || markdownLineEnding(code)) {
      // Exit when:
      // * there was no `:` or `|` at all (it’s a thematic break or setext
      //   underline instead)
      // * the header cell count is not the delimiter cell count
      if (!seen || size !== sizeB) {
        return headDelimiterNok(code);
      }

      // Note: in markdown-rs`, a reset is needed here.
      effects.exit('tableDelimiterRow');
      effects.exit('tableHead');
      // To do: in `markdown-rs`, resolvers need to be registered manually.
      // effects.register_resolver(ResolveName::GfmTable)
      return ok(code);
    }
    return headDelimiterNok(code);
  }

  /**
   * In delimiter row, at a disallowed byte.
   *
   * ```markdown
   *   | | a |
   * > | | x |
   *       ^
   * ```
   *
   * @type {State}
   */
  function headDelimiterNok(code) {
    // Note: in `markdown-rs`, we need to reset, in `micromark-js` we don‘t.
    return nok(code);
  }

  /**
   * Before table body row.
   *
   * ```markdown
   *   | | a |
   *   | | - |
   * > | | b |
   *     ^
   * ```
   *
   * @type {State}
   */
  function bodyRowStart(code) {
    // Note: in `markdown-rs` we need to manually take care of a prefix,
    // but in `micromark-js` that is done for us, so if we’re here, we’re
    // never at whitespace.
    effects.enter('tableRow');
    return bodyRowBreak(code);
  }

  /**
   * At break in table body row.
   *
   * ```markdown
   *   | | a |
   *   | | - |
   * > | | b |
   *     ^
   *       ^
   *         ^
   * ```
   *
   * @type {State}
   */
  function bodyRowBreak(code) {
    if (code === 124) {
      effects.enter('tableCellDivider');
      effects.consume(code);
      effects.exit('tableCellDivider');
      return bodyRowBreak;
    }
    if (code === null || markdownLineEnding(code)) {
      effects.exit('tableRow');
      return ok(code);
    }
    if (markdownSpace(code)) {
      return factorySpace(effects, bodyRowBreak, "whitespace")(code);
    }

    // Anything else is cell content.
    effects.enter("data");
    return bodyRowData(code);
  }

  /**
   * In table body row data.
   *
   * ```markdown
   *   | | a |
   *   | | - |
   * > | | b |
   *       ^
   * ```
   *
   * @type {State}
   */
  function bodyRowData(code) {
    if (code === null || code === 124 || markdownLineEndingOrSpace(code)) {
      effects.exit("data");
      return bodyRowBreak(code);
    }
    effects.consume(code);
    return code === 92 ? bodyRowEscape : bodyRowData;
  }

  /**
   * In table body row escape.
   *
   * ```markdown
   *   | | a    |
   *   | | ---- |
   * > | | b\-c |
   *         ^
   * ```
   *
   * @type {State}
   */
  function bodyRowEscape(code) {
    if (code === 92 || code === 124) {
      effects.consume(code);
      return bodyRowData;
    }
    return bodyRowData(code);
  }
}

/** @type {Resolver} */

function resolveTable(events, context) {
  let index = -1;
  let inFirstCellAwaitingPipe = true;
  /** @type {RowKind} */
  let rowKind = 0;
  /** @type {Range} */
  let lastCell = [0, 0, 0, 0];
  /** @type {Range} */
  let cell = [0, 0, 0, 0];
  let afterHeadAwaitingFirstBodyRow = false;
  let lastTableEnd = 0;
  /** @type {Token | undefined} */
  let currentTable;
  /** @type {Token | undefined} */
  let currentBody;
  /** @type {Token | undefined} */
  let currentCell;
  const map = new EditMap();
  while (++index < events.length) {
    const event = events[index];
    const token = event[1];
    if (event[0] === 'enter') {
      // Start of head.
      if (token.type === 'tableHead') {
        afterHeadAwaitingFirstBodyRow = false;

        // Inject previous (body end and) table end.
        if (lastTableEnd !== 0) {
          flushTableEnd(map, context, lastTableEnd, currentTable, currentBody);
          currentBody = undefined;
          lastTableEnd = 0;
        }

        // Inject table start.
        currentTable = {
          type: 'table',
          start: Object.assign({}, token.start),
          // Note: correct end is set later.
          end: Object.assign({}, token.end)
        };
        map.add(index, 0, [['enter', currentTable, context]]);
      } else if (token.type === 'tableRow' || token.type === 'tableDelimiterRow') {
        inFirstCellAwaitingPipe = true;
        currentCell = undefined;
        lastCell = [0, 0, 0, 0];
        cell = [0, index + 1, 0, 0];

        // Inject table body start.
        if (afterHeadAwaitingFirstBodyRow) {
          afterHeadAwaitingFirstBodyRow = false;
          currentBody = {
            type: 'tableBody',
            start: Object.assign({}, token.start),
            // Note: correct end is set later.
            end: Object.assign({}, token.end)
          };
          map.add(index, 0, [['enter', currentBody, context]]);
        }
        rowKind = token.type === 'tableDelimiterRow' ? 2 : currentBody ? 3 : 1;
      }
      // Cell data.
      else if (rowKind && (token.type === "data" || token.type === 'tableDelimiterMarker' || token.type === 'tableDelimiterFiller')) {
        inFirstCellAwaitingPipe = false;

        // First value in cell.
        if (cell[2] === 0) {
          if (lastCell[1] !== 0) {
            cell[0] = cell[1];
            currentCell = flushCell(map, context, lastCell, rowKind, undefined, currentCell);
            lastCell = [0, 0, 0, 0];
          }
          cell[2] = index;
        }
      } else if (token.type === 'tableCellDivider') {
        if (inFirstCellAwaitingPipe) {
          inFirstCellAwaitingPipe = false;
        } else {
          if (lastCell[1] !== 0) {
            cell[0] = cell[1];
            currentCell = flushCell(map, context, lastCell, rowKind, undefined, currentCell);
          }
          lastCell = cell;
          cell = [lastCell[1], index, 0, 0];
        }
      }
    }
    // Exit events.
    else if (token.type === 'tableHead') {
      afterHeadAwaitingFirstBodyRow = true;
      lastTableEnd = index;
    } else if (token.type === 'tableRow' || token.type === 'tableDelimiterRow') {
      lastTableEnd = index;
      if (lastCell[1] !== 0) {
        cell[0] = cell[1];
        currentCell = flushCell(map, context, lastCell, rowKind, index, currentCell);
      } else if (cell[1] !== 0) {
        currentCell = flushCell(map, context, cell, rowKind, index, currentCell);
      }
      rowKind = 0;
    } else if (rowKind && (token.type === "data" || token.type === 'tableDelimiterMarker' || token.type === 'tableDelimiterFiller')) {
      cell[3] = index;
    }
  }
  if (lastTableEnd !== 0) {
    flushTableEnd(map, context, lastTableEnd, currentTable, currentBody);
  }
  map.consume(context.events);

  // To do: move this into `html`, when events are exposed there.
  // That’s what `markdown-rs` does.
  // That needs updates to `mdast-util-gfm-table`.
  index = -1;
  while (++index < context.events.length) {
    const event = context.events[index];
    if (event[0] === 'enter' && event[1].type === 'table') {
      event[1]._align = gfmTableAlign(context.events, index);
    }
  }
  return events;
}

/**
 * Generate a cell.
 *
 * @param {EditMap} map
 * @param {Readonly<TokenizeContext>} context
 * @param {Readonly<Range>} range
 * @param {RowKind} rowKind
 * @param {number | undefined} rowEnd
 * @param {Token | undefined} previousCell
 * @returns {Token | undefined}
 */
// eslint-disable-next-line max-params
function flushCell(map, context, range, rowKind, rowEnd, previousCell) {
  // `markdown-rs` uses:
  // rowKind === 2 ? 'tableDelimiterCell' : 'tableCell'
  const groupName = rowKind === 1 ? 'tableHeader' : rowKind === 2 ? 'tableDelimiter' : 'tableData';
  // `markdown-rs` uses:
  // rowKind === 2 ? 'tableDelimiterCellValue' : 'tableCellText'
  const valueName = 'tableContent';

  // Insert an exit for the previous cell, if there is one.
  //
  // ```markdown
  // > | | aa | bb | cc |
  //          ^-- exit
  //           ^^^^-- this cell
  // ```
  if (range[0] !== 0) {
    previousCell.end = Object.assign({}, getPoint(context.events, range[0]));
    map.add(range[0], 0, [['exit', previousCell, context]]);
  }

  // Insert enter of this cell.
  //
  // ```markdown
  // > | | aa | bb | cc |
  //           ^-- enter
  //           ^^^^-- this cell
  // ```
  const now = getPoint(context.events, range[1]);
  previousCell = {
    type: groupName,
    start: Object.assign({}, now),
    // Note: correct end is set later.
    end: Object.assign({}, now)
  };
  map.add(range[1], 0, [['enter', previousCell, context]]);

  // Insert text start at first data start and end at last data end, and
  // remove events between.
  //
  // ```markdown
  // > | | aa | bb | cc |
  //            ^-- enter
  //             ^-- exit
  //           ^^^^-- this cell
  // ```
  if (range[2] !== 0) {
    const relatedStart = getPoint(context.events, range[2]);
    const relatedEnd = getPoint(context.events, range[3]);
    /** @type {Token} */
    const valueToken = {
      type: valueName,
      start: Object.assign({}, relatedStart),
      end: Object.assign({}, relatedEnd)
    };
    map.add(range[2], 0, [['enter', valueToken, context]]);
    if (rowKind !== 2) {
      // Fix positional info on remaining events
      const start = context.events[range[2]];
      const end = context.events[range[3]];
      start[1].end = Object.assign({}, end[1].end);
      start[1].type = "chunkText";
      start[1].contentType = "text";

      // Remove if needed.
      if (range[3] > range[2] + 1) {
        const a = range[2] + 1;
        const b = range[3] - range[2] - 1;
        map.add(a, b, []);
      }
    }
    map.add(range[3] + 1, 0, [['exit', valueToken, context]]);
  }

  // Insert an exit for the last cell, if at the row end.
  //
  // ```markdown
  // > | | aa | bb | cc |
  //                    ^-- exit
  //               ^^^^^^-- this cell (the last one contains two “between” parts)
  // ```
  if (rowEnd !== undefined) {
    previousCell.end = Object.assign({}, getPoint(context.events, rowEnd));
    map.add(rowEnd, 0, [['exit', previousCell, context]]);
    previousCell = undefined;
  }
  return previousCell;
}

/**
 * Generate table end (and table body end).
 *
 * @param {Readonly<EditMap>} map
 * @param {Readonly<TokenizeContext>} context
 * @param {number} index
 * @param {Token} table
 * @param {Token | undefined} tableBody
 */
// eslint-disable-next-line max-params
function flushTableEnd(map, context, index, table, tableBody) {
  /** @type {Array<Event>} */
  const exits = [];
  const related = getPoint(context.events, index);
  if (tableBody) {
    tableBody.end = Object.assign({}, related);
    exits.push(['exit', tableBody, context]);
  }
  table.end = Object.assign({}, related);
  exits.push(['exit', table, context]);
  map.add(index + 1, 0, exits);
}

/**
 * @param {Readonly<Array<Event>>} events
 * @param {number} index
 * @returns {Readonly<Point>}
 */
function getPoint(events, index) {
  const event = events[index];
  const side = event[0] === 'enter' ? 'start' : 'end';
  return event[1][side];
}

/**
 * @import {Extension, State, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */

const tasklistCheck = {
  name: 'tasklistCheck',
  tokenize: tokenizeTasklistCheck
};

/**
 * Create an HTML extension for `micromark` to support GFM task list items
 * syntax.
 *
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `htmlExtensions` to
 *   support GFM task list items when serializing to HTML.
 */
function gfmTaskListItem() {
  return {
    text: {
      [91]: tasklistCheck
    }
  };
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeTasklistCheck(effects, ok, nok) {
  const self = this;
  return open;

  /**
   * At start of task list item check.
   *
   * ```markdown
   * > | * [x] y.
   *       ^
   * ```
   *
   * @type {State}
   */
  function open(code) {
    if (
    // Exit if there’s stuff before.
    self.previous !== null ||
    // Exit if not in the first content that is the first child of a list
    // item.
    !self._gfmTasklistFirstContentOfListItem) {
      return nok(code);
    }
    effects.enter('taskListCheck');
    effects.enter('taskListCheckMarker');
    effects.consume(code);
    effects.exit('taskListCheckMarker');
    return inside;
  }

  /**
   * In task list item check.
   *
   * ```markdown
   * > | * [x] y.
   *        ^
   * ```
   *
   * @type {State}
   */
  function inside(code) {
    // Currently we match how GH works in files.
    // To match how GH works in comments, use `markdownSpace` (`[\t ]`) instead
    // of `markdownLineEndingOrSpace` (`[\t\n\r ]`).
    if (markdownLineEndingOrSpace(code)) {
      effects.enter('taskListCheckValueUnchecked');
      effects.consume(code);
      effects.exit('taskListCheckValueUnchecked');
      return close;
    }
    if (code === 88 || code === 120) {
      effects.enter('taskListCheckValueChecked');
      effects.consume(code);
      effects.exit('taskListCheckValueChecked');
      return close;
    }
    return nok(code);
  }

  /**
   * At close of task list item check.
   *
   * ```markdown
   * > | * [x] y.
   *         ^
   * ```
   *
   * @type {State}
   */
  function close(code) {
    if (code === 93) {
      effects.enter('taskListCheckMarker');
      effects.consume(code);
      effects.exit('taskListCheckMarker');
      effects.exit('taskListCheck');
      return after;
    }
    return nok(code);
  }

  /**
   * @type {State}
   */
  function after(code) {
    // EOL in paragraph means there must be something else after it.
    if (markdownLineEnding(code)) {
      return ok(code);
    }

    // Space or tab?
    // Check what comes after.
    if (markdownSpace(code)) {
      return effects.check({
        tokenize: spaceThenNonSpace
      }, ok, nok)(code);
    }

    // EOF, or non-whitespace, both wrong.
    return nok(code);
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function spaceThenNonSpace(effects, ok, nok) {
  return factorySpace(effects, after, "whitespace");

  /**
   * After whitespace, after task list item check.
   *
   * ```markdown
   * > | * [x] y.
   *           ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    // EOF means there was nothing, so bad.
    // EOL means there’s content after it, so good.
    // Impossible to have more spaces.
    // Anything else is good.
    return code === null ? nok(code) : ok(code);
  }
}

/**
 * @typedef {import('micromark-extension-gfm-footnote').HtmlOptions} HtmlOptions
 * @typedef {import('micromark-extension-gfm-strikethrough').Options} Options
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */


/**
 * Create an extension for `micromark` to enable GFM syntax.
 *
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 *
 *   Passed to `micromark-extens-gfm-strikethrough`.
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions` to enable GFM
 *   syntax.
 */
function gfm(options) {
  return combineExtensions([
    gfmAutolinkLiteral(),
    gfmFootnote(),
    gfmStrikethrough(options),
    gfmTable(),
    gfmTaskListItem()
  ])
}

/**
 * @import {Root} from 'mdast'
 * @import {Options} from 'remark-gfm'
 * @import {} from 'remark-parse'
 * @import {} from 'remark-stringify'
 * @import {Processor} from 'unified'
 */


/** @type {Options} */
const emptyOptions = {};

/**
 * Add support GFM (autolink literals, footnotes, strikethrough, tables,
 * tasklists).
 *
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {undefined}
 *   Nothing.
 */
function remarkGfm(options) {
  // @ts-expect-error: TS is wrong about `this`.
  // eslint-disable-next-line unicorn/no-this-assignment
  const self = /** @type {Processor<Root>} */ (this);
  const settings = options || emptyOptions;
  const data = self.data();

  const micromarkExtensions =
    data.micromarkExtensions || (data.micromarkExtensions = []);
  const fromMarkdownExtensions =
    data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);
  const toMarkdownExtensions =
    data.toMarkdownExtensions || (data.toMarkdownExtensions = []);

  micromarkExtensions.push(gfm(settings));
  fromMarkdownExtensions.push(gfmFromMarkdown());
  toMarkdownExtensions.push(gfmToMarkdown(settings));
}

/**
 * @import {Schema} from 'hast-util-sanitize'
 */

// Couple of ARIA attributes allowed in several, but not all, places.
const aria = ['ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy'];

/**
 * Default schema.
 *
 * Follows GitHub style sanitation.
 *
 * @type {Schema}
 */
const defaultSchema = {
  ancestors: {
    tbody: ['table'],
    td: ['table'],
    th: ['table'],
    thead: ['table'],
    tfoot: ['table'],
    tr: ['table']
  },
  attributes: {
    a: [
      ...aria,
      // Note: these 3 are used by GFM footnotes, they do work on all links.
      'dataFootnoteBackref',
      'dataFootnoteRef',
      ['className', 'data-footnote-backref'],
      'href'
    ],
    blockquote: ['cite'],
    // Note: this class is not normally allowed by GH, when manually writing
    // `code` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    code: [['className', /^language-./]],
    del: ['cite'],
    div: ['itemScope', 'itemType'],
    dl: [...aria],
    // Note: this is used by GFM footnotes.
    h2: [['className', 'sr-only']],
    img: [...aria, 'longDesc', 'src'],
    // Note: `input` is not normally allowed by GH, when manually writing
    // it in markdown, they add it from tasklists some other way.
    // We can’t do that, so we have to allow it.
    input: [
      ['disabled', true],
      ['type', 'checkbox']
    ],
    ins: ['cite'],
    // Note: this class is not normally allowed by GH, when manually writing
    // `li` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    li: [['className', 'task-list-item']],
    // Note: this class is not normally allowed by GH, when manually writing
    // `ol` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    ol: [...aria, ['className', 'contains-task-list']],
    q: ['cite'],
    section: ['dataFootnotes', ['className', 'footnotes']],
    source: ['srcSet'],
    summary: [...aria],
    table: [...aria],
    // Note: this class is not normally allowed by GH, when manually writing
    // `ol` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    ul: [...aria, ['className', 'contains-task-list']],
    '*': [
      'abbr',
      'accept',
      'acceptCharset',
      'accessKey',
      'action',
      'align',
      'alt',
      'axis',
      'border',
      'cellPadding',
      'cellSpacing',
      'char',
      'charOff',
      'charSet',
      'checked',
      'clear',
      'colSpan',
      'color',
      'cols',
      'compact',
      'coords',
      'dateTime',
      'dir',
      // Note: `disabled` is technically allowed on all elements by GH.
      // But it is useless on everything except `input`.
      // Because `input`s are normally not allowed, but we allow them for
      // checkboxes due to tasklists, we allow `disabled` only there.
      'encType',
      'frame',
      'hSpace',
      'headers',
      'height',
      'hrefLang',
      'htmlFor',
      'id',
      'isMap',
      'itemProp',
      'label',
      'lang',
      'maxLength',
      'media',
      'method',
      'multiple',
      'name',
      'noHref',
      'noShade',
      'noWrap',
      'open',
      'prompt',
      'readOnly',
      'rev',
      'rowSpan',
      'rows',
      'rules',
      'scope',
      'selected',
      'shape',
      'size',
      'span',
      'start',
      'summary',
      'tabIndex',
      'title',
      'useMap',
      'vAlign',
      'value',
      'width'
    ]
  },
  clobber: ['ariaDescribedBy', 'ariaLabelledBy', 'id', 'name'],
  clobberPrefix: 'user-content-',
  protocols: {
    cite: ['http', 'https'],
    href: ['http', 'https', 'irc', 'ircs', 'mailto', 'xmpp'],
    longDesc: ['http', 'https'],
    src: ['http', 'https']
  },
  required: {
    input: {disabled: true, type: 'checkbox'}
  },
  strip: ['script'],
  tagNames: [
    'a',
    'b',
    'blockquote',
    'br',
    'code',
    'dd',
    'del',
    'details',
    'div',
    'dl',
    'dt',
    'em',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hr',
    'i',
    'img',
    // Note: `input` is not normally allowed by GH, when manually writing
    // it in markdown, they add it from tasklists some other way.
    // We can’t do that, so we have to allow it.
    'input',
    'ins',
    'kbd',
    'li',
    'ol',
    'p',
    'picture',
    'pre',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'section',
    'source',
    'span',
    'strike',
    'strong',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'tr',
    'tt',
    'ul',
    'var'
  ]
};

/**
 * @import {
 *   Comment,
 *   Doctype,
 *   ElementContent,
 *   Element,
 *   Nodes,
 *   Properties,
 *   RootContent,
 *   Root,
 *   Text
 * } from 'hast'
 */


const own = {}.hasOwnProperty;

/**
 * Sanitize a tree.
 *
 * @param {Readonly<Nodes>} node
 *   Unsafe tree.
 * @param {Readonly<Schema> | null | undefined} [options]
 *   Configuration (default: `defaultSchema`).
 * @returns {Nodes}
 *   New, safe tree.
 */
function sanitize(node, options) {
  /** @type {Nodes} */
  let result = {type: 'root', children: []};

  /** @type {State} */
  const state = {
    schema: options ? {...defaultSchema, ...options} : defaultSchema,
    stack: []
  };
  const replace = transform(state, node);

  if (replace) {
    if (Array.isArray(replace)) {
      if (replace.length === 1) {
        result = replace[0];
      } else {
        result.children = replace;
      }
    } else {
      result = replace;
    }
  }

  return result
}

/**
 * Sanitize `node`.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Readonly<unknown>} node
 *   Unsafe node.
 * @returns {Array<ElementContent> | Nodes | undefined}
 *   Safe result.
 */
function transform(state, node) {
  if (node && typeof node === 'object') {
    const unsafe = /** @type {Record<string, Readonly<unknown>>} */ (node);
    const type = typeof unsafe.type === 'string' ? unsafe.type : '';

    switch (type) {
      case 'comment': {
        return comment(state, unsafe)
      }

      case 'doctype': {
        return doctype(state, unsafe)
      }

      case 'element': {
        return element(state, unsafe)
      }

      case 'root': {
        return root(state, unsafe)
      }

      case 'text': {
        return text(state, unsafe)
      }
    }
  }
}

/**
 * Make a safe comment.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Readonly<Record<string, Readonly<unknown>>>} unsafe
 *   Unsafe comment-like value.
 * @returns {Comment | undefined}
 *   Safe comment (if with `allowComments`).
 */
function comment(state, unsafe) {
  if (state.schema.allowComments) {
    // See <https://html.spec.whatwg.org/multipage/parsing.html#serialising-html-fragments>
    const result = typeof unsafe.value === 'string' ? unsafe.value : '';
    const index = result.indexOf('-->');
    const value = index < 0 ? result : result.slice(0, index);

    /** @type {Comment} */
    const node = {type: 'comment', value};

    patch(node, unsafe);

    return node
  }
}

/**
 * Make a safe doctype.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Readonly<Record<string, Readonly<unknown>>>} unsafe
 *   Unsafe doctype-like value.
 * @returns {Doctype | undefined}
 *   Safe doctype (if with `allowDoctypes`).
 */
function doctype(state, unsafe) {
  if (state.schema.allowDoctypes) {
    /** @type {Doctype} */
    const node = {type: 'doctype'};

    patch(node, unsafe);

    return node
  }
}

/**
 * Make a safe element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Readonly<Record<string, Readonly<unknown>>>} unsafe
 *   Unsafe element-like value.
 * @returns {Array<ElementContent> | Element | undefined}
 *   Safe element.
 */
function element(state, unsafe) {
  const name = typeof unsafe.tagName === 'string' ? unsafe.tagName : '';

  state.stack.push(name);

  const content = /** @type {Array<ElementContent>} */ (
    children(state, unsafe.children)
  );
  const properties_ = properties(state, unsafe.properties);

  state.stack.pop();

  let safeElement = false;

  if (
    name &&
    name !== '*' &&
    (!state.schema.tagNames || state.schema.tagNames.includes(name))
  ) {
    safeElement = true;

    // Some nodes can break out of their context if they don’t have a certain
    // ancestor.
    if (state.schema.ancestors && own.call(state.schema.ancestors, name)) {
      const ancestors = state.schema.ancestors[name];
      let index = -1;

      safeElement = false;

      while (++index < ancestors.length) {
        if (state.stack.includes(ancestors[index])) {
          safeElement = true;
        }
      }
    }
  }

  if (!safeElement) {
    return state.schema.strip && !state.schema.strip.includes(name)
      ? content
      : undefined
  }

  /** @type {Element} */
  const node = {
    type: 'element',
    tagName: name,
    properties: properties_,
    children: content
  };

  patch(node, unsafe);

  return node
}

/**
 * Make a safe root.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Readonly<Record<string, Readonly<unknown>>>} unsafe
 *   Unsafe root-like value.
 * @returns {Root}
 *   Safe root.
 */
function root(state, unsafe) {
  const content = /** @type {Array<RootContent>} */ (
    children(state, unsafe.children)
  );

  /** @type {Root} */
  const node = {type: 'root', children: content};

  patch(node, unsafe);

  return node
}

/**
 * Make a safe text.
 *
 * @param {State} _
 *   Info passed around.
 * @param {Readonly<Record<string, Readonly<unknown>>>} unsafe
 *   Unsafe text-like value.
 * @returns {Text}
 *   Safe text.
 */
function text(_, unsafe) {
  const value = typeof unsafe.value === 'string' ? unsafe.value : '';
  /** @type {Text} */
  const node = {type: 'text', value};

  patch(node, unsafe);

  return node
}

/**
 * Make children safe.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Readonly<unknown>} children
 *   Unsafe value.
 * @returns {Array<Nodes>}
 *   Safe children.
 */
function children(state, children) {
  /** @type {Array<Nodes>} */
  const results = [];

  if (Array.isArray(children)) {
    const childrenUnknown = /** @type {Array<Readonly<unknown>>} */ (children);
    let index = -1;

    while (++index < childrenUnknown.length) {
      const value = transform(state, childrenUnknown[index]);

      if (value) {
        if (Array.isArray(value)) {
          results.push(...value);
        } else {
          results.push(value);
        }
      }
    }
  }

  return results
}

/**
 * Make element properties safe.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Readonly<unknown>} properties
 *   Unsafe value.
 * @returns {Properties}
 *   Safe value.
 */
function properties(state, properties) {
  const tagName = state.stack[state.stack.length - 1];
  const attributes = state.schema.attributes;
  const required = state.schema.required;
  const specific =
    attributes && own.call(attributes, tagName)
      ? attributes[tagName]
      : undefined;
  const defaults =
    attributes && own.call(attributes, '*') ? attributes['*'] : undefined;
  const properties_ =
    /** @type {Readonly<Record<string, Readonly<unknown>>>} */ (
      properties && typeof properties === 'object' ? properties : {}
    );
  /** @type {Properties} */
  const result = {};
  /** @type {string} */
  let key;

  for (key in properties_) {
    if (own.call(properties_, key)) {
      const unsafe = properties_[key];
      let safe = propertyValue(
        state,
        findDefinition(specific, key),
        key,
        unsafe
      );

      if (safe === null || safe === undefined) {
        safe = propertyValue(state, findDefinition(defaults, key), key, unsafe);
      }

      if (safe !== null && safe !== undefined) {
        result[key] = safe;
      }
    }
  }

  if (required && own.call(required, tagName)) {
    const properties = required[tagName];

    for (key in properties) {
      if (own.call(properties, key) && !own.call(result, key)) {
        result[key] = properties[key];
      }
    }
  }

  return result
}

/**
 * Sanitize a property value.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Readonly<PropertyDefinition> | undefined} definition
 *   Definition.
 * @param {string} key
 *   Field name.
 * @param {Readonly<unknown>} value
 *   Unsafe value (but an array).
 * @returns {Array<number | string> | boolean | number | string | undefined}
 *   Safe value.
 */
function propertyValue(state, definition, key, value) {
  return definition
    ? Array.isArray(value)
      ? propertyValueMany(state, definition, key, value)
      : propertyValuePrimitive(state, definition, key, value)
    : undefined
}

/**
 * Sanitize a property value which is a list.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Readonly<PropertyDefinition>} definition
 *   Definition.
 * @param {string} key
 *   Field name.
 * @param {Readonly<Array<Readonly<unknown>>>} values
 *   Unsafe value (but an array).
 * @returns {Array<number | string>}
 *   Safe value.
 */
function propertyValueMany(state, definition, key, values) {
  let index = -1;
  /** @type {Array<number | string>} */
  const result = [];

  while (++index < values.length) {
    const value = propertyValuePrimitive(state, definition, key, values[index]);

    if (typeof value === 'number' || typeof value === 'string') {
      result.push(value);
    }
  }

  return result
}

/**
 * Sanitize a property value which is a primitive.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Readonly<PropertyDefinition>} definition
 *   Definition.
 * @param {string} key
 *   Field name.
 * @param {Readonly<unknown>} value
 *   Unsafe value (but not an array).
 * @returns {boolean | number | string | undefined}
 *   Safe value.
 */
function propertyValuePrimitive(state, definition, key, value) {
  if (
    typeof value !== 'boolean' &&
    typeof value !== 'number' &&
    typeof value !== 'string'
  ) {
    return
  }

  if (!safeProtocol(state, key, value)) {
    return
  }

  // Just a string, or only one item in an array, means all values are OK.
  // More than one item means an allow list.
  if (typeof definition === 'object' && definition.length > 1) {
    let ok = false;
    let index = 0; // Ignore `key`, which is the first item.

    while (++index < definition.length) {
      const allowed = definition[index];

      // Expression.
      if (allowed && typeof allowed === 'object' && 'flags' in allowed) {
        if (allowed.test(String(value))) {
          ok = true;
          break
        }
      }
      // Primitive.
      else if (allowed === value) {
        ok = true;
        break
      }
    }

    if (!ok) return
  }

  return state.schema.clobber &&
    state.schema.clobberPrefix &&
    state.schema.clobber.includes(key)
    ? state.schema.clobberPrefix + value
    : value
}

/**
 * Check whether `value` is a safe URL.
 *
 * @param {State} state
 *   Info passed around.
 * @param {string} key
 *   Field name.
 * @param {Readonly<unknown>} value
 *   Unsafe value.
 * @returns {boolean}
 *   Whether it’s a safe value.
 */
function safeProtocol(state, key, value) {
  const protocols =
    state.schema.protocols && own.call(state.schema.protocols, key)
      ? state.schema.protocols[key]
      : undefined;

  // No protocols defined? Then everything is fine.
  if (!protocols || protocols.length === 0) {
    return true
  }

  const url = String(value);
  const colon = url.indexOf(':');
  const questionMark = url.indexOf('?');
  const numberSign = url.indexOf('#');
  const slash = url.indexOf('/');

  if (
    colon < 0 ||
    // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    (slash > -1 && colon > slash) ||
    (questionMark > -1 && colon > questionMark) ||
    (numberSign > -1 && colon > numberSign)
  ) {
    return true
  }

  let index = -1;

  while (++index < protocols.length) {
    const protocol = protocols[index];

    if (
      colon === protocol.length &&
      url.slice(0, protocol.length) === protocol
    ) {
      return true
    }
  }

  return false
}

/**
 * Add data and position.
 *
 * @param {Nodes} node
 *   Node to patch safe data and position on.
 * @param {Readonly<Record<string, Readonly<unknown>>>} unsafe
 *   Unsafe node-like value.
 * @returns {undefined}
 *   Nothing.
 */
function patch(node, unsafe) {
  const cleanPosition = position$1(
    // @ts-expect-error: looks like a node.
    unsafe
  );

  if (unsafe.data) {
    node.data = structuredClone$1(unsafe.data);
  }

  if (cleanPosition) node.position = cleanPosition;
}

/**
 *
 * @param {Readonly<Array<PropertyDefinition>> | undefined} definitions
 * @param {string} key
 * @returns {Readonly<PropertyDefinition> | undefined}
 */
function findDefinition(definitions, key) {
  /** @type {PropertyDefinition | undefined} */
  let dataDefault;
  let index = -1;

  if (definitions) {
    while (++index < definitions.length) {
      const entry = definitions[index];
      const name = typeof entry === 'string' ? entry : entry[0];

      if (name === key) {
        return entry
      }

      if (name === 'data*') dataDefault = entry;
    }
  }

  if (key.length > 4 && key.slice(0, 4).toLowerCase() === 'data') {
    return dataDefault
  }
}

/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast-util-sanitize').Schema} Schema
 */


/**
 * Sanitize HTML.
 *
 * @param {Schema | null | undefined} [options]
 *   Configuration (optional).
 * @returns
 *   Transform.
 */
function rehypeSanitize(options) {
  /**
   * @param {Root} tree
   *   Tree.
   * @returns {Root}
   *   New tree.
   */
  return function (tree) {
    // Assume root in -> root out.
    const result = /** @type {Root} */ (sanitize(tree, options));
    return result
  }
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const showSystemNotification = /*#__PURE__*/ createAction('SHOW_SYSTEM_NOTIFICATION');
// endregion

const IMPORT_SCRIPT_PATH = '/studio/api/2/plugin/script/plugins/org/craftercms/aiassistant/studio/aiassistant/authoring/import-image-from-url';
/**
 * Studio {@code PluginController.runScript} wraps the script return map under {@code result}
 * (see {@code ResultConstants.RESULT_KEY_RESULT}).
 */
function unwrapPluginScriptBody$1(body) {
    if (!body || typeof body !== 'object')
        return body;
    const o = body;
    const inner = o.result;
    if (inner && typeof inner === 'object' && !Array.isArray(inner))
        return inner;
    return body;
}
const importPromises = new Map();
function cacheKey(siteId, imageUrl, repoPath) {
    return `${siteId}\n${imageUrl}\n${repoPath}`;
}
/**
 * Server downloads {@code imageUrl} and writes under {@code repoPath} (with {@code {yyyy}} macros).
 * Returns the repository path (e.g. {@code /static-assets/...}) suitable for XB asset drag.
 */
async function importRemoteImageToRepo(siteId, imageUrl, repoPath, signal) {
    const trimmedSite = siteId?.trim() || '';
    const trimmedUrl = imageUrl?.trim() || '';
    const trimmedPath = (repoPath).trim();
    if (!trimmedSite)
        throw new Error('importRemoteImageToRepo: missing siteId');
    if (!trimmedUrl)
        throw new Error('importRemoteImageToRepo: missing imageUrl');
    const key = cacheKey(trimmedSite, trimmedUrl, trimmedPath);
    const existing = importPromises.get(key);
    if (existing)
        return existing;
    const p = (async () => {
        try {
            const url = `${IMPORT_SCRIPT_PATH}?siteId=${encodeURIComponent(trimmedSite)}`;
            const res = await fetch(url, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    ...buildStudioAuthHeaders()
                },
                body: JSON.stringify({ imageUrl: trimmedUrl, repoPath: trimmedPath }),
                signal
            });
            const raw = (await res.json().catch(() => ({})));
            const data = unwrapPluginScriptBody$1(raw);
            if (!res.ok || data.ok === false) {
                throw new Error(data.message || `Import failed (${res.status})`);
            }
            const rel = data.relativeUrl?.trim();
            if (!rel)
                throw new Error('Import response missing relativeUrl');
            return rel;
        }
        catch (e) {
            importPromises.delete(key);
            throw e;
        }
    })();
    importPromises.set(key, p);
    return p;
}
function isProbablyRemoteImageUrl(src) {
    const s = src?.trim() ?? '';
    return /^https?:\/\//i.test(s);
}

function fileNameFromUrl(src) {
    try {
        const u = new URL(src, typeof window !== 'undefined' ? window.location.origin : 'https://local');
        const seg = u.pathname.split('/').filter(Boolean).pop();
        if (seg && seg.includes('.'))
            return seg;
    }
    catch {
        // ignore
    }
    if (src.startsWith('/') && src.includes('.')) {
        const seg = src.split('/').filter(Boolean).pop();
        if (seg)
            return seg;
    }
    return 'image.png';
}
function mimeFromUrl(src) {
    const lower = src.toLowerCase();
    if (lower.endsWith('.jpg') || lower.endsWith('.jpeg'))
        return 'image/jpeg';
    if (lower.endsWith('.webp'))
        return 'image/webp';
    if (lower.endsWith('.gif'))
        return 'image/gif';
    if (lower.endsWith('.svg'))
        return 'image/svg+xml';
    return 'image/png';
}
/**
 * Build a {@link SearchItem}-shaped payload for {@link assetDragStarted}, matching PreviewAssetsPanel / MediaCard.
 * Remote URLs stay as-is until drop; {@link installRemoteImageDropImportBridge} imports on {@code UPDATE_FIELD_VALUE_OPERATION}.
 */
function searchItemFromImageSrc(src, alt) {
    const name = (alt && alt.trim()) || fileNameFromUrl(src);
    const now = new Date().toISOString();
    return {
        path: src,
        name,
        type: 'Image',
        mimeType: mimeFromUrl(src),
        previewUrl: src,
        lastModifier: '',
        lastModified: now,
        size: 0,
        snippets: ''
    };
}
const DRAG_CARD_THUMB_W = 112;
const DRAG_CARD_THUMB_H = 72;
/**
 * Drag preview card. {@code setDragImage} must run synchronously in {@code dragstart}, so the blob used
 * for the thumbnail is prefetched earlier; we only clone an already-decoded {@code <img>} (hidden blob
 * preview or the visible chat image). Import/drop still uses the original URL path.
 */
function attachRepresentativeDragCard(e, title, sourceImg, blobThumbImg, useBlobThumb) {
    const dt = e.dataTransfer;
    if (!dt)
        return;
    dt.effectAllowed = 'copy';
    const pad = 8;
    const el = document.createElement('div');
    el.style.cssText = `position:fixed;right:12px;bottom:12px;width:132px;padding:${pad}px;background:linear-gradient(145deg,#2d2d2d,#1a1a1a);color:#fff;border-radius:8px;z-index:2147483647;box-shadow:0 6px 20px rgba(0,0,0,0.4);pointer-events:none;border:1px solid rgba(255,255,255,0.12)`;
    let thumbEl = null;
    const blobReady = useBlobThumb &&
        blobThumbImg &&
        blobThumbImg.complete &&
        blobThumbImg.naturalWidth > 0;
    const sourceReady = sourceImg &&
        sourceImg.complete &&
        (sourceImg.naturalWidth > 0 || sourceImg.getBoundingClientRect().width > 0);
    if (blobReady && blobThumbImg) {
        const thumb = blobThumbImg.cloneNode(true);
        thumb.removeAttribute('draggable');
        thumb.style.cssText = `display:block;width:${DRAG_CARD_THUMB_W}px;height:${DRAG_CARD_THUMB_H}px;object-fit:cover;border-radius:4px;margin-bottom:6px;background:#1a1a1a`;
        el.appendChild(thumb);
        thumbEl = thumb;
    }
    else if (sourceReady && sourceImg) {
        const thumb = sourceImg.cloneNode(true);
        thumb.removeAttribute('draggable');
        thumb.style.cssText = `display:block;width:${DRAG_CARD_THUMB_W}px;height:${DRAG_CARD_THUMB_H}px;object-fit:cover;border-radius:4px;margin-bottom:6px;background:#1a1a1a`;
        el.appendChild(thumb);
        thumbEl = thumb;
    }
    else {
        const icon = document.createElement('div');
        icon.textContent = '🖼';
        icon.style.cssText = 'font-size:22px;line-height:1;margin-bottom:4px;text-align:center';
        el.appendChild(icon);
    }
    const line2 = document.createElement('div');
    line2.textContent = title.length > 42 ? `${title.slice(0, 39)}…` : title || 'Image';
    line2.style.cssText = 'font:11px/1.35 system-ui,sans-serif;opacity:0.92;word-break:break-word';
    el.appendChild(line2);
    const line3 = document.createElement('div');
    line3.textContent = 'Drop on image field';
    line3.style.cssText = 'font:10px/1.2 system-ui,sans-serif;opacity:0.65;margin-top:4px';
    el.appendChild(line3);
    document.body.appendChild(el);
    void el.offsetHeight;
    const sr = sourceImg?.getBoundingClientRect();
    let hx = el.offsetWidth / 2;
    let hy = el.offsetHeight / 2;
    if (thumbEl && sr && sr.width > 0 && sr.height > 0) {
        const ox = Math.max(0, Math.min(e.clientX - sr.left, sr.width));
        const oy = Math.max(0, Math.min(e.clientY - sr.top, sr.height));
        hx = pad + (ox / sr.width) * DRAG_CARD_THUMB_W;
        hy = pad + (oy / sr.height) * DRAG_CARD_THUMB_H;
    }
    try {
        dt.setDragImage(el, hx, hy);
    }
    catch {
        el.remove();
        return;
    }
    return () => {
        el.remove();
    };
}
function StudioDraggableImage(props) {
    const { src, alt } = props;
    const theme = useTheme();
    const dispatch = useDispatch();
    const imgRef = useRef(null);
    const blobImgRef = useRef(null);
    const blobUrlRef = useRef(null);
    const removeGhostRef = useRef(null);
    const activeSiteId = useActiveSiteId();
    const effectiveSite = activeSiteId?.trim() || '';
    const [blobPreviewUrl, setBlobPreviewUrl] = useState(null);
    /** True once the object URL is decoded so we can show it (avoids visible flicker from remote URL expiry/reloads). */
    const [blobDecoded, setBlobDecoded] = useState(false);
    const [blobLoading, setBlobLoading] = useState(false);
    useEffect(() => {
        return () => {
            removeGhostRef.current?.();
            removeGhostRef.current = null;
        };
    }, []);
    const trimmed = src?.trim() ?? '';
    const isRemote = trimmed ? isProbablyRemoteImageUrl(trimmed) : false;
    /** Fetch into a blob URL for stable in-chat display and drag thumbnail; drop/import still uses {@code trimmed}. */
    useEffect(() => {
        const ac = new AbortController();
        if (blobUrlRef.current) {
            URL.revokeObjectURL(blobUrlRef.current);
            blobUrlRef.current = null;
        }
        setBlobPreviewUrl(null);
        setBlobDecoded(false);
        setBlobLoading(false);
        if (!trimmed || trimmed.startsWith('data:')) {
            setBlobDecoded(true);
            return () => ac.abort();
        }
        const fetchUrl = trimmed.startsWith('http://') || trimmed.startsWith('https://')
            ? trimmed
            : new URL(trimmed, typeof window !== 'undefined' ? window.location.href : 'https://local').href;
        const init = {
            signal: ac.signal,
            credentials: isProbablyRemoteImageUrl(trimmed) ? 'omit' : 'same-origin',
            mode: isProbablyRemoteImageUrl(trimmed) ? 'cors' : 'same-origin'
        };
        setBlobLoading(true);
        void fetch(fetchUrl, init)
            .then((r) => {
            if (!r.ok)
                throw new Error(String(r.status));
            return r.blob();
        })
            .then((blob) => {
            if (ac.signal.aborted)
                return;
            const u = URL.createObjectURL(blob);
            blobUrlRef.current = u;
            setBlobPreviewUrl(u);
            setBlobLoading(false);
        })
            .catch(() => {
            if (ac.signal.aborted)
                return;
            if (blobUrlRef.current) {
                URL.revokeObjectURL(blobUrlRef.current);
                blobUrlRef.current = null;
            }
            setBlobPreviewUrl(null);
            setBlobLoading(false);
            setBlobDecoded(true);
        });
        return () => {
            ac.abort();
            setBlobLoading(false);
            if (blobUrlRef.current) {
                URL.revokeObjectURL(blobUrlRef.current);
                blobUrlRef.current = null;
            }
        };
    }, [trimmed]);
    /** Decode blob URL off-DOM so we only swap the visible {@code src} once (reduces flicker vs loading remote URL in {@code <img>}). */
    useEffect(() => {
        if (!blobPreviewUrl) {
            setBlobDecoded(false);
            return;
        }
        const im = new Image();
        im.onload = () => {
            setBlobDecoded(true);
        };
        im.onerror = () => {
            setBlobDecoded(false);
        };
        im.src = blobPreviewUrl;
        return () => {
            im.onload = null;
            im.onerror = null;
        };
    }, [blobPreviewUrl]);
    const onDragStart = useCallback((e) => {
        if (!trimmed)
            return;
        if (isRemote && !effectiveSite) {
            dispatch(showSystemNotification({
                message: 'Cannot drag remote image: no active site. Open a project in Studio.'
            }));
            e.preventDefault();
            return;
        }
        removeGhostRef.current?.();
        const cardTitle = (alt ?? '').trim() || fileNameFromUrl(trimmed);
        const useBlob = Boolean(blobPreviewUrl && blobDecoded);
        const removeGhost = attachRepresentativeDragCard(e, cardTitle, imgRef.current, blobImgRef.current, useBlob);
        removeGhostRef.current = typeof removeGhost === 'function' ? removeGhost : null;
        dispatch(setPreviewEditMode({ editMode: true }));
        const asset = searchItemFromImageSrc(trimmed, alt ?? undefined);
        const previewBase = typeof window !== 'undefined' && window.authoring
            ?.previewAppBaseUri;
        if (previewBase && trimmed.startsWith('/')) {
            asset.previewUrl = `${previewBase}${trimmed}?${Date.now()}`;
        }
        getHostToGuestBus().next(assetDragStarted({ asset }));
    }, [trimmed, isRemote, effectiveSite, alt, dispatch, blobPreviewUrl, blobDecoded]);
    const onDragEnd = useCallback(() => {
        removeGhostRef.current?.();
        removeGhostRef.current = null;
        getHostToGuestBus().next(assetDragEnded());
    }, []);
    if (!trimmed)
        return null;
    const canDrag = !isRemote || Boolean(effectiveSite);
    const caption = isRemote
        ? 'Drag onto an image field in preview (imports when you drop)'
        : 'Drag into preview to place (like Assets panel)';
    const showBlobDisplay = Boolean(blobPreviewUrl && blobDecoded);
    const displaySrc = showBlobDisplay ? blobPreviewUrl : trimmed;
    return (jsxs(Box, { sx: {
            my: 1,
            display: 'inline-block',
            maxWidth: '100%',
            position: 'relative',
            verticalAlign: 'top',
            borderRadius: 1,
            border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[300]}`,
            overflow: 'hidden',
            bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50]
        }, children: [jsx("img", { ref: (el) => {
                    imgRef.current = el;
                    blobImgRef.current = showBlobDisplay ? el : null;
                }, src: displaySrc, alt: alt ?? '', draggable: canDrag, onDragStart: onDragStart, onDragEnd: onDragEnd, style: {
                    display: 'block',
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: 320,
                    cursor: canDrag ? 'grab' : 'default',
                    opacity: 1
                } }), blobLoading && !showBlobDisplay && (jsx(Box, { sx: {
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(0,0,0,0.28)',
                    pointerEvents: 'none'
                }, children: jsx(CircularProgress, { size: 28, sx: { color: '#fff' } }) })), jsxs(Box, { sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 1,
                    py: 0.5,
                    borderTop: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[300]}`,
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100]
                }, children: [jsx(DragIndicatorRounded, { sx: { fontSize: 18, opacity: 0.7, color: 'text.secondary' } }), jsx(Typography, { variant: "caption", color: "text.secondary", sx: { userSelect: 'none' }, children: blobLoading ? 'Preparing drag image preview...' : caption })] })] }));
}

/**
 * OpenAI / streaming payloads sometimes leave escape sequences as the two-character
 * sequences backslash+n or backslash+t instead of real newlines/tabs. Markdown then
 * shows one long line. Convert those literals to actual whitespace for display.
 */
function normalizeOpenAiLiteralEscapes(input) {
    if (!input)
        return input;
    return input
        .replace(/\\r\\n/g, '\n')
        .replace(/\\n/g, '\n')
        .replace(/\\r/g, '\n')
        .replace(/\\t/g, '\t');
}
function fencedBlockSanitizeSchema() {
    return {
        ...defaultSchema,
        attributes: {
            ...defaultSchema.attributes,
            code: [...(defaultSchema.attributes?.code || []), ['className']]
        }
    };
}
/** Rendered markdown inside a fenced markdown code block; nested fenced code renders as pre/code only (no CodeBlock recursion). */
function DraftMarkdownPreview(props) {
    const theme = useTheme();
    const sanitizeSchema = useMemo(() => fencedBlockSanitizeSchema(), []);
    const { value } = props;
    return (jsx(Box, { sx: {
            maxHeight: 440,
            overflow: 'auto',
            p: 1.25,
            bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50',
            borderRadius: 1,
            border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200]}`
        }, children: jsx(Markdown, { remarkPlugins: [remarkGfm], rehypePlugins: [[rehypeSanitize, sanitizeSchema]], components: {
                h1: ({ children }) => (jsx(Typography, { variant: "h6", sx: { fontWeight: 700, mt: 0.5, mb: 0.5 }, children: children })),
                h2: ({ children }) => (jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 700, mt: 1, mb: 0.5 }, children: children })),
                h3: ({ children }) => (jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 700, mt: 0.75, mb: 0.35 }, children: children })),
                p: ({ children }) => (jsx(Typography, { variant: "body2", sx: { whiteSpace: 'pre-wrap', mb: 0.75 }, children: children })),
                ul: ({ children }) => (jsx(Box, { component: "ul", sx: { m: 0, pl: 2.2, mb: 0.75 }, children: children })),
                ol: ({ children }) => (jsx(Box, { component: "ol", sx: { m: 0, pl: 2.2, mb: 0.75 }, children: children })),
                li: ({ children }) => (jsx(Box, { component: "li", sx: { mb: 0.25, whiteSpace: 'normal' }, children: children })),
                strong: ({ children }) => (jsx(Box, { component: "strong", sx: { fontWeight: 700 }, children: children })),
                a: ({ href, children }) => (jsx(Box, { component: "a", href: href, target: "_blank", rel: "noreferrer", sx: { color: theme.palette.primary.main }, children: children })),
                code: ({ className, children }) => {
                    const raw = String(children ?? '').replace(/\n$/, '');
                    const isInline = !className;
                    if (isInline) {
                        return (jsx(Box, { component: "code", sx: {
                                px: 0.35,
                                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                                fontSize: '0.8125rem',
                                bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.200',
                                borderRadius: 0.5
                            }, children: raw }));
                    }
                    return (jsx(Box, { component: "pre", sx: {
                            m: 0,
                            my: 1,
                            p: 1,
                            overflow: 'auto',
                            borderRadius: 1,
                            fontSize: 12.5,
                            bgcolor: theme.palette.mode === 'dark' ? 'grey.950' : 'grey.100',
                            border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[300]}`
                        }, children: jsx("code", { children: raw }) }));
                }
            }, children: value }) }));
}
async function copyToClipboard$1(text) {
    try {
        await navigator.clipboard.writeText(text);
    }
    catch {
        // Fallback for contexts where Clipboard API is unavailable
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
    }
}
function CodeBlock(props) {
    const theme = useTheme();
    const { language, value } = props;
    const lang = (language || '').toLowerCase();
    const isHtml = lang === 'html' || lang === 'htm';
    const isMarkdownDraft = lang === 'markdown' || lang === 'md';
    const [htmlMode, setHtmlMode] = useState('preview');
    const [mdMode, setMdMode] = useState('preview');
    const header = (jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: {
            px: 1,
            py: 0.5,
            borderBottom: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200]}`
        }, children: [jsx(Typography, { variant: "caption", sx: { fontWeight: 600, opacity: 0.8 }, children: lang || 'code' }), jsx(Stack, { direction: "row", spacing: 0.5, alignItems: "center", children: jsx(Tooltip, { title: "Copy", children: jsx(IconButton, { size: "small", onClick: () => void copyToClipboard$1(value), "aria-label": "Copy code", children: jsx(ContentCopyRounded, { fontSize: "inherit" }) }) }) })] }));
    return (jsx(Paper, { elevation: 0, sx: {
            my: 1,
            overflow: 'hidden',
            borderRadius: 1.5,
            border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200]}`,
            background: theme.palette.mode === 'dark' ? theme.palette.grey[950] : theme.palette.grey[50]
        }, children: isHtml ? (jsxs(Fragment, { children: [jsxs(Box, { sx: { px: 1.5, pt: 1.5, pb: 0.75 }, children: [jsx(Typography, { variant: "subtitle1", component: "div", sx: { fontWeight: 700, lineHeight: 1.35 }, children: "Content preview" }), jsx(Typography, { variant: "caption", color: "text.secondary", component: "div", sx: { mt: 0.5, display: 'block', lineHeight: 1.4 }, children: "The tinted box below is only this assistant HTML snippet in the chat. It is not your live site or Studio preview." })] }), jsxs(Box, { sx: {
                        mx: 1.5,
                        mb: 1.5,
                        pl: 1.25,
                        pr: 0.5,
                        py: 0.75,
                        borderRadius: 1,
                        borderLeft: `4px solid ${theme.palette.primary.main}`,
                        background: theme.palette.mode === 'dark'
                            ? 'rgba(144, 202, 249, 0.09)'
                            : 'rgba(25, 118, 210, 0.07)',
                        boxShadow: `inset 0 0 0 1px ${theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[300]}`
                    }, children: [jsx(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { pr: 0.5 }, children: header }), jsxs(Tabs, { value: htmlMode, onChange: (_, v) => setHtmlMode(v), sx: {
                                minHeight: 34,
                                px: 1,
                                borderBottom: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200]}`
                            }, children: [jsx(Tab, { value: "source", label: "Source", sx: { minHeight: 34, py: 0.5 } }), jsx(Tab, { value: "preview", label: "Preview", sx: { minHeight: 34, py: 0.5 } })] }), htmlMode === 'preview' ? (jsx(Box, { sx: { p: 1 }, children: jsx(Box, { component: "iframe", sandbox: "", sx: {
                                    width: '100%',
                                    height: 260,
                                    border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200]}`,
                                    borderRadius: 1,
                                    background: '#fff'
                                }, srcDoc: value, title: "HTML preview" }) })) : (jsx(Box, { component: "pre", sx: {
                                m: 0,
                                p: 1.25,
                                overflow: 'auto',
                                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                                fontSize: 12.5,
                                lineHeight: 1.5
                            }, children: jsx("code", { children: value }) }))] })] })) : isMarkdownDraft ? (jsxs(Fragment, { children: [jsxs(Box, { sx: { px: 1.5, pt: 1.5, pb: 0.75 }, children: [jsx(Typography, { variant: "subtitle1", component: "div", sx: { fontWeight: 700, lineHeight: 1.35 }, children: "Draft preview" }), jsx(Typography, { variant: "caption", color: "text.secondary", component: "div", sx: { mt: 0.5, display: 'block', lineHeight: 1.4 }, children: "This tinted area is the assistant draft in chat only. Nothing is saved in the CMS until WriteContent succeeds on a repository path." })] }), jsxs(Box, { sx: {
                        mx: 1.5,
                        mb: 1.5,
                        pl: 1.25,
                        pr: 0.5,
                        py: 0.75,
                        borderRadius: 1,
                        borderLeft: `4px solid ${theme.palette.secondary.main}`,
                        background: theme.palette.mode === 'dark'
                            ? 'rgba(186, 104, 200, 0.1)'
                            : 'rgba(123, 31, 162, 0.06)',
                        boxShadow: `inset 0 0 0 1px ${theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[300]}`
                    }, children: [jsx(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: { pr: 0.5 }, children: header }), jsxs(Tabs, { value: mdMode, onChange: (_, v) => setMdMode(v), sx: {
                                minHeight: 34,
                                px: 1,
                                borderBottom: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200]}`
                            }, children: [jsx(Tab, { value: "source", label: "Source", sx: { minHeight: 34, py: 0.5 } }), jsx(Tab, { value: "preview", label: "Preview", sx: { minHeight: 34, py: 0.5 } })] }), mdMode === 'preview' ? (jsx(Box, { sx: { p: 1 }, children: jsx(DraftMarkdownPreview, { value: value }) })) : (jsx(Box, { component: "pre", sx: {
                                m: 0,
                                p: 1.25,
                                overflow: 'auto',
                                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                                fontSize: 12.5,
                                lineHeight: 1.5
                            }, children: jsx("code", { children: value }) }))] })] })) : (jsxs(Fragment, { children: [header, jsx(Box, { component: "pre", sx: {
                        m: 0,
                        p: 1.25,
                        overflow: 'auto',
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                        fontSize: 12.5,
                        lineHeight: 1.5
                    }, children: jsx("code", { children: value }) })] })) }));
}
function MarkdownMessage(props) {
    const theme = useTheme();
    const { text } = props;
    const displayText = useMemo(() => normalizeOpenAiLiteralEscapes(text), [text]);
    const sanitizeSchema = useMemo(() => {
        // defaultSchema already allows table, thead, tbody, tr, th, td (GitHub-style)
        return {
            ...defaultSchema,
            attributes: {
                ...defaultSchema.attributes,
                code: [...(defaultSchema.attributes?.code || []), ['className']]
            }
        };
    }, []);
    return (jsx(Box, { sx: {
            '& :first-of-type': { mt: 0 },
            '& :last-of-type': { mb: 0 }
        }, children: jsx(Markdown, { remarkPlugins: [remarkGfm], rehypePlugins: [[rehypeSanitize, sanitizeSchema]], components: {
                h1: ({ children }) => (jsx(Typography, { variant: "h6", sx: { fontWeight: 700, mt: 1, mb: 0.5 }, children: children })),
                h2: ({ children }) => (jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 700, mt: 1, mb: 0.5 }, children: children })),
                h3: ({ children }) => (jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 700, mt: 1, mb: 0.5 }, children: children })),
                p: ({ children }) => (jsx(Typography, { variant: "body2", sx: { whiteSpace: 'pre-wrap', mb: 0.75 }, children: children })),
                ul: ({ children }) => (jsx(Box, { component: "ul", sx: { m: 0, pl: 2.2, mb: 0.75 }, children: children })),
                ol: ({ children }) => (jsx(Box, { component: "ol", sx: { m: 0, pl: 2.2, mb: 0.75 }, children: children })),
                li: ({ children }) => (jsx(Box, { component: "li", sx: {
                        mb: 0.25,
                        whiteSpace: 'normal',
                        '& > p': {
                            display: 'inline',
                            m: 0
                        },
                        '& > p + p': {
                            display: 'block',
                            mt: 0.5
                        }
                    }, children: children })),
                strong: ({ children }) => (jsx(Box, { component: "strong", sx: { fontWeight: 700 }, children: children })),
                em: ({ children }) => (jsx(Box, { component: "em", sx: { fontStyle: 'italic' }, children: children })),
                a: ({ href, children }) => (jsx(Box, { component: "a", href: href, target: "_blank", rel: "noreferrer", sx: { color: theme.palette.primary.main }, children: children })),
                img: ({ src, alt }) => (jsx(StudioDraggableImage, { src: src, alt: alt })),
                table: ({ children }) => (jsx(TableContainer, { component: Paper, elevation: 0, sx: {
                        my: 1.5,
                        overflow: 'auto',
                        borderRadius: 1.5,
                        border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200]}`,
                        background: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50]
                    }, children: jsx(Table, { size: "small", stickyHeader: true, sx: { minWidth: 280 }, children: children }) })),
                thead: ({ children }) => jsx(TableHead, { children: children }),
                tbody: ({ children }) => jsx(TableBody, { children: children }),
                tr: ({ children }) => (jsx(TableRow, { sx: {
                        '&:last-child td, &:last-child th': { borderBottom: 0 }
                    }, children: children })),
                th: ({ children }) => (jsx(TableCell, { component: "th", scope: "col", sx: {
                        fontWeight: 700,
                        py: 1,
                        px: 1.5,
                        borderBottom: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[300]}`,
                        background: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
                        color: theme.palette.text.primary,
                        fontSize: '0.8125rem'
                    }, children: children })),
                td: ({ children }) => (jsx(TableCell, { sx: {
                        py: 1,
                        px: 1.5,
                        borderBottom: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200]}`,
                        fontSize: '0.8125rem'
                    }, children: children })),
                code: ({ className, children, ...rest }) => {
                    const raw = String(children ?? '');
                    const isInline = !className;
                    if (isInline) {
                        return (jsx(Box, { component: "code", sx: {
                                px: 0.5,
                                py: 0.1,
                                borderRadius: 0.75,
                                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                                fontSize: 12.5,
                                background: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
                                border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200]}`
                            }, children: raw }));
                    }
                    const match = /language-(\w+)/.exec(className || '');
                    const language = match?.[1];
                    return jsx(CodeBlock, { language: language, value: raw.replace(/\n$/, '') });
                }
            }, children: displayText }) }));
}

function getSpeechRecognitionCtor() {
    if (typeof window === 'undefined')
        return null;
    const w = window;
    return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

/**
 * Form-engine assistant passes {@link AiAssistantChatProps.getAuthoringFormContext}; XB / ICE does not.
 * Form state lives in the browser until Save; preview chat uses repo paths + server-side tools.
 */
function isFormEngineAuthoringChat(getAuthoringFormContext) {
    return typeof getAuthoringFormContext === 'function';
}
/** Nearest ancestor that scrolls (e.g. ICE `ResizeableDrawer` drawerBody uses overflow-y: auto). */
function getScrollParent$1(node) {
    let el = node?.parentElement ?? null;
    while (el) {
        const { overflowY, overflow } = getComputedStyle(el);
        const oy = overflowY || overflow;
        if (oy === 'auto' || oy === 'scroll' || oy === 'overlay')
            return el;
        el = el.parentElement;
    }
    return null;
}
/** Best-effort: Studio preview item → human-readable content-type label (shape varies by Studio version). */
function resolvePreviewContentTypeLabel(item) {
    if (!item || typeof item !== 'object')
        return undefined;
    const o = item;
    const nestedCt = o.contentType;
    if (nestedCt && typeof nestedCt === 'object') {
        const ct = nestedCt;
        for (const k of ['label', 'name', 'displayName', 'internalName']) {
            const v = ct[k];
            if (typeof v === 'string' && v.trim())
                return v.trim();
        }
    }
    for (const k of ['contentTypeLabel', 'contentTypeName', 'typeLabel', 'contentTypeDisplayName']) {
        const v = o[k];
        if (typeof v === 'string' && v.trim())
            return v.trim();
    }
    return undefined;
}
/** Studio XB shell: `…/studio/preview#/?page=…&site=…` (matches the author’s address bar). */
function studioPreviewShellUrlLooksLikeAuthorBar(u) {
    const low = u.toLowerCase();
    return low.includes('/studio/preview') && u.includes('#');
}
/**
 * Prefer the real Studio address bar when the chat runs in the top Studio window; otherwise omit (server synthesizes).
 */
function pickStudioPreviewPageUrlForServer(previewItem) {
    const fromItem = previewItem && typeof previewItem === 'object' && typeof previewItem.previewUrl === 'string'
        ? previewItem.previewUrl.trim()
        : '';
    const fromWin = typeof window !== 'undefined' && typeof window.location?.href === 'string' ? window.location.href.trim() : '';
    for (const c of [fromItem, fromWin]) {
        if (c && studioPreviewShellUrlLooksLikeAuthorBar(c))
            return c;
    }
    return undefined;
}
/** Rough markdown → plain text for speech synthesis (avoid reading asterisks and code fences). */
function textForSpeechSynthesis(markdown) {
    if (!markdown)
        return '';
    let s = markdown
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/^#{1,6}\s+/gm, '')
        .replace(/\[(.*?)\]\([^)]*\)/g, '$1')
        .replace(/^\s*[-*+]\s+/gm, '')
        .replace(/^\s*\d+\.\s+/gm, '')
        .replace(/<[^>]+>/g, ' ');
    s = s.replace(/\s+/g, ' ').trim();
    return s;
}
function isSpeechSynthesisAvailable() {
    return typeof window !== 'undefined' && typeof window.speechSynthesis !== 'undefined';
}
/** True when `fetch` / stream read failed because the {@link AbortSignal} fired. */
function isFetchAbortError(e) {
    if (typeof DOMException !== 'undefined' && e instanceof DOMException && e.name === 'AbortError')
        return true;
    if (e instanceof Error && e.name === 'AbortError')
        return true;
    const msg = e instanceof Error ? e.message : String(e);
    return /aborted a request|AbortError|signal is aborted/i.test(msg);
}
/** First line only, capped — avoid dumping stack traces into the chat bubble. */
function sanitizeErrorForAuthor(errText) {
    const t = errText.trim();
    if (!t)
        return 'See Studio logs for details.';
    const first = t.split('\n')[0].trim();
    if (first.length > 320)
        return `${first.slice(0, 317)}…`;
    return first;
}
/** Server-injected debug block — omit from the chat bubble. */
function stripOrchestrationDebugComment(text) {
    if (!text)
        return text;
    return text
        .replace(/<!--CRAFTERRQ_ORCH[\s\S]*?-->/gi, '')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}
/**
 * The plan usually streams into {@link UiMessage.assistantPreToolsText}; the final chunk often repeats ## Plan.
 * Show the post-tool section once (prefer ## Plan Execution onward).
 */
function dedupeAssistantPostToolsMarkdown(preTools, tail) {
    const t0 = stripOrchestrationDebugComment(tail);
    const pre = (preTools ?? '').trim();
    if (!pre || !t0)
        return t0;
    if (!/^##\s*plan\b/im.test(pre))
        return t0;
    const nlExec = /\n##\s*Plan Execution\b/im.exec(t0);
    if (nlExec)
        return t0.slice(nlExec.index + 1).trimStart();
    if (/^##\s*Plan Execution\b/im.test(t0))
        return t0.trimStart();
    const nlPlan = /\n##\s*Plan\b/im.exec(t0);
    if (nlPlan) {
        const tailFrom = t0.slice(nlPlan.index + 1);
        const next = tailFrom.search(/\n##\s+/m);
        if (next >= 0)
            return tailFrom.slice(next + 1).trimStart();
    }
    if (/^##\s*Plan\b/im.test(t0)) {
        const next = t0.search(/\n##\s+/m);
        if (next >= 0)
            return t0.slice(next + 1).trimStart();
    }
    return t0;
}
/**
 * Drops memorized lazy meta-plan lines some models still emit (matches server-side plan gate / strip).
 * Defense when Studio runs an older plugin Groovy build or a provider path skips server sanitization.
 */
function stripForbiddenLazyPlanLines(raw) {
    if (!raw?.trim())
        return raw;
    const normLine = (s) => s
        .trim()
        .replace(/\u00a0/g, ' ')
        .replace(/\s+/g, ' ')
        .toLowerCase();
    const lineForbidden = (trimmed) => {
        const n = normLine(trimmed);
        if (!n)
            return false;
        if (n.includes('execute the user request using the cms tools described in the studio authoring system message')) {
            return true;
        }
        if (n.includes('execute the user request using the cms tools described'))
            return true;
        if (n.includes('execute the user request using the cms tool described'))
            return true;
        if (n.includes('using the cms tools described in the studio authoring system message'))
            return true;
        if (n.includes('using the cms tool described in the studio authoring system message'))
            return true;
        if (n.includes('execute the user request') && n.includes('cms tool') && n.includes('system message')) {
            return true;
        }
        if (n.includes('execute the user request') && n.includes('studio authoring') && n.includes('message')) {
            return true;
        }
        return false;
    };
    const lines = raw.split(/\r?\n/);
    const out = [];
    let i = 0;
    while (i < lines.length) {
        const line = lines[i];
        const trimmed = line.trim();
        if (lineForbidden(trimmed)) {
            i++;
            continue;
        }
        const tl = trimmed.toLowerCase();
        const planOnly = tl === 'plan' ||
            tl === 'plan:' ||
            tl === '**plan**' ||
            /^#+\s*plan\s*$/i.test(tl);
        if (planOnly) {
            let j = i + 1;
            while (j < lines.length && !lines[j].trim()) {
                j++;
            }
            if (j < lines.length && lineForbidden(lines[j].trim())) {
                i = j + 1;
                continue;
            }
        }
        out.push(line);
        i++;
    }
    return out.join('\n').replace(/\n{3,}/g, '\n\n');
}
function assistantVisibleTextLen(m) {
    return ((m.assistantPreToolsText || '').length +
        (m.toolProgressText || '').length +
        (m.text || '').length +
        (m.reasoningStreamText || '').length);
}
/** Collapse whitespace and case for deduping 📋 chips (pre-tools ## Plan vs post-tools ## Plan Execution often repeat the same steps). */
function verificationPromptDedupeKey(step) {
    return step
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .replace(/[…]+$/u, '')
        .replace(/\.+$/u, '')
        .trim();
}
/**
 * Pulls 📋 lines from ## Plan / ## Plan Execution so authors can one-click re-run a verification step as a new prompt.
 * At most **three** chips — combined markdown often contains the same checklist twice (plan + execution).
 */
function extractVerificationPrompts(markdown) {
    const raw = (markdown || '').trim();
    if (!raw)
        return [];
    const lines = raw.split('\n');
    const out = [];
    const seen = new Set();
    let inPlanSection = false;
    const max = 3;
    for (const line of lines) {
        if (out.length >= max)
            break;
        const t = line.trim();
        if (/^##\s+plan\b/i.test(t) || /^##\s+plan\s+execution\b/i.test(t)) {
            inPlanSection = true;
            continue;
        }
        if (/^##\s+/i.test(t)) {
            inPlanSection = false;
            continue;
        }
        if (!inPlanSection)
            continue;
        const m = t.match(/^📋\s*(.+)$/);
        if (!m)
            continue;
        const step = m[1]
            .replace(/✅\s*$/u, '')
            .replace(/❌\s*$/u, '')
            .replace(/⚠️\s*$/u, '')
            .replace(/⬜\s*$/u, '')
            .replace(/\s+/g, ' ')
            .trim();
        if (step.length < 8)
            continue;
        const key = verificationPromptDedupeKey(step);
        if (!key || seen.has(key))
            continue;
        seen.add(key);
        out.push(step);
    }
    return out;
}
/** Strip common markdown bold from a line for trigger matching. */
function stripMarkdownBold(s) {
    return (s || '').replace(/\*\*/g, '').trim();
}
/**
 * True when the line introduces optional follow-up actions (not a checklist 📋 step).
 */
function isFollowUpTriggerLine(trimmed) {
    const n = stripMarkdownBold(trimmed);
    if (!n)
        return false;
    if (/^would you like (?:me )?to\b/i.test(n))
        return true;
    if (/^open items\b/i.test(n))
        return true;
    if (/^next steps\b/i.test(n))
        return true;
    if (/^what would you like\b/i.test(n))
        return true;
    if (/^optional\b/i.test(n) && /:/.test(n))
        return true;
    return false;
}
/**
 * Plain-line follow-up after "Would you like…" — avoid capturing section labels or preview URLs.
 */
function looksLikeFollowUpPromptClause(t) {
    const s = t.trim();
    if (s.length < 10)
        return false;
    if (/^https?:\/\//i.test(s))
        return false;
    if (/^[-*]\s*📋/.test(s))
        return false;
    if (/^(review|preview|open)\b/i.test(s) && /:?\s*$/i.test(s) && s.length < 55)
        return false;
    if (/[?]$/.test(s))
        return true;
    return /^(mark|generate|add|publish|set|update|create|remove|delete|move|rename|link|unlink|feature|include|exclude|attach|detach|schedule|unschedule|localize|translate|revert|undo)\b/i.test(s);
}
/**
 * Pulls suggested follow-up lines after "Would you like me to:" / "Open items…" / etc.
 * so authors can one-click send them like 📋 verification chips.
 */
function extractFollowUpActionPrompts(markdown) {
    const raw = normalizeOpenAiLiteralEscapes((markdown || '').trim());
    if (!raw)
        return [];
    const lines = raw.split(/\r?\n/);
    const out = [];
    const seen = new Set();
    let mode = 'scan';
    let blankRun = 0;
    const max = 8;
    for (const rawLine of lines) {
        const t = rawLine.trim();
        if (!t) {
            if (mode === 'collect') {
                blankRun++;
                if (blankRun >= 2)
                    break;
            }
            continue;
        }
        blankRun = 0;
        if (t.startsWith('<!--') || /^##\s+/.test(t) || /^🛠️/.test(t)) {
            if (mode === 'collect')
                break;
            continue;
        }
        if (mode === 'scan') {
            if (isFollowUpTriggerLine(t)) {
                mode = 'collect';
            }
            continue;
        }
        // collect
        let item = '';
        const listHyphen = t.match(/^\s*[-*]\s+(.+)$/);
        const listNum = t.match(/^\s*\d+[.)]\s+(.+)$/);
        if (listHyphen)
            item = listHyphen[1].trim();
        else if (listNum)
            item = listNum[1].trim();
        else if (looksLikeFollowUpPromptClause(t))
            item = t;
        else
            continue;
        if (item.length < 8)
            continue;
        if (/^https?:\/\//i.test(item))
            continue;
        const key = verificationPromptDedupeKey(item);
        if (!key || seen.has(key))
            continue;
        seen.add(key);
        out.push(item);
        if (out.length >= max)
            break;
    }
    return out;
}
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
    }
    catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
    }
}
function expandPromptMacros(input, ctx) {
    if (!input)
        return input;
    return input
        .split('DATE_TODAY').join(ctx.dateToday)
        .split('TIME_NOW').join(ctx.timeNow)
        .split('CURRENT_PAGE').join(ctx.currentPage)
        .split('CURRENT_CONTENT_PATH').join(ctx.currentContentPath)
        .split('CURRENT_USERNAME').join(ctx.currentUsername);
}
/** Normalize content type id to path form (e.g. "page/home" -> "/page/home"). */
function normalizeContentTypeId(id) {
    const t = (id || '').trim();
    return t.startsWith('/') ? t : `/${t}`;
}
/**
 * Fetch form definition XML for a content type from Studio config.
 * Path: /content-types/{contentTypeId}/form-definition.xml (studio module).
 */
async function fetchFormDefinitionXml(siteId, contentTypeId) {
    const normalized = normalizeContentTypeId(contentTypeId);
    const path = `/content-types${normalized}/form-definition.xml`;
    const xml = await firstValueFrom(fetchConfigurationXML(siteId, path, 'studio'));
    return xml ?? '';
}
const CONTENT_TYPE_MACRO_PATTERN = /CONTENT_TYPE:([a-zA-Z0-9/_.-]+)/g;
/**
 * Expand CURRENT_CONTENT_TYPE and CONTENT_TYPE:name macros by loading form definitions.
 * CURRENT_CONTENT_TYPE uses the current preview item's content type.
 * CONTENT_TYPE:page/home (etc.) loads the form for that content type path.
 */
async function expandContentTypeMacros(prompt, siteId, currentContentTypeId) {
    if (!prompt || (!prompt.includes('CURRENT_CONTENT_TYPE') && !prompt.includes('CONTENT_TYPE:')))
        return prompt;
    let out = prompt;
    if (out.includes('CURRENT_CONTENT_TYPE')) {
        const ct = (currentContentTypeId || '').trim() ? normalizeContentTypeId(currentContentTypeId) : '';
        try {
            const xml = ct ? await fetchFormDefinitionXml(siteId, ct) : '';
            out = out.split('CURRENT_CONTENT_TYPE').join(xml || '[No form definition for current item]');
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            out = out.split('CURRENT_CONTENT_TYPE').join(`[Form definition unavailable: ${msg}]`);
        }
    }
    const namedMatches = [...out.matchAll(CONTENT_TYPE_MACRO_PATTERN)];
    for (const m of namedMatches) {
        const full = m[0];
        const contentTypeId = m[1];
        try {
            const xml = await fetchFormDefinitionXml(siteId, contentTypeId);
            out = out.replace(full, xml || `[No form definition for ${contentTypeId}]`);
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            out = out.replace(full, `[Form definition unavailable for ${contentTypeId}: ${msg}]`);
        }
    }
    return out;
}
/**
 * Replace content-type macros in display text with short placeholders so the chat bubble doesn't show full XML.
 */
function expandContentTypeMacrosForDisplay(text, currentContentTypeId) {
    if (!text)
        return text;
    let out = text;
    if (out.includes('CURRENT_CONTENT_TYPE')) {
        const label = (currentContentTypeId || '').trim() || 'current item';
        out = out.split('CURRENT_CONTENT_TYPE').join(`[Form: ${label}]`);
    }
    out = out.replace(CONTENT_TYPE_MACRO_PATTERN, (_, id) => `[Form: ${id}]`);
    return out;
}
/**
 * Fetch raw content XML for a content item by path (e.g. /site/website/index.xml).
 */
async function fetchContentXml(siteId, path) {
    const normalized = (path || '').trim();
    if (!normalized.startsWith('/'))
        return '';
    const xml = await firstValueFrom(fetchContentXML(siteId, normalized));
    return xml ?? '';
}
/** Matches CONTENT:/site/website/index.xml or CONTENT:/site/components/foo.xml */
const CONTENT_PATH_MACRO_PATTERN = /CONTENT:(\/[^\s]+)/g;
/** Compare repo paths for macro substitution (form `path` vs CONTENT:… token). */
function cqNormalizeStudioContentPath(p) {
    let s = (p || '').trim();
    if (!s)
        return '';
    try {
        s = decodeURIComponent(s);
    }
    catch {
        /* ignore */
    }
    if (!s.startsWith('/'))
        s = `/${s}`;
    return s.replace(/\/+/g, '/');
}
function buildLiveContentMacroSubstitution(live) {
    const path = (live?.contentItemPath || '').trim();
    const hasXml = Boolean((live?.serializedContentXml || '').trim());
    const fj = (live?.fieldValuesJson || '').trim();
    const hasJson = Boolean(fj && fj !== '{}');
    if (!path && !hasXml && !hasJson)
        return undefined;
    return ('[Studio form — **full XML/JSON omitted from prompt** for size. Use **GetContent** for saved repo bodies; the **Current Studio content form** appendix lists **field ids** and **linked paths** only. ' +
        'Unsaved edits are not inlined — **GetContent** is git until the author Saves (or apply via `crafterqFormFieldUpdates` using ids from the appendix / form definition).]\n' +
        (path ? `Open item path: ${path}` : ''));
}
/** Appended to the API prompt only (not the visible user message) when embedded in the form-engine control. */
/** Cap when scanning form-definition XML for `<field>` / `<id>` extraction only (body is not sent). */
const MAX_FORM_DEF_PARSE_CHARS = 600000;
/** Cap when scanning serialized content XML for `<key>` paths only (body is not sent). */
const MAX_SERIALIZED_XML_KEY_SCAN_CHARS = 2000000;
const MAX_METADATA_LINE_CHARS = 12000;
function truncateMetadataLine(s, max) {
    if (!s)
        return '';
    if (s.length <= max)
        return s;
    return `${s.slice(0, max)} … [+${s.length - max} chars omitted]`;
}
/**
 * Field element ids from form-definition.xml (structure only — no values sent on the wire).
 */
function extractFormFieldIdsFromDefinitionXml(definitionXml) {
    const s = definitionXml.slice(0, MAX_FORM_DEF_PARSE_CHARS);
    const seen = new Set();
    const out = [];
    const fieldRe = /<field\b[^>]*>([\s\S]*?)<\/field>/gi;
    let m;
    while ((m = fieldRe.exec(s)) !== null) {
        const idm = /<id>([^<]+)<\/id>/i.exec(m[1]);
        if (!idm)
            continue;
        const id = idm[1].trim();
        if (!id || seen.has(id))
            continue;
        seen.add(id);
        out.push(id);
    }
    return out;
}
/**
 * Repository paths referenced by node-selector-style `<key>` elements (metadata only).
 */
function extractLinkedRepoPathsFromSerializedContentXml(xml) {
    const s = xml.slice(0, MAX_SERIALIZED_XML_KEY_SCAN_CHARS);
    const keys = new Set();
    const re = /<key>(\/site\/[^<]+)<\/key>/gi;
    let m;
    while ((m = re.exec(s)) !== null) {
        const k = m[1].trim();
        if (k)
            keys.add(k);
    }
    return [...keys];
}
function extractShallowKeysFromFieldValuesJson(jsonStr) {
    const raw = jsonStr.trim();
    if (!raw || raw === '{}')
        return [];
    try {
        const o = JSON.parse(raw);
        if (!o || typeof o !== 'object' || Array.isArray(o))
            return [];
        return Object.keys(o).filter((k) => k && typeof k === 'string');
    }
    catch {
        return [];
    }
}
/** Appended to the prompt appendix only when `formEngineClientJsonApply` is enabled (form assistant, not XB). */
const FORM_ENGINE_APPLY_INSTRUCTIONS = `
**Client-side form apply:** When you change field content (including **translate** to another language), end with fenced JSON (field ids from the form definition / XML; string values only). **Do not** reply with generic CrafterCMS docs ("Translation Configuration", "open the content item", "add a language") instead of the translated text in JSON.

\`\`\`json
{ "crafterqFormFieldUpdates": { "title_t": "…", "body_html": "<p>…</p>" } }
\`\`\`
List every field you changed; omit the block for pure Q&A. Repeat groups: ids like "sections_o|0|section_html".`;
function buildAuthoringFormAppendix(ctx, options) {
    if (!ctx)
        return '';
    const ct = (ctx.contentTypeId || '').trim();
    const def = (ctx.definitionXml || '').trim();
    const vals = (ctx.fieldValuesJson || '').trim();
    const ser = (ctx.serializedContentXml || '').trim();
    const itemPath = (ctx.contentPath || '').trim();
    const hasDef = Boolean(def);
    const hasVals = Boolean(vals && vals !== '{}');
    const hasSer = Boolean(ser);
    if (!hasDef && !hasVals && !hasSer && !ct && !itemPath)
        return '';
    const lines = [];
    lines.push('--- Current Studio content form (metadata only — no full XML/JSON bodies; use GetContent / GetContentTypeFormDefinition / update_content) ---');
    lines.push('The author may have **unsaved** edits in the form; values are **not** copied here. Plan using paths and ids below, then read bodies with tools.');
    if (ct)
        lines.push(`Content type id: ${ct}`);
    if (itemPath)
        lines.push(`Content item path (open in form): ${itemPath}`);
    if (hasDef) {
        const fieldIds = extractFormFieldIdsFromDefinitionXml(def);
        if (fieldIds.length) {
            lines.push(`Form field ids (from form-definition; no values): ${truncateMetadataLine(fieldIds.join(', '), MAX_METADATA_LINE_CHARS)}`);
        }
        else {
            lines.push('Form field ids: (none extracted — use GetContentTypeFormDefinition with contentPath.)');
        }
    }
    if (hasSer) {
        const linked = extractLinkedRepoPathsFromSerializedContentXml(ser);
        if (linked.length) {
            lines.push(`Linked repository paths (from <key> in serialized item; no XML bodies): ${truncateMetadataLine(linked.join(', '), MAX_METADATA_LINE_CHARS)}`);
        }
    }
    if (hasVals) {
        const keys = extractShallowKeysFromFieldValuesJson(vals);
        if (keys.length) {
            lines.push(`In-memory model top-level keys (no values): ${truncateMetadataLine(keys.join(', '), MAX_METADATA_LINE_CHARS)}`);
        }
    }
    if (options?.includeClientJsonApplyInstructions) {
        lines.push(FORM_ENGINE_APPLY_INSTRUCTIONS.trim());
    }
    lines.push('--- End Studio content form ---');
    return '\n\n' + lines.join('\n');
}
/**
 * Parse assistant reply for `crafterqFormFieldUpdates` inside a ```json fenced block.
 */
function tryExtractCrafterqFormFieldUpdates(assistantText) {
    const marker = 'crafterqFormFieldUpdates';
    if (!assistantText.includes(marker))
        return null;
    const re = /```(?:json)?\s*([\s\S]*?)```/gi;
    let m;
    while ((m = re.exec(assistantText)) !== null) {
        try {
            const obj = JSON.parse(m[1].trim());
            if (!obj || typeof obj !== 'object' || Array.isArray(obj))
                continue;
            const raw = obj.crafterqFormFieldUpdates;
            if (!raw || typeof raw !== 'object' || Array.isArray(raw))
                continue;
            const out = {};
            for (const [k, v] of Object.entries(raw)) {
                if (typeof k !== 'string' || !k.trim())
                    continue;
                if (v == null)
                    out[k] = '';
                else if (typeof v === 'string')
                    out[k] = v;
                else if (typeof v === 'number' || typeof v === 'boolean')
                    out[k] = String(v);
            }
            return Object.keys(out).length ? out : null;
        }
        catch {
            /* try next fence */
        }
    }
    return null;
}
/**
 * Expand CURRENT_CONTENT and CONTENT:path macros.
 * In the form-engine assistant (`liveAuthoring` set), uses the live form `model` JSON for the item being edited
 * instead of loading repository XML (saved file would miss unsaved edits).
 * Otherwise loads raw content XML from the repo (preview / dialog context).
 */
async function expandContentMacros(prompt, siteId, currentContentPath, liveAuthoring) {
    if (!prompt || (!prompt.includes('CURRENT_CONTENT') && !prompt.includes('CONTENT:/')))
        return prompt;
    const liveBody = buildLiveContentMacroSubstitution(liveAuthoring);
    const editingPathNorm = cqNormalizeStudioContentPath(liveAuthoring?.contentItemPath);
    let out = prompt;
    if (out.includes('CURRENT_CONTENT')) {
        if (liveBody) {
            out = out.split('CURRENT_CONTENT').join(liveBody);
        }
        else {
            const path = (currentContentPath || '').trim();
            try {
                const xml = path ? await fetchContentXml(siteId, path) : '';
                out = out.split('CURRENT_CONTENT').join(xml || '[No content for current item]');
            }
            catch (e) {
                const msg = e instanceof Error ? e.message : String(e);
                out = out.split('CURRENT_CONTENT').join(`[Content unavailable: ${msg}]`);
            }
        }
    }
    const pathMatches = [...out.matchAll(CONTENT_PATH_MACRO_PATTERN)];
    for (const m of pathMatches) {
        const full = m[0];
        const itemPath = m[1];
        const itemNorm = cqNormalizeStudioContentPath(itemPath);
        if (liveBody && editingPathNorm && itemNorm === editingPathNorm) {
            out = out.replace(full, liveBody);
            continue;
        }
        try {
            const xml = await fetchContentXml(siteId, itemPath);
            out = out.replace(full, xml || `[No content at ${itemPath}]`);
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            out = out.replace(full, `[Content unavailable for ${itemPath}: ${msg}]`);
        }
    }
    return out;
}
/**
 * Replace content macros in display text with short placeholders.
 */
function expandContentMacrosForDisplay(text, currentContentPath) {
    if (!text)
        return text;
    let out = text;
    if (out.includes('CURRENT_CONTENT')) {
        const label = (currentContentPath || '').trim() || 'current item';
        out = out.split('CURRENT_CONTENT').join(`[Content: ${label}]`);
    }
    out = out.replace(CONTENT_PATH_MACRO_PATTERN, (_, p) => `[Content: ${p}]`);
    return out;
}
/**
 * Ask Studio preview to refresh after successful repository writes.
 * Mirrors Studio 4.x PreviewAddressBar `onRefresh` behavior.
 */
function triggerStudioPreviewReload() {
    const action = reloadRequest();
    getHostToGuestBus().next(action);
    getHostToHostBus().next(action);
}
/** Repository path for a page content item (Studio can switch preview via {@link fetchGuestModel}). */
function isWebsitePageRepoPath(repoPath) {
    const p = (repoPath || '').trim();
    return p.startsWith('/site/website/') && p.endsWith('/index.xml');
}
/**
 * Move Studio preview to the written page item so authors see the new URL, not only a reload of the prior frame.
 * Still followed at stream end by {@link triggerStudioPreviewReload} for a fresh load.
 */
function navigateStudioPreviewToRepoPath(repoPath) {
    if (!isWebsitePageRepoPath(repoPath))
        return;
    const action = fetchGuestModel({ path: repoPath.trim() });
    getHostToGuestBus().next(action);
    getHostToHostBus().next(action);
}
/**
 * Tool names that finish with phase {@code done} after mutating the site sandbox (or static assets).
 * Each completion triggers an immediate {@link triggerStudioPreviewReload} so authors see work in progress;
 * the stream still ends with another refresh if any of these ran ({@link shouldRefreshPreview}).
 * {@code WriteContent} covers templates (.ftl), scripts (.groovy), Studio config XML, content-type form
 * definitions, and content items; for a written {@code /site/website/.../index.xml} path, preview also runs
 * {@link fetchGuestModel} so the frame tracks the new page.
 */
const PREVIEW_RELOAD_TOOL_NAMES_ON_DONE = new Set([
    'WriteContent',
    'revert_change',
    'GenerateImage',
    'publish_content',
    'update_content',
    'update_template',
    'update_content_type',
    'TranslateContentItem',
    'TranslateContentBatch',
    'TransformContentSubgraph',
    'GetContentSubgraph'
]);
const toolProgressScrollBoxSx = {
    maxHeight: 200,
    overflowY: 'auto',
    mb: 1,
    px: 1,
    py: 0.75,
    borderRadius: 1,
    border: 1,
    borderColor: 'divider',
    bgcolor: 'action.hover'
};
/** Visible “alive” pulse on the pipeline wait row (in addition to {@link CircularProgress}). */
const cqPipelineHeartbeatBarPulse = keyframes({
    '0%, 100%': { opacity: 1, filter: 'brightness(1)' },
    '50%': { opacity: 0.88, filter: 'brightness(1.06)' }
});
/** Keeps the tool-progress list pinned to the latest line as SSE chunks append. */
function ToolProgressScrollArea(props) {
    const ref = useRef(null);
    useLayoutEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        el.scrollTop = el.scrollHeight;
    }, [props.text]);
    return (jsx(Box, { ref: ref, sx: toolProgressScrollBoxSx, children: jsx(MarkdownMessage, { text: props.text }) }));
}
/** In-bubble wait row updated by SSE `pipeline-heartbeat` (MUI spinner = reliable animation vs nested sx @keyframes). */
function PipelineHeartbeatBar(props) {
    const { elapsedSec, nextInSec, hint } = props;
    return (jsxs(Box, { role: "status", "aria-live": "polite", sx: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: 1.25,
            mb: 1,
            py: 1,
            px: 1.25,
            borderRadius: 1,
            border: '1px solid',
            borderColor: 'primary.light',
            bgcolor: (t) => (t.palette.mode === 'dark' ? 'rgba(144, 202, 249, 0.12)' : 'rgba(25, 118, 210, 0.09)'),
            animation: `${cqPipelineHeartbeatBarPulse} 1.35s ease-in-out infinite`,
            '@media (prefers-reduced-motion: reduce)': {
                animation: 'none',
                opacity: 1
            }
        }, children: [jsx(CircularProgress, { variant: "indeterminate", size: 18, thickness: 4.5, "aria-hidden": true, sx: { color: 'primary.main', flexShrink: 0, mt: '1px' } }), jsxs(Typography, { variant: "caption", color: "text.secondary", component: "div", sx: { lineHeight: 1.45, minWidth: 0 }, children: ["Still here (~", elapsedSec, "s)", hint ? ` — ${hint}` : '', jsxs(Box, { component: "span", sx: { display: 'block', opacity: 0.85, mt: 0.35 }, children: ["Next update in ~", nextInSec, "s"] })] })] }));
}
/** Server-reported wall time for plan + tools (ms); shown as a subtle caption when present. */
function formatCqPipelineWallMs(ms) {
    if (!Number.isFinite(ms) || ms < 0)
        return '';
    const rounded = Math.round(ms);
    if (rounded < 1000)
        return `${rounded}ms`;
    return `${(rounded / 1000).toFixed(1)}s`;
}
function AssistantPipelineTimingLine(props) {
    if (props.wallMs == null || props.wallMs < 0)
        return null;
    return (jsxs(Typography, { variant: "caption", component: "p", sx: {
            mt: 0.75,
            mb: 0,
            color: 'text.secondary',
            opacity: 0.7,
            fontStyle: 'italic',
            letterSpacing: '0.01em'
        }, children: ["Completed in ", formatCqPipelineWallMs(props.wallMs)] }));
}
/** Muted stream of tokens before tool-progress begins — hidden once tools run. */
function AssistantReasoningLive(props) {
    const t = props.text.trim();
    if (!t)
        return null;
    return (jsxs(Box, { sx: {
            mb: 1,
            color: 'text.secondary',
            opacity: 0.72,
            fontSize: '0.8125rem',
            lineHeight: 1.45
        }, children: [jsx(Typography, { variant: "caption", component: "div", sx: {
                    mb: 0.5,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    opacity: 0.9
                }, children: "Live model output" }), jsx(MarkdownMessage, { text: t })] }));
}
function combinedAssistantMarkdownForVerification(m) {
    const tail = dedupeAssistantPostToolsMarkdown(m.assistantPreToolsText, m.text);
    return [m.assistantPreToolsText?.trim(), m.toolProgressText?.trim(), tail.trim()].filter(Boolean).join('\n\n');
}
/** When the stream aborts mid-flight, merge grey “live” tokens into the main bubble so nothing is dropped. */
function foldAssistantReasoningIntoMainText(m) {
    const r = (m.reasoningStreamText || '').trim();
    if (!r)
        return { text: m.text || '', reasoningStreamText: '' };
    const t = (m.text || '').trim();
    return { text: t ? `${t}\n\n${r}` : r, reasoningStreamText: '' };
}
function getConversationStorageKey(siteId, agentId) {
    const site = (siteId || 'default').replace(/[^a-zA-Z0-9-_]/g, '_');
    const agent = (agentId || 'default').replace(/[^a-zA-Z0-9-_]/g, '_');
    return `crafterq-conversation-${site}-${agent}`;
}
function loadConversation(siteId, agentId) {
    if (typeof localStorage === 'undefined')
        return null;
    try {
        const raw = localStorage.getItem(getConversationStorageKey(siteId, agentId));
        if (!raw)
            return null;
        const parsed = JSON.parse(raw);
        if (parsed?.version !== 1 || !Array.isArray(parsed.messages))
            return null;
        return {
            version: 1,
            chatId: typeof parsed.chatId === 'string' ? parsed.chatId : undefined,
            messages: parsed.messages
                .filter((m) => m && typeof m.id === 'string' && typeof m.text === 'string' && typeof m.role === 'string')
                .map((m) => {
                const toolProgressText = typeof m.toolProgressText === 'string'
                    ? m.toolProgressText
                    : undefined;
                const assistantPreToolsText = typeof m.assistantPreToolsText === 'string'
                    ? m.assistantPreToolsText
                    : undefined;
                const rawWall = m.toolPipelineWallMs;
                const toolPipelineWallMs = typeof rawWall === 'number' && Number.isFinite(rawWall) && rawWall >= 0 ? Math.round(rawWall) : undefined;
                return {
                    id: m.id,
                    role: m.role === 'assistant' || m.role === 'system' ? m.role : 'user',
                    text: m.text,
                    ...(assistantPreToolsText !== undefined ? { assistantPreToolsText } : {}),
                    ...(toolProgressText !== undefined && toolProgressText !== '' ? { toolProgressText } : {}),
                    ...(toolPipelineWallMs !== undefined ? { toolPipelineWallMs } : {}),
                    isStreaming: false
                };
            })
        };
    }
    catch {
        return null;
    }
}
function saveConversation(siteId, agentId, payload) {
    if (typeof localStorage === 'undefined')
        return;
    try {
        localStorage.setItem(getConversationStorageKey(siteId, agentId), JSON.stringify(payload));
    }
    catch {
        // ignore
    }
}
function clearConversation(siteId, agentId) {
    if (typeof localStorage === 'undefined')
        return;
    try {
        localStorage.removeItem(getConversationStorageKey(siteId, agentId));
    }
    catch {
        // ignore
    }
}
function clipContextChunk(s, max) {
    const t = (s || '').trim();
    if (t.length <= max)
        return t;
    return `${t.slice(0, max)}…`;
}
/**
 * Prior turns: assistant replies often repeat **## Plan** then **## Plan Execution** — keep execution/recap only to
 * shrink the wire prompt and reduce redundant reasoning.
 */
function abbreviateAssistantTurnForPriorContext(body) {
    let t = stripOrchestrationDebugComment(body).trim();
    if (!t)
        return '';
    const planExec = /^##\s+Plan Execution\b/im;
    const match = planExec.exec(t);
    if (match?.index != null) {
        t = t.slice(match.index).trim();
    }
    return t;
}
/**
 * Abbreviated prior user/assistant turns so OpenAI single-turn requests retain conversational continuity
 * without multi-message API history. Used for **every** AI panel embed (XB/ICE preview sidebar, floating dialog,
 * content-type form assistant) — not form-engine-specific.
 */
function buildPriorTurnsContextBlock(prior) {
    const relevant = prior.filter((m) => m.role === 'user' || m.role === 'assistant');
    if (relevant.length === 0)
        return '';
    const totalMax = 8000;
    const slice = relevant.length > 8 ? relevant.slice(-8) : relevant;
    const lines = [];
    let used = 0;
    for (const m of slice) {
        const label = m.role === 'user' ? 'User' : 'Assistant';
        let body = (m.text || '').trim();
        if (m.role === 'assistant' && !body && m.assistantPreToolsText) {
            body = m.assistantPreToolsText.trim();
        }
        if (!body)
            continue;
        const prepared = m.role === 'assistant' ? abbreviateAssistantTurnForPriorContext(body) : stripOrchestrationDebugComment(body).trim();
        if (!prepared.trim())
            continue;
        const perMsgMax = m.role === 'assistant' ? 1800 : 2800;
        const piece = clipContextChunk(prepared, perMsgMax);
        const line = `${label}: ${piece}`;
        if (used + line.length + 2 > totalMax)
            break;
        lines.push(line);
        used += line.length + 2;
    }
    if (lines.length === 0)
        return '';
    return ('[Prior conversation — abbreviated for context. Current request follows after the separator.]\n\n' +
        `${lines.join('\n\n')}\n\n---\n\n`);
}
function AiAssistantChat(props) {
    const theme = useTheme();
    const { agentId: agentIdProp, llm, llmModel, imageModel, openAiApiKey, initialMessages, configPrompts, embedTarget = 'default', getAuthoringFormContext, formEngineClientJsonApply, enableTools, expertSkills, translateBatchConcurrency } = props;
    /** Empty when config omits **crafterQAgentId** — server must omit ConsultCrafterQExpert; do not substitute a default UUID. */
    const agentId = agentIdProp?.trim() ?? '';
    const siteId = useActiveSiteId() ?? 'default';
    const previewItem = useCurrentPreviewItem();
    const guest = usePreviewGuest();
    const user = useActiveUser();
    /** Guest model (XB) — may exist when itemsByPath has not loaded DetailedItem yet. */
    const guestMainModel = guest?.modelId && guest?.models ? guest.models[guest.modelId] : undefined;
    const resolvedContentPath = previewItem?.path?.trim() ||
        (typeof guest?.path === 'string' ? guest.path.trim() : '') ||
        (guestMainModel?.craftercms?.path && String(guestMainModel.craftercms.path).trim()) ||
        '';
    const resolvedContentTypeId = previewItem?.contentTypeId?.trim() ||
        (guestMainModel?.craftercms?.contentTypeId && String(guestMainModel.craftercms.contentTypeId).trim()) ||
        '';
    const macroValuesRef = useRef({
        siteId,
        currentPage: '',
        currentUsername: 'unknown',
        contentTypeId: '',
        contentPath: ''
    });
    macroValuesRef.current = {
        siteId,
        currentPage: previewItem?.previewUrl ?? (typeof window !== 'undefined' ? window.location.href : '') ?? '',
        currentUsername: user?.username ?? 'unknown',
        contentTypeId: resolvedContentTypeId,
        contentPath: resolvedContentPath
    };
    const [loading, setLoading] = useState(false);
    const [configError, setConfigError] = useState(null);
    const promptPlaceholder = 'Ask the assistant…';
    const quickMessages = [];
    const [chatId, setChatId] = useState(undefined);
    const [messages, setMessages] = useState(() => {
        const base = [];
        (initialMessages ?? []).forEach((m, idx) => {
            base.push({
                id: `initial-${idx}`,
                role: (m.role || '').toLowerCase() === 'assistant' ? 'assistant' : 'user',
                text: m.content ?? ''
            });
        });
        return base;
    });
    const messagesRef = useRef(messages);
    messagesRef.current = messages;
    const [draft, setDraft] = useState('');
    const [sending, setSending] = useState(false);
    const [readResponsesAloud, setReadResponsesAloud] = useState(false);
    const abortRef = useRef(null);
    /** True when the user clicked Stop (vs timeout / navigation) — shapes catch handling. */
    const userStopRequestedRef = useRef(false);
    const scrollRef = useRef(null);
    const iceRootRef = useRef(null);
    const lastSpokenAssistantIdRef = useRef(null);
    /** Raw SSE JSON lines + client send markers — full transcript for support / debugging (see Copy log). */
    const sessionStreamLogRef = useRef([]);
    // Restore per-agent conversation across reloads / reopens.
    useEffect(() => {
        const stored = loadConversation(siteId, agentId);
        if (stored) {
            setChatId(stored.chatId);
            setMessages(stored.messages);
            return;
        }
        // No stored conversation: reset to initial messages for this render context.
        const base = [];
        (initialMessages ?? []).forEach((m, idx) => {
            base.push({
                id: `initial-${idx}`,
                role: (m.role || '').toLowerCase() === 'assistant' ? 'assistant' : 'user',
                text: m.content ?? ''
            });
        });
        setChatId(undefined);
        setMessages(base);
    }, [siteId, agentId, initialMessages]);
    // Persist per-agent conversation state.
    useEffect(() => {
        saveConversation(siteId, agentId, {
            version: 1,
            chatId,
            messages: messages.map((m) => ({ ...m, isStreaming: false }))
        });
    }, [siteId, agentId, chatId, messages]);
    const quickMessagesToShow = useMemo(() => {
        if (configPrompts && configPrompts.length > 0) {
            return configPrompts
                .filter((p) => Boolean(p && p.userText && p.userText.trim()))
                .slice(0, 10);
        }
        return (quickMessages ?? []).filter(Boolean).slice(0, 10).map((s) => ({ userText: s }));
    }, [configPrompts, quickMessages]);
    const promptToSend = (p) => {
        const ut = (p.userText || '').trim();
        const ctx = (p.additionalContext || '').trim();
        if (!ctx)
            return ut;
        return `${ut}\n\nAdditional context:\n${ctx}`;
    };
    useEffect(() => {
        if (embedTarget === 'icePanel') {
            const root = iceRootRef.current;
            if (!root)
                return;
            const sp = getScrollParent$1(root);
            if (sp)
                sp.scrollTop = sp.scrollHeight;
            return;
        }
        const el = scrollRef.current;
        if (!el)
            return;
        el.scrollTop = el.scrollHeight;
    }, [messages, sending, embedTarget]);
    const ttsAvailable = useMemo(() => isSpeechSynthesisAvailable(), []);
    useEffect(() => {
        if (!readResponsesAloud || !ttsAvailable)
            return;
        const synth = window.speechSynthesis;
        const assistants = messages.filter((m) => m.role === 'assistant' || m.role === 'system');
        const last = assistants[assistants.length - 1];
        const narr = `${(last?.assistantPreToolsText ?? '').trim()}\n${dedupeAssistantPostToolsMarkdown(last?.assistantPreToolsText, last?.text ?? '')}`.trim();
        if (!last || last.isStreaming || !narr)
            return;
        if (lastSpokenAssistantIdRef.current === last.id)
            return;
        lastSpokenAssistantIdRef.current = last.id;
        synth.cancel();
        const plain = textForSpeechSynthesis(narr);
        if (!plain)
            return;
        const u = new SpeechSynthesisUtterance(plain);
        u.lang = typeof navigator !== 'undefined' && navigator.language ? navigator.language : 'en-US';
        synth.speak(u);
    }, [messages, readResponsesAloud, ttsAvailable]);
    useEffect(() => {
        return () => {
            window.speechSynthesis?.cancel();
        };
    }, []);
    // Allow sending even if a previous request is stuck; startSend aborts in-flight first.
    const canSend = useMemo(() => draft.trim().length > 0, [draft]);
    /** 📋 plan lines from the latest finished assistant message — click runs as a new prompt. */
    const verificationPrompts = useMemo(() => {
        const last = [...messages].reverse().find((m) => m.role === 'assistant' && !m.isStreaming);
        if (!last)
            return [];
        return extractVerificationPrompts(combinedAssistantMarkdownForVerification(last));
    }, [messages]);
    /** "Would you like me to:" / list follow-ups — click sends as next prompt (deduped vs 📋 chips). */
    const followUpActionPrompts = useMemo(() => {
        const last = [...messages].reverse().find((m) => m.role === 'assistant' && !m.isStreaming);
        if (!last)
            return [];
        const combined = combinedAssistantMarkdownForVerification(last);
        const verifyKeys = new Set(verificationPrompts.map((v) => verificationPromptDedupeKey(v)));
        return extractFollowUpActionPrompts(combined).filter((p) => !verifyKeys.has(verificationPromptDedupeKey(p)));
    }, [messages, verificationPrompts]);
    const speechCtor = useMemo(() => getSpeechRecognitionCtor(), []);
    const recognitionRef = useRef(null);
    const voiceActiveRef = useRef(false);
    const draftAtVoiceStartRef = useRef('');
    const voiceFinalsRef = useRef('');
    const [voiceListening, setVoiceListening] = useState(false);
    const [voiceError, setVoiceError] = useState(null);
    const [promptFocused, setPromptFocused] = useState(false);
    const stopVoiceInput = useCallback(() => {
        voiceActiveRef.current = false;
        const r = recognitionRef.current;
        recognitionRef.current = null;
        try {
            r?.stop();
        }
        catch {
            // ignore
        }
        setVoiceListening(false);
    }, []);
    const startVoiceInput = useCallback(() => {
        const Ctor = speechCtor;
        if (!Ctor || sending)
            return;
        setVoiceError(null);
        draftAtVoiceStartRef.current = draft;
        voiceFinalsRef.current = '';
        voiceActiveRef.current = true;
        const rec = new Ctor();
        recognitionRef.current = rec;
        rec.lang = typeof navigator !== 'undefined' && navigator.language ? navigator.language : 'en-US';
        rec.continuous = true;
        rec.interimResults = true;
        rec.onresult = (event) => {
            let interim = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                const text = result[0]?.transcript ?? '';
                if (result.isFinal) {
                    const t = text.trim();
                    if (t) {
                        voiceFinalsRef.current = (voiceFinalsRef.current + (voiceFinalsRef.current ? ' ' : '') + t).trim();
                    }
                }
                else {
                    interim += text;
                }
            }
            const start = draftAtVoiceStartRef.current;
            const finals = voiceFinalsRef.current.trim();
            const inter = interim.trim();
            const chunks = [start.trim(), finals, inter].filter(Boolean);
            setDraft(chunks.join(' '));
        };
        rec.onerror = (ev) => {
            if (ev.error === 'aborted')
                return;
            if (ev.error === 'no-speech')
                return;
            const msg = ev.error === 'not-allowed'
                ? 'Microphone permission denied'
                : ev.error === 'service-not-allowed'
                    ? 'Speech recognition not allowed'
                    : ev.error;
            setVoiceError(msg);
            stopVoiceInput();
        };
        try {
            rec.start();
            setVoiceListening(true);
        }
        catch (e) {
            const m = e instanceof Error ? e.message : String(e);
            setVoiceError(m);
            voiceActiveRef.current = false;
            recognitionRef.current = null;
        }
    }, [speechCtor, sending, draft, stopVoiceInput]);
    const toggleVoiceInput = useCallback(() => {
        if (voiceListening)
            stopVoiceInput();
        else
            startVoiceInput();
    }, [voiceListening, stopVoiceInput, startVoiceInput]);
    useEffect(() => {
        return () => {
            voiceActiveRef.current = false;
            try {
                recognitionRef.current?.stop();
            }
            catch {
                // ignore
            }
            recognitionRef.current = null;
        };
    }, []);
    const stopStreaming = useCallback(() => {
        userStopRequestedRef.current = true;
        abortRef.current?.abort();
    }, []);
    /** Remove one bubble from history (demos / retakes). Aborts stream if removing the in-flight assistant or its paired user message. */
    const removeBubble = useCallback((id) => {
        const prev = messagesRef.current;
        const idx = prev.findIndex((x) => x.id === id);
        if (idx < 0)
            return;
        const target = prev[idx];
        const next = prev[idx + 1];
        const removeStreamingPair = target.role === 'user' && next?.role === 'assistant' && Boolean(next.isStreaming);
        if (target.isStreaming || removeStreamingPair) {
            stopStreaming();
        }
        const drop = new Set([id]);
        if (removeStreamingPair && next)
            drop.add(next.id);
        setMessages((p) => p.filter((m) => !drop.has(m.id)));
    }, [stopStreaming]);
    const handleNewChat = () => {
        stopVoiceInput();
        setVoiceError(null);
        window.speechSynthesis?.cancel();
        lastSpokenAssistantIdRef.current = null;
        abortRef.current?.abort();
        setSending(false);
        setDraft('');
        setChatId(undefined);
        setMessages([]);
        sessionStreamLogRef.current = [];
        clearConversation(siteId, agentId);
    };
    const startSend = async (prompt, displayInChat, sendOptions) => {
        const trimmed = prompt.trim();
        if (!trimmed)
            return;
        stopVoiceInput();
        const now = new Date();
        const pad2 = (n) => String(n).padStart(2, '0');
        const macroCtx = {
            dateToday: `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`,
            timeNow: `${pad2(now.getHours())}:${pad2(now.getMinutes())}`,
            currentPage: macroValuesRef.current.currentPage,
            currentContentPath: macroValuesRef.current.contentPath,
            currentUsername: macroValuesRef.current.currentUsername,
            siteId: macroValuesRef.current.siteId
        };
        let expandedPrompt = expandPromptMacros(trimmed, macroCtx).trim();
        const expandedDisplaySync = expandPromptMacros((displayInChat ?? trimmed).trim(), macroCtx).trim();
        expandedPrompt = await expandContentTypeMacros(expandedPrompt, macroCtx.siteId, macroValuesRef.current.contentTypeId).then((s) => s.trim());
        let authoringSnap;
        if (typeof getAuthoringFormContext === 'function') {
            try {
                authoringSnap = getAuthoringFormContext();
            }
            catch {
                /* ignore — still send prompt without live form appendix / macro substitution */
            }
        }
        const formEngine = isFormEngineAuthoringChat(getAuthoringFormContext);
        const wantClientJsonApply = formEngine && formEngineClientJsonApply !== false;
        expandedPrompt = await expandContentMacros(expandedPrompt, macroCtx.siteId, macroValuesRef.current.contentPath, authoringSnap
            ? {
                contentItemPath: authoringSnap.contentPath,
                fieldValuesJson: authoringSnap.fieldValuesJson,
                serializedContentXml: authoringSnap.serializedContentXml
            }
            : undefined).then((s) => s.trim());
        let expandedDisplay = expandContentTypeMacrosForDisplay(expandedDisplaySync, macroValuesRef.current.contentTypeId);
        expandedDisplay = expandContentMacrosForDisplay(expandedDisplay, macroValuesRef.current.contentPath).trim();
        if (!expandedPrompt)
            return;
        const omitToolsThisSend = sendOptions?.omitTools === true;
        if (authoringSnap) {
            try {
                const appendix = buildAuthoringFormAppendix(authoringSnap, {
                    includeClientJsonApplyInstructions: wantClientJsonApply
                });
                if (appendix)
                    expandedPrompt = expandedPrompt + appendix;
            }
            catch {
                /* ignore snapshot appendix errors — still send the user prompt */
            }
        }
        const priorBlock = buildPriorTurnsContextBlock(messages);
        const previewPath = macroValuesRef.current.contentPath?.trim();
        const previewCt = macroValuesRef.current.contentTypeId?.trim();
        const requestAnchor = !formEngine && (previewPath || previewCt)
            ? `[Request anchor — default target when the user says "this page", "this article", or similar without another path]\n${previewPath ? `Repository path: ${previewPath}` : ''}${previewPath && previewCt ? '\n' : ''}${previewCt ? `Content-type id: ${previewCt.startsWith('/') ? previewCt : `/${previewCt}`}` : ''}\n\n`
            : '';
        const currentRequestBody = requestAnchor ? `${requestAnchor}${expandedPrompt}` : expandedPrompt;
        const wirePrompt = priorBlock ? `${priorBlock}Current request:\n${currentRequestBody}` : currentRequestBody;
        abortRef.current?.abort();
        userStopRequestedRef.current = false;
        const ac = new AbortController();
        abortRef.current = ac;
        const userId = `user-${Date.now()}`;
        const assistantId = `assistant-${Date.now()}`;
        const userBubbleText = expandedDisplay || expandedPrompt;
        setMessages((prev) => [
            ...prev,
            { id: userId, role: 'user', text: userBubbleText },
            { id: assistantId, role: 'assistant', text: '', isStreaming: true }
        ]);
        try {
            sessionStreamLogRef.current.push(JSON.stringify({
                kind: 'client.userSend',
                ts: new Date().toISOString(),
                displayText: userBubbleText,
                wirePrompt: wirePrompt
            }));
        }
        catch {
            /* ignore log serialization errors */
        }
        setDraft('');
        setSending(true);
        let streamingMessageId;
        let assistantTextAccum = '';
        let formUpdatesApplied = false;
        let shouldRefreshPreview = false;
        /** Set when the client stream wait hits the hard cap (try/catch are separate scopes — must be outside `try`). */
        let streamHitTimeout = false;
        /** Studio `crafterPreview` cookie — send whenever readable so server tools (e.g. GetPreviewHtml) work in XB/form chat too. */
        const previewTokenForStream = readCrafterPreviewTokenFromCookie();
        const previewContentTypeLabel = formEngine ? undefined : resolvePreviewContentTypeLabel(previewItem);
        const studioPreviewPageUrl = formEngine ? undefined : pickStudioPreviewPageUrlForServer(previewItem);
        try {
            const streamPromise = streamChat({
                agentId,
                chatId,
                prompt: wirePrompt,
                // Form engine: do not send preview path — server would treat it as repo truth for tools; unsaved edits are only in the prompt appendix.
                contentPath: formEngine ? undefined : macroValuesRef.current.contentPath?.trim() || undefined,
                contentTypeId: formEngine ? undefined : macroValuesRef.current.contentTypeId?.trim() || undefined,
                ...(previewContentTypeLabel ? { contentTypeLabel: previewContentTypeLabel } : {}),
                ...(studioPreviewPageUrl ? { studioPreviewPageUrl } : {}),
                authoringSurface: formEngine ? 'formEngine' : undefined,
                formEngineClientJsonApply: formEngine && wantClientJsonApply ? true : undefined,
                formEngineItemPath: formEngine && wantClientJsonApply && authoringSnap?.contentPath?.trim()
                    ? authoringSnap.contentPath.trim()
                    : undefined,
                llm,
                llmModel,
                imageModel,
                openAiApiKey,
                siteId,
                ...(previewTokenForStream ? { previewToken: previewTokenForStream } : {}),
                ...(omitToolsThisSend ? { omitTools: true } : {}),
                ...(enableTools === false ? { enableTools: false } : {}),
                ...(Array.isArray(expertSkills) && expertSkills.length > 0 ? { expertSkills } : {}),
                ...(translateBatchConcurrency != null &&
                    Number.isFinite(translateBatchConcurrency) &&
                    translateBatchConcurrency >= 1 &&
                    translateBatchConcurrency <= 64
                    ? { translateBatchConcurrency: Math.floor(translateBatchConcurrency) }
                    : {}),
                signal: ac.signal,
                onRawSseDataLine: (jsonLine) => {
                    sessionStreamLogRef.current.push(`${new Date().toISOString()}\t${jsonLine}`);
                },
                onMessage: (evt) => {
                    const evtChatId = evt.metadata?.chatId;
                    if (evtChatId && !chatId)
                        setChatId(evtChatId);
                    const evtMsgId = evt.metadata?.messageId;
                    if (evtMsgId && !streamingMessageId)
                        streamingMessageId = evtMsgId;
                    const isCompleted = Boolean(evt.metadata?.completed);
                    const streamErr = Boolean(evt.metadata?.error);
                    const streamErrMsg = evt.metadata?.message;
                    const planGateFailure = Boolean(evt.metadata?.planGateFailure === true);
                    const toolStatus = String(evt.metadata?.status || '');
                    const toolPhase = String(evt.metadata?.phase || '');
                    const toolName = String(evt.metadata?.tool || '');
                    /** Tool rows and the initial workflow hint share the 🛠️ strip (server uses `tool-progress` vs `tool-workflow-hint`). */
                    const isToolProgressChunk = toolStatus === 'tool-progress' || toolStatus === 'tool-workflow-hint';
                    const rawTextChunk = evt.text ?? '';
                    const textChunk = isToolProgressChunk ? rawTextChunk : stripForbiddenLazyPlanLines(rawTextChunk);
                    const summarizingResultsHint = evt.metadata?.status === 'crafterq-chat-phase' &&
                        String(evt.metadata?.phase || '') === 'summarizing-results';
                    const md = evt.metadata && typeof evt.metadata === 'object' ? evt.metadata : undefined;
                    const mdStatus = md && md.status != null ? String(md.status).trim() : '';
                    if (mdStatus === 'pipeline-heartbeat') {
                        const rawEl = md.elapsedSec;
                        const rawNext = md.nextInSec;
                        const elapsedSec = Math.max(0, Math.floor(Number(rawEl) || 0));
                        const nextN = Number(rawNext);
                        const nextInSec = Number.isFinite(nextN) && nextN > 0 ? Math.round(nextN) : Math.max(1, Math.round(Number(rawNext) || 12));
                        const hint = String(md.hint ?? '').trim();
                        setMessages((prev) => prev.map((m) => m.id === assistantId
                            ? {
                                ...m,
                                pipelineHeartbeat: { elapsedSec, nextInSec, hint }
                            }
                            : m));
                        return;
                    }
                    if (planGateFailure && streamErr && textChunk.trim()) {
                        const rawPipePg = evt.metadata?.toolPipelineWallMs;
                        const toolPipelineWallMsPg = typeof rawPipePg === 'number' && Number.isFinite(rawPipePg) && rawPipePg >= 0
                            ? Math.round(rawPipePg)
                            : undefined;
                        setMessages((prev) => prev.map((m) => m.id === assistantId
                            ? {
                                ...m,
                                text: textChunk,
                                assistantPreToolsText: undefined,
                                toolProgressText: undefined,
                                reasoningStreamText: undefined,
                                pipelineHeartbeat: undefined,
                                isStreaming: false,
                                summarizingResults: false,
                                ...(toolPipelineWallMsPg !== undefined ? { toolPipelineWallMs: toolPipelineWallMsPg } : {})
                            }
                            : m));
                        return;
                    }
                    if (summarizingResultsHint) {
                        setMessages((prev) => prev.map((m) => (m.id === assistantId ? { ...m, summarizingResults: true } : m)));
                    }
                    if (!formEngine &&
                        !streamErr &&
                        toolStatus === 'tool-progress' &&
                        toolPhase === 'done' &&
                        PREVIEW_RELOAD_TOOL_NAMES_ON_DONE.has(toolName)) {
                        shouldRefreshPreview = true;
                        if (toolName === 'WriteContent') {
                            const repoPath = typeof evt.metadata?.repoPath === 'string' ? evt.metadata.repoPath.trim() : '';
                            if (repoPath) {
                                navigateStudioPreviewToRepoPath(repoPath);
                            }
                        }
                        triggerStudioPreviewReload();
                    }
                    if (textChunk) {
                        if (isToolProgressChunk) {
                            setMessages((prev) => prev.map((m) => {
                                if (m.id !== assistantId)
                                    return m;
                                const hadNoToolLinesYet = !(m.toolProgressText || '').length;
                                const priorMain = (m.text || '').trim();
                                const reasoningHead = (m.reasoningStreamText || '').trim();
                                const planPrefix = reasoningHead || priorMain;
                                if (hadNoToolLinesYet) {
                                    return {
                                        ...m,
                                        assistantPreToolsText: planPrefix || undefined,
                                        reasoningStreamText: '',
                                        text: '',
                                        toolProgressText: textChunk
                                    };
                                }
                                const prior = m.toolProgressText || '';
                                // ReactMarkdown collapses single newlines into spaces; separate SSE chunks with a blank line
                                // so each 🛠️ tool line stays readable when pasted or viewed in the tool strip.
                                const join = prior.endsWith('\n\n')
                                    ? textChunk.startsWith('\n')
                                        ? ''
                                        : '\n'
                                    : '\n\n';
                                return { ...m, toolProgressText: prior + join + textChunk };
                            }));
                        }
                        else {
                            assistantTextAccum += textChunk;
                            setMessages((prev) => prev.map((m) => {
                                if (m.id !== assistantId)
                                    return m;
                                const toolsAlreadyVisible = !!(m.toolProgressText || '').trim();
                                const noPlanAboveToolsYet = !(m.assistantPreToolsText || '').trim();
                                if (!toolsAlreadyVisible) {
                                    return {
                                        ...m,
                                        reasoningStreamText: (m.reasoningStreamText || '') + textChunk,
                                        ...(textChunk.trim() !== '' ? { summarizingResults: false } : {})
                                    };
                                }
                                if (noPlanAboveToolsYet && textChunk.trim()) {
                                    const head = textChunk.trimStart();
                                    if (head.startsWith('## Plan') ||
                                        head.startsWith('## plan') ||
                                        textChunk.includes('Workspace fallback')) {
                                        return {
                                            ...m,
                                            assistantPreToolsText: (m.assistantPreToolsText || '') + textChunk,
                                            ...(textChunk.trim() !== '' ? { summarizingResults: false } : {})
                                        };
                                    }
                                }
                                return {
                                    ...m,
                                    text: (m.text || '') + textChunk,
                                    ...(textChunk.trim() !== '' ? { summarizingResults: false } : {})
                                };
                            }));
                        }
                    }
                    if (streamErr && streamErrMsg) {
                        const errLine = '\n\n**Stream error:** ' + sanitizeErrorForAuthor(String(streamErrMsg));
                        setMessages((prev) => prev.map((m) => {
                            if (m.id !== assistantId)
                                return m;
                            const nextText = (m.text || '').includes(String(streamErrMsg)) ? m.text : (m.text || '') + errLine;
                            return {
                                ...m,
                                text: nextText,
                                isStreaming: false,
                                summarizingResults: false,
                                pipelineHeartbeat: undefined
                            };
                        }));
                    }
                    if (isCompleted) {
                        const rawPipe = evt.metadata?.toolPipelineWallMs;
                        const toolPipelineWallMs = typeof rawPipe === 'number' && Number.isFinite(rawPipe) && rawPipe >= 0
                            ? Math.round(rawPipe)
                            : undefined;
                        setMessages((prev) => prev.map((m) => {
                            if (m.id !== assistantId)
                                return m;
                            const noTools = !(m.toolProgressText || '').trim();
                            const reasoningRest = (m.reasoningStreamText || '').trim();
                            const mainRest = (m.text || '').trim();
                            const foldReasoning = noTools && reasoningRest && !mainRest;
                            return {
                                ...m,
                                isStreaming: false,
                                summarizingResults: false,
                                pipelineHeartbeat: undefined,
                                ...(foldReasoning ? { text: reasoningRest, reasoningStreamText: '' } : {}),
                                ...(toolPipelineWallMs !== undefined ? { toolPipelineWallMs } : {})
                            };
                        }));
                        if (formEngine &&
                            wantClientJsonApply &&
                            !formUpdatesApplied &&
                            typeof getAuthoringFormContext === 'function' &&
                            assistantTextAccum) {
                            formUpdatesApplied = true;
                            try {
                                const snap = getAuthoringFormContext();
                                const updates = tryExtractCrafterqFormFieldUpdates(assistantTextAccum);
                                if (updates && typeof snap.applyAssistantFieldUpdates === 'function') {
                                    const result = snap.applyAssistantFieldUpdates(updates);
                                    const parts = [];
                                    if (result.applied?.length) {
                                        parts.push(`**Applied to form:** ${result.applied.join(', ')}`);
                                    }
                                    if (result.error) {
                                        parts.push(`**Apply issues:** ${result.error}`);
                                    }
                                    else if (Object.keys(updates).length && !result.applied?.length) {
                                        parts.push('**Apply issues:** no fields matched the open form (check field ids).');
                                    }
                                    if (parts.length) {
                                        const note = '\n\n---\n' + parts.join('\n');
                                        setMessages((prev) => prev.map((m) => {
                                            if (m.id !== assistantId)
                                                return m;
                                            return { ...m, text: (m.text || '') + note };
                                        }));
                                    }
                                }
                            }
                            catch {
                                /* ignore apply failures — assistant text still shown */
                            }
                        }
                    }
                }
            });
            // OpenAI + multi-step tools can exceed several minutes; cap aligns with server crafterq.chatFluxAwaitMs default.
            const CHAT_STREAM_TIMEOUT_MS = 600000;
            let streamTimeoutId;
            const timeoutPromise = new Promise((_, reject) => {
                streamTimeoutId = window.setTimeout(() => {
                    streamHitTimeout = true;
                    ac.abort();
                    reject(new Error('Timed out waiting for chat response'));
                }, CHAT_STREAM_TIMEOUT_MS);
            });
            try {
                await Promise.race([streamPromise, timeoutPromise]);
            }
            finally {
                if (streamTimeoutId !== undefined)
                    window.clearTimeout(streamTimeoutId);
            }
            if (!formEngine && shouldRefreshPreview) {
                triggerStudioPreviewReload();
            }
        }
        catch (e) {
            const errText = e instanceof Error ? e.message : String(e);
            const userStopped = userStopRequestedRef.current && isFetchAbortError(e);
            const timedOut = streamHitTimeout ||
                errText.includes('Timed out waiting for chat response');
            const abortWithoutExplicitStop = isFetchAbortError(e) && !userStopped && !timedOut;
            setMessages((prev) => prev.map((m) => {
                if (m.id !== assistantId)
                    return m;
                const folded = foldAssistantReasoningIntoMainText(m);
                const m2 = { ...m, text: folded.text, reasoningStreamText: folded.reasoningStreamText };
                const hadPartial = assistantVisibleTextLen(m2) > 0;
                const sep = hadPartial ? '\n\n---\n\n' : '\n\n';
                if (userStopped) {
                    const note = '\n\n*Stopped.*';
                    const combined = (m2.text || '') + (m2.toolProgressText || '') + (m2.assistantPreToolsText || '');
                    if (combined.includes('*Stopped.*'))
                        return { ...m2, isStreaming: false, summarizingResults: false };
                    return { ...m2, text: (m2.text || '') + note, isStreaming: false, summarizingResults: false };
                }
                if (timedOut && (isFetchAbortError(e) || errText.includes('Timed out'))) {
                    const note = `${sep}**Timed out** waiting for the rest of the response from Studio. Nothing below the separator is a complete answer.`;
                    return {
                        ...m2,
                        text: (m2.text || '').includes('Timed out') ? m2.text : (m2.text || '') + note,
                        isStreaming: false,
                        summarizingResults: false
                    };
                }
                if (e instanceof AiAssistantIncompleteStreamError) {
                    const combinedCheck = (m2.text || '') +
                        (m2.toolProgressText || '') +
                        (m2.assistantPreToolsText || '') +
                        (m2.reasoningStreamText || '');
                    if (combinedCheck.includes('**Could not finish.**')) {
                        return { ...m2, isStreaming: false, summarizingResults: false };
                    }
                    const note = `${sep}**Could not finish.** ${e.message}`;
                    return {
                        ...m2,
                        text: (m2.text || '') + note,
                        isStreaming: false,
                        summarizingResults: false
                    };
                }
                if (abortWithoutExplicitStop) {
                    const note = `${sep}**Interrupted.** The request was cancelled or the browser lost the connection before the assistant finished. Partial text above is not a full reply.`;
                    return {
                        ...m2,
                        text: (m2.text || '').includes('**Interrupted.**') ? m2.text : (m2.text || '') + note,
                        isStreaming: false,
                        summarizingResults: false
                    };
                }
                const detail = sanitizeErrorForAuthor(errText);
                const note = `${sep}**Studio request failed.** ${detail}`;
                return {
                    ...m2,
                    text: (m2.text || '').includes('**Studio request failed.**') ? m2.text : (m2.text || '') + note,
                    isStreaming: false,
                    summarizingResults: false
                };
            }));
        }
        finally {
            setSending(false);
        }
    };
    if (loading) {
        return (jsx(Box, { sx: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }, children: jsx(CircularProgress, { size: 28 }) }));
    }
    if (configError) {
        return (jsxs(Box, { sx: { p: 2 }, children: [jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 600 }, children: "Assistant unavailable" }), jsx(Typography, { variant: "body2", color: "text.secondary", children: configError })] }));
    }
    const isIcePanel = embedTarget === 'icePanel';
    const chatSurfaceBg = theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50];
    const messageBubbles = messages.map((m) => (jsx(Box, { sx: {
            display: 'flex',
            justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start'
        }, children: jsxs(Paper, { elevation: 0, sx: {
                position: 'relative',
                px: 1.5,
                py: 1,
                pr: 4.25,
                maxWidth: '80%',
                borderRadius: 2,
                backgroundColor: m.role === 'user'
                    ? theme.palette.primary.main
                    : theme.palette.mode === 'dark'
                        ? theme.palette.grey[800]
                        : '#fff',
                color: m.role === 'user' ? theme.palette.primary.contrastText : theme.palette.text.primary,
                border: m.role === 'user'
                    ? 'none'
                    : `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200]}`
            }, children: [jsx(Tooltip, { title: "Remove from chat history", children: jsx(IconButton, { size: "small", "aria-label": "Remove message from chat history", onClick: () => removeBubble(m.id), sx: {
                            position: 'absolute',
                            top: 2,
                            right: 2,
                            zIndex: 1,
                            ...(m.role === 'user'
                                ? {
                                    color: 'inherit',
                                    opacity: 0.92,
                                    '&:hover': { opacity: 1, bgcolor: 'rgba(255,255,255,0.12)' }
                                }
                                : {
                                    color: 'text.secondary',
                                    opacity: 0.9,
                                    '&:hover': { opacity: 1, bgcolor: 'action.hover' }
                                })
                        }, children: jsx(CloseRounded, { fontSize: "inherit", sx: { fontSize: 18 } }) }) }), jsx(Box, { sx: { minWidth: 0 }, children: m.role === 'assistant' || m.role === 'system' ? (jsxs(Box, { children: [m.reasoningStreamText?.trim() && m.isStreaming ? (jsx(AssistantReasoningLive, { text: m.reasoningStreamText || '' })) : null, m.pipelineHeartbeat ? (jsx(PipelineHeartbeatBar, { elapsedSec: m.pipelineHeartbeat.elapsedSec, nextInSec: m.pipelineHeartbeat.nextInSec, hint: m.pipelineHeartbeat.hint })) : null, m.toolProgressText?.trim() && m.assistantPreToolsText !== undefined ? (jsxs(Fragment, { children: [m.assistantPreToolsText.trim() ? (jsx(Box, { sx: { mb: 1 }, children: jsx(MarkdownMessage, { text: m.assistantPreToolsText }) })) : null, jsx(ToolProgressScrollArea, { text: m.toolProgressText }), m.summarizingResults ? (jsx(Typography, { variant: "caption", component: "p", sx: {
                                            mt: 0.75,
                                            mb: 0,
                                            color: 'text.secondary',
                                            opacity: 0.85,
                                            fontStyle: 'italic'
                                        }, children: "Summarizing results\u2026" })) : null, jsx(MarkdownMessage, { text: dedupeAssistantPostToolsMarkdown(m.assistantPreToolsText, m.text) }), jsx(AssistantPipelineTimingLine, { wallMs: m.toolPipelineWallMs })] })) : (jsxs(Fragment, { children: [m.toolProgressText?.trim() ? (jsx(ToolProgressScrollArea, { text: m.toolProgressText })) : null, m.summarizingResults ? (jsx(Typography, { variant: "caption", component: "p", sx: {
                                            mt: 0.75,
                                            mb: 0,
                                            color: 'text.secondary',
                                            opacity: 0.85,
                                            fontStyle: 'italic'
                                        }, children: "Summarizing results\u2026" })) : null, jsx(MarkdownMessage, { text: dedupeAssistantPostToolsMarkdown(m.assistantPreToolsText, m.text) }), jsx(AssistantPipelineTimingLine, { wallMs: m.toolPipelineWallMs })] }))] })) : (jsxs(Fragment, { children: [jsx(Typography, { variant: "body2", sx: { whiteSpace: 'pre-wrap' }, children: m.text }), jsxs(Box, { sx: {
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    gap: 0.25,
                                    mt: 0.75,
                                    opacity: 0.92
                                }, children: [jsx(Tooltip, { title: "Copy message", children: jsx(IconButton, { size: "small", onClick: () => void copyToClipboard(m.text), "aria-label": "Copy user message", sx: { color: 'inherit' }, children: jsx(ContentCopyRounded, { fontSize: "small" }) }) }), jsx(Tooltip, { title: "Replay (send again)", children: jsx("span", { children: jsx(IconButton, { size: "small", onClick: () => void startSend(m.text.trim(), m.text.trim()), disabled: sending, "aria-label": "Replay user message", sx: { color: 'inherit' }, children: jsx(ReplayRounded, { fontSize: "small" }) }) }) })] })] })) }), m.role === 'assistant' && (m.isStreaming || m.pipelineHeartbeat) && (jsxs(Stack, { direction: "row", alignItems: "center", spacing: 0.75, sx: { mt: 0.5, opacity: 0.8 }, children: [jsxs(Box, { sx: { display: 'inline-flex', alignItems: 'center', gap: 0.5 }, "aria-label": "Assistant is working", children: [jsx(Typography, { variant: "caption", sx: { lineHeight: 1 }, children: "Working" }), jsx(Box, { sx: { display: 'inline-flex', alignItems: 'center', gap: 0.25 }, children: [0, 1, 2].map((i) => (jsx(Box, { component: "span", sx: {
                                            width: 4,
                                            height: 4,
                                            borderRadius: '50%',
                                            backgroundColor: 'currentColor',
                                            display: 'inline-block',
                                            animation: 'cqTypingDotBounce 1.1s infinite ease-in-out',
                                            animationDelay: `${i * 0.15}s`,
                                            '@keyframes cqTypingDotBounce': {
                                                '0%, 80%, 100%': { transform: 'translateY(0)', opacity: 0.4 },
                                                '40%': { transform: 'translateY(-2px)', opacity: 1 }
                                            }
                                        } }, i))) })] }), jsx(Tooltip, { title: "Stop", children: jsx(IconButton, { size: "small", color: "error", onClick: () => stopStreaming(), "aria-label": "Stop assistant", children: jsx(StopRounded, { fontSize: "small" }) }) })] })), !m.isStreaming &&
                    (m.role === 'assistant' || m.role === 'system') &&
                    (m.text.trim() ||
                        (m.toolProgressText && m.toolProgressText.trim()) ||
                        (m.assistantPreToolsText && m.assistantPreToolsText.trim())) && (jsx(Box, { sx: { display: 'flex', justifyContent: 'flex-end', mt: 0.75 }, children: jsx(Tooltip, { title: "Copy response", children: jsx(IconButton, { size: "small", onClick: () => void copyToClipboard(m.toolProgressText?.trim() && m.assistantPreToolsText !== undefined
                                ? [
                                    m.assistantPreToolsText?.trim(),
                                    m.toolProgressText.trim(),
                                    dedupeAssistantPostToolsMarkdown(m.assistantPreToolsText, m.text).trim()
                                ]
                                    .filter(Boolean)
                                    .join('\n\n---\n\n')
                                : [m.toolProgressText?.trim(), dedupeAssistantPostToolsMarkdown(m.assistantPreToolsText, m.text).trim()]
                                    .filter(Boolean)
                                    .join('\n\n---\n\n')), "aria-label": "Copy response", sx: {
                                opacity: 0.75,
                                color: theme.palette.text.secondary
                            }, children: jsx(ContentCopyRounded, { fontSize: "small" }) }) }) }))] }) }, m.id)));
    const quickPromptsRow = quickMessagesToShow.length > 0 ? (jsx(Box, { sx: { p: 1.5, flexShrink: 0, minWidth: 0 }, children: jsx(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 1, sx: { width: '100%', minWidth: 0, flexWrap: { sm: 'wrap' }, rowGap: 1 }, children: quickMessagesToShow.map((qm, idx) => (jsx(Button, { size: "small", variant: "outlined", onClick: () => startSend(promptToSend(qm), qm.userText, { omitTools: qm.omitTools === true }), disabled: sending, sx: {
                    width: { xs: '100%', sm: 'auto' },
                    maxWidth: { xs: '100%', sm: 'min(100%, 28rem)' },
                    textTransform: 'none',
                    justifyContent: 'flex-start',
                    whiteSpace: 'normal',
                    textAlign: 'left',
                    py: 1,
                    minHeight: 0,
                    overflowWrap: 'anywhere',
                    wordBreak: 'break-word'
                }, children: qm.userText }, `${qm.userText}-${idx}`))) }) })) : null;
    /** ICE: drawer scrolls the whole widget — pin quick prompts only (Studio owns title/back in PanelHeader). */
    const iceStickyQuickPrompts = isIcePanel && quickPromptsRow ? (jsxs(Box, { sx: {
            position: 'sticky',
            top: 0,
            zIndex: 3,
            flexShrink: 0,
            bgcolor: chatSurfaceBg,
            borderBottom: 1,
            borderColor: 'divider',
            boxShadow: (t) => t.palette.mode === 'dark' ? '0 2px 8px rgba(0,0,0,0.25)' : '0 2px 8px rgba(0,0,0,0.06)'
        }, children: [quickPromptsRow, jsx(Divider, { sx: { flexShrink: 0 } })] })) : null;
    const composerSection = (jsx(Box, { sx: {
            bgcolor: 'background.paper',
            borderTop: 1,
            borderColor: 'divider',
            boxShadow: (t) => t.palette.mode === 'dark' ? '0 -4px 16px rgba(0,0,0,0.35)' : '0 -4px 16px rgba(0,0,0,0.06)',
            pb: 'calc(12px + env(safe-area-inset-bottom, 0px))',
            pt: 0,
            minWidth: 0,
            ...(isIcePanel
                ? { position: 'sticky', bottom: 0, zIndex: 4, alignSelf: 'stretch' }
                : { flexShrink: 0 })
        }, children: jsxs(Box, { sx: { px: { xs: 1, sm: 2 }, pt: 1.5, minWidth: 0 }, children: [jsxs(Stack, { direction: "row", spacing: 1, alignItems: "flex-end", sx: { width: '100%', minWidth: 0 }, children: [jsxs(Stack, { direction: "row", spacing: 0.5, alignItems: "flex-end", sx: { flexShrink: 0 }, children: [jsx(Tooltip, { title: "Start a new chat", children: jsx("span", { children: jsx(IconButton, { "aria-label": "New chat", onClick: handleNewChat, disabled: sending, color: "default", children: jsx(AddCommentRounded, {}) }) }) }), jsx(Tooltip, { title: "Copy full session log (raw SSE lines and prompts \u2014 includes content hidden from the chat view)", children: jsx("span", { children: jsx(IconButton, { "aria-label": "Copy full session stream log", onClick: () => void copyToClipboard(sessionStreamLogRef.current.length
                                                ? sessionStreamLogRef.current.join('\n')
                                                : '(Session log is empty — send a message first.)'), disabled: sending, color: "default", children: jsx(AssignmentRounded, {}) }) }) })] }), jsx(Box, { sx: { flex: '1 1 0%', minWidth: 0, minHeight: 0 }, children: jsx(TextField, { fullWidth: true, multiline: true, minRows: 1, maxRows: promptFocused || voiceListening ? 8 : 1, size: "small", placeholder: voiceListening ? 'Listening… speak your prompt' : promptPlaceholder, value: draft, onChange: (e) => setDraft(e.target.value), onFocus: () => setPromptFocused(true), onBlur: () => setPromptFocused(false), onKeyDown: (e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        if (canSend)
                                            startSend(draft);
                                    }
                                }, inputProps: { readOnly: voiceListening }, disabled: false, sx: {
                                    minWidth: 0,
                                    '& .MuiInputBase-root': {
                                        alignItems: 'flex-start',
                                        maxHeight: 'min(12rem, 32vh)'
                                    },
                                    '& textarea': {
                                        resize: 'none',
                                        overflowY: 'auto !important',
                                        maxHeight: 'min(11rem, 30vh) !important'
                                    }
                                } }) }), jsxs(Stack, { direction: "row", spacing: 0.5, alignItems: "flex-end", sx: { flexShrink: 0 }, children: [speechCtor ? (jsx(Tooltip, { title: voiceError
                                        ? voiceError
                                        : voiceListening
                                            ? 'Stop voice input'
                                            : 'Use voice instead of typing (browser speech recognition)', children: jsx("span", { children: jsx(IconButton, { color: voiceListening ? 'error' : 'default', onClick: () => toggleVoiceInput(), disabled: sending, "aria-label": voiceListening ? 'Stop voice input' : 'Start voice input', "aria-pressed": voiceListening, children: jsx(MicRounded, {}) }) }) })) : null, jsx(Tooltip, { title: sending ? 'Wait for the response to finish, or tap Stop beside Working' : 'Send', children: jsx("span", { children: jsx(IconButton, { color: "primary", onClick: () => startSend(draft), disabled: !canSend || sending, "aria-label": "Send", children: jsx(SendRounded, {}) }) }) })] })] }), verificationPrompts.length > 0 && !sending ? (jsxs(Box, { sx: { mt: 1.25, px: 0.25, minWidth: 0, width: '100%' }, children: [jsx(Typography, { variant: "caption", color: "text.secondary", sx: { display: 'block', mb: 0.75 }, children: "Optional checks \u2014 click to send as the next prompt" }), jsx(Stack, { spacing: 0.75, sx: { width: '100%', minWidth: 0 }, children: verificationPrompts.map((vp, idx) => (jsx(Chip, { label: vp.length > 96 ? `${vp.slice(0, 93)}…` : vp, size: "small", variant: "outlined", clickable: true, disabled: sending, onClick: () => startSend(vp, vp), sx: {
                                    width: '100%',
                                    maxWidth: '100%',
                                    height: 'auto',
                                    minHeight: 32,
                                    justifyContent: 'flex-start',
                                    '& .MuiChip-label': {
                                        whiteSpace: 'normal',
                                        textAlign: 'left',
                                        display: 'block',
                                        py: 0.75,
                                        overflowWrap: 'anywhere',
                                        wordBreak: 'break-word'
                                    }
                                } }, `cq-verify-${idx}-${vp.slice(0, 48)}`))) })] })) : null, followUpActionPrompts.length > 0 && !sending ? (jsxs(Box, { sx: { mt: verificationPrompts.length > 0 ? 1 : 1.25, px: 0.25, minWidth: 0, width: '100%' }, children: [jsx(Typography, { variant: "caption", color: "text.secondary", sx: { display: 'block', mb: 0.75 }, children: "Suggested follow-ups \u2014 click to send as the next prompt" }), jsx(Stack, { spacing: 0.75, sx: { width: '100%', minWidth: 0 }, children: followUpActionPrompts.map((fp, idx) => (jsx(Chip, { label: fp.length > 96 ? `${fp.slice(0, 93)}…` : fp, size: "small", variant: "outlined", color: "primary", clickable: true, disabled: sending, onClick: () => startSend(fp, fp), sx: {
                                    width: '100%',
                                    maxWidth: '100%',
                                    height: 'auto',
                                    minHeight: 32,
                                    justifyContent: 'flex-start',
                                    '& .MuiChip-label': {
                                        whiteSpace: 'normal',
                                        textAlign: 'left',
                                        display: 'block',
                                        py: 0.75,
                                        overflowWrap: 'anywhere',
                                        wordBreak: 'break-word'
                                    }
                                } }, `cq-follow-${idx}-${fp.slice(0, 48)}`))) })] })) : null, voiceError && !voiceListening ? (jsx(Typography, { variant: "caption", color: "error", sx: { mt: 0.75, display: 'block', px: 0.5 }, children: voiceError })) : null, ttsAvailable ? (jsx(FormControlLabel, { sx: {
                        mt: 0.75,
                        mr: 0,
                        ml: 0,
                        width: '100%',
                        minWidth: 0,
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 0.75
                    }, control: jsx(Switch, { size: "small", checked: readResponsesAloud, onChange: (_, checked) => {
                            setReadResponsesAloud(checked);
                            if (checked) {
                                const assistants = messages.filter((m) => m.role === 'assistant' || m.role === 'system');
                                const last = assistants[assistants.length - 1];
                                lastSpokenAssistantIdRef.current = last?.id ?? null;
                            }
                            else {
                                window.speechSynthesis?.cancel();
                                lastSpokenAssistantIdRef.current = null;
                            }
                        }, inputProps: { 'aria-label': 'Read assistant responses aloud' }, sx: { mt: 0.25, flexShrink: 0 } }), label: jsx(Typography, { variant: "caption", color: "text.secondary", sx: { userSelect: 'none', whiteSpace: 'normal', overflowWrap: 'anywhere' }, children: "Read responses aloud" }) })) : null] }) }));
    if (isIcePanel) {
        return (jsxs(Box, { ref: iceRootRef, sx: {
                width: '100%',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'visible'
            }, children: [iceStickyQuickPrompts, !isIcePanel ? quickPromptsRow : null, !isIcePanel && quickPromptsRow ? jsx(Divider, { sx: { flexShrink: 0 } }) : null, jsx(Box, { sx: { bgcolor: chatSurfaceBg }, children: jsx(Stack, { spacing: 1.25, sx: { px: 2, pt: 2, pb: 1 }, children: messageBubbles }) }), composerSection] }));
    }
    return (jsxs(Box, { sx: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minHeight: 0,
            minWidth: 0,
            width: '100%',
            height: '100%',
            maxHeight: '100%',
            alignSelf: 'stretch',
            overflow: 'hidden'
        }, children: [quickPromptsRow, jsx(Divider, { sx: { flexShrink: 0 } }), jsx(Box, { ref: scrollRef, sx: {
                    flex: '1 1 0%',
                    minHeight: 0,
                    minWidth: 0,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    WebkitOverflowScrolling: 'touch',
                    background: chatSurfaceBg
                }, children: jsx(Stack, { spacing: 1.25, sx: { px: 2, pt: 2, pb: 1 }, children: messageBubbles }) }), jsx(Divider, { sx: { flexShrink: 0 } }), composerSection] }));
}

function AiAssistantPopover(props) {
    const theme = useTheme();
    const { open, onClose, isMinimized = false, onMinimize, onMaximize, appBarTitle, agentLabel, width = 492, height = 595, hideBackdrop, enableCustomModel = true, agentId = '019c7237-478b-7f98-9a5c-87144c3fb010', llm, llmModel, imageModel, openAiApiKey, prompts, enableTools, expertSkills, translateBatchConcurrency, anchorPosition: anchorPositionProp, ...popoverProps } = props;
    const title = agentLabel ?? appBarTitle ?? 'Studio AI Assistant';
    const anchorPosition = anchorPositionProp ?? { top: 100, left: 100 };
    const [openAlertDialog, setOpenAlertDialog] = useState(false);
    return (jsxs(Fragment, { children: [jsxs(Popover, { open: open && !isMinimized, onClose: (e, reason) => onClose?.(e, reason ?? 'backdropClick'), keepMounted: isMinimized, anchorReference: "none", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, anchorPosition: anchorPosition, BackdropProps: {
                    invisible: true,
                    sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
                }, ...popoverProps, sx: {
                    [`> .${paperClasses.root}`]: {
                        width: '817px',
                        height: '90%',
                        display: 'flex',
                        flexDirection: 'column',
                        bottom: 10,
                        right: 10
                    },
                    ...popoverProps?.sx
                }, children: [jsx(DialogHeader, { title: title, sxs: {
                            root: { boxShadow: theme.shadows[4], borderBottom: 'none' },
                            subtitleWrapper: {
                                width: '100%'
                            }
                        }, onMinimizeButtonClick: () => onMinimize?.(), onCloseButtonClick: (e) => onClose(e, null) }), jsx(AiAssistantChat, { agentId: agentId, llm: llm, llmModel: llmModel, imageModel: imageModel, openAiApiKey: openAiApiKey, enableTools: enableTools, expertSkills: expertSkills, configPrompts: prompts, ...(translateBatchConcurrency != null ? { translateBatchConcurrency } : {}) })] }), jsx(MinimizedBar, { open: isMinimized, onMaximize: onMaximize, title: title }), jsx(AlertDialog, { disableBackdropClick: true, disableEscapeKeyDown: true, open: openAlertDialog, title: "Close this chat?", body: "The current conversation will be lost.", buttons: jsxs(Fragment, { children: [jsx(PrimaryButton, { onClick: (e) => {
                                setOpenAlertDialog(false);
                                onClose(e, null);
                            }, autoFocus: true, fullWidth: true, size: "large", children: "Close" }), jsx(SecondaryButton, { onClick: () => {
                                setOpenAlertDialog(false);
                                onMinimize?.();
                            }, fullWidth: true, size: "large", children: "Minimize" }), jsx(SecondaryButton, { onClick: () => setOpenAlertDialog(false), fullWidth: true, size: "large", children: "Cancel" })] }) })] }));
}

/** Same scroll-port detection as {@link AiAssistantChat} — ICE `ResizeableDrawer` drawerBody is `overflow-y: auto`. */
function getScrollParent(node) {
    let el = node?.parentElement ?? null;
    while (el) {
        const { overflowY, overflow } = getComputedStyle(el);
        const oy = overflowY || overflow;
        if (oy === 'auto' || oy === 'scroll' || oy === 'overlay')
            return el;
        el = el.parentElement;
    }
    return null;
}
const ICE_STICKY_HEADER_CLASS = 'aiassistant-ice-sticky-panel-header';
/**
 * ICE embed wrapper — keep overflow visible so `position: sticky` on the composer can attach to
 * Studio’s ICE `ResizeableDrawer` scroll body (drawerBody uses overflow-y: auto).
 *
 * Studio renders {@link ToolPanel}’s title row as a real `<header>` inside that same scroll
 * section, so it scrolls away by default. While this shell is mounted we tag the scroll root and
 * pin that header (and hide the redundant MUI divider under it) with global styles.
 */
function AiAssistantIceChatShell(props) {
    const { children } = props;
    const theme = useTheme$1();
    const rootRef = useRef(null);
    useLayoutEffect(() => {
        const node = rootRef.current;
        if (!node)
            return;
        const scrollRoot = getScrollParent(node);
        if (!scrollRoot)
            return;
        scrollRoot.classList.add(ICE_STICKY_HEADER_CLASS);
        return () => {
            scrollRoot.classList.remove(ICE_STICKY_HEADER_CLASS);
        };
    }, []);
    return (jsxs(Box, { ref: rootRef, sx: {
            width: '100%',
            minWidth: 0,
            alignSelf: 'stretch',
            minHeight: 'min(48dvh, 480px)',
            overflow: 'visible'
        }, children: [jsx(GlobalStyles, { styles: {
                    [`.${ICE_STICKY_HEADER_CLASS} header`]: {
                        position: 'sticky',
                        top: 0,
                        zIndex: 8,
                        backgroundColor: theme.palette.background.default,
                        borderBottom: `1px solid ${theme.palette.divider}`
                    },
                    // PanelHeader already draws a divider; we replace it with borderBottom on the sticky header.
                    [`.${ICE_STICKY_HEADER_CLASS} header + .MuiDivider-root`]: {
                        display: 'none'
                    }
                } }), children] }));
}
/**
 * Body widget for Studio's WidgetDialog. Renders only the chat.
 * Used when opening the AI Assistant via dispatch(showWidgetDialog(...)).
 */
function AiAssistantDialogContent(props) {
    const { agentId = '019c7237-478b-7f98-9a5c-87144c3fb010', llm, llmModel, imageModel, openAiApiKey, prompts, enableTools, expertSkills, translateBatchConcurrency } = props;
    return (jsx(AiAssistantChat, { agentId: agentId, llm: llm, llmModel: llmModel, imageModel: imageModel, openAiApiKey: openAiApiKey, enableTools: enableTools, expertSkills: expertSkills, configPrompts: prompts, ...(translateBatchConcurrency != null ? { translateBatchConcurrency } : {}) }));
}

const logoWidgetId = 'craftercms.components.aiassistant.OpenAILogo';
const popoverWidgetId = 'craftercms.components.aiassistant.ChatPopover';
const dialogContentWidgetId = 'craftercms.components.aiassistant.DialogContent';
const helperWidgetId = 'craftercms.components.aiassistant.Helper';
/** Tools panel widget: scheduled autonomous OpenAI assistants (prototype). */
const autonomousAssistantsWidgetId = 'craftercms.components.aiassistant.AutonomousAssistants';
/** Registered for `ToolsPanelListItemButton` / `SystemIcon` — same mark as `autonomousAgentsMarkIcon.tsx`. */
const autonomousAgentsMarkWidgetId = 'craftercms.components.aiassistant.AutonomousAgentsMark';
const formControlWidgetId = 'craftercms.components.aiassistant.FormControl';
/** Matches `<plugin id="…">` in `ui.xml` for this Studio plugin (agents may live under that widget). */
const aiAssistantStudioPluginId = 'org.craftercms.aiassistant.studio';
/*
import { EmptyStateOption } from './AiAssistant';

export const CrafterQResultMessageId = 'craftercms.aiassistant.CrafterQResult';

// Legacy commented defaults removed — configure <llmModel> / <imageModel> in ui.xml (no server image-model fallback).

// Lanaguge codes for speech to text
export const languageCodes = [
  { code: 'en-US', label: 'English (United States)' },
  { code: 'en-GB', label: 'English (United Kingdom)' },
  { code: 'en-CA', label: 'English (Canada)' },
  { code: 'en-AU', label: 'English (Australia)' },
  { code: 'fr-FR', label: 'French (France)' },
  { code: 'fr-CA', label: 'French (Canada)' },
  { code: 'fr-BE', label: 'French (Belgium)' },
  { code: 'fr-CH', label: 'French (Switzerland)' },
  { code: 'es-ES', label: 'Spanish (Spain)' },
  { code: 'es-MX', label: 'Spanish (Mexico)' },
  { code: 'es-AR', label: 'Spanish (Argentina)' },
  { code: 'es-CO', label: 'Spanish (Colombia)' },
  { code: 'de-DE', label: 'German (Germany)' },
  { code: 'de-AT', label: 'German (Austria)' },
  { code: 'de-CH', label: 'German (Switzerland)' },
  { code: 'pt-PT', label: 'Portuguese (Portugal)' },
  { code: 'pt-BR', label: 'Portuguese (Brazil)' },
  { code: 'zh-CN', label: 'Chinese (Simplified, China)' },
  { code: 'zh-TW', label: 'Chinese (Traditional, Taiwan)' },
  { code: 'zh-HK', label: 'Chinese (Traditional, Hong Kong)' },
  { code: 'ja-JP', label: 'Japanese (Japan)' },
  { code: 'ko-KR', label: 'Korean (South Korea)' },
  { code: 'ru-RU', label: 'Russian (Russia)' },
  { code: 'ar-SA', label: 'Arabic (Saudi Arabia)' },
  { code: 'ar-AE', label: 'Arabic (United Arab Emirates)' },
  { code: 'it-IT', label: 'Italian (Italy)' },
  { code: 'it-CH', label: 'Italian (Switzerland)' },
  { code: 'nl-NL', label: 'Dutch (Netherlands)' },
  { code: 'nl-BE', label: 'Dutch (Belgium)' },
  { code: 'sv-SE', label: 'Swedish (Sweden)' },
  { code: 'sv-FI', label: 'Swedish (Finland)' },
  { code: 'no-NO', label: 'Norwegian (Norway)' },
  { code: 'da-DK', label: 'Danish (Denmark)' },
  { code: 'fi-FI', label: 'Finnish (Finland)' },
  { code: 'pl-PL', label: 'Polish (Poland)' },
  { code: 'cs-CZ', label: 'Czech (Czech Republic)' },
  { code: 'sk-SK', label: 'Slovak (Slovakia)' },
  { code: 'hu-HU', label: 'Hungarian (Hungary)' },
  { code: 'el-GR', label: 'Greek (Greece)' },
  { code: 'he-IL', label: 'Hebrew (Israel)' },
  { code: 'tr-TR', label: 'Turkish (Turkey)' },
  { code: 'th-TH', label: 'Thai (Thailand)' },
  { code: 'vi-VN', label: 'Vietnamese (Vietnam)' },
  { code: 'id-ID', label: 'Indonesian (Indonesia)' },
  { code: 'ms-MY', label: 'Malay (Malaysia)' },
  { code: 'hi-IN', label: 'Hindi (India)' },
  { code: 'ta-IN', label: 'Tamil (India)' },
  { code: 'te-IN', label: 'Telugu (India)' },
  { code: 'ur-PK', label: 'Urdu (Pakistan)' },
  { code: 'fa-IR', label: 'Persian (Iran)' },
  { code: 'uk-UA', label: 'Ukrainian (Ukraine)' },
  { code: 'ro-RO', label: 'Romanian (Romania)' },
  { code: 'bg-BG', label: 'Bulgarian (Bulgaria)' },
  { code: 'hr-HR', label: 'Croatian (Croatia)' },
  { code: 'sr-RS', label: 'Serbian (Serbia)' },
  { code: 'sl-SI', label: 'Slovenian (Slovenia)' },
  { code: 'lv-LV', label: 'Latvian (Latvia)' },
  { code: 'lt-LT', label: 'Lithuanian (Lithuania)' },
  { code: 'et-EE', label: 'Estonian (Estonia)' }
];

export const copyCodeSvg = `
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>
`;

export const copiedCodeSvg = `
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z" fill="currentColor"></path></svg>
`;

// Function call definitions for CrafterQ
export const functionTools = [
  // {
  //   type: 'function',
  //   function: {
  //     name: 'publish_content',
  //     description:
  //       'Triggers a content publish action in CrafterCMS for a specific path at a specified date and time. If no currentContent or path or name parameters are available. Ask user what content to publish.',
  //     parameters: {
  //       type: 'object',
  //       properties: {
  //         internalName: {
  //           type: 'string',
  //           description:
  //             "Content identifier name. This usually is the page title, internal name. For example: 'Home', 'Categories', 'Search Results', or any specific names."
  //         },
  //         currentContent: {
  //           type: 'boolean',
  //           description:
  //             "A flag which is true if the publishing path is the 'current previewing page', 'current content', or terms such as 'this content', 'this component'."
  //         },
  //         path: {
  //           type: 'string',
  //           description: "The path in CrafterCMS where the content resides. For example, '/site/website/index.xml'."
  //         },
  //         date: {
  //           type: 'string',
  //           description:
  //             "The scheduled date and time to publish the content in ISO 8601 format. For example, '2025-12-12T00:00:00Z'."
  //         },
  //         publishingTarget: {
  //           type: 'string',
  //           description:
  //             "The publishing target or environment. Possible values are 'live' or 'staging'. Default if not specified is 'live'."
  //         }
  //       },
  //       additionalProperties: false
  //     }
  //   }
  // },
  // {
  //   type: 'function',
  //   function: {
  //     name: 'analyze_template',
  //     description:
  //       'CrafterCMS allows developers to model the content as general reusable items, and fold those into pages. Pages aggregate content from components as needed and are associated with a FreeMarker template that can render the final page. This function triggers a template analyzing action in CrafterCMS for a specific path or the current previewing page. If no currentContent or path or name parameters are available. Ask user what template to update. If analyzing currentContent template, the function will resolve the template path from the current page.',
  //     parameters: {
  //       type: 'object',
  //       properties: {
  //         instructions: {
  //           type: 'string',
  //           description: 'Instructions for analyzing the template of a page or a component'
  //         },
  //         currentContent: {
  //           type: 'boolean',
  //           description:
  //             "A flag which is true if the content path is the 'current previewing page', 'current content', 'previewing page', or terms such as 'this content', 'this page', 'this component'."
  //         },
  //         templatePath: {
  //           type: 'string',
  //           description:
  //             "The path in CrafterCMS where the template resides. For example, '/templates/web/pages/home.ftl'."
  //         },
  //         contentPath: {
  //           type: 'string',
  //           description:
  //             "The path in CrafterCMS where the content resides. For example, '/site/website/index.xml'. This path is used to resolve the template path using this function"
  //         }
  //       },
  //       required: ['instructions'],
  //       additionalProperties: false
  //     }
  //   }
  // },
  {
    type: 'function',
    function: {
      name: 'update_template',
      description:
        'CrafterCMS allows developers to model the content as general reusable items, and fold those into pages. Pages aggregate content from components as needed and are associated with a FreeMarker template that can render the final page. This function triggers a template update action in CrafterCMS for a specific path or the current previewing page. If no currentContent or path or name parameters are available. Ask user what template to update. If updating currentContent template, the function will resolve the template path from the current page.',
      parameters: {
        type: 'object',
        properties: {
          instructions: {
            type: 'string',
            description: 'Instructions for updating the template of a page or a component'
          },
          currentContent: {
            type: 'boolean',
            description:
              "A flag which is true if the content path is the 'current previewing page', 'current content', 'previewing page', or terms such as 'this content', 'this page', 'this component'."
          },
          templatePath: {
            type: 'string',
            description:
              "The path in CrafterCMS where the template resides. For example, '/templates/web/pages/home.ftl'."
          },
          contentPath: {
            type: 'string',
            description:
              "The path in CrafterCMS where the content resides. For example, '/site/website/index.xml'. This path is used to resolve the template path using this function"
          },
          contentType: {
            type: 'string',
            description:
              "The content type to be updated the model definition. The content type is a string start with either '/page' or '/component'. For example, updating the content type '/page/home' would result in updating the file '/config/studio/content-types/page/home/form-definition.xml'"
          }
        },
        required: ['instructions'],
        additionalProperties: false
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'update_content',
      description:
        "Update a page or component. Pages are top-level container types. Pages hold content, and optionally components. Content within pages is made up of various types, for example content can be a date, an image, or a rich text field. Components only differ from pages in that they can't render by themselves, instead, they must render within a container page or another component. The page or component path usually start with '/site/webiste', '/site/components' or '/site/taxonomy'. The content file name is XML and has .xml extension.",
      parameters: {
        type: 'object',
        properties: {
          instructions: {
            type: 'string',
            description: 'Instructions for updating the content'
          },
          currentContent: {
            type: 'boolean',
            description:
              "A flag which is true if the content path is the 'current previewing page', 'current content', 'previewing page', or terms such as 'this content', 'this page', 'this component'."
          },
          contentPath: {
            type: 'string',
            description: "The path in CrafterCMS where the content resides. For example, '/site/website/index.xml'"
          }
        },
        required: ['instructions'],
        additionalProperties: false
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'update_content_type',
      description:
        "Every content object in CrafterCMS is an object associated with a Content Model. Content Models allow you to add structure to your content and facilitate consumption via various visual representations or via APIs. Content Types are limited to two core types: Pages and Components. The content model is the content pieces that will be captured from the content authors for the page or component. Content type model is defined using the file 'form-definition.xml'. For example, the content model definition file for the content type '/page/home' is located at '/config/studio/content-types/page/home/form-definition.xml'. This function triggers an update to a content model definition to includes new fields, modify existing fields.",
      parameters: {
        type: 'object',
        properties: {
          instructions: {
            type: 'string',
            description: 'Instructions for updating the content model'
          },
          currentContent: {
            type: 'boolean',
            description:
              "A flag which is true if the content path is the 'current previewing page', 'current content', 'previewing page', or terms such as 'this content', 'this page', 'this component'."
          },
          contentType: {
            type: 'string',
            description:
              "The content type to be updated the model definition. The content type is a string start with either '/page' or '/component'. For example, updating the content type '/page/home' would result in updating the file '/config/studio/content-types/page/home/form-definition.xml'"
          }
        },
        required: ['instructions'],
        additionalProperties: false
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'revert_change',
      description:
        'Reverts or rollbacks content update to a previous version in CrafterCMS. If no `path` is provided and `currentContent` is used, make sure to ask the user what is the `revertType` in the case `revertType` is not provided.',
      parameters: {
        type: 'object',
        properties: {
          path: {
            type: 'string',
            description: 'The path of the content to revert.'
          },
          currentContent: {
            type: 'boolean',
            description:
              "A flag which is true if the content path is the 'current previewing page', 'current content', 'previewing page', or terms such as 'this content', 'this page', 'this component'."
          },
          revertType: {
            type: 'string',
            description:
              'If currentContent is true. This parameter is required to know that kind of data to revert. The possible values are: content, template, contentType'
          }
        },
        additionalProperties: false
      }
    }
  }
];

// Default prompt options for chat mode
export const aiAssistantEmptyStateOptionsChat: Array<EmptyStateOption> = [
  {
    id: 'useCasualTone',
    title: 'Set a casual tone for the AI content',
    subheader: 'e.g. Ready to chat about anything you like!',
    messages: [
      {
        role: 'system',
        content:
          'Answer upcoming questions using casual, informal language to convey a casual conversation with a real person. Confirm and ask the user for a prompt to begin working'
      }
    ]
  },
  {
    id: 'useProfessionalTone',
    title: 'Set a formal tone for the AI content',
    subheader: 'e.g. How may I be of assistance to you today?',
    messages: [
      {
        role: 'system',
        content:
          'Answers upcoming questions using polished, formal, and respectful language to convey professional expertise and competence. Acknowledge and ask the user for a prompt to begin working'
      }
    ]
  },
  {
    id: 'generateTitle',
    title: 'Suggest title for your content',
    prompt: 'Suggest a title for an article. Topic: '
  },
  {
    id: 'generateBody',
    title: 'Generate a body for your an article',
    prompt: 'Write the body for an article. Topic: '
  }
];

// Default prompt options for image generating mode
export const emptyStateOptionsGenerateImages: Array<EmptyStateOption> = [
  {
    id: 'generateCasualImage',
    title: 'Create an image with a casual vibe',
    subheader: 'e.g. Design a fun, relaxed scene!',
    prompt: 'Generate an image with a casual, informal theme. Include this text in the design: '
  },
  {
    id: 'generateFormalImage',
    title: 'Create an image with a professional tone',
    subheader: 'e.g. Depict a sleek, corporate environment',
    prompt: 'Generate an image with a polished, formal theme. Include this text in the design: '
  },
  {
    id: 'generateTitleImage',
    title: 'Incorporate a title into your image',
    prompt: 'Create an image based on a title. Title: '
  },
  {
    id: 'generateBodyImage',
    title: 'Incorporate a body of text into your image',
    prompt: 'Generate an image based on an article body text concept. Concept: '
  }
];
*/

var AiAssistantIcon = createSvgIcon$1(jsxs("svg", { width: "32", height: "33", viewBox: "0 0 32 33", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M25.5147 22.3719C25.4685 22.3097 25.2835 22.2942 25.1911 22.3719C23.727 23.6458 21.631 24.3915 19.5967 24.3915C15.0503 24.3915 11.4748 20.7561 11.3515 16.0642C11.4748 11.3724 15.0503 7.73693 19.5967 7.73693C21.6464 7.73693 23.7424 8.4982 25.1911 9.75661C25.2835 9.83429 25.4685 9.81876 25.5147 9.75661L28.597 6.44744C28.6587 6.3853 28.6587 6.18333 28.5662 6.09011C27.5336 5.08027 26.3315 4.25687 25.0369 3.63543L24.6979 3.52667L24.7595 0.69912C23.8811 0.403936 23.0026 0.15536 22.0933 0L20.7525 2.43915L20.4289 2.40808C19.5504 2.3304 18.934 2.3304 18.0555 2.40808L17.7319 2.43915L16.3911 0C15.4972 0.15536 14.6033 0.403936 13.7403 0.714656L13.7865 3.4956L13.4937 3.63543C12.8002 3.96168 12.1067 4.36562 11.444 4.8317L11.182 5.01813L8.80862 3.58882C8.09969 4.17919 7.4524 4.84723 6.86676 5.54635L8.28462 7.9389L8.09969 8.20301C7.83769 8.57588 7.59111 8.97981 7.3137 9.4925L7.09794 9.91197C7.03629 10.0363 6.97464 10.145 6.913 10.2693L6.77429 10.5645L4.01563 10.5334C3.7074 11.4034 3.46082 12.3045 3.3067 13.2056L5.72631 14.5572L5.69549 14.8835C5.64925 15.334 5.63384 15.7069 5.63384 16.0798C5.63384 16.4526 5.64925 16.8255 5.69549 17.276L5.72631 17.6023L3.3067 18.9539C3.46082 19.855 3.7074 20.7561 4.01563 21.6261L6.77429 21.5795L6.913 21.8747C6.97464 21.999 7.03629 22.1077 7.09794 22.232L7.3137 22.6515C7.59111 23.1642 7.83769 23.5681 8.09969 23.941L8.28462 24.2051L6.86676 26.5976C7.4524 27.2968 8.1151 27.9648 8.80862 28.5552L11.182 27.1259L11.444 27.3123C12.1067 27.7784 12.8002 28.1823 13.4937 28.5086L13.7865 28.6484L13.7403 31.4293C14.6033 31.7401 15.4972 31.9886 16.3911 32.144L17.7319 29.7048L18.0555 29.7359C18.934 29.8136 19.5504 29.8136 20.4289 29.7359L20.7525 29.7048L22.0933 32.144C22.9872 31.9886 23.8811 31.7401 24.7441 31.4293L24.6825 28.6018L25.0215 28.493C26.3161 27.8871 27.5182 27.0482 28.5508 26.0383C28.6432 25.9451 28.6432 25.7432 28.5816 25.681L25.5147 22.3719Z", fill: "#00000033" }), jsx("path", { d: "M18.4327 18.0631H20.6742L21.8011 19.5128L22.9097 20.8041L24.9989 23.4233H22.5381L21.1006 21.6569L20.3636 20.6092L18.4327 18.0631ZM25.1877 16.1627C25.1877 17.5231 24.9299 18.6804 24.4142 19.6346C23.9025 20.5889 23.2041 21.3178 22.3188 21.8214C21.4376 22.3208 20.4468 22.5706 19.3463 22.5706C18.2378 22.5706 17.2429 22.3188 16.3617 21.8153C15.4805 21.3117 14.7841 20.5828 14.2724 19.6286C13.7608 18.6743 13.5049 17.519 13.5049 16.1627C13.5049 14.8023 13.7608 13.645 14.2724 12.6908C14.7841 11.7365 15.4805 11.0096 16.3617 10.5101C17.2429 10.0066 18.2378 9.75482 19.3463 9.75482C20.4468 9.75482 21.4376 10.0066 22.3188 10.5101C23.2041 11.0096 23.9025 11.7365 24.4142 12.6908C24.9299 13.645 25.1877 14.8023 25.1877 16.1627ZM22.5137 16.1627C22.5137 15.2815 22.3818 14.5384 22.1178 13.9333C21.8579 13.3283 21.4904 12.8694 21.0153 12.5567C20.5402 12.2441 19.9839 12.0877 19.3463 12.0877C18.7088 12.0877 18.1525 12.2441 17.6774 12.5567C17.2023 12.8694 16.8327 13.3283 16.5688 13.9333C16.3089 14.5384 16.179 15.2815 16.179 16.1627C16.179 17.0439 16.3089 17.787 16.5688 18.3921C16.8327 18.9971 17.2023 19.456 17.6774 19.7687C18.1525 20.0813 18.7088 20.2377 19.3463 20.2377C19.9839 20.2377 20.5402 20.0813 21.0153 19.7687C21.4904 19.456 21.8579 18.9971 22.1178 18.3921C22.3818 17.787 22.5137 17.0439 22.5137 16.1627Z", fill: "black" })] }), 'aiAssistant');

const AutonomousAgentsMarkIcon = createSvgIcon$1(jsxs("svg", { viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true, children: [jsx("path", { fill: "currentColor", d: "M45.6,18.7,41,14.9V7.5a1,1,0,0,0-.6-.9L30.5,2.1h-.4l-.6.2L24,5.9,18.5,2.2,17.9,2h-.4L7.6,6.6a1,1,0,0,0-.6.9v7.4L2.4,18.7a.8.8,0,0,0-.4.8v9H2a.8.8,0,0,0,.4.8L7,33.1v7.4a1,1,0,0,0,.6.9l9.9,4.5h.4l.6-.2L24,42.1l5.5,3.7.6.2h.4l9.9-4.5a1,1,0,0,0,.6-.9V33.1l4.6-3.8a.8.8,0,0,0,.4-.7V19.4h0A.8.8,0,0,0,45.6,18.7Zm-5.1,6.8H42v1.6l-3.5,2.8-.4.3-.4-.2a1.4,1.4,0,0,0-2,.7,1.5,1.5,0,0,0,.6,2l.7.3h0v5.4l-6.6,3.1-4.2-2.8-.7-.5V25.5H27a1.5,1.5,0,0,0,0-3H25.5V9.7l.7-.5,4.2-2.8L37,9.5v5.4h0l-.7.3a1.5,1.5,0,0,0-.6,2,1.4,1.4,0,0,0,1.3.9l.7-.2.4-.2.4.3L42,20.9v1.6H40.5a1.5,1.5,0,0,0,0,3ZM21,25.5h1.5V38.3l-.7.5-4.2,2.8L11,38.5V33.1h0l.7-.3a1.5,1.5,0,0,0,.6-2,1.4,1.4,0,0,0-2-.7l-.4.2-.4-.3L6,27.1V25.5H7.5a1.5,1.5,0,0,0,0-3H6V20.9l3.5-2.8.4-.3.4.2.7.2a1.4,1.4,0,0,0,1.3-.9,1.5,1.5,0,0,0-.6-2L11,15h0V9.5l6.6-3.1,4.2,2.8.7.5V22.5H21a1.5,1.5,0,0,0,0,3Z" }), jsx("path", { fill: "currentColor", d: "M13.9,9.9a1.8,1.8,0,0,0,0,2.2l2.6,2.5v2.8l-4,4v5.2l4,4v2.8l-2.6,2.5a1.8,1.8,0,0,0,0,2.2,1.5,1.5,0,0,0,1.1.4,1.5,1.5,0,0,0,1.1-.4l3.4-3.5V29.4l-4-4V22.6l4-4V13.4L16.1,9.9A1.8,1.8,0,0,0,13.9,9.9Z" }), jsx("path", { fill: "currentColor", d: "M31.5,14.6l2.6-2.5a1.8,1.8,0,0,0,0-2.2,1.8,1.8,0,0,0-2.2,0l-3.4,3.5v5.2l4,4v2.8l-4,4v5.2l3.4,3.5a1.7,1.7,0,0,0,2.2,0,1.8,1.8,0,0,0,0-2.2l-2.6-2.5V30.6l4-4V21.4l-4-4Z" })] }), 'AutonomousAgentsMark');

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// region Batch Actions
const batchActions = /*#__PURE__*/ createAction('BATCH_ACTIONS');
// endregion

/**
 * Stable key for matching agents between ui.xml, form field properties, and the form-control UI.
 * When both `id` and `label` are set, uses a composite key so multiple `<agent>` rows with the **same**
 * backend `id` (e.g. same CrafterQ UUID, different labels) stay distinct — otherwise merging collapses them.
 */
function agentStableKey(a) {
    const id = (a.id || '').trim();
    const label = (a.label || '').trim();
    if (id && label)
        return `${id}\u001e${label}`;
    if (id)
        return id;
    return label || 'agent';
}
/** Label used when Studio JSON omits `<label>` (see {@link normalizeAgent}); not a real product name. */
const CRAFTERQ_AGENT_LABEL_PLACEHOLDER = 'CrafterQ';
/** Default **`<crafterQAgentId>`** / label pair from `craftercms-plugin.yaml` sample Helper `<agent>` (CrafterQ cloud). */
const CRAFTERQ_PLUGIN_SAMPLE_AGENT_ID = '019c7237-478b-7f98-9a5c-87144c3fb010';
const CRAFTERQ_PLUGIN_SAMPLE_AGENT_LABEL = 'CrafterQ content';
function shouldOverlayLabelFromSite(agent, ui) {
    const u = (ui.label || '').trim();
    if (!u)
        return false;
    const a = (agent.label || '').trim();
    if (!a)
        return true;
    if (a === CRAFTERQ_AGENT_LABEL_PLACEHOLDER && u !== a)
        return true;
    return false;
}
function shouldOverlayIconFromSite(agent, ui) {
    return Boolean((ui.icon || '').trim() && !(agent.icon || '').trim());
}
function shouldOverlayPromptsFromSite(agent, ui) {
    return Boolean(Array.isArray(ui.prompts) && ui.prompts.length > 0 && (!agent.prompts || agent.prompts.length === 0));
}
/**
 * Merge site `ui.xml` agents onto widget JSON agents.
 * When the widget row has no **{@code <crafterQAgentId>}**, Studio often omits label/icon/prompts so {@link normalizeAgent}
 * fills a placeholder label — stable keys then diverge from `/ui.xml` and the Helper menu shows duplicates.
 * Match: stable key, then id; when id is empty and site lists exactly one agent, treat that row as the overlay.
 */
function mergeAgentsWithSiteUiXmlOverlay(fromWidget, fromUiXml) {
    if (!fromUiXml.length || !fromWidget.length)
        return fromWidget;
    return fromWidget.map((agent) => {
        const key = agentStableKey(agent);
        const byKey = fromUiXml.find((u) => agentStableKey(u) === key);
        const idTrim = (agent.id || '').trim();
        let ui = byKey;
        if (!ui && idTrim) {
            ui = fromUiXml.find((u) => (u.id || '').trim() === idTrim);
        }
        if (!ui && !idTrim && fromUiXml.length === 1) {
            ui = fromUiXml[0];
        }
        if (!ui)
            return agent;
        return {
            ...agent,
            ...(shouldOverlayLabelFromSite(agent, ui) ? { label: (ui.label || '').trim() } : {}),
            ...(shouldOverlayIconFromSite(agent, ui) ? { icon: ui.icon } : {}),
            ...(shouldOverlayPromptsFromSite(agent, ui) ? { prompts: ui.prompts } : {}),
            ...(ui.id?.trim() && !(agent.id || '').trim() ? { id: ui.id.trim() } : {}),
            ...(ui.enableTools !== undefined ? { enableTools: ui.enableTools } : {}),
            ...(ui.llm !== undefined && agent.llm === undefined ? { llm: ui.llm } : {}),
            ...(typeof ui.llmModel === 'string' &&
                ui.llmModel.trim() &&
                !(agent.llmModel || '').trim()
                ? { llmModel: ui.llmModel.trim() }
                : {}),
            ...(typeof ui.imageModel === 'string' &&
                ui.imageModel.trim() &&
                !(agent.imageModel || '').trim()
                ? { imageModel: ui.imageModel.trim() }
                : {}),
            ...(ui.openAiApiKey !== undefined && agent.openAiApiKey === undefined ? { openAiApiKey: ui.openAiApiKey } : {}),
            ...(ui.openAsPopup !== undefined && agent.openAsPopup === undefined ? { openAsPopup: ui.openAsPopup } : {}),
            ...(Array.isArray(ui.expertSkills) &&
                ui.expertSkills.length > 0 &&
                (!agent.expertSkills || agent.expertSkills.length === 0)
                ? { expertSkills: ui.expertSkills }
                : {}),
            ...(ui.translateBatchConcurrency != null && Number.isFinite(ui.translateBatchConcurrency)
                ? { translateBatchConcurrency: ui.translateBatchConcurrency }
                : {})
        };
    });
}
/** Keep first occurrence per {@link agentStableKey} (order preserved). */
function dedupeAgentsByStableKey(agents) {
    const m = new Map();
    for (const a of agents) {
        const k = agentStableKey(a);
        if (!m.has(k))
            m.set(k, a);
    }
    return Array.from(m.values());
}
/**
 * Remove (a) JSON placeholder rows (label exactly {@link CRAFTERQ_AGENT_LABEL_PLACEHOLDER}) whenever another agent
 * has a non-placeholder label (Studio may still attach a non-sample id to the fallback row), and
 * (b) the plugin-install sample agent (`{@link CRAFTERQ_PLUGIN_SAMPLE_AGENT_ID}` + {@link CRAFTERQ_PLUGIN_SAMPLE_AGENT_LABEL}})
 * when at least one other row looks author-defined — typical duplicate Helper menu (Studio merges blueprint + site `ui.xml`).
 */
function dropPlaceholderAgentsWhenRicherMatchesExist(agents) {
    const deduped = dedupeAgentsByStableKey(agents);
    if (deduped.length <= 1)
        return deduped;
    const hasRicher = deduped.some((a) => {
        const lab = (a.label || '').trim();
        if (!lab)
            return false;
        if (lab === CRAFTERQ_AGENT_LABEL_PLACEHOLDER)
            return false;
        if (lab === CRAFTERQ_PLUGIN_SAMPLE_AGENT_LABEL)
            return false;
        return true;
    });
    if (!hasRicher)
        return deduped;
    return deduped.filter((a) => {
        const id = (a.id || '').trim();
        const label = (a.label || '').trim();
        if (hasRicher && label === CRAFTERQ_AGENT_LABEL_PLACEHOLDER)
            return false;
        if (id === CRAFTERQ_PLUGIN_SAMPLE_AGENT_ID && label === CRAFTERQ_PLUGIN_SAMPLE_AGENT_LABEL)
            return false;
        return true;
    });
}
const DEFAULT_AGENT_ID = '';
/** Fallback list so dropdown always works when config is missing. */
const DEFAULT_AGENTS = [];
/**
 * Normalize agents from widget configuration.
 * Falls back to DEFAULT_AGENTS when no config or no agents found so the UI always works.
 */
function getAgentsFromConfiguration(configuration) {
    const config = configuration != null && typeof configuration === 'object' ? configuration : null;
    if (!config)
        return DEFAULT_AGENTS;
    // Prefer nested configuration.agents; fallback to top-level agents (e.g. if config is spread onto props)
    let agentsRaw = config.agents;
    if (agentsRaw == null && config.configuration != null && typeof config.configuration === 'object') {
        const inner = config.configuration;
        agentsRaw = inner.agents ?? (inner.configuration != null && typeof inner.configuration === 'object' ? inner.configuration.agents : undefined);
    }
    if (agentsRaw == null && config.configuration != null && typeof config.configuration === 'object') {
        const inner = config.configuration;
        if (inner.configuration != null && typeof inner.configuration === 'object') {
            const deep = inner.configuration.agents;
            if (deep != null)
                agentsRaw = deep;
        }
    }
    if (agentsRaw == null) {
        const singleAgent = config.agent ?? (config.configuration && typeof config.configuration === 'object' ? config.configuration.agent : undefined);
        if (singleAgent != null) {
            const one = normalizeAgentOrWrapped(singleAgent);
            if (one)
                return [one];
        }
        return DEFAULT_AGENTS;
    }
    // Direct array
    if (Array.isArray(agentsRaw)) {
        const list = agentsRaw.map((a) => normalizeAgentOrWrapped(a)).filter(Boolean);
        return list.length > 0 ? list : DEFAULT_AGENTS;
    }
    // Nested: { agent: [ {...}, {...} ] } or { agent: { "0": {...}, "1": {...} } } — same pattern as uigoodies CopyCurrentPageUrl (Object.keys(environments.label))
    if (typeof agentsRaw === 'object' && agentsRaw !== null) {
        const obj = agentsRaw;
        const listOrSingle = obj.agent;
        if (listOrSingle != null) {
            const arr = Array.isArray(listOrSingle)
                ? listOrSingle
                : typeof listOrSingle === 'object' && listOrSingle !== null
                    ? Object.values(listOrSingle)
                    : [];
            const list = arr.map((a) => normalizeAgentOrWrapped(a)).filter(Boolean);
            if (list.length > 0)
                return list;
        }
    }
    return DEFAULT_AGENTS;
}
/** Normalize one item that might be `{ agent: { crafterQAgentId, label, ... } }` or plain `{ crafterQAgentId, label, ... }`. */
function normalizeAgentOrWrapped(a) {
    if (!a || typeof a !== 'object')
        return null;
    const o = a;
    const agent = o.agent && typeof o.agent === 'object' ? o.agent : o;
    return normalizeAgent(agent);
}
/**
 * Normalize one agent from config: **crafterQAgentId**, **label**, optional **icon**, **prompts**, etc.
 */
function normalizeExpertSkillsRaw(raw) {
    if (raw == null)
        return undefined;
    const rows = [];
    const pushFromRecord = (r) => {
        const url = extractString(r.url) ?? extractString(r.href);
        if (!url?.trim())
            return;
        rows.push({
            name: extractString(r.name) ?? 'Expert guidance',
            url: url.trim(),
            description: extractString(r.description) ?? ''
        });
    };
    if (Array.isArray(raw)) {
        for (const item of raw) {
            if (!item || typeof item !== 'object')
                continue;
            pushFromRecord(item);
        }
    }
    else if (typeof raw === 'object') {
        const o = raw;
        const nested = o.expertSkill;
        if (Array.isArray(nested)) {
            for (const item of nested) {
                if (!item || typeof item !== 'object')
                    continue;
                pushFromRecord(item);
            }
        }
        else if (nested && typeof nested === 'object') {
            pushFromRecord(nested);
        }
    }
    return rows.length ? rows : undefined;
}
function normalizeAgent(a) {
    if (!a || typeof a !== 'object')
        return null;
    const o = a;
    const id = extractString(o.crafterQAgentId) ?? DEFAULT_AGENT_ID;
    const label = extractString(o.label) ?? CRAFTERQ_AGENT_LABEL_PLACEHOLDER;
    if (!label.trim())
        return null;
    let icon;
    const iconVal = o.icon;
    if (typeof iconVal === 'string')
        icon = iconVal;
    else if (iconVal && typeof iconVal === 'object') {
        const iconObj = iconVal;
        icon = typeof iconObj.id === 'string' ? iconObj.id : typeof iconObj['@_id'] === 'string' ? iconObj['@_id'] : undefined;
    }
    const prompts = normalizePrompts(o.prompts);
    const llmRaw = extractString(o.llm)?.toLowerCase();
    let llm;
    if (llmRaw === 'openai' || llmRaw === 'open-ai')
        llm = 'openAI';
    else if (llmRaw === 'crafterq' || llmRaw === 'crafter-q')
        llm = 'crafterQ';
    const llmModel = extractString(o.llmModel);
    const imageModel = extractString(o.imageModel);
    const openAiApiKey = extractString(o.openAiApiKey) ??
        extractString(o['open-ai-api-key']) ??
        extractString(o.open_ai_api_key);
    const out = { id: id.trim(), label, icon, prompts };
    if (llm)
        out.llm = llm;
    if (llmModel)
        out.llmModel = llmModel;
    if (imageModel)
        out.imageModel = imageModel;
    if (openAiApiKey?.trim())
        out.openAiApiKey = openAiApiKey.trim();
    const openAsPopup = extractBooleanFromRecord(o, 'openAsPopup', 'open_as_popup', 'OpenAsPopup');
    if (openAsPopup !== undefined)
        out.openAsPopup = openAsPopup;
    const enableTools = extractBooleanFromRecord(o, 'enableTools', 'enable_tools');
    if (enableTools !== undefined)
        out.enableTools = enableTools;
    const expertSkills = normalizeExpertSkillsRaw(o.expertSkills) ?? normalizeExpertSkillsRaw(o.expertSkill);
    if (expertSkills)
        out.expertSkills = expertSkills;
    const translateBatchConcurrency = extractPositiveInt(o, 1, 64, 'translateBatchConcurrency', 'translate_batch_concurrency', 'TranslateBatchConcurrency');
    if (translateBatchConcurrency != null)
        out.translateBatchConcurrency = translateBatchConcurrency;
    return out;
}
/** Integer in inclusive range; undefined if missing or invalid. */
function extractPositiveInt(o, min, max, ...keys) {
    for (const k of keys) {
        const v = o[k];
        if (v == null)
            continue;
        let n;
        if (typeof v === 'number' && Number.isFinite(v))
            n = Math.floor(v);
        else {
            const s = extractString(v);
            if (!s)
                continue;
            n = parseInt(s, 10);
        }
        if (!Number.isFinite(n))
            continue;
        if (n < min || n > max)
            continue;
        return n;
    }
    return undefined;
}
function extractBooleanFromRecord(o, ...keys) {
    for (const k of keys) {
        const v = o[k];
        if (v === true)
            return true;
        if (v === false)
            return false;
        const s = extractString(v)?.toLowerCase();
        if (s === 'true' || s === '1' || s === 'yes')
            return true;
        if (s === 'false' || s === '0' || s === 'no')
            return false;
    }
    return undefined;
}
/** First matching optional boolean on a Studio widget/configuration object (JSON props). */
function readOptionalBooleanFromConfiguration(o, ...keys) {
    if (o == null || typeof o !== 'object')
        return undefined;
    return extractBooleanFromRecord(o, ...keys);
}
function extractString(v) {
    if (v == null)
        return undefined;
    if (typeof v === 'string')
        return v.trim() || undefined;
    if (Array.isArray(v)) {
        const first = v[0];
        if (first != null)
            return extractString(first);
        return undefined;
    }
    if (typeof v === 'object') {
        const o = v;
        const candidates = [
            o.$text,
            o.value,
            o['#text'],
            o.__text,
            o._,
            o['@_id'],
            o.text,
            o.content
        ];
        for (const c of candidates) {
            if (typeof c === 'string')
                return c.trim() || undefined;
        }
        for (const c of candidates) {
            if (c != null && typeof c === 'object') {
                const s = extractString(c);
                if (s)
                    return s;
            }
        }
        const values = Object.values(o);
        if (values.length > 0) {
            const first = extractString(values[0]);
            if (first)
                return first;
        }
    }
    return undefined;
}
function extractAdditionalContextField(o) {
    const ctx = extractString(o.additionalContext) ??
        extractString(o['additional-context']) ??
        extractString(o.context) ??
        extractString(o.AdditionalContext) ??
        extractString(o.additional_context);
    return ctx?.trim() ? ctx.trim() : undefined;
}
/** Quick-action chips should be short labels; long / multiline "userText" is almost always mis-parsed additional context. */
const MAX_QUICK_PROMPT_LABEL_CHARS = 100;
const MIN_MULTILINE_QUICK_PROMPT_CHARS = 48;
function isLikelyMisplacedContextPrompt(p) {
    const t = (p.userText || '').trim();
    if (!t)
        return false;
    if (t.length > MAX_QUICK_PROMPT_LABEL_CHARS)
        return true;
    if (t.includes('\n') && t.length >= MIN_MULTILINE_QUICK_PROMPT_CHARS)
        return true;
    return false;
}
/**
 * When Studio/XML produces two <prompt> entries (or flattens context into #text), the second
 * entry often becomes a second "button" with the full context as userText. Fold those into the
 * previous prompt's additionalContext instead.
 */
function mergeMisplacedContextPrompts(prompts) {
    if (prompts.length <= 1)
        return prompts;
    const out = [];
    for (const p of prompts) {
        if (isLikelyMisplacedContextPrompt(p) && out.length > 0) {
            const prev = out[out.length - 1];
            const body = (p.userText || '').trim();
            const extra = (p.additionalContext || '').trim();
            const chunk = [body, extra].filter(Boolean).join('\n\n');
            prev.additionalContext = prev.additionalContext ? `${prev.additionalContext}\n\n${chunk}` : chunk;
            continue;
        }
        out.push({ ...p });
    }
    return out;
}
function normalizePrompts(prompts) {
    const normalizeOne = (p) => {
        if (p == null)
            return null;
        // Back-compat: <prompt>Text</prompt>
        if (typeof p === 'string')
            return { userText: p };
        if (typeof p !== 'object') {
            const s = extractString(p);
            return s ? { userText: s } : null;
        }
        const o = p;
        // New structure:
        // <prompt><userText>...</userText><additionalContext>...</additionalContext></prompt>
        const userText = extractString(o.userText) ??
            extractString(o['user-text']) ??
            extractString(o.text) ??
            extractString(o.UserText) ??
            extractString(o.user_text);
        const additionalContext = extractAdditionalContextField(o);
        if (userText && userText.trim()) {
            const pc = { userText: userText.trim() };
            if (additionalContext)
                pc.additionalContext = additionalContext;
            const omitTools = extractBooleanFromRecord(o, 'omitTools', 'omit_tools');
            if (omitTools === true)
                pc.omitTools = true;
            return pc;
        }
        // Studio/XML parsers sometimes emit sibling nodes as two array entries: one { userText }, one { additionalContext }.
        // Never promote additionalContext alone to userText (that created a second "quick" button). Merge in processPromptList instead.
        if (additionalContext)
            return null;
        // Some parsers might flatten the inner text into #text/value
        const fallback = extractString(o);
        return fallback ? { userText: fallback } : null;
    };
    const coerceList = (raw) => {
        if (raw == null)
            return [];
        if (Array.isArray(raw))
            return raw;
        if (typeof raw === 'object')
            return Object.values(raw);
        return [raw];
    };
    /** Preserve order; merge orphan context-only fragments into the previous prompt. */
    const processPromptList = (arr) => {
        const out = [];
        for (const item of arr) {
            const normalized = normalizeOne(item);
            if (normalized) {
                out.push(normalized);
                continue;
            }
            if (item != null && typeof item === 'object') {
                const ctx = extractAdditionalContextField(item);
                if (ctx && out.length > 0) {
                    const prev = out[out.length - 1];
                    prev.additionalContext = prev.additionalContext ? `${prev.additionalContext}\n\n${ctx}` : ctx;
                }
            }
        }
        return out;
    };
    const finalize = (arr) => mergeMisplacedContextPrompts(processPromptList(arr));
    if (prompts && typeof prompts === 'object') {
        const p = prompts;
        const raw = p.prompt;
        return finalize(coerceList(raw));
    }
    return finalize(coerceList(prompts));
}

/** Prefer direct child elements named `tag` (matches typical ui.xml serialization). */
function childTextDirect(parent, tag) {
    const t = tag.toLowerCase();
    for (let i = 0; i < parent.children.length; i++) {
        const ch = parent.children[i];
        const name = ch.localName || ch.tagName.replace(/^.*:/, '');
        if (name.toLowerCase() === t)
            return ch.textContent?.trim() || undefined;
    }
    return undefined;
}
function parseAgentElement(agentEl) {
    const id = childTextDirect(agentEl, 'crafterQAgentId') ?? '';
    const label = childTextDirect(agentEl, 'label') ?? '';
    if (!label.trim())
        return null;
    let icon;
    for (let i = 0; i < agentEl.children.length; i++) {
        const ch = agentEl.children[i];
        const name = (ch.localName || '').toLowerCase();
        if (name === 'icon') {
            const idAttr = ch.getAttribute('id')?.trim();
            const body = (ch.textContent || '').trim();
            icon = idAttr || body || undefined;
            break;
        }
    }
    const llmRaw = (childTextDirect(agentEl, 'llm') ?? '').toLowerCase();
    let llm;
    if (llmRaw === 'openai' || llmRaw === 'open-ai')
        llm = 'openAI';
    else if (llmRaw === 'aiassistant' || llmRaw === 'crafter-q')
        llm = 'crafterQ';
    const llmModel = childTextDirect(agentEl, 'llmModel');
    const imageModel = childTextDirect(agentEl, 'imageModel');
    const openAiApiKey = childTextDirect(agentEl, 'openAiApiKey') ??
        childTextDirect(agentEl, 'open-ai-api-key') ??
        childTextDirect(agentEl, 'open_ai_api_key');
    const out = { id: id.trim(), label: label.trim(), icon, prompts: [] };
    if (llm)
        out.llm = llm;
    if (llmModel)
        out.llmModel = llmModel;
    if (imageModel)
        out.imageModel = imageModel;
    if (openAiApiKey?.trim())
        out.openAiApiKey = openAiApiKey.trim();
    const enableToolsRaw = childTextDirect(agentEl, 'enableTools') ?? childTextDirect(agentEl, 'enable_tools');
    if (enableToolsRaw !== undefined && String(enableToolsRaw).trim() !== '') {
        const s = String(enableToolsRaw).trim().toLowerCase();
        if (s === 'false' || s === '0' || s === 'no')
            out.enableTools = false;
        else if (s === 'true' || s === '1' || s === 'yes')
            out.enableTools = true;
    }
    const expertSkills = [];
    for (let j = 0; j < agentEl.children.length; j++) {
        const cel = agentEl.children[j];
        const cnm = (cel.localName || '').toLowerCase();
        if (cnm !== 'expertskill')
            continue;
        const esUrl = cel.getAttribute('url')?.trim() ||
            cel.getAttribute('href')?.trim() ||
            childTextDirect(cel, 'url') ||
            childTextDirect(cel, 'href');
        if (!esUrl?.trim())
            continue;
        const esName = cel.getAttribute('name')?.trim() ||
            childTextDirect(cel, 'name') ||
            'Expert guidance';
        const esDesc = cel.getAttribute('description')?.trim() || childTextDirect(cel, 'description') || '';
        expertSkills.push({
            name: esName.trim(),
            url: esUrl.trim(),
            description: esDesc.trim()
        });
    }
    if (expertSkills.length)
        out.expertSkills = expertSkills;
    return out;
}
/** Walk parents — avoid closest('agents') on XML DOMParser documents (can skip all agents). */
function nearestAgentsAncestorForAgent(ag) {
    let el = ag.parentElement;
    while (el) {
        const nm = (el.localName || el.tagName.replace(/^.*:/, '')).toLowerCase();
        if (nm === 'agents')
            return el;
        el = el.parentElement;
    }
    return null;
}
function collectAgentsInContainer(agentsContainer) {
    const out = [];
    const agentEls = agentsContainer.getElementsByTagName('agent');
    for (let i = 0; i < agentEls.length; i++) {
        const ag = agentEls[i];
        if (nearestAgentsAncestorForAgent(ag) !== agentsContainer)
            continue;
        const parsed = parseAgentElement(ag);
        if (parsed)
            out.push(parsed);
    }
    return out;
}
function collectAgentsUnderConfiguration(configurationEl) {
    const agentsContainer = configurationEl.getElementsByTagName('agents')[0];
    if (!agentsContainer)
        return [];
    return collectAgentsInContainer(agentsContainer);
}
function mergeAgentsFromWidget(widgetEl, byId) {
    const configs = widgetEl.getElementsByTagName('configuration');
    for (let c = 0; c < configs.length; c++) {
        const cfg = configs[c];
        if (!widgetEl.contains(cfg))
            continue;
        const list = collectAgentsUnderConfiguration(cfg);
        for (const a of list) {
            byId.set(agentStableKey(a), a);
        }
    }
    const wch = widgetEl.children;
    for (let k = 0; k < wch.length; k++) {
        const cel = wch[k];
        const cname = (cel.localName || cel.tagName.replace(/^.*:/, '')).toLowerCase();
        if (cname !== 'agents')
            continue;
        for (const a of collectAgentsInContainer(cel)) {
            byId.set(agentStableKey(a), a);
        }
    }
}
/**
 * Walk site `ui.xml`: Helper widget and any widget that hosts `<plugin id="org.craftercms.aiassistant.studio">`.
 * Merges agents by stable key (same logic as legacy form control `main.js`).
 */
function parseAgentsFromStudioUiXml(xmlString) {
    if (!xmlString || !xmlString.trim())
        return [];
    const doc = new DOMParser().parseFromString(xmlString, 'text/xml');
    const parseError = doc.querySelector('parsererror');
    if (parseError)
        return [];
    const byId = new Map();
    const widgets = doc.getElementsByTagName('widget');
    for (let i = 0; i < widgets.length; i++) {
        const w = widgets[i];
        const wid = w.getAttribute('id');
        if (wid === helperWidgetId || wid === formControlWidgetId) {
            mergeAgentsFromWidget(w, byId);
        }
    }
    const plugins = doc.getElementsByTagName('plugin');
    for (let p = 0; p < plugins.length; p++) {
        const pl = plugins[p];
        const pid = pl.getAttribute('id') || pl.getAttribute('pluginId');
        if (pid !== aiAssistantStudioPluginId)
            continue;
        let el = pl;
        while (el) {
            const local = String(el.localName || el.tagName.replace(/^.*:/, '')).toLowerCase();
            if (local === 'widget') {
                mergeAgentsFromWidget(el, byId);
                break;
            }
            el = el.parentElement;
        }
    }
    return Array.from(byId.values());
}
/**
 * Load agents from site `config/studio/ui.xml` (Helper widget and/or AI Assistant Studio plugin widget).
 */
async function fetchAiAssistantAgentsFromSiteUi(siteId) {
    if (!siteId)
        return [];
    const xml = await firstValueFrom(fetchConfigurationXML(siteId, '/ui.xml', 'studio'));
    return parseAgentsFromStudioUiXml(xml ?? '');
}

const ICON_MAP = {
    '@mui/icons-material/ChatRounded': ChatRounded,
    '@mui/icons-material/EditRounded': EditRounded,
    '@mui/icons-material/SmartToyRounded': SmartToyRounded,
    '@mui/icons-material/SupportAgentRounded': SupportAgentRounded,
    '@mui/icons-material/PsychologyRounded': PsychologyRounded
};
/** Strip obvious script/event vectors from admin-supplied SVG in ui.xml (defense in depth). */
function sanitizeAgentInlineSvg(svg) {
    let s = svg.trim();
    s = s.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
    s = s.replace(/\son\w+\s*=\s*(["']).*?\1/gi, '');
    s = s.replace(/\son\w+\s*=\s*[^\s>]*/gi, '');
    return s;
}
function getAgentIcon(iconId) {
    if (!iconId)
        return jsx(AiAssistantIcon, {});
    const raw = iconId.trim();
    if (/^<\s*svg[\s>/]/i.test(raw)) {
        const safe = sanitizeAgentInlineSvg(raw);
        return (jsx(Box$1, { component: "span", sx: {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 20,
                height: 20,
                flexShrink: 0,
                color: 'inherit',
                '& > svg': { width: '100%', height: '100%', display: 'block' }
            }, dangerouslySetInnerHTML: { __html: safe } }));
    }
    const Icon = ICON_MAP[raw];
    if (Icon)
        return jsx(Icon, { fontSize: "small" });
    /** Same resolution as the rest of Studio `ui.xml`: {@link SystemIcon} → `components.get(id)` (e.g. `craftercms.icons.*`, `@mui/icons-material/*`). */
    if (raw.startsWith('craftercms.') || raw.startsWith('@mui/')) {
        return jsx(SystemIcon, { icon: { id: raw }, svgIconProps: { fontSize: 'small', sx: { color: 'inherit' } } });
    }
    return jsx(AiAssistantIcon, {});
}

const DIALOG_WIDTH_STORAGE_KEY = 'aiassistant-dialog-width';
const DEFAULT_DIALOG_WIDTH = 480;
const MIN_DIALOG_WIDTH = 320;
const MAX_DIALOG_WIDTH = 900;
function getDialogWidthStorageKey(siteId, agentId) {
    const site = (siteId || 'default').replace(/[^a-zA-Z0-9-_]/g, '_');
    const agent = (agentId || 'default').replace(/[^a-zA-Z0-9-_]/g, '_');
    return `${DIALOG_WIDTH_STORAGE_KEY}-${site}-${agent}`;
}
function getStoredDialogWidth(siteId, agentId) {
    if (typeof localStorage === 'undefined')
        return null;
    try {
        const raw = localStorage.getItem(getDialogWidthStorageKey(siteId, agentId));
        if (raw == null)
            return null;
        const n = Number(raw);
        return Number.isFinite(n) && n >= MIN_DIALOG_WIDTH && n <= MAX_DIALOG_WIDTH ? n : null;
    }
    catch {
        return null;
    }
}
function setStoredDialogWidth(siteId, agentId, width) {
    if (typeof localStorage === 'undefined')
        return;
    try {
        const w = Math.round(Math.max(MIN_DIALOG_WIDTH, Math.min(MAX_DIALOG_WIDTH, width)));
        localStorage.setItem(getDialogWidthStorageKey(siteId, agentId), String(w));
    }
    catch {
        // ignore
    }
}
function readIceChatConfiguration(props) {
    const fromNested = props.configuration != null && typeof props.configuration === 'object'
        ? props.configuration
        : null;
    const candidates = [fromNested, props].filter(Boolean);
    for (const o of candidates) {
        const v = o.iceChatOnly;
        if (v === true || String(v).toLowerCase() === 'true')
            return o;
    }
    return null;
}
function AiAssistantHelper(props) {
    const dispatch = useDispatch();
    const { configuration, agents: agentsProp } = props;
    const ui = props.ui ?? props['@_ui'] ?? undefined;
    const iceChatCfg = useMemo(() => readIceChatConfiguration(props), [configuration, props]);
    const activeSiteId = useActiveSiteId();
    const siteId = activeSiteId ?? 'default';
    const [agentsFromSiteUi, setAgentsFromSiteUi] = useState(null);
    useEffect(() => {
        if (!activeSiteId || iceChatCfg) {
            setAgentsFromSiteUi(null);
            return;
        }
        let cancelled = false;
        fetchAiAssistantAgentsFromSiteUi(activeSiteId)
            .then((list) => {
            if (!cancelled)
                setAgentsFromSiteUi(list.length ? list : null);
        })
            .catch(() => {
            if (!cancelled)
                setAgentsFromSiteUi(null);
        });
        return () => {
            cancelled = true;
        };
    }, [activeSiteId, iceChatCfg]);
    const agents = useMemo(() => {
        let base;
        if (Array.isArray(agentsProp) && agentsProp.length > 0)
            base = agentsProp;
        else {
            const agentsFromConfig = getAgentsFromConfiguration(props);
            if (agentsFromConfig.length > 0)
                base = agentsFromConfig;
            else if (configuration != null) {
                const fromConfig = getAgentsFromConfiguration(configuration);
                base = fromConfig.length > 0 ? fromConfig : DEFAULT_AGENTS;
            }
            else
                base = DEFAULT_AGENTS;
        }
        let merged = agentsFromSiteUi?.length ? mergeAgentsWithSiteUiXmlOverlay(base, agentsFromSiteUi) : base;
        merged = dedupeAgentsByStableKey(merged);
        merged = dropPlaceholderAgentsWhenRicherMatchesExist(merged);
        return merged;
    }, [configuration, agentsProp, props, agentsFromSiteUi]);
    const [menuAnchor, setMenuAnchor] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDialogs, setOpenDialogs] = useState([]);
    const openAgentInExperienceBuilderPanel = (agent) => {
        setMenuOpen(false);
        setMenuAnchor(null);
        const effectiveId = agent?.id?.trim() || '';
        const resolved = { ...agent, id: effectiveId };
        dispatch(batchActions([
            setPreviewEditMode({ editMode: true }),
            pushIcePanelPage(createToolsPanelPage(resolved.label, [
                createWidgetDescriptor({
                    id: helperWidgetId,
                    configuration: {
                        iceChatOnly: true,
                        agentId: effectiveId,
                        llm: resolved.llm,
                        llmModel: resolved.llmModel,
                        imageModel: resolved.imageModel,
                        openAiApiKey: resolved.openAiApiKey,
                        prompts: resolved.prompts,
                        ...(resolved.enableTools !== undefined ? { enableTools: resolved.enableTools } : {})
                    }
                })
            ], 'icePanel'))
        ]));
    };
    const openAgent = (agent) => {
        if (agent.openAsPopup === true) {
            setMenuOpen(false);
            setMenuAnchor(null);
            const effectiveId = agent?.id?.trim() || '';
            const width = getStoredDialogWidth(siteId, effectiveId) ?? DEFAULT_DIALOG_WIDTH;
            setOpenDialogs((prev) => [
                ...prev,
                {
                    id: `aiassistant-dialog-${Date.now()}-${Math.random().toString(36).slice(2)}`,
                    agent: { ...agent, id: effectiveId },
                    minimized: false,
                    width
                }
            ]);
        }
        else {
            openAgentInExperienceBuilderPanel(agent);
        }
    };
    const [resizeState, setResizeState] = useState(null);
    const resizeStateRef = useRef(resizeState);
    resizeStateRef.current = resizeState;
    const lastWidthRef = useRef(DEFAULT_DIALOG_WIDTH);
    useEffect(() => {
        if (!resizeState)
            return;
        const onMove = (e) => {
            const s = resizeStateRef.current;
            if (!s)
                return;
            const delta = s.startX - e.clientX;
            const newWidth = Math.round(Math.max(MIN_DIALOG_WIDTH, Math.min(MAX_DIALOG_WIDTH, s.startWidth + delta)));
            lastWidthRef.current = newWidth;
            setOpenDialogs((prev) => prev.map((d) => (d.id !== s.dialogId ? d : { ...d, width: newWidth })));
        };
        const onUp = () => {
            const s = resizeStateRef.current;
            if (s)
                setStoredDialogWidth(siteId, s.agentId, lastWidthRef.current);
            setResizeState(null);
            document.body.style.removeProperty('user-select');
            document.body.style.removeProperty('cursor');
        };
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'col-resize';
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            document.body.style.removeProperty('user-select');
            document.body.style.removeProperty('cursor');
        };
    }, [resizeState?.dialogId, siteId]);
    const closeDialog = (id) => {
        setOpenDialogs((prev) => prev.filter((d) => d.id !== id));
    };
    const setDialogMinimized = (id, minimized) => {
        setOpenDialogs((prev) => prev.map((d) => (d.id === id ? { ...d, minimized } : d)));
    };
    const handleToolbarClick = (e) => {
        const list = agents.length > 0 ? agents : DEFAULT_AGENTS;
        if (list.length <= 1) {
            if (list.length === 1)
                openAgent(list[0]);
        }
        else {
            setMenuAnchor(e.currentTarget);
            setMenuOpen(true);
        }
    };
    const handleMenuClose = () => {
        setMenuOpen(false);
        setMenuAnchor(null);
    };
    const agentKey = (agent) => `${agent.id}|${agent.label}`;
    const toolbarList = agents.length > 0 ? agents : DEFAULT_AGENTS;
    const primaryAgent = toolbarList[0];
    if (iceChatCfg) {
        const agentId = String(iceChatCfg.agentId ?? '').trim();
        const llm = iceChatCfg.llm;
        const iceRaw = iceChatCfg;
        const llmModel = iceRaw.llmModel?.trim();
        const imageModel = iceChatCfg.imageModel;
        const openAiApiKey = iceChatCfg.openAiApiKey;
        const configPrompts = Array.isArray(iceChatCfg.prompts)
            ? iceChatCfg.prompts
            : undefined;
        const iceEnableTools = readOptionalBooleanFromConfiguration(iceChatCfg, 'enableTools', 'enable_tools');
        const iceExpertSkills = Array.isArray(iceChatCfg.expertSkills)
            ? iceChatCfg.expertSkills
            : undefined;
        const iceTranslateBatch = extractPositiveInt(iceRaw, 1, 64, 'translateBatchConcurrency', 'translate_batch_concurrency');
        return (jsx(AiAssistantIceChatShell, { children: jsx(AiAssistantChat, { agentId: agentId, llm: llm, llmModel: llmModel || undefined, imageModel: imageModel, openAiApiKey: openAiApiKey, enableTools: iceEnableTools, expertSkills: iceExpertSkills, configPrompts: configPrompts, embedTarget: "icePanel", ...(iceTranslateBatch != null ? { translateBatchConcurrency: iceTranslateBatch } : {}) }) }));
    }
    return (jsxs(Fragment, { children: [Boolean(ui) &&
                (ui === 'IconButton' ? (jsx(Tooltip, { title: primaryAgent?.label ?? 'Studio AI Assistant', children: jsx(IconButton, { onClick: handleToolbarClick, "aria-haspopup": toolbarList.length > 1 ? 'menu' : undefined, "aria-expanded": toolbarList.length > 1 ? menuOpen : undefined, children: getAgentIcon(primaryAgent?.icon) }) })) : (jsx(ToolsPanelListItemButton, { icon: { id: 'craftercms.components.aiassistant.AiAssistantLogo' }, title: primaryAgent?.label ?? 'Studio AI Assistant', onClick: handleToolbarClick }))), menuAnchor && (jsx(Menu, { open: true, anchorEl: menuAnchor, onClose: handleMenuClose, anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, transformOrigin: { vertical: 'top', horizontal: 'right' }, disableAutoFocusItem: true, TransitionProps: { timeout: 0 }, children: toolbarList.map((agent) => (jsxs(MenuItem, { onClick: () => {
                        openAgent(agent);
                    }, children: [jsx(ListItemIcon, { children: getAgentIcon(agent.icon) }), jsx(ListItemText, { primary: agent.label })] }, agentKey(agent)))) })), typeof document !== 'undefined' &&
                createPortal(jsxs(Fragment, { children: [openDialogs
                            .filter((d) => !d.minimized)
                            .map((d) => (jsxs(Dialog, { open: true, onClose: () => closeDialog(d.id), maxWidth: false, PaperProps: {
                                sx: {
                                    position: 'fixed',
                                    right: 16,
                                    bottom: 16,
                                    top: 'auto',
                                    left: 'auto',
                                    margin: 0,
                                    width: d.width,
                                    minWidth: MIN_DIALOG_WIDTH,
                                    maxWidth: MAX_DIALOG_WIDTH,
                                    maxHeight: 'calc(100vh - 32px)',
                                    minHeight: 400,
                                    zIndex: 1300,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden'
                                }
                            }, children: [jsxs(Box, { sx: { position: 'relative' }, children: [jsx(Box, { "aria-label": "Resize dialog", role: "separator", onMouseDown: (e) => {
                                                e.preventDefault();
                                                lastWidthRef.current = d.width;
                                                setResizeState({
                                                    dialogId: d.id,
                                                    agentId: d.agent.id,
                                                    startX: e.clientX,
                                                    startWidth: d.width
                                                });
                                            }, sx: {
                                                position: 'absolute',
                                                left: 0,
                                                top: 0,
                                                bottom: 0,
                                                width: 6,
                                                cursor: 'col-resize',
                                                zIndex: 1,
                                                '&:hover': { bgcolor: 'action.hover' }
                                            } }), jsxs(Box, { sx: { display: 'flex', alignItems: 'center', px: 2, py: 1, borderBottom: 1, borderColor: 'divider' }, children: [jsx(Typography, { variant: "h6", component: "span", sx: { flex: 1 }, children: d.agent.label }), jsx(Tooltip, { title: "Minimize", children: jsx(IconButton, { "aria-label": "Minimize", onClick: () => setDialogMinimized(d.id, true), size: "small", children: jsx(RemoveRounded, {}) }) }), jsx(Tooltip, { title: "Close", children: jsx(IconButton, { "aria-label": "Close", onClick: () => closeDialog(d.id), size: "small", children: jsx(CloseRounded, {}) }) })] })] }), jsx(DialogContent, { sx: {
                                        p: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flex: '1 1 auto',
                                        minHeight: 0,
                                        overflow: 'hidden'
                                    }, children: jsx(Box, { sx: { flex: 1, minHeight: 0, minWidth: 0, display: 'flex', flexDirection: 'column' }, children: jsx(AiAssistantChat, { agentId: d.agent.id, llm: d.agent.llm, llmModel: d.agent.llmModel, imageModel: d.agent.imageModel, openAiApiKey: d.agent.openAiApiKey, enableTools: d.agent.enableTools, expertSkills: d.agent.expertSkills, configPrompts: d.agent.prompts, ...(d.agent.translateBatchConcurrency != null
                                                ? { translateBatchConcurrency: d.agent.translateBatchConcurrency }
                                                : {}) }) }) })] }, d.id))), openDialogs
                            .filter((d) => d.minimized)
                            .map((d, i) => (jsxs(Paper, { elevation: 4, sx: {
                                position: 'fixed',
                                bottom: 16 + i * 56,
                                right: 16,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                px: 2,
                                py: 1.5,
                                zIndex: 1300,
                                border: '1px solid',
                                borderColor: 'divider'
                            }, children: [jsx(Typography, { variant: "body1", children: d.agent.label }), jsx(Tooltip, { title: "Restore", children: jsx(IconButton, { "aria-label": "Restore", onClick: () => setDialogMinimized(d.id, false), size: "small", children: jsx(OpenInBrowserRounded, {}) }) }), jsx(Tooltip, { title: "Close", children: jsx(IconButton, { "aria-label": "Close", onClick: () => closeDialog(d.id), size: "small", children: jsx(CloseRounded, {}) }) })] }, d.id)))] }), document.body)] }));
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function usePossibleTranslation(
  titleOrDescriptor,
  // TODO: Fix FormatXMLElementFn generics
  values
) {
  const { formatMessage } = useIntl();
  return getPossibleTranslation(titleOrDescriptor, formatMessage, values);
}

var ContentCopy = {};

var interopRequireDefault = {exports: {}};

(function (module) {
	function _interopRequireDefault(e) {
	  return e && e.__esModule ? e : {
	    "default": e
	  };
	}
	module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports; 
} (interopRequireDefault));

var interopRequireDefaultExports = interopRequireDefault.exports;

var createSvgIcon = {};

var hasRequiredCreateSvgIcon;

function requireCreateSvgIcon () {
	if (hasRequiredCreateSvgIcon) return createSvgIcon;
	hasRequiredCreateSvgIcon = 1;
	(function (exports) {
		'use client';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		Object.defineProperty(exports, "default", {
		  enumerable: true,
		  get: function () {
		    return _utils.createSvgIcon;
		  }
		});
		var _utils = require$$0; 
	} (createSvgIcon));
	return createSvgIcon;
}

var _interopRequireDefault$2 = interopRequireDefaultExports;
Object.defineProperty(ContentCopy, "__esModule", {
  value: true
});
var default_1$2 = ContentCopy.default = void 0;
var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
var _jsxRuntime$2 = require$$2;
default_1$2 = ContentCopy.default = (0, _createSvgIcon$2.default)( /*#__PURE__*/(0, _jsxRuntime$2.jsx)("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
}), 'ContentCopy');

var Close = {};

var _interopRequireDefault$1 = interopRequireDefaultExports;
Object.defineProperty(Close, "__esModule", {
  value: true
});
var default_1$1 = Close.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = require$$2;
default_1$1 = Close.default = (0, _createSvgIcon$1.default)( /*#__PURE__*/(0, _jsxRuntime$1.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

var ErrorOutline = {};

var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(ErrorOutline, "__esModule", {
  value: true
});
var default_1 = ErrorOutline.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = require$$2;
default_1 = ErrorOutline.default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), 'ErrorOutline');

/**
 * Autonomous Agents — definitions from widget `ui.xml` / JSON configuration.
 * XML shape: `<autonomousAgents><agent><name/><schedule/><startAutomatically/>…</agent></autonomousAgents>`
 */
/** Mirrors `AutonomousAgentIdBuilder` (Groovy) for project-scoped ids used in sync/status. */
function normalizeAgentNameForId(raw) {
    let s = (raw ?? '').trim().toLowerCase();
    s = s.replace(/\s+/g, '-');
    s = s.replace(/[^a-z0-9-]+/g, '-');
    s = s.replace(/-+/g, '-');
    s = s.replace(/^-+|-+$/g, '');
    return s || 'agent';
}
function sanitizeScopeIdForAgentId(scopeId) {
    return scopeId.replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/-+/g, '-');
}
/**
 * Same shape as {@link AutonomousAgentIdBuilder.buildAgentId} in the autonomous Groovy package.
 */
function buildAutonomousAgentId(projectId, scope, scopeId, agentName) {
    const p = (projectId || 'default').trim();
    let sc = scope;
    if (sc !== 'user' && sc !== 'role' && sc !== 'project')
        sc = 'project';
    const sid = sanitizeScopeIdForAgentId((scopeId || p).trim());
    const n = normalizeAgentNameForId(agentName);
    return `${p}-${sc}-${sid}-${n}`;
}
/**
 * Ensures every configured agent appears in the table even when `/status` returns an empty `agents`
 * list (registry not yet populated). Matches server rows by `agentId` or `definition.name`, then
 * synthesizes rows with the same id {@link buildAutonomousAgentId} uses on sync.
 */
function mergeAutonomousAgentsForTable(siteId, defs, statusAgents, viewer) {
    const list = Array.isArray(statusAgents) ? statusAgents : [];
    const taken = new Set();
    const out = [];
    const vUsername = (viewer?.username ?? '').trim() || 'anonymous';
    const vRole = (viewer?.roleScopeId ?? viewer?.username ?? siteId).trim() || siteId;
    const syntheticRow = (d, id) => ({
        agentId: id,
        definition: {
            name: d.name,
            schedule: d.schedule,
            scope: d.scope,
            prompt: d.prompt,
            llm: d.llm,
            llmModel: d.llmModel,
            ...(d.imageModel != null ? { imageModel: d.imageModel } : {}),
            ...(d.manageOtherAgentsHumanTasks ? { manageOtherAgentsHumanTasks: true } : {}),
            ...(d.startAutomatically === false ? { startAutomatically: false } : {}),
            ...(d.stopOnFailure === false ? { stopOnFailure: false } : {}),
            ...(Array.isArray(d.expertSkills) && d.expertSkills.length > 0 ? { expertSkills: d.expertSkills } : {}),
            siteId
        },
        state: { status: 'pending' },
        syntheticFromConfig: true
    });
    for (const d of defs) {
        const name = d.name;
        const byName = list.find((a) => !taken.has(a.agentId) && String(a.definition?.name ?? '') === name);
        if (byName) {
            taken.add(byName.agentId);
            out.push(byName);
            continue;
        }
        const nn = normalizeAgentNameForId(name);
        const byNorm = list.find((a) => {
            if (taken.has(a.agentId))
                return false;
            const def = a.definition;
            const raw = def && typeof def === 'object'
                ? String(def.name ?? def.label ?? '')
                : '';
            return normalizeAgentNameForId(raw) === nn;
        });
        if (byNorm) {
            taken.add(byNorm.agentId);
            out.push(byNorm);
            continue;
        }
        let id;
        if (d.scope === 'project') {
            id = buildAutonomousAgentId(siteId, 'project', siteId, name);
        }
        else if (d.scope === 'user') {
            id = buildAutonomousAgentId(siteId, 'user', vUsername, name);
        }
        else {
            id = buildAutonomousAgentId(siteId, 'role', vRole, name);
        }
        const hit = list.find((a) => a.agentId === id && !taken.has(a.agentId));
        if (hit) {
            taken.add(hit.agentId);
            out.push(hit);
        }
        else {
            out.push(syntheticRow(d, id));
        }
    }
    for (const a of list) {
        if (!taken.has(a.agentId)) {
            out.push(a);
        }
    }
    return out;
}
function normalizeManageOtherAgentsHumanTasks(raw) {
    if (raw === true || raw === 1)
        return true;
    if (raw === false || raw === 0)
        return false;
    if (typeof raw === 'string') {
        const s = raw.trim().toLowerCase();
        if (s === 'true' || s === '1' || s === 'yes')
            return true;
        if (s === 'false' || s === '0' || s === 'no' || s === '')
            return false;
    }
    return undefined;
}
function normalizeStartAutomatically(raw) {
    if (raw === true || raw === 1)
        return true;
    if (raw === false || raw === 0)
        return false;
    if (typeof raw === 'string') {
        const s = raw.trim().toLowerCase();
        if (s === 'true' || s === '1' || s === 'yes')
            return true;
        if (s === 'false' || s === '0' || s === 'no')
            return false;
    }
    return undefined;
}
function normalizeStopOnFailure(raw) {
    if (raw === true || raw === 1)
        return true;
    if (raw === false || raw === 0)
        return false;
    if (typeof raw === 'string') {
        const s = raw.trim().toLowerCase();
        if (s === 'true' || s === '1' || s === 'yes')
            return true;
        if (s === 'false' || s === '0' || s === 'no')
            return false;
    }
    return undefined;
}
function normalizeOne(raw) {
    if (raw == null || typeof raw !== 'object')
        return null;
    const o = raw;
    const name = String(o.name ?? o.label ?? '').trim();
    if (!name)
        return null;
    const scopeRaw = String(o.scope ?? 'project').trim().toLowerCase();
    const scope = scopeRaw === 'user' || scopeRaw === 'role' || scopeRaw === 'project' ? scopeRaw : 'project';
    const manageCross = normalizeManageOtherAgentsHumanTasks(o.manageOtherAgentsHumanTasks);
    const startAuto = normalizeStartAutomatically(o.startAutomatically ?? o.start_automatically ?? o.automaticallyStart ?? o.automatically_start);
    const stopFail = normalizeStopOnFailure(o.stopOnFailure ?? o.stop_on_failure);
    const expertSkills = normalizeExpertSkillsRaw(o.expertSkills) ?? normalizeExpertSkillsRaw(o.expertSkill);
    return {
        name,
        schedule: String(o.schedule ?? '0 0 * * * ?').trim(),
        prompt: String(o.prompt ?? '').trim(),
        scope,
        llm: String(o.llm ?? 'openAI').trim(),
        llmModel: String(o.llmModel ?? 'gpt-4o-mini').trim(),
        imageModel: o.imageModel != null ? String(o.imageModel).trim() : undefined,
        openAiApiKey: o.openAiApiKey != null ? String(o.openAiApiKey).trim() : undefined,
        ...(manageCross !== undefined ? { manageOtherAgentsHumanTasks: manageCross } : {}),
        ...(startAuto === false ? { startAutomatically: false } : {}),
        ...(stopFail === false ? { stopOnFailure: false } : {}),
        ...(expertSkills && expertSkills.length > 0 ? { expertSkills } : {})
    };
}
/**
 * Same nesting patterns as `getAgentsFromConfiguration` in `agentConfig.ts`: Studio may pass
 * `autonomousAgents` at the top level, under `configuration`, or under `configuration.configuration`.
 */
function readAgentsRaw(configuration) {
    const config = configuration != null && typeof configuration === 'object' ? configuration : null;
    if (!config)
        return null;
    let raw = config.autonomousAgents;
    if (raw == null && config.configuration != null && typeof config.configuration === 'object') {
        const inner = config.configuration;
        raw =
            inner.autonomousAgents ??
                (inner.configuration != null && typeof inner.configuration === 'object'
                    ? inner.configuration.autonomousAgents
                    : undefined);
    }
    if (raw == null && config.configuration != null && typeof config.configuration === 'object') {
        const inner = config.configuration;
        if (inner.configuration != null && typeof inner.configuration === 'object') {
            const deep = inner.configuration.autonomousAgents;
            if (deep != null)
                raw = deep;
        }
    }
    return raw;
}
/**
 * Studio deserializes a **single** `<agent>` as a flat object `{ name, schedule, ... }` under `agent`.
 * `Object.values(that)` would yield primitive strings — use this instead.
 */
function agentsFromRawAgentField(listOrSingle) {
    if (listOrSingle == null)
        return [];
    if (Array.isArray(listOrSingle))
        return listOrSingle;
    if (typeof listOrSingle !== 'object')
        return [];
    const o = listOrSingle;
    const keys = Object.keys(o);
    const numericKeyed = keys.length > 0 && keys.every((k) => /^\d+$/.test(k));
    if (numericKeyed) {
        return [...keys].sort((a, b) => Number(a) - Number(b)).map((k) => o[k]);
    }
    const looksLikeSingleAgentRow = typeof o.name === 'string' ||
        typeof o.label === 'string' ||
        typeof o.schedule === 'string' ||
        typeof o.prompt === 'string' ||
        typeof o.llm === 'string';
    if (looksLikeSingleAgentRow) {
        return [o];
    }
    return Object.values(o);
}
/**
 * Pass **merged widget props**: `{ ...props.configuration, ...props }` so `autonomousAgents` is found whether
 * Studio nested it or spread `<configuration>` onto the component root (see `Widget.js`).
 */
function getAutonomousAgentsFromConfiguration(configurationOrMergedProps) {
    const raw = readAgentsRaw(configurationOrMergedProps);
    if (raw == null)
        return [];
    if (Array.isArray(raw)) {
        return raw.map(normalizeOne).filter(Boolean);
    }
    if (typeof raw === 'object') {
        const obj = raw;
        const listOrSingle = obj.agent;
        if (listOrSingle == null)
            return [];
        const arr = agentsFromRawAgentField(listOrSingle);
        return arr.map(normalizeOne).filter(Boolean);
    }
    return [];
}
/** Merge nested `configuration` with root props (Studio spreads config onto the component after registration). */
function mergeAutonomousWidgetProps(props) {
    const nested = props.configuration != null && typeof props.configuration === 'object' && !Array.isArray(props.configuration)
        ? props.configuration
        : {};
    return { ...nested, ...props };
}

const BASE = '/studio/api/2/plugin/script/plugins/org/craftercms/aiassistant/studio/aiassistant/autonomous/assistants';
function withSite(url, siteId) {
    const sep = url.includes('?') ? '&' : '?';
    return `${url}${sep}siteId=${encodeURIComponent(siteId)}`;
}
/** Studio plugin controller wraps the Groovy script return map under `result` (see `crafterqImportApi.ts`). */
function unwrapPluginScriptBody(body) {
    if (!body || typeof body !== 'object')
        return body;
    const o = body;
    const inner = o.result;
    if (inner && typeof inner === 'object' && !Array.isArray(inner))
        return inner;
    return body;
}
async function syncAutonomousAssistants(siteId, agents) {
    const res = await fetch(withSite(`${BASE}/sync`, siteId), {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...buildStudioAuthHeaders()
        },
        body: JSON.stringify({ siteId, agents })
    });
    const raw = await res.json().catch(() => ({}));
    const data = unwrapPluginScriptBody(raw);
    if (!res.ok) {
        return { ok: false, message: data.message ?? raw.message ?? res.statusText };
    }
    return data;
}
async function getAutonomousAssistantsStatus(siteId) {
    const res = await fetch(withSite(`${BASE}/status`, siteId), {
        method: 'GET',
        credentials: 'include',
        headers: { ...buildStudioAuthHeaders() }
    });
    const raw = await res.json();
    return unwrapPluginScriptBody(raw);
}
async function postAutonomousAssistantsControl(siteId, action, agentId, taskId, extras) {
    const payload = { siteId, action, agentId: agentId ?? '' };
    if (taskId?.trim()) {
        payload.taskId = taskId.trim();
    }
    if (extras) {
        for (const [k, v] of Object.entries(extras)) {
            if (v !== undefined) {
                payload[k] = v;
            }
        }
    }
    const res = await fetch(withSite(`${BASE}/control`, siteId), {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...buildStudioAuthHeaders()
        },
        body: JSON.stringify(payload)
    });
    const raw = await res.json().catch(() => ({}));
    const data = unwrapPluginScriptBody(raw);
    if (!res.ok) {
        return { ok: false, message: data.message ?? raw.message ?? res.statusText };
    }
    return data;
}

const TASK_ASSIGN_FILTER_ALL = 'all';
const TASK_ASSIGN_FILTER_UNASSIGNED = 'unassigned';
const TASK_ASSIGN_FILTER_ME = 'me';
const TASK_USER_FILTER_PREFIX = 'u:';
function formatStudioUserLabel(u) {
    const n = [u.firstName, u.lastName].filter(Boolean).join(' ').trim();
    return n ? `${n} (${u.username})` : u.username;
}
/** Studio-style initials avatar (matches dashlet user chips; optional photo URL when API provides it). */
function HumanTaskAssigneeAvatar(props) {
    const { username, firstName = '', lastName = '', avatarUrl } = props;
    const trimmedUrl = avatarUrl?.trim();
    const person = { username, firstName, lastName, avatar: '' };
    const initials = getInitials(person);
    const bg = toColor(username);
    return (jsx(Avatar, { src: trimmedUrl || undefined, alt: "", sx: {
            width: 32,
            height: 32,
            fontSize: '0.8125rem',
            flexShrink: 0,
            ...(trimmedUrl
                ? {}
                : {
                    bgcolor: bg,
                    color: (theme) => theme.palette.getContrastText(bg)
                })
        }, children: trimmedUrl ? undefined : initials }));
}
function lastErrorDetailStack(props) {
    const { le } = props;
    if (!le?.message)
        return null;
    return (jsxs(Stack, { spacing: 0.75, sx: { minWidth: 0, alignItems: 'stretch' }, children: [jsx(Typography, { variant: "body2", sx: { wordBreak: 'break-word' }, children: le.message }), le.at ? (jsx(Typography, { variant: "caption", color: "text.secondary", children: le.at })) : null, le.exceptionClass ? (jsx(Typography, { variant: "caption", color: "text.secondary", component: "div", children: le.exceptionClass })) : null, le.stackTrace ? (jsx(Box, { sx: {
                    maxHeight: 200,
                    overflow: 'auto',
                    mt: 0.5,
                    p: 1,
                    bgcolor: 'action.hover',
                    borderRadius: 1,
                    border: 1,
                    borderColor: 'divider'
                }, children: jsx(Typography, { component: "pre", variant: "caption", sx: { whiteSpace: 'pre-wrap', m: 0, fontFamily: 'ui-monospace, monospace', fontSize: '0.7rem' }, children: le.stackTrace }) })) : null] }));
}
function humanTaskOwnerAgentId(task, fallbackAgentId) {
    const o = String(task.ownerAgentId ?? '').trim();
    return o || fallbackAgentId;
}
function humanTaskOwnerLabel(task, fallbackAgentId) {
    const name = String(task.ownerName ?? '').trim();
    if (name)
        return name;
    const id = humanTaskOwnerAgentId(task, fallbackAgentId);
    const i = id.lastIndexOf('-');
    return i >= 0 ? id.slice(i + 1) : id;
}
function countOpenTasksForAgent(state, agentId) {
    const raw = state?.humanTasks;
    if (!Array.isArray(raw))
        return 0;
    let n = 0;
    for (const t of raw) {
        if (!t || typeof t !== 'object')
            continue;
        const row = t;
        const owner = String(row.ownerAgentId ?? '').trim();
        if (owner && owner !== agentId)
            continue;
        const st = String(row.status ?? 'open').toLowerCase();
        if (st !== 'dismissed' && st !== 'done')
            n++;
    }
    return n;
}
function humanTaskRowActionsDisabled(baseDisabled, task, panelAgentId, manageOtherAgentsHumanTasks) {
    if (baseDisabled)
        return true;
    const owner = String(task.ownerAgentId ?? '').trim();
    if (!owner || owner === panelAgentId)
        return false;
    return !manageOtherAgentsHumanTasks;
}
/** Last run time + one-line outcome for the agents table (uses server state fields). */
function formatAgentLastActivity(state, synthetic) {
    if (synthetic) {
        return { whenLine: '—', statusLine: 'Not linked' };
    }
    const lifecycle = String(state?.status ?? '').trim().toLowerCase();
    let whenMs = null;
    const isoRaw = state?.lastRunIso;
    if (typeof isoRaw === 'string' && isoRaw.trim()) {
        const t = Date.parse(isoRaw.trim());
        if (!Number.isNaN(t))
            whenMs = t;
    }
    const lr = state?.lastRunMillis;
    if (whenMs == null && typeof lr === 'number' && Number.isFinite(lr) && lr > 0) {
        whenMs = lr;
    }
    const whenLine = whenMs != null
        ? new Date(whenMs).toLocaleString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        })
        : '—';
    let statusLine = 'No runs yet';
    if (lifecycle === 'error') {
        statusLine = 'Last run failed';
    }
    else if (lifecycle === 'waiting') {
        const le = state?.lastError;
        if (le?.message) {
            statusLine = 'Retry scheduled after failure';
        }
        else if (whenMs != null) {
            const hist = state?.executionHistory;
            if (Array.isArray(hist) && hist.length > 0) {
                const last = hist[hist.length - 1];
                const next = last?.next;
                const wantsFollowUp = next === true || String(next).toLowerCase() === 'true';
                statusLine = wantsFollowUp ? 'Follow-up due' : 'Completed';
            }
            else {
                statusLine = 'Completed';
            }
        }
    }
    else if (lifecycle === 'running') {
        statusLine = 'Run in progress';
    }
    else if (whenMs != null) {
        const hist = state?.executionHistory;
        if (Array.isArray(hist) && hist.length > 0) {
            const last = hist[hist.length - 1];
            const next = last?.next;
            const wantsFollowUp = next === true || String(next).toLowerCase() === 'true';
            statusLine = wantsFollowUp ? 'Follow-up due' : 'Completed';
        }
        else {
            statusLine = 'Completed';
        }
    }
    return { whenLine, statusLine };
}
/** Studio / Groovy may serialize booleans as strings; avoid `Boolean("false") === true`. */
function parseJsonBoolean(v) {
    if (v === true || v === 1)
        return true;
    if (v === false || v === 0)
        return false;
    if (typeof v === 'string') {
        const s = v.trim().toLowerCase();
        if (s === 'true' || s === '1' || s === 'yes')
            return true;
        if (s === 'false' || s === '0' || s === 'no' || s === '')
            return false;
    }
    return Boolean(v);
}
/** Per-agent `startAutomatically` from ui.xml / registry; defaults to true when omitted. */
function definitionStartAutomatically(def) {
    if (def == null || typeof def !== 'object')
        return true;
    const o = def;
    const v = o.startAutomatically ?? o.start_automatically ?? o.automaticallyStart ?? o.automatically_start;
    if (v === false || v === 0)
        return false;
    if (typeof v === 'string' && ['false', '0', 'no'].includes(v.trim().toLowerCase()))
        return false;
    return true;
}
/** Per-agent `stopOnFailure` from ui.xml / registry; defaults to true when omitted. */
function definitionStopOnFailure(def) {
    if (def == null || typeof def !== 'object')
        return true;
    const o = def;
    const v = o.stopOnFailure ?? o.stop_on_failure;
    if (v === false || v === 0)
        return false;
    if (typeof v === 'string' && ['false', '0', 'no'].includes(v.trim().toLowerCase()))
        return false;
    return true;
}
function scalarForAgentDetails(v) {
    if (v == null)
        return '—';
    const s = typeof v === 'string' ? v.trim() : String(v).trim();
    return s || '—';
}
function AgentConfigurationDetailsContent(props) {
    const { row } = props;
    const d = (row.definition ?? {});
    const promptText = typeof d.prompt === 'string' ? d.prompt : '';
    const apiRaw = d.openAiApiKey;
    const apiKeyInConfig = (typeof apiRaw === 'string' && apiRaw.trim().length > 0) ||
        (apiRaw != null && typeof apiRaw !== 'string' && String(apiRaw).trim().length > 0);
    const field = (label, value) => (jsxs(Box, { sx: { minWidth: 0 }, children: [jsx(Typography, { variant: "caption", color: "text.secondary", component: "div", sx: { mb: 0.25 }, children: label }), jsx(Typography, { variant: "body2", sx: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' }, children: value })] }, label));
    return (jsxs(Stack, { spacing: 2, sx: { minWidth: 0 }, children: [field('Agent id', row.agentId), field('Name', scalarForAgentDetails(d.name ?? d.label)), field('Schedule', scalarForAgentDetails(d.schedule)), field('Scope', scalarForAgentDetails(d.scope)), field('Scope id', scalarForAgentDetails(d.scopeId)), field('LLM', scalarForAgentDetails(d.llm)), field('LLM model', scalarForAgentDetails(d.llmModel)), field('Image model', scalarForAgentDetails(d.imageModel)), field('Start automatically', definitionStartAutomatically(d) ? 'Yes' : 'No'), field('Stop on failure', definitionStopOnFailure(d) ? 'Yes' : 'No'), field('Expert skills (markdown URLs)', Array.isArray(d.expertSkills) && d.expertSkills.length > 0 ? String(d.expertSkills.length) : '—'), field("Manage other agents' human tasks", parseJsonBoolean(d.manageOtherAgentsHumanTasks) ? 'Yes' : 'No'), field('Per-agent OpenAI API key in config', apiKeyInConfig ? 'Set (hidden)' : '—'), row.syntheticFromConfig ? (jsx(Alert, { severity: "info", sx: { py: 0.75 }, children: "This row reflects site UI configuration only. Use Sync so the server registers the agent and returns the canonical definition." })) : null, jsx(Divider, {}), jsxs(Box, { sx: { minWidth: 0 }, children: [jsx(Typography, { variant: "caption", color: "text.secondary", component: "div", sx: { mb: 0.5 }, children: "Prompt" }), jsx(Box, { sx: {
                            maxHeight: 280,
                            overflow: 'auto',
                            p: 1.5,
                            borderRadius: 1,
                            border: 1,
                            borderColor: 'divider',
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50')
                        }, children: jsx(Typography, { variant: "body2", component: "pre", sx: { whiteSpace: 'pre-wrap', fontFamily: 'inherit', m: 0, wordBreak: 'break-word' }, children: promptText.trim() ? promptText : '—' }) })] }), row.state?.lastError?.message ? (jsxs(Fragment, { children: [jsx(Divider, {}), jsx(Typography, { variant: "caption", color: "text.secondary", component: "div", sx: { mb: 0.5 }, children: "Last run failure (live state)" }), lastErrorDetailStack({ le: row.state?.lastError })] })) : null] }));
}
function AutonomousAgentStatusChip(props) {
    if (props.synthetic) {
        return jsx(Chip, { size: "small", label: "Not linked yet", color: "warning", variant: "outlined" });
    }
    const raw = (props.status ?? '—').trim();
    const s = raw.toLowerCase();
    let color = 'default';
    if (s === 'error')
        color = 'error';
    else if (s === 'running' || s === 'waiting')
        color = 'success';
    else if (s === 'pending')
        color = 'info';
    else if (s === 'stopped' || s === 'disabled')
        color = 'warning';
    return jsx(Chip, { size: "small", label: raw || '—', color: color, variant: "outlined" });
}
function widgetTitleText(merged) {
    const t = merged.title;
    if (t == null)
        return 'Autonomous Agents';
    if (typeof t === 'string')
        return t.trim() || 'Autonomous Agents';
    if (typeof t === 'object' && t !== null && '#text' in t) {
        const v = t['#text'];
        return String(v ?? '').trim() || 'Autonomous Agents';
    }
    return 'Autonomous Agents';
}
/** Same `icon` shape as {@link ToolsPanelListItemButton} / {@link SystemIcon}; YAML `<icon>` with SVG string is ignored here. */
function systemIconDescriptorFromWidgetMerged(merged) {
    const raw = merged.icon;
    if (raw && typeof raw === 'object' && raw !== null && 'id' in raw) {
        const id = raw.id;
        if (typeof id === 'string' && id.trim())
            return { id: id.trim() };
    }
    return { id: autonomousAgentsMarkWidgetId };
}
function AiAssistantAutonomousAssistants(props) {
    const activeSiteId = useActiveSiteId();
    const siteId = activeSiteId ?? '';
    const activeUser = useActiveUser();
    const merged = useMemo(() => mergeAutonomousWidgetProps(props), [props]);
    const defs = useMemo(() => getAutonomousAgentsFromConfiguration(merged), [merged]);
    const listTitle = useMemo(() => widgetTitleText(merged), [merged]);
    const listTitleTranslated = usePossibleTranslation(listTitle);
    const toolsListSystemIcon = useMemo(() => systemIconDescriptorFromWidgetMerged(merged), [merged]);
    const [dialogOpen, setDialogOpen] = useState(false);
    /** When true, the main dialog is hidden and a bottom strip is shown (like legacy Helper popups). */
    const [dialogMinimized, setDialogMinimized] = useState(false);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const [busy, setBusy] = useState(false);
    const [selected, setSelected] = useState('');
    const [copyHint, setCopyHint] = useState(null);
    const [nameFilter, setNameFilter] = useState('');
    const [taskAgentFilter, setTaskAgentFilter] = useState('');
    const [taskAssignFilter, setTaskAssignFilter] = useState(TASK_ASSIGN_FILTER_ALL);
    const [studioUserOptions, setStudioUserOptions] = useState([]);
    /** When set, a read-only configuration dialog is open for that agent id. */
    const [configDetailsAgentId, setConfigDetailsAgentId] = useState(null);
    useEffect(() => {
        if (!dialogOpen) {
            setConfigDetailsAgentId(null);
        }
    }, [dialogOpen]);
    const mergeViewer = useMemo(() => {
        const username = (activeUser?.username ?? '').trim() || 'anonymous';
        let roleScopeId = username;
        const roles = siteId ? activeUser?.rolesBySite?.[siteId] : undefined;
        if (Array.isArray(roles)) {
            for (const r of roles) {
                const raw = String(r ?? '').trim();
                if (!raw)
                    continue;
                roleScopeId = raw.replace(/^ROLE_/i, '');
                break;
            }
        }
        return { username, roleScopeId };
    }, [activeUser?.username, activeUser?.rolesBySite, siteId]);
    const mergedAgents = useMemo(() => mergeAutonomousAgentsForTable(siteId, defs, status?.agents, mergeViewer), [siteId, defs, status?.agents, mergeViewer]);
    const configDetailsRow = useMemo(() => configDetailsAgentId ? mergedAgents.find((a) => a.agentId === configDetailsAgentId) ?? null : null, [configDetailsAgentId, mergedAgents]);
    const filteredAgents = useMemo(() => {
        const q = nameFilter.trim().toLowerCase();
        if (!q)
            return mergedAgents;
        return mergedAgents.filter((a) => {
            const label = String(a.definition?.name || a.agentId).toLowerCase();
            return label.includes(q);
        });
    }, [mergedAgents, nameFilter]);
    const refresh = useCallback(async () => {
        if (!siteId)
            return;
        try {
            const s = (await getAutonomousAssistantsStatus(siteId));
            setStatus(s);
            setError(null);
        }
        catch (e) {
            setError(e instanceof Error ? e.message : String(e));
        }
    }, [siteId]);
    useEffect(() => {
        let cancelled = false;
        const run = async () => {
            if (!siteId || defs.length === 0) {
                setStatus(null);
                return;
            }
            setBusy(true);
            setError(null);
            try {
                const syn = await syncAutonomousAssistants(siteId, defs);
                if (syn.ok === false) {
                    setError(syn.message ?? 'Sync failed');
                }
                if (!cancelled) {
                    const st = (await getAutonomousAssistantsStatus(siteId));
                    setStatus(st);
                }
            }
            catch (e) {
                if (!cancelled)
                    setError(e instanceof Error ? e.message : String(e));
            }
            finally {
                if (!cancelled)
                    setBusy(false);
            }
        };
        void run();
        return () => {
            cancelled = true;
        };
    }, [siteId, defs]);
    useEffect(() => {
        if (!siteId)
            return;
        const ms = dialogOpen ? 3000 : 8000;
        const id = window.setInterval(() => {
            void refresh();
        }, ms);
        return () => window.clearInterval(id);
    }, [siteId, refresh, dialogOpen]);
    useEffect(() => {
        if (dialogOpen && siteId && defs.length > 0) {
            void refresh();
        }
    }, [dialogOpen, siteId, defs.length, refresh]);
    useEffect(() => {
        if (!dialogOpen)
            return;
        let cancelled = false;
        void firstValueFrom(fetchAll({ limit: 500, offset: 0 }))
            .then((paged) => {
            if (cancelled)
                return;
            setStudioUserOptions([...paged]);
        })
            .catch(() => {
            if (!cancelled)
                setStudioUserOptions([]);
        });
        return () => {
            cancelled = true;
        };
    }, [dialogOpen]);
    const openHumanTaskCount = status?.openHumanTaskCount ?? 0;
    const agentsInError = status?.agentsInError ?? [];
    const hasAgentError = Boolean(status?.hasAgentError || agentsInError.length);
    const supervisorHaltReason = String(status?.supervisor?.supervisorHaltReason ?? '').trim();
    /** Author-facing: JVM tick may stay scheduled while disabled; use the enabled flag only (see status.get + disableSupervisor). */
    const supervisorOn = parseJsonBoolean(status?.supervisor?.supervisorEnabled);
    const supervisorScheduleLive = parseJsonBoolean(status?.supervisor?.supervisorRunning);
    useEffect(() => {
        const body = document.body;
        if (!body)
            return;
        if (openHumanTaskCount > 0) {
            body.setAttribute('data-cq-autonomous-open-tasks', String(openHumanTaskCount));
        }
        else {
            body.removeAttribute('data-cq-autonomous-open-tasks');
        }
        if (hasAgentError || supervisorHaltReason) {
            body.setAttribute('data-cq-autonomous-has-error', '1');
        }
        else {
            body.removeAttribute('data-cq-autonomous-has-error');
        }
        return () => {
            body.removeAttribute('data-cq-autonomous-open-tasks');
            body.removeAttribute('data-cq-autonomous-has-error');
        };
    }, [openHumanTaskCount, hasAgentError, supervisorHaltReason]);
    useEffect(() => {
        if (!mergedAgents.length)
            return;
        setSelected((prev) => (prev && mergedAgents.some((m) => m.agentId === prev) ? prev : mergedAgents[0].agentId));
    }, [mergedAgents]);
    useEffect(() => {
        if (!filteredAgents.length)
            return;
        if (!filteredAgents.some((a) => a.agentId === selected)) {
            setSelected(filteredAgents[0].agentId);
        }
    }, [filteredAgents, selected]);
    const selectedRow = useMemo(() => mergedAgents.find((a) => a.agentId === selected), [mergedAgents, selected]);
    const pastRunReportsEmpty = useMemo(() => {
        const pr = selectedRow?.pastRunReports;
        return !Array.isArray(pr) || pr.length === 0;
    }, [selectedRow?.pastRunReports]);
    const doControl = async (action, agentId, taskId, extras) => {
        if (!siteId)
            return;
        setBusy(true);
        setError(null);
        try {
            const r = await postAutonomousAssistantsControl(siteId, action, agentId, taskId, extras);
            if (r.ok === false)
                setError(r.message ?? action);
            else if (action === 'enable_supervisor' && defs.length > 0) {
                const syn = await syncAutonomousAssistants(siteId, defs);
                if (syn.ok === false)
                    setError(syn.message ?? 'Re-sync after start failed');
            }
            await refresh();
        }
        catch (e) {
            setError(e instanceof Error ? e.message : String(e));
        }
        finally {
            setBusy(false);
        }
    };
    const manageByStorageId = useMemo(() => {
        const m = {};
        for (const a of mergedAgents) {
            if (a.syntheticFromConfig)
                continue;
            m[a.agentId] = parseJsonBoolean(a.definition?.manageOtherAgentsHumanTasks);
        }
        return m;
    }, [mergedAgents]);
    const allFlatHumanTasks = useMemo(() => {
        const out = [];
        for (const a of mergedAgents) {
            if (a.syntheticFromConfig)
                continue;
            const storageId = a.agentId;
            const label = String(a.definition?.name || storageId).trim();
            const raw = a.state?.humanTasks;
            if (!Array.isArray(raw))
                continue;
            for (const t of raw) {
                if (!t || typeof t !== 'object')
                    continue;
                out.push({ ...t, storageAgentId: storageId, storageAgentLabel: label });
            }
        }
        return out;
    }, [mergedAgents]);
    const assignFilterUsers = useMemo(() => {
        const m = new Map();
        for (const t of allFlatHumanTasks) {
            if ((t.status ?? 'open').toLowerCase() === 'dismissed')
                continue;
            const u = String(t.assignedUsername ?? '').trim();
            if (u)
                m.set(u, String(t.assignedName ?? '').trim() || u);
        }
        return Array.from(m.entries()).sort((a, b) => a[1].localeCompare(b[1]));
    }, [allFlatHumanTasks]);
    const visibleAggregatedTasks = useMemo(() => {
        let list = allFlatHumanTasks.filter((t) => (t.status ?? 'open').toLowerCase() !== 'dismissed');
        const af = taskAgentFilter.trim();
        if (af) {
            list = list.filter((t) => t.storageAgentId === af);
        }
        if (taskAssignFilter === TASK_ASSIGN_FILTER_UNASSIGNED) {
            list = list.filter((t) => !String(t.assignedUsername ?? '').trim());
        }
        else if (taskAssignFilter === TASK_ASSIGN_FILTER_ME) {
            const me = (activeUser?.username ?? '').trim().toLowerCase();
            list = list.filter((t) => String(t.assignedUsername ?? '').trim().toLowerCase() === me);
        }
        else if (taskAssignFilter.startsWith(TASK_USER_FILTER_PREFIX)) {
            const u = taskAssignFilter.slice(TASK_USER_FILTER_PREFIX.length);
            list = list.filter((t) => String(t.assignedUsername ?? '').trim() === u);
        }
        return list;
    }, [allFlatHumanTasks, taskAgentFilter, taskAssignFilter, activeUser?.username]);
    const copyTaskPrompt = async (prompt) => {
        const text = prompt?.trim() ?? '';
        if (!text)
            return;
        try {
            await navigator.clipboard.writeText(text);
            setCopyHint('Copied prompt');
            window.setTimeout(() => setCopyHint(null), 2000);
        }
        catch {
            setCopyHint('Copy failed');
            window.setTimeout(() => setCopyHint(null), 2000);
        }
    };
    const listSubtitle = !siteId
        ? 'Select a project'
        : defs.length === 0
            ? 'No agents configured'
            : hasAgentError || supervisorHaltReason
                ? 'Needs attention'
                : supervisorOn
                    ? 'On'
                    : '';
    const headerError = hasAgentError || Boolean(supervisorHaltReason);
    const agentControlsDisabled = busy || !selected || Boolean(selectedRow?.syntheticFromConfig);
    const panelBody = !siteId ? (jsx(Typography, { variant: "body2", children: "Select a site to manage Autonomous Agents." })) : defs.length === 0 ? (jsxs(Fragment, { children: [jsx(Typography, { variant: "subtitle1", gutterBottom: true, children: listTitle }), jsx(Typography, { variant: "body2", color: "text.secondary", children: "No agents configured. In Project Configuration \u2192 UI, under this widget\u2019s <configuration>, add <autonomousAgents><agent>\u2026</agent></autonomousAgents> (see plugin installation sample in craftercms-plugin.yaml)." })] })) : (jsxs(Box, { "data-cq-autonomous-widget": "1", "data-cq-autonomous-has-error": headerError ? '1' : '0', sx: {
            p: 0,
            pt: 0.5,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            flex: 1,
            minHeight: 0,
            width: '100%',
            ...(headerError
                ? {
                    borderLeft: (t) => `4px solid ${t.palette.error.main}`,
                    pl: 2,
                    ml: -0.5,
                    bgcolor: (t) => (t.palette.mode === 'dark' ? 'rgba(211,47,47,0.08)' : 'rgba(211,47,47,0.06)')
                }
                : {})
        }, children: [jsxs(Stack, { spacing: 2.5, sx: { width: '100%', flexShrink: 0 }, children: [error ? (jsx(Alert, { severity: "error", onClose: () => setError(null), sx: { borderRadius: 2 }, children: error })) : null, supervisorHaltReason ? (jsxs(Alert, { severity: "error", children: ["Automatic runs stopped after a failure: ", supervisorHaltReason] })) : null, agentsInError.length > 0 ? (jsxs(Alert, { severity: "error", icon: jsx(default_1, {}), children: [jsxs(Typography, { variant: "subtitle2", gutterBottom: true, children: ["Agents in error (", agentsInError.length, ")"] }), jsxs(Table, { size: "small", sx: { minWidth: 400 }, children: [jsx(TableHead, { children: jsxs(TableRow, { children: [jsx(TableCell, { children: "Agent" }), jsx(TableCell, { children: "When" }), jsx(TableCell, { children: "Message" }), jsx(TableCell, { align: "right", children: "Action" })] }) }), jsx(TableBody, { children: agentsInError.map((row) => {
                                            const le = row.lastError;
                                            const at = le?.at ?? '—';
                                            return (jsxs(TableRow, { children: [jsx(TableCell, { children: row.name || row.agentId }), jsx(TableCell, { sx: { whiteSpace: 'nowrap' }, children: at }), jsx(TableCell, { sx: { maxWidth: 480, verticalAlign: 'top' }, children: le?.message ? (lastErrorDetailStack({ le })) : (jsx(Typography, { variant: "body2", component: "span", children: JSON.stringify(row.lastError ?? {}) })) }), jsx(TableCell, { align: "right", children: jsx(Button, { size: "small", variant: "outlined", disabled: busy, onClick: () => doControl('clear_agent_error', row.agentId), children: "Clear error" }) })] }, row.agentId));
                                        }) })] })] })) : null] }), jsxs(Box, { sx: {
                    display: 'grid',
                    gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: 'minmax(0, 0.42fr) minmax(0, 0.58fr)' },
                    gap: 2.5,
                    width: '100%',
                    alignItems: 'stretch',
                    flex: 1,
                    minHeight: 0
                }, children: [jsxs(Stack, { spacing: 2.5, sx: {
                            minWidth: 0,
                            minHeight: 0,
                            height: { lg: '100%' },
                            display: 'flex',
                            flexDirection: 'column'
                        }, children: [jsxs(Paper, { id: "cq-autonomous-system-supervisor", variant: "outlined", sx: { p: 2.5, borderRadius: 2, bgcolor: 'background.paper' }, children: [jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2, alignItems: { sm: 'center' }, justifyContent: "space-between", children: [jsx(Typography, { variant: "overline", color: "text.secondary", sx: { letterSpacing: 0.06, fontWeight: 600 }, children: "System supervisor" }), jsxs(Stack, { direction: "row", alignItems: "center", flexWrap: "wrap", gap: 1.5, children: [jsx(Button, { size: "medium", variant: "contained", color: "primary", disabled: busy || supervisorOn, onClick: () => doControl('enable_supervisor'), sx: { textTransform: 'none', minWidth: 128, fontWeight: 600 }, children: "Start system" }), jsx(Button, { size: "medium", variant: "outlined", color: "inherit", disabled: busy || !supervisorOn, onClick: () => doControl('disable_supervisor'), sx: { textTransform: 'none', minWidth: 112, fontWeight: 600 }, children: "Stop system" }), jsx(Chip, { size: "small", label: supervisorOn ? 'Running' : 'Stopped', color: supervisorOn ? 'success' : 'error', variant: "filled", sx: supervisorOn
                                                            ? undefined
                                                            : {
                                                                bgcolor: 'error.main',
                                                                '& .MuiChip-label': { color: '#fff', fontWeight: 700 }
                                                            } })] })] }), supervisorOn && !supervisorScheduleLive ? (jsx(Typography, { variant: "caption", color: "text.secondary", component: "div", sx: { mt: 2, lineHeight: 1.5 }, children: "Schedule reconnecting\u2026" })) : null] }), jsxs(Paper, { variant: "outlined", sx: { p: 2.5, borderRadius: 2, bgcolor: 'background.paper', flex: { lg: 1 }, minHeight: 0, display: 'flex', flexDirection: 'column' }, children: [jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2, alignItems: { sm: 'center' }, justifyContent: "space-between", sx: { mb: 2 }, children: [jsx(Typography, { variant: "overline", color: "text.secondary", sx: { letterSpacing: 0.06, fontWeight: 600 }, children: "Agents" }), jsx(TextField, { size: "small", value: nameFilter, onChange: (e) => setNameFilter(e.target.value), placeholder: "Search by name\u2026", inputProps: { 'aria-label': 'Search agents by name' }, disabled: busy, sx: { width: { xs: '100%', sm: 280, lg: 'min(100%, 360px)' } } })] }), jsx(TableContainer, { sx: {
                                            flex: { lg: 1 },
                                            minHeight: { lg: 200 },
                                            maxHeight: { xs: 280, lg: 'min(56vh, 560px)' },
                                            borderRadius: 1,
                                            border: 1,
                                            borderColor: 'divider'
                                        }, children: jsxs(Table, { size: "small", stickyHeader: true, children: [jsx(TableHead, { children: jsxs(TableRow, { children: [jsx(TableCell, { sx: { fontWeight: 700, bgcolor: 'action.hover', py: 1.25 }, children: "Agent" }), jsx(TableCell, { sx: { fontWeight: 700, bgcolor: 'action.hover', py: 1.25 }, children: "Status" }), jsx(TableCell, { sx: { fontWeight: 700, bgcolor: 'action.hover', py: 1.25, minWidth: 148 }, children: "Last activity" }), jsx(TableCell, { align: "center", sx: { fontWeight: 700, bgcolor: 'action.hover', py: 1.25, width: 56 }, children: "Details" }), jsx(TableCell, { align: "right", sx: { fontWeight: 700, bgcolor: 'action.hover', py: 1.25 }, children: "Open tasks" })] }) }), jsx(TableBody, { children: filteredAgents.map((a) => {
                                                        const activity = formatAgentLastActivity(a.state, Boolean(a.syntheticFromConfig));
                                                        return (jsxs(TableRow, { hover: true, selected: a.agentId === selected, onClick: () => setSelected(a.agentId), sx: { cursor: 'pointer', '&.Mui-selected': { bgcolor: 'action.selected' } }, children: [jsx(TableCell, { sx: { fontWeight: a.agentId === selected ? 600 : 400 }, children: a.definition?.name || a.agentId }), jsx(TableCell, { children: jsx(AutonomousAgentStatusChip, { status: String(a.state?.status ?? '—'), synthetic: Boolean(a.syntheticFromConfig) }) }), jsxs(TableCell, { sx: { verticalAlign: 'top', py: 1.25 }, children: [jsx(Typography, { variant: "body2", component: "div", sx: { lineHeight: 1.35 }, children: activity.whenLine }), jsx(Typography, { variant: "caption", color: "text.secondary", component: "div", sx: { lineHeight: 1.4 }, children: activity.statusLine })] }), jsx(TableCell, { align: "center", sx: { py: 0.5, verticalAlign: 'middle' }, children: jsx(Tooltip, { title: "View configuration", children: jsx(IconButton, { size: "small", "aria-label": `Configuration details for ${String(a.definition?.name || a.agentId)}`, onClick: (e) => {
                                                                                e.stopPropagation();
                                                                                setConfigDetailsAgentId(a.agentId);
                                                                            }, children: jsx(InfoOutlined, { fontSize: "small" }) }) }) }), jsx(TableCell, { align: "right", children: countOpenTasksForAgent(a.state, a.agentId) })] }, a.agentId));
                                                    }) })] }) }), filteredAgents.length === 0 ? (jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 2, textAlign: 'center' }, children: "No agents match this search." })) : null] })] }), jsxs(Stack, { spacing: 2.5, sx: {
                            minWidth: 0,
                            minHeight: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            height: { lg: '100%' }
                        }, children: [jsxs(Paper, { variant: "outlined", sx: { p: 2.5, borderRadius: 2, bgcolor: 'background.paper', flexShrink: 0 }, children: [jsx(Typography, { variant: "overline", color: "text.secondary", sx: { letterSpacing: 0.06, fontWeight: 600 }, children: "Agent actions" }), jsxs(Stack, { direction: "row", alignItems: "center", flexWrap: "wrap", gap: 1, sx: { mt: 1 }, children: [jsx(Typography, { variant: "h6", component: "h2", sx: { fontSize: '1.15rem', fontWeight: 600, letterSpacing: -0.01 }, children: selectedRow?.definition?.name || selectedRow?.agentId || '—' }), selectedRow?.state?.nextStepRequired ? (jsx(Chip, { size: "small", label: "Next step due", color: "info", variant: "outlined" })) : null] }), !definitionStartAutomatically(selectedRow?.definition) ? (jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 1, maxWidth: 560 }, children: "This agent has startAutomatically set to false: after sync it stays stopped until you use Start below (the supervisor must also be on)." })) : null, selectedRow?.state?.status === 'error' ? (jsx(Alert, { severity: "error", sx: { mt: 2 }, action: jsx(Button, { color: "inherit", size: "small", disabled: agentControlsDisabled, onClick: () => doControl('clear_agent_error', selected), sx: { textTransform: 'none', fontWeight: 600 }, children: "Clear error" }), children: lastErrorDetailStack({ le: selectedRow.state.lastError }) ?? (jsx(Typography, { variant: "body2", children: "Run failed" })) })) : null, selectedRow?.state?.status !== 'error' &&
                                        selectedRow?.state?.lastError &&
                                        typeof selectedRow.state.lastError.message === 'string' &&
                                        String(selectedRow.state.lastError.message).trim() ? (jsxs(Alert, { severity: "warning", sx: { mt: 2 }, action: jsx(Button, { color: "inherit", size: "small", disabled: agentControlsDisabled, onClick: () => doControl('clear_agent_error', selected), sx: { textTransform: 'none', fontWeight: 600 }, children: "Clear error" }), children: [jsx(Typography, { variant: "body2", sx: { mb: 1 }, children: "The last run failed; this agent is scheduled to retry on the next supervisor tick because stopOnFailure is off." }), lastErrorDetailStack({ le: selectedRow.state.lastError })] })) : null, jsx(Divider, { sx: { my: 2 } }), jsxs(Stack, { direction: "row", flexWrap: "wrap", gap: 1, useFlexGap: true, sx: { width: '100%', justifyContent: { xs: 'flex-start', lg: 'flex-end' } }, children: [jsx(Button, { variant: "outlined", size: "medium", disabled: agentControlsDisabled, onClick: () => doControl('start_agent', selected), sx: { textTransform: 'none', fontWeight: 600 }, children: "Start" }), jsx(Button, { variant: "outlined", size: "medium", disabled: agentControlsDisabled, onClick: () => doControl('stop_agent', selected), sx: { textTransform: 'none', fontWeight: 600 }, children: "Stop" }), jsx(Button, { variant: "contained", color: "primary", size: "medium", disabled: agentControlsDisabled, onClick: () => doControl('execute_now', selected), sx: { textTransform: 'none', fontWeight: 600 }, children: "Run now" }), jsx(Button, { variant: "outlined", size: "medium", disabled: agentControlsDisabled, onClick: () => doControl('disable_agent', selected), sx: { textTransform: 'none', fontWeight: 600 }, children: "Disable" }), jsx(Button, { variant: "outlined", size: "medium", disabled: agentControlsDisabled, onClick: () => doControl('enable_agent', selected), sx: { textTransform: 'none', fontWeight: 600 }, children: "Enable" })] })] }), jsxs(Paper, { variant: "outlined", sx: {
                                    p: 2.5,
                                    borderRadius: 2,
                                    bgcolor: 'background.paper',
                                    flex: { lg: 1 },
                                    minHeight: { lg: 0 },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden'
                                }, children: [jsx(Typography, { variant: "overline", color: "text.secondary", sx: { letterSpacing: 0.06, fontWeight: 600 }, children: "Follow-up tasks" }), jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 1.5, sx: { mt: 1.5, flexWrap: 'wrap' }, children: [jsxs(FormControl, { size: "small", sx: { minWidth: { xs: '100%', sm: 200 } }, children: [jsx(InputLabel, { id: "cq-autonomous-task-agent-filter", children: "Agent" }), jsxs(Select, { labelId: "cq-autonomous-task-agent-filter", label: "Agent", value: taskAgentFilter, onChange: (e) => setTaskAgentFilter(String(e.target.value)), disabled: busy, children: [jsx(MenuItem, { value: "", children: "All agents" }), mergedAgents
                                                                .filter((a) => !a.syntheticFromConfig)
                                                                .map((a) => (jsx(MenuItem, { value: a.agentId, children: String(a.definition?.name || a.agentId) }, a.agentId)))] })] }), jsxs(FormControl, { size: "small", sx: { minWidth: { xs: '100%', sm: 220 } }, children: [jsx(InputLabel, { id: "cq-autonomous-task-assign-filter", children: "Assignment" }), jsxs(Select, { labelId: "cq-autonomous-task-assign-filter", label: "Assignment", value: taskAssignFilter, onChange: (e) => setTaskAssignFilter(String(e.target.value)), disabled: busy, children: [jsx(MenuItem, { value: TASK_ASSIGN_FILTER_ALL, children: "All" }), jsx(MenuItem, { value: TASK_ASSIGN_FILTER_UNASSIGNED, children: "Unassigned" }), jsx(MenuItem, { value: TASK_ASSIGN_FILTER_ME, children: "Assigned to me" }), assignFilterUsers.map(([username, disp]) => (jsx(MenuItem, { value: `${TASK_USER_FILTER_PREFIX}${username}`, children: disp }, username)))] })] })] }), copyHint ? (jsx(Typography, { variant: "caption", color: "text.secondary", sx: { display: 'block', mt: 1 }, children: copyHint })) : null, visibleAggregatedTasks.length === 0 ? (jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 2, py: 1.5, lineHeight: 1.6 }, children: "None match these filters. When a run needs your input, tasks appear here (all agents)." })) : (jsx(List, { dense: true, disablePadding: true, sx: {
                                            mt: 1.5,
                                            border: 1,
                                            borderColor: 'divider',
                                            borderRadius: 1,
                                            flex: { lg: 1 },
                                            minHeight: { lg: 0 },
                                            maxHeight: { xs: 280 },
                                            overflow: 'auto'
                                        }, children: visibleAggregatedTasks.map((t, taskIdx) => {
                                            const row = t;
                                            const id = String(row.id ?? '');
                                            const st = (row.status ?? 'open').toLowerCase();
                                            const done = st === 'done';
                                            const title = row.title?.trim() || 'Task';
                                            const prompt = String(row.prompt ?? '');
                                            const manageCross = manageByStorageId[row.storageAgentId] ?? false;
                                            const taskRowLocked = humanTaskRowActionsDisabled(busy, row, row.storageAgentId, manageCross);
                                            const ownerLabel = humanTaskOwnerLabel(row, row.storageAgentId);
                                            const assignValue = String(row.assignedUsername ?? '').trim();
                                            const assignUsersForSelect = (() => {
                                                if (!assignValue)
                                                    return studioUserOptions;
                                                if (studioUserOptions.some((u) => u.username === assignValue))
                                                    return studioUserOptions;
                                                return [
                                                    ...studioUserOptions,
                                                    {
                                                        id: 0,
                                                        username: assignValue,
                                                        firstName: String(row.assignedName ?? assignValue).trim() || assignValue,
                                                        lastName: '',
                                                        email: '',
                                                        enabled: true,
                                                        externallyManaged: false
                                                    }
                                                ];
                                            })();
                                            const pickedForAvatar = assignValue
                                                ? assignUsersForSelect.find((u) => u.username === assignValue)
                                                : undefined;
                                            const avatarUrl = pickedForAvatar ? String(pickedForAvatar.avatar ?? '').trim() : '';
                                            const nameParts = String(row.assignedName ?? '').trim().split(/\s+/).filter(Boolean);
                                            return (jsx(ListItem, { disablePadding: true, sx: {
                                                    display: 'block',
                                                    py: 0,
                                                    ...(taskIdx < visibleAggregatedTasks.length - 1
                                                        ? { borderBottom: (theme) => `1px solid ${theme.palette.divider}` }
                                                        : {})
                                                }, children: jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 1.5, alignItems: { xs: 'stretch', sm: 'flex-start' }, sx: { py: 1.25, px: 1.5, width: '100%', minWidth: 0 }, children: [jsxs(Stack, { direction: "row", spacing: 1, alignItems: "flex-start", sx: { flex: 1, minWidth: 0 }, children: [jsx(Checkbox, { size: "small", checked: done, disabled: taskRowLocked || !id, onChange: (_, checked) => {
                                                                        void doControl(checked ? 'complete_human_task' : 'reopen_human_task', row.storageAgentId, id);
                                                                    }, inputProps: { 'aria-label': `Done: ${title}` }, sx: { mt: 0.25, flexShrink: 0 } }), jsx(ListItemText, { sx: { my: 0, minWidth: 0 }, primary: jsxs(Stack, { spacing: 0.25, alignItems: "flex-start", children: [jsx(Typography, { variant: "body2", component: "span", sx: done ? { textDecoration: 'line-through', color: 'text.secondary' } : undefined, children: title }), jsxs(Typography, { variant: "caption", color: "text.secondary", component: "span", children: ["Queue: ", row.storageAgentLabel, " \u00B7 From: ", ownerLabel] })] }), secondary: prompt, secondaryTypographyProps: {
                                                                        variant: 'caption',
                                                                        sx: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' }
                                                                    } })] }), jsxs(Stack, { spacing: 1, sx: {
                                                                width: { xs: '100%', sm: 240 },
                                                                minWidth: { sm: 240 },
                                                                flexShrink: 0,
                                                                alignSelf: { sm: 'stretch' }
                                                            }, children: [jsxs(Stack, { direction: "row", spacing: 1, alignItems: "flex-start", sx: { width: '100%', minWidth: 0 }, children: [assignValue ? (jsx(Tooltip, { title: formatStudioUserLabel(pickedForAvatar ?? { username: assignValue, firstName: '', lastName: '' }), children: jsx(Box, { component: "span", sx: { lineHeight: 0, display: 'inline-block' }, children: jsx(HumanTaskAssigneeAvatar, { username: assignValue, firstName: pickedForAvatar?.firstName ?? nameParts[0] ?? assignValue, lastName: pickedForAvatar?.lastName ?? nameParts.slice(1).join(' '), avatarUrl: avatarUrl }) }) })) : null, jsxs(TextField, { select: true, size: "small", label: "Assignee", value: assignValue, fullWidth: true, disabled: taskRowLocked || !id, onChange: (e) => {
                                                                                const v = String(e.target.value);
                                                                                const picked = assignUsersForSelect.find((u) => u.username === v);
                                                                                const name = picked ? formatStudioUserLabel(picked) : v || String(row.assignedName ?? '').trim();
                                                                                void doControl('assign_human_task', row.storageAgentId, id, {
                                                                                    assignedUsername: v,
                                                                                    assignedName: v ? name : ''
                                                                                });
                                                                            }, SelectProps: { displayEmpty: true }, InputLabelProps: { shrink: true }, sx: { flex: 1, minWidth: 0, '& .MuiInputBase-root': { backgroundColor: 'background.paper' } }, children: [jsx(MenuItem, { value: "", children: jsx("em", { children: "Unassigned" }) }), assignUsersForSelect.map((u) => (jsx(MenuItem, { value: u.username, children: formatStudioUserLabel(u) }, u.username)))] })] }), jsxs(Stack, { direction: "row", justifyContent: "flex-end", spacing: 0.5, children: [jsx(Tooltip, { title: "Copy prompt", children: jsx("span", { children: jsx(IconButton, { size: "small", disabled: busy || !prompt, onClick: () => void copyTaskPrompt(prompt), "aria-label": "Copy prompt", children: jsx(default_1$2, { fontSize: "small" }) }) }) }), jsx(Tooltip, { title: "Dismiss", children: jsx("span", { children: jsx(IconButton, { size: "small", disabled: taskRowLocked || !id, onClick: () => doControl('dismiss_human_task', row.storageAgentId, id), "aria-label": "Dismiss task", children: jsx(default_1$1, { fontSize: "small" }) }) }) })] })] })] }) }, `${row.storageAgentId}-${id || title + prompt.slice(0, 40)}`));
                                        }) }))] }), jsxs(Paper, { variant: "outlined", sx: {
                                    p: 2.5,
                                    borderRadius: 2,
                                    bgcolor: 'background.paper',
                                    flex: { lg: 1 },
                                    minHeight: { lg: 0 },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden'
                                }, children: [jsx(Typography, { variant: "overline", color: "text.secondary", sx: { letterSpacing: 0.06, fontWeight: 600 }, children: "Run history" }), pastRunReportsEmpty ? (jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 2, py: 1.5 }, children: "No completed runs recorded for this agent yet." })) : (jsx(Box, { component: "pre", sx: {
                                            mt: 1.5,
                                            m: 0,
                                            p: 2,
                                            flex: { lg: 1 },
                                            minHeight: { lg: 120 },
                                            maxHeight: { xs: 220, sm: 320, lg: 'min(48vh, 520px)' },
                                            overflow: 'auto',
                                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50'),
                                            borderRadius: 1,
                                            fontSize: 12,
                                            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                                            lineHeight: 1.5,
                                            border: 1,
                                            borderColor: 'divider',
                                            whiteSpace: 'pre-wrap'
                                        }, children: JSON.stringify(selectedRow?.pastRunReports ?? [], null, 2) }))] })] })] })] }));
    return (jsxs(Fragment, { children: [jsx(GlobalStyles, { styles: (theme) => ({
                    '[data-cq-autonomous-widget="1"][data-cq-autonomous-has-error="1"] .MuiTypography-subtitle1': {
                        color: theme.palette.error.main
                    }
                }) }), jsxs(ListItemButton, { onClick: () => {
                    setDialogOpen(true);
                    setDialogMinimized(false);
                }, children: [jsx(ListItemIcon, { children: jsx(Badge, { badgeContent: openHumanTaskCount, color: "warning", max: 99, overlap: "circular", invisible: openHumanTaskCount === 0, anchorOrigin: { vertical: 'top', horizontal: 'right' }, children: jsx(SystemIcon, { icon: toolsListSystemIcon, svgIconProps: {
                                    sx: (t) => ({
                                        fontSize: 22,
                                        color: hasAgentError || supervisorHaltReason
                                            ? t.palette.warning.main
                                            : supervisorOn
                                                ? t.palette.success.main
                                                : t.palette.error.main
                                    })
                                } }) }) }), jsx(ListItemText, { primary: listTitleTranslated, secondary: listSubtitle || undefined, primaryTypographyProps: { noWrap: true }, secondaryTypographyProps: { noWrap: true } }), jsx(ChevronRightRounded, { color: "action", sx: { flexShrink: 0 } })] }), typeof document !== 'undefined' &&
                createPortal(jsxs(Fragment, { children: [dialogOpen && !dialogMinimized ? (jsxs(Dialog, { open: true, onClose: () => {
                                setDialogOpen(false);
                                setDialogMinimized(false);
                            }, maxWidth: false, fullWidth: false, scroll: "paper", "aria-labelledby": "cq-autonomous-dialog-title", PaperProps: {
                                sx: {
                                    width: { xs: '100%', sm: 'min(96vw, 1680px)' },
                                    maxWidth: '96vw',
                                    maxHeight: 'calc(100vh - 16px)',
                                    m: { xs: 0.5, sm: 1.5 }
                                }
                            }, children: [jsxs(Box, { sx: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        px: 2.5,
                                        py: 1.25,
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                        gap: 1.5,
                                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50')
                                    }, children: [jsx(Badge, { badgeContent: openHumanTaskCount, color: "warning", max: 99, overlap: "circular", invisible: openHumanTaskCount === 0, anchorOrigin: { vertical: 'top', horizontal: 'right' }, children: jsx(AutonomousAgentsMarkIcon, { sx: (t) => ({
                                                    fontSize: 28,
                                                    color: hasAgentError || supervisorHaltReason
                                                        ? t.palette.warning.main
                                                        : supervisorOn
                                                            ? t.palette.success.main
                                                            : t.palette.error.main
                                                }), "aria-hidden": true }) }), jsx(Typography, { id: "cq-autonomous-dialog-title", variant: "h6", component: "span", sx: { flex: 1 }, children: listTitle }), jsx(Tooltip, { title: "Minimize", children: jsx(IconButton, { "aria-label": "Minimize", onClick: () => setDialogMinimized(true), size: "small", children: jsx(RemoveRounded, {}) }) }), jsx(Tooltip, { title: "Close", children: jsx(IconButton, { "aria-label": "Close", onClick: () => {
                                                    setDialogOpen(false);
                                                    setDialogMinimized(false);
                                                }, size: "small", children: jsx(CloseRounded, {}) }) })] }), jsx(DialogContent, { dividers: true, sx: {
                                        pt: 3,
                                        px: { xs: 2, sm: 3 },
                                        pb: 3,
                                        minHeight: 'min(85vh, 900px)',
                                        maxHeight: 'calc(100vh - 120px)',
                                        overflow: 'auto',
                                        bgcolor: 'background.default',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }, children: panelBody })] })) : null, configDetailsAgentId && configDetailsRow ? (jsxs(Dialog, { open: true, onClose: () => setConfigDetailsAgentId(null), maxWidth: "sm", fullWidth: true, scroll: "paper", "aria-labelledby": "cq-autonomous-config-details-title", children: [jsxs(DialogTitle, { id: "cq-autonomous-config-details-title", children: ["Agent configuration \u2014", ' ', String(configDetailsRow.definition?.name || configDetailsRow.agentId)] }), jsx(DialogContent, { dividers: true, sx: { pt: 2 }, children: jsx(AgentConfigurationDetailsContent, { row: configDetailsRow }) }), jsx(DialogActions, { sx: { px: 3, py: 2 }, children: jsx(Button, { onClick: () => setConfigDetailsAgentId(null), sx: { textTransform: 'none' }, children: "Close" }) })] })) : null, dialogOpen && dialogMinimized ? (jsxs(Paper, { elevation: 4, sx: {
                                position: 'fixed',
                                bottom: 16,
                                right: 16,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                px: 2,
                                py: 1.5,
                                zIndex: 1300,
                                border: '1px solid',
                                borderColor: 'divider',
                                maxWidth: 'min(96vw, 520px)'
                            }, children: [jsx(Badge, { badgeContent: openHumanTaskCount, color: "warning", max: 99, overlap: "circular", invisible: openHumanTaskCount === 0, anchorOrigin: { vertical: 'top', horizontal: 'right' }, children: jsx(AutonomousAgentsMarkIcon, { sx: (t) => ({
                                            fontSize: 22,
                                            color: hasAgentError || supervisorHaltReason
                                                ? t.palette.warning.main
                                                : supervisorOn
                                                    ? t.palette.success.main
                                                    : t.palette.error.main
                                        }), "aria-hidden": true }) }), jsx(Typography, { variant: "body1", sx: { flex: 1, minWidth: 0 }, noWrap: true, children: listTitle }), jsx(Tooltip, { title: "Restore", children: jsx(IconButton, { "aria-label": "Restore", onClick: () => setDialogMinimized(false), size: "small", children: jsx(OpenInBrowserRounded, {}) }) }), jsx(Tooltip, { title: "Close", children: jsx(IconButton, { "aria-label": "Close", onClick: () => {
                                            setDialogOpen(false);
                                            setDialogMinimized(false);
                                        }, size: "small", children: jsx(CloseRounded, {}) }) })] })) : null] }), document.body)] }));
}

const LAST_OPEN_AGENT_STORAGE_PREFIX = 'aiassistant.formPanel.lastOpenAgent.';
function formPanelSiteSegment() {
    try {
        const ctx = window.CStudioAuthoringContext;
        const s = ctx?.site?.trim();
        if (s)
            return s.replace(/[^a-zA-Z0-9_-]/g, '_');
    }
    catch {
        /* ignore */
    }
    return '_';
}
function readLastOpenAgentKey() {
    try {
        return window.localStorage.getItem(LAST_OPEN_AGENT_STORAGE_PREFIX + formPanelSiteSegment())?.trim() || '';
    }
    catch {
        return '';
    }
}
function writeLastOpenAgentKey(key) {
    if (!key)
        return;
    try {
        window.localStorage.setItem(LAST_OPEN_AGENT_STORAGE_PREFIX + formPanelSiteSegment(), key);
    }
    catch {
        /* quota / private mode */
    }
}
function AiAssistantFormControlPanel(props) {
    const { visibleAgents, getAuthoringFormContext } = props;
    const [openKey, setOpenKey] = useState(() => {
        if (visibleAgents.length === 0)
            return '';
        const saved = typeof window !== 'undefined' ? readLastOpenAgentKey() : '';
        if (saved && visibleAgents.some((a) => agentStableKey(a) === saved))
            return saved;
        return agentStableKey(visibleAgents[0]);
    });
    const setOpenKeyPersist = (key) => {
        setOpenKey(key);
        if (key)
            writeLastOpenAgentKey(key);
    };
    useEffect(() => {
        if (visibleAgents.length === 0) {
            setOpenKey('');
            return;
        }
        const first = agentStableKey(visibleAgents[0]);
        setOpenKey((prev) => {
            if (!prev) {
                const saved = readLastOpenAgentKey();
                if (saved && visibleAgents.some((a) => agentStableKey(a) === saved))
                    return saved;
                return first;
            }
            const still = visibleAgents.some((a) => agentStableKey(a) === prev);
            if (still)
                return prev;
            const saved = readLastOpenAgentKey();
            if (saved && visibleAgents.some((a) => agentStableKey(a) === saved))
                return saved;
            return first;
        });
    }, [visibleAgents]);
    const activateAgent = (key) => {
        setOpenKeyPersist(key);
    };
    const onHeaderClick = (key) => {
        if (openKey !== key) {
            activateAgent(key);
            return;
        }
        if (visibleAgents.length <= 1)
            return;
        const idx = visibleAgents.findIndex((a) => agentStableKey(a) === key);
        if (idx < 0)
            return;
        const next = visibleAgents[(idx + 1) % visibleAgents.length];
        setOpenKeyPersist(agentStableKey(next));
    };
    if (visibleAgents.length === 0) {
        return (jsx(Box, { sx: { p: 2 }, children: jsx(Typography, { variant: "body2", color: "text.secondary", children: "No agents are enabled for this field. Open the content type in Studio \u2192 Form \u2192 select this field \u2192 Properties, and enable each agent you want here (agents are listed from Project Configuration \u2192 UI, Studio AI Assistant / Helper)." }) }));
    }
    return (jsxs(Box, { sx: { flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }, children: [jsx(Box, { sx: {
                    px: 1.5,
                    py: 1,
                    borderBottom: 1,
                    borderColor: 'divider',
                    flexShrink: 0
                }, children: jsx(Typography, { variant: "subtitle2", component: "h2", children: "Studio AI assistant" }) }), jsx(Box, { sx: { flex: 1, minHeight: 0, overflow: 'auto', WebkitOverflowScrolling: 'touch' }, children: visibleAgents.map((agent) => {
                    const key = agentStableKey(agent);
                    const expanded = openKey === key;
                    return (jsxs(Box, { sx: {
                            borderBottom: 1,
                            borderColor: 'divider',
                            bgcolor: expanded ? 'action.selected' : 'background.paper'
                        }, children: [jsxs(Box, { component: "button", type: "button", "aria-expanded": expanded, "aria-controls": `aiassistant-agent-panel-${key}`, id: `aiassistant-agent-header-${key}`, onClick: () => onHeaderClick(key), sx: {
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    minHeight: 48,
                                    px: 1.5,
                                    py: 1,
                                    m: 0,
                                    border: 0,
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    bgcolor: expanded ? 'action.selected' : 'action.hover',
                                    color: 'text.primary',
                                    '&:hover': {
                                        filter: 'brightness(0.97)'
                                    }
                                }, children: [jsx(ExpandMoreRounded, { fontSize: "small", sx: {
                                            flexShrink: 0,
                                            color: 'text.secondary',
                                            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: (theme) => theme.transitions.create('transform', { duration: theme.transitions.duration.shorter })
                                        } }), jsx(Box, { sx: { display: 'flex', color: 'text.secondary', flexShrink: 0 }, children: getAgentIcon(agent.icon) }), jsx(Typography, { variant: "body2", noWrap: true, sx: { flex: 1, minWidth: 0 }, title: agent.label, children: agent.label })] }), expanded ? (jsx(Box, { id: `aiassistant-agent-panel-${key}`, role: "region", "aria-labelledby": `aiassistant-agent-header-${key}`, sx: {
                                    minHeight: 280,
                                    maxHeight: 'min(58vh, 520px)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    bgcolor: 'action.hover',
                                    overflow: 'hidden',
                                    borderTop: 1,
                                    borderColor: 'divider'
                                }, children: jsx(AiAssistantChat, { agentId: agent.id?.trim() || '', llm: agent.llm, llmModel: agent.llmModel, imageModel: agent.imageModel, openAiApiKey: agent.openAiApiKey, enableTools: agent.enableTools, expertSkills: agent.expertSkills, configPrompts: agent.prompts, embedTarget: "default", getAuthoringFormContext: getAuthoringFormContext, formEngineClientJsonApply: true, ...(agent.translateBatchConcurrency != null
                                        ? { translateBatchConcurrency: agent.translateBatchConcurrency }
                                        : {}) }) })) : null] }, key));
                }) })] }));
}

/** Studio / bridge may pass agents as a numeric-keyed object instead of a real array. */
function normalizeAgentsProp(raw) {
    if (raw == null)
        return [];
    if (Array.isArray(raw))
        return raw;
    if (typeof raw === 'object') {
        const vals = Object.values(raw).filter((v) => v != null && typeof v === 'object' && 'label' in v);
        if (vals.length > 0)
            return vals;
    }
    return [];
}
/** Must match fixed panel `width` at `sm` and up. */
const FORM_PANEL_WIDTH_PX = 400;
/** Collapsed drawer width on desktop. */
const FORM_PANEL_COLLAPSED_WIDTH_PX = 44;
/** Reserved on the right beyond panel width (shadow / layout slack) for `body` padding. */
const FORM_PANEL_RIGHT_CLEARANCE_PX = 48;
/** Existing Studio split button sits outside panel; keep parity with prior 419px expanded offset. */
const FORM_PANEL_SPLIT_BUTTON_RIGHT_GAP_PX = 19;
let formPanelInsetRefCount = 0;
function acquireFormPanelBodyInset(insetPx, panelWidthPx) {
    formPanelInsetRefCount += 1;
    if (formPanelInsetRefCount === 1) {
        document.documentElement.classList.add('aiassistant-form-panel-active');
        document.documentElement.style.setProperty('--aiassistant-form-panel-inset', insetPx);
        document.documentElement.style.setProperty('--aiassistant-form-panel-width', panelWidthPx);
    }
}
function releaseFormPanelBodyInset() {
    formPanelInsetRefCount = Math.max(0, formPanelInsetRefCount - 1);
    if (formPanelInsetRefCount === 0) {
        document.documentElement.classList.remove('aiassistant-form-panel-active');
        document.documentElement.style.removeProperty('--aiassistant-form-panel-inset');
        document.documentElement.style.removeProperty('--aiassistant-form-panel-width');
    }
}
/**
 * Form Engine control: fixed right-hand panel (portaled). Legacy shell passes only agents enabled in Form Properties.
 */
function AiAssistantFormControl(props) {
    const { agents: agentsProp, getAuthoringFormContext, readOnly: readOnlyProp } = props;
    const isReadOnly = Boolean(readOnlyProp);
    const theme = useTheme();
    const reserveBodyInset = useMediaQuery(theme.breakpoints.up('sm'));
    const [collapsed, setCollapsed] = useState(false);
    const visibleAgents = normalizeAgentsProp(agentsProp);
    const panelWidthPx = collapsed ? FORM_PANEL_COLLAPSED_WIDTH_PX : FORM_PANEL_WIDTH_PX;
    const panelInsetPx = panelWidthPx + FORM_PANEL_RIGHT_CLEARANCE_PX;
    useLayoutEffect(() => {
        if (isReadOnly || !reserveBodyInset || typeof document === 'undefined')
            return;
        acquireFormPanelBodyInset(`${panelInsetPx}px`, `${panelWidthPx}px`);
        return () => {
            releaseFormPanelBodyInset();
        };
    }, [isReadOnly, reserveBodyInset, panelInsetPx, panelWidthPx]);
    if (isReadOnly) {
        return null;
    }
    const panel = (jsxs(Box, { "data-aiassistant-form-panel": "true", sx: {
            position: 'fixed',
            top: 0,
            right: 0,
            height: '100vh',
            width: { xs: '100%', sm: `${panelWidthPx}px` },
            maxWidth: '100vw',
            zIndex: 100002,
            display: 'flex',
            flexDirection: 'column',
            transition: (muiTheme) => muiTheme.transitions.create(['width'], {
                duration: muiTheme.transitions.duration.shorter,
                easing: muiTheme.transitions.easing.easeOut
            }),
            boxShadow: 6,
            borderLeft: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper',
            overflow: 'hidden'
        }, children: [jsx(Box, { sx: {
                    minHeight: 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: collapsed ? 'center' : 'flex-end',
                    px: 0.5,
                    borderBottom: collapsed ? 0 : 1,
                    borderColor: 'divider',
                    bgcolor: 'background.paper'
                }, children: jsx(Tooltip, { title: collapsed ? 'Expand assistant drawer' : 'Collapse assistant drawer', children: jsx(IconButton, { size: "small", "aria-label": collapsed ? 'Expand assistant drawer' : 'Collapse assistant drawer', onClick: () => setCollapsed((prev) => !prev), children: collapsed ? jsx(ChevronLeftRounded, { fontSize: "small" }) : jsx(ChevronRightRounded, { fontSize: "small" }) }) }) }), !collapsed ? (jsx(AiAssistantFormControlPanel, { visibleAgents: visibleAgents, getAuthoringFormContext: getAuthoringFormContext })) : null] }));
    return (jsxs(Fragment, { children: [jsx(GlobalStyles, { styles: {
                    [`@media (min-width: ${theme.breakpoints.values.sm ?? 600}px)`]: {
                        'html.aiassistant-form-panel-active body': {
                            paddingLeft: `${theme.spacing(2)} !important`,
                            paddingRight: `calc(var(--aiassistant-form-panel-inset) + ${theme.spacing(3)}) !important`,
                            boxSizing: 'border-box',
                            transition: theme.transitions.create(['padding-left', 'padding-right'], {
                                duration: theme.transitions.duration.shorter,
                                easing: theme.transitions.easing.easeOut
                            })
                        },
                        'html.aiassistant-form-panel-active .cstudio-form-controls-button-container #splitButtonContainer': {
                            marginLeft: '15px !important',
                            marginRight: `calc(var(--aiassistant-form-panel-width) + ${FORM_PANEL_SPLIT_BUTTON_RIGHT_GAP_PX}px) !important`
                        }
                    }
                } }), jsx(Box, { className: "aiassistant-form-control-sentinel", sx: { width: 0, height: 0, position: 'relative', overflow: 'visible', pointerEvents: 'none' }, "aria-hidden": true }), typeof document !== 'undefined' ? createPortal(panel, document.body) : null] }));
}

/**
 * Resolves the folder used when importing remote chat images into the repo so it matches
 * the page content type's image datasources (same {@code repoPath} as XB / form pickers).
 */
/** Used when the content type is unknown or has no image datasource paths yet. */
const DEFAULT_IMPORT_REPO_PATH = '/static-assets/item/images/{yyyy}/{mm}/{dd}/';

const AIASSISTANT_IMG_DATASOURCE_TYPE = 'aiassistant-img-from-url';
let installed$1 = false;
function propValue(table, key) {
    if (!table)
        return undefined;
    const p = table[key];
    if (!p)
        return undefined;
    if (typeof p.value === 'string')
        return p.value;
    return undefined;
}
function datasourceRepoPath(ds) {
    const typed = ds;
    const raw = typed?.properties?.property;
    const arr = Array.isArray(raw) ? raw : raw ? [raw] : [];
    for (const p of arr) {
        if (p?.name === 'repoPath' && p.value?.trim())
            return p.value.trim();
    }
    return '';
}
function isAiAssistantImgDatasource(ds) {
    const typed = ds;
    const t = (typed?.type ?? '').trim();
    if (t === AIASSISTANT_IMG_DATASOURCE_TYPE || t === 'crafterq-img-from-url')
        return true;
    const n = t.replace(/-/g, '').toLowerCase();
    return n === 'aiassistantimgfromurl' || n === 'crafterqimgfromurl';
}
function buildDsById(dataSources) {
    const m = new Map();
    if (!dataSources)
        return m;
    for (const ds of dataSources) {
        if (ds?.id)
            m.set(String(ds.id), ds);
    }
    return m;
}
/**
 * Studio's content-type parser only maps built-in datasource types (e.g. img-repository-upload) to
 * {@code allowImagesFromRepo}. Experience Builder uses that flag to include image fields in asset-drag
 * drop targets. Inject it for image-picker fields that reference {@code aiassistant-img-from-url}.
 */
function augmentImageField(field, dsById) {
    if (field.type !== 'image')
        return field;
    if (field.validations?.allowImagesFromRepo)
        return field;
    const im = propValue(field.properties, 'imageManager');
    if (!im?.trim())
        return field;
    const ids = im
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
    let hasRemoteUrlImportDs = false;
    let repoPath = '';
    for (const id of ids) {
        const ds = dsById.get(id);
        if (isAiAssistantImgDatasource(ds))
            hasRemoteUrlImportDs = true;
        const rp = datasourceRepoPath(ds);
        if (rp && !repoPath)
            repoPath = rp;
    }
    if (!hasRemoteUrlImportDs)
        return field;
    return {
        ...field,
        validations: {
            ...field.validations,
            allowImagesFromRepo: {
                id: 'allowImagesFromRepo',
                value: repoPath || DEFAULT_IMPORT_REPO_PATH,
                level: 'required'
            }
        }
    };
}
function augmentFields(fields, dsById) {
    if (!fields)
        return fields;
    let changed = false;
    const next = { ...fields };
    for (const fid of Object.keys(fields)) {
        const field = fields[fid];
        let nf = augmentImageField(field, dsById);
        if (nf.fields) {
            const inner = augmentFields(nf.fields, dsById);
            if (inner !== nf.fields) {
                nf = { ...nf, fields: inner };
                changed = true;
            }
        }
        if (nf !== field) {
            next[fid] = nf;
            changed = true;
        }
    }
    return changed ? next : fields;
}
function augmentContentType(ct) {
    const dsById = buildDsById(ct.dataSources);
    const fields = augmentFields(ct.fields, dsById);
    if (fields === ct.fields)
        return ct;
    return { ...ct, fields };
}
function installAiAssistantContentTypesHighlightPatch() {
    if (installed$1 || typeof window === 'undefined')
        return;
    installed$1 = true;
    const bus = getHostToGuestBus();
    const rawNext = bus.next.bind(bus);
    bus.next = (action) => {
        const a = action;
        if (a?.type !== contentTypesResponse.type || !Array.isArray(a.payload?.contentTypes)) {
            rawNext(action);
            return;
        }
        const contentTypes = a.payload.contentTypes.map((ct) => augmentContentType(ct));
        rawNext({
            ...a,
            payload: {
                ...a.payload,
                contentTypes
            }
        });
    };
}

let installed = false;
function getStudioStore() {
    try {
        const w = window;
        return w.craftercms?.getStore?.() ?? null;
    }
    catch {
        return null;
    }
}
function activeSiteId() {
    const store = getStudioStore();
    const id = store?.getState?.()?.sites?.active;
    return typeof id === 'string' ? id.trim() : '';
}
function isUpdateFieldOp(action) {
    return (typeof action === 'object' &&
        action !== null &&
        'type' in action &&
        action.type === updateFieldValueOperation.type &&
        'payload' in action &&
        typeof action.payload === 'object' &&
        action.payload !== null);
}
/**
 * When Experience Builder drops an AI Assistant chat image, the guest sends {@code UPDATE_FIELD_VALUE_OPERATION} with
 * {@code value} set to the remote {@code https?://} URL. Studio's write API expects a repo path. This bridge
 * imports the image on drop, then forwards the operation with {@code value} replaced by {@code /static-assets/...}.
 */
function installRemoteImageDropImportBridge() {
    if (installed || typeof window === 'undefined')
        return;
    installed = true;
    const bus = getGuestToHostBus();
    const rawNext = bus.next.bind(bus);
    bus.next = (action) => {
        if (!isUpdateFieldOp(action)) {
            rawNext(action);
            return;
        }
        const payload = action.payload;
        const value = payload.value;
        if (typeof value !== 'string' || !isProbablyRemoteImageUrl(value)) {
            rawNext(action);
            return;
        }
        const site = activeSiteId();
        if (!site) {
            console.error('[crafterq] Cannot import remote image on drop: no active site.');
            getStudioStore()?.dispatch?.(showSystemNotification({
                message: 'Cannot place remote image: no active site selected.'
            }));
            return;
        }
        void importRemoteImageToRepo(site, value, DEFAULT_IMPORT_REPO_PATH)
            .then((repoPath) => {
            rawNext({
                ...action,
                payload: {
                    ...payload,
                    value: repoPath
                }
            });
        })
            .catch((err) => {
            const msg = err instanceof Error ? err.message : String(err);
            console.error('[crafterq] Remote image import on drop failed', err);
            getStudioStore()?.dispatch?.(showSystemNotification({
                message: `Could not import image on drop: ${msg}`
            }));
        });
    };
}

installRemoteImageDropImportBridge();
installAiAssistantContentTypesHighlightPatch();
const plugin = {
    locales: undefined,
    scripts: undefined,
    stylesheets: undefined,
    /**
     * Must match `craftercms-plugin.yaml` → `plugin.id`. Studio `registerPlugin` dedupes on this string; using a
     * different id than `craftercms-plugin.yaml` can cause a prior/empty registration to skip this bundle so
     * `craftercms.components.aiassistant.Helper` never reaches the component registry.
     */
    id: aiAssistantStudioPluginId,
    widgets: {
        [helperWidgetId]: AiAssistantHelper,
        [autonomousAssistantsWidgetId]: AiAssistantAutonomousAssistants,
        [autonomousAgentsMarkWidgetId]: AutonomousAgentsMarkIcon,
        [formControlWidgetId]: AiAssistantFormControl,
        [logoWidgetId]: AiAssistantIcon,
        [popoverWidgetId]: AiAssistantPopover,
        [dialogContentWidgetId]: AiAssistantDialogContent
    }
};

export { AiAssistantPopover, plugin as default, plugin };
