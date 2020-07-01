<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-card>
      <v-card-title class="headline">Enter new text</v-card-title>
      <v-container>
        <v-text-field v-model="newText" @keyup.enter="editHandler"></v-text-field>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="modal-default-button" color="primary" dark @click="editHandler">Change</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    oldText: String,
  },
  data() {
    return {
      newText: this.oldText,
      dialog: true,
    }
  },
  methods: {
    editHandler() {
      this.$emit('submitNewText', this.newText)
      this.dialog = false
    },
  },
}
</script>
