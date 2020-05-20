<template>
  <div>
    <v-content>
      <h2 class="text-center mt-7">There is our users</h2>
      <div class="d-flex align-center ma-5 flex-column" v-if="isLoading">
        <HexagonSpin v-if="isLoading"></HexagonSpin>
        <p class="pt-5">Users loading</p>
      </div>
      <v-list v-if="userList.length" color="transparent" class="d-flex flex-wrap justify-center">
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
      <div class="d-flex justify-center ma-5 p" v-if="error">
        <v-alert type="error" color="secondary" dense>{{error.message}}</v-alert>
      </div>
    </v-content>
  </div>
</template>

<script>
import { userService } from '../services'
import HexagonSpin from 'vue-loading-spinner/src/components/Hexagon'

export default {
  components: {
    HexagonSpin,
  },
  data() {
    return {
      userList: [],
      isLoading: true,
      error: null,
    }
  },
  methods: {
    async getUserList() {
      try {
        let timer = new Promise(resolve => {
          //Декоративный промис для задержки загрузки данных на 3 сек, что бы показать полюзователю красивый спиннер, а вам что я немного понимаю promise :)
          setTimeout(() => {
            resolve(true)
          }, 3000)
        })
        if (await timer) {
          let localUsers = JSON.parse(localStorage.getItem('users'))
          if (localUsers) {
            this.userList = localUsers
          } else {
            let users = await userService.getUsers()
            users.forEach(user => {
              this.userList.push({
                id: user.id,
                name: user.name,
                company: user.company.name,
              })
            })
            localStorage.setItem('users', JSON.stringify(this.userList))
          }
        }
      } catch (err) {
        this.error = err
        console.log(this.error)
      } finally {
        this.isLoading = false
      }
    },
  },
  mounted() {
    this.getUserList()
  },
}
</script>
<style scoped>
.user-card {
  width: 30%;
  min-width: 200px;
}
</style>
