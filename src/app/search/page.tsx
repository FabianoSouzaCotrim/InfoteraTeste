"use client";

import useSearchState from "../hooks/useSearchState";
import SearchBar from "../components/SearchBar";

const Search: React.FC = () => {
  const searchState = useSearchState();

  return (
    <div className="flex items-center p-60 min-h-screen flex-col">
      <SearchBar {...searchState} />
    </div>
    
  );
};

export default Search;
