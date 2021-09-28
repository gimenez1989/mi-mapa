import React, { useEffect } from "react";
import { Map } from "maplibre-gl";
import "./App.css";

function App() {
  useEffect(() => {
    new Map({
      container: "mapContainer", // container id
      style: "https://demotiles.maplibre.org/style.json", // style URL
      center: [-80, -38 ], // starting position [lng, lat]
      zoom: 3, // starting zoom
    });
  }, []);

  return (
    <div>
      <div style={{ height: "100vh" }} id="mapContainer"></div>
    </div>
  );
}

export default App;
