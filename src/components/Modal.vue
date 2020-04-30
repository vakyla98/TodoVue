<template>
  <transition name="modal">
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>
          <v-card-title class="headline">Enter new text</v-card-title>
          <v-container>
            <v-text-field v-model="newText" @keyup.enter="submitHandler"></v-text-field>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn  class="modal-default-button" color="primary" dark @click="submitHandler">Change</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      newText: this.text,
      dialog: true
    };
  },
  props: {
    text: {
      type: String,
      require: true
    }
  },
  methods: {
    submitHandler() {
      this.dialog = false;
      this.$emit("close", this.newText);
    }
  }
};
</script>

<style>
</style>