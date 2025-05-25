// Create this file: movies-api/api/reviews/reviewModel.js

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  movieId: { 
    type: Number, 
    required: true 
  },
  movieTitle: { 
    type: String, 
    required: true 
  },
  author: { 
    type: String, 
    required: true 
  },
  content: { 
    type: String, 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true,
    min: 1,
    max: 5
  },
  dateCreated: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model('Review', ReviewSchema);