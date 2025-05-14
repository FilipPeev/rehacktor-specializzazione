import { useParams } from "react-router";
import useFetchSolution from "../../hook/useFetchSolution";
import ToggleFavourite from "../../components/ToggleFavourite";
import Chatbox from "../../components/Chatbox";
import { useState } from "react";

export default function GamePage() {
    const { id } = useParams();
    const [showMore, setShowMore] = useState(null);

    const initialUrl = `https://api.rawg.io/api/games/${id}?key=19dbfbcb505b4038806d26436003cab8`

    const { data } = useFetchSolution(initialUrl);

    // console.log(data);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 mt-3">
                        <img src={data && data.background_image} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-12">
                        <h1 className="my-3 text-center">{data && data.name}</h1>
                        <p className=""> Release Date: {data && data.released}</p>
                        <p className="text-warning ">⭐Rating: {data && data.rating}</p>
                        <p>About:</p>
                        {data?.description_raw && (
                            <div>
                                <p>{showMore ? data.description_raw : `${data.description_raw.substring(0, 300)}...`}</p>
                                <button onClick={() => setShowMore(!showMore)} className="link">
                                    {showMore ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        )}
                        {data && <ToggleFavourite data={data} />}
                        <Chatbox data={data && data} />
                    </div>
                </div>
            </div>
        </>
    )
}