import React from 'react'
import { TaskContext } from './TaskContext'
import './Counter.css'

function Counter() {
	const { totalTasks, completedTasks } = React.useContext(TaskContext)
	return (
		<h2 className="counter">{`${
			totalTasks > 0 ? `You have completed ${completedTasks} out of ${totalTasks} tasks` : ''
		}`}</h2>
	)
}

export { Counter }
