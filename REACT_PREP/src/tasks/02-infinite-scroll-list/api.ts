export function fetchPage(page: number): Promise<{ items: string[]; hasMore: boolean }> {
  const pageSize = 10;
  const totalPages = 5;
  const items = Array.from(
    { length: pageSize },
    (_, i) => `Item ${(page - 1) * pageSize + i + 1}`,
  );
  return new Promise((resolve) =>
    setTimeout(() => resolve({ items, hasMore: page < totalPages }), 400),
  );
}
