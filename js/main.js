// Resources and geojson data
import { entitiesGEOJSON } from "./entities.js";
import { territoriesGEOJSON } from "./territories.js";
import { territoriesStyle, getIcon } from "./styles.js";
import { onLocationFound, onLocationError } from "./location.js";

// Setting map view
var map = L.map("map").setView([4.572038, -74.129444], 14); //.fitWorld();

// Map layers
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// My territories layers
L.geoJson(territoriesGEOJSON, {
  style: territoriesStyle,
  attribution:
    '&copy; <a href="https://fabiantobar.vercel.app/" target="_blank" rel="noopener noreferrer">Fabian Ricardo Tobar Numesqui</a>',
})
  .addTo(map)
  .on("click", onPoligonClick);

// Markers
L.geoJSON(entitiesGEOJSON, {
  pointToLayer: function (feature, latlng) {
    const markerIcon = getIcon(feature.properties.icon);
    return L.marker(latlng, {
      icon: markerIcon,
      alt: `${feature.properties.alt}`,
    }).addTo(map).bindPopup(`
            ${feature.properties.popupContent}
            <br/>
            <a href="${feature.properties.webpage}" target="_blank">Visitar Web </a>
        `);
  },
}).addTo(map);

// Location events
map.locate({ setView: true, maxZoom: 13 });
map.on("locationfound", (e) => onLocationFound(e, map));
map.on("locationerror", onLocationError);

// Click event function - moving popup
var popup = L.popup({ alt: "current popup" })
  .setLatLng([4.572038, -74.129444])
  .setContent("[4.572038, -74.129444]");

function onPoligonClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}
