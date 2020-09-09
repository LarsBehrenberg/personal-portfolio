import React from 'react'
import { Particles as ReactParticles } from 'react-particles-js'
import styled from '@emotion/styled'

const BackgroundShadow = styled.div`
  background: linear-gradient(90deg, #1c3242 0%, rgba(28, 50, 66, 0.2) 100%);
  z-index: -9;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

const particlesParameters = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 600,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#fff',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: false,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 120,
        line_linked: {
          opacity: 0.9,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
}

const Particles = () => (
  <>
    <BackgroundShadow />
    <ReactParticles
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        pointerEvents: 'none',
        backgroundColor: '#153244',

        zIndex: -10,
      }}
      params={particlesParameters}
    />
  </>
)

export default Particles
