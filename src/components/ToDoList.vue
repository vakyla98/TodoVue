<template>
  <div>
    <transition name="slide-fade">
      <div class="list-wrapper" v-if="todos.length">
        <div class="list uncompletedList">
          <h3 class="mb-5 mt-5">Uncompleted ToDo's</h3>
          <v-list class="todo-list" v-if="this.uncompleted.length">
            <transition-group name="slide-fade">
              <to-do-item
                v-for="todo in uncompleted"
                :key="todo.id"
                :todo="todo"
                @toogleState="toogleState"
                @delTodo="delTodo"
                @editTodo="editTodo"
                class="todo uncompletedTodo"
              />
            </transition-group>
          </v-list>
        </div>
        <div class="list completedList">
          <h3 class="mb-5 mt-5">Completed ToDo's</h3>
          <v-list class="todo-list" v-if="this.completed.length">
            <transition-group name="slide-fade">
              <to-do-item
                v-for="todo in completed"
                :key="todo.id"
                :todo="todo"
                @delTodo="delTodo"
                @editTodo="editTodo"
                @toogleState="toogleState"
                class="todo completedTodo"
              />
            </transition-group>
          </v-list>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ToDoItem from './ToDoItem.vue'

export default {
  components: {
    ToDoItem,
  },
  props: {
    todos: { type: Array, require: true },
  },
  computed: {
    completed() {
      return this.todos.filter(todo => todo.isCompleted == true)
    },
    uncompleted() {
      return this.todos.filter(todo => todo.isCompleted == false)
    },
  },
  methods: {
    delTodo(id) {
      this.$emit('delTodo', id)
    },
    editTodo(id) {
      this.$emit('editTodo', id)
    },
    toogleState(id) {
      this.$emit('toogleState', id)
    },
  },
}
</script>

<style lang='scss'>
.list-wrapper {
  display: flex;
}
.list {
  width: 100%;
  padding: 0 10px;
}
.todo-list {
  padding: 0;
  position: relative;
}
@media screen and (max-width: 767px) {
  .list-wrapper {
    display: block;
  }
}
.slide-fade-move {
  transition: transform 0.3s;
}
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  width: 100%;
  position: absolute;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>


