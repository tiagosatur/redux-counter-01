import React, { Component } from 'react';
import './style/App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


class App extends Component {


	render() {
		return (
			<div className="app">
				<TodoForm />
			</div>
		);
	}
}

export default App;
