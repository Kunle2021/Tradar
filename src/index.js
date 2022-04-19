import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { UserContextProvider } from './context/userContext'
import { JobsContextProvider } from './context/jobsContext'
import { QuotesContextProvider } from './context/quotesContext'

ReactDOM.render(
	<React.StrictMode>
		<UserContextProvider>
			<JobsContextProvider>
				<QuotesContextProvider>
					<App />
				</QuotesContextProvider>
			</JobsContextProvider>
		</UserContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
