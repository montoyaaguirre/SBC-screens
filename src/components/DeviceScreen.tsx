import React from 'react';

import { originialPlatforms } from '../data/originalPlatforms';
import { emulationHardware } from '../data/emulationHardware';
import { getEmulatedScreenInfo } from './EmulatedScreen/helpers';

export const getScreenDimensions = (
  diagonalSize: number,
  resolutionX: number,
  resolutionY: number
) => {
  const sumOfSquares = Math.pow(resolutionX, 2) + Math.pow(resolutionY, 2);
  const squaredDiagonal = Math.pow(diagonalSize, 2);

  const k = Math.sqrt(squaredDiagonal / sumOfSquares);

  const sizeX = resolutionX * k;
  const sizeY = resolutionY * k;

  return { sizeY, sizeX };
};

type Props = {
  originalPlatformKey: keyof typeof originialPlatforms;
  deviceKey: keyof typeof emulationHardware;
};

export const DeviceScreen: React.FC<Props> = ({
  originalPlatformKey,
  deviceKey,
}) => {
  const originalPlatform = originialPlatforms[originalPlatformKey];

  console.log(originalPlatform);

  const newDevice = emulationHardware[deviceKey];
  console.log(newDevice);

  const { sizeX: devX, sizeY: devY } = getScreenDimensions(
    newDevice.diagonalScreenSize,
    newDevice.resolution.horizontal,
    newDevice.resolution.vertical
  );

  // const { sizeX: consoleX, sizeY: consoleY } = getScreenDimensions(
  //   originalPlatform.diagonalScreenSize,
  //   originalPlatform.resolution.horizontal,
  //   originalPlatform.resolution.vertical
  // );

  const emulatedScreenInfo = getEmulatedScreenInfo({
    console: originalPlatform,
    container: {resolutionX: newDevice.resolution.horizontal, resolutionY: newDevice.resolution.vertical, sizeX: devX, sizeY: devY},
    emulationSettings: {
      intergerScalling: true,
      overscan: false,
    }
  })

  console.log(emulatedScreenInfo);

  return (
    <div
      style={{
        backgroundColor: 'gray',
        width: devX,
        height: devY,
        display: 'flex',
      }}
    >
      <div
        style={{
          marginLeft: 'auto',
          margin: 'auto',
          backgroundColor: 'lightcoral',
          width: emulatedScreenInfo.sizeX,
          height: emulatedScreenInfo.sizeY,
        }}
      />
    </div>
  );
};
