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
var territories = L.geoJson(territoriesGEOJSON, {
  style: territoriesStyle,
  attribution:
    '&copy; <a href="https://fabiantobar.vercel.app/" target="_blank" rel="noopener noreferrer">' +
    "Fabian Ricardo Tobar Numesqui</a>",
  onEachFeature: onEachFeature,
}).addTo(map);
// .on("click", onPoligonClick); // Moving popup

// Markers--------------------------------------------------------------------------------------
L.geoJSON(entitiesGEOJSON, {
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
//mouseover
function highlightFeature(e) {
  var layer = e.target;
  // console.log(layer.feature.properties.name)
  layer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.7,
  });
  layer.feature.properties.name != "Santafe" ? layer.bringToFront() : null;

  // Update info custom control
  info.update(layer.feature.properties);
}
//mouseout
function resetHighlight(e) {
  var layer = e.target;
  territories.resetStyle(layer);

  layer.feature.properties.name != "La Candelaria" ? layer.bringToBack() : null;

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

// Info custom control------------------------------------------------------------------
var info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
  this.update();
  return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
  this._div.innerHTML =
    "<h4>Entidades en tunjuelito</h4>" +
    (props
      ? "<b>" +
        props.name +
        "</b><br />" +
        props.density +
        " people / mi<sup>2</sup>"
      : "Pasa el mouse por una zona");
};

info.addTo(map);

// Location events
map.locate({ setView: true, maxZoom: 13 });
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
