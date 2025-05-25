//Create this file /api/review-api.js Frontend API helper functions
export const getMovieReviewsFromAPI = async (movieId) => {
    const response = await fetch(`http://localhost:8080/api/reviews/movie/${movieId}`);
    return response.json();
};

export const addReview = async (review) => {
    const response = await fetch('http://localhost:8080/api/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });
    return response.json();
};

export const getAllReviews = async () => {
    const response = await fetch('http://localhost:8080/api/reviews');
    return response.json();
};