<template>
  <div class="SSJScroll">
    <div
      class="childDiv"
      :style="{ 'background-color': cols[item] }"
      v-for="item in 5"
      :key="item.index"
    >
      <label>{{ item }}</label>
    </div>
  </div>

  <!--  <button @click="lastPage()" style="width: 100px; height: 50px">上一页</button>-->
  <!--  <button @click="nextPage()" style="width: 100px; height: 50px">下一页</button>-->
</template>

<script setup>
import { ref } from "vue";
const cols = [
  "#23656c",
  "#36789b",
  "#778b8b",
  "#77cc8b",
  "#7878bb",
  "#23656c",
  "#36789b",
];
// const scrollRef = ref(null);
function lastPage() {
  console.log("cl is ok1");
  let scr = document.querySelector(".childDiv");
  // scr.parentElement.scrollTo(300, 0);
  scr.parentElement.scrollTo(0, 0);
}
function nextPage() {
  console.log("cl is ok");
  let scr = document.querySelector(".childDiv");
  // scr.parentElement.scrollTo(300, 0);
  scr.parentElement.scrollTo(scr.parentElement.offsetWidth, 0);
}
defineExpose({ lastPage, nextPage });
</script>

<style scoped>
.SSJScroll {
  display: flex;
  /*flex-direction: row;*/
  overflow-y: scroll;
  overflow: hidden;
  /*white-space: nowrap;*/
}
.SSJScroll .childDiv {
  width: 200px;
  height: 100px;
  /* 超出滚动的关键，没有它元素会自动缩小，不会滚动 */
  flex-shrink: 0;
}
</style>
<!--怎么使用-->
<!--<template>-->
<!--  <SSJScroll ref="sSJScrollDef"></SSJScroll>-->
<!--</template>-->
<!--翻页方法-->
<!--sSJScrollDef.value.lastPage(); //上一页-->
<!--sSJScrollDef.value.nextPage(); //下一页-->
