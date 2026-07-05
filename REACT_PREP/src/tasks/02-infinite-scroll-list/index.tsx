import './styles.css';

export default function InfiniteScrollList() {
  // TODO: items state, page state, loading state, hasMore state
  // TODO: IntersectionObserver watching the sentinel div below; on intersect,
  // fetch the next page via fetchPage (see ./api.ts)
  // TODO: guard against firing overlapping fetches while one is already in flight

  return (
    <div className="feed">
      <ul className="feed__list">
        {/* TODO: render items */}
      </ul>
      <div className="feed__sentinel" />
      {/* TODO: loading / end-of-list / error states */}
    </div>
  );
}
