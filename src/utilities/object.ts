export function getNestedValue(obj: Record<string, unknown>, key: string) {
  // Replace brackets with dot notation and remove the closing brackets
  const keys = key.replace(/\[(\d+)\]/g, ".$1").split(".");
  return keys.reduce((o, i) => (o && o[i] !== undefined ? o[i] : undefined), obj);
}
