import React from 'react';

const Task = ({ task, onDelete }) => {
  const { text, category } = task;

  const handleDelete = () => {
    onDelete(task);
  };
  return (
    <div>
      <p>{text} - {category}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
