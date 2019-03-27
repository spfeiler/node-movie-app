const express = require('express')
const uuidv1 = require('uuid/v1')
const router = express.Router()

let movies = []

router.get('/view-movies', (req, res) => {
  res.render('view-movies', {movies: movies})
})

router.get('/add-movies', (req, res) => {
  res.render('add-movies')
})

router.post('/add-movies', (req, res) => {
  let title = req.body.title
  let genre = req.body.genre
  let description = req.body.description
  let image = req.body.image

  let movie = {title: title, genre: genre, description: description, image: image, movieID: uuidv1()}
  movies.push(movie)
  res.redirect('/movies/view-movies')
})

router.post('/delete-movie', (req, res) => {
  console.log(req.body)
  let deleteMovie = req.body.id

  movies = movies.filter(function(movie) {

    return movie.movieID != deleteMovie
  })
  res.render('view-movies', {movies: movies})
})

// Still working on filtering by genre

// router.get('/movies/:genre', (req, res) => {
//   let genre = req.body.genre
//
//   let filteredMovies = movies.filter(function(movie) {
//     return movie.genre == genre
//   })
//   res.render('view-movies', {movies: filteredMovies})
// })

module.exports = router
