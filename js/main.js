import { leftPolygon, rightPolygon, tunjuelitoPolygon } from "./polygons.js";
import { churchIcon, libraryIcon, parkIcon } from "./icons.js";
import { entities } from "./points.js";

// Setting map view
var map = L.map('map').fitWorld();//.setView([4.572038, -74.129444], 14);
map.locate({ setView: true, maxZoom: 13 });


// Map layers
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
leftPolygon.addTo(map)
// .bindPopup("no - Tunjuelito.");
rightPolygon.addTo(map)
// .bindPopup("no - Tunjuelito.");
tunjuelitoPolygon.addTo(map)
// .bindPopup("Tunjuelito.");

// Markers
// var selectedPoint = L.marker([4.572038, -74.129444]).addTo(map)
//     .bindPopup(`[4.572038, -74.129444]`);
// // alert("You clicked the map at " + e.latlng);

var popup = L.popup()
    .setLatLng([4.572038, -74.129444])
    .setContent("[4.572038, -74.129444]");

entities.forEach((entity) => {
    const markerIcon = getIcon(entity.icon);
    L.marker(entity.location, { icon: markerIcon }).addTo(map)
        .bindPopup(`
            ${entity.popup_msg}
            <br/>
            <a href="${entity.webpage}" target="_blank">Visitar Web </a>
        `);
});

// Adding a popup on user´s current location
function onLocationFound(e) {
    var radius = e.accuracy;
    L.marker(e.latlng).addTo(map)
        .bindPopup("Estas dentro de " + radius + " metros desde este punto!").openPopup();
    L.circle(e.latlng, radius).addTo(map);
}
map.on('locationfound', onLocationFound);
function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);

// Click event function - moving popup
function onLeftPoligonClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
leftPolygon.on('click', onLeftPoligonClick);


// Get ico function - choising properly icon
function getIcon(iconName) {
    switch (iconName) {
        case 'library-icon':
            return libraryIcon;
        case 'park-icon':
            return parkIcon;
        case 'church-icon':
            return churchIcon;
        default:
            return libraryIcon;
    }
}

