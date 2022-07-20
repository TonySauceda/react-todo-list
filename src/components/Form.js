import React from 'react'
import { TaskContext } from './TaskContext'
import './Form.css'

function Form() {
	const [newTaskValue, setNewTaskValue] = React.useState('')
	const [disableSaveButton, setDisableSaveButton] = React.useState(true)
	const [showErrorMessage, setShowErrorMessage] = React.useState(false)
	const { addTask, setOpenModal, isValidTask } = React.useContext(TaskContext)
	const onCancel = () => {
		setOpenModal(false)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		addTask(newTaskValue.trim())
		setOpenModal(false)
	}

	const onTextChange = (event) => {
		const newValue = event.target.value
		setNewTaskValue(newValue)

		if (newValue === '') {
			setDisableSaveButton(true)
			setShowErrorMessage(false)
		} else {
			const isValid = isValidTask(newValue.trim())
			setDisableSaveButton(!isValid)
			setShowErrorMessage(!isValid)
		}
	}

	return (
		<form onSubmit={onSubmit}>
			<label>Add new task</label>
			<textarea placeholder="Task name" onChange={onTextChange} value={newTaskValue}></textarea>
			{showErrorMessage && <label className="error">Task already exists</label>}
			<div className="form-buttonContainer">
				<button className="form-button form-button--cancel" type="button" onClick={onCancel}>
					Cancel
				</button>
				<button className="form-button form-button--add" type="submit" disabled={disableSaveButton}>
					Save
				</button>
			</div>
		</form>
	)
}

export { Form }
