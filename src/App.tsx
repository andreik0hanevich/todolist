import React from "react";
import "./App.css";
import Todolist from "./components/Todolist";
import { TasksType } from "./components/Todolist";

function App() {
  const title1 = "What to learn - 1";
  const title2 = "What to learn - 2";

  const tasks1: TasksType[] = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
  ];

  const tasks2: TasksType[] = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
  ];

  return (
    <div className="App">
      <Todolist title={title1} tasks={tasks1} />
      <Todolist title={title2} tasks={tasks2} />
    </div>
  );
}

export default App;
