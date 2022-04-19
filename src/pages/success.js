import { Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import JobItem from '../Components/dashboard/JobItem'

const Success = () => {
	const location = useLocation()
	const [{ job, values }] = useState(location.state)

	return (
		<>
			<Container>
				<Typography variant='h4' component='h1' mt={8}>
					<strong>Success!</strong>
				</Typography>
				<Typography variant='h6' component='h2' my={2}>
					Quote submitted.
				</Typography>
				<JobItem job={job} dashboard={false} />

				<Typography variant='h6' component='h1' mt={2}>
					Details
				</Typography>

				<Typography variant='p1'>{values.message}</Typography>
				<br />
				<Typography variant='p2'>Labour Cost: {values.labourCost}</Typography>
				<br />
				<Typography variant='p1'>
					Materials needed: {values.materialsNeeded}
				</Typography>
				<br />
				{values.materialsNeeded && (
					<Typography variant='p1'>
						Materials Cost: {values.materialsCost}
					</Typography>
				)}

				<Button color='success' variant='outlined' sx={{ my: 2 }}>
					Return to For You page
				</Button>
			</Container>
		</>
	)
}

export default Success
