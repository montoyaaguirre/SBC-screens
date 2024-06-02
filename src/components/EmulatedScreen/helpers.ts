import { OriginalPlatform } from "../../data/originalPlatforms"
import { EmulationSettings, EmulatorContainer } from "./types"

type Options = {
    emulationSettings: EmulationSettings,
    container: EmulatorContainer,
    console: OriginalPlatform,
}

export type EmulatedScreenInfo = {
    areaScale: number,
    sizeX: number,
    sizeY: number,
    resolutionScale: number,
}

const getMaxIntegerScale = (console:OriginalPlatform, container: EmulatorContainer ) => {
    const maxIntegerScaleFactorX = Math.floor( container.resolutionX / console.resolution.horizontal);
    const maxIntegerScaleFactorY = Math.floor( container.resolutionY / console.resolution.vertical);

    const maxIntegerScaleFactor = Math.min(maxIntegerScaleFactorX, maxIntegerScaleFactorY);

    return maxIntegerScaleFactor;
}


export const getEmulatedScreenInfo = (options: Options): EmulatedScreenInfo => {
    const {  console: consoleInfo, emulationSettings, container } = options;

    const maxIntegerScaleFactor = getMaxIntegerScale(consoleInfo, container);

    const scaledResolution = {x: maxIntegerScaleFactor * consoleInfo.resolution.horizontal, y: maxIntegerScaleFactor * consoleInfo.resolution.vertical}
    
    return {
        resolutionScale: maxIntegerScaleFactor,
        sizeX: (scaledResolution.x / container.resolutionX) * container.sizeX,
        sizeY: (scaledResolution.y / container.resolutionY) * container.sizeY,
        areaScale: 0
    }

}