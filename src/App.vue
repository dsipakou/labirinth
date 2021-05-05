<template>
  <v-app id="app">
    <v-container class="grey lighten-5" justify="left">
      <div class="inner">
        <v-overlay :value="showSetup">
          <v-card class="mx-auto" max-width="370">
            <v-row justify="left">
              <v-col cols="auto">
                <Size v-bind:inputWidth="width" v-bind:inputHeight="height" />
              </v-col>
            </v-row>
          </v-card>
        </v-overlay>
        <v-row justify="center">
          <v-btn
            class="info"
            @click="handlePopup">
            Setup
          </v-btn>
        </v-row>
        <v-row justify="left">
          <v-col md="auto">
            <div class="container">
              <div v-for="heights, heightIndex in maze" :key="`${heights}${heightIndex}`">
                <div v-for="width, widthIndex in heights" :key="`${width}${widthIndex}${heightIndex}`">
                  <Cell :left="widthIndex * 30" :top="heightIndex * 30" :type="maze[heightIndex][widthIndex]"/>
                </div>
              </div>
            </div>     
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import Cell from './components/Cell.vue';
import Size from './components/Size.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      maze: [],
    }
  },

  computed: {
    ...mapGetters({
      width: 'getWidth',
      height: 'getHeight',
      showSetup: 'getShowSetup',
      recreated: 'getRecreateMaze',
    })
  },

  created () {
    this.initGenerate();
  },

  watch: {
    recreated() {
      if (this.recreated) {
        this.regenerate();
      }
    },
  },

  methods: {
    ...mapActions(['managePopup']),
    ...mapActions(['recreate']),

    handlePopup() {
      this.managePopup(!this.showSetup);
    },

    regenerate() {
      this.initGenerate();
      this.recreate(false);
    },

    initGenerate() {
      this.maze = new Array(this.height).fill(0).map(() => new Array(this.width).fill(0));
      for (let i = 0; i < this.maze[0].length; i += 1) {
        this.maze[0][i] = 1;
        this.maze[this.height - 1][i] = 1;
      }
      for (let i = 1; i < this.maze.length; i += 1) {
        this.maze[i][0] = 1;
        this.maze[i][this.width - 1] = 1;
      }
      this.maze[1][1] = 2;
      this.generateMaze(0, this.maze[0].length - 1, 0, this.maze.length - 1);
    },

    generateMaze (left, right, bottom, top, ret=false) {
      if (ret) {
        return this.maze;
      }
      const hDiff = right - left;
      const vDiff = top - bottom;
      const dirr = Math.random() > 0.5 ? 1 : 0

      if (dirr === 1) {
        if (hDiff < 4 || vDiff < 2) {
          return;
        }
        
        let hRatio = Math.max(0, hDiff - 5)
        let wall = Math.floor(Math.random() * hRatio + left + 1);
        wall += wall % 2;

        for (let i = bottom + 1; i < top; i += 1) {
          this.maze[i][wall] = 1;
        }

        var hole = Math.floor(Math.random() * (vDiff - 2) + bottom);
        hole += hole % 2 + 1;
        this.maze[hole][wall] = 0;
        this.generateMaze(left, wall, bottom, top);
        this.generateMaze(wall, right, bottom, top);
      } else {
        if (vDiff < 4 || hDiff < 2) {
          return;
        }

        let vRatio = Math.max(0, vDiff - 5);
        let wall = Math.floor(Math.random() * vRatio + bottom + 1);
        wall += wall % 2;

        for (let i = left; i < right;  i += 1) {
          this.maze[wall][i] = 1;
        }

        let hole = Math.floor(Math.random() * (hDiff - 2) + left);
        hole += hole % 2 + 1;
        this.maze[wall][hole] = 0;
        this.generateMaze(left, right, wall, top);
        this.generateMaze(left, right, bottom, wall);
      }
    }
  },

  name: 'App',
  components: {
    Cell,
    Size,
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

.inner {
  height: 100%;
  width: 100%;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
