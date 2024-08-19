const Movie = require("../models/Movie")


module.exports = {
    getMoviesService: async () => {
        try {
            const movies = await Movie.find();
            return movies;
        } catch (error) {
            console.error(error);
            throw error
        }
    },

    createMovie: async(movie)=>{
        try{
            const newMovie = await Movie.create(movie);
            return newMovie;
        }catch{
            console.error(error);
            throw error
        }
    }
}





/* 
module.exports = {
    getMoviesService: () =>{
        return moviesDB
    }
}
 */
