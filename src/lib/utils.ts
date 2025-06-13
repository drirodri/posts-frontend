// Utility functions for Material UI usage

/**
 * Combines multiple sx objects for Material UI components
 * Usage: const combinedSx = combineSx(baseSx, conditionalSx, overrideSx);
 */
export function combineSx(
  ...sxObjects: Array<Record<string, unknown> | undefined>
) {
  return sxObjects.filter(Boolean).reduce((acc, sx) => ({ ...acc, ...sx }), {});
}

/**
 * Conditional sx object - returns sx object only if condition is true
 * Usage: const sx = conditionalSx(isError, { color: 'error.main' });
 */
export function conditionalSx(condition: boolean, sx: Record<string, unknown>) {
  return condition ? sx : {};
}
