<template>
    <div class="cell" v-bind:style="{ width: width + 'px', height: height + 'px' }">
        
    </div>
</template>

<script>
export default {
    name: 'Cell',
    props: {
        width: Number,
        height: Number,
    },
}
</script>

<style scoped>
.cell {
    position: absolute;
    top: 100;
    left: 100;
    background-color: black;
}
</style>
