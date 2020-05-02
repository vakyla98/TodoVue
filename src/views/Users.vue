<template>
  <div>
    <v-content>
      <h2 class="text-center mt-7">There is our users</h2>
      <v-list class="d-flex flex-wrap justify-space-between pa-10">
        <v-card
          v-for="user in userList"
          :key="user.id"
          @click="dummyMethod"
          class="text-center mb-7"
          width="30%"
        >
          <p class="font-weight-bold">Id: {{user.id}}</p>
          <p>Name: {{user.name}}</p>
          <p>Company: {{user.company}}</p>
        </v-card>
      </v-list>
    </v-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: []
    };
  },
  methods: {
    dummyMethod(e) {
      console.log(e.target);
    }
  },
  mounted: function() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        users.forEach(user =>
          this.userList.push({
            id: user.id,
            name: user.name,
            company: user.company.name
          })
        )
      );
  }
};
</script>
<style scoped>
</style>