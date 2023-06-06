import React from "react";

function ThemeItem({ color, img, changeColor }) {
  return <img className="theme__img" src={img} onClick={()=>{changeColor(color)}} />;
}

export default ThemeItem;
