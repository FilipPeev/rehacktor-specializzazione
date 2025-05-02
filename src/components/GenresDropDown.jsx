import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function GenresDropDown() {
    const [genres, setGenres] = useState(null);
    const [error, setError] = useState(null);

    const initialUrl = "https://api.rawg.io/api/genres?key=19dbfbcb505b4038806d26436003cab8";

    const load = async () => {
        try {
            const response = await fetch(initialUrl);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const json = await response.json();
            setGenres(json);
        } catch (error) {
            setError(error.message);
            setGenres(null);
        }
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <>
            <details className="dropdown">
                <summary>Genres</summary>
                <ul>
                    {error && <li className="text-danger">Errore: {error}</li>}
                    {genres && genres.results.map((genre) => (
                        <li key={genre.id}><Link to={`/games/${genre.slug}`}>{genre.name}</Link></li>
                    ))}
                </ul>
            </details>
        </>
    );
}
