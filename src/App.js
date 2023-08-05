import "./styles.css";
import React from "react";

const InitialToDos = [
  {
    id: 1,
    title: "todo 1",
    complete: false
  },
  {
    id: 2,
    title: "todo 2",
    complete: false
  },
  {
    id: 3,
    title: "todo 3",
    complete: false
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE": {
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        }
        return { ...todo };
      });
    }
    default:
      return state;
  }
};

export default function App() {
  const [todos, dispatch] = React.useReducer(reducer, InitialToDos);

  const onChangehandler = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <div className="App">
      {todos.map((t) => (
        <div>
          <label>
            <input
              type="checkbox"
              checked={todos.complete}
              onChange={() => onChangehandler(t)}
            />
            {t.title}
          </label>
        </div>
      ))}
    </div>
  );
}
