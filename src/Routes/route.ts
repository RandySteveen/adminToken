// src/routes.ts
import express from 'express';
import { getAdminPanel } from '../controllers/AdminController';

const router = express.Router();

router.get('/Controller', getAdminPanel);

export default router;