import express from "express";
import { 
    paginaInicio, 
    PaginaNosotros, 
    PaginaViajes, 
    PaginaTestimoniales, 
    paginaDetalleViaje 
} from "../controllers/paginasController.js";

import {
    guardarTestimonial
} from '../controllers/testimonialController.js'

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', PaginaNosotros);

router.get('/viajes', PaginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', PaginaTestimoniales);

router.post('/testimoniales', guardarTestimonial);

export default router