import React from 'react';

const SearchBox = ({ buscarMudanca }) => { //({prop})
	return(
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='search friends'
				onChange={buscarMudanca} //buscarMudanca -> function
				//when onChange is triggered, it calls buscarMudanca (prop) function
			/>
		</div>
	);
}

export default SearchBox;