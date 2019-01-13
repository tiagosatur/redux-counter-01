import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment, decrement } from './actions';
import './style/App.css';


class Counter extends Component {


	render() {
		console.log(this.props)
		return (
			<div className="app">
				<h2>Counter</h2>

				<div>
					<button onClick={() => this.props.decrement(this.props.count)}>-</button>
					<span>{this.props.count}</span>
					<button onClick={() => this.props.increment(this.props.count)}>+</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		count: state.counterReducer.value,
	};
}

export default connect(mapStateToProps, {
	increment,
	decrement
})(Counter);
