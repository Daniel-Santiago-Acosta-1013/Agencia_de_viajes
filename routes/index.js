import express from "express";
import { 
    paginaInicio, 
    PaginaNosotros, 
    PaginaViajes, 
    PaginaTestimoniales, 
    paginaDetalleViaje 
} from "../controllers/paginasController.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', PaginaNosotros);

router.get('/viajes', PaginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', PaginaTestimoniales);

export default router