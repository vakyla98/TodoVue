<template>
    <v-container class="todolist__input">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6">
          <v-text-field v-model="text" label="Regular" clearable></v-text-field>
        </v-col>
        <v-btn depressed medium color="primary" @click="addHandler">Add</v-btn>
      </v-row>
    </v-container>
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