import CardGame from "../../components/CardGame";
import useFetchSolution from "../../hook/useFetchSolution";

export default function HomePage() {

    const initialUrl = `https://api.rawg.io/api/games?key=19dbfbcb505b4038806d26436003cab8&dates=2024-01-01,2024-12-31&page=1`;

    const { data, error } = useFetchSolution(initialUrl);

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