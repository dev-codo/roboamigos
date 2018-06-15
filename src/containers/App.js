import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(usuarios => {
				this.setState({ robots: usuarios })
			})
	}

	onSearchChange = (e) => {
		this.setState({ searchfield: e.target.value })
	}

	render() {
		const { robots, searchfield } = this.state;

		const filterRobots = robots.filter(robo => {
			return robo.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		
		if(robots.length === 0) {
			console.log("Aqui " + robots.length);
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>Amigos Robos</h1>      
			  		<SearchBox buscarMudanca={this.onSearchChange}/>
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

export default App;
