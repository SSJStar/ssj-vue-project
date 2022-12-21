<!--入驻歌手-->
<template>
  <div class="hotAnchorDiv">
    <!--  导航  -->
    <div class="navgation">
      <label class="titleLabel">入驻歌手</label>
      <div class="checkAllDiv">
        <label>查看全部</label>
        <img src="@/assets/wymusic/wymusic_more.png" alt="" />
      </div>
    </div>
    <!--  列表  -->
    <div class="list">
      <div class="list-item" v-for="(item, index) in datas" :key="index">
        <img :src="item.img" alt="" />
        <div class="list-item-right">
          <label class="list-item-right-title">{{ item.title }}</label>
          <span style="height: 8px"></span>
          <label class="list-item-right-desc">{{ item.desc }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data_img_wh = "62px"; //图片宽高
const datas = [
  {
    img: "http://p2.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg?param=62y62",
    title: "张惠妹aMEI",
    desc: "台湾歌手张惠妹",
  },
  {
    img: "http://p2.music.126.net/TQZGbxp-xnJla-q7ii9z0A==/1364493985498917.jpg?param=62y62",
    title: "吴莫愁Momo",
    desc: "《中国好声音》选手",
  },
  {
    img: "http://p2.music.126.net/ZEEvSOoXV7Dv2QEkqUN3zg==/109951165625860507.jpg?param=62y62",
    title: "孙楠",
    desc: "歌手孙楠代表作《你快回来》等",
  },
  {
    img: "http://p2.music.126.net/1GIlkxKmvKu66ufU83FyvA==/31885837222663.jpg?param=62y62",
    title: "麦田老狼",
    desc: "歌手，音乐人，代表作《同桌的你》等",
  },
  {
    img: "http://p2.music.126.net/MXMZYksJmsa0gcGkuk2mDQ==/109951167712155407.jpg?param=62y62",
    title: "陈楚生",
    desc: "唱作歌手",
  },
];
</script>

<style scoped>
.hotAnchorDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}
.navgation {
  display: flow;
  float: left;
  width: 100%;
  height: 23px;
  border-bottom: 1px solid #ccc;
  color: #333;
  font-size: 12px;
}
/* 标题 */
.navgation .titleLabel {
  float: left;
}
/* 查看所有 */
.navgation .checkAllDiv {
  float: right;
  height: 100%;
  align-items: center;
}
/* 图片 */
.navgation .checkAllDiv img {
  margin-left: 5px;
  width: 12px;
  height: 12px;
}
/* 所有文字 */
.navgation label {
  font-size: 12px;
  color: #666666;
}

/* 列表 */
.list {
  display: flex;
  flex-direction: column;
  margin-top: 14px;
}
.list-item {
  width: 100%;
  height: 62px;
  display: flex;
  margin-top: 10px;
  background-color: #fafafa;
  border: 1px solid #e9e9e9;
  border-left: none;
}
.list-item img {
  width: v-bind(data_img_wh);
  height: v-bind(data_img_wh);
}
.list .list-item-right {
  display: flex;
  flex-direction: column;
  padding: 10px 10px 5px 10px;
}
.list-item-right-title {
  text-align: start;
  font-size: 14px;
}
.list-item-right-desc {
  text-align: start;
  font-size: 12px;
}
.list-item-right-title,
.list-item-right-desc {
  width: 120px;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
