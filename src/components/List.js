import React from 'react'
import { ListItem } from './ListItem'
import { TaskContext } from './TaskContext'
import './List.css'

function List() {
	const { searchedTasks } = React.useContext(TaskContext)

	return (
		<section>
			<ul>
				{searchedTasks.map((task) => (
					<ListItem key={task.text} task={task} />
				))}
			</ul>
		</section>
	)
}

export { List }
