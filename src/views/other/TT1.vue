<!--<template>-->
<!--  <div class="gg">-->
<!--    <teleport to="body">-->
<!--      <div-->
<!--        style="-->
<!--          width: 200px;-->
<!--          height: 80px;-->
<!--          background-color: #60acf0;-->
<!--          margin-top: calc(50% - 40px);-->
<!--          margin-left: calc(50% - 100px);-->
<!--          /*text-align: center;*/-->
<!--          /*align-items: center;*/-->
<!--          /*justify-content: center;*/-->
<!--        "-->
<!--      >-->
<!--        <h2>子组件头部</h2>-->
<!--      </div>-->
<!--    </teleport>-->
<!--    <div v-for="(item, index) in datas" :key="index">-->
<!--      <h2>{{ item }}</h2>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { particles } from "@/views/other/particles.js";-->
<!--import { loadSlim } from "tsparticles-slim";-->
<!--import { onMounted } from "vue";-->
<!--// let datas = [1, 3, 5, 7, 9];-->
<!--let datas = new Array(100).fill(Number).map((v, i) => i + 1);-->

<!--// onMounted(() => {});-->
<!--</script>-->

<!--<style>-->
<!--.gg {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  /*flex-shrink: 0;*/-->
<!--  overflow-y: scroll;-->
<!--  overflow-x: hidden;-->
<!--}-->
<!--</style>-->

<template>
  <div>
    <button @click="showSuccess">显示成功提示</button>
    <teleport to="body">
      <div v-if="isSuccessVisible" class="success">操作成功！</div>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSuccessVisible: false,
    };
  },
  methods: {
    showSuccess() {
      this.isSuccessVisible = true;
      setTimeout(() => {
        this.isSuccessVisible = false;
      }, 3000);
    },
  },
};
</script>

<style>
.success {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px;
  background-color: #3c763d;
  color: #fff;
}
</style>
