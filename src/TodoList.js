import React, { Component } from 'react';
import './style/todolist.css';

class TodoList extends Component {
	createTasks(item) {
		return (
			<li className='list-item' key={item.key}>
				<span className='list-item__text'>
					{item.text}
				</span>
				<span className='list-item__crud'>
					<button
						className='list-item__btn list-item__btn--del'
						onClick={()=> {this.removeItem(item.text, item.key)}} key={item.key}
						>
						<svg className='icon' enable-background="new 0 0 24 24" height="24px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="24px"><path d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>
					</button>
					<button className='list-item__btn list-item__btn--update'>
						<svg className='icon' height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
					</button>
				</span>
			</li>
		)
	}

	removeItem(text, key) {
		this.props.removeItem(this.item.text, this.item.key);
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
