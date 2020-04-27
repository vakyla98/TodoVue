<template>
  <div class="todo">
    <h1 class="app-name">My second app</h1>
    <CreateToDo @add="addHandler" />
    <ul class="todo__list" v-if="todos.length">
      <ToDoItem v-for="todo in todos" :key="todo.id" :todo="todo" @delete="deleteHandler" />
    </ul>
    <p v-else>No items</p>
  </div>
</template>

<script>
import { v4 } from "uuid";
import ToDoItem from "./ToDoItem.vue";
import CreateToDo from "./CreateToDo.vue";
export default {
  data() {
    return {
      todos: []
    };
  },
  components: {
    CreateToDo,
    ToDoItem
  },
  methods: {
    addHandler(text) {
      this.todos.push({ id: v4(), text });
    },
    deleteHandler(id){
        this.todos = this.todos.filter( todo => todo.id !== id)
    }
  }
};
</script>

<style>
</style>