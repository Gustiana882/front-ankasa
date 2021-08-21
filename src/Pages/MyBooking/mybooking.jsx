import "./mybooking.scoped.css"
import { Card, Col, Container, Dropdown, Row} from "react-bootstrap"
import React, { useState } from 'react'
// import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import Footer from '../../Components/Footer/Footer'
import NavbarHeader from '../../Components/Navbar/NavbarHeader'
// import ContactDetail from '../../Components/Flight_Detail/Contact_Detail';
// import PassengerDetail from '../../Components/Flight_Detail/Passenger_Details';
import Profile from '../../Components/Sidenav/sidenav'

function Flight(props) {

    return (
        <div>
            <div>
				<NavbarHeader />
			</div>
            <div>
                <Profile />
			</div>
            <div>
            <Container fluid>
            <Col sm={9}>
            <Card className="card">
                <Card.Text className="text-up"><span>MY BOOKING </span></Card.Text>
                    <Row>
                        <Col sm={6}>
                                <Card.Text className="text-row1"><span><b>My Booking </b></span></Card.Text>
                        </Col>
                         <Col sm={6}>
                                <Card.Text className="text-row2"><span>Order History </span></Card.Text>
                        </Col>
                        </Row>
                </Card>
            </Col>

            <Col sm={9}>
            <Card className="card">
                <Card.Text><span>Monday, 20 July '20' - 12:33</span></Card.Text>
                <Card.Text className="text-row1"><span><b>FROM   
                    <img src="https://res.cloudinary.com/rizkazn/image/upload/v1629481935/Vector_opjk1b.jpg" 
                        style={{
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            }}
                            alt="">
                    </img> 
                    TO</b></span></Card.Text>
                <Card.Text className=""><span>MASKAPAI, KODE MASKAPAI </span></Card.Text>
                    <hr />
                    <br />
                    <Row>
                        <Col sm={3}>
                            <Card.Text><span><b>Status</b></span></Card.Text>
                        </Col>
                        <Col sm={3}>
                            <span className="status">Waiting for payment</span>
                        </Col>
                         <Col sm={6}>
                         <Dropdown >
                            <Dropdown.Toggle 
                            style={{
                                float: "right",
                                borderStyle: 'none',
                                outline: 'none',
                                background: 'none',
                                color: '#2395FF'
                            }}>View Details</Dropdown.Toggle>
                         </Dropdown>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Container>
			</div>
            <div className="footer">
				<Footer />
			</div>
        </div>
        
    )
}

export default Flight