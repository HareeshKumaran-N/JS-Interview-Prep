import { useEffect, useRef, useState } from 'react';
import './styles.css';
import { fetchPage } from './api';



export default function InfiniteScrollList() {
  // TODO: items state, page state, loading state, hasMore state
  const [items, setItems] = useState(['']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState<boolean | null>(null);
  const feedRef = useRef(null)

  // TODO: IntersectionObserver watching the sentinel div below; on intersect,

  // fetch the next page via fetchPage (see ./api.ts)

  useEffect(() => {
    const call = async () => {
      try {
        setLoading(true)
        const resp = await fetchPage(currentPage)
        if (resp) {
          setItems((prev) => [...prev, ...resp.items])
          setHasMore(resp.hasMore);
          setError(null)
        }
      }
      catch (err) {
        console.log('error on fetch', err)
        setError(err);
      }
      finally {
        setLoading(false);
      }
    }
    call();
  }, [currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(([elem]) => {

      // console.log(entry.isIntersecting); // true if in viewport
      if (hasMore && elem.isIntersecting) setCurrentPage((page) => page + 1)
    });

    if (feedRef.current) observer.observe(feedRef.current);

    return () => {
      if (feedRef.current) observer.unobserve(feedRef.current)
    }
  }, [hasMore])

  // TODO: guard against firing overlapping fetches while one is already in flight
  // console.log(feedRef.current);
  return (
    <div className="feed">
      <ul className="feed__list">
        {/* TODO: render items */}
        {
          items.map((item) => <div>
            {item}
          </div>)
        }
      </ul>
      <div className="feed__sentinel" ref={feedRef} />
      {/* TODO: loading / end-of-list / error states */}
      {loading && 'Loading....!'}
      {!hasMore && <p><i>End of list</i></p>}
      {error && error}
    </div>
  );
}
