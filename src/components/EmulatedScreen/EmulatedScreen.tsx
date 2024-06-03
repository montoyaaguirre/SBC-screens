import React from "react";
import { EmulatedScreenInfo } from "./helpers";
import { OriginalPlatform } from "../../data/originalPlatforms";

type Props = {
    info: EmulatedScreenInfo
    originalPlatform: OriginalPlatform
}

export const EmulatedScreen: React.FC<Props> = ({info}) => {
    return <div
    style={{
      marginLeft: 'auto',
      margin: 'auto',
      backgroundColor: 'lightcoral',
      width: info.sizeX,
      height: info.sizeY,
    }}
  >
    <div>Resolution Scale: {info.resolutionScale}x</div>
    <div>At {(info.sizeD / 100).toFixed(2)} inches</div>
    <div>Area Scale: { info.areaScale.toFixed(2)}x</div>
  </div>
}