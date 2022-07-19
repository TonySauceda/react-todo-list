import React from 'react'
import { Counter } from './components/Counter'
import { Search } from './components/Search'
import { List } from './components/List'
import { AddTaskButton } from './components/AddTaskButton'
import './App.css'

const testTasks = [
	{ text: 'Task 1', completed: false },
	{ text: 'Task 2', completed: true },
	{ text: 'Task 3', completed: false },
]

function App() {
	const [tasks, setTasks] = React.useState(testTasks)
	const [searchValue, setSearchValue] = React.useState('')

	const completedTasks = tasks.filter((t) => t.completed).length
	const totalTasks = tasks.length

	let searchedTasks = tasks

	if (searchValue.length > 0) {
		searchedTasks = tasks.filter((t) => {
			const text = t.text.toLocaleLowerCase()
			const searchtext = searchValue.toLocaleLowerCase()

			return text.includes(searchtext)
		})
	}

	const completeTask = (text) => {
		const taskIndex = tasks.findIndex((t) => t.text === text)
		if (taskIndex >= 0) {
			const newTasks = [...tasks]
			newTasks[taskIndex].completed = true
			setTasks(newTasks)
		}
	}

	const deleteTask = (text) => {
		const taskIndex = tasks.findIndex((t) => t.text === text)
		if (taskIndex >= 0) {
			const newTasks = [...tasks]
			newTasks.splice(taskIndex, 1)
			setTasks(newTasks)
		}
	}

	return (
		<div className="app">
			<Counter total={totalTasks} completed={completedTasks} />
			<Search searchValue={searchValue} setSearchValue={setSearchValue} />
			<List tasks={searchedTasks} onComplete={completeTask} onDelete={deleteTask} />
			<AddTaskButton />
		</div>
	)
}

export default App
