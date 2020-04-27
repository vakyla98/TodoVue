<template>
  <li class="todolist__item" :id="todo.id">
      <p>{{todo.text}}</p>
      <button @click="$emit('delete',todo.id)">Delete</button>
    <!-- <button type="button" class="btn" @click="$emit('edit', user.id)">Edit name</button>
    <button type="button" class="btn" @click="$emit('delete', user.id)">Delete user</button> -->
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