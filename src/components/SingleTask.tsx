import React, { useState } from "react";
import { Task } from "../types";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, task: editTask } : task))
    );
    setEdit(false);
  };

  const handleComplete = (id: number) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      })
    );
  };

  const handleDelete = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <form
      action=""
      className="tasks__single"
      onSubmit={(e) => handleEdit(e, task.id)}
    >
      {edit ? (
        <input
          alt="Press Enter to save"
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          className="tasks__single--text"
        />
      ) : task.completed ? (
        <s className="tasks__single--text">{task.task}</s>
      ) : (
        <span className="tasks__single--text">{task.task}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !task.completed) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(task.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleComplete(task.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export { SingleTask };
