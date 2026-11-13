function CharacterList({ characters }) {
  if (!characters || characters.length === 0) {
    return <p>No characters found. Try a different search term.</p>;
  }

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.name} className="mb-2">
          {character.name}
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
