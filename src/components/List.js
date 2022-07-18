import React from 'react'
import { ListItem } from './ListItem'
import './List.css'

function List({ tasks }) {
	return (
		<section>
			<ul>
				{tasks.map((task) => (
					<ListItem key={task.text} task={task} />
				))}
			</ul>
		</section>
	)
}

export { List }
