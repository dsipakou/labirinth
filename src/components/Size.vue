<template>
  <div>
    <label>Width:</label><input v-model="inputWidth" placeholder="Enter width" />
    <label>Height:</label><input v-model="inputHeight" placeholder="Enter height" />
    <br />
    <button v-on:click="changeSize">Изменить размер</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      inputWidth: 'getWidth',
      inputHeight: 'getHeight',
    })
  },
  methods: {
    ...mapActions(['setSize']),
    changeSize() {
      this.setSize({
        width: parseInt(this.inputWidth),
        height: parseInt(this.inputHeight),
      });
    },
    initGenerate() {
      console.log("Click on Create button");
    }
  }
}
</script>
