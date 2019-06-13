import React, { useContext } from "react";
import TodosContext from "./context";

function Todolist() {
  const { state, dispatch } = useContext(TodosContext);
  const title =
    state.todo.length > 0 ? `you Have ${state.todo.length} List` : "Nothing";
  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="list-inside p-0 ">
        {state.todo.map((todo, index) => {
          return (
            <li
              className=" flex item-center bg-orange-dark border-black border-dashed border-2 my-2 py-4 "
              key={todo.id}
            >
              <span
                onDoubleClick={() =>
                  dispatch({ type: "TOOGEL_TO_DO", payload: todo })
                }
                className={`currsor-pointer flex-1  ml-12 ${todo.complete &&
                  "line-through text-grey-darkest"}`}
              >
                {todo.text}{" "}
              </span>
              <button
                onClick={() =>
                  dispatch({
                    type: "SET_CURRENT_TODO",
                    payload: todo
                  })
                }
              >
                <img
                  src="https://icon.now.sh/edit/0050c5"
                  alt="Edit Icon"
                  className="h-6"
                />
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_TO_DO", payload: todo })
                }
              >
                <img
                  src="https://icon.now.sh/delete/8b0000"
                  alt="delet Icon"
                  className="h-6"
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
