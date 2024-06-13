import { SBC } from "./emulationHardware";

export type PowkiddySBCKey = 'rgb30' | 'rgb20sx' | 'rgb20s' | 'rgb10max3';

export const powkiddyDevices: Record<
    PowkiddySBCKey,
    SBC
> = {
    rgb30: {
        label: 'RGB30',
        diagonalScreenSize: 400,
        resolution: { horizontal: 720, vertical: 720 },
        brand: 'POWKIDDY',
    },
    rgb20sx: {
        label: 'RGB20SX',
        diagonalScreenSize: 400,
        resolution: { horizontal: 720, vertical: 720 },
        brand: 'POWKIDDY',
    },
    rgb20s: {
        label: 'RGB20S',
        diagonalScreenSize: 350,
        resolution: { horizontal: 640, vertical: 480 },
        brand: 'POWKIDDY',
    },
    rgb10max3: {
        label: 'RGB10MAX3',
        diagonalScreenSize: 500,
        resolution: { horizontal: 854, vertical: 480 },
        brand: 'POWKIDDY',
    },
}