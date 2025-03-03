"use client";
import useSearchState from "../hooks/useSearchState";
import SearchBar from "../components/SearchBar";
import HotelList from "../components/HotelList";

const Search: React.FC = () => {
  const searchState = useSearchState();

  return (
    <div className="flex items-center mt-24 min-h-screen flex-col">
      <SearchBar {...searchState} />
      <HotelList/>
    </div>
    
  );
};

export default Search;
