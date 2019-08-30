<template>
  <div id="app">
    <img alt="Sofie" src="./assets/shadow.png">
    <HelloWorld msg="Sofie"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}

img {
  max-width: 300px;
  margin-left: 60px;
  float: left;
}
</style>
