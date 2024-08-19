const axios = require('axios')
const renderMovie = require('./renderMovies')
const URL = "http://localhost:3000/movies"


/* Async await */

const getMovies = async () =>{
  try{
    const {data} = await axios.get(URL)
    data.forEach(renderMovie)
  }catch(error){
    console.log(error.message);
  }
}

module.exports =  getMovies



/* Con promesas */


/* const getMovies = ()  => {
  axios.get(URL).then((response)=>{
    response.data.map(renderMovie)
  }).catch((error)=>alert(error.message))
}  */






/* const getMovies = ()  => {
  $.get(URL, (tempData) =>  tempData.forEach(renderMovie));
}
 */


/* 
const renderMovie = require("./renderMovies")
¡
URL = "https://students-api.up.railway.app/movies"


const getMovies = () => {
  $.get(URL, (tempData) => {
    tempData.forEach((movie) => {
      renderMovie(movie);
    });
  });
}


module.exports = {
  getMovies,
}
 */
