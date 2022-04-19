import { createContext, useContext, useState } from 'react'

import axios from 'axios'

export const QuotesContext = createContext({})

export const useQuotesContext = () => {
	return useContext(QuotesContext)
}

export const QuotesContextProvider = ({ children }) => {
	const [quotes, setQuotes] = useState([
		{
			jobId: 1,
			title: 'Leaky sink',
			cost: 50,
			date: '15/4/2022',
		},
	])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const createQuote = values => {
		setLoading(true)
		// axios.post('', values)
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
