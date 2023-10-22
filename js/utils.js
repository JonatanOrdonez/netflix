export const getMovies = async () => {
    const response = await fetch('https://raw.githubusercontent.com/JonatanOrdonez/netflix/main/data.json');
    const movies = await response.json();
    return movies;
}

export class Pelicula {
    id = "";
    titulo = "";
    image = "";

    constructor(id, titulo, image) {
        this.id = id;
        this.titulo = titulo;
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