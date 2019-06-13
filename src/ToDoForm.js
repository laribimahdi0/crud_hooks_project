import React, { useState, useContext } from "react";
import ToDoContext from "./context";

function ToDoForm() {
  const { state, dispatch } = useContext(ToDoContext);

  const [toDoVlaue, setToDoVlaue] = useState("");
  const handelSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TO_DO", payload: toDoVlaue });
  };
  console.log(state.currentToDO);

  return (
    <form onSubmit={handelSubmit} className="felx justify-center py-5">
      <input
        value={state.currentToDO === undefined ? "" : state.currentToDO.text}
        type="text"
        className="border-black border-solid border-2"
        onChange={e => setToDoVlaue(e.target.value)}
      />
      <button type="submit">Save</button>
      <button type="reset">Reset</button>
    </form>
  );
}

export default ToDoForm;
