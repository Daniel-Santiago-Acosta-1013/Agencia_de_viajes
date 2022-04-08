import {Viaje} from '../models/Viaje.js'
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async(req, res) => { 

    // Consultar 3 Viajes del modelo viaje

    try {
        const viajes = await Viaje.findAll({ limit: 3});

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes
        });

    } catch (error) {
        console.log(error);
    }

    res.render('inicio', {
        pagina: 'Inicio',
        clase: 'home'
    });
}

const PaginaNosotros = (req, res) => {
    res.render('nosotros',{ 
        pagina: 'Nosotros'
    });
}

const PaginaViajes = async (req, res) => {
    // Consultar DB
    const viajes = await Viaje.findAll();

    res.render('viajes', { 
        pagina: 'Proximos viajes',
        viajes,
    });
}

const PaginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales',{ 
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }

}

// Muestra un viaje por su slug 
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;
    
    try {
        const viaje = await Viaje.findOne( { where: { slug } });

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.error(error);
    }
}

export {
    paginaInicio,
    PaginaNosotros,
    PaginaViajes,
    PaginaTestimoniales,
    paginaDetalleViaje
}