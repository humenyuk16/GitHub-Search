import React, { useContext } from "react";
import { GithubSearchContext } from "./GitHubSearchContext";

const SearchInput = () => {
  const { query, setQuery, fetchUsers } = useContext(GithubSearchContext);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    fetchUsers();
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter search query"
        className="search-input"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchInput;
