<template>
  <div>
    <v-list-item :id="todo.id">
      <v-row justify="center" align="center">
        <v-checkbox v-model="todo.isCompleted" @click="todoStateHandler"></v-checkbox>
        <v-col class="text-left">
          <p :class="{ completed: todo.isCompleted }" class="todo-text">{{ todo.text }}</p>
        </v-col>
        <v-item-group class="xxx">
          <v-btn icon small color="primary" @click="editHandler">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon small color="primary" @click="delHandler">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-item-group>
      </v-row>
    </v-list-item>
    <v-divider dark></v-divider>
  </div>
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
  text-decoration: line-through;
}
.todo-text {
  min-width: 240px;
}
</style>
