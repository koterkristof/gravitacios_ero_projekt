const G = 6.6743e-11;

export function calculateGravity(
  m1: number,
  m2: number,
  r: number
): number {
  if (r <= 0) return 0;

  return (G * m1 * m2) / (r * r);
}