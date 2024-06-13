import { anbernicDevices } from "./anbernicDevices";
import { PowkiddySBCKey, powkiddyDevices } from "./powkiddyDevices";
import { RetroidPocketSBCKey, retroidPocketDevices } from "./retroidPocketDevices";

export type SBC = {
  label: string;
  diagonalScreenSize: number;
  resolution: {
    vertical: number;
    horizontal: number;
  };
  brand: string;
};

export type SBCKey = OtherSBCKey | AnbernicSBCKey | PowkiddySBCKey| RetroidPocketSBCKey;

type AnbernicSBCKey = 'rgCube' | 'rg35xxsp' | 'rg28xx' | 'rg556';


type AYNSBCKey = 'odin' | 'odin2' | 'odinLite' | 'odin2Mini';
type OtherSBCKey =  'ap' | 'ds' ;

export const sbcDevices: Record<
  SBCKey,
  SBC
> = {
  ...anbernicDevices,
  ...powkiddyDevices,
  ...retroidPocketDevices,
  ap: {
    label: 'Analogue Pocket',
    diagonalScreenSize: 350,
    resolution: { horizontal: 1600, vertical: 1440 },
    brand: 'Analogue',
  },
  ds: {
    label: 'DS Lite',
    diagonalScreenSize: 312,
    resolution: { horizontal: 256, vertical: 192 },
    brand: 'Nintendo',
  }
} as const;
