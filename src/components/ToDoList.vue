<template>
  <div class="todo">
    <v-content>
      <v-row justify="center">
        <v-col xl="10">
          <v-container>
            <CreateToDo @add="addHandler" />
            <v-row v-if="todos.length">
              <v-col>
                <h3>Uncompleted ToDo's</h3>
                <v-list class="todo__list-completed" v-if="this.uncompleted.length">
                  <transition-group name="fade" tag="p">
                    <ToDoItem
                      v-for="todo in uncompleted"
                      :key="todo.id"
                      :todo="todo"
                      @complete="completeHandler"
                      @delete="deleteHandler"
                      @edit="editHandler"
                    />
                  </transition-group>
                </v-list>
                <p v-else class="mt-7 text-center">None</p>
              </v-col>
              <v-col>
                <h3>Completed ToDo's</h3>
                <v-list class="todo__list-uncompleted" v-if="this.completed.length">
                  <transition-group name="fade">
                    <ToDoItem
                      v-for="todo in completed"
                      :key="todo.id"
                      :todo="todo"
                      @complete="completeHandler"
                      @delete="deleteHandler"
                      @edit="editHandler"
                    />
                  </transition-group>
                </v-list>
                <p v-else class="mt-7 text-center">None</p>
              </v-col>
            </v-row>
            <p v-else class="mt-7 text-center">No tasks</p>
          </v-container>
        </v-col>
      </v-row>
    </v-content>
    <Modal
      v-if="isEditTextWindowVisible"
      :text="this.todos[targetIndex].text"
      @submit="changeTextHandler"
    />
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
      isEditTextWindowVisible: false,
      isDialogOpened: false
    };
  },
  components: {
    CreateToDo,
    ToDoItem,
    Modal
  },
  methods: {
    addHandler(text) {
      this.todos.push({ id: v4(), text, isCompleted: false });
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
    completeHandler(id) {
      this.targetIndex = this.todos.findIndex(todo => todo.id === id);
      this.todos[this.targetIndex].isCompleted = !this.todos[this.targetIndex]
        .isCompleted;
    }
  },
  computed: {
    completed() {
      return this.todos.filter(todo => todo.isCompleted == true);
    },
    uncompleted() {
      return this.todos.filter(todo => todo.isCompleted == false);
    }
  },
  mounted: function() {
    let localData = JSON.parse(localStorage.getItem("tasks"))
    if (localData) this.todos = localData;
  },
  watch: {
    todos: {
      deep: true,
      handler(list) {
        localStorage.setItem("tasks", JSON.stringify(list));
      }
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>