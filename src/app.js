import express from 'express'
import morgan from 'morgan'
import router from './routes/router.js'
import cors from 'cors'; // 1. Import CORS
import { logger } from './utils/logger.js';

const app = express();

// 2. Configure CORS to only allow your specific frontend URL/IP
const corsOptions = {
    origin: ['http://localhost:3000', 'https://my-portfolio.com'], // Add your allowed URLs here
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // Allow cookies/tokens to be sent
};

app.use(cors(corsOptions)); // Apply it!

app.use(morgan('dev'));
app.use(express.json())

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/api",router)
export default app