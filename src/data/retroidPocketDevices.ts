import { SBC } from "./emulationHardware";

export type RetroidPocketSBCKey = 'rp2s' | 'rp3+' | 'rp4pro';

export const retroidPocketDevices: Record<
    RetroidPocketSBCKey,
    SBC
> = {
    rp2s: {
        label: 'Retroid Pocket 2S',
        diagonalScreenSize: 350,
        resolution: { horizontal: 640, vertical: 480 },
        brand: 'Retroid Pocket',
    },
    'rp3+': {
        label: 'Retroid Pocket 3+',
        diagonalScreenSize: 470,
        resolution: { horizontal: 1334, vertical: 750 },
        brand: 'Retroid Pocket',
    },
    rp4pro: {
        label: 'Retroid Pocket 4 Pro',
        diagonalScreenSize: 470,
        resolution: { horizontal: 1334, vertical: 750 },
        brand: 'Retroid Pocket',
    },
}