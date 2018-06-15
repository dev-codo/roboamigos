import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px' }}>
			{props.children} {/*Cardlist*/}
		</div>
	);
}

export default Scroll;