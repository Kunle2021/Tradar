import {
	Checkbox,
	FormControlLabel,
	TextField,
	Typography,
} from '@mui/material'
import React from 'react'

export default function Certify({ setFormData, formData }) {
	return (
		<>
			<Typography variant='h5' component='h1' mt={2}>
				<strong>More Info</strong>
			</Typography>
			<TextField
				sx={{ my: 1 }}
				fullWidth
				color='success'
				type='text'
				placeholder='Experience...'
				value={formData.experience}
				onChange={e => {
					setFormData({ ...formData, experience: e.target.value })
				}}
			/>
			<TextField
				sx={{ my: 1 }}
				fullWidth
				color='success'
				type='text'
				placeholder='Location...'
				value={formData.location}
				onChange={e => {
					setFormData({ ...formData, location: e.target.value })
				}}
			/>
			<TextField
				sx={{ my: 1 }}
				fullWidth
				color='success'
				type='text'
				placeholder='CertificateId...'
				value={formData.certificateId}
				onChange={e => {
					setFormData({ ...formData, certificateId: e.target.value })
				}}
			/>
			<FormControlLabel
				value={formData.policy}
				onChange={e => {
					setFormData({ ...formData, policy: e.target.value })
					console.log(e.target.value)
				}}
				control={<Checkbox defaultChecked />}
				label='Terms and Conditions'
			/>

			{/* Need to add the policy input */}
		</>
	)
}
