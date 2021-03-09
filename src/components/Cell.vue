<template>
    <div class="cell" v-bind:style="{ left: left + 'px', top: top + 'px' }"></div>
</template>

<script>
export default {
    name: 'Cell',
    props: {
        left: Number,
        top: Number,
    },
}
</script>

<style scoped>
.cell {
    width: 16px;
    height: 16px;
    position: absolute;
    background-color: black;
    padding: 1px;
    border: 1px solid white;
}
</style>
