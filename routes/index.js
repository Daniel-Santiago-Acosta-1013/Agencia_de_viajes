import express from "express";
import { paginaInicio, PaginaNosotros, PaginaViajes, PaginaTestimoniales } from "../controllers/paginasController.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', PaginaNosotros);

router.get('/viajes', PaginaViajes);

router.get('/testimoniales', PaginaTestimoniales);

export default router