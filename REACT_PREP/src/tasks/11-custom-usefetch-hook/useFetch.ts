import { useEffect } from 'react';

export interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): UseFetchResult<T> {
  // TODO: data/loading/error state, e.g.
  // useState<UseFetchResult<T>>({ data: null, loading: true, error: null })

  useEffect(() => {
    // TODO: fetch `url` here, guard against stale responses via AbortController
  }, [url]);

  // TODO: return the actual state instead of this placeholder
  return { data: null, loading: false, error: null };
}
