<template>
    <v-app>
        <div class="todo container">
            <create-to-do @addTodo="addTodo" />

            <div class="list-wrapper ">
                <to-do-list
                    class="completedList"
                    :todos="uncompleted"
                    @delTodo="delTodo"
                    @editTodo="editTodo"
                    @toogleState="toogleState"
                >
                    Unompleted:
                </to-do-list>
                <to-do-list
                    class="uncompletedList"
                    :todos="completed"
                    @delTodo="delTodo"
                    @editTodo="editTodo"
                    @toogleState="toogleState"
                >
                    Completed:
                </to-do-list>
            </div>
            <modal
                v-if="isModalVisible"
                :oldText="activeTodo.text"
                @submitNewText="submitNewText"
            ></modal>
        </div>
    </v-app>
</template>

<script>
import ToDoList from '../components/ToDoList'
import CreateToDo from '../components/CreateToDo'
import Modal from '../components/Modal'

export default {
    data() {
        return {
            todos: [],
            isModalVisible: false,
            activeTodo: {},
        }
    },
    name: 'App',
    components: {
        ToDoList,
        CreateToDo,
        Modal,
    },
    methods: {
        addTodo(todo) {
            this.todos.push(todo)
        },
        delTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        toogleState(id) {
            this.activeTodo = this.todos.find(todo => todo.id === id)
            this.activeTodo.isCompleted = !this.activeTodo.isCompleted
        },
        editTodo(id) {
            this.isModalVisible = true
            this.activeTodo = this.todos.find(todo => todo.id === id)
        },
        submitNewText(newText) {
            this.activeTodo.text = newText
            this.isModalVisible = false
        },
    },
    computed: {
        completed() {
            return this.todos.filter(todo => todo.isCompleted == true)
        },
        uncompleted() {
            return this.todos.filter(todo => todo.isCompleted == false)
        },
    },
    mounted: function() {
        let localData = JSON.parse(localStorage.getItem('tasks'))
        if (localData) this.todos = localData
    },
    watch: {
        todos: {
            deep: true,
            handler(todos) {
                localStorage.setItem('tasks', JSON.stringify(todos))
            },
        },
    },
}
</script>
<style lang="scss">
@import '../styles/mixins.scss';
.list-wrapper {
    display: flex;

    flex-direction: row;
    @include screen(max, 800px) {
        flex-direction: column;
    }
}
</style>
