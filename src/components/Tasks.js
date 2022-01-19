import { useState } from "react";
import {Task} from './Task';

const Tasks = ({tasks, onDelete, onToggle}) => {
  // Each child must have a unique key prop, that's why we use key={task.id}
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} key={task.id} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export { Tasks };
