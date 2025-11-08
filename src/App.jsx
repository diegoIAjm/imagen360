import React, { useEffect } from "react";
import "aframe";
import "./App.css";
import DescriptionText from "./components/description"; 

function App() {
  useEffect(() => {
    const box = document.querySelector("#box");
    if (box) {
      box.addEventListener("click", () => {
        box.setAttribute("color", "blue");
      });
    }
  }, []);

  return (
    <a-scene>
      <a-sky src="/360.jpg" rotation="0 -90 0"></a-sky>

      <a-entity position="0 1.6 0">
        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
      </a-entity>

      <a-box
        id="box"
        position="0 1.5 -3"
        depth="1"
        height="1"
        width="1"
        color="red"
      ></a-box>

<a-plane
  id="Lara"
  src="/lara.jpeg"
  height="2"    
  width="4"     
  position="2 1 -3"
  rotation="0 0 0"
></a-plane>

      <DescriptionText
        id="Lara"
        text="Si no le contesto se desespera
Dice que con otra estoy
Haciendo lo que le hacia a ella ea ea ea
Como tu mente maquinea cuando en la mía yo estoy
Mujer no quiero más peleas no, no más peleas"
        position="2 2 -3"
      />
    </a-scene>
  );
}

export default App;
