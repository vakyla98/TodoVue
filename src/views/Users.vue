<template>
  <div>
    <v-content>
      <h2 class="text-center mt-7">There is our users</h2>
      <v-list class="d-flex flex-wrap justify-center">
        <v-card
          v-for="user in userList"
          :key="user.id"
          v-ripple
          class="text-center ma-3 pt-3"
          width="30%"
          min-width="200px"
        >
          <p>
            <span class="font-weight-bold">Id:</span>
            <span class="red--text">{{ user.id }}</span>
          </p>
          <p>
            <span class="font-weight-bold">Name:</span>
            {{ user.name }}
          </p>
          <p>
            <span class="font-weight-bold">Company:</span>
            {{ user.company }}
          </p>
        </v-card>
      </v-list>
    </v-content>
  </div>
</template>

<script>
// import { UserService } from '../services'

export default {
  data() {
    return {
      userList: [],
    }
  },
  // async mounted() {
  //   const users = await UserService.getUsers()
  //   users.forEach(user => {
  //     this.userList.push({
  //           id: user.id,
  //           name: user.name,
  //           company: user.company.name,
  //         })
  //   })
  async mounted() {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        users.forEach(user =>
          this.userList.push({
            id: user.id,
            name: user.name,
            company: user.company.name,
          })
        )
      )
  },
}
</script>
<style scoped></style>
