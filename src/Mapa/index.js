import React, { useEffect, useState } from "react"
import { Map } from "maplibre-gl"
import { Container, Button, Box } from '@material-ui/core'
import MarkerComponent from "../Marker"
import Route from "../Route"
import useStyles from './styles'

const MapUnico = () => {
  const [map, setMap] = useState(null)
  const [visibility, setVisibility] = useState(false)
  const classes = useStyles()

  const change = () => {
    if (visibility === false) {
      map.setLayoutProperty("simple-capa1", "visibility", "none")
      map.setLayoutProperty("simple-capa2", "visibility", "visible")
    } else {
      map.setLayoutProperty("simple-capa1", "visibility", "visible")
      map.setLayoutProperty("simple-capa2", "visibility", "none")
    }
    setVisibility(!visibility)
  };

  useEffect(() => {
    setMap(
      new Map({
        container: "mapContainer", // container id
        style: {
          version: 8,
          sources: {
            capabase_1: {
              type: "raster",
              scheme: "tms",
              tiles: [
                "https://servicios.usig.buenosaires.gob.ar/mapcache/tms/1.0.0/amba_con_transporte_3857@GoogleMapsCompatible/{z}/{x}/{y}.png",
              ],
              tileSize: 256,
            },
            capabase_2: {
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
              id: "simple-capa1",
              type: "raster",
              source: "capabase_1",
              minzoom: 0,
              maxzoom: 22,
              layout: {
                // Haz que la capa sea visible por defecto.
                visibility: "visible",
              },
            },
            {
              id: "simple-capa2",
              type: "raster",
              source: "capabase_2",
              minzoom: 0,
              maxzoom: 22,
              layout: {
                // Haz que la capa sea visible por defecto.
                visibility: "none",
              },
            },
          ],
        }, // style URL
        center: [-58.45, -34.62], // starting position [lng, lat]
        zoom: 12, // starting zoom
      })
    );
  }, [])

  return (
    <Container className={classes.mapContainer} id="mapContainer">
      <Box>
        {map && <MarkerComponent map={map} />}
        {map && <Route map={map} />}

        {map && (
          <Button className={classes.button}
            onClick={() => {
              change();
            }}
          >
            {visibility ? <p>Capa_2</p> : <p>Capa_1</p>}
          </Button>
        )}
      </Box>
    </Container>
  )
}

export default MapUnico
