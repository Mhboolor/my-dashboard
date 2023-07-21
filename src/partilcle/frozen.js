export const frozen = {
  fpsLimit: 60,
  background: {
    color: "rgba(0,0,0,0)"
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onDiv: {
        enable: true,
        ids: ["green-div", "white-div", "red-div"],
        mode: "bubble",
        type: "rectangle"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 4,
        speed: 3,
        divs: [
          {
            ids: "red-div",
            color: "#ff0000"
          },
          {
            ids: "white-div",
            color: "#ffffff"
          },
          {
            ids: "green-div",
            color: "#00ff00"
          }
        ]
      }
    }
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    links: {
      color: "random",
      distance: 160,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    move: {
      collisions: true,
      direction: "none",
      enable: true,
      out_mode: "bounce",
      random: false,
      speed: 2,
      straight: false
    },
    number: { density: { enable: true, value_area: 800 }, value: 100 },
    opacity: {
      animation: { enable: true, minimumValue: 0.1, speed: 1, sync: false },
      random: true,
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      animation: {
        enable: true,
        minimumValue: 2,
        speed: 1,
        sync: false
      },
      random: {
        enable: true,
        minimumValue: 2
      },
      value: 4
    }
  },
  detectRetina: true
}