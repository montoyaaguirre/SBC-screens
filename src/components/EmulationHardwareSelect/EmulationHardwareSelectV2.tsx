import React, { useCallback } from 'react';
import {
  SBCKey,
  sbcDevices,
} from '../../data/emulationHardware';

import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './styles.css';
import { SelectItem } from './SelectItem';

type Props = {
  default: SBCKey;
  onChange: (key: SBCKey) => void;
};

export const EmulationHardwareSelectV2: React.FC<Props> = (props) => {

  const onChangeSelection = useCallback(
    (selection: string) => {
      props.onChange(selection as SBCKey);
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
            {Object.keys(sbcDevices).map((platformKey) => (
              <SelectItem className='SelectItem' key={platformKey} value={platformKey}>
                {sbcDevices[platformKey as keyof typeof sbcDevices].label}
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
