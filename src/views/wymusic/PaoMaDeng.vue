<!--榜单模块-->
<template>
  <div class="paoma">
    <!--  跑马灯  -->
    <el-carousel class="el-carousel">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="el-carousel-item-img" :src="loadCarouselUrl(item)" alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 下载 -->
    <!--    <div style="width: 250px; background-color: #42b983">-->
    <!--      <img class="download-img" :src="downLoadUrl" />-->
    <!--      <label style="float: top">PC 安卓 iPhone WP iPad Mac 六大客户端</label>-->
    <!--    </div>-->
    <div class="down-div">
      <!--      <img class="download-img" :src="downLoadUrl" />-->
      <label class="down-div-label"
        >PC 安卓 iPhone WP iPad Mac 六大客户端</label
      >
    </div>
  </div>
</template>

<script setup>
// 图片地址
// const localLoadUrl = "@/assets/wymusic/wymusic_download.jpg";
const downLoadUrl = require("@/assets/wymusic/wymusic_download.jpg");

const bgImg = require("@/assets/wymusic/yymusic_paoma_bg_img.jpg");
// const bgImg2 = "@/assets/wymusic/yymusic_paoma_bg_img.jpg";

/**
 * 获取轮播图URL地址
 *
 * 作者: 小青龙
 * 时间：2022/12/07 09:44:30
 * @param index {number}  第几张图
 * @return {string}
 */
let loadCarouselUrl = (index) => {
  //这里加require是因为，img的src默认被作为静态资源使用，动态使用的是不生效的，用require修饰就可以显示了
  return require("@/assets/wymusic/wymusic_carousel_0" + index + ".jpg");
};
</script>

<style scoped>
.paoma {
  padding-left: calc((100% - 980px) * 0.5);
  padding-right: calc((100% - 980px) * 0.5);
  display: flex;
  background-size: 6000px;
  background-image: url("@/assets/wymusic/yymusic_paoma_bg_img.jpg");
  /*background-image: "url(" +*/
  /*  require("@/assets/wymusic/yymusic_paoma_bg_img.jpg") + ")";*/
  /*background-image: "url(" + v-bind(bgImg) + ")";*/
  /*:background-image: url("https://www.bilibili.com/video/BV1GB4y177AN/?spm_id_from=333.788&vd_source=4e1816e25a760cb9dcd20fb7c36633e6");*/
}
/*.paoma {*/
/*  display: flex;*/
/*}*/

.el-carousel {
  width: calc(980px - 250px);
  /** 加1px是为了凑整，否则会出现导航条*/
  /*height: calc(730px / (1080 / 420) + 1px);*/
}

.el-carousel-item-img {
  position: relative;
}

.down-div {
  width: 250px;
  background-color: pink;
  /*background-image: url("@/assets/wymusic/wymusic_download.jpg");*/
  background-image: url("@/assets/wymusic/wymusic_download.jpg");
  display: flex;
  flex-direction: column;
  position: relative;
}
.down-div-label {
  /*float: bottom;*/
  position: absolute;
  color: white;
  font-size: 12px;
  /*background-color: #42b983;*/
  bottom: 10px;
  width: 100%;
}
/*.download-img {*/
/*  width: 100%;*/
/*  height: 100%;*/
/*}*/
</style>
