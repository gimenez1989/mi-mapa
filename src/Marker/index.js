import React, { useEffect } from "react";
import { Marker } from "maplibre-gl";

const MarkerComponent = ({ map }) => {
  useEffect(() => {
    new Marker().setLngLat([-80, -37]).addTo(map);
  }, [map]);

  return <div></div>;
};

export default MarkerComponent;
