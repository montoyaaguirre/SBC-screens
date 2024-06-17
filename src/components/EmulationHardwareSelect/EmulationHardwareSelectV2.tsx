import React, { useCallback } from 'react';
import {
  SBCKey,
  sbcDevices,
} from '../../data/emulationHardware';

import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './styles.css';

type Props = {
  default: SBCKey;
  onChange: (key: SBCKey) => void;
};

export const EmulationHardwareSelectV2: React.FC<Props> = (props) => {
  const onChangeSelection = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      props.onChange(event.target.value as SBCKey);
    },
    []
  );

  // <>
  //   <label htmlFor="console-select">Physical Device:</label>
  //   <select id="console-select" onChange={onChangeSelection}>
  //     {Object.keys(sbcDevices).map((platformKey) => (
  //       <option key={platformKey} value={platformKey}>
  //         {
  //           sbcDevices[platformKey as keyof typeof sbcDevices]
  //             .label
  //         }
  //       </option>
  //     ))}
  //   </select>
  // </>
  return (
    <Select.Root>
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
            <Select.Group>
              <Select.Label className="SelectLabel">Fruits</Select.Label>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </Select.Group>

            <Select.Separator className="SelectSeparator" />

            <Select.Group>
              <Select.Label className="SelectLabel">Vegetables</Select.Label>
              <SelectItem value="aubergine">Aubergine</SelectItem>
              <SelectItem value="broccoli">Broccoli</SelectItem>
              <SelectItem value="carrot" disabled>
                Carrot
              </SelectItem>
              <SelectItem value="courgette">Courgette</SelectItem>
              <SelectItem value="leek">Leek</SelectItem>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem: React.FC<Select.SelectItemProps> = ({children, ...props}) => {
  return (
    <Select.Item
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
};