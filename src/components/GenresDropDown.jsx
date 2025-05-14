import { Link } from "react-router";
import useFetchSolution from "../hook/useFetchSolution";

export default function GenresDropDown() {
    const initialUrl = "https://api.rawg.io/api/genres?key=19dbfbcb505b4038806d26436003cab8";
    const { data, error, loading } = useFetchSolution(initialUrl);

    return (
        <>
            <h1>Genres:</h1>
            <div>
                {loading && <li>Caricamento...</li>}
                {error && <li className="text-danger">Errore: {error}</li>}
                {data && data.results.map((genre) => (
                    <Link
                        key={genre.id}
                        to={`/games/${genre.slug}`}
                        className="btnCustom"
                        style={{ margin: "0.2rem", display: "inline-block" }}
                    >
                        {genre.name}
                    </Link>
                ))}
            </div>
        </>
    );
}

