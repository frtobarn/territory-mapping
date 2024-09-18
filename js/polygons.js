import { tunjuelitoGeometry, leftLayerGeometry, rightLayerGeometry } from "./geometries.js";

export const leftPolygon = L.polygon(leftLayerGeometry, {
    color: 'gray',
    fillColor: 'gray',
    fillOpacity: 1,
    radius: 500,
    attribution: '&copy; <a href="https://fabiantobar.vercel.app/" target="_blank" rel="noopener noreferrer">Fabian Ricardo Tobar Numesqui</a>'
})

export const rightPolygon = L.polygon(rightLayerGeometry, {
    color: 'gray',
    fillColor: 'gray',
    fillOpacity: 1,
    radius: 500,
    attribution: '&copy; <a href="https://fabiantobar.vercel.app/" target="_blank" rel="noopener noreferrer">Fabian Ricardo Tobar Numesqui</a>'
})


export const tunjuelitoPolygon = L.polygon(tunjuelitoGeometry, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500,
    attribution: '&copy; <a href="https://fabiantobar.vercel.app/" target="_blank" rel="noopener noreferrer">Fabian Ricardo Tobar Numesqui</a>'
})
