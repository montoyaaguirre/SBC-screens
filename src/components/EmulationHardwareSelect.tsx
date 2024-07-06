import React, { useCallback } from "react";
import { SBCKey, sbcDevices } from "../data/emulationHardware";

type Props = {
  defaultKey: SBCKey;
  onChange: (key: SBCKey) => void;
};

export const EmulationHardwareSelect: React.FC<Props> = (props) => {
  const { defaultKey, onChange } = props;
  const onChangeSelection = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(event.target.value as SBCKey);
    },
    []
  );

  return (
    <>
      <label htmlFor="console-select">Device:</label>
      <select
        id="console-select"
        onChange={onChangeSelection}
        defaultValue={defaultKey}
      >
        {Object.keys(sbcDevices).map((platformKey) => (
          <option key={platformKey} value={platformKey}>
            {sbcDevices[platformKey as keyof typeof sbcDevices].label}
          </option>
        ))}
      </select>
    </>
  );
};
