import React  from "react";
import Marker from "./Marker/index";
import "./App.css";

function App() {


  return (
    <div>
      <div style={{ height: "100vh" }} id="mapContainer"></div>
      <Marker />    
    </div>
  );
}

export default App;
