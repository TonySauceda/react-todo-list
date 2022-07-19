import React from 'react'
import './ListItem.css'

function ListItem({ task, onComplete, onDelete }) {
	return (
		<li className="listItem">
			<span className={`Icon${task.completed ? ' Icon-complete' : ''}`} onClick={() => onComplete(task.text)}>
				✔
			</span>
			<p className={`listItem-p${task.completed ? ' listItem-p--complete' : ''}`}>{task.text}</p>
			<span className="Icon Icon-delete" onClick={() => onDelete(task.text)}>
				🗑
			</span>
		</li>
	)
}

export { ListItem }
