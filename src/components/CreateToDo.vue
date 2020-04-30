<template>
  <v-row class="todolist__input" justify="center" align="center">
    <v-col>
      <v-text-field v-model="text" label="Regular" @keyup.enter="addHandler" clearable></v-text-field>
    </v-col>
    <v-col cols="auto">
      <v-btn depressed medium color="primary" @click="addHandler">Add</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    addHandler() {
      this.$emit("add", this.text);
      this.text = "";
    }
  }
};
</script>

<style>
</style>