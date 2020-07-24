<template>
    <v-app id="app">
        <ToDoHeader />
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </v-app>
</template>

<script>
import ToDoHeader from './components/ToDoHeader.vue'

export default {
    name: 'App',
    components: {
        ToDoHeader,
    },
}
</script>
