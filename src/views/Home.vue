<template>
  <div>
    <ToDoHeader />
    <v-content>
      <h2 class="text-center">Welcome in my first App</h2>
      <router-link to="/dist/todos">ToDo</router-link>
    </v-content>
  </div>
</template>

<script>
import ToDoHeader from "../components/ToDoHeader.vue";
export default {
  components: {
    ToDoHeader
  }
};
</script>