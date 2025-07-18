import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchResults.scss";

const PIXABAY_API_KEY = "50055590-a5193ccf86c2ee23d64595ed3";

export const SearchResults = () => {
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get("q") || "";
        setQuery(q);

        if (!q) return;

        setLoading(true);

        fetch(
            `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(
                q
            )}&image_type=photo`
        )
            .then((res) => res.json())
            .then((data) => {
                setResults(data.hits || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [location.search]);

    return (
        <div>
            {/* <h2>نتایج برای: "{query}"</h2> */}
            {loading ? (
                <p>Loading...</p>
            ) : results.length > 0 ? (
                <div className="image-gallery">
                    {results.map((item) => (
                        <div key={item.id} className="image-item">
                            <img src={item.webformatURL} alt={item.tags} />
                            <p>{item.tags}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};
