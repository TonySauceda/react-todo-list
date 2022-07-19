import React from 'react'
import './Search.css'

function Search({ searchValue, setSearchValue }) {
	
	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value)
	}

	return <input className="search" placeholder="Search" onChange={onSearchValueChange} value={searchValue} />
}

export { Search }
