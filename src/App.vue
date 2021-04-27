<template>
<!-- <zlp-button type="default">默认</zlp-button> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <weather></weather>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import weather from './components/weather.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    weather
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
