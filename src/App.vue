<template>
  <v-app>
    <ToDoList/>
  </v-app>
</template>

<script>
import ToDoList from "./components/ToDoList";

export default {
  name: "App",
  components: {
    ToDoList
  },

  data: () => ({})
};
</script>
<style lang="scss">
@import "sass/main";
</style>