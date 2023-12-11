import React from 'react';
import Task from './Task.js';
import './css/TasksList.css';

const TasksList = (props) => {
    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)

    const activeTasks = active.map(task => <Task key={task.id} edit={props.edit} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <main className='tasksList'>
            <section className='activeTasks'>
                <h2>ACTIVE TASKS</h2>
                <div className='activeBlocks'>
                    {activeTasks.length > 0 ? activeTasks : <strong className='center'>NO TASKS TO DO</strong>}
                </div>
            </section>
            <section className='doneTasks'>
                <h2>DONE TASKS</h2>
                <div className="doneBlocks">
                    {doneTasks.length > 0 ? doneTasks : <strong className='center'>NO TASKS COMPLETED</strong>}
                </div>
            </section>
        </main>
    );
}

export default TasksList;