<template>
    <div @mouseover="mouseOver" @mouseout="mouseOut" class="cell" :style="cellStyle"></div>
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
    let bgColor = this.type === 0 ? "#FFFFFF" : "#000000";

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
