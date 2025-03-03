"use client";

import useSearchState from "./hooks/useSearchState";
import SearchBar from "./components/SearchBar";

const HomePage: React.FC = () => {
  const searchState = useSearchState();

  return (
    <div className="flex items-center pt-56 flex-col w-full p-10">
      <h1 className="text-center font-poppins text-6xl font-semibold tracking-normal text-text mb-12">
        Os melhores <span className="text-primary">Hotéis</span> e {" "}
        <span className="text-primary">Destinos</span> <br /> para sua viagem
      </h1>
      <SearchBar {...searchState} />
    </div>
  );
};

export default HomePage;
