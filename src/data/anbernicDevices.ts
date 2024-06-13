import { SBC } from "./emulationHardware";

type AnbernicSBCKey = 'rgCube' | 'rg35xxsp' | 'rg28xx' | 'rg556';

export const anbernicDevices: Record<
    AnbernicSBCKey,
    SBC
> = {
    rgCube: {
        label: 'RG Cube',
        diagonalScreenSize: 395,
        resolution: { horizontal: 720, vertical: 720 },
        brand: 'ANBERNIC',
    },
    rg35xxsp: {
        label: 'RG35XXSP',
        diagonalScreenSize: 350,
        resolution: { horizontal: 640, vertical: 480 },
        brand: 'ANBERNIC',
    },
    rg28xx: {
        label: 'RG28XX',
        diagonalScreenSize: 283,
        resolution: { horizontal: 640, vertical: 480 },
        brand: 'ANBERNIC',
    },
    rg556: {
        label: 'RG548',
        diagonalScreenSize: 548,
        resolution: { horizontal: 1920, vertical: 1080 },
        brand: 'ANBERNIC',
    },
}