import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormAmount from './FormAmount';
import FormSeats from './FormSeats';
import Summary from './Summary';

import { submitAmount, requestSeats, selectSeat } from '../actions';

const mapStateToProps = state => {
	return {
		seats: state.requestSeats.seats,
		isPending: state.requestSeats.isPending,
		step: state.submitAmount.step,
		selected: state.selectSeat.selected,
		peopleAmount: state.submitAmount.peopleAmount,
		nextTo: state.submitAmount.nextTo
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmitAmount: (event) => dispatch(submitAmount(event, 'SUBMIT_AMOUNT')),
		onSubmitSeats: (event) => dispatch(submitAmount(event, 'SUBMIT_SEATS')),
		onSelect: (event) => dispatch(selectSeat(event.target.id, 'SELECT_SEAT')),
		onUnSelect: (event) => dispatch(selectSeat(event.target.id, 'UNSELECT_SEAT')),
		onAutoSelect: (data) => dispatch(selectSeat(data, 'AUTO_SELECT')),
		onRequestSeats: (data) => requestSeats(dispatch, undefined),
		onReservedSeats: (data) => requestSeats(dispatch, data)
	}
}

class ReservationForm extends Component {

	componentDidMount() {
		this.props.onRequestSeats();
	}

	render() {
		const { seats, onSubmitAmount, step, selected, onSelect, onUnSelect, peopleAmount, nextTo, onAutoSelect, onSubmitSeats, onReservedSeats } = this.props;
		switch (step) {
			case 0:
				return (
					<FormAmount 
						submitAmount={onSubmitAmount}
					/>
					);
			case 1:
				return (
					<FormSeats 
						seats={seats}
						selected={selected}
						select={onSelect}
						unselect={onUnSelect}
						peopleAmount={peopleAmount}
						nextTo={nextTo}
						autoSelect={onAutoSelect}
						submitSeats={onSubmitSeats}
					/>
					);
				case 2:
				return (
					<Summary
						seats={seats}
						selected={selected}
						reservedSeats={onReservedSeats}
					/>
					);
			default:
				return (
					<FormAmount 
						submitAmount={onSubmitAmount}
					/>
					);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);