import React, { useState, useEffect } from "react";
import "./Search.scss";

interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchUsers = async (query: string) => {
    if (!query.trim()) {
      setUsers([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setUsers(data.items || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      searchUsers(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="searchhh">
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type then hit enter to search..."
          className="search-input"
        />
      </div>
      <div className="loadingSearch">
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && users.length === 0 && query !== "" && !error && (
          <p className="no-results">No users found.</p>
        )}
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar_url} alt={user.login} className="avatar" />
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="user-name"
              >
                {user.login}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
