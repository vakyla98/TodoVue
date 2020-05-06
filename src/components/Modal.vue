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
            <v-btn class="modal-default-button" color="primary" dark @click="submitHandler">Change</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Modal',
  data() {
    return {
      newText: this.$store.getters.activeTodo.text,
      dialog: true,
      //Пробовал создать computed свойство с этим геттером,
      //и присвоить :value='computed' на ипнут
    }
  },
  methods: {
    ...mapMutations(['submitText']),
    submitHandler() {
      this.submitText(this.newText)
      this.dialog = false
    },
  },
}
</script>

<style></style>
