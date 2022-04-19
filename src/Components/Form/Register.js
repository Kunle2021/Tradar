import { FormControl, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Register({ setFormData, formData }) {
	return (
		<>
			<Typography variant='h5' component='h1' mt={2}>
				<strong>More Info</strong>
			</Typography>
			<FormControl fullWidth variant='standard'>
				<TextField
					sx={{ my: 1 }}
					fullWidth
					color='success'
					placeholder='First Name...'
					value={formData.firstName}
					onChange={e => {
						setFormData({ ...formData, firstName: e.target.value })
					}}
				/>
				<TextField
					sx={{ my: 1 }}
					fullWidth
					color='success'
					placeholder='Last Name...'
					value={formData.lastName}
					onChange={e => {
						setFormData({ ...formData, lastName: e.target.value })
					}}
				/>
				<TextField
					sx={{ my: 1 }}
					fullWidth
					color='success'
					placeholder='Company...'
					value={formData.company}
					onChange={e => {
						setFormData({ ...formData, company: e.target.value })
					}}
				/>
				<TextField
					sx={{ my: 1 }}
					fullWidth
					color='success'
					placeholder='Contact...'
					value={formData.contact}
					onChange={e => {
						setFormData({ ...formData, contact: e.target.value })
					}}
				/>
			</FormControl>
		</>
	)
}
