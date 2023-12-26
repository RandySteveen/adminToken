"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes.ts
const express_1 = __importDefault(require("express"));
const AdminController_1 = require("../controllers/AdminController");
const router = express_1.default.Router();
router.get('/Controller', AdminController_1.getAdminPanel);
exports.default = router;
