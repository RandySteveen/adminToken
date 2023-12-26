// src/controllers/AdminController.ts
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { AdminPanel } from '../models/AdminPanel';

export const getAdminPanel = async (req: Request, res: Response) => {
  try {
    const adminPanelRepository = getRepository(AdminPanel);
    const adminPanelData = await adminPanelRepository.find();

    console.log('Datos de adminPanel:', adminPanelData);

    if (!adminPanelData || adminPanelData.length === 0) {
      console.log('No se encontraron datos en la base de datos.');
      return res.status(404).json({ error: 'No se encontraron datos en la base de datos.' });
    }

    const responseData = adminPanelData.map(item => ({
      nom_page: item.nom_page, // Usa un valor predeterminado si es null
      stat_admi: item.stat_admi,
    }));

    console.log('Datos obtenidos:', responseData);
    res.json(responseData);
  } catch (error) {
    console.error('Error al obtener datos de adminpanel:', error);
    res.status(500).json({ error: 'Error al obtener datos de adminpanel' });
  }
};