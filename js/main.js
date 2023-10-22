import {getMovies, Pelicula} from "./utils.js";

const render = async () => {
    const movies = await getMovies();

    const peliculasRecomendadas = [movies[0], movies[1], movies[2], movies[3]];
    const peliculasPopulares = [movies[4], movies[5], movies[7], movies[8]];

    const recomendadas = document.getElementById("recomendadas");
    const populares = document.getElementById("populares");

    for (const recomendad of peliculasRecomendadas) {
        const pelicula = new Pelicula(recomendad.imdbID, recomendad.Title, recomendad.Plot, recomendad.Poster);
        recomendadas.appendChild(pelicula.render());
    }

    for (const popular of peliculasPopulares) {
        const pelicula = new Pelicula(popular.imdbID, popular.Title, popular.Plot, popular.Poster);
        populares.appendChild(pelicula.render());
    }
}

window.onload = render;