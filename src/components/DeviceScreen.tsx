import React from 'react';

import { originalPlatforms } from '../data/originalPlatforms';
import { sbcDevices } from '../data/emulationHardware';
import { getEmulatedScreenInfo } from './EmulatedScreen/helpers';
import { EmulatedScreen } from './EmulatedScreen/EmulatedScreen';
import { getScreenDimensions } from '../utils/screenDimensions';

// export const getScreenDimensions = (
//   diagonalSize: number,
//   resolutionX: number,
//   resolutionY: number
// ) => {
//   const sumOfSquares = Math.pow(resolutionX, 2) + Math.pow(resolutionY, 2);
//   const squaredDiagonal = Math.pow(diagonalSize, 2);

//   const k = Math.sqrt(squaredDiagonal / sumOfSquares);

//   const sizeX = resolutionX * k;
//   const sizeY = resolutionY * k;

//   return { sizeY, sizeX };
// };

type Props = {
  originalPlatformKey: keyof typeof originalPlatforms;
  deviceKey: keyof typeof sbcDevices;
};

export const SBCScreen: React.FC<Props> = ({
  originalPlatformKey,
  deviceKey,
}) => {
  const originalPlatform = originalPlatforms[originalPlatformKey];
  const sbc = sbcDevices[deviceKey];

  const { sizeX: devX, sizeY: devY } = getScreenDimensions(
    sbc.diagonalScreenSize,
    sbc.resolution.horizontal,
    sbc.resolution.vertical
  );

  // const { sizeX: consoleX, sizeY: consoleY } = getScreenDimensions(
  //   originalPlatform.diagonalScreenSize,
  //   originalPlatform.resolution.horizontal,
  //   originalPlatform.resolution.vertical
  // );

  const emulatedScreenInfo = getEmulatedScreenInfo({
    console: originalPlatform,
    container: {resolutionX: sbc.resolution.horizontal, resolutionY: sbc.resolution.vertical, sizeX: devX, sizeY: devY},
    emulationSettings: {
      integerScaling: true,
      overscan: false,
    }
  })

  return (
    <div
      style={{
        backgroundColor: 'gray',
        width: devX,
        height: devY,
        display: 'flex',
      }}
    >
      <EmulatedScreen info={emulatedScreenInfo} originalPlatform={originalPlatform}/>
    </div>
  );
};
