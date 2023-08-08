<!--<template>-->
<!--  <div>-->
<!--    <p>1</p>-->
<!--    <p>2</p>-->
<!--    <p class="sticky">position: sticky;</p>-->
<!--    <p>4</p>-->
<!--    <p>5</p>-->
<!--    <p>6</p>-->
<!--    <p>7</p>-->
<!--  </div>-->
<!--</template>-->

<!--<style>-->
<!--div {-->
<!--  height: 200px;-->
<!--  position: relative;-->
<!--}-->
<!--p {-->
<!--  width: 100%;-->
<!--  height: 50px;-->
<!--  margin: 0;-->
<!--  text-align: center;-->
<!--  line-height: 50px;-->
<!--  background-color: #ccc;-->
<!--}-->
<!--p.sticky {-->
<!--  background-color: blue;-->
<!--  position: sticky;-->
<!--  top: 0px;-->
<!--}-->
<!--</style>-->

<!--<template>-->
<!--  <div-->
<!--    style="-->
<!--      width: 90%;-->
<!--      height: 90%;-->
<!--      background-color: #42b983;-->
<!--      position: absolute;-->
<!--    "-->
<!--  >-->
<!--    <div class="show-div">正</div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--const w_h_value = "50px";-->
<!--// const nnn = "2";-->
<!--//  随机数字 1～10-->
<!--function randomNumer() {-->
<!--  let count = (Math.random() * 10).toFixed(0);-->
<!--  console.log(`count1 -&#45;&#45;${count}`);-->
<!--  while (count === "0") {-->
<!--    console.log(`count为0 再执行一次`);-->
<!--    count = randomNumer();-->
<!--  }-->
<!--  return count;-->
<!--}-->

<!--function randomBaiNumer() {-->
<!--  const count = (Math.random() * 100).toFixed(0) + "%";-->
<!--  console.log(`count2 -&#45;&#45;${count}`);-->
<!--  return count;-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--@keyframes ball {-->
<!--  0% {-->
<!--    top: 0px;-->
<!--    left: 0px;-->
<!--    transform: rotate(0);-->
<!--  }-->
<!--  25% {-->
<!--    top: 0px;-->
<!--    left: calc(100% - v-bind(w_h_value) - 3px);-->
<!--    transform: rotate(0.25turn);-->
<!--  }-->
<!--  50% {-->
<!--    top: calc(100% - v-bind(w_h_value) - 3px);-->
<!--    left: calc(100% - v-bind(w_h_value) - 3px);-->
<!--    transform: rotate(0.5turn);-->
<!--  }-->
<!--  75% {-->
<!--    top: calc(100% - v-bind(w_h_value) - 3px);-->
<!--    left: 0px;-->
<!--    transform: rotate(0.75turn);-->
<!--  }-->
<!--  100% {-->
<!--    top: 0px;-->
<!--    left: 0px;-->
<!--    background-color: darkgoldenrod;-->
<!--    transform: rotate(1turn);-->
<!--  }-->
<!--}-->
<!--.show-div {-->
<!--  width: v-bind(w_h_value);-->
<!--  height: v-bind(w_h_value);-->
<!--  border-radius: 50%;-->
<!--  border: 3px solid black;-->
<!--  position: relative;-->
<!--  animation-name: ball;-->
<!--  animation-duration: 5s;-->
<!--  animation-iteration-count: v-bind(randomNumer());-->
<!--  animation-timing-function: cubic-bezier(0.5, 0.5, 0.5, 0.5);-->
<!--  animation-delay: 1s;-->
<!--  animation-direction: alternate;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  background-image: linear-gradient(to bottom right, #d834c2, #2088dd, #63e4b9);-->
<!--}-->
<!--</style>-->

<!--粒子效果-->
<!--<template>-->
<!--  <div-->
<!--    class="box"-->
<!--    style="-->
<!--      position: absolute;-->
<!--      width: 100%;-->
<!--      height: 100%;-->
<!--      background-color: #2c3e50;-->
<!--    "-->
<!--  >-->
<!--    <Particles id="tsparticles" class="login-partic" :options="options" />-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { reactive, toRefs } from "vue";-->

<!--const data = reactive({-->
<!--  options: {-->
<!--    fpsLimit: 50,-->
<!--    interactivity: {-->
<!--      events: {-->
<!--        onClick: {-->
<!--          enable: true,-->
<!--          mode: "push",-->
<!--        },-->
<!--        onHover: {-->
<!--          enable: true,-->
<!--          mode: "grab",-->
<!--        },-->
<!--        resize: true,-->
<!--      },-->
<!--      modes: {-->
<!--        bubble: {-->
<!--          distance: 400,-->
<!--          duration: 2,-->
<!--          opacity: 0.6,-->
<!--          size: 10,-->
<!--        },-->
<!--        push: {-->
<!--          quantity: 4,-->
<!--        },-->
<!--        repulse: {-->
<!--          distance: 200,-->
<!--          duration: 0.4,-->
<!--        },-->
<!--      },-->
<!--    },-->
<!--    particles: {-->
<!--      color: {-->
<!--        value: "#ffffff",-->
<!--      },-->
<!--      links: {-->
<!--        color: "#ffffff",-->
<!--        distance: 150,-->
<!--        enable: true,-->
<!--        opacity: 0.5,-->
<!--        width: 1,-->
<!--      },-->
<!--      collisions: {-->
<!--        enable: true,-->
<!--      },-->
<!--      move: {-->
<!--        direction: "none",-->
<!--        enable: true,-->
<!--        outMode: "bounce",-->
<!--        random: false,-->
<!--        speed: 2,-->
<!--        straight: false,-->
<!--      },-->
<!--      number: {-->
<!--        density: {-->
<!--          enable: true,-->
<!--          value_area: 800,-->
<!--        },-->
<!--        value: 60,-->
<!--      },-->
<!--      opacity: {-->
<!--        value: 0.5,-->
<!--      },-->
<!--      shape: {-->
<!--        type: "circle",-->
<!--      },-->
<!--      size: {-->
<!--        random: true,-->
<!--        value: 3,-->
<!--      },-->
<!--    },-->
<!--    detectRetina: true,-->
<!--  },-->
<!--});-->

<!--const { options } = toRefs(data); // 直接解构出来，页面上就不用data.options了-->
<!--</script>-->

<template>
  <!--  <div class="dd">-->
  <!--    1-->
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    class="login__particles"
    :options="particles"
  />
  <!--  </div>-->
</template>

<script setup>
//背景动画
// 要看清楚这里的 particles 是个Js 文件!!
import { particles } from "@/views/other/particles.js";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const particlesInit = async (engine) => {
  //await loadFull(engine);
  await loadSlim(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};
</script>

<style>
/*.dd {*/
/*  width: 50%;*/
/*  height: 50%;*/
/*  background-color: #42b983;*/
/*  position: absolute;*/
/*}*/
</style>
