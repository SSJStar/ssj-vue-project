<template>
  <div class="xiaomi_nav">
    <!-- 图标 -->
    <img src="@/assets/xiaomi/logo-xiaomi.png" alt="" />
    <!-- 中间中部 -->
    <div class="nav_body">
      <div class="item_div" v-for="(item, index) in menus" :key="item.index">
        <label
          :style="{ color: titleColor(index) }"
          @click="menueClick(index)"
          >{{ item.title }}</label
        >
      </div>
    </div>

    <!-- 注册｜登录 -->
    <div class="login_or_register">
      <label>登录</label>
      <div class="split-line"></div>
      <label>注册</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedIndex = ref(0); //记录，点击了哪个菜单下标

// 数据源
const menus = [
  { title: "小米官网", url: "" },
  { title: "小米商城", url: "https://www.mi.com/shop" },
  { title: "小米影像", url: "https://www.mi.com/visual" },
  { title: "MIUI", url: "https://home.miui.com/" },
  { title: "IoT", url: "https://iot.mi.com/" },
  { title: "云服务", url: "https://i.mi.com/" },
  { title: "天星数科", url: "https://airstar.com/home" },
  { title: "有品", url: "https://www.xiaomiyoupin.com/" },
  { title: "小爱开放平台", url: "https://xiaoai.mi.com/" },
  { title: "企业团购", url: "https://xiaoai.mi.com/" },
];

/** 根据下标，返回对应的字体颜色 */
const titleColor = (index: any) => {
  if (index === selectedIndex.value) {
    return "#ff6900"; //被选中时候的字体颜色
  }
  return "white";
};

/** 菜单 - 点击事件 */
const menueClick = (index: any) => {
  if (index == 0) return; //第0个就是当前页，不需要做什么
  selectedIndex.value = index;
  window.open(menus[index].url);
};
</script>

<style scoped>
.xiaomi_nav {
  width: 100%;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
}

/* 图标 */
.xiaomi_nav img {
  margin-left: 17px;
  width: 34px;
  height: 34px;
}
/* 菜单区域 */
.nav_body {
  display: flex;
  flex: auto;
  justify-content: center;
}
.nav_body .item_div {
  margin-left: 20px;
  margin-right: 20px;
}
.nav_body label {
  font-family: "Microsoft Sans Serif";
  font-weight: bold;
  font-size: 13px;
}

/* 登录 ｜ 注册 */
.login_or_register {
  display: flex;
  margin-right: 17px;
  color: white;
  font-size: 14px;
}
/* 竖直线 - 样式 */
.login_or_register .split-line {
  width: 1px;
  height: 10px;
  margin: 5px 20px;
  background-color: white;
}
</style>
