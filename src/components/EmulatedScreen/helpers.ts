// import { OriginalPlatform } from "../../data/originalPlatforms"
// import { getScreenArea } from "../../utils/screenArea"
// import { EmulationSettings, EmulatorContainer } from "./types"

// type Options = {
//     emulationSettings: EmulationSettings,
//     container: EmulatorContainer,
//     console: OriginalPlatform,
// }

export type EmulatedScreenInfo = {
    areaScale: number,
    sizeX: number,
    sizeY: number,
    sizeD: number,
    resolutionScale: number,
}

// const getMaxIntegerScale = (console: OriginalPlatform, container: EmulatorContainer) => {
//     const maxIntegerScaleFactorX = Math.floor(container.resolutionX / console.resolution.horizontal);
//     const maxIntegerScaleFactorY = Math.floor(container.resolutionY / console.resolution.vertical);

//     const maxIntegerScaleFactor = Math.min(maxIntegerScaleFactorX, maxIntegerScaleFactorY);

//     return maxIntegerScaleFactor;
// }


// export const getEmulatedScreenInfo = (options: Options): EmulatedScreenInfo => {
//     const { console: consoleInfo, emulationSettings, container } = options;

//     const maxIntegerScaleFactor = getMaxIntegerScale(consoleInfo, container);

//     const scaledResolution = { x: maxIntegerScaleFactor * consoleInfo.resolution.horizontal, y: maxIntegerScaleFactor * consoleInfo.resolution.vertical }

//     const sizeX = (scaledResolution.x / container.resolutionX) * container.sizeX;
//     const sizeY = (scaledResolution.y / container.resolutionY) * container.sizeY;
//     const sizeD = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2))
//     const area = sizeX * sizeY;

//     const originalPlatformArea = getScreenArea(consoleInfo.diagonalScreenSize ?? 0, consoleInfo.resolution.horizontal, consoleInfo.resolution.vertical);

//     console.log('sizeX', sizeX);
//     console.log('sizeY', sizeY);

//     return {
//         sizeX,
//         sizeY,
//         sizeD,
//         resolutionScale: maxIntegerScaleFactor,
//         areaScale: area / originalPlatformArea,
//     }

// }

// export function scaleContentResolution(
//     containerWidth: number,
//     containerHeight: number,
//     contentWidth: number,
//     contentHeight: number
// ): {w: number, h: number} {
//     // Calculate aspect ratios
//     const containerAspectRatio = containerWidth / containerHeight;
//     const contentAspectRatio = contentWidth / contentHeight;

//     // Determine the new dimensions of the content screen
//     let newWidth: number;
//     let newHeight: number;

//     if (contentAspectRatio > containerAspectRatio) {
//         // Content is wider relative to its height than the container
//         newWidth = containerWidth;
//         newHeight = Math.floor(containerWidth / contentAspectRatio);
//     } else {
//         // Content is taller relative to its width than the container
//         newHeight = containerHeight;
//         newWidth = Math.floor(containerHeight * contentAspectRatio);
//     }

//     return {w: newWidth, h: newHeight};
// }

// // Example usage:
// const containerResolution: [number, number] = [1920, 1080];
// const contentResolution: [number, number] = [2560, 1440];

// const newResolution = scaleContentResolution(
//     containerResolution[0],
//     containerResolution[1],
//     contentResolution[0],
//     contentResolution[1]
// );

export function scaleContentResolution(
    containerWidth: number,
    containerHeight: number,
    contentWidth: number,
    contentHeight: number,
    integerScaling: boolean,
): { w: number, h: number } {

    let scale: number;

    if (integerScaling) {
        // Calculate the maximum integer scale factor that fits within the container
        const widthScale = Math.floor(containerWidth / contentWidth);
        const heightScale = Math.floor(containerHeight / contentHeight);
        scale = Math.min(widthScale, heightScale);
    } else {
        // Calculate the non-integer scale factor
        const widthScale = containerWidth / contentWidth;
        const heightScale = containerHeight / contentHeight;
        scale = Math.min(widthScale, heightScale);
    }

    // Calculate the new dimensions
    const newWidth = Math.floor(contentWidth * scale);
    const newHeight = Math.floor(contentHeight * scale);

    return { w: newWidth, h: newHeight };
}

export function calculateScreenPortionDimensions(
    fullResW: number,
    fullResH: number,
    screenSize: number,
    partialResW: number,
    partialResH: number
): { width: number, height: number, diagonal: number } {
    // Calculate the diagonal resolution of the original screen
    const originalDiagonalResolution = Math.sqrt(fullResW ** 2 + fullResH ** 2);

    // Calculate the size of each pixel
    const pixelSize = screenSize / originalDiagonalResolution;

    // Calculate the width and height of the portion of the screen in physical units
    const portionWidthSize = partialResW * pixelSize;
    const portionHeightSize = partialResH * pixelSize;

    // Calculate the diagonal of the portion of the screen in physical units
    const portionDiagonalSize = Math.sqrt(portionWidthSize ** 2 + portionHeightSize ** 2);

    return {
        width: portionWidthSize,
        height: portionHeightSize,
        diagonal: portionDiagonalSize
    };
}