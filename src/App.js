import React from 'react'
import { Counter } from './components/Counter'
import { Search } from './components/Search'
import { List } from './components/List'
import { AddTaskButton } from './components/AddTaskButton'
// import './App.css';

const tasks = [
	{ text: 'Task 1', completed: false },
	{ text: 'Task 2', completed: true },
	{ text: 'Task 3', completed: false },
]

function App() {
	return (
		<React.Fragment>
			<Counter />
			<Search />
			<List tasks={tasks} />
			<AddTaskButton />
		</React.Fragment>
	)
}

export default App
