<template>
  <div id="app">
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
    <div class="container" v-for="heights, heightIndex in maze" :key="heights + heightIndex">
      <div v-for="width, widthIndex in heights" :key="width + widthIndex + heightIndex">
        <Cell :left="widthIndex * 20" :top="heightIndex * 20" :type="maze[heightIndex][widthIndex]"/>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from './components/Cell.vue'

export default {
  computed () {

  },
  data () {
    const generateMaze = (maze, left, right, bottom, top, ret=false) => {
      if (ret) {
        return maze;
      }
      const hDiff = right - left;
      const vDiff = top - bottom;
      const dirr = Math.random() > 0.5 ? 1 : 0

      if (dirr === 1) {
        if (hDiff < 4 || vDiff < 2) {
          return maze;
        }
        
        let hRatio = Math.max(0, hDiff - 5)
        let wall = Math.floor(Math.random() * hRatio + left + 1);
        wall += wall % 2;

        for (let i = bottom + 1; i < top; i += 1) {
          maze[i][wall] = 1;
          console.log(i, wall)
        }

        var hole = Math.floor(Math.random() * (top - bottom - 2) + bottom);
        hole += hole % 2 + 1;
        maze[hole][wall] = 0;
        maze = generateMaze(maze, left, wall, bottom, top);
        maze = generateMaze(maze, wall, right, bottom, top);
      } else {
        if (vDiff < 4 || hDiff < 2) {
          return maze;
        }

        let vRatio = Math.max(0, vDiff - 5);
        let wall = Math.floor(Math.random() * vRatio + bottom + 1);
        wall += wall % 2;

        for (let i = left; i < right;  i += 1) {
          maze[wall][i] = 1;
        }

        let hole = Math.floor(Math.random() * (hDiff - 2) + left);
        hole += hole % 2 + 1;
        maze[wall][hole] = 0;
        this.maze = maze;
        maze = generateMaze(maze, left, right, wall, top);
        maze = generateMaze(maze, left, right, bottom, wall);
      }
      
      return maze;
    }

    let width = 75;
    let height = 45;
    let maze = new Array(height).fill(0).map(() => new Array(width).fill(0));
    for (let i = 0; i < maze[0].length; i += 1) {
      maze[0][i] = 1;
      maze[height - 1][i] = 1;
    }
    for (let i = 1; i < maze.length; i += 1) {
      maze[i][0] = 1;
      maze[i][width - 1] = 1;
    }
    const finalMaze = generateMaze(maze, 0, maze[0].length - 1, 0, maze.length - 1)
    return {
      maze: finalMaze,
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

.container {
  display: flex;
  vertical-align: center;
}
</style>
