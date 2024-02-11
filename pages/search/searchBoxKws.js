import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import axios from 'axios'
import _ from 'lodash'

export default function Search() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query) => `https://ofccode-api-git-main-sportybruh1990.vercel.app/api/front/kws__by__query?q=${query}`;

  // Debouncing function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedFetch = debounce((query) => {
    fetch(searchEndpoint(query))
      .then((res) => res.json())
      .then((res) => {
        // Check if the response is an array and has data
        if (Array.isArray(res.results) && res.results.length > 0) {
          // console.log(res.results);
          setResults(res.results);
        } else {
          console.warn('Response is not an array or does not contain data:', res);
          setResults([]); // Set an empty array or handle it in a way that suits your use case
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., show an error message to the user
        setResults([]); // Set an empty array or handle it in a way that suits your use case
      });
  }, 300); // Adjust the delay as needed

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      debouncedFetch(query); // Call the debounced fetch function
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
  },);

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
        placeholder="Type keyword + Coupons"
        type="text"
        value={query}
      />

      {active && results.length > 0 && (
        <ul className="results">
          {results.map(({ _id, keyword_slug, keyword }) => (
            <li className="result" key={_id}>
              <Link href="/[keyword_slug]" as={`/${keyword_slug}`}>
                <a>{highLight(keyword)}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
