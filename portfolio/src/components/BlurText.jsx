// components/BlurText.jsx
import React, { useState } from "react";

export default function BlurText({ children, blurAmount = 6, hoverAmount = 0, duration = 300 }) {
  const [isHovered, setIsHovered] = useState(false);

  const blurStyle = {
    filter: `blur(${isHovered ? hoverAmount : blurAmount}px)`,
    transition: `filter ${duration}ms ease`,
    display: "inline-block",
    cursor: "pointer",
    willChange: "filter",
  };

  return (
    <span
      style={blurStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </span>
  );
}
