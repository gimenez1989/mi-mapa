import { useEffect, useState } from "react";
import { Marker } from "maplibre-gl";

const MarkerComponent = ({ map }) => {
  const [marker, setMarker] = useState(null);
  const coordinates = document.getElementById("coordinates");

  useEffect(() => {
    setMarker(
      new Marker({
        draggable: true,
      })
        .setLngLat([-58.45, -34.59])
        .addTo(map)
    );
    //new Marker().setLngLat([-58.45, -34.59]).addTo(map);
  }, [map]);

  useEffect(() => {
    
    const onDragEnd = () => {
      const lngLat = marker.getLngLat();
      coordinates.style.display = "block";
      coordinates.innerHTML =
        "Longitude: " + lngLat.lng + "<br />Latitude: " + lngLat.lat;
    };
    
    if(marker != null ) {
      marker.on("dragend", onDragEnd);
    }

  }, [marker])

  return null;
};

export default MarkerComponent;
