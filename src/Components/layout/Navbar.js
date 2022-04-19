import React from 'react'
import { Avatar, Stack, Badge, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import { Link, useLocation } from 'react-router-dom'

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		backgroundColor: '#44b700',
		color: '#44b700',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: 'ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}))

const Navbar = () => {
	const location = useLocation()

	const isLoggedIn = location.pathname !== '/login'
	return (
		<>
			<Container>
				<Stack
					mt={2}
					direction='row'
					justifyContent='flex-end'
					alignItems='center'
					spacing={3}>
					<Link to='/login' style={{ marginRight: 'auto' }}>
						<Avatar src='https://firebasestorage.googleapis.com/v0/b/tradar-f2246.appspot.com/o/tradely_logo.png?alt=media&token=22b3a988-6069-4750-aaec-cd625fefc97a' />
					</Link>

					{isLoggedIn && (
						<>
							<SearchIcon />
							<NotificationsIcon />
							<StyledBadge
								overlap='circular'
								anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
								variant='dot'>
								<Avatar alt='J Sharp' src='/static/images/avatar/1.jpg' />
							</StyledBadge>
						</>
					)}
				</Stack>
			</Container>
		</>
	)
}

export default Navbar
