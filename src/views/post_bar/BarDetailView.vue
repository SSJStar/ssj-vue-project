<template>
  <div class="bar-detail-div">
    <!--   返回按钮   -->
    <label class="back" @click="back">返回</label>
    <!--   详情内容   -->
    <div class="content-div">
      <!--   标题   -->
      <label class="title">{{ barData.title }}</label>
      <!--   类型   -->
      <label class="type">#{{ barData.type }}#</label>
      <!--   文字内容   -->
      <label class="body-text">{{ barData.body }}</label>
      <!--   图片区域   -->
      <div v-for="(url, index) in barData.img_urls" :key="index">
        <img :src="url" alt="" class="content-div-img" />
      </div>
      <!--   互动区域：评论、点赞、收藏   -->
      <div class="interaction-div">
        <!--   点赞   -->
        <div class="action-div" @click="zanFun">
          <img :src="zanImg" alt="" />
        </div>
        <!--   评论   -->
        <div class="action-div">
          <img src="@/assets/post_bar/bar_comment.png" alt="" />
        </div>
        <!--   收藏   -->
        <div class="action-div" @click="collectFun">
          <img :src="collectionImg" alt="" />
        </div>
      </div>
    </div>

    <!--   评论区域   -->
    <CommentView></CommentView>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router/dist/vue-router";
import router from "@/router";
import CommentView from "@/views/post_bar/CommentView.vue"; //评论组建
let barData = ref({});

const route = useRoute();
onMounted(() => {
  // 从路由器「params」获取「文章详情」
  const jsonstr = route.params["jsonString"];
  barData.value = JSON.parse(jsonstr as string);
});

/** 返回 */
const back = () => {
  router.back();
};

/** 点赞 */
let zanBool = ref(false);
let zanImg = ref(require("@/assets/post_bar/bar_zan_off.png"));
const zanFun = () => {
  zanBool.value = !zanBool.value;
  if (zanBool.value) {
    zanImg.value = require("@/assets/post_bar/bar_zan_on.png");
  } else {
    zanImg.value = require("@/assets/post_bar/bar_zan_off.png");
  }
};

/** 收藏 */
let collectionBool = ref(false);
let collectionImg = ref(require("@/assets/post_bar/bar_collection_off.png"));
const collectFun = () => {
  collectionBool.value = !collectionBool.value;
  if (collectionBool.value) {
    collectionImg.value = require("@/assets/post_bar/bar_collection_on.png");
  } else {
    collectionImg.value = require("@/assets/post_bar/bar_collection_off.png");
  }
};
</script>

<style scoped>
.bar-detail-div {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ebebeb;
  overflow-y: scroll; /** 超出屏幕，可以滚动 */
  over-follow: hidden;
}

/* 返回按钮 */
.bar-detail-div .back {
  width: 70px;
  margin-top: 10px;
}

/** 帖子内容 */
.content-div {
  margin: 15px 25px 10px 25px;
  padding-bottom: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 5px 5px 8px #999999; /* 外阴影 */
  /*border-bottom: 6px solid #f6f6f6;*/
}
/* content-div统一设置label */
.content-div label {
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
}

/* 标题 */
.content-div .title {
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  margin-top: 10px;
}

/* 类型 */
.content-div .type {
  text-align: center;
  color: #60acf0;
}

/* 正文内容 */
.body-text {
  margin: 10px;
}
/* 正文 - 图片区域 */
.content-div-img {
  width: calc(100% - 10px * 2);
  max-height: 100%;
  margin-top: 10px;
}

/* 互动区域 */
.interaction-div {
  height: 40px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

.interaction-div .action-div {
  flex: auto;
}
.action-div img {
  width: 32px;
  height: 32px;
}
</style>
