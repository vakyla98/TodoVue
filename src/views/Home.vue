<template>
  <div>
    <v-content>
      <h2 class="text-center pt-10 display-1">Welcome in my first App</h2>
      <p class="text-center pt-5 headline font-italic font-weight-light">
        <router-link to="/dist/todos">Click here to go to App</router-link>
      </p>

      <v-list class="tech">
        <v-subheader>Technologies in this project:</v-subheader>
        <v-list-item ripple v-for="tech in technologies" :key="tech.id">
          <svg class="tech-icon mr-5">
            <use :xlink:href="require(`../assets/sprite.svg`) + '#' +tech.icon"/>
          </svg>
          <v-list-item-content>{{tech.name}}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-content>
  </div>
</template>
<script>
export default {
  data() {
    return {
      technologies: [
        { id: 0, name: 'Vue.js', icon: 'vuejs' },
        { id: 1, name: 'Vue-cli', icon: 'cli' },
        { id: 2, name: 'Vue-router', icon: 'router' },
        { id: 3, name: 'Fetch API(Axios)', icon: 'axios' },
        { id: 4, name: 'Jest(unit testing)', icon: 'test' },
        { id: 5, name: 'Local storage', icon: 'storage' },
      ],
    }
  },
}
</script>
<style lang="scss">
.tech {
  width: 100%;
  margin: 50px auto;
  padding: 10px;
  max-width: 900px;
  &-icon {
    width: 20px;
    height: 20px;
    fill: white;
  }
}
</style>
