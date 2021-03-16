import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import axios from 'axios'
import _ from 'lodash'

export default function Search() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query) => `https://ofccode-api-jd5rsee48-sportybruh1990.vercel.app/api/front/search/stores__by__query?q=${query}`;


  // console.log(searchEndpoint(query));
  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results);
          // console.log(res.results)
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
  

  const highLight = (keyword) => {
    keyword =  _.replace(keyword, query, '<span class="smallcaps">'+query+'</span>')
    return (<div dangerouslySetInnerHTML={{__html: keyword}}></div>);
  }
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
          {results.map(({ id, slug, formatted_name }) => (
            <li className="result" key={id}>
              <Link href="/store/[slug]" as={`/store/${slug}`}>
                <a>{highLight(formatted_name)}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
