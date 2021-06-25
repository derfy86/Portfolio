import React from 'react';

// == Import
import { v4 as uuidv4 } from 'uuid';
import HeaderInput from './HeaderInput';
import MainText from './MainText';
import TodoList from './Tasklist';
import './style.css';

import Data from './task';

// == Composant

class Todolist extends React.Component {
  state = {
    inputClient: '',
    tasks: Data,
  }

  calculateTask = (obj) => {
    this.setState((prevState) => {
      const newTasks = prevState.tasks.map((task) => {
        if (task.id === obj.id) {
          task.done = !task.done;
        }
      });
      return { task: newTasks };
    });
  }

  textInputClient = (textClient) => {
    this.setState({
      inputClient: textClient,
    });
  }

  onChangeSubmit =() => {
    const { inputClient, tasks } = this.state;
    const newTodo = {
      id: uuidv4(),
      label: inputClient,
      done: false,
    };
    const newArrayTask = [...tasks, newTodo];
    this.setState({
      tasks: newArrayTask,
      inputClient: '',
    });
  }

  deleteTask = (obj) => {
    const { tasks } = this.state;
    const newArray = tasks.filter((element) => (element.id !== obj.id));
    this.setState({
      tasks: newArray,
    });
  }

  render() {
    const countDoneArray = this.state.tasks.filter((task) => (
      !task.done
    )).length;

    return (
      <div className="todo">
        <HeaderInput
          textInputClient={this.textInputClient}
          inputClient={this.state.inputClient}
          onChangeSubmit={this.onChangeSubmit}
        />
        <MainText count={countDoneArray} />
        <TodoList
          tasks={this.state.tasks}
          calculate={this.calculateTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}
// == Export
export default Todolist;
