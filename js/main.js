// Resources and geojson data
import { upzGEOJSON } from "./upzGEOJSON.js";
import { librariesGEOJSON } from "./entities.js";
// import { territoriesGEOJSON } from "./territories.js";
import { territoriesStyle, getIcon } from "./styles.js";
import { onLocationFound, onLocationError } from "./location.js";
import { info } from "./info.js";
import { legend } from "./legend.js";

// Setting map view
var map = L.map("map").setView([4.572038, -74.129444], 12); //.fitWorld();

// Map layers
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// My territories layers---------------------------------------------------------------------------

//Localidades
// var territories = L.geoJson(territoriesGEOJSON, {
//   style: territoriesStyle,
//   attribution:
//     '&copy; <a href="https://fabiantobar.vercel.app/" target="_blank" rel="noopener noreferrer">' +
//     "Fabian Ricardo Tobar Numesqui</a>",
//   onEachFeature: onEachFeature,
// }).addTo(map);
// // .on("click", onPoligonClick); // Moving popup

//UPZ

var upz = L.geoJson(upzGEOJSON, {
  style: territoriesStyle,
  attribution:
    '&copy; <a href="https://fabiantobar.vercel.app/" target="_blank" rel="noopener noreferrer">' +
    "Fabian Ricardo Tobar Numesqui</a>",
  onEachFeature: onEachFeature,
}).addTo(map);
// .on("click", onPoligonClick); // Moving popup

// Markers--------------------------------------------------------------------------------------
var libraryMarkers = L.geoJSON(librariesGEOJSON, {
  pointToLayer: function (feature, latlng) {
    const markerIcon = getIcon(feature.properties.icon);
    return L.marker(latlng, {
      icon: markerIcon,
      alt: `${feature.properties.alt}`,
    }).bindPopup(`
            ${feature.properties.popupContent}
            <br/>
            <a href="${feature.properties.webpage}" target="_blank">Visitar Web </a>
        `);
  },
}).addTo(map);

//Adding layer's interactions------------------------------------------------------------------
//Localidades
// //mouseover
// function highlightFeature(e) {
//   var layer = e.target;
//   // console.log(layer.feature.properties.name)
//   layer.setStyle({
//     weight: 5,
//     color: "#666",
//     dashArray: "",
//     fillOpacity: 0.7,
//   });
//   layer.feature.properties.name != "Santafe" ? layer.bringToFront() : null;

//   // Update info custom control
//   info.update(layer.feature.properties);
// }
// //mouseout
// function resetHighlight(e) {
//   var layer = e.target;
//   territories.resetStyle(layer);

//   layer.feature.properties.name != "La Candelaria" ? layer.bringToBack() : null;

//   // Update info custom control
//   info.update();
// }
// //click listener that zooms to the feature
// function zoomToFeature(e) {
//   map.fitBounds(e.target.getBounds());
// }

// //onEachFeature option to add the listeners on our layers:
// function onEachFeature(feature, layer) {
//   layer.on({
//     mouseover: highlightFeature,
//     mouseout: resetHighlight,
//     click: zoomToFeature,
//   });
// }

//UPZ

//mouseover
function highlightFeature(e) {
  var layer = e.target;
  layer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.5,
  });
  layer.bringToFront();

  // Update info custom control
  info.update(layer.feature.properties);
}
//mouseout
function resetHighlight(e) {
  var layer = e.target;
  upz.resetStyle(layer);

  // layer.feature.properties.name != "La Candelaria" ? layer.bringToBack() : null;

  // Update info custom control
  info.update();
}
//click listener that zooms to the feature
function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

//onEachFeature option to add the listeners on our layers:
function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature,
  });
}

// Custom info control------------------------------------------------------------------
info.addTo(map);

// Custom Legend control------------------------------------------------------------------

legend.addTo(map);

// Location events
map.locate({ setView: true, maxZoom: 11 });
map.on("locationfound", (e) => onLocationFound(e, map));
map.on("locationerror", onLocationError);

// Click event function - moving popup
const popup = L.popup({ alt: "current popup" })
  .setLatLng([4.572038, -74.129444])
  .setContent("[4.572038, -74.129444]");

function onPoligonClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("[" + e.latlng.lat + ", " + e.latlng.lng + "]")
    .openOn(map);
}
