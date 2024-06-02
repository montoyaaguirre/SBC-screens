import { describe, expect, it } from 'vitest';
import { getScreenDimensions } from './DeviceScreen';

describe('Deviece Screen', () => {
  it('Something', () => {
    const { sizeX, sizeY } = getScreenDimensions(15.6, 9, 16);
    expect(Math.floor(sizeX)).toBe(7);
    expect(Math.floor(sizeY)).toBe(13);
  });
});
