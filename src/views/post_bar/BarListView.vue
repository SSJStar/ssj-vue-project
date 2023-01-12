<template>
  <div class="barlist_div">
    <!--    <label>文章列表</label>-->
    <div class="v-for-div" v-for="bar in barlist" :key="bar.bar_id">
      <div class="title_type_div">
        <label class="bar_title">{{ bar.title }}</label>
        <label class="bar_type">{{ bar.type }}</label>
      </div>
      <label class="bar_content">{{ bar.body }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const barlist = ref([
  {
    bar_id: "10001",
    type: "风景",
    title: "春节假期去哪儿玩？",
    body: "春节适合去玩的地方有：庐山西海风景名胜区；虎峰岭；蝴蝶泉；拙政园；牛背山；洮河风情线；花田溪谷；泰山；园林博物馆；武隆绝壁等。 虎峰岭：享有四季风光的虎峰岭，是黑龙江省东南旅游走廊上，新升起的一颗璀璨明珠，是旅游、度假、摄影、绘画创作的绝佳胜地。",
    img_urls: [
      "https://img2.baidu.com/it/u=923478948,106462584&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
      "https://lmg.jj20.com/up/allimg/tp08/45041324391718-lp.jpg",
      "https://img13.51tietu.net/pic/20200120/pg53i3ybyoapg53i3ybyoa.jpg",
    ],
  },
  {
    bar_id: "10002",
    type: "美食",
    title: "浙江小吃",
    body:
      '酥油饼，又称吴山酥油饼，据说距今有七八百年的历史，因为饼开蒙茸有如蓑衣，所以杭人又称之为"蓑衣饼"，“大救驾”。数百年来，但凡...\n' +
      "宁波汤圆，作为浙江宁波最著名的特色小吃，不但是春节，元宵节的食俗，而且历史十分悠久。据说，宁波汤圆起源于宋朝，是用黑芝麻，猪油，白砂糖，糯米粉做成...\n" +
      "金华汤包，提到金华很多人第一想到的是金华火腿，其实在金华出名的不只是火腿，还有汤包，在当地具有“金华第一点”的美誉，也是南方小吃汤包中的佼佼..",
    img_urls: [
      "https://img2.baidu.com/it/u=923478948,106462584&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
      "https://lmg.jj20.com/up/allimg/tp08/45041324391718-lp.jpg",
      "https://img13.51tietu.net/pic/20200120/pg53i3ybyoapg53i3ybyoa.jpg",
    ],
  },
  {
    bar_id: "10003",
    type: "风景",
    title: "杭州西湖",
    body: "西湖景区总面积49平方千米，汇水面积为21.22平方千米，湖面面积为6.38平方千米。西湖南、西、北三面环山，湖中白堤、苏堤、杨公堤、赵公堤将湖面分割成若干水面。",
    img_urls: [
      "https://img2.baidu.com/it/u=923478948,106462584&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
      "https://lmg.jj20.com/up/allimg/tp08/45041324391718-lp.jpg",
      "https://img13.51tietu.net/pic/20200120/pg53i3ybyoapg53i3ybyoa.jpg",
    ],
  },
  {
    bar_id: "10004",
    type: "风景",
    title: "杭州长桥",
    body: "长桥是西湖三大情人桥之一,一说梁祝十八相送到此饯别,在桥上来来回回走了十八里路,祝英台以物喻情打了十八个比喻,是谓“路长桥不长”;",
    img_urls: [
      "https://img2.baidu.com/it/u=923478948,106462584&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
      "https://lmg.jj20.com/up/allimg/tp08/45041324391718-lp.jpg",
      "https://img13.51tietu.net/pic/20200120/pg53i3ybyoapg53i3ybyoa.jpg",
    ],
  },
  {
    bar_id: "10005",
    type: "风景",
    title: "杭州断桥",
    body:
      "许仙和白娘子爱情传说\n" +
      "这个故事让断桥成为西湖上最著名的桥。白娘子是山中修炼的一条小白蛇，被一个捕蛇老人抓住，差一点遭遇杀身之祸，被一个小牧童所救。经过修炼，白娘子化做人形，来到杭州西湖报恩。观音大士说“有缘千里来相会，须往西湖高处寻”。在杭州西湖的断桥上，白娘子找到了前世的救命恩人许仙，以身相许，结为夫妻。在经历水漫金山，在断桥邂逅重逢，续前缘。",
    img_urls: [
      "https://img2.baidu.com/it/u=923478948,106462584&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
      "https://lmg.jj20.com/up/allimg/tp08/45041324391718-lp.jpg",
      "https://img13.51tietu.net/pic/20200120/pg53i3ybyoapg53i3ybyoa.jpg",
    ],
  },
]);
</script>

<style scoped>
.barlist_div {
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}
.v-for-div {
  margin: 15px 15px 0 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 5px 5px 8px #999999; /* 外阴影 */
}
/* 标题、类型的父div */
.title_type_div {
  display: flex;
  border-bottom: 1px solid #ccc;
  float: left;
  margin-left: 10px;
}

/* 标题 */
.bar_title {
  font-size: 20px;
  color: #393939;
  padding-top: 5px;
  padding-bottom: 5px;
}
/* 类型 */
.bar_type {
  margin-left: 15px;
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
}

/* 内容 */
.bar_content {
  margin: 15px 15px 15px 15px;
  text-align: left;
}
</style>
