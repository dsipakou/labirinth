<template>
  <div id="app">
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
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

    const generateMaze = (maze, left, right, bottom, top) => {
      if (right - left > top - bottom) {
        let diff = right - left;
        if (diff < 4) {
          return maze;
        }
        
        const hRatio = Math.max(0, diff - 5)
        let wall = Math.floor(Math.random() * hRatio+ left + 1);
        wall += wall % 2;
        console.log(diff, left, wall, right)

        for (let i = bottom; i < top; i += 1) {
          maze[i][wall] = 1;
        }

        var hole = Math.floor(Math.random() * (top - bottom - 2) + bottom);
        hole += hole % 2 + 1;
        if (hole < maze.length - 1 && hole > 0) {
          maze[hole][wall] = 0;
        }
        /*maze = generateMaze(maze, left, wall, bottom, hole - 1);
        maze = generateMaze(maze, left, wall, hole + 1, top);
        maze = generateMaze(maze, wall, right, bottom, hole - 1);
        maze = generateMaze(maze, wall, right, hole + 1, top);*/
      } else {
        let diff = top - bottom;

        if (diff < 4) {
          return maze;
        }

        let wall = Math.floor(Math.random() * diff + bottom);
        wall += wall % 2;

        for (let i = left - 1; i < right;  i += 1) {
          maze[wall][i] = 1;
        }
        // maze = generateMaze(maze, left, right, bottom, pivot - 2);
        // maze = generateMaze(maze, left, right, pivot + 2, top);
      }
      
      console.log('return')
      return maze;
    }

    //let width = Math.floor((window.innerWidth - 40) / 20);
    //width += width % 2 - 1;
    let width = 51;
    //let height = Math.floor((window.innerHeight - 40) / 20);
    //height += height % 2 - 1;
    let height = 21;
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
    console.log(finalMaze)
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
</style>
