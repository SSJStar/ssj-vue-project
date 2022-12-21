<!--榜单-->
<template>
  <div class="songlist">
    <!-- 菜单栏 -->
    <WYMusicNavgation :icon="iconRef" :title="titleRef"></WYMusicNavgation>
    <!-- 榜单数据列表 -->
    <div class="row">
      <div class="column" v-for="item in datas" :key="item.index">
        <!-- 列表-头部 -->
        <div class="column-head">
          <img :src="item.img" alt="" style="width: 80px; height: 80px" />
          <div class="column-head-right">
            <label>{{ item.title }}</label>
            <!-- 包括着2个图片：播放、添加 -->
            <div style="margin-top: 10px">
              <img
                :src="playIconRef"
                alt=""
                style="width: 22px; height: 22px; margin-right: 10px"
              />
              <img :src="addIconRef" alt="" style="width: 22px; height: 22px" />
            </div>
          </div>
        </div>
        <!-- 列表-正文 -->
        <div
          class="column-body"
          v-for="(title, index) in item.menus"
          :key="index"
        >
          <!-- 索引 + 歌曲名 -->
          <div
            class="column-body-item"
            :style="{ 'background-color': itemBgColor(index + 1) }"
          >
            <span>{{ index + 1 }}</span>
            <label>{{ title }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import WYMusicNavgation from "@/views/wymusic/WYMusicNavgation";
// 菜单 - 数组
const titleRef = ref("榜单");
const iconRef = require("@/assets/wymusic/wymusic_remen.png");
const playIconRef = require("@/assets/wymusic/wymusic_play_gray.png");
const addIconRef = require("@/assets/wymusic/wymusic_add.png");
// 榜单数据源
let datas = [
  {
    title: "飙升榜",
    img: "http://p4.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=100y100",
    menus: [
      "揉光",
      "心墙",
      "梦里花",
      "听后感",
      "梦里花",
      "Woo",
      "LLove",
      "小城故事",
      "江南烟雨",
      "最初的梦想",
    ],
  },
  {
    title: "新歌榜",
    img: "http://p3.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg?param=100y100",
    menus: [
      "123",
      "琳",
      "梦里花",
      "来年后-少年",
      "面壁者",
      "雨天",
      "雨天.2022",
      "我知道自己会输",
      "听后感",
      "轻描淡写",
    ],
  },
  {
    title: "原创榜",
    img: "http://p4.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg?param=100y100",
    menus: [
      "酷孩子",
      "感受",
      "琳",
      "天晴",
      "一键删除",
      "朋友身份",
      "孤鲸",
      "海马体",
      "云里雾里",
      "退场",
    ],
  },
];

//根据index，返回对应的颜色
const itemBgColor = (index) => {
  return index % 2 === 0 ? "rgba(0,0,0,0)" : "#e8e8e8";
};
</script>

<style scoped>
.songlist {
  display: flex;
  flex-direction: column;
}
.row {
  margin-top: 20px;
  display: flex;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.column {
  display: flex;
  flex: auto; /* 外容器display: flex;内容器flex: auto;则可以实现内容器之间等分 */
  flex-direction: column;
  padding: 20px 0 19px 0;
  border-right: 1px solid #ccc;
}
/* 头部 */
.column .column-head {
  display: flex;
  margin-bottom: 19px;
  margin-left: 19px;
}
.column-head-right {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}

/* 头部 - 标题 */
.column-head .column-head-right label {
  font-size: 14px;
  color: #333;
  font-weight: bold;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
/* 正文 */
.column-body {
  display: flex;
  flex-direction: column;
}
/* 正文 - item元素 */
.column-body-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 32px;
}
/* 正文 - item元素 - span */
.column-body-item span {
  color: #c10d0c;
  width: 35px;
}
/* 正文- 文字 */
.column-body label {
  font-size: 12px;
  color: #000;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
