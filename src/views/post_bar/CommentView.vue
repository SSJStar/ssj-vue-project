<template>
  <div class="commentView_div">
    <h1>热门评论</h1>
    <div
      class="vfor-comment-div"
      v-for="(item, index) in commentList.list.slice(0, showMaxCount)"
      :key="index"
    >
      <div class="comment_head_name">
        <!--  头像  -->
        <img class="comment_head" src="@/assets/nav/people.png" alt="" />
        <!--   评论人昵称   -->
        <label class="comment_name">{{ item.nick_name }}</label>
      </div>
      <!--   评论的内容   -->
      <label class="comment_content">{{ item.comment_content }}</label>

      <!--   消息回复区域   -->
      <div class="reply-area">
        <div
          class="vfor-reply-div"
          v-for="(reply, comment_id) in item.list"
          :key="comment_id"
        >
          <!--   李四@张三 说的不错！   -->
          <div class="reply-div">
            <label class="reply_name">{{ gainString(reply, item) }}</label>
            <label class="reply_content">{{ reply.comment_content }}</label>
          </div>
        </div>
      </div>
    </div>

    <!--   查看更多   -->
    <div class="more_div" v-if="showMaxCount === 2" @click="showMoreFun">
      <label>查看更多</label>
      <img src="@/assets/bar/inverted_triangle.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// 当前显示多少条评论，在没点击"查看更多"之前，最多显示2条，点击"查看更多"则展示所有评论
let showMaxCount = ref(2);

// 所有评论和回复
const commentList = {
  bar_id: "", //哪个帖子
  list: [
    {
      comment_id: "10235", //评论编号
      user_id: "100014", //当前评论人的用户ID
      nick_name: "张三", //当前评论人昵称
      head_url: "", //当前评论人头像URL地址
      reply_comment_id: "", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
      reply_userid: "", //回复谁的评论(userid)
      reply_name: "", //回复谁的评论(昵称)
      comment_num: "1", //第几条评论/回复
      comment_content: "文章不错哟",
      list: [
        {
          comment_id: "10236", //本条评论编号
          reply_comment_id: "10235", //回复谁的评论(评论编号)，如果为空表示文章的评论，而并非回复内容
          reply_userid: "100014", //回复谁的评论(userid)
          reply_name: "张三", //回复谁的评论(昵称)
          user_id: "100016", //当前回复人的userid
          nick_name: "王五",
          comment_num: "1", //第几条评论/回复
          comment_content: "说的没错",
        },
        {
          comment_id: "10237", //本条评论编号
          reply_comment_id: "10236", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
          reply_userid: "100016", //回复谁的评论(userid)
          reply_name: "王五", //回复谁的评论(昵称)
          user_id: "100014",
          nick_name: "张三",
          comment_num: "2", //第几条评论/回复
          comment_content: "谢谢王五的肯定",
        },
        {
          comment_id: "10238", //本条评论编号
          reply_comment_id: "10237", //回复谁的评论(评论编号)，如果为空表示文章的评论，而并非回复内容
          reply_userid: "100014", //回复谁的评论(userid)
          reply_name: "张三", //回复谁的评论(昵称)
          user_id: "100016",
          nick_name: "王五",
          comment_num: "1", //第几条评论/回复
          comment_content: "张三客气了",
        },
      ],
    },
    {
      comment_id: "10240", //评论编号
      user_id: "100021",
      nick_name: "林奇",
      reply_comment_id: "", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
      reply_userid: "100014", //回复谁的评论(userid)
      reply_name: "张三", //回复谁的评论(昵称)
      comment_num: "2", //第几条评论/回复
      comment_content: "文章不错，已经收藏了",
      list: [
        {
          comment_id: "10241", //本条评论编号
          reply_comment_id: "", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
          reply_userid: "", //回复谁的评论(userid)
          reply_name: "", //回复谁的评论(昵称)
          user_id: "100033",
          nick_name: "海大富",
          comment_num: "1", //第几条评论/回复 这个字段暂时没用到
          comment_content: "双击666",
        },
        {
          comment_id: "10242", //本条评论编号
          reply_comment_id: "", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
          reply_userid: "", //回复谁的评论(userid)
          reply_name: "", //回复谁的评论(昵称)
          user_id: "100053",
          nick_name: "林菲儿",
          comment_num: "2", //第几条评论/回复
          comment_content: "Good!",
        },
      ],
    },
    {
      comment_id: "10250", //评论编号
      user_id: "100021",
      nick_name: "王芳",
      reply_comment_id: "", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
      reply_userid: "", //回复谁的评论(userid)
      reply_name: "", //回复谁的评论(昵称)
      comment_num: "3", //第几条评论/回复
      comment_content: "我是王芳，我为你点赞！",
      list: [
        {
          comment_id: "10251", //本条评论编号
          reply_comment_id: "", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
          reply_userid: "", //回复谁的评论(userid)
          reply_name: "", //回复谁的评论(昵称)
          user_id: "100033",
          nick_name: "海大富",
          comment_num: "1", //第几条评论/回复 这个字段暂时没用到
          comment_content: "双击666",
        },
        {
          comment_id: "10252", //本条评论编号
          reply_comment_id: "", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
          reply_userid: "", //回复谁的评论(userid)
          reply_name: "", //回复谁的评论(昵称)
          user_id: "100053",
          nick_name: "林菲儿",
          comment_num: "2", //第几条评论/回复
          comment_content: "Good!",
        },
        {
          comment_id: "10253", //本条评论编号
          reply_comment_id: "10252", //回复谁的评论，如果为空表示文章的评论，而并非回复内容
          reply_userid: "100053", //回复谁的评论(userid)
          reply_name: "林菲儿", //回复谁的评论(昵称)
          user_id: "100055",
          nick_name: "张东笙",
          comment_num: "2", //第几条评论/回复
          comment_content: "Good!",
        },
      ],
    },
  ],
};

/**
 * reply_obj：回复数据模型
 * commentObj：整条评论
 * */
const gainString = (reply_obj, commentObj) => {
  /**
   *    1、一条评论对应一个回复list
   *    2、每条回复内容要和评论内容比较：
   *      2.1、回复.userid === 评论.userid,则显示"回复人:xxx"
   *      2.2、回复.userid !== 评论.userid,
   *        2.2.1、上一条回复人的消息 为空    则显示"回复人:xxx"
   *        2.2.2、上一条回复人的消息 不为空    则显示"回复人@上一条回复人:xxx"
   * */
  /**
   * 从回复列表list查询，筛选userid===comment_obj.user_id的数据,
   *   如果当前comment_obj是查询结果里第一条数据，且不是评论者自己回复自己，返回数据格式：张三
   *    否则：返回数据格式：张三@李四
   * */
  // 一个可能回复了很多消息条，我们要把当前回复人回复过的所有内容都收集到一个数组里da
  // const da = commentObj.list.filter(
  //   (item) => item.user_id === reply_obj.user_id
  // );
  //
  // //当前顶部评论的user_id 是否不等于 当前回复人的user_id
  // const compare_result = commentObj.user_id !== reply_obj.user_id;
  // if (da[0].comment_id === reply_obj.comment_id && compare_result) {
  //   // da[0].comment_id === reply_obj.comment_id 判断是否第一条
  //   // 第一次评论，且不是自己评论自己
  //   return `${reply_obj.nick_name}`;
  // } else {
  //   return `${reply_obj.nick_name} @ ${reply_obj.reply_name}`;
  // }

  //  自己回复自己 或 上一条回复的userid为空 则"昵称：xxx"
  const replyMyself = reply_obj.user_id === reply_obj.reply_userid;
  const replyEmpty = reply_obj.reply_userid.length === 0;
  if (replyMyself || replyEmpty) {
    // da[0].comment_id === reply_obj.comment_id 判断是否第一条
    // 第一次评论，且不是自己评论自己
    return `${reply_obj.nick_name}`;
  } else {
    return `${reply_obj.nick_name} @ ${reply_obj.reply_name}`;
  }
};

const showMoreFun = () => {
  showMaxCount.value = commentList.list.length;
};
</script>

<style scoped>
/* 评论区域*/
.vfor-comment-div {
  display: flex;
  flex-direction: column;
  /*background-color: #42b983;*/
  margin: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(20, 20, 20, 0.3);
}
.vfor-comment-div label {
  text-align: left;
}

/* 评论人:头像+昵称 */
.comment_head_name {
  display: flex;
  flex-direction: row;
  text-align: center;
}
.comment_head_name .comment_head {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.comment_head_name .comment_name {
  margin-left: 10px;
  width: 100%;
  /*background-color: #60acf0;*/
}
/* 评论内容 */
.vfor-comment-div .comment_content {
  margin: 5px 30px;
}

/* 回复区域 */
.reply-area {
  background-color: #f8f8f8;
  margin: 5px 30px;
}

.vfor-reply-div label {
  display: flex;
  text-align: left;
  color: #111111;
}

/* 回复人+回复内容 */
.reply-div {
  display: flex;
  flex-direction: row;
}
.reply-div .reply_name {
  color: #60acf0;
  margin-right: 10px;
}

/* 查看更多 */
.more_div label {
  color: #2088dd;
}
.more_div img {
  width: 20px;
  height: 20px;
  display: block;
  margin: 0 auto;
}
</style>
