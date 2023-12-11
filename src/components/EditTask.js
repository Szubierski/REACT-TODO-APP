import React, { Component } from 'react';
import './css/AddTasks.css'

class EditTask extends Component {
    currentDate = new Date().toISOString().slice(0, 10);

    state = {
        text: '',
        checked: false,
        date: this.currentDate,
        isEditing: true,
    }

    handleState = () => {
        const tasks = [...this.props.tasks];
        // eslint-disable-next-line array-callback-return
        tasks.map(task => {
            if (this.props.id === task.id) {
                this.setState({
                    text: task.text,
                    checked: task.important,
                    date: task.date,
                })
            }
        })
    }

    handleDate = e => {
        this.setState({
            date: e.target.value,
        })
    }

    handleInput = e => {
        this.setState({
            text: e.target.value,
        })
    }

    handleChecked = e => {
        this.setState({
            checked: e.target.checked,
        })
    }

    handleClick = () => {
        const { text, checked, date } = this.state
        if (text !== '') {
            const edit = this.props.edit(text, date, checked);
            if (edit) {
                this.setState({
                    text: '',
                    checked: false,
                    date: this.currentDate,
                    isEditing: false,
                })
            }
        }
        else {
            alert('Enter the content of the task');
        }
    }

    componentDidMount() {
        this.handleState();
    }

    render() {
        return (
            <aside className="editForm">
                <h2>EDIT TASK</h2>
                <input
                    type="text"
                    className='inputTask'
                    value={this.state.text}
                    placeholder='Enter new task content...'
                    onChange={this.handleInput}
                />
                <p>By when it should be done:</p>
                <input
                    type="date"
                    className='inputTime'
                    value={this.state.date}
                    min={this.currentDate}
                    onChange={this.handleDate}
                />
                <label htmlFor="priorityEdit">
                    SET PRIORITY
                    <input
                        type="checkbox"
                        name="priority"
                        id="priorityEdit"
                        checked={this.state.checked}
                        onChange={this.handleChecked}
                    />
                </label>
                <div className='editButtons'>
                    <button
                        className='editButton'
                        onClick={this.handleClick}
                    >EDIT TASK</button>
                    <button
                        className='cancelButton'
                        onClick={() => this.props.cancelEdit("cancel")}
                    >CANCEL</button>
                </div>
            </aside>
        );
    }
}

export default EditTask;