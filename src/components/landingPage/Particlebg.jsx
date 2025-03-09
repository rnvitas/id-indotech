"use client"; // Pastikan ini ada di bagian atas file

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    // Memuat semua fitur dari tsparticles
    await loadSlim(engine);
  }, []);

  return (
    <div className="particle-wrapper">
      <Particles
        id="tsparticles1"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: {
              value: 100,
              density: { enable: true, value_area: 500 },
            },
            color: { value: "#161616" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 5, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#000000",
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 3 },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
            },
          },
          retina_detect: true,
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
    </div>
  );
}
