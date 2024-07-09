// Import the mongoose library
import mongoose from 'mongoose';

// Define the review schema
const reviewSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Assuming each review is associated with a user
  pictures: [{ type: String }], // Array of strings representing photo URLs for the review
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who created the review
});

// Create a mongoose model named 'Review' based on the defined review schema
export const reviewModel = mongoose.model('Review', reviewSchema);

