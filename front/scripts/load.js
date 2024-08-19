const axios = require("axios")
const URL = "http://localhost:3000/movies"


const btnSubmit = document.getElementById("submit");
const btnReset = document.getElementById("reset")
function handlerSubmit(event){
  event.preventDefault()

  const titleInput = document.querySelector('#title');
  const posterInput = document.querySelector('#poster');
  const yearInput = document.querySelector('#year');
  const directorInput = document.querySelector('#director');
  const durationInput = document.querySelector('#duration');
  const genreInput = document.querySelector('#genre');
  const rateInput = document.querySelector('#rate');

  const maxYear = document.getElementById("year").max; 
  const minYear = document.getElementById("year").min; 

  const maxRate = parseFloat(rateInput.max); 
  const minRate = parseFloat(rateInput.min); 
/*   console.log(maxRate, minRate) */

  const minDuration = document.getElementById("duration").min; 

  if (![titleInput.value, yearInput.value, directorInput.value, durationInput.value, rateInput.value, posterInput.value, genreInput.value].every(Boolean)){
    alert("Faltan llenar campos el formato o está ingresando un texto en lugar de número.")
    return
  }  

  if (yearInput.value > maxYear){
    alert(`El año ingresado ${yearInput.value} es mayor que ${maxYear}, por favor ingrese un año menor a ${maxYear}`)
    return
  } else if (yearInput.value < minYear){
    alert(`El año ingresado ${yearInput.value} es menor que ${minYear}, por favor ingrese un año mayor o igual a ${minYear}`)
    return
  }

  if (durationInput.value < minDuration){
    alert(`La duración de la película ${durationInput.value} debe ser mayor  mayor que ${minDuration}, por favor ingrese una duración mayor a ${minDuration}`)
    return
  } 

  if (rateInput.value > maxRate){
    alert(`La calificación ingresada ${rateInput.value} es mayor que ${maxRate}, por favor ingrese una calificación menor a ${maxRate}`)
    return
  } else if (rateInput.value < minRate){
    alert(`La calificación ingresada ${rateInput.value} es menor que ${minRate}, por favor ingrese una calificación mayor a ${minRate}`)
    return
  }

  const movie = {
    title: titleInput.value,
    poster: posterInput.value,
    year: yearInput.value,
    director: directorInput.value,
    duration: durationInput.value,
    genre: genreInput.value.split(','),
    rate: rateInput.value,
  }
  
  console.log(movie)

  axios.post(URL, movie)
  .then(
    response => {console.log(response)}
  )
  .catch(
    error => {console.error(error)}
  );

  alert("Pelicula enviada")
}




function resetInput(){
  document.getElementById('title').value = '';
  document.getElementById('poster').value = '';
  document.getElementById('year').value = '';
  document.getElementById('director').value = '';
  document.getElementById('duration').value = '';
  document.getElementById('genre').value = '';
  document.getElementById('rate').value = '';
}


btnSubmit.addEventListener('click', handlerSubmit)
btnReset.addEventListener('click', resetInput)
