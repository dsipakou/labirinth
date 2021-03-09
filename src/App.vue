<template>
  <div id="app">
    <div v-for="widths, widthIndex in maze" :key="widths">
      <div v-for="height, heightIndex in widths" :key="height">
        <Cell :left="widthIndex * 20" :top="heightIndex * 20" :type="maze[widthIndex, heightIndex]"/>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from './components/Cell.vue'

export default {
  data () {
    let width = Math.floor((window.innerWidth - 40) / 20);
    let height = Math.floor((window.innerHeight - 40) / 20);
    let maze = new Array(width).fill(0).map(() => new Array(height).fill(0));
    return {
      maze,
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
