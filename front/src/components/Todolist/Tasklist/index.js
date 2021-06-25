import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TaskList = ({ tasks, calculate, deleteTask }) => (
  <div className="container">
    {
      tasks.map((task) => (
        <div key={task.id} className={task.done ? 'tache-ckecked' : 'tache'}>
          <input
            className="check--task"
            checked={!!task.done}
            type="checkbox"
            value=""
            onChange={() => {
              calculate(task);
            }}
          />
          <span>{task.label}</span>
          <button
            type="button"
            className="deleted"
            onClick={() => {
              deleteTask(task);
            }}
          >X
          </button>
        </div>
      ))
    }
  </div>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  calculate: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
