const ciudadDelRio = [6.2246, -75.5741];
const map = L.map('map').setView(ciudadDelRio, 16);

// Mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Datos de restaurantes con imágenes
const dataRestaurantes = {
  crepesWaffles: {
    nombre: "Crepes & Waffles",
    imagenes: ["IMG/crepes1.jpg", "IMG/crepes2.jpg"]
  },
  montolivo: { nombre: "Montolivo", imagenes: ["IMG/montolivo1.jpg"] },
  officeBurguer: { nombre: "Office Burguer", imagenes: ["IMG/officeburguer1.jpg"] },
  starbucks: { nombre: "Starbucks", imagenes: ["IMG/starbucks1.jpg"] },
  sushiLigth: { nombre: "Sushi Ligth", imagenes: ["IMG/sushilight1.jpg"] },
  elCafeMamm: { nombre: "El Café del MAMM", imagenes: ["IMG/cafemamm1.jpg"] },
  fireHouse: { nombre: "Fire House", imagenes: ["IMG/firehouse1.jpg"] },
  pigasus: { nombre: "Hay Pigasus", imagenes: ["IMG/pigasus1.jpg"] },
  parmessano: { nombre: "Hay Parmessano", imagenes: ["IMG/parmessano1.jpg"] },
  laChoripolleria: { nombre: "La Choripolleria", imagenes: ["IMG/choripolleria1.jpg"] },
  elCorral: { nombre: "El Corral", imagenes: ["IMG/elcorral1.jpg"] },
  muy: { nombre: "MUY", imagenes: ["IMG/muy1.jpg"] }
};

// Lista con coordenadas
const restaurantes = [
  { id: "crepesWaffles", nombre: "Crepes & Waffles", coords: [6.2248, -75.5742] },
  { id: "montolivo", nombre: "Montolivo", coords: [6.2244, -75.5740] },
  { id: "officeBurguer", nombre: "Office Burguer", coords: [6.2247, -75.5737] },
  { id: "starbucks", nombre: "Starbucks", coords: [6.2245, -75.5745] },
  { id: "sushiLigth", nombre: "Sushi Ligth", coords: [6.2242, -75.5746] },
  { id: "elCafeMamm", nombre: "El Café del MAMM", coords: [6.2239, -75.5743] },
  { id: "fireHouse", nombre: "Fire House", coords: [6.2249, -75.5749] },
  { id: "pigasus", nombre: "Hay Pigasus", coords: [6.2253, -75.5741] },
  { id: "parmessano", nombre: "Hay Parmessano", coords: [6.2255, -75.5743] },
  { id: "laChoripolleria", nombre: "La Choripolleria", coords: [6.2240, -75.5732] },
  { id: "elCorral", nombre: "El Corral", coords: [6.2251, -75.5736] },
  { id: "muy", nombre: "MUY", coords: [6.2238, -75.5738] }
];

let marcadores = [];

// Mostrar marcadores en el mapa
function mostrarRestaurantes(lista) {
  marcadores.forEach(m => map.removeLayer(m));
  marcadores = [];

  lista.forEach(r => {
    const marker = L.marker(r.coords).addTo(map);
    marker.bindTooltip(r.nombre, { direction: "top" });

    marker.on("click", () => {
      window.location.href = `detalle.html?restaurante=${r.id}`;
    });

    marker.on("mouseover", (e) => {
      const info = dataRestaurantes[r.id];
      if (info?.imagenes?.length) {
        mostrarImagenTooltip(info.imagenes, e, info.nombre, r.id);
      }
    });

    marker.on("mouseout", () => {
      ocultarImagenTooltip();
    });

    marcadores.push(marker);
  });
}

// Buscador por nombre
const input = document.getElementById("buscador");
if (input) {
  input.addEventListener("input", () => {
    const texto = input.value.toLowerCase();
    const filtrados = restaurantes.filter(r =>
      r.nombre.toLowerCase().includes(texto)
    );
    mostrarRestaurantes(filtrados);
  });
}

// Tooltip dinámico
const tooltip = document.getElementById("preview-tooltip");
let intervaloImagenes = null;

function mostrarImagenTooltip(imagenes, e, nombre, id) {
  let index = 0;

  tooltip.innerHTML = `
    <a href="detalle.html?restaurante=${id}" class="tooltip-link">
      <div class="tooltip-overlay"><span>${nombre}</span></div>
      <img src="${imagenes[0]}" alt="${nombre}">
    </a>
  `;

  tooltip.style.left = (e.originalEvent.pageX + 20) + "px";
  tooltip.style.top = (e.originalEvent.pageY - 70) + "px";
  tooltip.style.display = "block";

  setTimeout(() => {
    tooltip.classList.add("visible");
  }, 10);

  intervaloImagenes = setInterval(() => {
    index = (index + 1) % imagenes.length;
    const img = tooltip.querySelector("img");
    if (img) img.src = imagenes[index];
  }, 2000);
}

function ocultarImagenTooltip() {
  tooltip.classList.remove("visible");
  clearInterval(intervaloImagenes);
  setTimeout(() => {
    tooltip.style.display = "none";
  }, 400);
}

// Mostrar todos los restaurantes al cargar
mostrarRestaurantes(restaurantes);
