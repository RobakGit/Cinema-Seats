import { 
	SUBMIT_AMOUNT,
	SUBMIT_SEATS,
	SELECT_SEAT,
	UNSELECT_SEAT,
	AUTO_SELECT,
	REQUEST_SEATS_PENDING,
	REQUEST_SEATS_SUCCESS,
	RESERVED_SEATS
	} from './constants.js'

const initialStateReservation = {
	step: 0,
	peopleAmount: 0,
	nextTo: false
}

export const submitAmount = (state=initialStateReservation, action={}) => {
	switch(action.type) {
		case SUBMIT_AMOUNT:
			return Object.assign({}, state, { peopleAmount: action.payload.amount, nextTo: action.payload.checkbox, step: state.step+1 });
		case SUBMIT_SEATS:
			return Object.assign({}, state, { step: state.step+1 });
		default:
			return state;
	}
}

const initialStateSelected = {
	selected: [],
}

export const selectSeat = (state=initialStateSelected, action={}) => {
	switch(action.type) {
		case SELECT_SEAT:
			return Object.assign({}, state, { selected: state.selected.concat(action.payload) });
		case UNSELECT_SEAT:
			return Object.assign({}, state, { selected: state.selected.filter((element) => { return element !== action.payload}) });
		case AUTO_SELECT:
			return Object.assign({}, state, { selected: action.payload });
		default:
			return state;
	}
}

const initialStateSeats = {
		isPending: false,
		seats: []
}

export const requestSeats = (state=initialStateSeats, action={}) => {
	switch(action.type) {
		case REQUEST_SEATS_PENDING:
			return Object.assign({}, state, { isPending: true })
		case REQUEST_SEATS_SUCCESS:
			return Object.assign({}, state, { seats: action.payload.seats, isPending: false })
		case RESERVED_SEATS:
			return Object.assign({}, state, { seats: action.payload, isPending: false })
		default:
			return state;
	}
}