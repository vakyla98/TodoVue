<template>
  <div>
    <v-content>
      <h2 class="text-center mt-7">There is our users</h2>
      <p v-if="isLoading">User loading...</p>
      <v-list v-if="userList.length" class="d-flex flex-wrap justify-center">
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
      <transition name="fade" v-if="error">
        <div class="d-flex justify-center ma-5 p">
          <v-alert type="error" class="d-flex justify-center">Oops, error! Please, try later.</v-alert>
        </div>
      </transition>
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
    // const users = userService.getUsers()
    // await users
    //   .then(response => {
    //     this.isLoading = false
    //     if (response.status == 200) {  //Проверка на 200 статус не обязательна
    //       return response.data
    //     }
    //   })
    //   .then(users => {
    //     users.forEach(user => {
    //       this.userList.push({
    //         id: user.id,
    //         name: user.name,
    //         company: user.company.name,
    //       })
    //     })
    //   })
    //   .catch(err => {
    //     this.isLoading = false
    //     this.error = err.message
    //     console.log(this.error)
    //   })

    try {
      let users = await userService.getUsers()
      users = users.data // Эту строчку можно раскоментировать в UserService, оставил здесь для удобства сравнения с методом выше
      users.forEach(user => {
        this.userList.push({
          id: user.id,
          name: user.name,
          company: user.company.name,
        })
      })
    } catch (err) {
      this.error = err
      console.log(this.error)
    } finally {
      this.isLoading = false
    }
  },
}
</script>
<style scoped>
.user-card {
  width: 30%;
  min-width: 200px;
}
</style>
