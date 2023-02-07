<template>
  <div class="person_info_div">
    <el-image
      src="https://randomuser.me/api/portraits/men/33.jpg"
      alt=""
      class="el_image"
    >
      <!--  占位图   -->
      <template #placeholder>
        <div class="image-slot">Loading。。。</div>
      </template>
      <!--  当加载出错   -->
      <template #error>
        <div class="image-slot">
          <img
            class="el_image"
            src="@/assets/public/default_head_img.png"
            alt=""
          />
        </div>
      </template>
    </el-image>

    <!--  账号  -->
    <el-form-item label="您的账号" class="el-form-item">
      <el-input
        placeholder="数据出错"
        v-model="personData.username"
        disabled
      ></el-input>
    </el-form-item>

    <!--  昵称  -->
    <el-form-item label="您的昵称" class="el-form-item">
      <el-input
        placeholder="暂无数据"
        v-model="personData.nameValue"
      ></el-input>
    </el-form-item>

    <!--  日期  -->
    <el-form-item label="出生日期" class="el-form-item">
      <el-date-picker v-model="personData.birthdayValue"></el-date-picker>
    </el-form-item>

    <!--  年龄  -->
    <el-form-item label="您的年龄">
      <el-input
        placeholder="暂无数据"
        v-model="personData.ageValue"
        disabled
      ></el-input>
    </el-form-item>
    <el-button
      type="primary"
      class="submit-button"
      :loading="button_loadding"
      @click="submitForm"
      >{{ button_text }}</el-button
    >
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { ElMessage } from "element-plus";
import sessionStorageManager from "@/statics/sessionStorageManager";
import { getUserInfo } from "@/api/api";
import router from "@/router";

// const formData = reactive({});
const optionData = reactive({});
const vFormRef = ref(null);
const button_loadding = ref(false); //是否开启菊花
const button_text = ref("提 交"); //按钮提示文字
// 定义一个对象，用来存放输入的账号、密码、验证码
let personData = ref({
  username: "13396551788", //账号
  nameValue: sessionStorageManager.getNickName(), //昵称
  birthdayValue: "", //出生日期
  sexValue: "", //性别
  hobbyValue: "", //爱好
  ageValue: "", //年龄
});

onMounted(() => {
  // formData["input109875"] = "jack";
  // //开始请求
  // getUserInfo({
  //   username: sessionStorageManager.getUserName(),
  // })
  //   .then((res) => {
  //     console.log("请求结束了\\n");
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     if (err.message.includes("code 500")) {
  //       alert("500错误，请联系管理员");
  //     } else {
  //       alert("其它错误：" + err.message);
  //     }
  //   });

  // 延迟1秒，模拟请求
  setTimeout(() => {
    const bir = "1998-02-14";
    // 年龄 = 当前年份 - 出生年份
    const age = new Date().getFullYear() - Number(bir.substring(0, 4));
    personData.value = {
      username: "13396551788", //账号
      nameValue: sessionStorageManager.getNickName(), //昵称
      birthdayValue: "1998-02-14", //出生日期
      sexValue: "1", //性别
      hobbyValue: "弹钢琴、打羽毛球、瑜伽", //爱好
      ageValue: age, //年龄
    };
  }, 1000);
});

/**
 * 提交
 *  作者：小青龙
 *  时间：2023/02/07 15:01:39
 *  说明：
 */
const submitForm = () => {
  button_loadding.value = true;
  button_text.value = "提交中...";
  // 模拟提交请求，3秒后结束
  setTimeout(() => {
    button_loadding.value = false;
    button_text.value = "提 交";
  }, 3000);
};
</script>

<style>
.person_info_div {
  background-color: #ebebeb;
  width: 100%;
  height: 100%;
  padding-top: 40px;
}

.person_info_div .el_image {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 10px;
}
.el-form-item {
  margin: 0 25% 20px 25%;
}
.submit-button {
  margin-top: 40px;
  width: 50%;
  background-color: #42b983;
}
</style>
