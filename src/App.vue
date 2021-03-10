<template>
  <div id="app">
    <div v-for="heights, heightIndex in maze" :key="heights">
      <div v-for="width, widthIndex in heights" :key="width">
        <Cell :left="widthIndex * 20" :top="heightIndex * 20" :type="maze[heightIndex][widthIndex]"/>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from './components/Cell.vue'

export default {
  data () {
    const generateMaze = (maze, minWidth, maxWidth, minHeight, maxHeight, direction) => {
      if (direction === 1) {
        let diff = maxWidth - minWidth;
        if (diff < 1) {
          return maze;
        }
        let rand = Math.floor(Math.random() * diff + minWidth);
        console.log(rand, direction);
        for (let i = minHeight - 1; i < maxHeight + 1; i += 1) {
          maze[i][rand] = 1;
        } 

        return generateMaze(maze, minWidth, rand - 1, minHeight, maxHeight, 0);
      } else {
        let diff = maxHeight - minHeight;
        if (diff < 1) {
          return maze;
        }
        let rand = Math.floor(Math.random() * diff + minHeight);
        console.log(rand, direction);
        for (let i = minWidth - 1; i < maxWidth + 1; i += 1) {
          console.log(i, rand, maxWidth, maxHeight);
          maze[rand][i] = 1;
        }

        return generateMaze(maze, minWidth, maxWidth, minHeight, rand - 1, 1);
      }
    }

    let width = Math.floor((window.innerWidth - 40) / 20);
    let height = Math.floor((window.innerHeight - 40) / 20);
    let maze = new Array(height).fill(0).map(() => new Array(width).fill(0));
    for (let i = 0; i < maze[0].length; i += 1) {
      maze[0][i] = 1;
      maze[height - 1][i] = 1;
    }
    for (let i = 1; i < maze.length; i += 1) {
      maze[i][0] = 1;
      maze[i][width - 1] = 1;
    }
    return {
      maze: generateMaze(maze, 2, maze[0].length - 2, 2, maze.length - 2, 1),
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
  width: 100%;
  height: 100%;
}
</style>
