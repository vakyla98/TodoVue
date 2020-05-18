<template>
  <div>
    <v-content>
      <h2 class="text-center pt-10 display-1">Welcome in my first App</h2>
      <p class="text-center pt-5 headline font-italic font-weight-light">
        <router-link to="/dist/todos">Click here to go to App</router-link>
      </p>

      <v-list class="tech">
        <v-subheader>Technologies in this project:</v-subheader>
        <tech-item v-for="tech in technologies" :tech="tech" :key="tech.id" />
      </v-list>
    </v-content>
  </div>
</template>
<script>
import { v4 } from 'uuid'
import TechItem from '../components/TechItem'
export default {
  components: {
    TechItem,
  },
  data() {
    return {
      technologies: [
        { name: 'Vue.js', icon: 'vuejs' },
        { name: 'Vue-cli', icon: 'cli' },
        { name: 'Vue-router', icon: 'router' },
        { name: 'Fetch API(Axios)', icon: 'axios' },
        { name: 'Jest(unit testing)', icon: 'test' },
        { name: 'Local storage', icon: 'storage' },
      ],
    }
  },
  created() {
    this.technologies.map(x => (x.id = v4()))
  },
}
</script>

