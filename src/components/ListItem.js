import React from 'react'
import './ListItem.css'

function ListItem({ task }) {
	return (
		<li className="listItem">
			<span className={`Icon${task.completed ? ' Icon-complete' : ''}`}>✔</span>
			<p className={`listItem-p${task.completed ? ' listItem-p--complete' : ''}`}>{task.text}</p>
			<span className="Icon Icon-delete">🗑</span>
		</li>
	)
}

export { ListItem }
