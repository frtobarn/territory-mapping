// [4.595686896849149, -74.1522637029999] nort
// [4.544489566850838, -74.1238684409999] south

export const entities = [
  //   {
  //     name: "CEFE Tunal",
  //     location: [4.571837, -74.138357],
  //     icon: "park-icon",
  //     popup_msg: "CEFE. <br>Para nadar",
  //     webpage:
  //       "https://www.idrd.gov.co/construcciones/centros-felicidad-bogota/cefe-tunal",
  //   },
];

// GeoJSON Specification (RFC 7946):

export const entitiesGEOJSON = [
  {
    type: "Feature",
    properties: {
      name: "Biblioteca Pública GGM",
      amenity: "Entidad cultural",
      popupContent: "Biblioteca GGM. <br>El corazón de Tunjuelito",
      icon: "library-icon",
      alt: "Texto accesible para lectores de pantallas",
      webpage:
        "https://www.biblored.gov.co/bibliotecas/biblioteca-gabriel-garcia-marquez",
    },
    geometry: {
      type: "Point",
      coordinates: [-74.129444, 4.572038],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Casa de la cultura de Tunjuelito",
      amenity: "Entidad cultural",
      popupContent: "Aqui es donde la cultura nace colectivamente",
      icon: "church-icon",
      alt: "Texto accesible para lectores de pantallas",
      webpage:
        "https://www.biblored.gov.co/bibliotecas/biblioteca-gabriel-garcia-marquez",
    },
    geometry: {
      type: "Point",
      coordinates: [-74.13659545995138, 4.579115896699781],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Manzana del cuidado Tunjuelito",
      amenity: "Entidad cultural",
      popupContent: "Manzana del cuidado Tunjuelito. <br>Para pasarla",
      icon: "church-icon",
      alt: "Texto accesible para lectores de pantallas",
      webpage: "https://manzanasdelcuidado.gov.co/tunjuelito/",
    },
    geometry: {
      type: "Point",
      coordinates: [-74.12144455180267, 4.556597546357898],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "CEFE Tunal",
      amenity: "Entidad cultural",
      popupContent: "CEFE. <br>Para nadar",
      icon: "pool-icon",
      alt: "Texto accesible para lectores de pantallas",
      webpage: "https://manzanasdelcuidado.gov.co/tunjuelito/",
    },
    geometry: {
      type: "Point",
      coordinates: [-74.13825620032408, 4.5715650339221305],
    },
  },
];
