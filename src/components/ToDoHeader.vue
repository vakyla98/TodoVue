<template>
  <div class="header">
    <v-navigation-drawer v-model="drawer"  dark color="primary" app>
      <v-list dense>
        <v-list-item to="/dist">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#">
          <v-list-item-action>
            <v-icon>mdi-sword-cross</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Roflik</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark color=primary>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>ToDo app</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  components: {}
};
</script>

<style>
</style>