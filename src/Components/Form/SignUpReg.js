import { Container, TextField, Typography } from '@mui/material'
import React, { useRef } from 'react'

const SignUpReg = ({ formData, setFormData }) => {
	const emailRef = useRef()
	const nameRef = useRef()
	const psdRef = useRef()

	// const onSubmit = (e) => {
	//   e.preventDefault();
	//   // const email = emailRef.current.value;
	//   // const name = nameRef.current.value;
	//   // const password = psdRef.current.value;
	//   // if (email && password && name) registerUser(email, password, name);
	// };

	return (
		<>
			<>
				<Typography variant='h5' component='h1' mt={2}>
					<strong>New User</strong>
				</Typography>
				<form>
					<TextField
						fullWidth
						color='success'
						placeholder='Email'
						sx={{ mt: 2 }}
						type='email'
						ref={emailRef}
						value={formData.email}
						onChange={e => {
							setFormData({ ...formData, email: e.target.value })
						}}
					/>
					<TextField
						fullWidth
						color='success'
						placeholder='Password'
						sx={{ my: 1 }}
						type='password'
						ref={nameRef}
						value={formData.password}
						onChange={e => {
							setFormData({ ...formData, password: e.target.value })
						}}
					/>
					<TextField
						fullWidth
						color='success'
						placeholder='ConfirmPassword'
						sx={{ my: 1 }}
						type='password'
						ref={psdRef}
						value={formData.confirmPassword}
						onChange={e => {
							setFormData({ ...formData, confirmPassword: e.target.value })
						}}
					/>
					{/* <button type="submit">Register</button> */}
				</form>
			</>
		</>
	)
}

export default SignUpReg
