import { useParams } from "react-router";
import CardGame from "../../components/CardGame";
import useFetchSolution from "../../hook/useFetchSolution";

export default function GenrePage() {

    const { genre } = useParams();

    const initialUrl = `https://api.rawg.io/api/games?key=19dbfbcb505b4038806d26436003cab8&genres=${genre}&page=1`

    const { data, error } = useFetchSolution(initialUrl);


    return (
        <>
            <h2 className="text-center mt-3">Welcome to the {genre} page</h2>
            <div className="container">
                <div className="row justify-content-center ">

                    {error && <article>{error}</article>}
                    {data &&
                        data.results.map((game) =>
                            <div className="col-md-3 col-12 my-5">
                                <CardGame key={game.id} game={game} />
                            </div>
                        )
                    }

                </div>
            </div>
        </>
    )

}