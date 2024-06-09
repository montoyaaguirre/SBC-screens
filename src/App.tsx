import { useState } from 'react';
import { SBCScreen } from './components/DeviceScreen';
import { EmulationHardwareSelect } from './components/EmulationHardwareSelect';
import { OriginalPlatformSelect } from './components/OriginalPlatformSelect';
import { OriginalPlatformKey } from './data/originalPlatforms';
import { SBCKey } from './data/emulationHardware';

function App() {
  const [consoleKey, setConsoleKey] = useState<OriginalPlatformKey>('gb');
  const [deviceKey, setDeviceKey] = useState<SBCKey>('rgb30');
  const [integerScaling, setIntegerScaling] = useState(true);

  return (
    <div>
      <div style={{ padding: '0px 24px 0px 24px' }}>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexDirection: 'column',
            marginBottom: '16px',
          }}
        >
          <OriginalPlatformSelect default={consoleKey} onChange={setConsoleKey} />
          <div style={{ display: 'flex', gap: '8px' }}>
            <label htmlFor="integer-scale">Integer Scale</label>
            <input type="checkbox" id="integer-scale" name="integer-scale" checked={integerScaling} onChange={(event) => setIntegerScaling(event.target.checked)} />
          </div>
          <EmulationHardwareSelect default={deviceKey} onChange={setDeviceKey} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SBCScreen deviceKey={deviceKey} originalPlatformKey={consoleKey} integerScaling={integerScaling} />
        </div>
      </div>
    </div >
  );
}

export default App;
