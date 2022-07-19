import React from 'react'
import { ListItem } from './ListItem'
import './List.css'

function List({ tasks, onComplete, onDelete }) {
	return (
		<section>
			<ul>
				{tasks.map((task) => (
					<ListItem key={task.text} task={task} onComplete={onComplete} onDelete={onDelete} />
				))}
			</ul>
		</section>
	)
}

export { List }
