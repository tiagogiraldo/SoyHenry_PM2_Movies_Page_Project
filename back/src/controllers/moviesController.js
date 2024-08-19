const moviesService = require('../services/moviesService');


module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await moviesService.getMoviesService();
      console.log(movies.data)
      res.status(200).send(movies);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error retrieving movies' });
    }
  },
  createMovie:  async (req, res) =>{
    try{
      const {title, poster, year, director, duration, genre, rate} = req.body;
      const newMovie = await moviesService.createMovie({title, poster, year, director, duration, genre, rate});
      res.status(201).json(newMovie);
    } catch (error){
      console.error(error);
      res.status(400).send({ message: 'Bad request creating movie' });    
    }
  }
};

/* const moviesController = (req, res)=>{
    const movies = getMoviesService()
    res.status(200).send(movies)
}
 */

