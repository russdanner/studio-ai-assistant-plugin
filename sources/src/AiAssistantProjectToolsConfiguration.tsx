import { useCallback, useRef, useState, type SyntheticEvent } from 'react';
import FullscreenExitRounded from '@mui/icons-material/FullscreenExitRounded';
import FullscreenRounded from '@mui/icons-material/FullscreenRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import AiAssistantCentralAgentsConfiguration, {
  type AiAssistantCentralAgentsCatalogHandle
} from './AiAssistantCentralAgentsConfiguration';
import AiAssistantScriptsSandboxConfiguration from './AiAssistantScriptsSandboxConfiguration';
import AiAssistantStudioUiSettings from './AiAssistantStudioUiSettings';
import { useDomFullscreen } from './aiAssistantDomFullscreen';

export type AiAssistantProjectToolsTab = 'ui' | 'agents' | 'prompts' | 'tools' | 'scripts';

function projectToolsTabLabel(t: AiAssistantProjectToolsTab): string {
  switch (t) {
    case 'ui':
      return 'UI';
    case 'agents':
      return 'Agents';
    case 'prompts':
      return 'Prompts';
    case 'tools':
      return 'Tools and MCP';
    case 'scripts':
      return 'Scripts';
    default:
      return t;
  }
}

export interface AiAssistantProjectToolsConfigurationProps {
  /** Initial tab; used for legacy Project Tools widget ids that map to this shell. */
  defaultTab?: AiAssistantProjectToolsTab;
}

/**
 * Single Project Tools surface: **UI** (`studio-ui.json` + bulk), **Agents** (`agents.json`),
 * **Prompts** (tool markdown overrides), **Tools and MCP** (`tools.json` + registry + user Groovy), **Scripts** (imagegen + script LLMs).
 * Primary widget id: {@link projectToolsAiAssistantConfigWidgetId}. Legacy ids still mount this component with a fixed default tab.
 */
export default function AiAssistantProjectToolsConfiguration(props: AiAssistantProjectToolsConfigurationProps) {
  const { defaultTab = 'ui' } = props;
  const [tab, setTab] = useState<AiAssistantProjectToolsTab>(defaultTab);
  const [agentsCatalogDirty, setAgentsCatalogDirty] = useState(false);
  const [pendingTabSwitch, setPendingTabSwitch] = useState<AiAssistantProjectToolsTab | null>(null);
  const [tabLeaveSaveBusy, setTabLeaveSaveBusy] = useState(false);
  const agentsCatalogRef = useRef<AiAssistantCentralAgentsCatalogHandle>(null);
  const { ref: rootRef, isFullscreen: toolFullscreen, toggleFullscreen: toggleToolFullscreen } =
    useDomFullscreen<HTMLDivElement>();

  const handleTabsChange = useCallback(
    (_: SyntheticEvent, value: AiAssistantProjectToolsTab) => {
      if (tab === 'agents' && agentsCatalogDirty && value !== 'agents') {
        setPendingTabSwitch(value);
        return;
      }
      setTab(value);
    },
    [tab, agentsCatalogDirty]
  );

  const cancelPendingTabSwitch = useCallback(() => {
    setPendingTabSwitch(null);
    setTabLeaveSaveBusy(false);
  }, []);

  const discardPendingTabSwitch = useCallback(() => {
    if (pendingTabSwitch == null) return;
    const next = pendingTabSwitch;
    setAgentsCatalogDirty(false);
    setPendingTabSwitch(null);
    setTab(next);
  }, [pendingTabSwitch]);

  const saveAndPendingTabSwitch = useCallback(async () => {
    if (pendingTabSwitch == null) return;
    const next = pendingTabSwitch;
    setTabLeaveSaveBusy(true);
    try {
      const ok = (await agentsCatalogRef.current?.save()) === true;
      if (ok) {
        setPendingTabSwitch(null);
        setTab(next);
      }
    } finally {
      setTabLeaveSaveBusy(false);
    }
  }, [pendingTabSwitch]);

  return (
    <Box
      ref={rootRef}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: 0,
        alignSelf: 'stretch',
        ...(toolFullscreen ? { bgcolor: 'background.default' } : {})
      }}
    >
      <Stack
        direction="row"
        alignItems="stretch"
        sx={{ flexShrink: 0, borderBottom: 1, borderColor: 'divider' }}
      >
        <Tabs
          value={tab}
          onChange={handleTabsChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{ flex: '1 1 auto', minWidth: 0 }}
        >
          <Tab label="UI" value="ui" />
          <Tab label="Agents" value="agents" />
          <Tab label="Prompts" value="prompts" />
          <Tab label="Tools and MCP" value="tools" />
          <Tab label="Scripts" value="scripts" />
        </Tabs>
        <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0, borderLeft: 1, borderColor: 'divider', px: 0.5 }}>
          <Tooltip title={toolFullscreen ? 'Exit fullscreen' : 'Fullscreen'}>
            <IconButton
              size="small"
              aria-label={toolFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              onClick={() => toggleToolFullscreen()}
            >
              {toolFullscreen ? <FullscreenExitRounded /> : <FullscreenRounded />}
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>
      <Box sx={{ flex: '1 1 auto', minHeight: 0, overflow: 'auto' }}>
        {tab === 'ui' ? <AiAssistantStudioUiSettings /> : null}
        {tab === 'agents' ? (
          <AiAssistantCentralAgentsConfiguration
            ref={agentsCatalogRef}
            onDirtyChange={setAgentsCatalogDirty}
          />
        ) : null}
        {tab === 'prompts' ? <AiAssistantScriptsSandboxConfiguration panel="prompts" /> : null}
        {tab === 'tools' ? <AiAssistantScriptsSandboxConfiguration panel="tools" /> : null}
        {tab === 'scripts' ? <AiAssistantScriptsSandboxConfiguration panel="scripts" /> : null}
      </Box>

      <Dialog open={pendingTabSwitch != null} onClose={cancelPendingTabSwitch} maxWidth="sm" fullWidth>
        <DialogTitle>Unsaved changes</DialogTitle>
        <DialogContent>
          <Typography variant="body2" paragraph>
            Save, discard, or stay on Agents before opening{' '}
            <strong>{pendingTabSwitch ? projectToolsTabLabel(pendingTabSwitch) : ''}</strong>.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelPendingTabSwitch} disabled={tabLeaveSaveBusy}>
            Stay on Agents
          </Button>
          <Button color="warning" onClick={discardPendingTabSwitch} disabled={tabLeaveSaveBusy}>
            Discard changes
          </Button>
          <Button variant="contained" onClick={() => void saveAndPendingTabSwitch()} disabled={tabLeaveSaveBusy}>
            {tabLeaveSaveBusy ? 'Saving…' : 'Save and continue'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

/** Legacy widget id `craftercms.components.aiassistant.CentralAgentsConfiguration` — opens Agents tab. */
export function AiAssistantProjectToolsConfigurationAgentsTab() {
  return <AiAssistantProjectToolsConfiguration defaultTab="agents" />;
}

/**
 * Legacy widget id `craftercms.components.aiassistant.ScriptsSandboxConfiguration` — opens **Tools and MCP** tab
 * (`tools.json` + registry + user Groovy), closest to the old combined page’s top section.
 */
export function AiAssistantProjectToolsConfigurationScriptsTab() {
  return <AiAssistantProjectToolsConfiguration defaultTab="tools" />;
}

/** Legacy widget id `craftercms.components.aiassistant.StudioUiSettings` — opens UI tab. */
export function AiAssistantProjectToolsConfigurationUiTab() {
  return <AiAssistantProjectToolsConfiguration defaultTab="ui" />;
}
