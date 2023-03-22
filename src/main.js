import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./components/routers";
// import { createStore } from "vuex";
import  store from "./store"
import mitt from "mitt";
const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;

loadFonts();

app.use(router).use(store).use(vuetify).mount("#app");
