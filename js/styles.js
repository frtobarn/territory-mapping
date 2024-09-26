import { churchIcon, libraryIcon, parkIcon, poolIcon } from "./icons.js";

// Applying color according to a property
export function getColorByDensity(d) {
  return d > 300
    ? "#800026"
    : d > 250
    ? "#BD0026"
    : d > 160
    ? "#E31A1C"
    : d > 80
    ? "#FC4E2A"
    : d > 40
    ? "#FD8D3C"
    : d > 20
    ? "#FEB24C"
    : d > 10
    ? "#FED976"
    : "#FFEDA0";
}

export function territoriesStyle(feature) {
  return {
    fillColor: getColorByDensity(feature.properties.densidad_urbana),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.8,
  };
}

// Get icon function - choising properly icon
export function getIcon(iconName) {
  switch (iconName) {
    case "library-icon":
      return libraryIcon;
    case "park-icon":
      return parkIcon;
    case "church-icon":
      return churchIcon;
    case "pool-icon":
      return poolIcon;
    default:
      return libraryIcon;
  }
}
