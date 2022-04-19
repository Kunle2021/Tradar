import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Container } from '@mui/material'

import Navbar from './Components/layout/Navbar'
import Auth from './Components/auth'

import Dashboard from './pages/dashboard'
import Quote from './pages/quote'
import Success from './pages/success'

const App = () => {
	return useRoutes([
		{ path: '/' },
		{ path: 'dashboard', element: <Dashboard /> },
		{ path: 'quote', element: <Quote /> },
		{ path: 'success', element: <Success /> },
		{ path: 'login', element: <Auth /> },
	])
}

const AppWrapper = () => {
	return (
		<BrowserRouter>
			<Container maxWidth='sm'>
				<Navbar />
				<App />
			</Container>
		</BrowserRouter>
	)
}

export default AppWrapper
