import express from 'express';
import morgan from 'morgan';
import router from './routes/router.js';
import cors from 'cors';
import { logger } from './utils/logger.js';
import path from 'path';
import { fileURLToPath } from 'url'; // 1. Importar fileURLToPath

const app = express();

// 2. Definir __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 3. Configurar CORS primero
const corsOptions = {
    origin: ['http://localhost:4200', 'https://alexisgallegos78.onrender.com', 'https://alexisgaba.online'], // Ajustado localhost a 4200 (Angular)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};

app.use(cors(corsOptions)); // Aplicar CORS antes de las rutas
app.use(morgan('dev'));
app.use(express.json());

// 4. Servir archivos estáticos (DESPUÉS de CORS y JSON)
// Esto expone: http://tu-api.com/uploads/certifi/foto.jpg
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api", router);

export default app;   