import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TaskContext = React.createContext()

function TaskProvider(props) {
	const [searchValue, setSearchValue] = React.useState('')
	const [openModal, setOpenModal] = React.useState(false)
	const { item: tasks, saveItem: setTasks, loading, error } = useLocalStorage('TODO_LIST_V1', [])
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
			newTasks[taskIndex].completed = !newTasks[taskIndex].completed
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

	const addTask = (text) => {
		const newTasks = [...tasks]
		newTasks.push({
			text,
			completed: false,
		})

		setTasks(newTasks)
	}

	const isValidTask = (text) => {
		const taskExists = tasks.filter((t) => t.text.toLowerCase() === text.toLowerCase())
		return taskExists.length === 0
	}

	return (
		<TaskContext.Provider
			value={{
				error,
				loading,
				totalTasks,
				completedTasks,
				searchValue,
				setSearchValue,
				searchedTasks,
				completeTask,
				deleteTask,
				openModal,
				setOpenModal,
				addTask,
				isValidTask,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	)
}

export { TaskContext, TaskProvider }
