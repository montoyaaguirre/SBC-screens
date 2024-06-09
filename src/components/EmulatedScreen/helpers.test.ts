import { describe, expect, it } from "vitest"
import { scaleContentResolution } from "./helpers";

describe('helpers', () => {
    it('scaleContentResolution', () => {
        const { w, h } = scaleContentResolution(640, 480, 240, 160, false)
        expect(w).toBe(640);
        expect(h).toBe(426);
    });

    it('scaleContentResolution with integer scaling', () => {
        const { w, h } = scaleContentResolution(640, 480, 240, 160, true)
        expect(w).toBe(240 * 2);
        expect(h).toBe(160 * 2);
    });
});