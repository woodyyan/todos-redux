const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {text: action.text, completed: false}];
        case 'UPDATE_TODO':
            return state.map((todo, index) => {
                return index === action.index ? {text: todo.text, completed: !todo.completed} : todo;
            });
        case 'DELETE_TODO':
            return state.filter((todo, index) => action.index !== index);
        default:
            return state;
    }
};

export default todoList;
