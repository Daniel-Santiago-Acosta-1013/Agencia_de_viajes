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

    console.log(viajes)

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

export {
    paginaInicio,
    PaginaNosotros,
    PaginaViajes,
    PaginaTestimoniales
}