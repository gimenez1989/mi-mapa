import React, { useEffect } from "react";
import { Map } from "maplibre-gl";
import './App.css';

function App() {
  useEffect(() => {
     new Map({
      container: "mapContainer", // container id
      style: "https://demotiles.maplibre.org/style.json", // style URL
      center: [-58, -34], // starting position [lng, lat]
      zoom: 3, // starting zoom
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <div>
      <div style={{height:'100vh'}} id="mapContainer"></div>
    </div>
      </header>
    </div>
  );
}

export default App;
