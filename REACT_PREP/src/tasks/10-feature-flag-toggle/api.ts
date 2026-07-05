const MOCK_FLAGS: Record<string, boolean> = {
  'new-checkout': true,
  'dark-mode': false,
};

export function fetchFeatureFlag(flagKey: string): Promise<boolean> {
  const value = MOCK_FLAGS[flagKey] ?? false;
  return new Promise((resolve) => setTimeout(() => resolve(value), 300));
}
