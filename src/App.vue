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
    const generateMaze = (maze, x, maxWidth, y, maxHeight) => {
      if (maxWidth - x > maxHeight - y) {
        let diff = maxWidth - x;
        if (diff < 1) {
          return maze;
        }
        let rand = Math.floor(Math.random() * diff + x);
        rand += rand % 2;
        for (let i = y - 1; i < maxHeight + 2; i += 1) {
          maze[i][rand] = 1;
        } 

        let hole = Math.floor(Math.random() * (maxHeight - y) + y);
        hole += hole % 2 - 1;
        hole = hole > 0 ? hole : 0;
        console.log(hole, rand, maxHeight, y);
        maze[hole][rand] = 0;

        maze = generateMaze(maze, x, rand - 2, y, maxHeight);
        maze = generateMaze(maze, rand + 2, maxWidth, y, maxHeight);
      } else {
        let diff = maxHeight - y;
        if (diff < 1) {
          return maze;
        }
        let rand = Math.floor(Math.random() * diff + y);
        rand += rand % 2;
        for (let i = x - 1; i < maxWidth + 2; i += 1) {
          maze[rand][i] = 1;
        }

        maze = generateMaze(maze, x, maxWidth, y, rand - 2);
        maze = generateMaze(maze, x, maxWidth, rand + 2, maxHeight);
      }
      
      return maze;
    }

    let width = Math.floor((window.innerWidth - 40) / 20);
    width += width % 2 - 1;
    let height = Math.floor((window.innerHeight - 40) / 20);
    height += height % 2 - 1;
    console.log(width, height)
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
