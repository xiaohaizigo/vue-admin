import { RouteRecordRaw } from "vue-router";
import { HOME_URL, LOGIN_URL } from "../../config/config";

//静态路由
export const staticRouter: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "HOME_URL",
  },
  {
    path: "LOGIN_URL",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
];
