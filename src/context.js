import { createContext } from "react";

const todos = createContext({
  todo: [
    { id: 1, text: "Eat breakfast", complete: false },
    { id: 2, text: "do  laudry", complete: false },
    { id: 3, text: "fineesh project", complete: true }
  ],
  currentToDO: {}
});

export default todos;
