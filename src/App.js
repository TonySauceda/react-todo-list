import React from 'react'
import { Counter } from './components/Counter'
import { Search } from './components/Search'
import { List } from './components/List'
import { AddTaskButton } from './components/AddTaskButton'
import { TaskContext, TaskProvider } from './components/TaskContext'
import './App.css'

function App() {
	return (
		<TaskProvider>
			<div className="app">
				<TaskContext.Consumer>
					{({ error, loading, totalTasks }) => (
						<React.Fragment>
							{error && <p className="error">{error}</p>}
							{loading && <p className="loading">Loading...</p>}
							{!loading && totalTasks === 0 && <p className="loading">Add your first task</p>}
						</React.Fragment>
					)}
				</TaskContext.Consumer>
				<Counter />
				<Search />
				<List />
				<AddTaskButton />
			</div>
		</TaskProvider>
	)
}

export default App
