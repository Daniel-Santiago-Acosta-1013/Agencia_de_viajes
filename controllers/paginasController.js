import {Viaje} from '../models/Viaje.js'

const paginaInicio = (req, res) => { 
    res.render('inicio', {
        pagina: 'Inicio'
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

const PaginaTestimoniales = (req, res) => {
    res.render('testimoniales',{ 
        pagina: 'Testimoniales'
    });
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