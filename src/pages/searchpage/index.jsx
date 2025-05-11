import { useEffect } from "react";
import { useSearchParams } from "react-router";
import CardGame from "../../components/CardGame";
import useFetchSolution from "../../hook/useFetchSolution";

export default function SearchPage() {
    let [searchParams] = useSearchParams();
    const game = searchParams.get("query");

    const initialUrl = `https://api.rawg.io/api/games?key=19dbfbcb505b4038806d26436003cab8&search=${game}`

    const { loading, data, error, updateUrl } = useFetchSolution(initialUrl);

    useEffect(() => {
        updateUrl(initialUrl);
    }, [initialUrl, updateUrl]);

    return (
        <>
            <div className="container">
                <div className="row">

                    <h1 className="text-center my-3">Risultati per: {game}</h1>
                    {loading && <p>loading...</p>}
                    {error && <h1>{error}</h1>}

                    {data && data.results.map((game) =>
                        <div key={game.id} className="col-md-3 col-12 my-5">
                            <CardGame game={game} />
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}