import { createContext, useContext, useState } from 'react'

import axios from 'axios'

export const QuotesContext = createContext({})

export const useQuotesContext = () => {
	return useContext(QuotesContext)
}

export const QuotesContextProvider = ({ children }) => {
	const [quotes, setQuotes] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const createQuote = values => {
		setLoading(true)
		axios
			.post(
				'https://us-central1-tradar-f2246.cloudfunctions.net/app/api/quotes',
				values
			)
			.then(res => setQuotes(res.data))
		console.log('sent')
		setLoading(false)
	}

	const contextValue = {
		quotes,
		loading,
		error,
		createQuote,
	}

	return (
		<QuotesContext.Provider value={contextValue}>
			{children}
		</QuotesContext.Provider>
	)
}
