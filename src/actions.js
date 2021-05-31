import { 
	REQUEST_SEATS_PENDING,
	REQUEST_SEATS_SUCCESS,
	RESERVED_SEATS
	} from './constants.js'

export const submitAmount = (data, type) => {
	return {
		type: type,
		payload: data
	}
}

export const selectSeat = (data, type) => {
		return {
			type: type,
			payload: data
		}
}

export const requestSeats = (dispatch, payload) => {
	if(payload === undefined) {
		dispatch({ type: REQUEST_SEATS_PENDING});
		fetch('db.json')
			.then(response => response.json())
			.then(data => dispatch({ type: REQUEST_SEATS_SUCCESS, payload: data}))
	} else {
		return {
			type: RESERVED_SEATS,
			payload: payload
		}
	}
}