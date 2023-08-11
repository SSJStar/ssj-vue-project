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
    <input placeholder="输入数据源" />
    <input
      v-model="checkValue"
      class="searchInput"
      placeholder="输入要查找的数据"
    />
    <button @click="erFenCheck">二分法查找</button>
    <button @click="maoPaoUP">冒泡排序-升序</button>
    <button @click="maoPaoDown">冒泡排序-降序</button>
    <button @click="diGui">递归</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
onMounted(() => {
  // console.log(`时间戳：${Date.parse(new Date().toString())}`);
  // // b1 = a1, b1发生改变，观察a1、b1
  // console.log("\nb1 = a1, b1发生改变，观察a1、b1:");
  // let a1 = ref(100);
  // let b1 = a1;
  // b1.value = 90;
  // console.log(`a1:${a1.value}  b1:${b1.value}`);
  //
  // // b2 = a2, a2发生改变，观察a2、b2
  // console.log("\nb2 = a2, a2发生改变，观察a2、b2:");
  // let a2 = ref(100);
  // let b2 = a2;
  // a2.value = 90;
  // console.log(`a2:${a2.value}  b2:${b2.value}`);
  //
  // // c1 = d1, b1发生改变，观察c1、d1
  // console.log("\nc1 = d1, b1发生改变，观察c1、d1:");
  // let c1 = ref(100);
  // let d1 = ref(c1);
  // d1.value = 90;
  // console.log(`c1:${c1.value}  d1:${d1.value}`);
  //
  // // c2 = d2, c2发生改变，观察c2、d2
  // console.log("\nc2 = d2, c2发生改变，观察c2、d2:");
  // let c2 = ref(100);
  // let d2 = ref(c2);
  // c2.value = 90;
  // console.log(`c2:${c2.value}  d2:${d2.value}`);
  //
  // // e1 = f1, e1发生改变，观察e1、f1
  // console.log("\ne1 = f1, e1发生改变，观察e1、f1:");
  // let e1 = ref(100);
  // let f1 = reactive(e1);
  // e1.value = 90;
  // console.log(`e1:${e1.value}  f1:${f1.value}`);
  //
  // // e2 = f2, f2发生改变，观察e2、f2
  // console.log("\ne2 = f2, e2发生改变，观察e2、f2:");
  // let e2 = ref(100);
  // let f2 = reactive(e2);
  // f2.value = 90;
  // console.log(`e2:${e2.value}  f2:${f2.value}`);

  // let d = [1, 3, 5, 6, 8, 9, 15, 17, 19];
  // const a = Math.ceil(d.length / 2);
  // d = d.splice(0, 4);
  // console.log("111数据源更新后：" + d);

  // 深拷贝
  let a1: number[] = [1, 3, 5, 6];
  let b1 = a1;
  b1.push(99);
  console.log(`深拷贝:\na1: ${a1}    \nb1:${b1}`);
  // 浅拷贝
  let a2: number[] = [1, 3, 5, 6];
  let b2 = Object.assign([], a2);
  b2.push(99);
  console.log(`浅拷贝:\na2: ${a2}    \nb2:${b2}`);

  console.log("---" + Math.ceil((4 - 1) / 2));

  setTimeout(() => {
    createDatas(); // 生成数据源
  }, 1000);
});
let checkValue = "";
let datas: number[] = [];
const createDatas = () => {
  // console.log("random: ", Math.random());
  console.log(`\n时间戳：${Date.parse(new Date().toString())}`);
  let lastNum = 0;
  // 生成100个不规则递增的数据
  datas = new Array(10000).fill(Number).map((v, i) => {
    // Math.random()    0~1
    // Math.ceil        向上取整
    let r = Math.ceil(Math.random() * 9 + 1); //1～10
    lastNum = lastNum + r;
    return lastNum;
  });
  console.log(`\n时间戳：${Date.parse(new Date().toString())}`);
  console.log("数据源datas: ", datas);
};

/**
 * 二分法查找
 *
 *  作者：小青龙
 *  时间：2023/08/11 14:02:16
 */
const erFenCheck = () => {
  console.log("\n\n\n\n二分法开始");
  console.log(Number(checkValue));
  // return;
  // eslint-disable-next-line no-unreachable
  if (checkValue === "") {
    console.log("查询内容不能为空！");
    return;
  }
  let compareNum = Number(checkValue);
  let middleNum = 0; // 数据源中间数，每次比较完都会变化
  let dataLast = Object.assign([], datas); //浅拷贝
  console.log("dataLast.length--" + dataLast.length);
  let i = 0; //第几遍查找
  while (dataLast.length >= 2) {
    i++;
    console.log(`\n----第${i}遍查询--`);
    let j = Math.floor((dataLast.length - 1) / 2); //取中间那个数序号，偶数情况特殊处理
    let isJiShu = false;
    if ((dataLast.length - 1) % 2 === 0) {
      //奇数个,假设有5个数，此处j=2，对应下标就是第三个，符合中间数
      isJiShu = true;
      middleNum = dataLast[j];
      console.log("\n中间数--" + j);
    } else {
      //   偶数个，假设有4个数（中间数下标应该是1和2），j=1，此处middleNum取：j和j+1两者偏小的那个
      isJiShu = false;
      console.log(
        `j是:${j}，j+1是:${j + 1}，dataLast[j]是:${
          dataLast[j]
        }，dataLast[j+1]是:${dataLast[j + 1]}`
      );
      if (dataLast[j] < dataLast[j + 1]) {
        middleNum = dataLast[j];
        console.log("\n中间数--" + j);
      } else {
        middleNum = dataLast[j + 1];
        console.log("\n中间数--" + j + 1);
      }
    }

    console.log("middleNum--" + middleNum);
    console.log("compareNum--" + compareNum);
    if (compareNum > middleNum) {
      //说明要查找的compareNum，在右半部分，dataLast要去掉左半部分
      dataLast = dataLast.splice(j);
      console.log("取右半边，数据源更新后：" + dataLast);
      // console.log("datas更新后：" + datas);
    } else if (compareNum < middleNum) {
      //说明要查找的compareNum，在左半部分，dataLast要去掉左半部分
      dataLast = dataLast.splice(0, j);
      console.log("取左半边，数据源更新后：" + dataLast);
      // console.log("datas更新后：" + datas);
    } else {
      console.log("找到了！");
      break;
    }
  }
  console.log(`一共查找了${i}遍`);
};

/**
 * 冒泡排序-升序
 *
 *  作者：小青龙
 *  时间：2023/08/11 14:02:16
 */
const maoPaoUP = () => {
  console.log(`\n时间戳：${Date.parse(new Date().toString())}`);
};

/**
 * 冒泡排序-降序
 *
 *  作者：小青龙
 *  时间：2023/08/11 14:02:16
 */
const maoPaoDown = () => {
  console.log(`\n时间戳：${Date.parse(new Date().toString())}`);
};

/**
 * 递归排序
 *
 *  作者：小青龙
 *  时间：2023/08/11 14:02:16
 */
const diGui = () => {
  console.log(`\n时间戳：${Date.parse(new Date().toString())}`);
};
</script>

<style>
.calc {
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  /*text-align: center;*/
  align-items: center;
}
.calc input {
  margin: 10px 0;
  width: 400px;
  height: 50px;
  border-radius: 5px;
}
/*.searchInput {*/
/*  margin-top: 100px;*/
/*}*/
</style>
