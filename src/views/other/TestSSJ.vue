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

<!-- 粒子动画2 -->
<!--<template>-->
<!--  <Particles-->
<!--    id="tsparticles"-->
<!--    :particlesInit="particlesInit"-->
<!--    :particlesLoaded="particlesLoaded"-->
<!--    class="login__particles"-->
<!--    :options="particles"-->
<!--  />-->
<!--</template>-->

<!--<script setup>-->
<!--//背景动画-->
<!--// 要看清楚这里的 particles 是个Js 文件!!-->
<!--import { particles } from "@/views/other/particles.js";-->
<!--import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.-->

<!--const particlesInit = async (engine) => {-->
<!--  //await loadFull(engine);-->
<!--  await loadSlim(engine);-->
<!--};-->

<!--const particlesLoaded = async (container) => {-->
<!--  console.log("Particles container loaded", container);-->
<!--};-->
<!--</script>-->

<!--teleport-->
<!--<template>-->
<!--  <div style="background-color: #2088dd; opacity: 0.5">-->
<!--    <h1>测试一下</h1>-->
<!--  </div>-->
<!--  <div class="tt1Div">-->
<!--    <TT1 class="tt1"></TT1>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import TT1 from "@/views/other/TT1.vue";-->
<!--</script>-->

<!--<style>-->
<!--.tt1Div {-->
<!--  margin-top: 10px;-->
<!--  height: 300px;-->
<!--  width: 100%;-->
<!--  padding: 10px;-->
<!--  background-color: #2c3e50;-->
<!--}-->
<!--.tt1 {-->
<!--  background-color: white;-->
<!--  width: 100%;-->
<!--  height: calc(100%);-->
<!--}-->
<!--</style>-->

<!---->
<!--<template>-->
<!--  <div>-->
<!--    <button @click="showDialog">显示对话框</button>-->
<!--    <teleport to="body">-->
<!--      <div v-if="isDialogVisible" class="dialog">-->
<!--        <h2>欢迎来到 pidancode.com</h2>-->
<!--        <p>皮蛋编程，让编程更简单！</p>-->
<!--        <button @click="hideDialog">关闭</button>-->
<!--      </div>-->
<!--    </teleport>-->
<!--    &lt;!&ndash;    <TT1></TT1>&ndash;&gt;-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--// import TT1 from "@/views/other/TT1.vue";-->
<!--</script>-->
<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      isDialogVisible: false,-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    showDialog() {-->
<!--      this.isDialogVisible = true;-->
<!--    },-->
<!--    hideDialog() {-->
<!--      this.isDialogVisible = false;-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--.dialog {-->
<!--  position: fixed;-->
<!--  top: 50%;-->
<!--  left: 50%;-->
<!--  transform: translate(-50%, -50%);-->
<!--  border: 1px solid #ccc;-->
<!--  padding: 20px;-->
<!--  background-color: #fff;-->
<!--}-->
<!--</style>-->

<!-- 弹窗 - 成功提示 -->
<!--<template>-->
<!--  <div>-->
<!--    <button @click="showSuccess">显示成功提示</button>-->
<!--    <teleport to="body">-->
<!--      <div v-if="isSuccessVisible" class="success">操作成功！</div>-->
<!--    </teleport>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      isSuccessVisible: false,-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    showSuccess() {-->
<!--      this.isSuccessVisible = true;-->
<!--      setTimeout(() => {-->
<!--        this.isSuccessVisible = false;-->
<!--      }, 3000);-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--.success {-->
<!--  position: fixed;-->
<!--  top: 50%;-->
<!--  right: 50%;-->
<!--  padding: 10px;-->
<!--  background-color: #3c763d;-->
<!--  color: #fff;-->
<!--}-->
<!--</style>-->

<!-- 算法 -->
<template>
  <div class="calc">
    <!--    <ErFenFaPaiXu></ErFenFaPaiXu>-->
    <MaoPaoPaiXu></MaoPaoPaiXu>
  </div>
</template>

<script setup lang="ts">
import ErFenFaPaiXu from "@/views/other/ErFenFaPaiXu.vue";
import MaoPaoPaiXu from "@/views/other/MaoPaoPaiXu.vue";
</script>
