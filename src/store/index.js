import { createStore } from "vuex";
import blogPost from "./modules/blogDetails/index";

const store = createStore({
  state: {
    name: "Tanvir",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    blogPost,
  },
});

export default store;
