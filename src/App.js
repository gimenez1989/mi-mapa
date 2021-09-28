import React, { useEffect } from "react";
import { Map, Marker } from "maplibre-gl";
import "./App.css";
//Prueba como si no funcionara
function App() {
  useEffect(() => {
    let map = new Map({
      container: "mapContainer", // container id
      style: "https://demotiles.maplibre.org/style.json", // style URL
      center: [-80, -38], // starting position [lng, lat]
      zoom: 3, // starting zoom
    });
    let marker = new Marker().setLngLat([-80, -37]).addTo(map);
  }, []);

  return (
    <div>
      <div style={{ height: "100vh" }} id="mapContainer"></div>
    </div>
  );
}

export default App;
