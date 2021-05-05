<template>
  <div>
    <v-row justify="center">
      <v-col md="4">
        <v-text-field label="width" v-model="inputWidth" placeholder="Enter width" />
      </v-col>
      <v-col md="4">
        <v-text-field label="height" v-model="inputHeight" placeholder="Enter height" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="12">
        <v-btn v-on:click="changeSize">Generate Maze</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    inputWidth: Number,
    inputHeight: Number,
  },
  computed: {
    ...mapGetters({
      showSetup: 'getShowSetup',
    })
  },
  methods: {
    ...mapActions(['setSize']),
    ...mapActions(['managePopup']),
    ...mapActions(['recreate']),

    changeSize() {
      this.setSize({
        width: parseInt(this.inputWidth),
        height: parseInt(this.inputHeight),
      });
      this.recreate(true);
      this.managePopup(!this.showSetup)
    },
  },
}
</script>
