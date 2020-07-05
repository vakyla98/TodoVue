<template>
    <div>
        <v-list-item :id="todo.id" class="ml-3 list-item">
            <v-row justify="center" align="center">
                <v-checkbox class="checkbox" v-model="checked" />
                <v-col class="text-left">
                    <p
                        :class="{ completed: todo.isCompleted }"
                        class="todo-text ma-0"
                    >
                        {{ todo.text }}
                    </p>
                </v-col>
                <div class="control-wrapper">
                    <v-btn
                        class="edit-btn"
                        icon
                        small
                        color="primary"
                        @click="editHandler"
                    >
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                        class="del-btn"
                        icon
                        small
                        color="primary"
                        @click="delHandler"
                    >
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </div>
            </v-row>
        </v-list-item>
        <v-divider dark></v-divider>
    </div>
</template>

<script>
export default {
    name: 'ToDoItem',
    props: {
        todo: {
            type: Object,
            require: true,
        },
    },
    computed: {
        checked: {
            get() {
                return this.todo.isCompleted
            },
            set() {
                this.$emit('toogleState', this.todo.id)
            },
        },
    },
    methods: {
        editHandler() {
            this.$emit('editTodo', this.todo.id)
        },
        delHandler() {
            this.$emit('delTodo', this.todo.id)
        },
    },
}
</script>

<style lang="scss">
.completed {
    filter: opacity(0.7);
    text-decoration: line-through;
}
.todo-text {
    min-width: 210px;
    width: 100%;
}
@media screen and (max-width: 500px) {
    .checkbox {
        margin-left: auto;
        margin-top: 18px;
        order: 2;
    }
}
</style>
