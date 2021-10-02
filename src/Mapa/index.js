import React, { useEffect, useState } from "react";
import { Map } from "maplibre-gl";
import MarkerComponent from "../Marker";

const MapUnico = () => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    setMap(new Map({
      container: "mapContainer", // container id
      style: "https://demotiles.maplibre.org/style.json", // style URL
      center: [-80, -38], // starting position [lng, lat]
      zoom: 3, // starting zoom
    }))
    // new Marker().setLngLat([-80, -38]).addTo(map)
  }, []);

  return (
    <div>
      <div style={{ height: "100vh" }} id="mapContainer"></div>
      {map && <MarkerComponent map={map} />}
    </div>
  );
};

export default MapUnico;
