"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminPanel = void 0;
const typeorm_1 = require("typeorm");
const AdminPanel_1 = require("../models/AdminPanel");
// src/controllers/AdminController.ts
const getAdminPanel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adminPanelRepository = (0, typeorm_1.getRepository)(AdminPanel_1.adminapp);
        const adminPanelData = yield adminPanelRepository.find();
        console.log('Datos de adminPanel:', adminPanelData);
        const mappedData = adminPanelData.map(item => ({
            nom_page: item.nom_page,
            stat_admi: item.stat_admi,
        }));
        res.json(mappedData);
    }
    catch (error) {
        console.error('Error al obtener datos de adminpanel:', error);
        res.status(500).json({ error: 'Error al obtener datos de adminpanel' });
    }
});
exports.getAdminPanel = getAdminPanel;
