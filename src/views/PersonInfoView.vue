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

    <!--  性别  -->
    <el-form-item label="您的性别" class="el-form-item">
      <el-input
        placeholder="数据出错"
        v-model="personData.sexValue"
        disabled
      ></el-input>
    </el-form-item>

    <!--  日期  -->
    <el-form-item label="出生日期" class="el-form-item">
      <el-date-picker v-model="personData.birthdayValue"></el-date-picker>
    </el-form-item>

    <!--  年龄  -->
    <el-form-item label="您的年龄" class="el-form-item">
      <el-input
        placeholder="暂无数据"
        v-model="personData.ageValue"
        disabled
      ></el-input>
    </el-form-item>

    <!--  爱好  -->
    <el-form-item label="您的爱好" class="el-form-item">
      <el-input
        type="textarea"
        placeholder="暂无数据"
        v-model="personData.hobbyValue"
      ></el-input>
    </el-form-item>

    <!--  自我介绍  -->
    <el-form-item label="自我介绍" class="el-form-item">
      <el-input
        type="textarea"
        placeholder="暂无数据"
        v-model="personData.introductionMyselfValue"
        autosize
      ></el-input>
    </el-form-item>

    <!--  提交按钮  -->
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
  introductionMyselfValue: "", //自我介绍
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
    const sexvalue = "1";
    // 年龄 = 当前年份 - 出生年份
    const age = new Date().getFullYear() - Number(bir.substring(0, 4));
    const sex = exchangeSex(sexvalue);
    personData.value = {
      username: "13396551788", //账号
      nameValue: sessionStorageManager.getNickName(), //昵称
      birthdayValue: "1998-02-14", //出生日期
      sexValue: sex, //性别
      hobbyValue: "弹钢琴、打羽毛球、瑜伽", //爱好
      ageValue: age, //年龄
      introductionMyselfValue:
        "我叫汤姆森.金，今年十岁了。是一个内向而又聪明的男孩。\n" +
        "\n" +
        "我的爱好有：运动、画画、看书、做游戏、科学课和语文课。\n" +
        "\n" +
        "去年，我一共得了两张奖状。一张是运动小健将的奖状，另一张是百里路小学冬锻跳绳比赛二年级段男子组第一名的奖状。我明白：只要努力，一定会有收获的。\n" +
        "\n" +
        "每次我考到一百分的时候，爸爸妈妈就会奖励我，我也非常高兴。有一次我考了一百分，妈妈买了一个有轮子的书包给我。我考了一百分，爸爸总会带我去吃肯德基。\n" +
        "\n" +
        "所以，在新学期里，我要更加努力，再创佳绩！", //自我介绍
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
  console.log("提交数据:");
  console.log(personData.value);
  button_loadding.value = true;
  button_text.value = "提交中...";
  // 模拟提交请求，3秒后结束
  setTimeout(() => {
    button_loadding.value = false;
    button_text.value = "提 交";
  }, 3000);
};

/**
 * 根据字符串数字-获取性别
 *  作者：小青龙
 *  时间：2023/02/08 11:09:16
 *  说明：
 */
const exchangeSex = (val) => {
  return val === "1" ? "男" : "女";
};
</script>

<style>
.person_info_div {
  background-color: #ebebeb;
  width: 100%;
  height: 100%;
  overflow-y: scroll; /** 超出屏幕，可以滚动 */
}

.person_info_div .el_image {
  margin-top: 40px;
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
  margin-bottom: 20px;
}
</style>
