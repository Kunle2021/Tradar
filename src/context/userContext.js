import { createContext, useContext, useState } from 'react'
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	updateProfile,
	sendPasswordResetEmail,
} from 'firebase/auth'

import { auth, createUserDocument } from '../Components/firebase/index'

export const UserContext = createContext({})

export const useUserContext = () => {
	return useContext(UserContext)
}

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	useState(() => {
		setLoading(true)
		const unsubscribe = onAuthStateChanged(auth, res => {
			if (res) {
				setUser(res)
			} else {
				setUser(null)
			}
			setError('')
			setLoading(false)
		})
		return unsubscribe
	}, [])

	const registerUser = (
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
	) => {
		setLoading(true)
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				updateProfile(auth.currentUser, {
					displayName: firstName,
				})
				return user
			})
			.then(user =>
				createUserDocument(user, {
					firstName,
					lastName,
					company,
					experience,
					location,
					contact,
					certificateId,
					policy,
				})
			)
			.then(res => console.log(res))
			.catch(err => setError(err.message))
			.finally(() => setLoading(false))
	}

	const signInUser = (email, password) => {
		setLoading(true)
		signInWithEmailAndPassword(auth, email, password)
			.then(res => console.log(res))
			.catch(err => setError(err.code))
			.finally(() => setLoading(false))
	}

	const logoutUser = () => {
		signOut(auth)
	}

	const forgotPassword = email => {
		return sendPasswordResetEmail(auth, email)
	}

	const contextValue = {
		user,
		loading,
		error,
		signInUser,
		registerUser,
		logoutUser,
		forgotPassword,
	}
	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	)
}
