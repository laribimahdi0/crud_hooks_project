import React, { useContext, useReducer } from "react";
import todosContext from "./context";
import TodoList from "./Todolis";
import todosReducer from "./reducer";
import ToDoForm from "./ToDoForm";

function App() {
  const initialState = useContext(todosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <>
      <todosContext.Provider value={{ state, dispatch }}>
        <ToDoForm />
        <TodoList />
      </todosContext.Provider>
    </>
  );
}

export default App;
