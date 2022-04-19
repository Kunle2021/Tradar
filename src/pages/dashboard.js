import { CircularProgress, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import JobItem from '../components/dashboard/JobItem'
import { useUserContext } from '../context/userContext'
import { useJobsContext } from '../context/jobsContext'

const Dashboard = () => {
	const { user, logoutUser } = useUserContext()
	const { loading, jobs, getNearbyJobs } = useJobsContext()
	console.log(jobs)

	useEffect(() => {
		getNearbyJobs()
	}, [user])

	return (
		<>
			<Container>
				<Typography variant='h5' component='h1' my={2}>
					<strong>For You</strong>
				</Typography>

				<Grid container spacing={3}>
					{loading ? (
						<CircularProgress />
					) : (
						jobs.map(job => (
							<Grid key={job.id} item xs={12} sm={6} md={3}>
								<JobItem job={job} />
							</Grid>
						))
					)}
				</Grid>

				<Typography variant='h5' component='h1' my={2}>
					<strong>Further Away</strong>
				</Typography>

				<Grid container spacing={3}>
					{loading ? (
						<CircularProgress />
					) : (
						jobs.map(job => (
							<Grid key={job.id} item xs={12} sm={6} md={3}>
								<JobItem job={job} />
							</Grid>
						))
					)}
				</Grid>
				<button onClick={logoutUser}>Log out</button>
			</Container>
		</>
	)
}

export default Dashboard
