import React from 'react';

import { originalPlatforms } from '../data/originalPlatforms';
import { sbcDevices } from '../data/emulationHardware';
import { calculateScreenPortionDimensions, scaleContentResolution } from './EmulatedScreen/helpers';
import { EmulatedScreen } from './EmulatedScreen/EmulatedScreen';
import { getScreenDimensions } from '../utils/screenDimensions';

type Props = {
  originalPlatformKey: keyof typeof originalPlatforms;
  deviceKey: keyof typeof sbcDevices;
  integerScaling: boolean
};

export const SBCScreen: React.FC<Props> = ({
  originalPlatformKey,
  deviceKey,
  integerScaling,
}) => {
  const originalPlatform = originalPlatforms[originalPlatformKey];
  const sbc = sbcDevices[deviceKey];

  const { sizeX: devX, sizeY: devY } = getScreenDimensions(
    sbc.diagonalScreenSize,
    sbc.resolution.horizontal,
    sbc.resolution.vertical
  );

  const { w, h } = scaleContentResolution(sbc.resolution.horizontal, sbc.resolution.vertical, originalPlatform.resolution.horizontal, originalPlatform.resolution.vertical, integerScaling);
  const { diagonal: sizeD, height: sizeY, width: sizeX } = calculateScreenPortionDimensions(sbc.resolution.horizontal, sbc.resolution.vertical, sbc.diagonalScreenSize, w, h);


  return (
    <div
      style={{
        backgroundColor: 'gray',
        width: devX,
        height: devY,
        display: 'flex',
      }}
    >
      <EmulatedScreen info={{ sizeX, sizeY, sizeD, areaScale: 0, resolutionScale: 0 }} originalPlatform={originalPlatform} />
    </div>
  );
};
