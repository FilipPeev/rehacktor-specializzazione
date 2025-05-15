import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import supabase from '../supabase/supabase-client';
import SessionContext from "../context/SessionContext";
import FavoritesContext from "../context/FavoritesContext";

export default function ToggleFavourite({ data }) {
    const { session } = useContext(SessionContext);
    const { favorites, setFavorites } = useContext(FavoritesContext);

    const isFavorite = () => favorites.find((el) => +el.game_id === data.id);

    const addFavourites = async (game) => {
        if (!session || !session.user) {
            alert("Devi essere loggato per poter aggiungere nei preferiti!");
            return;
        }

        const { data: inserted, error } = await supabase
            .from("favorites")
            .insert([
                {
                    user_id: session.user.id,
                    game_id: game.id,
                    game_name: game.name,
                    game_image: game.background_image,
                    released: game.released,
                },
            ])
            .select();

        if (error) {
            alert(error.message);
        } else {
            setFavorites((prev) => [...prev, ...inserted]);
        }
    };

    const removeFavorite = async (game) => {
        const { error } = await supabase
            .from("favorites")
            .delete()
            .eq("game_id", game.id)
            .eq("user_id", session.user.id);

        if (error) {
            alert(error.message);
        } else {
            setFavorites((prev) =>
                prev.filter(
                    (el) => el.game_id !== game.id
                )
            );
        }
    };

    return (
        <div>
            {isFavorite() ? (
                <button onClick={() => removeFavorite(data)} className="unfavButton">
                    Rimuovi dai preferiti <FaHeart />
                </button>
            ) : (
                <button onClick={() => addFavourites(data)} className="favButton">
                    Aggiungi ai preferiti <FaRegHeart />
                </button>
            )}
        </div>
    );
}
