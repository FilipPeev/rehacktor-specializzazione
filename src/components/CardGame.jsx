import LazyLoadGameImage from "./LazyLoadGameImage";

export default function CardGame({ game }) {
    const genres = game.genres.map((genre) => genre.name).join(', ');

    const { background_image: image } = game;

    return (
        <a href={`/games/${game.slug}/${game.id}`}>
            <article key={game.id} className="cardCustom">
                <LazyLoadGameImage image={image || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'} />
                <h4 className="mt-4">{game.name}</h4>
                <small>{genres || "No Genres Associated"}</small>
                <p className="marginP">{game.released || "No Release Date Associated"}</p>
            </article>
        </a >
    );
};