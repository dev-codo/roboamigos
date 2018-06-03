import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line
import Card from './Card';
import CardList from './CardList'; //parent of Card
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots'; //destructured: because is not export `default`

ReactDOM.render(
		<CardList robosFofos={robots} /> //robots: `robots.js`
	, document.getElementById('root'));

registerServiceWorker();
