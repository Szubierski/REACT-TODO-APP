import React from 'react';
import './css/Task.css'

const Task = (props) => {
    const { task } = props;
    return (
        <div className={task.active ? "task" : "task taskDone"}>
            <strong className={task.important ? "important" : undefined}>{task.text}</strong>
            <p>to: {task.date}</p>
            <div className="buttons">
                <button
                    className="btn done material-symbols-outlined"
                    onClick={() => props.change(task.id)}
                    disabled={!task.active}
                >done</button>
                <button
                    className="btn edit"
                    onClick={() => props.edit("edit", task.id)}
                    disabled={!task.active}
                >EDIT</button>
                <button className="btn delete material-symbols-outlined" onClick={() => props.delete(task.id)}>close</button>
            </div>
        </div >
    )
}

export default Task;