const Router = require("express")
const moviesController = require("../controllers/moviesController")

const moviesRouter = Router()

moviesRouter.get('/', moviesController.getMovies)
moviesRouter.post('/', moviesController.createMovie)

module.exports = moviesRouter;