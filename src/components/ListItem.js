import React from 'react'

function ListItem(props) {
	return (
		<li>
			<span>C</span>
			<p>{props.text}</p>
			<span>X</span>
		</li>
	)
}

export { ListItem }
