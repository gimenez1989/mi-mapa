import React, { useEffect, useState } from "react";
import { Map } from "maplibre-gl";
import MarkerComponent from "../Marker";
// import Raster from "../Raster";

const MapUnico = () => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    setMap(new Map({
      container: "mapContainer", // container id
      // con el style se puede cambiar la capa del mapa
      style: {
        version: 8,
        sources: {
          "raster-tiles": {
            type: "raster",
            tiles: [
              "https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",
            ],
            tileSize: 256,
            attribution:
              'Map tiles by <a target="_top" rel="noopener" href="http://stamen.com">Stamen Design</a>, under <a target="_top" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_top" rel="noopener" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>',
          },
        },
        layers: [
          {
            id: "simple-tiles",
            type: "raster",
            source: "raster-tiles",
            minzoom: 0,
            maxzoom: 22,
          },
        ],
      }, // style URL
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
