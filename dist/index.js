"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const route_1 = __importDefault(require("./Routes/route"));
const cors_1 = __importDefault(require("cors")); // Importa el módulo cors
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)()); // Habilita CORS para todas las rutas
app.use(express_1.default.json());
app.use('/', route_1.default);
(0, typeorm_1.createConnection)().then(() => {
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
});
