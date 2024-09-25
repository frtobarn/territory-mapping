import { churchIcon, libraryIcon, parkIcon, poolIcon } from "./icons.js";

// Applying color according to a property
export function getColorByDensity(d) {
  return d > 1000
    ? "#800026"
    : d > 500
    ? "#BD0026"
    : d > 200
    ? "#E31A1C"
    : d > 100
    ? "#FC4E2A"
    : d > 50
    ? "#FD8D3C"
    : d > 20
    ? "#FEB24C"
    : d > 10
    ? "#FED976"
    : "#FFEDA0";
}

export function territoriesStyle(feature) {
  return {
    fillColor: getColorByDensity(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.5,
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
