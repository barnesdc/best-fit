import * as api from '../api'

/** Action Creator
 * - These are functions that return actions
 * - Actions are objects that have a type and payload
 * - Because we are working with asynchronous data, we
 * - have to use redux-thunk. This allows for a function
 * - to return a function. Use dispatch for return
 * - Fig1 without redux-thunk, haveto follow Fig2
 * 
Fig1.
const getApplications = () => {
    const action =  { type: 'FETCH_ALL', payload: []} // 
    return action
}
Fig2.
const getApplications = () => async (dispatch) => {
    const action =  { type: 'FETCH_ALL', payload: []} // 
    dispatch(action) 
}
 */

export const getApplications = () => async (dispatch) => {
	try {
		const { data } = await api.fetchApplications()
		dispatch({ type: 'FETCH_ALL', payload: data })
	} catch (error) {
		
		console.log(error.action)
	}
}

export const createApplication = (application) => async (dispatch) => {
	try {
		const { data } = await api.createApplication(application)

		dispatch({ type: 'CREATE', payload: data })
	} catch (error) {
		console.log(error.action)
	}
}
