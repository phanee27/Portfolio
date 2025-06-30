import React from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadLinksPreset(engine);
  };

  const particlesLoaded = async (container) => {
    const canvas = container?.canvas?.element;
    if (canvas) {
      canvas.style.width = "0px";
      canvas.style.height = "0px";
      // canvas.style.display = "none"; // Optional: hide completely
    }
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        preset: "links",
        fullScreen: { enable: true, zIndex: -1 }, // disable fullscreen behavior
        background: { color: "#07070B" },
        particles: {
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff", distance: 150 },
          move: { enable: true, speed: 1 },
          number: { value: 30 },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
      style={{
        width: "0px",
        height: "0px",
        position: "absolute",
        zIndex: -1,
      }}
    />
  );
}
