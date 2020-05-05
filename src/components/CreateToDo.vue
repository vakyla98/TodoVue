<template>
  <v-row class="todolist__input" justify="center" align="center">
    <v-col>
      <v-text-field
        v-model="text"
        ref="input"
        label="New task"
        :rules="nameRules"
        clearable
      ></v-text-field>
    </v-col>
    <v-col cols="auto">
      <v-btn
        depressed
        medium
        color="primary"
        @click="addHandler"
        :disabled="!text"
        >Add</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
import { v4 } from 'uuid'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      text: '',
      nameRules: [v => !!v || 'Text is required!'],
    }
  },
  methods: {
    ...mapMutations(['addTodo']),
    addHandler() {
      this.addTodo({
        id: v4(),
        text: this.text,
        isCompleted: false,
      })
      this.$refs.input.resetValidation()
      this.text = ''
    },
  },
}
</script>

<style></style>
