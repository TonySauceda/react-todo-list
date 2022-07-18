import React from 'react'
import { ListItem } from './ListItem'

function List({ tasks }) {
	return (
		<section>
			{tasks.map((task) => (
				<ListItem key={task.text} task={task} />
			))}
		</section>
	)
}

export { List }
