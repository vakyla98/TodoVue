<template>
  <div class="todo">
    <v-content>
      <v-row justify="center">
        <v-col xl="10">
          <v-container>
            <CreateToDo />
            <div class="list-wrapper" v-if="allTodos.length">
              <div class="list">
                <h3 class='mb-5'>Uncompleted ToDo's</h3>
                <v-list class="todo-list" v-if="this.uncompleted.length">
                  <transition-group name="fade">
                    <ToDoItem v-for="todo in uncompleted" :key="todo.id" :todo="todo" />
                  </transition-group>
                </v-list>
                <p v-else class="mt-7 text-center">None</p>
              </div>
              <div class="list">
                <h3 class='mb-5'>Completed ToDo's</h3>
                <v-list class="todo-list" v-if="this.completed.length">
                  <transition-group name="fade">
                    <ToDoItem v-for="todo in completed" :key="todo.id" :todo="todo" />
                  </transition-group>
                </v-list>
                <p v-else class="mt-7 text-center">None</p>
              </div>
            </div>
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

import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  components: {
    CreateToDo,
    ToDoItem,
    Modal,
  },
  computed: {
    ...mapGetters(['allTodos', 'isModalVisible']),
    completed() {
      return this.allTodos.filter(todo => todo.isCompleted == true)
    },
    uncompleted() {
      return this.allTodos.filter(todo => todo.isCompleted == false)
    },
  },
  methods: {
    ...mapMutations(['getDataFromStorage']),
  },
  mounted: function() {
    let localData = JSON.parse(localStorage.getItem('tasks'))
    if (localData) this.getDataFromStorage(localData)
  },
  watch: {
    allTodos: {
      deep: true,
      handler(list) {
        localStorage.setItem('tasks', JSON.stringify(list))
      },
    },
  },
}
</script>

<style lang='scss' scoped>
.list-wrapper {
  display: flex;
}
.list {
  width: 100%;
  padding: 0 10px;
}
.todo-list{
    padding: 0;
}
@media screen and (max-width: 767px) {
  .list-wrapper {
    display: block;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>


