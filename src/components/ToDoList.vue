<template>
    <div class="todo-block">
        <h3 class="mb-5 mt-5"><slot></slot></h3>
        <v-list class="todo-list" v-if="todos.length">
            <transition-group name="slide-fade">
                <to-do-item
                    v-for="todo in todos"
                    :key="todo.id"
                    :todo="todo"
                    @delTodo="delTodo"
                    @editTodo="editTodo"
                    @toogleState="toogleState"
                    class="todo"
                />
            </transition-group>
        </v-list>
    </div>
</template>

<script>
import ToDoItem from './ToDoItem.vue'

export default {
    components: {
        ToDoItem,
    },
    props: {
        todos: { type: Array, require: true },
    },
    methods: {
        delTodo(id) {
            this.$emit('delTodo', id)
        },
        editTodo(id) {
            this.$emit('editTodo', id)
        },
        toogleState(id) {
            this.$emit('toogleState', id)
        },
    },
}
</script>

<style lang="scss">
.todo-block {
    display: flex;
    padding:15px;
    flex-direction: column;
    width: 100%;
}
.list {
    width: 100%;
    padding: 0 10px;
}
.todo-list {
    padding: 0;
    position: relative;
}
@media screen and (max-width: 767px) {
    .list-wrapper {
        display: block;
    }
}
</style>
