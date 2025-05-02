import { useState, useEffect } from "react";
import CardGame from "../../components/CardGame";

export default function HomePage() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const initialUrl = `https://api.rawg.io/api/games?key=19dbfbcb505b4038806d26436003cab8&dates=2024-01-01,2024-12-31&page=1`;

    const load = async () => {
        try {
            const response = await fetch(initialUrl);
            if (!response.ok) {
                throw new Error(response.statusText);
            };
            const json = await response.json();
            setData(json);
        } catch (error) {
            setError(error.message);
            setData(null);
        }
    }

    useEffect(() => {
        load();
    }, []);

    return (
        <>

            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-12 d-flex justify-content-center text-light  ">
                        <h1 className="fs-1 pt-5">Home Page</h1>
                    </div>
                    {error && <article>{error}</article>}
                    {data && data.results.map((game) => (
                        <div className="col-3" key={game.id}>
                            <CardGame game={game} />
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}