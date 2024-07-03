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
      borderColor: '#BB86FC',
      borderWidth: '1px',
      width: info.sizeX,
      height: info.sizeY,
      color: '#BB86FC',
      textAlign: 'end',
      border: 'dashed',
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