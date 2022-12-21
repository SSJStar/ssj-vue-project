<!--热门主播-->
<template>
  <div class="hotAnchorDiv">
    <div class="navgation">热门主播</div>
    <!--  列表  -->
    <div class="list">
      <div class="list-item" v-for="(item, index) in datas" :key="index">
        <img :src="item.img" alt="" />
        <div class="list-item-right">
          <label class="list-item-right-title">{{ item.title }}</label>
          <span style="height: 5px"></span>
          <label class="list-item-right-desc">{{ item.desc }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data_img_wh = "40px"; //图片宽高
const datas = [
  {
    img: "http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40",
    title: "陈立",
    desc: "心理学家、美食家陈立教授",
  },
  {
    img: "http://p1.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg?param=40y40",
    title: "刘维-Julius",
    desc: "歌手、播客节目《维维道来》主理人",
  },
  {
    img: "http://p1.music.126.net/cKBFMV9toXn3qY9kqX6j9A==/109951168071041836.jpg?param=40y40",
    title: "莫非定律乐团",
    desc: "男女双人全创作独立乐团",
  },
  {
    img: "http://p1.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg?param=40y40",
    title: "碎嘴许美达",
    desc: "脱口秀网络红人",
  },
];
</script>

<style scoped>
.hotAnchorDiv {
  display: flex;
  margin-top: 30px;
  flex-direction: column;
}
.navgation {
  display: flex;
  float: left;
  width: 100%;
  height: 23px;
  border-bottom: 1px solid #ccc;
  color: #333;
  font-size: 12px;
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
  height: 43px;
  display: flex;
  margin-top: 7px;
}
.list-item img {
  width: v-bind(data_img_wh);
  height: v-bind(data_img_wh);
}
.list .list-item-right {
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
}
.list-item-right-title {
  text-align: start;
  font-size: 12px;
  color: #000;
}
.list-item-right-desc {
  text-align: start;
  font-size: 12px;
  color: #666;
}
.list-item-right-title,
.list-item-right-desc {
  width: 120px;
  /*height: 20px;*/
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
