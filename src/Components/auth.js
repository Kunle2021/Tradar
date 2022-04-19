import React, { useState } from 'react'
import Signin from './Form/SignIn'
import SignUpForm from './Form/SignUpForm'
import './Form/Login.css'

// auth.js

const Auth = () => {
	const [index, setIndex] = useState(false)
	const toggleIndex = () => {
		setIndex(prevState => !prevState)
	}
	return (
		<div className='container'>
			{!index ? <Signin /> : <SignUpForm />}
			<p onClick={toggleIndex}>
				{!index ? 'New user? Click here ' : 'Already have an acount?'}
			</p>
		</div>
	)
}

export default Auth

// {!index ? <Signin /> : <MultiStepForm />}
//       {/* <MultiStepForm/> */}
//       <p onClick={toggleIndex}>
//         {!index ? "New user? Click here " : "Already have an acount?"}
//       </p>thrr
