import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBox.scss";

export const SearchBox = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type then hit enter to search..."
            />
            <button type="submit">search</button>
        </form>
    );
};
