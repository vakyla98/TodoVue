<template>
  <div class="todo">
    <ToDoHeader/>
    <v-content>
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
    </v-content>
    <Modal v-if="isEditTextWindowVisible" :text="this.todos[targetIndex].text" @close="changeTextHandler" />
  </div>
</template>

<script>
import { v4 } from "uuid";
import ToDoHeader from "./ToDoHeader.vue";
import ToDoItem from "./ToDoItem.vue";
import CreateToDo from "./CreateToDo.vue";
import Modal from "./Modal.vue";
export default {
  data() {
    return {
      todos: [],
      targetIndex: Number,
      isEditTextWindowVisible: false,
      isDialogOpened: false,
    };
  },
  components: {
    ToDoHeader,
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
      this.isEditTextWindowVisible = true;
    },
    changeTextHandler(newText) {
      this.todos[this.targetIndex].text = newText;
      this.isEditTextWindowVisible = false;
    },
    deleteHandler(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
  }
};
</script>

<style>
</style>