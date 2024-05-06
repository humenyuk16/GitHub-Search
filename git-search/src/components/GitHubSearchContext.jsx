import { createContext, useState } from "react";

export const GithubSearchContext = createContext();

export const GithubSearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = () => {
    setIsLoading(true);
    setError(null);

    fetch(`https://api.github.com/search/users?q=${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setSearchResult(data.items);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <GithubSearchContext.Provider
      value={{
        query,
        setQuery,
        searchResult,
        isLoading,
        error,
        fetchUsers,
      }}
    >
      {children}
    </GithubSearchContext.Provider>
  );
};
