import { librariesGEOJSON } from "./entities.js";
import { territoriesStyle, getIcon } from "./styles.js";

var librariesMarkers = L.geoJSON(librariesGEOJSON, {
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
});
var littleton = L.marker([39.61, -105.02]).bindPopup("This is Littleton, CO."),
  denver = L.marker([39.74, -104.99]).bindPopup("This is Denver, CO."),
  aurora = L.marker([39.73, -104.8]).bindPopup("This is Aurora, CO."),
  golden = L.marker([39.77, -105.23]).bindPopup("This is Golden, CO.");

var citiesList = [littleton, denver, aurora, golden];

var cities = L.layerGroup(citiesList);

var libraries = L.layerGroup(librariesMarkers._layers);

console.log("citiesList", citiesList);
console.log("librariesMarkers", librariesMarkers._layers);

var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
});

var osmHOT = L.tileLayer(
  "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      "© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France",
  }
);

var map = L.map("map", {
  center: [39.73, -104.99],
  zoom: 10,
  layers: [osm, cities, libraries],
});

var baseMaps = {
  OpenStreetMap: osm,
  "OpenStreetMap.HOT": osmHOT,
};

var overlayMaps = {
  Cities: cities,
  Libraries: libraries,
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

var baseMaps = {
  OpenStreetMap: osm,
  "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT,
};

var crownHill = L.marker([39.75, -105.09]).bindPopup(
    "This is Crown Hill Park."
  ),
  rubyHill = L.marker([39.68, -105.0]).bindPopup("This is Ruby Hill Park.");

var parks = L.layerGroup([crownHill, rubyHill]);
var openTopoMap = L.tileLayer(
  "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      "Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)",
  }
);

layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
layerControl.addOverlay(parks, "Parks");

// Resources and geojson data
// import { upzGEOJSON } from "./upzGEOJSON.js";
// import { librariesGEOJSON } from "./entities.js";
// import { territoriesGEOJSON } from "./territories.js";
// import { territoriesStyle, getIcon } from "./styles.js";
// import { onLocationFound, onLocationError } from "./location.js";
// import { info } from "./info.js";
// import { legend } from "./legend.js";

// Setting map view
// var map = L.map("map").setView([4.572038, -74.129444], 14); //.fitWorld();

// Map layers
// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

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

// var upz = L.geoJson(upzGEOJSON, {
//   style: territoriesStyle,
//   attribution:
//     '&copy; <a href="https://fabiantobar.vercel.app/" target="_blank" rel="noopener noreferrer">' +
//     "Fabian Ricardo Tobar Numesqui</a>",
//   onEachFeature: onEachFeature,
// }).addTo(map);
// .on("click", onPoligonClick); // Moving popup

// Markers--------------------------------------------------------------------------------------
// var libraryMarkers = L.geoJSON(librariesGEOJSON, {
//   pointToLayer: function (feature, latlng) {
//     const markerIcon = getIcon(feature.properties.icon);
//     return L.marker(latlng, {
//       icon: markerIcon,
//       alt: `${feature.properties.alt}`,
//     }).bindPopup(`
//             ${feature.properties.popupContent}
//             <br/>
//             <a href="${feature.properties.webpage}" target="_blank">Visitar Web </a>
//         `);
//   },
// }).addTo(map);

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
// function highlightFeature(e) {
//   var layer = e.target;
//   layer.setStyle({
//     weight: 5,
//     color: "#666",
//     dashArray: "",
//     fillOpacity: 0.5,
//   });
//   layer.bringToFront();

//   // Update info custom control
//   info.update(layer.feature.properties);
// }
//mouseout
// function resetHighlight(e) {
//   var layer = e.target;
//   upz.resetStyle(layer);

//   // layer.feature.properties.name != "La Candelaria" ? layer.bringToBack() : null;

//   // Update info custom control
//   info.update();
// }
// //click listener that zooms to the feature
// function zoomToFeature(e) {
//   map.fitBounds(e.target.getBounds());
// }

//onEachFeature option to add the listeners on our layers:
// function onEachFeature(feature, layer) {
//   layer.on({
//     mouseover: highlightFeature,
//     mouseout: resetHighlight,
//     click: zoomToFeature,
//   });
// }

// // Custom info control------------------------------------------------------------------
// info.addTo(map);

// // Custom Legend control------------------------------------------------------------------

// legend.addTo(map);

// Location events
// map.locate({ setView: true, maxZoom: 13 });
// map.on("locationfound", (e) => onLocationFound(e, map));
// map.on("locationerror", onLocationError);

// // Click event function - moving popup
// const popup = L.popup({ alt: "current popup" })
//   .setLatLng([4.572038, -74.129444])
//   .setContent("[4.572038, -74.129444]");

// function onPoligonClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent("[" + e.latlng.lat + ", " + e.latlng.lng + "]")
//     .openOn(map);
// }
