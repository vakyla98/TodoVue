export default ({
    state: {
        todos: [],
        activeTodo: null,
        isModalVisible: false
    },
    getters: {
        allTodos(state) {
            return state.todos
        },
        isModalVisible(state) {
            return state.isModalVisible
        },
        activeTodo(state) {
            return state.activeTodo
        },
    },
    mutations: {
        addTodo(state, newTodo) {
            state.todos.push(newTodo)
        },
        editText(state, curentTodo) {
            state.isModalVisible = true
            state.activeTodo = state.todos.find(todo => todo.id === curentTodo.id)
        },
        submitText(state, newText) {
            state.activeTodo.text = newText.text
            state.isModalVisible = false
        },
        deleteTodo(state, curentTodo) {
            state.todos = state.todos.filter(todo => todo.id !== curentTodo.id)
        },
        toggleTodoState(state, curentTodo) {
            let item = state.todos.find(todo => todo.id === curentTodo.id)
            item.isCompleted = !item.isCompleted
        }
    },
    actions: {},
})