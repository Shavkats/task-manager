import React from "react";
import "./styles.css";

interface Props {
  task: string;
  addTask: () => void;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}

const TaskInput: React.FC<Props> = ({
  task,
  setTask,
  addTask,
  handleKeyDown,
}) => {
  return (
    <div className="container">
      <input
        type="input"
        value={task}
        placeholder="Enter a task"
        className="input__box"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="input__submit" onClick={addTask}>
        Save
      </button>
    </div>
  );
};

export { TaskInput };
