import uuidv4 from "uuid/v4";
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentToDO: action.payload
      };
    case "ADD_TO_DO":
      const toDo = {
        id: uuidv4(),
        text: action.payload,
        complete: false
      };
      const newList = [...state.todo, toDo];
      return { ...state, todo: newList };
    case "TOOGEL_TO_DO":
      const toggelTodo = state.todo.map(t =>
        t.id === action.payload.id
          ? {
              ...action.payload,
              complete: !action.payload.complete
            }
          : t
      );
      console.log(toggelTodo);
      return {
        ...state,
        todo: toggelTodo
      };
    case "REMOVE_TO_DO":
      console.log(action.payload);
      const filtredTodos = state.todo.filter(t => t.id !== action.payload.id);
      return { ...state, todo: filtredTodos };
    default:
      return state;
  }
};

export default reducer;
