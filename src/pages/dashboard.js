import {
	Button,
	CircularProgress,
	Container,
	Grid,
	Stack,
	Typography,
} from '@mui/material'
import React, { useEffect } from 'react'
import JobItem from '../Components/dashboard/JobItem'
import { useUserContext } from '../context/userContext'
import { useJobsContext } from '../context/jobsContext'

const Dashboard = () => {
	const { user, logoutUser } = useUserContext()
	const { loading, jobs, getNearbyJobs } = useJobsContext()

	useEffect(() => {
		getNearbyJobs()
	}, [user])

	return (
		<>
			<Container>
				<Typography variant='h5' component='h1' my={2}>
					<strong>For You</strong>
				</Typography>

				{!jobs ? (
					<Stack
						justifyContent='center'
						sx={{ mt: 26 }}
						direction='row'
						spacing={2}>
						<CircularProgress color='success' />
					</Stack>
				) : (
					<>
						<Grid container spacing={3}>
							{jobs.map(job => (
								<Grid key={job.id} item xs={12} sm={6} md={3}>
									<JobItem job={job} />
								</Grid>
							))}
						</Grid>

						<Typography variant='h5' component='h1' my={2}>
							<strong>Further Away</strong>
						</Typography>

						<Grid container spacing={3}>
							{jobs.map(job => (
								<Grid key={job.id} item xs={12} sm={6} md={3}>
									<JobItem job={job} />
								</Grid>
							))}
						</Grid>
						<Button onClick={logoutUser}>Log out</Button>
					</>
				)}
			</Container>
		</>
	)
}

export default Dashboard
