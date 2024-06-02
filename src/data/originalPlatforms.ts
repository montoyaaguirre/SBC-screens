export type OriginalPlatform = {
  label: string;
  diagonalScreenSize: number;
  resolution: {
    vertical: number;
    horizontal: number;
  };
};

export type OriginalPlatformKey = 'gb' | 'gba' | 'pokemonMini' | 'wonderSwan';

export const originialPlatforms: Record<OriginalPlatformKey, OriginalPlatform> =
  {
    gb: {
      label: 'Gameboy',
      diagonalScreenSize: 250,
      resolution: { horizontal: 160, vertical: 144 },
    },
    gba: {
      label: 'Gameboy Advance',
      diagonalScreenSize: 290,
      resolution: { horizontal: 240, vertical: 160 },
    },
    pokemonMini: {
      label: 'Pokemon Mini',
      diagonalScreenSize: 91,
      resolution: { horizontal: 96, vertical: 64 },
    },
    wonderSwan: {
      label: 'WonderSwan',
      diagonalScreenSize: 249,
      resolution: { horizontal: 224, vertical: 144 },
    },
  } as const;
