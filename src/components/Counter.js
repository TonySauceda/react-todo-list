import React from 'react'
import './Counter.css'

function Counter({ total, completed }) {
	return <h2 className="counter">{`${total > 0 ? `You have completed ${completed} out of ${total} tasks` : ''}`}</h2>
}

export { Counter }
