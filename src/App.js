// pai do CardList
import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; //destructured: because is not export `default` (is export const...)
import './App.css';

class App extends Component {
	constructor() { //of `App` - empty default constructor
		super() //call the constructor of `Component`
		this.state = { //these two states(robots & searchfield) describes the App and can change
			robots: robots, //array
			searchfield: ''
		}
	}

	onSearchChange = (event) => { //random name
		this.setState({ searchfield: event.target.value })
		//update this state (searchfield)
	}

	render() {
		const filterRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		  <div className='tc'>
			<h1 className='f1'>Amigos Robos</h1>      
		  	<SearchBox buscarMudanca={this.onSearchChange}/> {/*eh a funcao 'buscarMudanca' no `SearchBox` - l155 - 17:10*/}
		   	<CardList robosFofos={filterRobots} /> 
		  </div>
		);
	}
}

export default App;

// STATE: is an object that describes the application. ex: the Robots and the Searchfield