<template>
  <v-app>
    <!-- <h2>App here</h2>
    <router-link to="/dist/todos">Its fake page</router-link>-->
    <ToDoHeader />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
import ToDoHeader from "./components/ToDoHeader.vue";

export default {
  name: "App",
  components: {
    ToDoHeader
  }
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>