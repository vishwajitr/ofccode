import { useCallback, useRef, useState } from "react";
import Link from "next/link";

export default function Search() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query) => `/api/front/search?q=${query}`;

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results);
          console.log(results);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <div ref={searchRef} className="search__block">
      <input
        className="search"
        onChange={onChange}
        onFocus={onFocus}
        placeholder="Search Store"
        type="text"
        value={query}
      />
      {active && results.length > 0 && (
        <ul className="results">
          {results.map(({ id, slug, storeSlug, name }) => (
            <li className="result" key={id}>
              <Link href="/[storeSlug]" as={`/${slug}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
