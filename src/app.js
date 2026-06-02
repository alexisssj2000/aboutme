import express from 'express'
import morgan from 'morgan'
import router from './routes/router.js'
import cors from 'cors'; // 1. Import CORS
import { logger } from './utils/logger.js';

// 1. Importar los módulos nativos de Node.js
import path from 'path';
import { fileURLToPath } from 'url';

// 2. Recrear __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 2. Configure CORS to only allow your specific frontend URL/IP
const corsOptions = {
    origin: ['http://localhost:3000', 'https://alexisgallegos78.onrender.com/','https://alexisgaba.online/','https://alexisgaba.online/'], // Add your allowed URLs here
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // Allow cookies/tokens to be sent
};

app.use(cors(corsOptions)); // Apply it!
app.use('/uploads', express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));
app.use(express.json())

app.use("/api",router)
export default app