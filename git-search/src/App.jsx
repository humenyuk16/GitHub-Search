import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import { GithubSearchProvider } from "./components/GitHubSearchContext";
import "./App.css";

const App = () => {
  return (
    <GithubSearchProvider>
      <div className="App">
        <h1>GitHub User Search</h1>
        <SearchInput />
        <SearchResult />
      </div>
    </GithubSearchProvider>
  );
};

export default App;
