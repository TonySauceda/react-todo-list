import React from 'react'

function useLocalStorage(localStorageKey, initialValue) {
	const localStorageItem = localStorage.getItem(localStorageKey)
	let parsedItems

	if (!localStorageItem) {
		localStorage.setItem(localStorageKey, JSON.stringify(initialValue))
		parsedItems = initialValue
	} else {
		parsedItems = JSON.parse(localStorageItem)
	}

	const [item, setItem] = React.useState(parsedItems)

	const saveLocalStorage = (newItem) => {
		const stringItem = JSON.stringify(newItem)
		localStorage.setItem(localStorageKey, stringItem)
		setItem(newItem)
	}

	return [item, saveLocalStorage]
}

export { useLocalStorage }
