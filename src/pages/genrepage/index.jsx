import { useParams } from "react-router";
import { useState, useEffect } from "react";
import CardGame from "../../components/CardGame";

export default function GenrePage() {

    const { genre } = useParams();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const initialUrl = `https://api.rawg.io/api/games?key=19dbfbcb505b4038806d26436003cab8&genres=${genre}&page=1`

    const load = async () => {
        try {
            const response = await fetch(initialUrl);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const json = await response.json();
            setData(json);
        } catch (error) {
            setError(error.message);
            setData(null);
        }
    };

    useEffect(() => {
        load();
    }, [genre]);

    return (
        <>
            <h2>Welcome to {genre} page</h2>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        {error && <article>{error}</article>}
                        {data &&
                            data.results.map((game) => <CardGame key={game.id} game={game} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )

}