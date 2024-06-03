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