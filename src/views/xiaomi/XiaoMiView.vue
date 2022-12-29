<template>
  <div class="xiao_mi" @scroll="scrollEvent" ref="xiaoMiDivRef">
    <!-- 导航 -->
    <XiaoMiNavagation class="XiaoMiNavagation"></XiaoMiNavagation>
    <!-- 主体内容 -->
    <!--    <div v-for="(items, index) in list_datas" :key="items.index" @click="imgClick(index)">-->
    <!--      <img :src="item.img" alt="" />-->
    <!--    </div>-->

    <div>
      <div v-for="(items, index) in list_datas" :key="items.index">
        <div
          v-for="(item, index2) in items"
          :key="item.index"
          @click="imgClick(index, index2)"
        >
          <img :src="item.img" alt="" style="width: 100%" />
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottomDiv">
      <label>本页面是模仿网易云音乐</label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const xiaoMiDivRef = ref();
import XiaoMiNavagation from "@/views/xiaomi/XiaoMiNavagation.vue";
const list_datas = [
  [
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/0bcd9a3b_a0d8_44da_9461_266728a2799a.jpeg?w=2560&amp;h=1080",
      url: "",
    },
  ],
  [
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/4bbc32cf_1fe0_45aa_a48f_74b9282edf9f.jpeg?w=2560&amp;h=1080",
      url: "",
    },
  ],
  [
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/40e9e799_93a6_43a2_b758_9c91c6ed726c.jpeg?w=2560&amp;h=1080",
      url: "",
    },
  ],
  [
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/e5395cf8_3fa0_473b_a2d1_645272e66e6b.jpeg?w=2560&amp;h=1080",
      url: "",
    },
  ],
  [
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/7bb4ef03_588a_49c7_bb9a_a18632681865.jpeg@base@tag=imgScale&amp;F=webp&amp;h=1080&amp;q=90&amp;w=2560",
      url: "",
    },
  ],
  [
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/482d5fa5_1a5f_4649_8d63_271a9ebd8f1b.jpeg@base@tag=imgScale&amp;F=webp&amp;h=1080&amp;q=90&amp;w=2560",
      url: "",
    },
  ],
  [
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/899249d7_b5c4_4831_845e_e65b2bcf4909.jpeg@base@tag=imgScale&amp;F=webp&amp;h=700&amp;q=90&amp;w=1270",
      url: "",
    },
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/9a0cb34c_92a2_4195_aa29_e1cedad83a32.jpeg@base@tag=imgScale&amp;F=webp&amp;h=700&amp;q=90&amp;w=1270",
      url: "",
    },
  ],
];

/**
 * 图片点击
 *
 * 作者: 小青龙
 * 时间：2022/12/29 16:36:37
 * @param index {number}  点击了第几张图片
 * @return {void}
 */
const imgClick = (row: any, num: any) => {
  console.log("点击图片 -- " + row);
  // window.open("");
};

const scrollEvent = () => {
  // document.getElementsByClassName("").scr
  // console.log(e.srcElement.scrollTop || e.target.scrollTop); // 获取目标元素的滚动高度
  console.log("~~~");
  console.log(xiaoMiDivRef.value.scrollTop);
};
</script>

<style scoped>
.xiao_mi {
  width: 100%;
  height: 100%;
  position: absolute;
  /*background-color: #42b983;*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*overflow-y: scroll; !** 超出屏幕，可以滚动 *!*/
  /*position: absolute; !*不加这句，高度不能铺满*!*/
  /*background-color: #42b983;*/
}

.XiaoMiNavagation {
  position: fixed; /* 固定 */
  float: top;
}

/* 底部信息布局 */
.bottomDiv {
  height: 70px;
  background-color: #f2f2f2;
}
.bottomDiv label {
  color: #666;
}
</style>
<script setup lang="ts"></script>
