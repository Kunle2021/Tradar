import React, { useState } from 'react'
import SignUp from './SignUpReg'
import Certify from './Certify'
import Register from './Register'
import { useUserContext } from '../../context/userContext'
import { Button } from '@mui/material'

export default function SignUpForm() {
	const [page, setPage] = useState(0)

	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: '',
		company: '',
		experience: '', //dropdown in years
		location: '',
		contact: '',
		certificateId: '',
		policy: true,
	})

	const { registerUser } = useUserContext()

	async function makeRequest(formData) {
		const email = formData.email
		const password = formData.password
		const firstName = formData.firstName
		const lastName = formData.lastName
		const company = formData.company
		const experience = formData.experience
		const location = formData.location
		const contact = formData.contact
		const certificateId = formData.certificateId
		const policy = formData.policy

		try {
			await registerUser(
				email,
				password,
				firstName,
				lastName,
				company,
				experience,
				location,
				contact,
				certificateId,
				policy
			)
			console.log('Form Submitted')
		} catch (error) {
			alert('Error occured during Sign Up')
			console.log(error)
		}
	}

	const FormNames = ['Sign Up', 'Register', 'Certify']

	const PageDisplay = () => {
		if (page === 0) {
			return <SignUp formData={formData} setFormData={setFormData} />
		} else if (page === 1) {
			return <Register formData={formData} setFormData={setFormData} />
		} else {
			return <Certify formData={formData} setFormData={setFormData} />
		}
	}

	return (
		<div className='form'>
			<div className='form-container'>
				<div className='header'>{/* <h1>{FormNames[page]}</h1> */}</div>
				<div className='body'>{PageDisplay()}</div>
				<div className='footer'>
					<Button
						color='success'
						sx={{ my: 2 }}
						disabled={page === 0}
						onClick={() => {
							setPage(currPage => currPage - 1)
						}}>
						Previous
					</Button>
					<Button
						variant='contained'
						color='success'
						onClick={() => {
							if (page === FormNames.length - 1) {
								alert('FORM SUBMITTED')
								console.log(formData)
								makeRequest(formData)
							} else {
								setPage(currPage => currPage + 1)
							}
						}}>
						{page === FormNames.length - 1 ? 'Submit' : 'Next'}
					</Button>
				</div>
			</div>
		</div>
	)
}
