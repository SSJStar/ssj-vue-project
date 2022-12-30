<template>
  <div class="xiao_mi" @scroll="scrollEvent">
    <!-- 导航 -->
    <XiaoMiNavagation class="XiaoMiNavagation"></XiaoMiNavagation>

    <!-- 主体内容 -->
    <div>
      <div
        class="v-for"
        v-for="(items, index) in list_datas"
        :key="items.index"
      >
        <div
          v-for="(item, index2) in items"
          :key="item.index"
          @click="imgClick(index, index2)"
        >
          <img :src="item.img" alt="" style="width: 100%" />
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="bottom-div">
      <label>模仿小米官网</label>
      <el-row class="bottom-div-main">
        <!--    菜单    -->
        <el-col :span="18">
          <!--    第一行    -->
          <el-row class="row1">
            <el-col :span="4"></el-col>
            <!--  style="background-color: #999"  -->
            <el-col :span="4"><label>选购指南</label></el-col>
            <!--  style="background-color: yellowgreen"  -->
            <el-col :span="4"><label>服务中心</label></el-col>
            <!--  style="background-color: pink"  -->
            <el-col :span="4"><label>线下门店</label></el-col>
            <!--  style="background-color: lightslategray"  -->
            <el-col :span="4"><label>关于小米</label></el-col>
            <el-col :span="4"><label>关注我们</label></el-col>
          </el-row>
          <!--    第二行    -->
          <el-row class="row2">
            <el-col :span="4"></el-col>
            <el-col :span="4"><label>手机</label></el-col>
            <el-col :span="4"><label>申请售后</label></el-col>
            <el-col :span="4"><label>小米之家</label></el-col>
            <el-col :span="4"><label>了解小米</label></el-col>
            <el-col :span="4"><label>新浪微博</label></el-col>
          </el-row>
          <!--    第三行    -->
          <el-row class="row3">
            <el-col :span="4"></el-col>
            <el-col :span="4"><label>电视</label></el-col>
            <el-col :span="4"><label>售后政策</label></el-col>
            <el-col :span="4"><label>服务网点</label></el-col>
            <el-col :span="4"><label>加入小米</label></el-col>
            <el-col :span="4"><label>官方微信</label></el-col>
          </el-row>
        </el-col>
        <!--    400-100-5678    -->
        <el-col class="contact-col" :span="6">
          <el-row class="contact-col-row">
            <label class="phone">400-100-5678</label>
          </el-row>
          <el-row class="contact-col-row">
            <label class="time">8:00-18:00(仅收市话费)</label>
          </el-row>
          <el-row class="contact-col-row">
            <div class="service-div">
              <img src="@/assets/xiaomi/xiaomi_message.png" alt="" />
              <label class="service">人工客服</label>
            </div>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
const xiaoMiDivRef = ref();
import XiaoMiNavagation from "@/views/xiaomi/XiaoMiNavagation.vue";
const list_datas = [
  [
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/0bcd9a3b_a0d8_44da_9461_266728a2799a.jpeg?w=2560&amp;h=1080",
      url: "https://www.mi.com/a/h/27112.html?sign=a7d51e68dee610c4cf3d1a062b553ab0&spmref=mihomepage.mtl_634a94febe07770001c7d35e.1",
    },
  ],
  [
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/4bbc32cf_1fe0_45aa_a48f_74b9282edf9f.jpeg?w=2560&amp;h=1080",
      url: "",
    },
  ],
  [
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/40e9e799_93a6_43a2_b758_9c91c6ed726c.jpeg?w=2560&amp;h=1080",
      url: "https://www.mi.com/redmi-k60-pro?spmref=mihomepage.mtl_63958f408a1e0e0001c29225.1",
    },
  ],
  [
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/e5395cf8_3fa0_473b_a2d1_645272e66e6b.jpeg?w=2560&amp;h=1080",
      url: "https://home.miui.com/?spmref=mihomepage.mtl_6395926d352df3000153a4d2.1",
    },
  ],
  [
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/7bb4ef03_588a_49c7_bb9a_a18632681865.jpeg@base@tag=imgScale&amp;F=webp&amp;h=1080&amp;q=90&amp;w=2560",
      url: "",
    },
  ],
  [
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/482d5fa5_1a5f_4649_8d63_271a9ebd8f1b.jpeg@base@tag=imgScale&amp;F=webp&amp;h=1080&amp;q=90&amp;w=2560",
      url: "",
    },
  ],
  [
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/899249d7_b5c4_4831_845e_e65b2bcf4909.jpeg@base@tag=imgScale&amp;F=webp&amp;h=700&amp;q=90&amp;w=1270",
      url: "",
    },
    {
      img: "https://img.youpin.mi-img.com/ferriswheel/9a0cb34c_92a2_4195_aa29_e1cedad83a32.jpeg@base@tag=imgScale&amp;F=webp&amp;h=700&amp;q=90&amp;w=1270",
      url: "",
    },
  ],
];
// 导航背景色
const nav_bg_color = ref("rgba(0, 0, 0, 0.0)");

const scrollEvent = (e: any) => {
  // console.log(e.srcElement.scrollTop,);
  // console.log(e.srcElement.scrollTop || e.target.scrollTop); // 获取目标元素的滚动高度
  // console.log(e.target.scrollTop); // 获取目标元素的滚动高度
  if (e.target.scrollTop > 10) {
    navBgColor(true);
  } else {
    navBgColor(false);
  }
};

/**
 * 图片点击
 *
 * 作者: 小青龙
 * 时间：2022/12/29 16:36:37
 * @param index {number}  点击了第几张图片
 * @return {void}
 */
const imgClick = (row: any, num: any) => {
  console.log("点击图片 -- " + row);
};

const navBgColor = (show: boolean) => {
  // if (show) {
  //   console.log("0.85");
  // } else {
  //   console.log("0.0");
  // }
  nav_bg_color.value = show ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0)";
};
// const scrollEvent = (e: any) => {
//   // document.getElementsByClassName("").scr
//   // console.log(e.srcElement.scrollTop || e.target.scrollTop); // 获取目标元素的滚动高度
//   console.log("~~~");
//   console.log(xiaoMiDivRef.value.scrollTop);
// };
//
// function scroll(e: {
//   srcElement: { scrollTop: any; offsetHeight: any; scrollHeight: number };
// }) {
//   console.log("1111111");
// }
</script>

<style scoped>
.xiao_mi {
  width: 100%;
  height: 1000px;
  position: absolute;
  overflow-y: scroll; /* 不设置这个属性，@scroll不生效 */
}

.XiaoMiNavagation {
  position: fixed; /* 固定 */
  float: top;
  background-color: v-bind(nav_bg_color);
}

.v-for {
  display: flex;
}

/* 底部信息布局 */
.bottom-div {
  /*height: 70px;*/
  /*background-color: #f2f2f2;*/
}
.bottom-div label {
  color: #666;
}

.bottom-div-main {
  margin: 20px 0;
}

.row1 label {
  color: #424242;
  font-size: 14px;
  font-family: "Microsoft Sans Serif";
}
.row2 label,
.row3 label {
  color: #757575;
  font-size: 12px;
  font-family: "Microsoft Sans Serif";
}

.contact-col-row {
  justify-content: center;
}
.contact-col .phone {
  color: #ff6900;
  font-size: 22px;
  font-weight: bold;
}
.contact-col .time {
  color: #616161;
  font-size: 12px;
}
/* 人工客服 */
.contact-col .service-div {
  border: 1px solid #ff6700;
  width: 118px;
  height: 28px;
  align-items: center;
  justify-content: center;
  display: flex;
}
.contact-col .service {
  color: #ff6700;
  font-size: 12px;
}
.service-div img {
  width: 12px;
  height: 12px;
}
</style>
<script setup lang="ts"></script>
