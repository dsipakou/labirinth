<template>
  <div>
    <label>Width:</label><input v-model="inputWidth" placeholder="Enter width" />
    <label>Height:</label><input v-model="inputHeight" placeholder="Enter height" />
    <br />
    <button v-on:click="initGenerate">Создать</button>
  </div>
</template>

<script>
export default {
  methods: {
    initGenerate() {
      console.log("Click on Create button");
    }
  }
}
</script>
