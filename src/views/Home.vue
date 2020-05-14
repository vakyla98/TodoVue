<template>
  <div>
    <v-content>
      <h2 class="text-center pt-10 display-1">Welcome in my first App</h2>
      <p class="text-center pt-5 headline font-italic font-weight-light">
        <router-link to="/dist/todos">Click here to go to App</router-link>
      </p>
      <v-list class="tech">
        <v-subheader>Technologies in this project:</v-subheader>
        <v-list-item ripple v-for="tech in technologies" :key="tech">
          <v-icon class="mr-5">mdi-check-bold</v-icon>
          <v-list-item-content
            >{{tech}}</v-list-item-content
          >
        </v-list-item>
      </v-list>
    </v-content>
  </div>
</template>
<script>
export default {
    data(){
        return{
            technologies:[
                'Vue.js',
                'Vue-cli',
                'Vue-router',
                'Vuetify',
                'Fetch API(Axios)',
                'Jest(unit testing)',
                ]
        }
    }
}
</script>
<style lang="scss">
.tech {
  width: 100%;
  margin: 50px auto;
  padding: 10px;
  max-width: 900px;
}
</style>
