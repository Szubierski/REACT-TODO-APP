import React, { Component } from 'react';
import './css/App.css';
import AddTasks from './AddTasks';
import TasksList from './TasksList';
import EditTask from './EditTask';

class App extends Component {
  editId = -1;
  counter = 1;
  state = {
    isEditing: false,
    tasks: []
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks,
    });
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
      }
    })
    this.setState({
      tasks: tasks,
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
    }
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true;
  }

  editTask = (text, date, important) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === this.editId) {
        task.text = text;
        task.date = date;
        task.important = important;
      }
    })
    this.setState({
      tasks: tasks,
      isEditing: false,
    })
    return true;
  }

  handleIsEditing = (message, id) => {
    if (message === "cancel")
      this.setState({
        isEditing: false,
      })
    else if (message === "edit") {
      this.setState({
        isEditing: true,
      })
    }
    this.editId = id;
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>TODO LIST</h1>
        </header>
        <main className='content'>
          {this.state.isEditing ? <EditTask id={this.editId} tasks={this.state.tasks} edit={this.editTask} cancelEdit={this.handleIsEditing} /> : <AddTasks add={this.addTask} />}
          <TasksList
            tasks={this.state.tasks}
            delete={this.deleteTask}
            change={this.changeTaskStatus}
            edit={this.handleIsEditing}
          />
        </main>
      </div>
    )
  }
}

export default App;