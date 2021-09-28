import React, { useEffect, useState } from 'react'
import { Map } from "maplibre-gl";

const Market = () => {
    const [market, setMarket] = useState(false)
    
    const Punto = () => {
        setMarket(!market)
    }
    useEffect(() => {
        new Map ({
          setMarket,
          container: "mapContainer", // container id
          style: "https://demotiles.maplibre.org/style.json", // style URL
          center: [-80, -38 ], // starting position [lng, lat]
          zoom: 3, // starting zoom
        });
      }, []);

    return (
        <div>
           <Punto onclik={Punto} Marcador />
        </div>
    )
}

export default Market