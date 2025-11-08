import React, { useEffect } from "react";

interface DescriptionTextProps {
  id: string;       
  text: string;        
  position?: string;    
}

const DescriptionText: React.FC<DescriptionTextProps> = ({ id, text, position = "0 2 -3" }) => {
useEffect(() => {
  const interval = setInterval(() => {
    const obj = document.querySelector(`#${id}`);
    if (obj) {
      const scene = document.querySelector("a-scene");
      const textEntity = document.createElement("a-text");
      textEntity.setAttribute("value", text);
      textEntity.setAttribute("color", "yellow");
      textEntity.setAttribute("position", position);
      textEntity.setAttribute("visible", "false");
      textEntity.setAttribute("id", `${id}-text`);
      if (scene) scene.appendChild(textEntity);

      const toggleText = () => {
        const visible = textEntity.getAttribute("visible") === "true";
        textEntity.setAttribute("visible", visible ? "false" : "true");
      };

      obj.addEventListener("click", toggleText);

      clearInterval(interval); // ya encontramos el objeto
    }
  }, 100);

  return () => clearInterval(interval);
}, [id, text, position]);

  return null;
};

export default DescriptionText;
