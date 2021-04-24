<template>
  <div>
    <v-row justify="center">
      <v-col md="3">
        <v-text-field label="width" v-model="inputWidth" placeholder="Enter width" />
      </v-col>
      <v-col md="3">
        <v-text-field label="height" v-model="inputHeight" placeholder="Enter height" />
      </v-col>
    </v-row>
    <v-row justify="left">
      <v-col md="6">
        <v-btn v-on:click="changeSize">Change size</v-btn>
      </v-col>
    </v-row>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    inputWidth: Number,
    inputHeight: Number,
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
  },
}
</script>
