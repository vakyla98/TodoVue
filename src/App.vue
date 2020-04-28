<template>
  <div id="aplication">
      <ToDoList/>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
export default {
  name: 'application',
  components: {
    ToDoList
  }
}
</script>

<style lang="scss">
@import 'sass/main'
</style>
