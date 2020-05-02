<template>
  <v-list-item class="todolist__item" :class="{completed:todo.isCompleted}" :id="todo.id">
    <v-row justify="center" align="center">
      <v-checkbox v-model="todo.isCompleted" @click="$emit('complete',todo.id)"></v-checkbox>
      <v-col class="text-left">
        <span class='todo-text'>{{todo.text}}</span>
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

<style lang='scss'>
.completed {
  filter:opacity(0.7);
  span.todo-text{
    text-decoration: line-through;
  }
}
</style>