import React, { Component } from 'react';
import TodoList from './TodoList';
import './style/todoform.css';
import './icons/icon-add.svg'


class TodoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		};

		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);

	}

	addItem(e) {
		if (this._inputElement.value !== '') {
			let newItem = {
				text: this._inputElement.value,
				key: Date.now()
			}

			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});

			this._inputElement.value = ''; //for not reload the page
		}

		console.log(this.state.items)

		e.preventDefault();
	}

	removeItem(text, key) {
		let todos = this.state.items.slice();
		todos.splice(key, 1);

		this.setState(() => {
			return {
				items: todos
			}
		})

	}


	render() {
		return (
			<div>
				<form className='todo__form' onSubmit={this.addItem}>
					<input
						placeholder='O que deseja fazer?'
						className='todo__input'
						value={this.state.term}
						onChange={this.onChange}
						ref={(a) => this._inputElement = (a)} />
					<button type='submit' className='todo__btn'>
							<svg className='icon' version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path></svg>
					</button>
				</form>
				<TodoList entries={this.state.items} removeItem={this.removeItem} />
			</div>
		)
	}
}

export default TodoForm;
