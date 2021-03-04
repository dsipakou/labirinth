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
    width: 10px;
    height: 10px;
    position: absolute;
    top: 100px;
    background-color: black;
}
</style>
