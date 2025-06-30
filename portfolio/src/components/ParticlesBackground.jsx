// components/ParticlesBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    // This avoids the engine.checkVersion issue
    await loadLinksPreset(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        fullScreen: { enable: true, zIndex: -1 },
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
    />
  );
}
