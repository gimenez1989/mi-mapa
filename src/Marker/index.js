import React, { useEffect } from "react";
import { Map, Marker } from "maplibre-gl";

const Market = () => {
  useEffect(() => {
    const map = new Map({
      container: "mapContainer", // container id
      style: "https://demotiles.maplibre.org/style.json", // style URL
      center: [-80, -38], // starting position [lng, lat]
      zoom: 3, // starting zoom
    });
    const marker = new Marker().setLngLat([-80, -37]).addTo(map);
  }, []);

  return (
      <div>
        <div style={{ height: "100vh" }} id="mapContainer"></div>
      </div>
  );
};

export default Market;
