import { OriginalPlatform } from "../../data/originalPlatforms"
import { getScreenArea } from "../../utils/screenArea"
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
    sizeD: number,
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
    
    const sizeX = (scaledResolution.x / container.resolutionX) * container.sizeX;
    const sizeY = (scaledResolution.y / container.resolutionY) * container.sizeY;
    const sizeD = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2))
    const area = sizeX * sizeY;

    const originalPlatformArea = getScreenArea(consoleInfo.diagonalScreenSize, consoleInfo.resolution.horizontal, consoleInfo.resolution.vertical);

    return {
        sizeX,
        sizeY,
        sizeD,
        resolutionScale: maxIntegerScaleFactor,
        areaScale: area / originalPlatformArea,
    }

}