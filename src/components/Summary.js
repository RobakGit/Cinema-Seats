import React, { Component } from 'react';

class FormSeats extends Component {

	componentDidMount() {		
		}

render() {
	const selected = this.props.selected;
	let seats = this.props.seats;
	let selectedIndex = [];

	const selectedSeat = seats.filter(function(seat) {
      return this.indexOf(seat.id) >= 0;
    },
    selected)

	const selectedArray = selectedSeat.map((select, i) => {

	selectedIndex.push(seats.findIndex(seat => seat.id === selected[i]));
	
		return (
			<p key={`p${i}`}>- rząd {selectedSeat[i].cords.x}, miejsce {selectedSeat[i].cords.y} ({selectedSeat[i].id})</p>
		);
	})

	seats = selectedIndex.map((index) => {
		return seats[index].reserved = true;
	})
	this.props.reservedSeats(seats);
	
	return (
		<section id="summary">
			<h1>Twoja rezerwacja przebiegła pomyślnie!</h1>
			<p>Wybrałeś miejsca:</p>
			{selectedArray}
			<h3>Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.</h3>
		</section>
		);
}
}

export default FormSeats;