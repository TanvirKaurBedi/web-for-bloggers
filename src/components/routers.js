import formCom from "./formCom.vue";
import { createRouter, createWebHistory } from "vue-router";

// const router = new Router({
//   routes: [
//     {
//       name: "CreatePost",
//       path: "/createPost",
//       component: formCom,
//     },
//   ],
// });

// export default router;

const routes = [
  {
    name: "CreatePost",
    path: "/createPost",
    component: formCom,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
