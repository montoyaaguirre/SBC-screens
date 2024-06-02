import React, { useCallback } from 'react';
import {
  OriginalPlatformKey,
  originialPlatforms,
} from '../data/originalPlatforms';

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
      <label htmlFor="console-select">Console:</label>
      <select
        id="console-select"
        defaultValue={props.default}
        onChange={onChangeSelection}
      >
        {Object.keys(originialPlatforms).map((platformKey) => (
          <option value={platformKey}>
            {originialPlatforms[platformKey as OriginalPlatformKey].label}
          </option>
        ))}
      </select>
    </>
  );
};
