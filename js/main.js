import { tunjuelitoGeometry } from "./geometries.js";
import { entities } from "./points.js";
var map = L.map('map').setView([4.572038, -74.129444], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var polygon = L.polygon(tunjuelitoGeometry, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500,
    attribution: '&copy; <a href="https://fabiantobar.vercel.app/" target="_blank" rel="noopener noreferrer">Fabian Ricardo Tobar Numesqui</a>'
}).addTo(map);

var libraryIcon = L.icon({
    iconUrl: '/images/icons/library-icon.png',
    iconSize: [38, 38],
    iconAnchor: [15, 0],
    popupAnchor: [0, 0]
});

var parkIcon = L.icon({
    iconUrl: '/images/icons/park-icon.png',
    iconSize: [38, 38],
    iconAnchor: [15, 0],
    popupAnchor: [0, 0]
});

var churchIcon = L.icon({
    iconUrl: '/images/icons/church-icon.png',
    iconSize: [38, 38],
    iconAnchor: [15, 0],
    popupAnchor: [0, 0]
});


entities.forEach((entity) => {
    // Obtén el icono correcto basado en la propiedad icon
    const markerIcon = getIcon(entity.icon);

    L.marker(entity.location, { icon: markerIcon }).addTo(map)
        .bindPopup(`
            ${entity.popup_msg}
            <br/>
            <a href="${entity.webpage}" target="_blank">Visitar Web </a>
        `);
});

function getIcon(iconName) {
    switch (iconName) {
        case 'library-icon':
            return libraryIcon;
        case 'park-icon':
            return parkIcon;
        case 'church-icon':
            return churchIcon;
        default:
            // Puedes devolver un icono por defecto o manejar el caso de icono no encontrado
            return libraryIcon; // Ajusta según tu preferencia
    }
}

