<!--新碟上架-->
<template>
  <div class="NewDiscDiv">
    <!-- 菜单栏 -->
    <WYMusicNavgation :icon="iconRef" :title="titleRef"></WYMusicNavgation>
    <div class="scrollDiv">
      <!--  箭头 向左  -->
      <img
        src="@/assets/wymusic/wymusic_arrowhead_left.png"
        :onclick="lastAction"
        alt=""
      />
      <!--      <SSJScroll class="SSJScrollClass" ref="sSJScrollDef"></SSJScroll>-->
      <!--  滑动组件  -->
      <el-scrollbar
        class="elScrollbar"
        wrap-style="overflow-x: hidden"
        ref="elScrollbarRef"
      >
        <div class="scrollbar-flex-content">
          <div v-for="item in disks" :key="item.index" class="scrollbar-item">
            <img :src="item.img" alt="" style="width: 100px; height: 100px" />
            <label class="scrollbar-item-title">{{ item.title }}</label>
            <label class="scrollbar-item-author">{{ item.author }}</label>
          </div>
        </div>
      </el-scrollbar>
      <!--  箭头 向右  -->
      <img
        src="@/assets/wymusic/wymusic_arrowhead_right.png"
        :onclick="nextAction"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import WYMusicNavgation from "@/views/wymusic/WYMusicNavgation";
import { ElScrollbar } from "element-plus";
import SSJScroll from "@/views/wymusic/SSJScroll";

const cols = [
  "#23656c",
  "#36789b",
  "#778b8b",
  "#77cc8b",
  "#7878bb",
  "#23656c",
  "#36789b",
];
// 菜单 - 数组
const titleRef = ref("新碟上架");
const iconRef = require("@/assets/wymusic/wymusic_remen.png");
const elScrollbarRef = ref(null); //ref<InstanceType<typeof ElScrollbar>>();
const sSJScrollDef = ref(null);
// const elScroll = (scrollLeft, scrollTop) => {
//   console.log(`返回滚动大小:${scrollLeft}  top:${scrollTop}`);
// };
// const disks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "", ""];
const disks = [
  {
    img: "http://p3.music.126.net/NlfZS1YWoTxfqwfQaXnMQw==/109951168067845875.jpg?param=100y100",
    title: "云泥之别",
    author: "太一",
  },
  {
    img: "http://p4.music.126.net/DHJ8rg-9pVtiwWGPIy-8ug==/109951168102656388.jpg?param=100y100",
    title: "循",
    author: "黑豹乐队",
  },
  {
    img: "http://p4.music.126.net/T-BlAhykcSeO74BB4uGvEQ==/109951168065531028.jpg?param=100y100",
    title: "Lowlife Princess: Noir",
    author: "BIBI",
  },
  {
    img: "http://p4.music.126.net/DOtaUFeUL2X9IItz4MVXNg==/109951168068405893.jpg?param=100y100",
    title: "Thriller 40",
    author: "Michael Jackson",
  },
  {
    img: "http://p4.music.126.net/KGeCikWKlAeZM4273ZqCwg==/109951168064764327.jpg?param=100y100",
    title: "TRIP",
    author: "袁娅维",
  },
  {
    img: "http://p3.music.126.net/qQ5e7rM-xY6YWJW9_3tR-w==/109951168121859537.jpg?param=100y100",
    title: "SOS",
    author: "SZA",
  },
  {
    img: "http://p3.music.126.net/78Ql9CjIxHvIHwSBg460pQ==/109951168105607111.jpg?param=100y100",
    title: "冷暖迁徙",
    author: "kKzk赵珂",
  },
  {
    img: "http://p3.music.126.net/kVb7tiamBwEEPzR0SlJb3g==/109951168129270915.jpg?param=100y100",
    title: "水值幻想",
    author: "lce Paper",
  },
];

// let gainMarginLeft = (index) => {
//   return index === 0 ? "0px" : "10px";
// };

// const gainMarginRight = (index) => {
//   // return (index + 1) % numberOfOneLine === 0 ? 0 : 10;
//   return index === disks.length - 1 ? 0 : 10;
// };

/** 定义一些常量 */
let numberOfOneLine = 5; // 每一页显示几个scrollbar-item
let pageNum = 0; //当前第几页
let marginValue = "10px"; // scrollbar-item 外边距
const itemHeight = "50px"; // scrollbar-item高度

/**
 * 上一页
 *
 * 作者: 小青龙
 * 时间：2022/12/13 17:06:49
 */
const lastAction = () => {
  console.log("上一页");
  // sSJScrollDef.value.lastPage();
  let scr = document.querySelector(".elScrollbar");
  pageNum = pageNum > 0 ? pageNum - 1 : 0;
  let offsetX = pageNum > 0 ? (pageNum - 1) * scr.offsetWidth : 0;
  elScrollbarRef.value.setScrollLeft(offsetX);
};

/**
 * 下一页
 *
 * 作者: 小青龙
 * 时间：2022/12/13 17:07:21
 */
const nextAction = () => {
  console.log("下一页");
  // sSJScrollDef.value.nextPage();
  pageNum++;
  let scr = document.querySelector(".elScrollbar");
  elScrollbarRef.value.setScrollLeft(pageNum * scr.offsetWidth);
};
</script>

<style>
.NewDiscDiv {
  display: flex;
  flex-direction: column;
}

.scrollbar-flex-content {
  display: flex;
}
.elScrollbar {
  width: 100%;
  overflow: hidden;
}
.scrollbar-item {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / v-bind(numberOfOneLine) - v-bind(marginValue) * 2);
  /*height: v-bind(itemHeight);*/
  margin: v-bind(marginValue);
  text-align: center;
  border-radius: 4px;
  /*background: var(--el-color-danger-light-9);*/
  color: var(--el-color-danger);
  min-size: 100%;
}
/* 标题名颜色 | 作者名颜色 */
.scrollbar-item .scrollbar-item-title,
.scrollbar-item-author {
  color: #333;
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: left;
}
.scrollbar-item .scrollbar-item-title {
  color: #333;
}
.scrollbar-item .scrollbar-item-author {
  color: #666;
}

.scrollDiv {
  display: flex;
}

/*.elScrollbar {*/
/*  !*overflow-x: hidden !important;*!*/
/*  overflow-x: hidden;*/
/*}*/
.scrollDiv .el-scrollbar__wrap {
  /*overflow-x: hidden !important;*/
  overflow-x: hidden;
}
.SSJScrollClass {
  margin-left: 5px;
  margin-right: 5px;
}
.scrollDiv img {
  width: 17px;
  height: 17px;
  margin: auto;
}

.childDiv {
  width: 200px;
  height: 100px;
  /* 超出滚动的关键，没有它元素会自动缩小，不会滚动 */
  flex-shrink: 0;
}
</style>
