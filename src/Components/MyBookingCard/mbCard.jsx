import React from 'react';
import { Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import './mbCard.scoped.css';

const MbCard = (props) => {
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

				{props.data.map((value, id) => {
					return (
						<Col>
							<Card className="card">
								<Card.Text>
									<span>
										Monday, 20 July '20' - {value.schedule.times.berangkat}
									</span>
								</Card.Text>
								<Card.Text className="text-row1">
									<span>
										<b>
											{value.schedule.tujuanAwal.kota}
											<img
												src="https://res.cloudinary.com/rizkazn/image/upload/v1629481935/Vector_opjk1b.jpg"
												style={{
													paddingLeft: '20px',
													paddingRight: '20px',
												}}
												alt=""
											/>
											{value.schedule.tujuanAkhir.kota}
										</b>
									</span>
								</Card.Text>
								<Card.Text className="">
									<span>
										{value.schedule.Maskapai.nameMaskapai},{' '}
										{value.schedule.code}{' '}
									</span>
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
					);
				})}
			</Container>
		</div>
	);
};

export default MbCard;
