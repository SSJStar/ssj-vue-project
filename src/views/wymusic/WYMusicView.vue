<template>
  <div class="WYMusicView">
    <!-- 导航 -->
    <WYHeadNav></WYHeadNav>
    <!-- 跑马灯 -->
    <PaoMaDeng></PaoMaDeng>
    <div class="row">
      <!-- 左边这一列 -->
      <div class="column-left">
        <!-- 热门推荐 -->
        <HotRecommend></HotRecommend>
        <!-- 新碟上架 -->
        <NewDisc></NewDisc>
        <!-- 榜单 -->
        <SongList></SongList>
        <!-- 距离底部20px间距 -->
        <span style="height: 20px"></span>
      </div>
      <!-- 右边这一列 -->
      <div class="column-right">
        <!-- 入驻歌手 -->
        <SettledSinger></SettledSinger>
        <!-- 热门主播 -->
        <HotAnchor></HotAnchor>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WYHeadNav from "@/views/wymusic/WYHeadNav.vue";
import HotRecommend from "@/views/wymusic/HotRecommend.vue";
import PaoMaDeng from "@/views/wymusic/PaoMaDeng.vue";
import SettledSinger from "@/views/wymusic/SettledSinger.vue";
import NewDisc from "@/views/wymusic/NewDisc.vue";
import SongList from "@/views/wymusic/SongList.vue";
import HotAnchor from "@/views/wymusic/HotAnchor.vue";
</script>

<style scoped>
/* 整体布局 */
.WYMusicView {
  width: 100%;
  height: 100%;
  overflow-y: scroll; /** 超出屏幕，可以滚动 */
  position: absolute; /*不加这句，高度不能铺满*/
  background-color: #f5f5f5;
}
/* 横向布局 */
.row {
  display: flex;
  background-color: #ffffff;
  width: 980px;
  margin-left: calc((100% - 980px) * 0.5);
  margin-right: calc((100% - 980px) * 0.5);
}
/* 左边这列布局 */
.row .column-left {
  width: calc(100% - 250px - 40px);
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 20px;
  border-left: 1px solid #ccc;
}
/* 右边这列布局 */
.row .column-right {
  display: flex;
  flex-direction: column;
  width: calc(250px - 20px * 2);
  padding-left: 20px;
  padding-right: 20px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
</style>
