<template>
    <div @mouseover="mouseOver" @mouseout="mouseOut" v-on:click="paint" class="cell" :style="cellStyle"></div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
      left: Number,
      top: Number,
      type: Number,
  },
  data() {
    let bgColor;

    switch(this.type) {
      case 0:
        bgColor = "#FFFFFF";
        break;
      case 1:
        bgColor = "#000000";
        break;
      case 2:
        bgColor = "#32CD32";
        break;
      default:
        bgColor = "#000000";
    }

    return {
      cellStyle: {
        left: `${this.left}px`,
        top: `${this.top}px`,
        backgroundColor: bgColor,
      } 
    }
  },
  methods: {
    mouseOver() {
      if (this.type === 0) {
        this.cellStyle.backgroundColor = "#FACDEA";
      }
    },
    mouseOut() {
      if (this.type === 0) {
        this.cellStyle.backgroundColor = "#FFFFFF";
      }
    },
    paint() {
      if (this.type === 0) {
        this.type = 2;
        this.cellStyle.backgroundColor = "#32CD32";
      }
    }
  },
  computed: {
    styles() {
      const background = this.type == 0 ? "#FFFFFF" : "#000000"
      return {
        "left": `${this.left}px`,
        "top": `${this.top}px`,
        "background-color": background,
      }
    }
  }
}
</script>

<style scoped>
.cell {
    width: 26px;
    height: 26px;
    position: absolute;
    padding: 1px;
    border: 1px solid white;
}
</style>
