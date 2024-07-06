import React, { useCallback } from "react";
import {
  OriginalPlatformKey,
  originalPlatforms,
} from "../data/originalPlatforms";

type Props = {
  default: OriginalPlatformKey;
  onChange: (key: OriginalPlatformKey) => void;
};

export const OriginalPlatformSelect: React.FC<Props> = (props) => {
  const onChangeSelection = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      props.onChange(event.target.value as OriginalPlatformKey);
    },
    []
  );

  return (
    <>
      <label htmlFor="console-select">Emulated Console:</label>
      <select
        id="console-select"
        defaultValue={props.default}
        onChange={onChangeSelection}
      >
        {Object.keys(originalPlatforms).map((platformKey) => (
          <option value={platformKey} key={platformKey}>
            {originalPlatforms[platformKey as OriginalPlatformKey].label}
          </option>
        ))}
      </select>
    </>
  );
};
