<template>
  <div>
    <v-content>
      <h2 class="text-center mt-7">There is our users</h2>
      <p v-if="isLoading">User loading...</p>
      <p v-if="error">Ooops, error! Please try later</p>
      <v-list v-else class="d-flex flex-wrap justify-center">
        <v-card
          v-for="user in userList"
          :key="user.id"
          v-ripple
          class="user-card text-center ma-3 pt-3"
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
import { userService } from '../services'

export default {
  data() {
    return {
      userList: [],
      isLoading: true,
      error: null,
    }
  },
  async mounted() {
    const users = userService.getUsers()
    await users
      .then(response => {
        this.isLoading = false
        if (response.status == 200) {
          return response.data
        } else throw 'Bad status'
      })
      .then(users => {
        users.forEach(user => {
          this.userList.push({
            id: user.id,
            name: user.name,
            company: user.company.name,
          })
        })
      })
      .catch(err => {
        this.error = err.message
      })
    //   .finally((this.isLoading = false))
  },
}
</script>
<style>
.user-card {
  width: 30%;
  min-width: 200px;
}
</style>
