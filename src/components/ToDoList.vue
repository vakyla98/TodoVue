<template>
  <div class="todo">
    <h1 class="app-name">My second app</h1>
    <CreateToDo @add="addHandler" />
    <ul class="todo__list" v-if="todos.length">
      <ToDoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete="deleteHandler"
        @edit="editHandler"
      />
    </ul>
    <p v-else>No items</p>
    <Modal v-if="isModalVisible" :text="this.todos[targetIndex].text" @close="changeTextHandler"/>
  </div>
</template>

<script>
import { v4 } from "uuid";
import ToDoItem from "./ToDoItem.vue";
import CreateToDo from "./CreateToDo.vue";
import Modal from "./Modal.vue";
export default {
  data() {
    return {
      todos: [],
      targetIndex: Number,
      isModalVisible: false
    };
  },
  components: {
    CreateToDo,
    ToDoItem,
    Modal
  },
  methods: {
    addHandler(text) {
      this.todos.push({ id: v4(), text });
    },
    editHandler(id) {
      this.targetIndex = this.todos.findIndex(todo => todo.id === id);
      this.isModalVisible = true;
    },
    changeTextHandler(newText) {
      this.todos[this.targetIndex].text = newText;
      console.log("target inedx: " + this.targetIndex);
      console.log("new text: " + newText);
      console.log("apply that: " + this.todos[this.targetIndex].text);
      this.isModalVisible = false;
    },
    deleteHandler(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>

<style>
</style>