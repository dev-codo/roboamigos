// jshint ignore: start
import React from 'react';
import Card from './Card';

const CardList = ({ robosFofos }) => {
	const cardArray = robosFofos.map((user, i) => {
		return <Card id={robosFofos[i].id} name={robosFofos[i].name} email={robosFofos[i].email} />
	})
	return (
		<div>
			{cardArray}
		</div>		
	);
	
}

export default CardList;