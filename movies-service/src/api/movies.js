module.exports = (app, repository) => {

    app.get('/movies/premieres', async (req, res, next) => {
        const movies = repository.GetMoviesPremieres();
        if (!movies || !movies.length) 
            return res.sendStatus(404);

        res.json(movies);
    });

    app.get('/movies/:id', async (req, res, next) => {
        const movies = repository.GetMovieById(req.params.id);
        if (!movie) 
            return res.sendStatus(404);

        res.json(movie);
    });

    app.get('/movies', async (req, res, next) => {
        const movies = repository.GetAllMovies();
        if (!movies || !movies.length) 
            return res.sendStatus(404);

        res.json(movies);
    });    
}