import { useState } from "react";
import { OriginalPlatformKey } from "../../data/originalPlatforms";
import { SBCKey } from "../../data/emulationHardware";
import { SBCScreen } from "../DeviceScreen";
import { EmulationHardwareSelectV2 } from "../EmulationHardwareSelect/EmulationHardwareSelectV2";
import { OriginalPlatformSelectV2 } from "../OriginalPlatformSelectV2";

export const Workspace: React.FC = () => {
    const [consoleKey, setConsoleKey] = useState<OriginalPlatformKey>('gb');
    const [deviceKey, setDeviceKey] = useState<SBCKey>('rgb30');
    const [integerScaling, setIntegerScaling] = useState(true);

    return (
        <div>
            <div style={{ padding: '0px 24px 0px 24px', fontFamily: 'DM Mono', fontWeight: 'bold' }}>
                <div
                    style={{
                        display: 'flex',
                        gap: '8px',
                        flexDirection: 'column',
                        marginBottom: '16px',
                    }}
                >
                    <OriginalPlatformSelectV2 default={consoleKey} onChange={setConsoleKey} />
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <label htmlFor="integer-scale">Integer Scale</label>
                        <input type="checkbox" id="integer-scale" name="integer-scale" checked={integerScaling} onChange={(event) => setIntegerScaling(event.target.checked)} />
                    </div>
                    <EmulationHardwareSelectV2 default={deviceKey} onChange={setDeviceKey} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <SBCScreen deviceKey={deviceKey} originalPlatformKey={consoleKey} integerScaling={integerScaling} />
                </div>
            </div>
        </div >
    );
}