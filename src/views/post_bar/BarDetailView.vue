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
        <img
          :src="url"
          alt="图{{index}}"
          style="width: 80%; max-height: 100%"
          class="content-div-img"
        />
      </div>
      <!--   互动区域：评论、点赞、收藏   -->
      <div class="interaction-div">
        <!--   点杂   -->
        <div class="action-div">
          <img src="@/assets/post_bar/bar_zan.png" alt="" />
        </div>
        <!--   评论   -->
        <div class="action-div">
          <img src="@/assets/post_bar/bar_comment.png" alt="" />
        </div>
        <!--   收藏   -->
        <div class="action-div">
          <img src="@/assets/post_bar/bar_collection.png" alt="" />
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

const commentList = {
  bar_id: "", //哪个帖子
  list: [
    {
      comment_id: "10235", //评论编号
      user_id: "100014",
      nick_name: "张三",
      replyfrom: "", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
      comment_num: "1", //第几条评论/回复
      comment_content: "文章不错哟",
      list: [
        {
          comment_id: "10236", //本条评论编号
          reply_from: "10235", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
          user_id: "100016",
          nick_name: "王五",
          comment_num: "1", //第几条评论/回复
          comment_content: "文章不错哟",
        },
        {
          comment_id: "10237", //本条评论编号
          reply_from: "10236", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
          user_id: "100014",
          nick_name: "张三",
          comment_num: "2", //第几条评论/回复
          comment_content: "文章不错哟",
        },
      ],
    },
    {
      comment_id: "10240", //评论编号
      user_id: "100021",
      nick_name: "林奇",
      replyfrom: "", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
      comment_num: "2", //第几条评论/回复
      comment_content: "文章不错，已经收藏了",
      list: [
        {
          comment_id: "10241", //本条评论编号
          reply_from: "10240", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
          user_id: "100033",
          nick_name: "海大富",
          comment_num: "1", //第几条评论/回复
          comment_content: "文章不错哟",
        },
        {
          comment_id: "10242", //本条评论编号
          reply_from: "10240", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
          user_id: "100053",
          nick_name: "林菲儿",
          comment_num: "2", //第几条评论/回复
          comment_content: "文章不错哟",
        },
      ],
    },
  ],
};

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
  margin: 15px 15px 10px 15px;
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
  margin-left: 10px;
  margin-right: 10px;
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

/* 互动区域 */
.interaction-div {
  height: 40px;
  display: flex;
  flex-direction: row;
}

.interaction-div .action-div {
  flex: auto;
}
.action-div img {
  width: 32px;
  height: 32px;
}
</style>
