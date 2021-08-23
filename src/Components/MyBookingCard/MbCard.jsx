import React from 'react';
import { Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import './mbCard.scoped.css';
import { useState } from 'react';

const MbCard = () => {
	return (
		<div>
			<Container fluid>
				<Col>
					<Card className="card">
						<Card.Text className="text-up">
							<span>MY BOOKING </span>
						</Card.Text>
						<Row>
							<Col sm={6}>
								<Card.Text className="text-row1">
									<span>
										<b>My Booking </b>
									</span>
								</Card.Text>
							</Col>
							<Col sm={6}>
								<Card.Text className="text-row2">
									<span>Order History </span>
								</Card.Text>
							</Col>
						</Row>
					</Card>
				</Col>

				<Col>
					<Card className="card">
						<Card.Text>
							<span>Monday, 20 July '20' - 12:33</span>
						</Card.Text>
						<Card.Text className="text-row1">
							<span>
								<b>
									FROM
									<img
										src="https://res.cloudinary.com/rizkazn/image/upload/v1629481935/Vector_opjk1b.jpg"
										style={{
											paddingLeft: '20px',
											paddingRight: '20px',
										}}
										alt=""
									/>
									TO
								</b>
							</span>
						</Card.Text>
						<Card.Text className="">
							<span>MASKAPAI, KODE MASKAPAI </span>
						</Card.Text>
						<hr />
						<br />
						<Row>
							<Col sm={3}>
								<Card.Text>
									<span>
										<b>Status</b>
									</span>
								</Card.Text>
							</Col>
							<Col sm={5}>
								<span className="status">Waiting for payment</span>
							</Col>
							<Col sm={4}>
								<Dropdown>
									<Dropdown.Toggle
										style={{
											float: 'right',
											borderStyle: 'none',
											outline: 'none',
											background: 'none',
											color: '#2395FF',
										}}
									>
										View Details
									</Dropdown.Toggle>
								</Dropdown>
							</Col>
						</Row>
					</Card>
				</Col>
			</Container>
		</div>
	);
};

export default MbCard;
