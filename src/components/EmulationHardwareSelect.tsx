import React, { useCallback } from 'react';
import {
  EmulationHardwareKey,
  emulationHardware,
} from '../data/emulationHardware';

type Props = {
  default: EmulationHardwareKey;
  onChange: (key: EmulationHardwareKey) => void;
};

export const EmulationHardwareSelect: React.FC<Props> = (props) => {
  const onChangeSelection = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      props.onChange(event.target.value as EmulationHardwareKey);
    },
    []
  );

  return (
    <>
      <label htmlFor="console-select">Device:</label>
      <select id="console-select" onChange={onChangeSelection}>
        {Object.keys(emulationHardware).map((platformKey) => (
          <option key={platformKey} value={platformKey}>
            {
              emulationHardware[platformKey as keyof typeof emulationHardware]
                .label
            }
          </option>
        ))}
      </select>
    </>
  );
};
