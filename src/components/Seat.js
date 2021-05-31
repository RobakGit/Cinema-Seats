import React from 'react';

const Seat = ({ id, maxSeatsInRow, reserved, selected, select, unselect }) => {
	return (
				<div 
				id={id} 
				onClick={reserved ? undefined : selected.includes(id) ? unselect : select} 
				className={`${reserved ? "reserved" : selected.includes(id) ? "selected" : "seat"}`} 
				style={{width: `calc(100% / ${maxSeatsInRow} - 10px)`}}>
					
				</div>
		);
}

export default Seat;