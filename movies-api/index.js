import dotenv from 'dotenv';
import express from 'express';
import './db';
// other imports
import cors from 'cors';
import usersRouter from './api/users';
import authenticate from './authenticate';
import moviesRouter from './api/movies';   
import reviewsRouter from './api/reviews';






dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if (process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};


const app = express();

const port = process.env.PORT;

// Enable CORS for all requests
app.use(cors());

app.use(express.json());

app.use('/api/movies', moviesRouter); 

app.use('/api/users', usersRouter);

app.use('/api/reviews', reviewsRouter);

app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});