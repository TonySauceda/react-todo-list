import React from 'react'
import { TaskContext } from './TaskContext'
import './Search.css'

function Search() {
	const { searchValue, setSearchValue } = React.useContext(TaskContext)
	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value)
	}

	return <input className="search" placeholder="Search" onChange={onSearchValueChange} value={searchValue} />
}

export { Search }
