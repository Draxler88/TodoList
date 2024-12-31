export const TodoListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      const { content, id } = action.payload;
      return [{ content, id }, ...state];
    case "DELETE":
        return state.filter((todo) => todo.id !== action.payload.id);
    case "UPDATE" :
        return state.map((todo) => todo.id === action.payload.id ?  action.payload : todo)
    default:
      return state;
  }
};
