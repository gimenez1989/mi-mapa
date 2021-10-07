import React, { useEffect, useState } from "react";
import { Map } from "maplibre-gl";
import MarkerComponent from "../Marker";

const MapUnico = () => {
  const [map, setMap] = useState(null);
  const [capas, setCapas] = useState(false);

  const Cambiar = () => {
    setCapas(!capas);
  };

  useEffect(() => {
    setMap(
      new Map({
        container: "mapContainer", // container id
        //style: "https://demotiles.maplibre.org/style.json", // style URL
        style:
          "https://api.maptiler.com/maps/basic/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
        //Se cambio el style del mapa

        center: [-58.45, -34.59],
        zoom: 7, // starting zoom
      })
    );

    // new Marker().setLngLat([-80, -38]).addTo(map)
  }, []);

  const show = () => {
      setMap(
        new Map({
          container: "mapContainer",
          style: "https://demotiles.maplibre.org/style.json",

          center: [-58.45, -34.59],
          zoom: 3, // starting zoom
        })
      );
  }      
  return (
    <div>
      <div style={{ height: "100vh" }} id="mapContainer" ></div>
      {map && <MarkerComponent map={map} />}
      <div>
        <button
          onClick={() => {
            Cambiar();
            show()
          }}
        >
          {
            capas && !setMap ? (
              <p>capa_2</p>
            ) : (
              <p>capa_1</p>
            )
          }
        </button>
      </div>
    </div>
  );
};

export default MapUnico;
