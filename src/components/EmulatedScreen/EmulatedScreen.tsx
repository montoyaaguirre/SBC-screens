import React from "react";
import { EmulatedScreenInfo } from "./helpers";
import { OriginalPlatform } from "../../data/originalPlatforms";

type Props = {
  info: EmulatedScreenInfo
  originalPlatform: OriginalPlatform
}

export const EmulatedScreen: React.FC<Props> = ({ info }) => {
  const displayArea = info.areaScale !== Infinity;

  return <div
    style={{
      marginLeft: 'auto',
      margin: 'auto',
      backgroundColor: '#004643',
      width: info.sizeX,
      height: info.sizeY,
      color: '#abd1c6',
      textAlign: 'end',
    }}
  >
    <div style={{ margin: '8px' }}>
      <div>
        Diagonal: {(info.sizeD / 100).toFixed(2)}″
      </div>
      <div>Resolution: {info.resolutionScale.toFixed(2)}x</div>
      {displayArea && <div>Area: {info.areaScale.toFixed(2)}x</div>}
    </div>
  </div>
}