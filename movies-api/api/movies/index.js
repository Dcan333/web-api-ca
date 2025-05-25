//Modified - Added the 12 movie API endpoints
import express from 'express';
import asyncHandler from 'express-async-handler';
import {
    getMovies, 
    getUpcomingMovies, 
    getGenres, 
    getPopularMovies, 
    getTopRatedMovies, 
    getNowPlayingMovies,
    getMovieById,
    getMovieCredits,
    getSimilarMovies,
    getMovieRecommendations,
    getMovieReviews,
    getMovieImages
} from '../tmdb-api';


const router = express.Router();

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/popular', asyncHandler(async (req, res) => {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
}));

router.get('/top-rated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));

router.get('/now-playing', asyncHandler(async (req, res) => {
    const nowPlayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowPlayingMovies);
}));

router.get('/movie/:id', asyncHandler(async (req, res) => {
    const movie = await getMovieById(req.params.id);
    res.status(200).json(movie);
}));

router.get('/movie/:id/credits', asyncHandler(async (req, res) => {
    const credits = await getMovieCredits(req.params.id);
    res.status(200).json(credits);
}));

router.get('/movie/:id/similar', asyncHandler(async (req, res) => {
    const similar = await getSimilarMovies(req.params.id);
    res.status(200).json(similar);
}));

router.get('/movie/:id/recommendations', asyncHandler(async (req, res) => {
    const recommendations = await getMovieRecommendations(req.params.id);
    res.status(200).json(recommendations);
}));

router.get('/movie/:id/reviews', asyncHandler(async (req, res) => {
    const reviews = await getMovieReviews(req.params.id);
    res.status(200).json(reviews);
}));

router.get('/movie/:id/images', asyncHandler(async (req, res) => {
    const images = await getMovieImages(req.params.id);
    res.status(200).json(images);
}));


export default router;