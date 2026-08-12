import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/todos', todoRoutes);
app.use(errorHandler);
connectDB();
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.error(`Failed to start server: `, error.message);
    }
}

startServer();