<template>
    <div class="cell" v-bind:style="styles"></div>
</template>

<script>
export default {
    name: 'Cell',
    props: {
        left: Number,
        top: Number,
        type: Number,
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
