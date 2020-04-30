<template>
  <div class="todo">
    <ToDoHeader />
    <v-content>
      <v-row justify="center">
        <v-col xl="10">
          <v-container>
            <CreateToDo @add="addHandler" />
            <v-row>
              <v-col>
                <v-list class="todo__list-completed" v-if="todos.length">
                  <ToDoItem
                    v-for="todo in uncompleted"
                    :key="todo.id"
                    :todo="todo"
                    @complete="completeHandler"
                    @delete="deleteHandler"
                    @edit="editHandler"
                  />
                </v-list>
                <p v-else>No completed ToDo's</p>
              </v-col>
              <v-col>
                <v-list class="todo__list-uncompleted" v-if="todos.length">
                  <ToDoItem
                    v-for="todo in completed"
                    :key="todo.id"
                    :todo="todo"
                    @complete="completeHandler"
                    @delete="deleteHandler"
                    @edit="editHandler"
                  />
                </v-list>
                <p v-else>All ToDo's are complete</p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-content>
    <Modal
      v-if="isEditTextWindowVisible"
      :text="this.todos[targetIndex].text"
      @close="changeTextHandler"
    />
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
      isDialogOpened: false
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
      this.todos.push({ id: v4(), text , isComplete: false});
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
    completeHandler(id){
        this.targetIndex = this.todos.findIndex(todo => todo.id === id);
        this.todos[this.targetIndex].isComplete = !(this.todos[this.targetIndex].isComplete)
    }
  },
  computed: {
    completed() {
      return this.todos.filter(todo => todo.isComplete == true);
    },
    uncompleted() {
      return this.todos.filter(todo => todo.isComplete == false);
    }
  }
};
</script>

<style>
</style>