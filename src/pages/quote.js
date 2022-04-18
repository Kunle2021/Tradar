import {
	Button,
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	Input,
	InputAdornment,
	InputLabel,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useQuotesContext } from '../context/quotesContext'
import JobItem from '../components/dashboard/JobItem'

const Quote = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { createQuote } = useQuotesContext()

	const [{ job }, setJob] = useState(location.state)
	const [values, setValues] = useState({
		labourCost: '',
		materialsCost: '',
		materialsNeeded: null,
		message: '',
	})

	const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value })
	}

	const handleSubmit = () => {
		createQuote(values)
		navigate('/success', { state: { values, job } })
	}

	return (
		<>
			<Container>
				<Typography variant='h5' component='h1' my={2}>
					<strong>Submit a Quote</strong>
				</Typography>
				<JobItem job={job} dashboard={false} />

				<Typography variant='h6' component='h1' mt={2}>
					Details
				</Typography>

				<FormControl fullWidth variant='standard'>
					<TextField
						fullWidth
						color='success'
						label='Message'
						id='fullWidth'
						margin='normal'
						onChange={handleChange('message')}
						value={values.message}
					/>
				</FormControl>

				<FormControl sx={{ my: 1 }} variant='standard'>
					<InputLabel color='success' htmlFor='standard-adornment-labourCost'>
						Labour Cost
					</InputLabel>
					<Input
						id='standard-adornment-labourCost'
						value={values.labourCost}
						onChange={handleChange('labourCost')}
						color='success'
						startAdornment={<InputAdornment position='start'>£</InputAdornment>}
					/>
				</FormControl>

				<FormControl fullWidth sx={{ my: 1 }}>
					<FormLabel color='success' id='demo-controlled-radio-buttons-group'>
						Materials needed?
					</FormLabel>
					<RadioGroup
						aria-labelledby='demo-controlled-radio-buttons-group'
						name='controlled-radio-buttons-group'
						value={values.materialsNeeded}
						onChange={handleChange('materialsNeeded')}>
						<FormControlLabel
							value='no'
							control={<Radio color='success' />}
							label='No'
						/>
						<FormControlLabel
							value='yes'
							control={<Radio color='success' />}
							label='Yes'
						/>
					</RadioGroup>
				</FormControl>

				<FormControl variant='standard'>
					<InputLabel
						color='success'
						htmlFor='standard-adornment-materialsCost'>
						Materials Cost
					</InputLabel>
					<Input
						id='standard-adornment-materialsCost'
						value={values.materialsCost}
						onChange={handleChange('materialsCost')}
						color='success'
						startAdornment={<InputAdornment position='start'>£</InputAdornment>}
					/>
				</FormControl>

				<Button
					onClick={() => handleSubmit()}
					color='success'
					variant='outlined'
					sx={{ my: 2 }}>
					Submit
				</Button>
			</Container>
		</>
	)
}

export default Quote
