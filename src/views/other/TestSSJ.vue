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

<template>
  <div
    style="
      width: 90%;
      height: 90%;
      background-color: #42b983;
      position: absolute;
    "
  >
    <div class="show-div">正</div>
  </div>
</template>

<script setup lang="ts">
const w_h_value = "50px";
// const nnn = "2";
//  随机数字 1～10
function randomNumer() {
  let count = (Math.random() * 10).toFixed(0);
  console.log(`count1 ---${count}`);
  while (count === "0") {
    console.log(`count为0 再执行一次`);
    count = randomNumer();
  }
  return count;
}

function randomBaiNumer() {
  const count = (Math.random() * 100).toFixed(0) + "%";
  console.log(`count2 ---${count}`);
  return count;
}
</script>

<style>
@keyframes ball {
  0% {
    top: 0px;
    left: 0px;
    transform: rotate(0);
  }
  25% {
    top: 0px;
    left: calc(100% - v-bind(w_h_value) - 3px);
    transform: rotate(0.25turn);
  }
  50% {
    top: calc(100% - v-bind(w_h_value) - 3px);
    left: calc(100% - v-bind(w_h_value) - 3px);
    transform: rotate(0.5turn);
  }
  75% {
    top: calc(100% - v-bind(w_h_value) - 3px);
    left: 0px;
    transform: rotate(0.75turn);
  }
  100% {
    top: 0px;
    left: 0px;
    background-color: darkgoldenrod;
    transform: rotate(1turn);
  }
}
.show-div {
  width: v-bind(w_h_value);
  height: v-bind(w_h_value);
  border-radius: 50%;
  border: 3px solid black;
  position: relative;
  animation-name: ball;
  animation-duration: 5s;
  animation-iteration-count: v-bind(randomNumer());
  animation-timing-function: cubic-bezier(0.5, 0.5, 0.5, 0.5);
  animation-delay: 1s;
  animation-direction: alternate;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom right, #d834c2, #2088dd, #63e4b9);
}
</style>
