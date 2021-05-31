import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const SeatsLegend = ({id, maxSeatsInRow, submitSeats}) => {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

		return (
			<Row align="middle" style={{marginTop: "50px"}}>
				<Col md={{span: 6}} xs={{span: 24}} className="legendElement">
					<div 
					id="test" 
					className="seat" 
					style={{width: `calc(${windowDimensions.width > 767 ? "400%" : "100%"} / ${maxSeatsInRow} - 10px)`}}></div> 
					<p>Miejsca dostępne</p>
				</Col>
				<Col lg={{span: 6}} md={{span: 8}} xs={{span: 24}} className="legendElement">
					<div 
					className="seat" 
					style={{width: `calc(${windowDimensions.width > 991 ? "400%" : windowDimensions.width > 767 ? "300%" : "100%"} / ${maxSeatsInRow} - 10px)`, background: "grey"}}></div> 
					<p id="test">Miejsca zarezerwowane</p>
				</Col>
				<Col md={{span: 6}} xs={{span: 24}} className="legendElement">
					<div 
					className="seat" 
					style={{width: `calc(${windowDimensions.width > 767 ? "400%" : "100%"} / ${maxSeatsInRow} - 10px)`, background: "orange"}}></div> 
					<p>Twój wybór</p>
				</Col>
				<Col style={{textAlign: `${windowDimensions.width > 767 ? "left" : "center"}`}} lg={{span: 6}} md={{span: 4}} xs={{span: 24}} className="legendElement">
					<Button 
					size="large" 
					style={{width: `calc(${windowDimensions.width > 767 ? "100% - 5px" : "50%"})`, height: "60px"}} 
					onClick={submitSeats}>Rezerwuj</Button>
				</Col>
			</Row>
		);
	}

export default SeatsLegend;