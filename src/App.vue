<template>
  <div id="app">
    <div v-for="heights, heightIndex in maze" :key="heights + heightIndex">
      <div v-for="width, widthIndex in heights" :key="width + widthIndex + heightIndex">
        <Cell :left="widthIndex * 20" :top="heightIndex * 20" :type="maze[heightIndex][widthIndex]"/>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from './components/Cell.vue'

export default {
  data () {
    /*const makeHole = (maze, x, y, rand) => {
      let hole = Math.floor(Math.random() * x + y);
      hole += hole % 2 - 1;
      hole = hole > 0 ? hole : 0;
      maze[hole][rand] = 0;
      return maze;
    }*/

    const generateMaze = (maze, left, right, bottom, top) => {
      if (right - left > top - bottom) {
        let diff = right - left;
        if (diff < 2) {
          return maze;
        }
        
        let pivot = Math.floor(Math.random() * diff + left);
        pivot += pivot % 2;

        for (let i = bottom - 1; i < top + 2; i += 1) {
          maze[i][pivot] = 1;
        }

        maze = generateMaze(maze, left, pivot - 2, bottom, top);
        maze = generateMaze(maze, pivot + 2, right, bottom, top);
      } else {
        let diff = top - bottom;

        if (diff < 2) {
          return maze;
        }

        let pivot = Math.floor(Math.random() * diff + bottom);
        pivot += pivot % 2;

        for (let i = left - 1; i < right + 2;  i += 1) {
          maze[pivot][i] = 1;
        }

        maze = generateMaze(maze, left, right, bottom, pivot - 2);
        maze = generateMaze(maze, left, right, pivot + 2, top);
      }
      
      return maze;
    }

    //let width = Math.floor((window.innerWidth - 40) / 20);
    //width += width % 2 - 1;
    let width = 101;
    //let height = Math.floor((window.innerHeight - 40) / 20);
    //height += height % 2 - 1;
    let height = 51;
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
