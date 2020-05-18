<template>
  <v-app>
    <div class="todo">
      <v-content>
        <v-row justify="center">
          <v-col xl="10">
            <v-container>
              <create-to-do @addTodo="addTodo" />
              <to-do-list :todos="todos" @delTodo="delTodo" @editTodo="editTodo" @toogleState="toogleState"/>
            </v-container>
          </v-col>
        </v-row>
      </v-content>
      <modal v-if="isModalVisible" :oldText="activeTodo.text" @submitNewText="submitNewText"></modal>
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
    toogleState(id) {
      this.activeTodo = this.todos.find(todo => todo.id === id)
      this.activeTodo.isCompleted = !this.activeTodo.isCompleted
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
      handler(todos) {
        localStorage.setItem('tasks', JSON.stringify(todos))
      },
    },
  },
}
</script> 