import { useContext } from "react";
import { GithubSearchContext } from "./GitHubSearchContext";

const SearchResult = () => {
  const { searchResult, isLoading, error } = useContext(GithubSearchContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching: {error}</p>;
  }

  if (searchResult.length === 0) {
    return <p>No results...</p>;
  }

  return (
    <div className="searchResult-grid">
      {searchResult.map((user) => (
        <div key={user.id} className="user-info">
          <div className="user-img">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="round-image"
            />
          </div>
          <div>
            <h3>{user.login}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
