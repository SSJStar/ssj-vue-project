<template>
  <div class="calc">
    <input placeholder="请输入需要排序的数，以英文逗号隔开" v-model="daRef" />
    <button class="button" @click="startAction">冒泡排序 - 升序</button>
    <button class="button" @click="youhuaStartAction">
      冒泡排序 - 升序（优化）
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let daRef = ref("");

// small -> big
const startAction = () => {
  console.log("\n\n-----以下是常规下的冒泡排序（升序）-----");
  // let da: number[] = [5, 1, 6, 4, 7, 8];
  let da: number[] = daRef.value.split(",").map(Number);
  console.log(`要排序的数据源是:${da}`);
  let xun = true;
  let count = 0;
  while (xun) {
    count++;
    console.log(`\n---第${count}遍排序---`);
    let exchangeCount = 0;
    for (let i = 0; i < da.length; i++) {
      if (da[i] > da[i + 1]) {
        exchangeCount++;
        // 交换 da[i] 和 da[i + 1]
        const a = da[i];
        da[i] = da[i + 1];
        da[i + 1] = a;
        console.log(`da${i}和da${i + 1} 交换，交换后顺序：${da}`);
      }
    }
    console.log(`第${count}遍排序后，数据变为 ：${da}`);
    if (count == da.length - 1) break;
  }
  console.log(`最终，排序后的数据 ：${da}   ，共执行了:${count}遍`);
};

/**
 * 冒泡排序-升序（优化）
 *  作者：小青龙
 *  时间：2023/08/29 15:06:18
 */
const youhuaStartAction = () => {
  /**
   *  【核心思想是：每次交换后，数据源的索引都会变成"0～最后一个交换位置"】
   *
   *  （假设数据源数组为a[]，新数组为b[]）
   *  1、记录最后一次交换的位置，将它后面的那些数从 a[] 里面剔除（因为这部分的数据已经排序好了）并添加到 b[] 保存起来，
   *  2、当数据源数组 a[] 内的数字只剩下两个数字的时候，对这俩数字进行排序，
   *  3、将b[]数组的内容倒叙，因为这是升序冒泡，即大的数要往后调，而插入的时候是从0开始插入，即约大的数反而在前面（比如b[]=[8,7,6,5,4]），
   *  倒叙后的b[]就变成了[4,5,6,7,8]
   *  4、将倒叙后的b[]，插入到a[]的最后面，此刻的a[]就是排序后的最终结果
   * */
  console.log("\n\n-----以下是优化后的冒泡排序（升序）-----");
  // let da: number[] = [5, 1, 6, 4, 7, 8];
  let da: number[] = daRef.value.split(",").map(Number);
  console.log(`要排序的数据源是:${da}`);
  let xun = true;
  let count = 0;
  let daComplete: number[] = []; //数据源的剔除的数据会被它接收
  while (xun) {
    count++;
    let exchangeCount = 0;
    let indexLast = 0; // //最后一次交换的索引位置，比如index=2和index=3的数值交换，则maxExchangeIndex为2
    console.log(`\n-----第${count}遍排序开始！！！`);
    for (let i = 0; i < da.length - 1; i++) {
      if (da[i] > da[i + 1]) {
        exchangeCount++;
        // 交换 da[i] 和 da[i + 1]
        const a = da[i];
        da[i] = da[i + 1];
        da[i + 1] = a;
        indexLast = i;
        console.log(
          `da${i}和da${
            i + 1
          } 交换，交换后顺序：${da}，交换索引是 ：${indexLast}`
        );
      }
    }
    daComplete = daComplete.concat(da.slice(indexLast + 1)); //da.slice返回的是一个数组，这里不能用push，只能用concat
    da = da.slice(0, indexLast + 1); //截取0～indexLast位置的数组内容，indexLast后面的内容已经排序好了
    // 比如当前6个数组，但是最后一次交换是i=2和i=3交换，说明最后两个数组已经排序好了，且是最大的两个数字
    console.log(
      `第${count}遍排序结束，此刻的数据源变为： ：${da}  ，最后一次交换索引是：${indexLast}`
    );
    if (da.length === 2) {
      if (da[0] > da[1]) {
        const a = da[0];
        da[0] = da[1];
        da[1] = a;
        count++;
      }
      indexLast = 0;
    } else if (da.length === 1) {
      indexLast = 0;
    }
    if (indexLast == 0) break;
  }
  console.log(`da ：${da}`);
  console.log(`daComplete ：${daComplete}`);
  da = da.concat(daComplete.sort()); // sort：数组倒叙
  console.log(`排序后da ：${da} \n 共执行了:${count}遍`);
};
</script>

<style>
.button {
  margin: 20px 10px;
  height: 36px;
  border-radius: 4px;
  border-width: 0;
}
.calc input {
  width: 200px;
  height: 36px;
  margin: 20px 20px;
}
</style>
