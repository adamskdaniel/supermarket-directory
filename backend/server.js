import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB = process.env.MONGODB_URI || 'mongodb://localhost/supermarket-test';

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(DB)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
