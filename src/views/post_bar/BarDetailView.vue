<template>
  <div class="bar-detail-div">
    <!--   返回按钮   -->
    <label class="back" @click="back">返回</label>
    <!--   详情内容   -->
    <div class="content-div">
      <!--   标题   -->
      <h1>{{ barData.title }}</h1>
      <!--   类型   -->
      <label>{{ barData.type }}</label>
      <!--   文字内容   -->
      <label>{{ barData.body }}</label>
      <!--   文字内容   -->
      <div v-for="(url, index) in barData.img_urls" :key="index">
        <img :src="url" alt="图{{index}}" style="width: 80%" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router/dist/vue-router";
// import postBarClass from "@/models/postBarClass.js";
import router from "@/router";
let barData = ref({});

const route = useRoute();
onMounted(() => {
  // console.log("111");
  // console.log(`${useRoute().query.name}`);
  // console.log(route.params.name);
  // console.log(route.params.jsonString);
  const jsonstr = route.params["jsonString"];
  barData.value = JSON.parse(jsonstr as string);
});
// defineExpose
// defineEmits
// defineProps
// const emit = defineEmits(["change", "selected"]);
// const props = defineProps({
//   bar: postBarClass, //数据model
// });

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
}
.content-div {
  margin: 15px 15px 10px 15px;
  padding-bottom: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 5px 5px 8px #999999; /* 外阴影 */
  overflow-y: scroll; /** 超出屏幕，可以滚动 */
}

.back {
  /*background-color: #42b983;*/
  width: 70px;
  margin-top: 10px;
}

label {
  text-align: left;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
