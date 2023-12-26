// src/index.ts
import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import router from './Routes/route';
import cors from 'cors'; // Importa el módulo cors

const app = express();
const port = 3000;

app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json());
app.use('/', router);

createConnection().then(() => {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
});