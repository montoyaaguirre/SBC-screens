type EmulationHardware = {
  label: string;
  diagonalScreenSize: number;
  resolution: {
    vertical: number;
    horizontal: number;
  };
  brand: string;
};

export type EmulationHardwareKey = 'rgb30' | 'rg350m' | 'rp3p';

export const emulationHardware: Record<
  EmulationHardwareKey,
  EmulationHardware
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
} as const;
