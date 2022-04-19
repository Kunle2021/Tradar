import React, { useState } from 'react'
import Signin from './Form/SignIn'
import SignUpForm from './Form/SignUpForm'
import './Form/Login.css'
import { Container, Typography } from '@mui/material'

// auth.js

const Auth = () => {
	const [index, setIndex] = useState(false)
	const toggleIndex = () => {
		setIndex(prevState => !prevState)
	}
	return (
		<Container>
			{!index ? <Signin /> : <SignUpForm />}
			<div onClick={toggleIndex}>
				{!index ? (
					<Typography sx={{ textAlign: 'center', my: 2 }}>New User?</Typography>
				) : (
					<Typography sx={{ textAlign: 'center', my: 2 }}>
						Already have an acount?
					</Typography>
				)}
			</div>
		</Container>
	)
}

export default Auth

// {!index ? <Signin /> : <MultiStepForm />}
//       {/* <MultiStepForm/> */}
//       <p onClick={toggleIndex}>
//         {!index ? "New user? Click here " : "Already have an acount?"}
//       </p>thrr
