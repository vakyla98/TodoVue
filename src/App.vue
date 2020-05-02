<template>
  <v-app>
      <h2>App here</h2>
      <router-link to="/todos">Go to home</router-link>
      <router-view/>
    <!-- <ToDoList/> -->
  </v-app>
</template>

<script>
// import ToDoList from "./components/ToDoList";

export default {
  name: "App",
//   components: {
//     ToDoList
//   }
};
</script>
<style lang="scss">
@import "sass/main";
</style>