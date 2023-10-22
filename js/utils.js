export const getMovies = async () => {
    const response = await fetch('https://gist.githubusercontent.com/Urdzik/de477f8e3d7baf4366c9d797cfe63531/raw/38c6afa2937ef222323392cc34c8c8c77e02fc40/Movie.json');
    const movies = await response.json();
    return movies;
}

export class Pelicula {
    id = "";
    titulo = "";
    descripcion = "";
    image = "";

    constructor(id, titulo, descripcion, image) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.image = image;
    }

    render() {
        const div = document.createElement("div");
        div.classList.add("pelicula");

        const img = document.createElement("img");
        img.classList.add("pelicula__imagen");
        img.src = this.image;

        div.appendChild(img);

        return div;
    }
}