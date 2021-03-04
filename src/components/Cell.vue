<template>
    <div class="cell" v-bind:style="{ left: left + 'px' }"></div>
</template>

<script>
export default {
    name: 'Cell',
    props: {
        left: Number,
    },
}
</script>

<style scoped>
.cell {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 100px;
    background-color: black;
    padding: 1px;
    border: 1px solid white;
}
</style>
