import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Task from "./components/Task.jsx";
import AddTask from "./components/AddTask.jsx";
import "./assets/sass/main.scss";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="cuadroapp">
      <AddTask addtext="Add a new task"></AddTask>
      <App text="Task to do - 4?" />
      <Task task="To study React fundamentals" activated="true" />
      <Task task="To study React fundamentals" activated="true" />
      <Task task="To study React fundamentals" activated="true" />
      <Task task="To study React fundamentals" activated="true" />

      <App text="Done - 1" />
      <Task task="To study React fundamentals" activated="false" />
    </div>
  </React.StrictMode>
);
