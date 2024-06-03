import { getScreenDimensions } from "./screenDimensions";

export const getScreenArea = (diagonalSize: number, resolutionX: number, resolutionY: number) => {
    const dimensions = getScreenDimensions(diagonalSize, resolutionX, resolutionY);
    
    return dimensions.sizeX * dimensions.sizeY;
}