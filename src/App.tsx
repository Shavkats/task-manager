import React, { useState, useEffect } from "react";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import "./App.css";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task) {
      const newTask = { id: Date.now(), task, completed: false };
      setTasks([...tasks, newTask]);
      localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    }
    setTask("");
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="App">
      <span className="heading">Task Manager</span>
      <TaskInput
        task={task}
        setTask={setTask}
        addTask={addTask}
        handleKeyDown={handleKeyDown}
      />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
