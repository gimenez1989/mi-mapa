import { useEffect } from "react";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        properties: {},
        coordinates: [
          [-58.478947, -34.642142],
          [-58.478675, -34.654485]
        ],
      },
    },
  ],
};

const Route = ({ map }) => {
  useEffect(() => {
    map.on("load", () => {
      map.addSource("LineString", {
        type: "geojson",
        data: geojson,
      });

      map.addLayer({
        id: "LineStringLayer",
        type: "line",
        source: "LineString",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "red",
          "line-width": 10,
        },
      });
    });
    console.log('Layer: ', map.getLayer('LineStringLayer'))
    console.log('Source: ', map.getSource('LineString'))
  }, [map]);

  return null;
};

export default Route;
