import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true
          },
        },
        particles: {
          color: { value: '#ffffff' },
          links: {
            color: '#ffffff',
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          collisions: { enable: true },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            speed: 1
          },
          number: { value: 40, density: { enable: true, area: 900 } },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
