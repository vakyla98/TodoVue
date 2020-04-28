<template>
  <li class="todolist__item" :id="todo.id">
      <span>{{todo.text}}</span>
      <button @click="$emit('delete',todo.id)">Delete</button>
      <button @click="$emit('edit',todo.id)">Edit</button>
  </li>
</template>

<script>
export default {
  name: "ToDoItem",
  props: {
    todo: {
      type: Object,
      require: true
    }
  }
};
</script>

<style>
</style>