import { reviewModel } from '../models'; // Import the Review model

export const reviewSupermarket = async (req, res) => {
    try {
        const { rating, comment, photos } = req.body; // Extract rating, comment, and photos from the request body

        // Create a new review object
        const newReview = new reviewModel({
            rating,
            comment,
            photos,
            user: req.user._id, // Assuming the user is authenticated and their ID is available in req.user._id
        });

        // Save the review to the database
        const savedReview = await newReview.save();

        return res.status(201).json({
            message: "Review created successfully",
            review: savedReview,
        });
    } catch (error) {
        console.error("Error creating review:", error.message);
        return res.status(500).json({
            code: "SERVER_ERROR",
            message: "Something went wrong, please try again",
        });
    }
};
