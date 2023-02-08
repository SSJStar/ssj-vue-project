<template>
  <div class="add_new_bar">
    <h1>发 帖</h1>
    <!--    <div class="title_div">-->
    <!--      <label>标题</label>-->
    <!--      &lt;!&ndash;      <el-input ></el-input>&ndash;&gt;-->
    <!--      <input id="title_input" placeholder="请输入标题" />-->
    <!--    </div>-->
    <el-form>
      <!--   类型   -->
      <el-form-item label="类型" prop="type">
        <el-select
          v-model="formData.type"
          class="m-2"
          size="default"
          multiple
          collapse-tags
          collapse-tags-tooltip
          placeholder="请选择类型"
        >
          <el-option
            v-for="item in typeList"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>

      <!--   标题   -->
      <el-form-item label="标题" prop="title">
        <el-input
          v-model.trim="formData.title"
          placeholder="输入标题"
        ></el-input>
      </el-form-item>

      <!--   内容   -->
      <el-form-item label="内容" prop="body">
        <!--        <el-textarea name="" id="" cols="30" rows="10"></el-textarea>-->
        <el-input
          type="textarea"
          v-model.trim="formData.body"
          placeholder="输入内容"
        ></el-input>
      </el-form-item>

      <!--   上传图片   -->
      <el-form-item label="图片" prop="body">
        <el-upload
          v-model:file-list="fileList"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-change="uploadSuccess"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>

        <el-dialog v-model="dialogVisible">
          <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>
      </el-form-item>
    </el-form>
    <el-button class="submit_button" type="primary" @click="submitForm"
      >提 交</el-button
    >
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// import { UploadFile, UploadFiles, UploadUserFile } from "element-plus";
const formData = reactive({
  title: "",
  body: "",
  type: "",
});

let typeSelected = ref(""); //选中了哪个类型
const typeList = ref(["风景", "美食", "其它"]);

const fileList = ref([]);

// function uploadSuccess(
//   response: any,
//   uploadFile: UploadFile,
//   uploadFiles: UploadFiles
// ) {
//   console.log("上传完成");
//   console.log(uploadFile.url);
//   fileList.value = uploadFiles;
// }

function uploadSuccess(response, uploadFile, uploadFiles) {
  console.log("上传完成");
  console.log(uploadFile);
  fileList.value = uploadFiles;
}

const submitForm = () => {
  console.log("发帖 - 提交");
  console.log(formData);
  console.log(formData.type);
};
</script>

<style scoped>
.add_new_bar {
  /*display: flex;*/
  /*flex-direction: column;*/
  padding: 20px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.submit_button {
  width: 60%;
  height: 40px;
  margin-top: 60px;
}
/*.m-2 {*/
/*  width: 150px;*/
/*}*/
</style>
