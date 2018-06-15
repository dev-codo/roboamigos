import React from 'react';

const SearchBox = ({ buscarMudanca }) => { //({prop})
	return(
		<div className='pa2'>
			<input 
				className='tc pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='search robot'
				onChange={buscarMudanca}
			/>
		</div>
	);
}

export default SearchBox;
