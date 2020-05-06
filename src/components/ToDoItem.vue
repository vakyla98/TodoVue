<template>
  <v-list-item class="todolist__item" :class="{ completed: todo.isCompleted }" :id="todo.id">
    <v-row justify="center" align="center">
      <v-checkbox v-model="todo.isCompleted" @click="todoStateHandler"></v-checkbox>
      <v-col class="text-left">
        <span class="todo-text">{{ todo.text }}</span>
      </v-col>
      <v-col cols="auto">
        <v-btn depressed small color="primary" @click="editHandler">Edit</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn depressed small color="primary" @click="delHandler">Del</v-btn>
      </v-col>
    </v-row>
  </v-list-item>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ToDoItem',
  props: {
    todo: {
      type: Object,
      require: true,
    },
  },
  methods: {
    ...mapMutations(['editText', 'deleteTodo', 'toggleTodoState']),
    editHandler() {
      this.editText(this.todo.id)
    },
    todoStateHandler() {
      this.toggleTodoState(this.todo.id)
    },
    delHandler() {
      this.deleteTodo(this.todo.id)
    },
  },
}
</script>

<style lang="scss">
.completed {
  filter: opacity(0.7);
  span.todo-text {
    text-decoration: line-through;
  }
}
</style>
