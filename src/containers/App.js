import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		// searchField: state.searchRobots.searchField
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: []
		}
	}

	componentDidMount() {
		// console.log(this.props.store.getState());
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(usuarios => {
				this.setState({ robots: usuarios })
			})
	}

	render() {
		const { robots } = this.state;
		const { searchField, onSearchChange } = this.props;

		const filterRobots = robots.filter(robo => {
			return robo.name.toLowerCase().includes(searchField.toLowerCase());
		})
		
		if(robots.length === 0) {
			console.log("Aqui " + robots.length);
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>Amigos Robos</h1>      
			  		<SearchBox buscarMudanca={onSearchChange}/>
			   		<Scroll>
			   			<ErrorBoundary>
			   				<CardList robosFofos={filterRobots} /> 
			   			</ErrorBoundary>
			   		</Scroll>
			  	</div>
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
