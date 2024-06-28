import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CharacterList from "./CharacterList";
import { fetchStarWarsCharacters } from "../../utils/api";

function StarWars() {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchStarWarsCharacters(searchTerm);
        console.log(
          "components/StarWars/StarWars.js: StarWars(), data" +
            JSON.stringify(data),
        );
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching Star Wars characters:", error);
        setError("Failed to fetch characters. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    if (searchTerm) {
      fetchCharacters();
    }
  }, [searchTerm]); // Re-run effect when searchTerm changes

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="starwars-container">
      <h2>Star Wars Characters</h2>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <p>Loading characters...</p>}
      {error && <p className="error-message">{error}</p>}
      {characters.length > 0 && <CharacterList characters={characters} />}
    </div>
  );
}

export default StarWars;
