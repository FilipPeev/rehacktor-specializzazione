import { useParams } from "react-router";
import CardGame from "../../components/CardGame";
import useFetchSolution from "../../hook/useFetchSolution";

export default function GenrePage() {
    const { genre } = useParams();
    const initialUrl = `https://api.rawg.io/api/games?key=19dbfbcb505b4038806d26436003cab8&genres=${genre}&page=1`
    const { data, error, loading } = useFetchSolution(initialUrl);

    return (
        <div key={genre}>
            <h2 className="text-center mt-3">Welcome to the {genre} page</h2>
            <div className="container">
                <div className="row justify-content-center ">
                    {loading && <div className="text-center">Loading...</div>}
                    {error && <article>{error}</article>}
                    {data && data.results.length === 0 && (
                        <div className="text-center">Nessun gioco trovato per questo genere.</div>
                    )}
                    {data && data.results.length > 0 &&
                        data.results.map((game) =>
                            <div className="col-md-3 col-12 my-5" key={game.id}>
                                <CardGame game={game} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}