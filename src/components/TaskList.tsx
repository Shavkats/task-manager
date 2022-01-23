import React from "react";
import { SingleTask } from "./SingleTask";
import { Task } from "../types";
import "./styles.css";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <SingleTask
          task={task}
          key={task.id}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
};

export { TaskList };
