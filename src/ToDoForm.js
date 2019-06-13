import React, { useState, useContext, useEffect } from "react";
import ToDoContext from "./context";

function ToDoForm() {
  const {
    state: { currentToDO = {} },
    dispatch
  } = useContext(ToDoContext);

  useEffect(() => {
    console.log(currentToDO);
    if (currentToDO.text) {
      setToDoVlaue(currentToDO.text);
    }
  }, [currentToDO.id]);

  const [toDoVlaue, setToDoVlaue] = useState("");
  const handelSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TO_DO", payload: toDoVlaue });
  };

  return (
    <form onSubmit={handelSubmit} className="felx justify-center py-5">
      <input
        value={toDoVlaue}
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
