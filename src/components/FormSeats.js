import React, { Component } from 'react';
import Seat from './Seat';
import SeatsLegend from './SeatsLegend';
import { Row, Alert } from 'antd';

class FormSeats extends Component {

	componentDidMount() {
		const freeSeats = this.props.seats.filter((seat) => { return seat.reserved === false})
		let selectedSeat = [];

		if (this.props.nextTo){
			let row = 0;
			let arr = [];

			selectedSeat = freeSeats.map((seat, i)=>{

				if (arr.length === this.props.peopleAmount){
							return arr;
						} 
				else {
					if (arr.length === 0 | freeSeats[i].cords.x === row ){
						row = freeSeats[i].cords.x;
						if (arr.length > 0){
							if (arr[arr.length-1].cords.y === freeSeats[i].cords.y-1) {
								arr.push(freeSeats[i]);
							}
							else {
									arr = []; 
									arr.push(freeSeats[i]);
								}
						} 
						else {
								arr.push(freeSeats[i]);
						}
					} 
					else{
						arr = [];
						arr.push(freeSeats[i]);
						row = freeSeats[i].cords.x;
					}
					return undefined; 
				}
			});
			selectedSeat = selectedSeat.filter((seat) => { return seat !== undefined})

			if(selectedSeat.length > 0) selectedSeat = selectedSeat[0];
			} 
			else {
				if (freeSeats.length >= this.props.peopleAmount) {
					selectedSeat = freeSeats.slice(0, this.props.peopleAmount);
				}
			
			}

		selectedSeat = selectedSeat.map((seat, i) => {return selectedSeat[i].id});
		this.props.autoSelect(selectedSeat)
	}
render() {
	const { seats, selected, select, unselect, peopleAmount, nextTo } = this.props
	const xArr = seats.map(({ cords }) => cords.x)
	const yArr = seats.map(({ cords }) => cords.y)
	const maxRows = Math.max.apply(null, xArr)+1;
	const maxSeatsInRow = Math.max.apply(null, yArr)+1
	let error = "";
	
	if(peopleAmount > 0 & selected.length === 0 & nextTo === true) {
		error = "Niestety nie mamy tylu wolnych miejsc obok siebie. Może interesują cię inne?";
	} 
	else if(peopleAmount > 0 & selected.length === 0 & nextTo === false) {
		error = "Niestety nie mamy tylu wolnych miejsc!";
	}

	const errorAlert = <div style={{position: "absolute", top: "0", left: "50%"}}>
			<Alert
      	style={{position: "relative", left: "-50%"}}
      	message={error}
      	type="warning"
      	closable
    	/>
    </div>;

	const seatsArray = seats.map((seat, i) => {
		// if (true) {
		// 	throw new Error('Błąd!');
		// }
		return (
			<Seat 
			key={i} 
			id={seats[i].id}
			maxSeatsInRow={maxSeatsInRow}
			cords={seats[i].cords}
			reserved={seats[i].reserved}
			selected={selected}
			select={select}
			unselect={unselect}
			/>
		);
	})
	var k = 0;
	for (var i = 0; i < maxRows; i++){
		for (var j = 0; j < maxSeatsInRow; j++){
			if(seatsArray[k] !== undefined){
				if (i === seatsArray[k].props.cords.x && j === seatsArray[k].props.cords.y) {
					k++;
				} else {
					seatsArray.splice(k, 0, <div key={`e${k}`} className="empty" style={{width: `calc(100% / ${maxSeatsInRow} - 10px)`}}><p></p></div>)
					k++;
				}
			}
		}
	}

	return (
		<>
		<Row style={{marginTop: '20px'}}>
				{error.length > 0 ? errorAlert : ''}
				{seatsArray}
		</Row>
		<SeatsLegend maxSeatsInRow={maxSeatsInRow} submitSeats={this.props.submitSeats} />
		</>
		);
}
}

export default FormSeats;