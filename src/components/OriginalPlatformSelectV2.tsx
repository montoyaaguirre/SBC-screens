import React, { useCallback } from 'react';
import {
  OriginalPlatformKey,
  originalPlatforms,
} from '../data/originalPlatforms';

import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './EmulationHardwareSelect/styles.css'
import { SelectItem } from './EmulationHardwareSelect/SelectItem';

type Props = {
  default: OriginalPlatformKey;
  onChange: (key: OriginalPlatformKey) => void;
};

export const OriginalPlatformSelectV2: React.FC<Props> = (props) => {

  const onChangeSelection = useCallback(
    (selection: string) => {
      props.onChange(selection as OriginalPlatformKey);
    },
    []
  );

  return (
    <Select.Root onValueChange={onChangeSelection}>
      <Select.Trigger className="SelectTrigger" aria-label="Food">
        <Select.Value placeholder="Select a device" />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            {Object.keys(originalPlatforms).map((platformKey) => (
              <SelectItem className='SelectItem' key={platformKey} value={platformKey}>
                {originalPlatforms[platformKey as keyof typeof originalPlatforms].label}
              </SelectItem>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
