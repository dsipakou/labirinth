<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-for="width in widths" :key="width">
        {{ winWidth }}
        {{ winHeight }}
        <div v-for="height in heights" :key="height">
          <Cell :left="width" :top="height"/>
        </div>
    </div>
  </div>
</template>

<script>
import Cell from './components/Cell.vue'

export default {
  data () {
    let widths = []
    for (let i = 0; i < window.innerWidth - 40; i += 20) {
      widths.push(i);
    }
    let heights = [];
    for (let i = 0; i < window.innerHeight - 40; i += 20) {
      heights.push(i)
    }
    return {
      widths,
      heights,
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
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
