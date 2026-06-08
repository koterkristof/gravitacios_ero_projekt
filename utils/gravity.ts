export const G = 6.6743e-11;

// m1, m2 => kg
// r => meter
// return => Newton

export function calculateGravity(m1: number, m2: number, r: number): number {
  if (!Number.isFinite(m1) || !Number.isFinite(m2) || !Number.isFinite(r)) {
    return 0;
  }

  if (m1 <= 0 || m2 <= 0 || r <= 0) {
    return 0;
  }

  return (G * m1 * m2) / (r * r);
}
