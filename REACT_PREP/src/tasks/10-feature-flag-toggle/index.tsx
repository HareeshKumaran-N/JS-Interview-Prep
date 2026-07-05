import type { ReactNode } from 'react';
import './styles.css';

interface FeatureFlagProps {
  flagKey: string;
  fallback?: ReactNode;
  children: ReactNode;
}

export default function FeatureFlag({ flagKey, fallback = null, children }: FeatureFlagProps) {
  // TODO: enabled state (boolean | null while loading)
  // TODO: useEffect(() => { fetchFeatureFlag(flagKey).then(...) }, [flagKey]) (see ./api.ts)
  // with a stale-response guard; render fallback while loading/disabled/errored

  return (
    <div className="feature-flag" data-flag={flagKey}>
      {fallback ?? children}
    </div>
  );
}
