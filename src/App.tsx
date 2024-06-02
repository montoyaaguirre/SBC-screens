import { useState } from 'react';
import './App.css';
import { DeviceScreen } from './components/DeviceScreen';
import { EmulationHardwareSelect } from './components/EmulationHardwareSelect';
import { OriginalPlatformSelect } from './components/OriginalPlatformSelect';
import { OriginalPlatformKey } from './data/originalPlatforms';
import { EmulationHardwareKey } from './data/emulationHardware';

function App() {
  const [consoleKey, setConsoleKey] = useState<OriginalPlatformKey>('gb');
  const [deviceKey, setDeviceKey] = useState<EmulationHardwareKey>('rgb30');

  return (
    <>
      <h1>Screen size</h1>
      <div
        style={{
          display: 'flex',
          gap: '8px',
          flexDirection: 'column',
          marginBottom: '16px',
        }}
      >
        <OriginalPlatformSelect default={consoleKey} onChange={setConsoleKey} />
        <EmulationHardwareSelect default={deviceKey} onChange={setDeviceKey}/>
      </div>
      <DeviceScreen deviceKey={deviceKey} originalPlatformKey={consoleKey} />
    </>
  );
}

export default App;
