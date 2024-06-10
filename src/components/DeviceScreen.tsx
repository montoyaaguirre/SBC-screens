import React from 'react';

import { originalPlatforms } from '../data/originalPlatforms';
import { sbcDevices } from '../data/emulationHardware';
import { calculateScreenPortionDimensions, scaleContentResolution } from './EmulatedScreen/helpers';
import { EmulatedScreen } from './EmulatedScreen/EmulatedScreen';
import { getScreenDimensions } from '../utils/screenDimensions';
import { getScreenArea } from '../utils/screenArea';

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
  const originalPlatformArea = getScreenArea(originalPlatform.diagonalScreenSize ?? 0, originalPlatform.resolution.horizontal, originalPlatform.resolution.vertical);
  const contentArea = sizeX * sizeY;

  const resolutionScale = w / originalPlatform.resolution.horizontal;

  return (
    <div
      style={{
        backgroundColor: 'black',
        width: devX,
        height: devY,
        display: 'flex',
      }}
    >
      <EmulatedScreen info={{ sizeX, sizeY, sizeD, areaScale: contentArea / originalPlatformArea, resolutionScale: resolutionScale }} originalPlatform={originalPlatform} />
    </div>
  );
};
