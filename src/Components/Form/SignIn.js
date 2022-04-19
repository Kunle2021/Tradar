import { Button, TextField, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/userContext'

const Signin = () => {
	const navigate = useNavigate()
	const emailRef = useRef()
	const psdRef = useRef()
	const { signInUser, forgotPassword } = useUserContext()

	const onSubmit = e => {
		e.preventDefault()
		const email = emailRef.current.value
		const password = psdRef.current.value
		if (email && password) signInUser(email, password)
		navigate('/dashboard')
	}

	const forgotPasswordHandler = () => {
		const email = emailRef.current.value
		if (email)
			forgotPassword(email).then(() => {
				emailRef.current.value = ''
			})
	}

	return (
		<div>
			<Typography variant='h5' component='h1' my={2}>
				<strong>Login</strong>
			</Typography>
			<form onSubmit={onSubmit}>
				<TextField fullWidth placeholder='Email' type='email' ref={emailRef} />
				<TextField
					sx={{ my: 2 }}
					fullWidth
					placeholder='Password'
					type='password'
					ref={psdRef}
				/>
				<Button sx={{ my: 1 }} variant='outlined' color='success' type='submit'>
					Sign In
				</Button>

				<Typography
					sx={{ textAlign: 'center', my: 2 }}
					onClick={forgotPasswordHandler}>
					Forgot Password?
				</Typography>
			</form>
		</div>
	)
}

export default Signin
