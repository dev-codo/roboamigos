import React from 'react';
import Card from './Card';

// const CardList = ({ robosFofos }) => {
// 	const cardArray = robosFofos.map((user, i) => {
// 		return (
// 			<Card 
// 				key={i} //key prop should have something that doesn't change. Better key in this case would be something unique like id.
// 				id={user.id} 
// 				name={user.name} 
// 				email={user.email} 
// 				/>
// 			);
// 	})
// 	return (
// 		<div>
// 			{cardArray}
// 		</div>		
// 	);
// }

// CLEANER
const CardList = ({ robosFofos }) => { //prop: robosFofos
	return (
		<div>
			{
				robosFofos.map((user, i) => { //pai que contem <Card>
					return (
						<Card //esqueleto para o `robots.js`
							key={i} //key prop should have something that 	doesn't change. Better key in this case 	  would be something unique like id.
							id={user.id} 
							name={user.name} 
							email={user.email} 
						/>
					);
				})
			}
		</div>		
	);
}

export default CardList;