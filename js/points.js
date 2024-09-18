
// [4.595686896849149, -74.1522637029999] nort
// [4.544489566850838, -74.1238684409999] south

export const entities = [
    {
        name: "Biblioteca Pública GGM",
        location: [4.572038, -74.129444],
        icon: "library-icon",
        popup_msg: "Biblioteca GGM. <br>El corazón de Tunjuelito",
        webpage: "https://www.biblored.gov.co/bibliotecas/biblioteca-gabriel-garcia-marquez"
    },
    {
        name: "CEFE Tunal",
        location: [4.571837, -74.138357],
        icon: "park-icon",
        popup_msg: "CEFE. <br>Para nadar",
        webpage: "https://www.idrd.gov.co/construcciones/centros-felicidad-bogota/cefe-tunal"
    },
    {
        name: "Manzana del cuidado Tunjuelito",
        location: [4.556199058897453, -74.12176908675943],
        icon: "church-icon",
        popup_msg: "Manzana del cuidado Tunjuelito. <br>Para pasarla",
        webpage: "https://manzanasdelcuidado.gov.co/tunjuelito/"
    },
    // {
    //     name: "Casa de la cultura de Tunjuelito",
    //     location: [4.579115896699781, -74.13659545995138],
    //     icon: "library-icon",
    //     popup_msg: "Aqui es donde la cultura nace colectivamente",
    //     webpage: "https://manzanasdelcuidado.gov.co/tunjuelito/"
    // }
]

// GeoJSON Specification (RFC 7946):

export const entitiesGEOJSON = [
    {
        "type": "Feature",
        "properties": {
            "name": "Casa de la cultura de Tunjuelito",
            "amenity": "Entidad cultural",
            "popupContent": "Aqui es donde la cultura nace colectivamente"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-74.13659545995138, 4.579115896699781]
        }
    }
]