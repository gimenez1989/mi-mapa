import { useEffect } from "react";

const geojsonBsAs = {
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-58.46547288806839, -34.53440044451487],
        [-58.49999814013731, -34.54905967855418],
        [-58.51483635640004, -34.58083418066757],
        [-58.522095556097085, -34.597368044161875],
        [-58.53101383640805, -34.61510432754826],
        [-58.53004623672152, -34.63449200896921],
        [-58.52925998500153, -34.64424771977328],
        [-58.52802899813764, -34.654041849354314],
        [-58.517936031179076, -34.662223024569734],
        [-58.49973521778894, -34.675914579193716],
        [-58.48535954167939, -34.686815647303],
        [-58.48059493714996, -34.68106046245598],
        [-58.472827430291474, -34.6636272345546],
        [-58.46572251680932, -34.64978469072065],
        [-58.461714953538106, -34.64310944758593],
        [-58.453613154289286, -34.63680619443345],
        [-58.447484031765455, -34.63613703161513],
        [-58.43787711092003, -34.630557799213314],
        [-58.421254291376044, -34.62824889438553],
        [-58.40166532954538, -34.62585191471527],
        [-58.391468864934254, -34.62357759815743],
        [-58.38057789823566, -34.622924754373926],
        [-58.36598613269733, -34.62213158012592],
        [-58.36662946517042, -34.61039418473439],
        [-58.36835679235962, -34.598207737435196],
        [-58.373045251877, -34.58371598035281],
        [-58.38095767908422, -34.58282884026009],
        [-58.4006734865101, -34.571619868485165],
        [-58.4166044445133, -34.56223711507354],
        [-58.43363009124411, -34.550827375795336],
        [-58.45132360232189, -34.541446847367716],
        [-58.464362335787854, -34.53419688549437],
        [-58.48115108465046, -34.54129445306048],
        [-58.49989087217638, -34.54980785079995],
      ],
    ],
  },
};

const geojsonPunto = {
  type: "Feature",
  geometry: {
    type: "circle",
    coordinates: []
  }
}

const geojsonPuntoSource = {
  type: "FeatureCollection",
  features: []
}

const Route = ({ map }) => {
  useEffect(() => {
    map.on("load", () => {
      map.on('click', (e) => {
        console.log(e.lngLat)
        var point = {
          'type': 'Feature',
          'geometry': {
          'type': 'Point',
          'coordinates': [e.lngLat.lng, e.lngLat.lat]
          },
          'properties': {
          'id': String(new Date().getTime())
          }
        }
        geojsonPuntoSource.features.push(point)
        map.getSource('PuntoSource').setData(geojsonPuntoSource)
        console.log(geojsonPuntoSource.features)
      })
      map.addSource("PuntoSource", {
        type: "geojson",
        data: geojsonPuntoSource,
      });

      map.addLayer({
        id: "PuntoSource",
        type: "circle",
        source: "PuntoSource",
        paint: {
          "circle-color": "black",
          "circle-opacity": 0.8,
          "circle-radius": 5
        },
      });

      map.addSource("BuenosAires", {
        type: "geojson",
        data: geojsonBsAs,
      });

      map.addLayer({
        id: "BuenosAires",
        type: "fill",
        source: "BuenosAires",
        layout: {},
        paint: {
          "fill-color": "#088",
          "fill-opacity": 0.8,
        },
      });
    });
    /*map.on("load", () => {
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
    console.log('Source: ', map.getSource('LineString'))*/
  }, [map]);

  return null;
};

export default Route;
