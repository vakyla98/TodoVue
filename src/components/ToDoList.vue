<template>
  <div class="todo">
    <v-content>
      <v-row justify="center">
        <v-col xl="10">
          <v-container>
            <CreateToDo />
            <v-row v-if="allTodos.length">
              <v-col>
                <h3>Uncompleted ToDo's</h3>
                <v-list
                  class="todo__list-completed"
                  v-if="this.uncompleted.length"
                >
                  <transition-group name="fade" tag="p">
                    <ToDoItem
                      v-for="todo in uncompleted"
                      :key="todo.id"
                      :todo="todo"
                    />
                  </transition-group>
                </v-list>
                <p v-else class="mt-7 text-center">None</p>
              </v-col>
              <v-col>
                <h3>Completed ToDo's</h3>
                <v-list
                  class="todo__list-uncompleted"
                  v-if="this.completed.length"
                >
                  <transition-group name="fade">
                    <ToDoItem
                      v-for="todo in completed"
                      :key="todo.id"
                      :todo="todo"
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
    <Modal v-if="isModalVisible" />
  </div>
</template>

<script>
import ToDoItem from './ToDoItem.vue'
import CreateToDo from './CreateToDo.vue'
import Modal from './Modal.vue'

export default {
  components: {
    CreateToDo,
    ToDoItem,
    Modal,
  },
  computed: {
    allTodos() {
      return this.$store.getters.allTodos
    },
    isModalVisible() {
      return this.$store.getters.isModalVisible
    },
    completed() {
      return this.allTodos.filter(todo => todo.isCompleted == true)
    },
    uncompleted() {
      return this.allTodos.filter(todo => todo.isCompleted == false)
    },
  },
  methods: {
    // editHandler(id) {
    //   this.activeTodo = this.todos.find(todo => todo.id === id)
    //   this.isEditTextWindowVisible = true
    // },
    // changeTextHandler(newText) {
    //   this.activeTodo.text = newText
    //   this.isEditTextWindowVisible = false
    // }
  },
  // mounted: function() {
  //   let localData = JSON.parse(localStorage.getItem('tasks'))
  //   if (localData) this.todos = localData
  // },
  // watch: {
  //   todos: {
  //     deep: true,
  //     handler(list) {
  //       localStorage.setItem('tasks', JSON.stringify(list))
  //     },
  //   },
  // },
}
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
