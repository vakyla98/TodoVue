<template>
  <v-row class="todolist__input" justify="center" align="center">
    <v-col>
      <v-text-field v-model="text" ref="input" label="New task" @keyup.enter="addHandler" clearable></v-text-field>
    </v-col>
    <v-col cols="auto">
      <v-btn depressed medium color="primary" @click="addHandler" :disabled="!this.text.length">Add</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      nameRules: [
        v => !!v || 'Text is required!',
      ]
    };
  },
  methods: {
    addHandler() {
      this.$emit("add", this.text);
      this.$refs.input.resetValidation()
      this.text = "";
    }
  }
};
</script>

<style>
</style>