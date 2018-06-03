import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line
import Card from './Card';
import App from './App'; //parent of Card
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<App /> //robots: `robots.js`
	, document.getElementById('root'));

registerServiceWorker();
