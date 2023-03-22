import createPostForm from "./createPostForm.vue";
import homePage from './homePage.vue'

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "CreatePost",
    path: "/createPost",
    component: createPostForm,
  },
  {
    name: "HomeScreen",
    path: "/",
    component: homePage
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
