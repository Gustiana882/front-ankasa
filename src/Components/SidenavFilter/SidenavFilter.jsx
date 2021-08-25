import './SidenavFilter.scoped.css'
import { Accordion, Card, ListGroup, Form } from 'react-bootstrap'
import { useState } from "react"

const SidenavFilter = (props) => {

    const [filter, setFilter]= useState({
        transit: [],
        facilities: [],
        departure: [],
        arrived: [],
        airlines: [],
    })

    // const handelChange = (e) => {
    //     const name = e.target.name 
    //     const value = e.target.value
    //     const data = filter[name]
    //     data.push(value)
    //     setFilter({...filter, ...{ [name]: data }})
    // }
    const handelChange = (e) => {
        const name = e.target.name 
        const value = e.target.value
        setFilter({...filter, ...{ [name]: value }})
    }
    // props.change(filter)

    const filterTransit = (e) => {
		const result = props.dataTicketFilter.filter((ticket) => String(ticket.times.transit).toLocaleLowerCase() === String(e.target.value).toLocaleLowerCase())
		props.change(result)
	}

	const filterDeparture = (e) => {
        const time = String(e.target.value).split('-')
		const result = props.dataTicketFilter.filter((ticket) => {
            return Number(ticket.times.berangkat.split(':')[0]) > Number(time[0]) && Number(ticket.times.berangkat.split(':')[0]) <= Number(time[1])
        })
		props.change(result)
	}

	const filterArrived = (e) => {
		const time = String(e.target.value).split('-')
		const result = props.dataTicketFilter.filter((ticket) => {
            return Number(ticket.times.tiba.split(':')[0]) > Number(time[0]) && Number(ticket.times.tiba.split(':')[0]) <= Number(time[1])
        })
		props.change(result)
	}

	const filterAirlines = (e) => {
		const result = props.dataTicketFilter.filter((ticket) => String(ticket.Maskapai.nameMaskapai).toLocaleLowerCase() === String(e.target.value).toLocaleLowerCase())
		props.change(result)
	}

    const filterPrice = (e) => {
        console.log(e.target.value)
		const result = props.dataTicketFilter.filter((ticket) =>  Number(ticket.price.dewasa) >= Number(145) && Number(ticket.price.dewasa) <= Number(e.target.value))
		props.change(result)
	}

    return (
        <>
            <div className="card-filter p-3">
                <div className="d-flex justify-content-between mb-4">
                    <h5 className="fw-bolder m-0">Filter</h5>
                    <span className="text-primary">Reset</span>
                </div>
                <Accordion defaultActiveKey="0">
                    <Card className="rounded-15 pt-2 border-0">
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="bg-white border-0" style={{borderTopLeftRadius:'15px', borderTopRightRadius:'15px'}}>
                            <h6 className="fw-bolder">Transit</h6>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <ListGroup>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex">
                                        <label className="me-auto lable">Direct</label>
                                        <Form.Check aria-label="option 1" name="transit" value="Direct" onChange={filterTransit} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex">
                                        <label className="me-auto lable">Transit</label>
                                        <Form.Check aria-label="option 1" name="transit" value="1 transit" onChange={filterTransit} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex">
                                        <label className="me-auto lable">Transit 2+</label>
                                        <Form.Check aria-label="option 1" name="transit" value="2+ transit" onChange={(e) => handelChange(e)} />
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                        <div className="line"></div>
                    </Card>
                </Accordion>
                <Accordion defaultActiveKey="1">
                    <Card className="rounded-0 border-0">
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="bg-white border-0">
                            <h6 className="fw-bolder">Facilities</h6>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <ListGroup>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex">
                                        <label className="me-auto lable">Luggage</label>
                                        <Form.Check aria-label="option 1" name="facilities" value="luggage" onChange={(e) => handelChange(e)} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex">
                                        <label className="me-auto lable">In-Fligt Meal</label>
                                        <Form.Check aria-label="option 1" name="facilities" value="meal" onChange={(e) => handelChange(e)} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex">
                                        <label className="me-auto lable">Wi-Fi</label>
                                        <Form.Check aria-label="option 1" name="facilities" value="wifi" onChange={(e) => handelChange(e)} />
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                        <div className="line"></div>
                    </Card>
                </Accordion>
                <Accordion defaultActiveKey="departure">
                    <Card className="rounded-0 border-0">
                        <Accordion.Toggle as={Card.Header} eventKey="departure" className="bg-white border-0">
                            <h6 className="fw-bolder">Departure Time</h6>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="departure">
                        <ListGroup>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex">
                                        <label className="me-auto lable">00:00 - 06:00</label>
                                        <Form.Check aria-label="option 1" name="departure" value="0-6" onChange={filterDeparture} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex">
                                        <label className="me-auto lable">06:00 - 12:00</label>
                                        <Form.Check aria-label="option 1" name="departure" value="6-12" onChange={filterDeparture} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex">
                                        <label className="me-auto lable">12:00 - 18:00</label>
                                        <Form.Check aria-label="option 1" name="departure" value="12-18" onChange={filterDeparture} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex">
                                        <label className="me-auto lable">18:00 - 24:00</label>
                                        <Form.Check aria-label="option 1" name="departure" value="18-24" onChange={filterDeparture} />
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                        <div className="line"></div>
                    </Card>
                </Accordion>
                <Accordion defaultActiveKey="arrived">
                    <Card className="rounded-0 border-0">
                        <Accordion.Toggle as={Card.Header} eventKey="arrived" className="bg-white border-0">
                            <h6 className="fw-bolder">Time Arrived</h6>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="arrived">
                        <ListGroup>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex">
                                        <label className="me-auto lable">00:00 - 06:00</label>
                                        <Form.Check aria-label="option 1" name="arrived" value="0-6" onChange={filterArrived} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex">
                                        <label className="me-auto lable">06:00 - 12:00</label>
                                        <Form.Check aria-label="option 1" name="arrived" value="6-12" onChange={filterArrived} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex">
                                        <label className="me-auto lable">12:00 - 18:00</label>
                                        <Form.Check aria-label="option 1" name="arrived" value="12-18" onChange={filterArrived} />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex">
                                        <label className="me-auto lable">18:00 - 24:00</label>
                                        <Form.Check aria-label="option 1" name="arrived" value="18-24" onChange={filterArrived} />
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                        <div className="line"></div>
                    </Card>
                </Accordion>
                <Accordion defaultActiveKey="airlines">
                    <Card className="rounded-0 border-0">
                        <Accordion.Toggle as={Card.Header} eventKey="airlines" className="bg-white border-0">
                            <h6 className="fw-bolder">Airlines</h6>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="airlines">
                        <ListGroup>
                                {
                                    props.dataTicketFilter.map((val, i) => {
                                            return (<ListGroup.Item className="border-0">
                                                <div className="d-flex">
                                                    <label className="me-auto lable">{val.Maskapai.nameMaskapai}</label>
                                                    <Form.Check aria-label="option 1" name="airlines" value={val.Maskapai.nameMaskapai} onChange={filterAirlines} />
                                                </div>
                                            </ListGroup.Item>)
                                        }
                                    )
                                }
                            </ListGroup>
                        </Accordion.Collapse>
                        <div className="line"></div>
                    </Card>
                </Accordion>
                <Accordion defaultActiveKey="price">
                    <Card className="rounded-0 border-0">
                        <Accordion.Toggle as={Card.Header} eventKey="price" className="bg-white border-0">
                            <h6 className="fw-bolder">Ticket Price</h6>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="price">
                            <ListGroup>
                                <ListGroup.Item className="border-0">
                                    <div>
                                        <label className="form-label d-flex justify-content-between">
                                            <p className="text-muted m-0">Lowest</p>
                                            <p className="text-muted m-0">Highest</p>
                                        </label>
                                        <input type="range" className="form-range" name="price" min="145" max="300" onChange={filterPrice} />
                                        <label className="form-label d-flex justify-content-between">
                                            <p className="text-primary fw-bold">$ 145,00</p>
                                            <p className="text-primary fw-bold">$ 300,00</p>
                                        </label>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                        <div className="line"></div>
                    </Card>
                </Accordion>

            </div>
        </>
    )
}

export default SidenavFilter