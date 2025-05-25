//Create this file /api/reviews/index.js Express router with review endpoints
import express from 'express';
import Review from './reviewModel.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

// Get all reviews for a movie
router.get('/movie/:movieId', asyncHandler(async (req, res) => {
    const reviews = await Review.find({ movieId: req.params.movieId }).sort({ dateCreated: -1 }); // Newest first
    res.status(200).json(reviews);
}));

// Get all reviews
router.get('/', asyncHandler(async (req, res) => {
    const reviews = await Review.find().sort({ dateCreated: -1 });
    res.status(200).json(reviews);
}));

// Add a new review
router.post('/', asyncHandler(async (req, res) => {
    const { movieId, movieTitle, author, content, rating } = req.body;

    const review = new Review({
        movieId,
        movieTitle,
        author,
        content,
        rating
    });

    const savedReview = await review.save();
    res.status(201).json({ success: true, review: savedReview });
}));

export default router;