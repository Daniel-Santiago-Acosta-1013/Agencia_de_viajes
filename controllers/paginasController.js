
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

const PaginaViajes = (req, res) => {
    res.render('viajes',{ 
        pagina: 'Viajes'
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