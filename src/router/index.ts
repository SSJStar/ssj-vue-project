import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  //根目录 暂时没用到
  {
    path: "/",
    name: "homeView",
    // component: () => import("../views/MenuBodyView.vue"),
    // component: () => import("@/views/wymusic/WYMusicView.vue"),
    // component: () => import("@/views/xiaomi/XiaoMiView.vue"),
    // component: () => import("../views/post_bar/AddNewBarView.vue"),
    component: () => import("../views/LayoutView.vue"),
  },
  //注册
  {
    path: "/registerView",
    name: "registerView",
    component: () => import("../views/login/RegisterView.vue"),
  },
  //登录
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/LoginView.vue"),
  },
  //主页，又名"布局组件"，包含组件：HeadNav、LeftMenu、router-view
  {
    path: "/layoutView",
    component: () => import("../views/LayoutView.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/IntroduceProjectView.vue"),
      },
      // 项目介绍
      {
        path: "introduceProjectView",
        name: "introduceProjectView",
        component: () => import("../views/IntroduceProjectView.vue"),
      },
      // 子路由
      {
        path: "bodyView",
        name: "childBodyView",
        component: () => import("../views/MenuBodyView.vue"),
      },
      // 文章列表
      {
        path: "barListView",
        name: "barListView",
        component: () => import("../views/post_bar/BarListView.vue"),
      },
      // 文章详情
      {
        path: "barDetailView/:jsonString",
        name: "barDetailView",
        component: () => import("../views/post_bar/BarDetailView.vue"),
      },
      // 新增文章
      {
        path: "addNewBarView",
        name: "addNewBarView",
        component: () => import("../views/post_bar/AddNewBarView.vue"),
      },
      // 我的收藏
      {
        path: "collectionListView",
        name: "collectionListView",
        component: () => import("../views/post_bar/BarCollectionListView.vue"),
      },
      //个人中心
      {
        path: "personInfo",
        name: "personInfo",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/PersonInfoView.vue"),
      },
      {
        //xlsx文件的读取和导出
        path: "xlsxView",
        name: "xlsxView",
        component: () => import("../views/XlsxView.vue"),
      },
      {
        //直方图
        path: "btChatView",
        name: "btChatView",
        component: () => import("../views/BTChatView.vue"),
      },
      {
        path: "myView",
        name: "mine",
        component: () => import("../views/other/MyView.vue"),
      },
      {
        //原来的柱状图
        path: "bTChatViewOld",
        name: "bTChatViewOld",
        component: () => import("../views/other/BTChatViewOld.vue"),
      },
      {
        path: "wy",
        name: "wy",
        component: () => import("@/views/wymusic/WYMusicView.vue"),
      },
      {
        path: "xiaomi",
        name: "xiaomi",
        component: () => import("@/views/xiaomi/XiaoMiView.vue"),
      },
    ],
  },
  {
    path: "/testSSJ",
    name: "testSSJ",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/other/TestSSJ.vue"),
  },
  {
    path: "/pie",
    name: "pie",
    component: () => import("@/components/chats/SSJPieView.vue"),
  },
  {
    path: "/lay",
    name: "lay",
    component: () => import("@/views/other/SSJLayoutTestViews.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/other/TestSSJ.vue"),
  },
  {
    path: "/bubbleView",
    name: "bubbleView",
    component: () => import("@/views/other/BubbleView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
