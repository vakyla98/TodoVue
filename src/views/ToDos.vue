<template>
  <v-app>
    <div class="todo">
      <v-content>
        <v-row justify="center">
          <v-col xl="10">
            <v-container>
              <CreateToDo @addTodo="addTodo" />
              <ToDoList :todos="todos" @addTodo="addTodo" @delTodo="delTodo" @editTodo="editTodo" />
            </v-container>
          </v-col>
        </v-row>
      </v-content>
      <Modal v-if="isModalVisible" :oldText="activeTodo.text" @submitNewText="submitNewText"></Modal>
    </div>
  </v-app>
</template>

<script>
import ToDoList from '../components/ToDoList'
import CreateToDo from '../components/CreateToDo'
import Modal from '../components/Modal'

export default {
  data() {
    return {
      todos: [],
      isModalVisible: false,
      activeTodo: {},
    }
  },
  name: 'App',
  components: {
    ToDoList,
    CreateToDo,
    Modal,
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo)
    },
    delTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    editTodo(id) {
      this.isModalVisible = true
      this.activeTodo = this.todos.find(todo => todo.id === id)
    },
    submitNewText(newText) {
      this.activeTodo.text = newText
      this.isModalVisible = false
    },
  },
  mounted: function() {
    let localData = JSON.parse(localStorage.getItem('tasks'))
    if (localData) this.todos = localData
  },
  watch: {
    todos: {
      deep: true,
      handler(list) {
        localStorage.setItem('tasks', JSON.stringify(list))
      },
    },
  },
}
</script> 