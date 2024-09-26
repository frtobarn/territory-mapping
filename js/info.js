export const info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
  this.update();
  return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
  this._div.innerHTML =
    "<h4>Entidades</h4>" +
    (props
      ? "<b>" +
        props.nomb_loc +
        "</b><br />" +
        props.nom_upz +
        "</b><br />" +
        props.densidad_urbana +
        " Personas / km<sup>2</sup>"
      : "Pasa el mouse por una zona");
};
