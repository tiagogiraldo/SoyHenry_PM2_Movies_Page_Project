const getMovies = require('./handler')

getMovies()



/* 
================================
El siguiente código es cuando está tdodo en el index.js
*/
/* const moviesContainer = document.getElementById("image-container")

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
    
    
    moviesContainer.appendChild(cardMovie);
}

$.get("https://students-api.up.railway.app/movies", (tempData) =>  tempData.forEach(renderMovie));

 */


/* 
=========================================
El siguiente código es con clases, pero por algún motivo no funcionó con
el back, por eso hice la versión de Auri.
*/


/* 
class Movie {
  constructor(title, year, director, duration, genre, rate, poster) {
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

class Repository {
  constructor() {
    this.movies = [];
  }
  createMovie({title, year, director, duration, genre, rate, poster}) {
    const newMovie = new Movie(title, year, director, duration, genre, rate, poster);
    this.movies.push(newMovie);
  }
  getAllMovies() {
    return this.movies;
    
  }
}

const repo = new Repository();
const imageContainer = document.getElementById("image-container");

const mapMovie = (movie) => {
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

  return cardMovie;
};

const renderMovies = () => {
  const containerMovies = document.getElementById("image-container");
  containerMovies.innerHTML = "";
  const movies = repo.getAllMovies();
  const allMovies = movies.map(mapMovie);
  allMovies.forEach((card) => containerMovies.appendChild(card));
};

const addMovies = () => {
  $.get("https://students-api.up.railway.app/movies", (tempData) => {
    tempData.forEach((movie) => {
      repo.createMovie(movie);
    });
    renderMovies();
  });
};

window.addEventListener("DOMContentLoaded", addMovies); */


/* class Movie {
  constructor(title, year, director, duration, genre, rate, poster) {
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

class Repository {
  constructor() {
    this.movies = [];
  }
  createMovie({ title, year, director, duration, genre, rate, poster }) {
    const newMovie = new Movie(title, year, director, duration, genre, rate, poster);
    this.movies.push(newMovie);
  }
  getAllMovies() {
    return this.movies;
    
  }
}

const repo = new Repository();
const imageContainer = document.getElementById("image-container");

const mapMovie = (movie) => {
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

  return cardMovie;
};

const renderMovies = () => {
  const containerMovies = document.getElementById("image-container");
  containerMovies.innerHTML = "";
  const movies = repo.getAllMovies();
  const allMovies = movies.map(mapMovie);
  allMovies.forEach((card) => containerMovies.appendChild(card));
};

const addMovies = () => {
  $.get("https://students-api.2.us-1.fl0.io/movies", (tempData) => {
    tempData.forEach((movie) => {
      repo.createMovie(movie);
    });
    renderMovies();
  });
};

window.addEventListener("DOMContentLoaded", addMovies); */
/* ================  NOTAS PARA RECORDAR ===================== */

/* Para que se ejecutaran las imagenes era necesario empaquetar
  Toda el dom en una función, esto es para que en el momento de
  crear el bundle.  Sin la función el dom trata de correr antes
  de tiempo al inicio y no al final.  Al empaquetarlo en una función
  lo que se logra es corra en el momento final y así cargar las imagenes
  En este caso (y funciona) se hizo con jquery
*/
/* 
const repo = new Repository();
const imageContainer = document.getElementById("image-container");

const mapMovie = (movie) => {
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

  return cardMovie;
};

const renderMovies = () => {
  const containerMovies = document.getElementById("image-container");
  containerMovies.innerHTML = "";
  const movies = repo.getAllMovies();
  const allMovies = movies.map(mapMovie);
  allMovies.forEach((card) => containerMovies.appendChild(card));
};

const addMovies = () => {
  $.get("https://students-api.up.railway.app/movies", (tempData) => {
    tempData.forEach((movie) => {
      repo.createMovie(movie);
    });
    renderMovies();
  });
};

window.addEventListener("DOMContentLoaded", addMovies); */


/* Por la modulización que hizo Auri, y lo que estaba pidiendo Jorgito.
Me tocó deprecar este código (El código acá queda más limpio):

const { Movie, Repository} = require("./movieRep")



document.addEventListener("DOMContentLoaded", function() {
  const repo = new Repository();
  const imageContainer = document.getElementById("image-container");

  const mapMovie = (movie) => {
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

    return cardMovie;
  };

  const renderMovies = () => {
    const containerMovies = document.getElementById("image-container");
    containerMovies.innerHTML = "";
    const movies = repo.getAllMovies();
    const allMovies = movies.map(mapMovie);
    allMovies.forEach((card) => containerMovies.appendChild(card));
  };

  const addMovies = () => {
    $.get("https://students-api.up.railway.app/movies", (tempData) => {
      tempData.forEach((movie) => {
        repo.createMovie(movie);
      });
      renderMovies();
    });
  };

  window.addEventListener("DOMContentLoaded", addMovies);
});*/
