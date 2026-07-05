import { useEffect, useRef, useState } from 'react';
import './styles.css';
import { fetchResults } from './api';

const RenderResults = ({ loading, result }: { loading: boolean, result: [''] }) => {
  if (loading) return <div className='search__status'>Loading...!</div>
  if (!result.length) return <div className='no-search__results'>No Results</div>

  if (result.length)
    return <ul className="search__results">
      {
        result.map((product: string) => <div className='search__result-item'>{product}</div>)
      }
    </ul>
}


export default function DebouncedSearch() {
  // TODO: query state, results state, loading state
  const [query, setQuery] = useState('');
  const [result, setResults] = useState(['']);
  const [loading, setLoading] = useState(false);
  const prevCallID = useRef<number | null>(null)



  // TODO: debounce fetchResults(query) (see ./api.ts) by ~300-500ms after the last keystroke
  const deBouncer = (query: string) => {
    if (prevCallID.current) { clearTimeout(prevCallID.current); console.log('cleareing prev request', prevCallID.current) }
    prevCallID.current = setTimeout(async () => {
      setQuery(query)
    }, 500)

  }

  const getResults = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetchResults(query);
      setResults(response);

    } catch (error) {
      console.log('Error on fetching', error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getResults(query);

    return ()=> clearTimeout(prevCallID.current)
    
  }, [query])


  // TODO: guard against stale/out-of-order responses





  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Search products..." onChange={(e) => deBouncer(e.target.value)
        // setQuery(e.target.value)
      } />
      <RenderResults result={result} loading={loading} />
    </div>
  );
}
