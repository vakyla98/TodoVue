<template>
  <v-app>
      <h2>App here</h2>
      <router-link to="/dist/todos">Go to home</router-link>
      <router-view/>
  </v-app>
</template>

<script>

export default {
  name: "App",
};
</script>
<style lang="scss">
@import "sass/main";
</style>