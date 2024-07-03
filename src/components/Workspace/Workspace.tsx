import { useState } from "react";
import { OriginalPlatformKey } from "../../data/originalPlatforms";
import { SBCKey } from "../../data/emulationHardware";
import { OriginalPlatformSelect } from "../OriginalPlatformSelect";
import { EmulationHardwareSelect } from "../EmulationHardwareSelect";
import { SBCScreen } from "../DeviceScreen";
import { Route } from "../../routes";

export const Workspace: React.FC = () => {
  const searchParams = Route.useSearch();
  const [consoleKey, setConsoleKey] = useState<OriginalPlatformKey>(
    searchParams.console as OriginalPlatformKey
  );
  const [deviceKey, setDeviceKey] = useState<SBCKey>(
    searchParams.device as SBCKey
  );
  const [integerScaling, setIntegerScaling] = useState(
    searchParams.integerScaling
  );

  return (
    <div>
      <div
        style={{
          padding: "0px 24px 0px 24px",
          fontFamily: "DM Mono",
          fontWeight: "bold",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexDirection: "column",
            marginBottom: "16px",
          }}
        >
          <OriginalPlatformSelect
            default={consoleKey}
            onChange={setConsoleKey}
          />
          <div style={{ display: "flex", gap: "8px" }}>
            <label htmlFor="integer-scale">Integer Scale</label>
            <input
              type="checkbox"
              id="integer-scale"
              name="integer-scale"
              checked={integerScaling}
              onChange={(event) => setIntegerScaling(event.target.checked)}
            />
          </div>
          <EmulationHardwareSelect
            defaultKey={deviceKey}
            onChange={setDeviceKey}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SBCScreen
            deviceKey={deviceKey}
            originalPlatformKey={consoleKey}
            integerScaling={integerScaling}
          />
        </div>
      </div>
    </div>
  );
};
