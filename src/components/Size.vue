<template>
  <v-container class="grey lighten-5">
    <v-row justify="center">
      <v-col md="4">
        <v-text-field label="width" v-model="inputWidth" placeholder="Enter width" />
      </v-col>
      <v-col md="4">
        <v-text-field label="height" v-model="inputHeight" placeholder="Enter height" />
      </v-col>
    </v-row>
    <v-row justify="left">
      <v-col md="8">
        <v-btn v-on:click="changeSize">Change size</v-btn>
      </v-col>
    </v-row>
  </v-container>
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
