(function () {
  const dataRestaurantes = {
    crepesWaffles: {
      nombre: "Crepes & Waffles",
      direccion: "Ciudad del Río, Medellín",
      descripcion: "Restaurante de comida ligera y postres, conocido por sus crepes dulces y salados, waffles y helados artesanales. Ideal para almorzar o tomar onces en un ambiente tranquilo.",
      horario: { apertura: 12, cierre: 22 },
      imagenes: ["IMG/crepes1.jpg"],
      menuLink: "https://www.crepesywaffles.com/menu/",
      platoRecomendado: {
        nombre: "Crepe de pollo al curry",
        descripcion: "Delicioso crepe relleno de pollo en salsa cremosa de curry acompañado de arroz y ensalada."
      }
    },
    montolivo: {
      nombre: "Montolivo",
      direccion: "Ciudad del Río, Medellín",
      descripcion: "Restaurante con una oferta mediterránea, especializado en platos italianos y pizzas artesanales.",
      horario: { apertura: 12, cierre: 23 },
      imagenes: ["IMG/montolivo1.jpg"],
      menuLink: "https://montolivorestaurante.com/carta-menu/",
      platoRecomendado: {
        nombre: "Pizza Montolivo",
        descripcion: "Pizza artesanal con aceitunas, queso mozzarella y tomate fresco."
      }
    },
    officeBurguer: {
      nombre: "Office Burguer",
      direccion: "Ciudad del Río, Medellín",
      descripcion: "Hamburguesas gourmet con ingredientes frescos y salsas caseras.",
      horario: { apertura: 11, cierre: 22 },
      imagenes: ["IMG/officeburguer1.jpg"],
      menuLink: "https://officeburger.com/carta/",
      platoRecomendado: {
        nombre: "Hamburguesa Office",
        descripcion: "Hamburguesa con doble carne, queso cheddar y tocino crispy."
      }
    },
    starbucks: {
      nombre: "Starbucks",
      direccion: "Ciudad del Río, Medellín",
      descripcion: "Cadena internacional de café con variedad de bebidas calientes y frías, además de snacks y postres.",
      horario: { apertura: 7, cierre: 21 },
      imagenes: ["IMG/starbucks1.jpg"],
      menuLink: "https://www.starbucks.com.co/carta",
      platoRecomendado: {
        nombre: "Caramel Macchiato",
        descripcion: "Café espresso con leche vaporizada y caramelo."
      }
    },
    sushiLigth: {
      nombre: "Sushi Ligth",
      direccion: "Ciudad del Río, Medellín",
      descripcion: "Restaurante especializado en sushi fresco con opciones saludables y creativas.",
      horario: { apertura: 12, cierre: 22 },
      imagenes: ["IMG/sushilight1.jpg"],
      menuLink: "https://sushilight.com/menu-digital/carta-sushi-sushi-light/",
      platoRecomendado: {
        nombre: "Roll Light",
        descripcion: "Roll con salmón, aguacate y arroz integral."
      }
    },
    elCafeMamm: {
      nombre: "El Café del MAMM",
      direccion: "Museo de Arte Moderno de Medellín, Ciudad del Río",
      descripcion: "Café con ambiente cultural, ideal para disfrutar un buen café y postres.",
      horario: { apertura: 9, cierre: 19 },
      imagenes: ["IMG/cafemamm1.jpg"],
      menuLink: null,
      platoRecomendado: {
        nombre: "Café de especialidad",
        descripcion: "Café de origen colombiano con métodos de preparación artesanal."
      }
    },
    fireHouse: {
      nombre: "Fire House",
      direccion: "Ciudad del Río, Medellín",
      descripcion: "Restaurante con parrilla y especialidades en carnes ahumadas y hamburguesas.",
      horario: { apertura: 12, cierre: 23 },
      imagenes: ["IMG/firehouse1.jpg"],
      menuLink: "https://www.firehouse.com.co/menu",
      platoRecomendado: {
        nombre: "Costillas BBQ",
        descripcion: "Costillas de cerdo bañadas en salsa BBQ casera."
      }
    },
    pigasus: {
      nombre: "Hay Pigasus",
      direccion: "Ciudad del Río, Medellín",
      descripcion: "Tienda y restaurante con productos gourmet y platos de inspiración internacional.",
      horario: { apertura: 10, cierre: 20 },
      imagenes: ["IMG/pigasus1.jpg"],
      menuLink: "https://pigasus.com.co/tienda-pigasus/",
      platoRecomendado: {
        nombre: "Tabla de quesos",
        descripcion: "Selección de quesos nacionales e importados con acompañamientos."
      }
    },
    parmessano: {
      nombre: "Hay Parmessano",
      direccion: "Ciudad del Río, Medellín",
      descripcion: "Especialistas en pastas y platos italianos con ingredientes frescos y artesanales.",
      horario: { apertura: 11, cierre: 22 },
      imagenes: ["IMG/parmessano1.jpg"],
      menuLink: "https://parmessano.com.co/menu/",
      platoRecomendado: {
        nombre: "Fettuccine Alfredo",
        descripcion: "Pasta fresca con salsa cremosa de queso parmesano."
      }
    },
    laChoripolleria: {
      nombre: "La Choripolleria",
      direccion: "Cerca del Subway, Ciudad del Río, Medellín",
      descripcion: "Restaurante especializado en choripanes y pollos a la parrilla con sabores caseros.",
      horario: { apertura: 11, cierre: 21 },
      imagenes: ["IMG/choripolleria1.jpg"],
      menuLink: "https://drive.google.com/file/d/1xU3B6fWtodZQpReOi4asItUGmYCTmlZ4/view",
      platoRecomendado: {
        nombre: "Choripán tradicional",
        descripcion: "Pan artesanal con chorizo argentino y chimichurri casero."
      }
    },
    elCorral: {
      nombre: "El Corral",
      direccion: "Ciudad del Río, Medellín",
      descripcion: "Cadena de hamburgueserías reconocida por sus hamburguesas clásicas y especiales.",
      horario: { apertura: 11, cierre: 22 },
      imagenes: ["IMG/elcorral1.jpg"],
      menuLink: "https://www.elcorral.com/pdf/EC_Menu_Digital_General.pdf",
      platoRecomendado: {
        nombre: "Hamburguesa El Corral",
        descripcion: "Hamburguesa con doble carne, queso cheddar, lechuga, tomate y salsa especial."
      }
    },
    muy: {
      nombre: "MUY",
      direccion: "Ciudad del Río, Medellín",
      descripcion: "Restaurante con propuesta contemporánea y platos creativos.",
      horario: { apertura: 12, cierre: 22 },
      imagenes: ["IMG/muy1.jpg"],
      menuLink: "https://www.restaurantemuy.com/menu",
      platoRecomendado: {
        nombre: "Pulpo a la parrilla",
        descripcion: "Pulpo marinado y asado, servido con papas rústicas y salsa especial."
      }
    }
  };

  function obtenerParametro(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
  }

  function verificarEstado(horario) {
    const ahora = new Date();
    const horaActual = ahora.getHours() + ahora.getMinutes() / 60;
    if (!horario || !horario.apertura || !horario.cierre) return '';
    if (horaActual >= horario.apertura && horaActual < horario.cierre) {
      return '<span style="color: green; font-weight: bold;">Abierto ahora</span>';
    } else {
      return '<span style="color: red; font-weight: bold;">Cerrado ahora</span>';
    }
  }

  const id = obtenerParametro("restaurante");
  const info = dataRestaurantes[id];
  const contenedor = document.getElementById("contenido");

  if (info) {
    contenedor.innerHTML = `
      <h1>${info.nombre}</h1>
      <p><strong>Dirección:</strong> ${info.direccion}</p>
      <p><strong>Horario:</strong> ${info.horario ? `${info.horario.apertura}:00 - ${info.horario.cierre}:00` : 'Horario no disponible'} - ${verificarEstado(info.horario)}</p>
      <p><strong>Descripción:</strong> ${info.descripcion}</p>
      <h2>Plato recomendado</h2>
      <p><strong>${info.platoRecomendado?.nombre || 'Consulta el menú'}</strong></p>
      <p>${info.platoRecomendado?.descripcion || ''}</p>
      ${info.imagenes.map(img => `<img src="${img}" alt="${info.nombre}" />`).join('')}
      <h2>Menú</h2>
      ${info.menuLink 
        ? `<p><a href="${info.menuLink}" target="_blank" class="btn-principal">Ver menú oficial</a></p>` 
        : `<p>Menú no disponible</p>`}
    `;
  } else {
    contenedor.innerHTML = "<p>Restaurante no encontrado.</p>";
  }
})();

