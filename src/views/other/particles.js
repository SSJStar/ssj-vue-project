// 背景动画设置
// color: String类型。默认'#dedede'。粒子颜色。
// particleOpacity: Number类型。默认0.7。粒子透明度。
// particlesNumber: Number类型。默认80。粒子数量。
// shapeType: String类型。默认'circle'。可用的粒子外观类型有："circle","edge","triangle", "polygon","star"。
// particleSize: Number类型。默认80。单个粒子大小。
// linesColor: String类型。默认'#dedede'。线条颜色。
// linesWidth: Number类型。默认1。线条宽度。
// lineLinked: 布尔类型。默认true。连接线是否可用。
// lineOpacity: Number类型。默认0.4。线条透明度。
// linesDistance: Number类型。默认150。线条距离。
// moveSpeed: Number类型。默认3。粒子运动速度。
// hoverEffect: 布尔类型。默认true。是否有hover特效。
// hoverMode: String类型。默认true。可用的hover模式有: "grab", "repulse", "bubble"。
// clickEffect: 布尔类型。默认true。是否有click特效。
// clickMode: String类型。默认true。可用的click模式有: "push", "remove", "repulse", "bubble"。

// particles 后续引入的变量 必须保持一致!

// export const particles = {
//   autoPlay: true,
//   background: {
//     color: {
//       value: "#ffffff",
//     },
//     image: "url('https://particles.js.org/images/background3.jpg')",
//     position: "50% 50%",
//     repeat: "no-repeat",
//     size: "cover",
//     opacity: 1,
//   },
//   backgroundMask: {
//     composite: "destination-out",
//     cover: {
//       color: {
//         value: {
//           r: 255,
//           g: 255,
//           b: 255,
//         },
//       },
//       opacity: 1,
//     },
//     enable: true,
//   },
//   defaultThemes: [],
//   delay: 0,
//   fullScreen: {
//     enable: true,
//     zIndex: 1,
//   },
//   detectRetina: true,
//   duration: 0,
//   fpsLimit: 120,
//   interactivity: {
//     detectsOn: "window",
//     events: {
//       onClick: {
//         enable: true,
//         mode: "push",
//       },
//       onDiv: {
//         selectors: [],
//         enable: false,
//         mode: [],
//         type: "circle",
//       },
//       onHover: {
//         enable: true,
//         mode: "bubble",
//         parallax: {
//           enable: false,
//           force: 60,
//           smooth: 10,
//         },
//       },
//       resize: {
//         delay: 0.5,
//         enable: true,
//       },
//     },
//     modes: {
//       attract: {
//         distance: 200,
//         duration: 0.4,
//         easing: "ease-out-quad",
//         factor: 1,
//         maxSpeed: 50,
//         speed: 1,
//       },
//       bounce: {
//         distance: 200,
//       },
//       bubble: {
//         distance: 400,
//         duration: 2,
//         mix: false,
//         opacity: 1,
//         size: 100,
//         divs: {
//           distance: 200,
//           duration: 0.4,
//           mix: false,
//           selectors: [],
//         },
//       },
//       connect: {
//         distance: 80,
//         links: {
//           opacity: 0.5,
//         },
//         radius: 60,
//       },
//       grab: {
//         distance: 400,
//         links: {
//           blink: false,
//           consent: false,
//           opacity: 1,
//         },
//       },
//       push: {
//         default: true,
//         groups: [],
//         quantity: 4,
//       },
//       remove: {
//         quantity: 2,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//         factor: 100,
//         speed: 1,
//         maxSpeed: 50,
//         easing: "ease-out-quad",
//         divs: {
//           distance: 200,
//           duration: 0.4,
//           factor: 100,
//           speed: 1,
//           maxSpeed: 50,
//           easing: "ease-out-quad",
//           selectors: [],
//         },
//       },
//       slow: {
//         factor: 3,
//         radius: 200,
//       },
//       trail: {
//         delay: 1,
//         pauseOnStop: false,
//         quantity: 1,
//       },
//       light: {
//         area: {
//           gradient: {
//             start: {
//               value: "#ffffff",
//             },
//             stop: {
//               value: "#000000",
//             },
//           },
//           radius: 1000,
//         },
//         shadow: {
//           color: {
//             value: "#000000",
//           },
//           length: 2000,
//         },
//       },
//     },
//   },
//   manualParticles: [],
//   particles: {
//     bounce: {
//       horizontal: {
//         random: {
//           enable: false,
//           minimumValue: 0.1,
//         },
//         value: 1,
//       },
//       vertical: {
//         random: {
//           enable: false,
//           minimumValue: 0.1,
//         },
//         value: 1,
//       },
//     },
//     collisions: {
//       absorb: {
//         speed: 2,
//       },
//       bounce: {
//         horizontal: {
//           random: {
//             enable: false,
//             minimumValue: 0.1,
//           },
//           value: 1,
//         },
//         vertical: {
//           random: {
//             enable: false,
//             minimumValue: 0.1,
//           },
//           value: 1,
//         },
//       },
//       enable: false,
//       mode: "bounce",
//       overlap: {
//         enable: true,
//         retries: 0,
//       },
//     },
//     color: {
//       value: "#ffffff",
//       animation: {
//         h: {
//           count: 0,
//           enable: false,
//           offset: 0,
//           speed: 1,
//           decay: 0,
//           sync: true,
//         },
//         s: {
//           count: 0,
//           enable: false,
//           offset: 0,
//           speed: 1,
//           decay: 0,
//           sync: true,
//         },
//         l: {
//           count: 0,
//           enable: false,
//           offset: 0,
//           speed: 1,
//           decay: 0,
//           sync: true,
//         },
//       },
//     },
//     groups: [],
//     move: {
//       angle: {
//         offset: 0,
//         value: 90,
//       },
//       attract: {
//         distance: 200,
//         enable: false,
//         rotate: {
//           x: 600,
//           y: 1200,
//         },
//       },
//       center: {
//         x: 50,
//         y: 50,
//         mode: "percent",
//         radius: 0,
//       },
//       decay: 0,
//       distance: [],
//       direction: "none",
//       drift: 0,
//       enable: true,
//       gravity: {
//         acceleration: 9.81,
//         enable: false,
//         inverse: false,
//         maxSpeed: 50,
//       },
//       path: {
//         clamp: true,
//         delay: {
//           random: {
//             enable: false,
//             minimumValue: 0,
//           },
//           value: 0,
//         },
//         enable: false,
//         options: [],
//       },
//       outModes: {
//         default: "out",
//         bottom: "out",
//         left: "out",
//         right: "out",
//         top: "out",
//       },
//       random: false,
//       size: false,
//       speed: 2,
//       spin: {
//         acceleration: 0,
//         enable: false,
//       },
//       straight: false,
//       trail: {
//         enable: false,
//         length: 10,
//         fillColor: {
//           value: "#000000",
//         },
//       },
//       vibrate: false,
//       warp: false,
//     },
//     number: {
//       density: {
//         enable: true,
//         area: 800,
//         factor: 1000,
//       },
//       limit: 0,
//       value: 80,
//     },
//     opacity: {
//       random: {
//         enable: false,
//         minimumValue: 0.1,
//       },
//       value: 1,
//       animation: {
//         count: 0,
//         enable: false,
//         speed: 1,
//         decay: 0,
//         sync: false,
//         destroy: "none",
//         startValue: "random",
//         minimumValue: 0.1,
//       },
//     },
//     reduceDuplicates: false,
//     shadow: {
//       blur: 0,
//       color: {
//         value: "#000",
//       },
//       enable: false,
//       offset: {
//         x: 0,
//         y: 0,
//       },
//     },
//     shape: {
//       options: [],
//       type: "circle",
//     },
//     size: {
//       random: {
//         enable: true,
//         minimumValue: 1,
//       },
//       value: {
//         min: 1,
//         max: 30,
//       },
//       animation: {
//         count: 0,
//         enable: false,
//         speed: 40,
//         decay: 0,
//         sync: false,
//         destroy: "none",
//         startValue: "random",
//         minimumValue: 0.1,
//       },
//     },
//     stroke: {
//       width: 0,
//     },
//     zIndex: {
//       random: {
//         enable: false,
//         minimumValue: 0,
//       },
//       value: 0,
//       opacityRate: 1,
//       sizeRate: 1,
//       velocityRate: 1,
//     },
//     life: {
//       count: 0,
//       delay: {
//         random: {
//           enable: false,
//           minimumValue: 0,
//         },
//         value: 0,
//         sync: false,
//       },
//       duration: {
//         random: {
//           enable: false,
//           minimumValue: 0.0001,
//         },
//         value: 0,
//         sync: false,
//       },
//     },
//     rotate: {
//       random: {
//         enable: false,
//         minimumValue: 0,
//       },
//       value: 0,
//       animation: {
//         enable: false,
//         speed: 0,
//         decay: 0,
//         sync: false,
//       },
//       direction: "clockwise",
//       path: false,
//     },
//     destroy: {
//       bounds: [],
//       mode: "none",
//       split: {
//         count: 1,
//         factor: {
//           random: {
//             enable: false,
//             minimumValue: 0,
//           },
//           value: 3,
//         },
//         rate: {
//           random: {
//             enable: false,
//             minimumValue: 0,
//           },
//           value: {
//             min: 4,
//             max: 9,
//           },
//         },
//         sizeOffset: true,
//       },
//     },
//     roll: {
//       darken: {
//         enable: false,
//         value: 0,
//       },
//       enable: false,
//       enlighten: {
//         enable: false,
//         value: 0,
//       },
//       mode: "vertical",
//       speed: 25,
//     },
//     tilt: {
//       random: {
//         enable: false,
//         minimumValue: 0,
//       },
//       value: 0,
//       animation: {
//         enable: false,
//         speed: 0,
//         decay: 0,
//         sync: false,
//       },
//       direction: "clockwise",
//       enable: false,
//     },
//     twinkle: {
//       lines: {
//         enable: false,
//         frequency: 0.05,
//         opacity: 1,
//       },
//       particles: {
//         enable: false,
//         frequency: 0.05,
//         opacity: 1,
//       },
//     },
//     wobble: {
//       distance: 5,
//       enable: false,
//       speed: {
//         angle: 50,
//         move: 10,
//       },
//     },
//     orbit: {
//       animation: {
//         count: 0,
//         enable: false,
//         speed: 1,
//         decay: 0,
//         sync: false,
//       },
//       enable: false,
//       opacity: 1,
//       rotation: {
//         random: {
//           enable: false,
//           minimumValue: 0,
//         },
//         value: 45,
//       },
//       width: 1,
//     },
//     links: {
//       blink: false,
//       color: {
//         value: "#fff",
//       },
//       consent: false,
//       distance: 100,
//       enable: false,
//       frequency: 1,
//       opacity: 1,
//       shadow: {
//         blur: 5,
//         color: {
//           value: "#000",
//         },
//         enable: false,
//       },
//       triangles: {
//         enable: false,
//         frequency: 1,
//       },
//       width: 1,
//       warp: false,
//     },
//     repulse: {
//       random: {
//         enable: false,
//         minimumValue: 0,
//       },
//       value: 0,
//       enabled: false,
//       distance: 1,
//       duration: 1,
//       factor: 1,
//       speed: 1,
//     },
//   },
//   pauseOnBlur: true,
//   pauseOnOutsideViewport: true,
//   responsive: [],
//   smooth: false,
//   style: [],
//   themes: [],
//   zLayers: 100,
// };

// 方案2
export const particles = {
  background: {
    color: {
      value: "#001537", // 背景颜色
    },
  },
  fpsLimit: 120, //帧数限制，小于50帧会有卡顿的感觉
  interactivity: {
    events: {
      onClick: {
        // 点击效果
        enable: true,
        mode: "push", //点击模式，可选值有：push（添加），remove（移除），repulse（元素朝四周逃离），bubble
      },
      onHover: {
        //悬停效果
        enable: true,
        mode: "repulse", // hover模式类型（grab，repulse（元素朝四周逃离），bubble(气泡变大)）
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};
