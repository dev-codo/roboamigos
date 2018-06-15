// pai do CardList
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots'; //destructured: because is not export `default` (is export const...)
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() { //of `App` - empty default constructor
		super() //call the constructor of `Component`
		this.state = { //these two states(robots & searchfield) describes the App and can change
			robots: [], //empty array
			searchfield: ''
		}
	}

	componentDidMount() { //Mounting, after render()
		fetch('https://jsonplaceholder.typicode.com/users') //returns JSON object
			.then(response => {
				return response.json(); //json() -> JSON.parse()
			})
			.then(usuarios => {
				this.setState({ robots: usuarios })
			})
	}

	onSearchChange = (e) => { //random name / custom function decl.
		this.setState({ searchfield: e.target.value })
		//update this state (searchfield)
	}

	render() {
		const { robots, searchfield } = this.state; //destructuring

		const filterRobots = robots.filter(robo => {
			return robo.name.toLowerCase().includes(searchfield.toLowerCase());
		}) //if comparison is true, then return the value and assign to filterRobots.
		
		if(robots.length === 0) { //if `componentDidMount()` get slows, then show 'loading'
			console.log("Aqui " + robots.length); //output: 0 (which is: false).
			/*
			  (robots.length) => 0 => false
			  .Para o if() ser verdadeiro e executar, precisa colocar o ! para converter...
			  ... o (robots.length) de 0(false) para 1 (true) na condicao if.
			*/
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>Amigos Robos</h1>      
			  		<SearchBox buscarMudanca={this.onSearchChange}/> {/*eh a funcao 'buscarMudanca' no `SearchBox` - l155 - 17:10*/}
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

// STATE: is an object that describes the application. ex: the Robots and the Searchfield