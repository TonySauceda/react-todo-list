import React from 'react'
import { TaskContext } from './TaskContext'
import './ListItem.css'

function ListItem({ task }) {
	const { completeTask, deleteTask } = React.useContext(TaskContext)
	return (
		<li className="listItem">
			<span className={`Icon${task.completed ? ' Icon-complete' : ''}`} onClick={() => completeTask(task.text)}>
				✔
			</span>
			<p className={`listItem-p${task.completed ? ' listItem-p--complete' : ''}`}>{task.text}</p>
			<span className="Icon Icon-delete" onClick={() => deleteTask(task.text)}>
				🗑
			</span>
		</li>
	)
}

export { ListItem }
