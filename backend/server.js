import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/index.js';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 2000;
const db = process.env.MONGODB_URI || 'mongodb://localhost/martfind';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(db);

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
    startServer();
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

app.use(cors());
app.use('/', router);

app.get('*', (req, res) => {
    res.send('Page note found');
});

const startServer = () => {
    app.listen(port, () => {
        console.log(`App is listening at http://localhost:${port}`);
    });
};




// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 2000;
// const DB = process.env.MONGODB_URI || 'mongodb://localhost/supermarket-test';

// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(DB)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
