<template>
  <div class="wyhead-nav">
    <!-- 网易云音乐 -->
    <div style="display: flex; align-items: center">
      <img
        src="@/assets/wymusic/wymusic_logo.png"
        style="width: 40px; height: 40px"
        alt=""
      />
      <label style="font-size: 24px">网易云音乐</label>
    </div>

    <!-- 其它菜单 -->
    <span style="width: 10px" />
    <div class="otherMenuItem">
      <div class="vFor" v-for="item in items" :key="item.index">
        <div
          :style="{
            'background-color':
              item.selected === true ? '#000000' : 'rgba(0, 0, 0, 0)',
            height: '100%',
            'align-items': 'center',
            display: 'flex',
          }"
          @click="otherMenueClick(item.index)"
        >
          <label>
            {{ item.message.toString() }}
          </label>
        </div>
      </div>
    </div>
    <!-- hot图标 -->
    <img
      src="@/assets/wymusic/wymusic_hot.png"
      style="width: 28px; height: 19px; margin-top: -20px"
      alt=""
    />

    <!-- 搜索框 -->
    <span style="width: 66px" /><!-- 70px间距 -->
    <el-input
      type="search"
      class="searchInput"
      placeholder="音乐/视频/电台/用户"
      :prefix-icon="Search"
    ></el-input>

    <!-- 创作者中心 -->
    <span style="width: 10px" /><!-- 30px间距 -->
    <el-button
      :style="{
        'background-color': '#000',
        color: '#ccc',
        'border-width': '1px',
        'border-color': '#4f4f4f',
        'border-radius': '20px',
      }"
      >创作者中心</el-button
    >

    <!-- 登录 -->
    <span style="width: 20px" /><!-- 40px间距 -->
    <el-button style="background-color: unset; border-width: 0px; padding: 0"
      >登录</el-button
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
// 菜单 - 数组
const items = ref([
  { index: "0", message: "发现音乐", selected: false },
  { index: "1", message: "我的音乐", selected: false },
  { index: "2", message: "关注", selected: false },
  { index: "3", message: "商城", selected: false },
  { index: "4", message: "音乐人", selected: false },
  { index: "5", message: "下载客户端", selected: false },
]);

// 设置导航栏的高度、背景颜色、字体大小、字体颜色
let navgation_height = "70px";
let navgation_bgColor = "#242424";
let navgation_fontSize = "16px";
let navgation_titleColor = "#FFFFFF";

// 菜单 - 点击
function otherMenueClick(indexParamter) {
  items.value.forEach((item, index) => {
    if (index.toString() === indexParamter.toString()) {
      item.selected = true;
      console.log(`点击了${index} ${item.message}`);
    } else {
      item.selected = false;
    }
  });
}
</script>

<style>
.wyhead-nav {
  width: 100%;
  height: v-bind(navgation_height);
  overflow: hidden;
  background-color: v-bind(navgation_bgColor); /** cadetblue */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 标题 */
.wyhead-nav label {
  font-size: v-bind(navgation_fontSize);
  color: v-bind(navgation_titleColor);
}

.otherMenuItem {
  display: flex;
  height: 100%;
}
.otherMenuItem .vFor {
  height: 100%;
  align-items: center; /** 垂直居中 */
  display: flex;
}
.otherMenuItem label {
  color: white;
  margin-left: 10px;
  margin-right: 10px;
}
.searchInput {
  width: 158px;
  font-size: 12px;
  border-radius: 32px;
  color: #9b9b9b;
}
</style>
