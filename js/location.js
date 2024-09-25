// Adding a popup on user´s current location
export function onLocationFound(e, map) {
  var radius = e.accuracy;
  L.marker(e.latlng)
    .addTo(map)
    .bindPopup("Estás dentro de " + radius + "<br>metros desde este punto!") 
    .openPopup();
  L.circle(e.latlng, radius).addTo(map);
}

export function onLocationError(e) {
  alert(e.message);
}

