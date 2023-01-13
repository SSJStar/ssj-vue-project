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
const formJson = reactive({
  widgetList: [
    {
      key: 13777,
      type: "input",
      icon: "text-field",
      formItemFlag: true,
      options: {
        name: "input53130",
        label: "标题",
        labelAlign: "label-center-align",
        type: "text",
        defaultValue: "",
        placeholder: "",
        columnWidth: "200px",
        size: "",
        labelWidth: null,
        labelHidden: false,
        readonly: false,
        disabled: false,
        hidden: false,
        clearable: true,
        showPassword: false,
        required: false,
        requiredHint: "",
        validation: "",
        validationHint: "",
        customClass: [],
        labelIconClass: null,
        labelIconPosition: "rear",
        labelTooltip: null,
        minLength: null,
        maxLength: null,
        showWordLimit: false,
        prefixIcon: "",
        suffixIcon: "",
        appendButton: false,
        appendButtonDisabled: false,
        buttonIcon: "custom-search",
        onCreated: "",
        onMounted: "",
        onInput: "",
        onChange: "",
        onFocus: "",
        onBlur: "",
        onValidate: "",
      },
      id: "input53130",
    },
    {
      key: 79577,
      type: "select",
      icon: "select-field",
      formItemFlag: true,
      options: {
        name: "select79771",
        label: "类型",
        labelAlign: "label-center-align",
        defaultValue: "",
        placeholder: "",
        columnWidth: "200px",
        size: "",
        labelWidth: null,
        labelHidden: false,
        disabled: false,
        hidden: false,
        clearable: true,
        filterable: false,
        allowCreate: false,
        remote: false,
        automaticDropdown: false,
        multiple: false,
        multipleLimit: 0,
        optionItems: [
          {
            label: "风景",
            value: 1,
          },
          {
            label: "美食",
            value: 2,
          },
          {
            label: "其它",
            value: 3,
          },
        ],
        required: false,
        requiredHint: "",
        validation: "",
        validationHint: "",
        customClass: "",
        labelIconClass: null,
        labelIconPosition: "rear",
        labelTooltip: null,
        onCreated: "",
        onMounted: "",
        onRemoteQuery: "",
        onChange: "",
        onFocus: "",
        onBlur: "",
        onValidate: "",
      },
      id: "select79771",
    },
    {
      key: 64309,
      type: "textarea",
      icon: "textarea-field",
      formItemFlag: true,
      options: {
        name: "textarea73953",
        label: "内容",
        labelAlign: "label-center-align",
        rows: 3,
        defaultValue: "",
        placeholder: "",
        columnWidth: "200px",
        size: "",
        labelWidth: null,
        labelHidden: false,
        readonly: false,
        disabled: false,
        hidden: false,
        required: false,
        requiredHint: "",
        validation: "",
        validationHint: "",
        customClass: "",
        labelIconClass: null,
        labelIconPosition: "rear",
        labelTooltip: null,
        minLength: null,
        maxLength: null,
        showWordLimit: false,
        onCreated: "",
        onMounted: "",
        onInput: "",
        onChange: "",
        onFocus: "",
        onBlur: "",
        onValidate: "",
      },
      id: "textarea73953",
    },
    {
      key: 70083,
      type: "picture-upload",
      icon: "picture-upload-field",
      formItemFlag: true,
      options: {
        name: "pictureupload49965",
        label: "图片",
        labelWidth: null,
        labelHidden: false,
        disabled: false,
        hidden: false,
        required: false,
        requiredHint: "",
        customRule: "",
        customRuleHint: "",
        uploadURL: "",
        uploadTip: "",
        withCredentials: false,
        multipleSelect: false,
        showFileList: true,
        limit: 3,
        fileMaxSize: 5,
        fileTypes: ["jpg", "jpeg", "png"],
        customClass: [],
        labelIconClass: null,
        labelIconPosition: "rear",
        labelTooltip: null,
        onCreated: "",
        onMounted: "",
        onBeforeUpload: "",
        onUploadSuccess: "",
        onUploadError: "",
        onFileRemove: "",
        onValidate: "",
      },
      id: "pictureupload49965",
    },
  ],
  formConfig: {
    modelName: "formData",
    refName: "vForm",
    rulesName: "rules",
    labelWidth: 80,
    labelPosition: "left",
    size: "",
    labelAlign: "label-center-align",
    cssCode: "",
    customClass: [],
    functions: "",
    layoutType: "PC",
    jsonVersion: 3,
    onFormCreated: "",
    onFormMounted: "",
    onFormDataChange: "",
  },
});
const formData = reactive({
  title: "",
  body: "",
  type: "",
});
const optionData = reactive({});

let typeSelected = ref(""); //选中了哪个类型
const typeList = ["风景", "美食", "其它"];

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

<!--<template>-->
<!--  <div class="add_new_bar">-->
<!--    <h1>注 册</h1>-->
<!--    &lt;!&ndash;    <div class="title_div">&ndash;&gt;-->
<!--    &lt;!&ndash;      <label>标题</label>&ndash;&gt;-->
<!--    &lt;!&ndash;      &lt;!&ndash;      <el-input ></el-input>&ndash;&gt;&ndash;&gt;-->
<!--    &lt;!&ndash;      <input id="title_input" placeholder="请输入标题" />&ndash;&gt;-->
<!--    &lt;!&ndash;    </div>&ndash;&gt;-->
<!--    <v-form-render-->
<!--      :form-json="formJson"-->
<!--      :form-data="formData"-->
<!--      :option-data="optionData"-->
<!--      ref="vFormRef"-->
<!--    >-->
<!--    </v-form-render>-->
<!--    <el-button type="primary" @click="submitForm">提 交</el-button>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { reactive } from "vue";-->

<!--const formJson = reactive({-->
<!--  widgetList: [-->
<!--    {-->
<!--      key: 13777,-->
<!--      type: "input",-->
<!--      icon: "text-field",-->
<!--      formItemFlag: true,-->
<!--      options: {-->
<!--        name: "input53130",-->
<!--        label: "标题",-->
<!--        labelAlign: "label-center-align",-->
<!--        type: "text",-->
<!--        defaultValue: "",-->
<!--        placeholder: "",-->
<!--        columnWidth: "200px",-->
<!--        size: "",-->
<!--        labelWidth: null,-->
<!--        labelHidden: false,-->
<!--        readonly: false,-->
<!--        disabled: false,-->
<!--        hidden: false,-->
<!--        clearable: true,-->
<!--        showPassword: false,-->
<!--        required: false,-->
<!--        requiredHint: "",-->
<!--        validation: "",-->
<!--        validationHint: "",-->
<!--        customClass: [],-->
<!--        labelIconClass: null,-->
<!--        labelIconPosition: "rear",-->
<!--        labelTooltip: null,-->
<!--        minLength: null,-->
<!--        maxLength: null,-->
<!--        showWordLimit: false,-->
<!--        prefixIcon: "",-->
<!--        suffixIcon: "",-->
<!--        appendButton: false,-->
<!--        appendButtonDisabled: false,-->
<!--        buttonIcon: "custom-search",-->
<!--        onCreated: "",-->
<!--        onMounted: "",-->
<!--        onInput: "",-->
<!--        onChange: "",-->
<!--        onFocus: "",-->
<!--        onBlur: "",-->
<!--        onValidate: "",-->
<!--      },-->
<!--      id: "input53130",-->
<!--    },-->
<!--    {-->
<!--      key: 79577,-->
<!--      type: "select",-->
<!--      icon: "select-field",-->
<!--      formItemFlag: true,-->
<!--      options: {-->
<!--        name: "select79771",-->
<!--        label: "类型",-->
<!--        labelAlign: "label-center-align",-->
<!--        defaultValue: "",-->
<!--        placeholder: "",-->
<!--        columnWidth: "200px",-->
<!--        size: "",-->
<!--        labelWidth: null,-->
<!--        labelHidden: false,-->
<!--        disabled: false,-->
<!--        hidden: false,-->
<!--        clearable: true,-->
<!--        filterable: false,-->
<!--        allowCreate: false,-->
<!--        remote: false,-->
<!--        automaticDropdown: false,-->
<!--        multiple: false,-->
<!--        multipleLimit: 0,-->
<!--        optionItems: [-->
<!--          {-->
<!--            label: "风景",-->
<!--            value: 1,-->
<!--          },-->
<!--          {-->
<!--            label: "美食",-->
<!--            value: 2,-->
<!--          },-->
<!--          {-->
<!--            label: "其它",-->
<!--            value: 3,-->
<!--          },-->
<!--        ],-->
<!--        required: false,-->
<!--        requiredHint: "",-->
<!--        validation: "",-->
<!--        validationHint: "",-->
<!--        customClass: "",-->
<!--        labelIconClass: null,-->
<!--        labelIconPosition: "rear",-->
<!--        labelTooltip: null,-->
<!--        onCreated: "",-->
<!--        onMounted: "",-->
<!--        onRemoteQuery: "",-->
<!--        onChange: "",-->
<!--        onFocus: "",-->
<!--        onBlur: "",-->
<!--        onValidate: "",-->
<!--      },-->
<!--      id: "select79771",-->
<!--    },-->
<!--    {-->
<!--      key: 64309,-->
<!--      type: "textarea",-->
<!--      icon: "textarea-field",-->
<!--      formItemFlag: true,-->
<!--      options: {-->
<!--        name: "textarea73953",-->
<!--        label: "内容",-->
<!--        labelAlign: "label-center-align",-->
<!--        rows: 3,-->
<!--        defaultValue: "",-->
<!--        placeholder: "",-->
<!--        columnWidth: "200px",-->
<!--        size: "",-->
<!--        labelWidth: null,-->
<!--        labelHidden: false,-->
<!--        readonly: false,-->
<!--        disabled: false,-->
<!--        hidden: false,-->
<!--        required: false,-->
<!--        requiredHint: "",-->
<!--        validation: "",-->
<!--        validationHint: "",-->
<!--        customClass: "",-->
<!--        labelIconClass: null,-->
<!--        labelIconPosition: "rear",-->
<!--        labelTooltip: null,-->
<!--        minLength: null,-->
<!--        maxLength: null,-->
<!--        showWordLimit: false,-->
<!--        onCreated: "",-->
<!--        onMounted: "",-->
<!--        onInput: "",-->
<!--        onChange: "",-->
<!--        onFocus: "",-->
<!--        onBlur: "",-->
<!--        onValidate: "",-->
<!--      },-->
<!--      id: "textarea73953",-->
<!--    },-->
<!--    {-->
<!--      key: 70083,-->
<!--      type: "picture-upload",-->
<!--      icon: "picture-upload-field",-->
<!--      formItemFlag: true,-->
<!--      options: {-->
<!--        name: "pictureupload49965",-->
<!--        label: "图片",-->
<!--        labelWidth: null,-->
<!--        labelHidden: false,-->
<!--        disabled: false,-->
<!--        hidden: false,-->
<!--        required: false,-->
<!--        requiredHint: "",-->
<!--        customRule: "",-->
<!--        customRuleHint: "",-->
<!--        uploadURL: "",-->
<!--        uploadTip: "",-->
<!--        withCredentials: false,-->
<!--        multipleSelect: false,-->
<!--        showFileList: true,-->
<!--        limit: 3,-->
<!--        fileMaxSize: 5,-->
<!--        fileTypes: ["jpg", "jpeg", "png"],-->
<!--        customClass: [],-->
<!--        labelIconClass: null,-->
<!--        labelIconPosition: "rear",-->
<!--        labelTooltip: null,-->
<!--        onCreated: "",-->
<!--        onMounted: "",-->
<!--        onBeforeUpload: "",-->
<!--        onUploadSuccess: "",-->
<!--        onUploadError: "",-->
<!--        onFileRemove: "",-->
<!--        onValidate: "",-->
<!--      },-->
<!--      id: "pictureupload49965",-->
<!--    },-->
<!--  ],-->
<!--  formConfig: {-->
<!--    modelName: "formData",-->
<!--    refName: "vForm",-->
<!--    rulesName: "rules",-->
<!--    labelWidth: 80,-->
<!--    labelPosition: "left",-->
<!--    size: "",-->
<!--    labelAlign: "label-center-align",-->
<!--    cssCode: "",-->
<!--    customClass: [],-->
<!--    functions: "",-->
<!--    layoutType: "PC",-->
<!--    jsonVersion: 3,-->
<!--    onFormCreated: "",-->
<!--    onFormMounted: "",-->
<!--    onFormDataChange: "",-->
<!--  },-->
<!--});-->
<!--const formData = reactive({});-->
<!--const optionData = reactive({});-->
<!--</script>-->

<!--<style scoped>-->
<!--.add_new_bar {-->
<!--  /*display: flex;*/-->
<!--  /*flex-direction: column;*/-->
<!--  padding: 20px;-->
<!--}-->

<!--/*.title_div {*/-->
<!--/*  display: flex;*/-->
<!--/*}*/-->
<!--/*.title_div label {*/-->
<!--/*  font-size: 17px;*/-->
<!--/*}*/-->
<!--/*#title_input {*/-->
<!--/*  display: flex;*/-->
<!--/*  height: 24px;*/-->
<!--/*  margin-left: 20px;*/-->
<!--/*  border-color: rgba(153, 153, 153, 0.5);*/-->
<!--/*  border-width: 1px;*/-->
<!--/*  border-radius: 4px;*/-->
<!--/*}*/-->
<!--</style>-->
