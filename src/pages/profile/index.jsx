import { useContext } from "react";
import SessionContext from "../../context/SessionContext";
import FavoritesContext from "../../context/FavoritesContext";
import CardGame from "../../components/CardGame";

export default function ProfilePage() {
    const { session } = useContext(SessionContext);
    const { favorites } = useContext(FavoritesContext);

    return (
        <div className="container">
            <h1 className="mt-3 text-center">Ciao {session?.user.user_metadata.first_name}</h1>
            <div>
                <h4 className="mt-3 text-center">I Tuoi Giochi Preferiti:</h4>
                {favorites.length == 0 && <p>Non ci sono favoriti al momento...</p>}
                <div className="row" >
                    {favorites.map((game) => (
                        <div className="col-3 my-5" key={game.id} >
                            < CardGame
                                game={{
                                    id: game.game_id,
                                    name: game.game_name,
                                    genres: game.genres || [],
                                    released: game.released || '',
                                    background_image: game.game_image,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
