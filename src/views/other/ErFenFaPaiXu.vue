<template>
  <div class="calc">
    <input
      v-model="checkValue"
      class="searchInput"
      placeholder="输入要查找的数据"
    />
    <button @click="erFenCheck">二分法查找</button>
    <!--    <button @click="maoPaoUP">冒泡排序-升序</button>-->
    <!--    <button @click="maoPaoDown">冒泡排序-降序</button>-->
    <!--    <button @click="diGui">递归</button>-->
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

  // // 深拷贝
  // let a1: number[] = [1, 3, 5, 6];
  // let b1 = a1;
  // b1.push(99);
  // console.log(`深拷贝:\na1: ${a1}    \nb1:${b1}`);
  // // 浅拷贝
  // let a2: number[] = [1, 3, 5, 6];
  // let b2 = Object.assign([], a2);
  // b2.push(99);
  // console.log(`浅拷贝:\na2: ${a2}    \nb2:${b2}`);

  // console.log("---" + Math.ceil((4 - 1) / 2));

  setTimeout(() => {
    createDatas(); // 生成数据源
  }, 1000);
});
let checkValue = "";
let datas: number[] = [];
const createDatas = () => {
  // console.log("random: ", Math.random());
  // console.log(`\n时间戳：${Date.parse(new Date().toString())}`);
  let lastNum = 0;
  // 生成100个不规则递增的数据
  datas = new Array(10000).fill(Number).map((v, i) => {
    // Math.random()    0~1
    // Math.ceil        向上取整
    let r = Math.ceil(Math.random() * 9 + 1); //1～10
    lastNum = lastNum + r;
    return lastNum;
  });
  // console.log(`\n时间戳：${Date.parse(new Date().toString())}`);
  console.log("数据源datas: ", datas);
};

/**
 * 二分法查找
 *
 *  作者：小青龙
 *  时间：2023/08/11 14:02:16
 */
const erFenCheck = () => {
  console.log("\n\n\n\n二分法开始，要查找的是：");
  console.log(Number(checkValue));

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
  let incremental = dataLast[dataLast.length - 1] > datas[0]; //是否递增,true:递增
  while (dataLast.length > 2) {
    i++;
    console.log(`\n----第${i}遍查询--`);
    let j = Math.floor((dataLast.length - 1) / 2); //取中间那个数序号，偶数情况特殊处理
    let isJiShu = false;
    if ((dataLast.length - 1) % 2 === 0) {
      //奇数个,假设dataLast有5个数，此处j=2，对应下标就是第三个，恰好是中间那个数
      isJiShu = true;
      middleNum = dataLast[j];
      console.log("\n中间数--" + j);
    } else {
      //   偶数个，假设dataLast有4个数（中间数下标应该是1和2，即j=1,j+1=2），应该取下标数据偏小的那个数
      isJiShu = false;
      console.log(
        `j是:${j}，j+1是:${j + 1}，dataLast[j]是:${
          dataLast[j]
        }，dataLast[j+1]是:${dataLast[j + 1]}`
      );
      if (dataLast[j] < dataLast[j + 1]) {
        // 说明是从小到大排序
        middleNum = dataLast[j];
        console.log("\n中间数--" + j);
      } else if (dataLast[j] > dataLast[j + 1]) {
        // 说明是从小到大排序
        middleNum = dataLast[j + 1];
        console.log("\n中间数--" + j + 1);
      } else {
        // 如果两个数一样，随便取一个
        middleNum = dataLast[j];
      }
    }
    console.log("中间数middleNum--" + middleNum);
    console.log("比较数compareNum--" + compareNum);
    if (compareNum > middleNum) {
      if (incremental) {
        // 升序且compareNum大于middleNum，说明要查找的compareNum，在右半部分，dataLast要去掉左半部分
        dataLast = dataLast.splice(j);
        console.log("取右半边，数据源更新后：" + dataLast);
      } else {
        // 降增排序且compareNum大于middleNum，说明要查找的compareNum，在左半部分
        dataLast = dataLast.splice(0, j);
        console.log("取左半边，数据源更新后：" + dataLast);
      }
    } else if (compareNum < middleNum) {
      if (incremental) {
        //升序且compareNum < middleNum，说明要查找的compareNum，在左半部分，dataLast要去掉左半部分
        dataLast = dataLast.splice(0, j);
        console.log("取左半边，数据源更新后：" + dataLast);
      } else {
        // 降增排序且compareNum < middleNum，说明要查找的compareNum，在右半部分，
        dataLast = dataLast.splice(j);
        console.log("取右半边，数据源更新后：" + dataLast);
      }
    } else {
      console.log("419找到了！");
      console.log(`一共查找了${i}遍`);
      return;
    }
  }
  if (dataLast.length === 2) {
    if (compareNum === dataLast[0]) {
      console.log("428找到了！");
    } else if (compareNum === dataLast[1]) {
      console.log("430找到了！");
    }
  } else {
    if (compareNum === dataLast[0]) {
      console.log("456找到了！");
    } else {
      console.log("查找的数据，不在数组里！");
    }
  }
  console.log(`一共查找了${i}遍`);
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
  align-items: center;
}
.calc input {
  margin: 10px 0;
  width: 400px;
  height: 50px;
  border-radius: 5px;
}
</style>
