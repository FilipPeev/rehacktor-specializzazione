import { useParams } from "react-router";
import { useState, useEffect } from "react";


export default function GamePage() {
    const { id } = useParams();

    const [data, setdata] = useState(null);
    const [error, setError] = useState(null);

    const initialUrl = `https://api.rawg.io/api/games/${id}?key=19dbfbcb505b4038806d26436003cab8`

    const load = async () => {
        try {
            const response = await fetch(initialUrl);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const json = await response.json();
            setdata(json);
        } catch (error) {
            setError(error.message);
            setdata(null);
        }
    };

    useEffect(() => {
        load();
    }, [id]);

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
                </div>
            </div>
            <div>
                <img src={data && data.background_image} alt="" className="img-fluid" />
            </div>
        </>
    )
}