import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

//this allows to accept JSON data in the body to get the email and the password;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running now on nodemon');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

//Showing an error on a route that doesn't exist;
app.use(notFound);

//Showing an error on a product that doesn't exist and also doesn't match the id format;
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
