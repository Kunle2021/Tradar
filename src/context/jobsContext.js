import { createContext, useContext, useState } from 'react'
import axios from 'axios'

export const JobsContext = createContext({})

export const useJobsContext = () => {
	return useContext(JobsContext)
}

export const JobsContextProvider = ({ children }) => {
	const [jobs, setJobs] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const getNearbyJobs = location => {
		setLoading(true)
		axios({
			method: 'get',
			url: 'https://us-central1-tradar-f2246.cloudfunctions.net/app/api/jobs',
		}).then(function (response) {
			setJobs(response.data)
		})
		setLoading(false)
	}

	const contextValue = {
		jobs,
		loading,
		error,
		getNearbyJobs,
	}
	return (
		<JobsContext.Provider value={contextValue}>{children}</JobsContext.Provider>
	)
}
