import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

const JobItem = ({ job, dashboard = true }) => {
	const navigate = useNavigate()

	return (
		<Card sx={{ borderRadius: 4 }}>
			<CardMedia component='img' height='140' image={job.img} />
			<CardContent>
				<Typography gutterBottom variant='h6' component='div'>
					<strong>{job.title}</strong>
				</Typography>
				<Typography variant='body2'>{job.description}</Typography>
				<Typography variant='body2' color='text.secondary'>
					{job.location}
				</Typography>
			</CardContent>
			{dashboard && (
				<CardActions>
					<Button disableElevation color='success' variant='text' size='small'>
						More Details
					</Button>

					<Button
						sx={{ borderRadius: 6 }}
						onClick={() => navigate('/quote', { state: { job } })}
						disableElevation
						color='success'
						variant='contained'
						size='small'>
						Quote
					</Button>
				</CardActions>
			)}
		</Card>
	)
}

JobItem.propTypes = {
	job: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		id: PropTypes.number,
		img: PropTypes.string.isRequired,
	}),
}

export default JobItem
