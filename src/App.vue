<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-for="i in coords" :key="i">
        {{ winWidth }}
        <Cell :left="i"/>
    </div>
  </div>
</template>

<script>
import Cell from './components/Cell.vue'

export default {
  data () {
    let arr = []
    for (let i = 0; i < window.innerWidth - 40; i += 20) {
      let innerArr = [];
      for (let j = 0; j < window.innerHeight - 40; j += 20) {
        innerArr.push(j);
      }
      arr.push(innerArr);
    }
    return {
      coords: arr,
      winWidth: window.innerWidth,
    }
  },
  name: 'App',
  components: {
    Cell,
  },
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
