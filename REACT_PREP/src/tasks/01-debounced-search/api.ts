const PRODUCTS = [
  'iPhone 15',
  'iPhone 15 Pro',
  'Samsung Galaxy S24',
  'Samsung Galaxy Z Fold',
  'OnePlus 12',
  'Google Pixel 8',
  'Sony WH-1000XM5',
  'boAt Airdopes',
  'Dell XPS 13',
  'MacBook Air M3',
];

export function fetchResults(query: string): Promise<string[]> {
  console.log(query);
  const matches = PRODUCTS.filter((p) => p.toLowerCase().includes(query.toLowerCase()));
  return new Promise((resolve) => setTimeout(() => resolve(matches), 400));
}
