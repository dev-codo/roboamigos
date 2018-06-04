import React from 'react';

// const Card = (props) => {
// 	//const { name, email, id } = props;
// 	return (
// 		<div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
// 			<img src={`https://robohash.org/${props.id}?200x200`} alt="gato"/>
// 			<div>
// 				<h2>{props.name}</h2>
// 				<p>{props.email}</p>
// 			</div>
// 		</div>
// 	)
// }

// DESTRUCTURING
const Card = ({ name, email, id }) => {
	return (
		<div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?200x200`} alt="gato"/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;