import {getMovies, Pelicula} from "./utils.js";

const render = async () => {
    const movies = await getMovies();

    const recomendadas = document.getElementById("recomendadas");
    const populares = document.getElementById("populares");

    for (const recomendad of movies.recomendadas) {
        const pelicula = new Pelicula(recomendad.id, recomendad.titulo, recomendad.poster);
        recomendadas.appendChild(pelicula.render());
    }

    for (const recomendad of movies.populares) {
        const pelicula = new Pelicula(recomendad.id, recomendad.titulo, recomendad.poster);
        populares.appendChild(pelicula.render());
    }
}

window.onload = render;