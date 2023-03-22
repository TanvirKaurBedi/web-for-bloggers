<template>
  <div id="divNavigationBar">
    <navgationPage></navgationPage>
  </div>

  <div id="divContent">
    <router-view></router-view>
  </div>
</template>

<script>
import navgationPage from './components/navgationPage.vue'
export default {
  name: "App",
  components: {
    navgationPage
  }

}
</script>

<style>
#divNavigationBar {
overflow: hidden;
position:fixed;
top:0;
width:100%
}
#divContent{
  padding: 16px;
  margin-top: 120px;
  height: 1500px;
}
</style>