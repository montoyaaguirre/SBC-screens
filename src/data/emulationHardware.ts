type SBC = {
  label: string;
  diagonalScreenSize: number;
  resolution: {
    vertical: number;
    horizontal: number;
  };
  brand: string;
};

export type SBCKey = 'rgb30' | 'rg350m' | 'rp3p' | 'rgNano';

export const sbcDevices: Record<
  SBCKey,
  SBC
> = {
  rgb30: {
    label: 'RGB30',
    diagonalScreenSize: 400,
    resolution: { horizontal: 720, vertical: 720 },
    brand: 'POWKIDDY',
  },
  rg350m: {
    label: 'RG350M',
    diagonalScreenSize: 350,
    resolution: { horizontal: 640, vertical: 480 },
    brand: 'ANBERNIC',
  },
  rp3p: {
    label: 'Retroid Pocket 3+',
    diagonalScreenSize: 470,
    resolution: { horizontal: 1334, vertical: 750 },
    brand: 'Retroid',
  },
  rgNano: {
    label: 'RG Nano',
    diagonalScreenSize: 154,
    resolution: { horizontal: 240, vertical: 240 },
    brand: 'ANBERNIC',
  },
} as const;
