import React, { Component } from 'react';
import './css/AddTasks.css'

class AddTasks extends Component {
    currentDate = new Date().toISOString().slice(0, 10);

    state = {
        text: '',
        checked: false,
        date: this.currentDate,
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
            const add = this.props.add(text, date, checked);
            if (add) {
                this.setState({
                    text: '',
                    checked: false,
                    date: this.currentDate,
                })
            }
        }
        else {
            alert('Enter the content of the task');
        }
    }

    render() {
        return (
            <aside className='addTasks'>
                <h2>ADD NEW TASK</h2>
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
                <label htmlFor="priority">
                    SET PRIORITY
                    <input
                        type="checkbox"
                        name="priority"
                        id="priority"
                        checked={this.state.checked}
                        onChange={this.handleChecked}
                    />
                </label>
                <button
                    className='addButton'
                    onClick={this.handleClick}
                >CREATE TASK</button>
            </aside>
        );
    }
}

export default AddTasks;