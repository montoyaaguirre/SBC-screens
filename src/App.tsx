import { useState } from 'react';
import { SBCScreen } from './components/DeviceScreen';
import { EmulationHardwareSelect } from './components/EmulationHardwareSelect';
import { OriginalPlatformSelect } from './components/OriginalPlatformSelect';
import { OriginalPlatformKey } from './data/originalPlatforms';
import { SBCKey } from './data/emulationHardware';

function App() {
  const [consoleKey, setConsoleKey] = useState<OriginalPlatformKey>('gb');
  const [deviceKey, setDeviceKey] = useState<SBCKey>('rgb30');

  return (
    <div>
      <h1>Screen size</h1>
      <div style={{ padding: '0px 24px 0px 24px'}}>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexDirection: 'column',
            marginBottom: '16px',
          }}
        >
          <OriginalPlatformSelect default={consoleKey} onChange={setConsoleKey} />
          <EmulationHardwareSelect default={deviceKey} onChange={setDeviceKey} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center'  }}>
          <SBCScreen deviceKey={deviceKey} originalPlatformKey={consoleKey} />
        </div>
      </div>
    </div>
  );
}

export default App;
