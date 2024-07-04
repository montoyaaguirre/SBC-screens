import { OriginalPlatformKey } from "../../data/originalPlatforms";
import { SBCKey } from "../../data/emulationHardware";
import { OriginalPlatformSelect } from "../OriginalPlatformSelect";
import { EmulationHardwareSelect } from "../EmulationHardwareSelect";
import { SBCScreen } from "../DeviceScreen";
import { Route } from "../../routes";

export const Workspace: React.FC = () => {
  const searchParams = Route.useSearch();
  const navigate = Route.useNavigate();

  const handleConsoleChange = (console: string) => {
    navigate({
      search: (prev) => ({ ...prev, console }),
    });
  };

  const handleIntegerScalingToggle = () => {
    navigate({
      search: (prev) => ({ ...prev, integerScaling: !prev.integerScaling }),
    });
  };

  const handleDeviceChange = (deviceKey: string) => {
    navigate({
      search: (prev) => ({ ...prev, device: deviceKey }),
    });
  };

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
            default={searchParams.console as OriginalPlatformKey}
            onChange={handleConsoleChange}
          />
          <div style={{ display: "flex", gap: "8px" }}>
            <label htmlFor="integer-scale">Integer Scale</label>
            <input
              type="checkbox"
              id="integer-scale"
              name="integer-scale"
              checked={searchParams.integerScaling}
              onChange={handleIntegerScalingToggle}
            />
          </div>
          <EmulationHardwareSelect
            defaultKey={searchParams.device as SBCKey}
            onChange={handleDeviceChange}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SBCScreen
            deviceKey={searchParams.device as SBCKey}
            originalPlatformKey={searchParams.console as OriginalPlatformKey}
            integerScaling={searchParams.integerScaling}
          />
        </div>
      </div>
    </div>
  );
};
