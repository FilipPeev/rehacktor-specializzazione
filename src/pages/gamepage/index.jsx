import { useParams } from "react-router";
import useFetchSolution from "../../hook/useFetchSolution";
import ToggleFavourite from "../../components/ToggleFavourite";


export default function GamePage() {
    const { id } = useParams();

    const initialUrl = `https://api.rawg.io/api/games/${id}?key=19dbfbcb505b4038806d26436003cab8`

    const { data, error } = useFetchSolution(initialUrl);

    return (
        <>
            {error && <h1>{error}</h1>}
            <div>
                <div>
                    <p>{data && data.released}</p>
                    <h1>{data && data.name}</h1>
                    <p>Rating: {data && data.rating}</p>
                    <p>About:</p>
                    <p>{data && data.description_raw}</p>
                    {data && <ToggleFavourite data={data} />}
                </div>
            </div>
            <div>
                <img src={data && data.background_image} alt="" className="img-fluid" />
            </div>
        </>
    )
}