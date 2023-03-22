export default {
  nameSpaced: true,
  state: {
    blogPost: {
      Show: false,
    },
  },
//   getters: {
//     getShow(state){
//         return state.blogPost.Show = true ;
//     }
//   },
  mutations: {
    toggleBlogPost(state, payload) {
      state.blogPost.Show = payload;
    },
  },
  actions: {
    toggleBlogPost(context,payload) {
     context.commit("TOGGLEBLOGPOST", payload);
    },
  },
};
