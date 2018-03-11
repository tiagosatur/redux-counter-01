import React, { Component } from 'react';
import './style/todolist.css';

class TodoList extends Component {
	createTasks(item) {
		return <li className='list-item' key={item.key}>{item.text}</li>
	}

	render() {
		let todoEntries = this.props.entries;
		let listItems = todoEntries.map(this.createTasks);

		return(
			<ul className='todo__list'>
				{listItems}
			</ul>
		);
	}
}

export default TodoList;
