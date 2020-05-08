<template>
  <div>
    <v-content>
      <h2 class="text-center pt-10 display-1">Welcome in my first App</h2>
      <p class="text-center pt-5 headline font-italic font-weight-light">
        <router-link to="/dist/todos">Click here to go to App</router-link>
      </p>
      <v-list class="tech">
        <v-subheader>Technologies in this project:</v-subheader>
        <v-list-item ripple>
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>
          <v-list-item-content>Line item Secondary text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil amet voluptatem alias veritatis ipsam, commodi laboriosam, officiis, fugiat doloremque itaque ratione. Fugiat voluptate corporis voluptates eveniet ducimus quasi labore ab.</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-content>
  </div>
</template>

<style lang="scss">
.tech {
  width: 100%;
  margin: 50px auto;
  padding: 10px;
  max-width: 900px;
}
</style>