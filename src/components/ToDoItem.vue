<template>
  <v-list-item class="todolist__item" :id="todo.id">
    <v-row justify="center" align="center">
      <v-checkbox v-model="todo.isComplete" @click="$emit('complete',todo.id)"></v-checkbox>
      <v-col class="text-left">
        <span>{{todo.text}}</span>
      </v-col>
      <v-col cols="auto">
        <v-btn depressed small color="primary" @click="$emit('edit',todo.id)">Edit</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn depressed small color="primary" @click="$emit('delete',todo.id)">Del</v-btn>
      </v-col>
    </v-row>
  </v-list-item>
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