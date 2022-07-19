import React from 'react'

function useLocalStorage(localStorageKey, initialValue) {
	const [item, setItem] = React.useState(initialValue)
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(false)

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(localStorageKey)
				let parsedItems

				if (!localStorageItem) {
					localStorage.setItem(localStorageKey, JSON.stringify(initialValue))
					parsedItems = initialValue
				} else {
					parsedItems = JSON.parse(localStorageItem)
				}
				setItem(parsedItems)
				setLoading(false)
			} catch (err) {
				setError(err)
			}
		}, Math.random() * 2000)
	})

	const saveItem = (newItem) => {
		try {
			const stringItem = JSON.stringify(newItem)
			localStorage.setItem(localStorageKey, stringItem)
			setItem(newItem)
		} catch (err) {
			setError(err)
		}
	}

	return { item, saveItem, loading, error }
}

export { useLocalStorage }
