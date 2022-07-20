import React from 'react'
import { TaskContext } from './TaskContext'
import './AddTaskButton.css'

function AddTaskButton() {
	const { setOpenModal } = React.useContext(TaskContext)
	return (
		<button className="addTaskButton" onClick={() => setOpenModal((prevValue) => !prevValue)}>
			+
		</button>
	)
}

export { AddTaskButton }
