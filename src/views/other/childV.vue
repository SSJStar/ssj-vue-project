<template>
  <h2>333</h2>
  <!-- 下拉框 -->
  <!--  <el-select-->
  <!--    v-model="menusTitle"-->
  <!--    multiple-->
  <!--    collapse-tags-->
  <!--    collapse-tags-tooltip-->
  <!--    :placeholder="props.placeholder"-->
  <!--    clearable-->
  <!--    @clear="clearData"-->
  <!--  >-->
  <!--    &lt;!&ndash; @change="changeSelectMenu" &ndash;&gt;-->
  <!--    <el-checkbox v-model="checkedAll" @change="selectAll">全选</el-checkbox>-->
  <!--    <el-option-->
  <!--      v-for="(item, index) in menuList"-->
  <!--      :key="item[props.id]"-->
  <!--      :value="item[props.id]"-->
  <!--    >-->
  <!--      <el-checkbox-->
  <!--        :label="item[props.label]"-->
  <!--        size="large"-->
  <!--        @change="changeCheckBox(item, index)"-->
  <!--        :checked="isChecked(item, index)"-->
  <!--        v-model="checkBoxObj[index]"-->
  <!--      />-->
  <!--    </el-option>-->
  <!--  </el-select>-->
</template>

<script lang="ts" setup>
import { ref, reactive, defineProps, defineEmits } from "vue";
const props = defineProps({
  list: { type: Array, required: true },
  id: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: { type: Array },
  placeholder: { type: String, default: "选择" },
});
const emit = defineEmits(["update:modelValue"]);
const value = ref("");
const checkedAll = ref("false");
const menus = ref([]);
// eslint-disable-next-line vue/no-setup-props-destructure
const menuList = props.list;
const checkBoxObj: any = ref({});
menuList.forEach((res, index) => {
  checkBoxObj.value[index] = false;
});
const menusTitle = ref([]);
// eslint-disable-next-line @typescript-eslint/no-empty-function
const changeSelectMenu = (val: any) => {};
const selectAll = (value: any) => {
  // menus.value = [];
  // menusTitle.value = [];
  // if (value) {
  //   menuList.forEach((item, index) => {
  //     menus.value.push(item[props.id]);
  //     menusTitle.value.push(item[props.label]);
  //     checkBoxObj.value[index] = true;
  //   });
  // } else {
  //   menus.value = [];
  //   menusTitle.value = [];
  //   menuList.forEach((item, index) => {
  //     checkBoxObj.value[index] = false;
  //   });
  // }
  // emit("update:modelValue", menus.value);
};
const isChecked = (item: { [x: string]: any }) => {
  // return menus.value.indexOf(item[props.id]) > -1;
};
const changeCheckBox = (item: { [x: string]: any }, index: any) => {
  // let i = menus.value.indexOf(item[props.id]);
  // if (i == -1) {
  //   menus.value.push(item[props.id]);
  //   menusTitle.value.push(item[props.label]);
  // } else {
  //   menus.value.splice(i, 1);
  //   menusTitle.value.splice(i, 1);
  // }
  // if (menus.value.length == menuList.length) {
  //   checkedAll.value = true;
  // } else {
  //   checkedAll.value = false;
  // }
  // emit("update:modelValue", menus.value);
};
const clearData = () => {
  // menus.value = [];
  // menusTitle.value = [];
  // emit("update:modelValue", menus.value);
  // checkedAll.value = false;
  // menuList.forEach((item, index) => {
  //   checkBoxObj.value[index] = false;
  // });
};
</script>

<style lang="scss" scoped>
.el-select-dropdown {
  .el-checkbox {
    display: flex;
    align-items: center;
    padding-left: 20px;
    width: 100%;
    box-sizing: border-box;
  }
  .el-select-dropdown__item {
    // background-color: red !important;
    padding: 0;
    display: flex;
    align-items: center;
  }
}
</style>
