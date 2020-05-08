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
        getDataFromStorage(state,data){
            state.todos = data
        },
        addTodo(state, newTodo) {
            state.todos.unshift(newTodo)
        },
        editText(state, id) {
            state.isModalVisible = true
            state.activeTodo = state.todos.find(todo => todo.id === id)
        },
        submitText(state, newText) {
            state.activeTodo.text = newText
            state.isModalVisible = false
        },
        deleteTodo(state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id)
        },
        toggleTodoState(state, id) {
            let item = state.todos.find(todo => todo.id === id)
            item.isCompleted = !item.isCompleted
        }
    },
    actions: {},
})