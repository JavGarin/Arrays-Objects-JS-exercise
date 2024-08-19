const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Departamento acogedor cerca del parque central',
        src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Una departamento cómodo y acogedor cerca del parque principal de la ciudad.',
        ubicacion: '789 Park Lane, Green City, CA 34567',
        habitaciones: 4,
        costo: 1800,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Moderna casa en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHBoaWxpcHxlbnwwfHx8fDE2OTQwMzg2OTk&ixlib=rb-4.0.3&q=80&w=1080',
        descripcion: 'Esta moderna casa de 4 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Modern Street, Anytown, CA 91234',
        habitaciones: 4,
        costo: 4000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa familiar en zona tranquila',
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhvVXNlfGVufDB8fHx8MTY5NDAzODY5OQ&ixlib=rb-4.0.3&q=80&w=1080',
        descripcion: 'Esta casa familiar está ubicada en una zona tranquila, ideal para vivir en paz.',
        ubicacion: '456 Peaceful Lane, Suburbia, CA 56789',
        habitaciones: 6,
        costo: 3500,
        smoke: true,
        pets: true
    }
    
];

const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFwYXJ0bWVudG98ZW58MHx8fHwxNjk0MDM4Njk5&ixlib=rb-4.0.3&q=80&w=1080',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 500000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Motor home',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este Motor home acogedor está situado en lo alto de una montaña con impresionantes vistas.',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 35000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 12,
        costo: 800000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa familiar con gran jardín',
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhvVXNlfGVufDB8fHx8MTY5NDAzODY5OQ&ixlib=rb-4.0.3&q=80&w=1080',
        descripcion: 'Esta casa es perfecta para familias y tiene un gran jardín para los niños.',
        ubicacion: '321 Garden Street, Suburbia, CA 45678',
        habitaciones: 3,
        costo: 500000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa en la playa Bahía Inglesa con terraza',
        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHBoaWxpcHxlbnwwfHx8fDE2OTQwMzg2OTk&ixlib=rb-4.0.3&q=80&w=1080',
        descripcion: 'Esta casa de lujo ofrece una terraza panorámica con vistas al mar.',
        ubicacion: '222 Bahía Inglesa, Atacama, Chile',
        habitaciones: 5,
        costo: 900000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa alto Providencia',
        src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRlcGFydG1lbnRvfGVufDB8fHx8MTY5NDAzODY5OQ&ixlib=rb-4.0.3&q=80&w=1080',
        descripcion: 'Esta casa de lujo ofrece una vista panorámica a la cordillera de los Andes.',
        ubicacion: '4533 Calle Suecia, Providencia, Chile',
        habitaciones: 7,
        costo: 1000000,
        smoke: false,
        pets: true
    }
];


function cargarPropiedades(tipo) { // Este parámetro determina qué tipo de propiedades se cargarán en la página.
    let propiedades = [];
    if (tipo === 'alquiler') {
        propiedades = propiedades_alquiler;
    } else if (tipo === 'venta') {
        propiedades = propiedades_venta;
    }

    const contenedor = document.getElementById(tipo);
    if (!contenedor) return; // un mecanismo de seguridad para evitar errores si el contenedor no existe.

    propiedades.forEach((propiedad) => { // Se recorre cada objeto en el array propiedades usando forEach, que ejecuta una función para cada elemento.
        const { nombre, src, descripcion, ubicacion, habitaciones, costo, smoke, pets } = propiedad;
        const propiedadDiv = document.createElement('div');
        propiedadDiv.classList.add('col-md-6', 'col-lg-4', 'mb-4'); // Se agregan clases CSS

        propiedadDiv.innerHTML = `
            <div class="card">
                <img src="${src}" class="card-img-top" alt="${nombre}" />
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">${descripcion}</p>
                    <p><strong>Ubicación:</strong> ${ubicacion}</p>
                    <p><strong>Habitaciones:</strong> ${habitaciones}</p>
                    <p><strong>Costo:</strong> $${costo} ${tipo === 'alquiler' ? 'por mes' : ''}</p>
                    <p><strong>Permitido fumar:</strong> <span style="color: ${smoke ? 'green' : 'red'};">${smoke ? 'Sí' : 'No'}</span></p>
                    <p><strong>Mascotas permitidas:</strong> <span style="color: ${pets ? 'green' : 'red'};">${pets ? 'Sí' : 'No'}</span></p>
                    <button class="btn btn-primary"><i class="fa-solid fa-plus"></i> Más Información</button>
                </div>
            </div>
        `;
        contenedor.appendChild(propiedadDiv); 
        // contenedor.appendChild(propiedadDiv); el div recién creado (que representa una propiedad) se agrega al contenedor que se seleccionó previamente en el DOM.
    });
}

