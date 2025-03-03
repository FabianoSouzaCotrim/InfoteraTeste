import { useState, useEffect } from "react";
import { fetchSuggestions } from "../api/api";

interface Suggestion {
  id: number;
  name: string;
  region: string;
  type: string;
}

export default function SuggestionsSelector() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (inputValue.trim()) {
        getSuggestions(inputValue);
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue]);

  const getSuggestions = async (value: string) => {
    try {
      const data = await fetchSuggestions();
      const filteredSuggestions = data
        .filter((suggestion: Suggestion) =>
          suggestion.name.toLowerCase().startsWith(value.toLowerCase())
        )
        .slice(0, 4);
      setSuggestions(filteredSuggestions);
    } catch (error) {
      console.error("Erro ao buscar sugestões:", error);
    }
  };

  return (
    <div className="relative w-full z-50">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        className="w-full outline-none border-none p-2 border font-bold rounded text-xm"
      />
      {showSuggestions && suggestions.length > 0 && (
        <div className="relative">
          <div className="absolute left-2 top-6 w-4 h-4 bg-white rotate-45 shadow-md"></div>
          <ul className="absolute bg-white shadow-lg rounded-xl w-full mt-7">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                className="flex items-center gap-2 p-2 hover:bg-gray cursor-pointer"
                onMouseDown={() => setInputValue(suggestion.name)}
              >
                <img src="/images/home/location.svg" alt="" />
                <div>
                  <p className="font-bold">{suggestion.name}</p>
                  <p className="text-lightgray text-sm">{suggestion.region}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}