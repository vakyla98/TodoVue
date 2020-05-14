<template>
  <div>
    <div class="list-wrapper" v-if="todos.length">
      <div class="list uncompletedList">
        <h3 class="mb-5">Uncompleted ToDo's</h3>
        <v-list class="todo-list" v-if="this.uncompleted.length">
          <ToDoItem
            v-for="todo in uncompleted"
            :key="todo.id"
            :todo="todo"
            @toogleState="toogleState"
            @delTodo="delTodo"
            @editTodo="editTodo"
            class='uncompletedTodo'
          />
        </v-list>
        <p v-else class="mt-7 text-center">None</p>
      </div>
      <div class="list completedList">
        <h3 class="mb-5">Completed ToDo's</h3>
        <v-list class="todo-list" v-if="this.completed.length">
          <ToDoItem
            v-for="todo in completed"
            :key="todo.id"
            :todo="todo"
            @delTodo="delTodo"
            @editTodo="editTodo"
            @toogleState="toogleState"
            class='completedTodo'
          />
        </v-list>
        <p v-else class="mt-7 text-center">None</p>
      </div>
    </div>
    <p v-else class="mt-7 text-center">No tasks</p>
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

<style lang='scss' scoped>
.list-wrapper {
  display: flex;
}
.list {
  width: 100%;
  padding: 0 10px;
}
.todo-list {
  padding: 0;
}
@media screen and (max-width: 767px) {
  .list-wrapper {
    display: block;
  }
}
</style>


