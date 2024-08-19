const moviesContainer = document.getElementById("image-container")

function renderMovie(movie){
  const cardMovie = document.createElement("div");
  cardMovie.className = "card";
  cardMovie.innerHTML = `
    <a href=""><h4>${movie.title}</h4></a>
    <img src="${movie.poster}" alt="Movie poster"></img>
    <h4>Año: ${movie.year}</h4>
    <h4>Director: ${movie.director}</h4>
    <h4>Duración: ${movie.duration}</h4>
    <h4>Genero: ${movie.genre}</h4>
    <h4>Calificación: ${movie.rate}</h4>`;
    

    moviesContainer?.appendChild(cardMovie);
}

module.exports = renderMovie