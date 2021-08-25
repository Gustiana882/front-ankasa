/* eslint-disable react-hooks/exhaustive-deps */
import './flight.scoped.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Footer from '../../Components/Footer/Footer';
import NavbarHeader from '../../Components/Navbar/NavbarHeader';
import ContactDetail from '../../Components/Flight_Detail/Contact_Detail';
import PassengerDetail from '../../Components/Flight_Detail/Passenger_Details';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function Flight(props) {
	const [form, setForm] = useState({ insurance: false });
	const { code } = useParams();
	const { token } = useSelector((state) => state.loginReducer);

	const [schedule, setSchedule] = useState([
		{
			Maskapai: {
				image: '',
				nameMaskapai: '',
			},
			tujuanAwal: {
				kota: '',
				negara: '',
			},
			tujuanAkhir: {
				kota: '',
				negara: '',
			},
			times: {
				berangkat: '',
				tiba: '',
			},
			price: {
				dewasa: '',
			},
		},
	]);
	// const id = props.match.params.code;

	const onSubmit = () => {
		console.log(form);
		axios({
			method: 'POST',
			url: `${process.env.REACT_APP_API}/booking`,
			headers: { token: token },
			data: form,
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getSchedule = () => {
		axios({
			method: 'get',
			url: `${process.env.REACT_APP_API}/schedule/${code}`,
		})
			.then((result) => {
				setSchedule(result.data.result);
				setForm({
					...form,
					...{
						totalPrice: result.data.result[0].price.dewasa,
						idSchedule: result.data.result[0].id,
					},
				});
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getSchedule();
	}, []);

	return (
		<div className="color">
			<div>
				<NavbarHeader />
			</div>
			<div>
				<div className="d-flex justify-content-evenly mt-5">
					<div className="pict-airplane-bg vw-100">
						<img
							className="pict-airplane"
							src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629563652/tiketing/vector_3_xgesw0.png"
							alt=""
						/>
					</div>
					<div className="col-6 content">
						<h5 className="m-0 poppins-bold text-white">
							Contact Person Details
						</h5>

						<ContactDetail callback={(data) => setForm({ ...form, ...data })} />
						<h5 className="mt-5 poppins-bold">Passenger Details</h5>

						<PassengerDetail
							callback={(data) => setForm({ ...form, ...data })}
						/>
						<h5 className="mt-5 poppins-bold">Passenger Details</h5>
						<div className="mt-4 card p-4">
							<div className="d-flex justify-content-between">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue
										name="insurance"
										id="flexCheckDefault"
										onClick={(e) =>
											setForm({
												...form,
												...{
													[e.target.name]: !form.insurance,
													totalPrice: Number(form.totalPrice) + 2,
												},
											})
										}
									/>
									<label
										className="form-check-label poppins-bold"
										htmlFor="flexCheckDefault"
									>
										Travel Insurance
									</label>
								</div>
								<h6 className="m-0 poppins-reguler">
									<span className="poppins-bold color-blue" name="insurance">
										$ 2,00
									</span>{' '}
									/pax
								</h6>
							</div>
							<div className="d-grid mt-2">
								<h6 className="m-0 poppins-reguler p-1">
									Get travel compensation up to $ 10.000.000
								</h6>
							</div>
						</div>
						<button
							className="col-4 btn-pay mx-auto text-center mt-5"
							onClick={onSubmit}
						>
							<h6 className="btn m-0 poppins-bold p-3 text-white">
								Proceed to Payment
							</h6>
						</button>
					</div>
					<div className="col-4 content">
						<div className="d-flex justify-content-between align-items-center">
							<h5 className="m-0 poppins-bold text-white">Flight Details</h5>
							<small className="m-0 poppins-bold text-white">
								View Details
							</small>
						</div>
						<div className="mt-4 p-4 card">
							<div className="d-flex align-items-center">
								<img
									className="me-4"
									src={schedule[0].Maskapai.image}
									alt=""
									width={100}
									height={50}
								/>
								<h6 className="m-0 poppins-reguler">
									{schedule[0].Maskapai.nameMaskapai}
								</h6>
							</div>
							<div className="d-flex align-items-center mt-4">
								<h6 className="m-0 poppins-bold">
									{schedule[0].tujuanAwal.kota} ({schedule[0].tujuanAwal.negara}
									)
								</h6>
								<img
									className="mx-4"
									src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629488283/Assets%20Ticket/Vector_bhe8gh.png"
									alt=""
								/>
								<h6 className="m-0 poppins-bold">
									{schedule[0].tujuanAkhir.kota} (
									{schedule[0].tujuanAkhir.negara})
								</h6>
							</div>
							<div className="d-flex align-items-center mt-4">
								<h6 className="m-0 poppins-reguler font-mini">Tanggal</h6>
								<img
									className="mx-2"
									src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629488977/Assets%20Ticket/Ellipse_48_xh9wap.png"
									alt=""
								/>
								<h6 className="m-0 poppins-reguler font-mini">
									{schedule[0].times.berangkat}
								</h6>
								<h6 className="m-0 poppins-reguler mx-2 font-mini">-</h6>
								<h6 className="m-0 poppins-reguler font-mini">
									{schedule[0].times.tiba}
								</h6>
							</div>
							<div className="d-flex align-items-center mt-4">
								<img
									className="me-3"
									src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629489210/Assets%20Ticket/Group_1059_kx7mz8.png"
									alt=""
								/>
								<h6 className="m-0 poppins-bold color-blue">Refundable</h6>
							</div>
							<div className="d-flex align-items-center mt-2">
								<img
									className="me-3"
									src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629489210/Assets%20Ticket/Group_1059_kx7mz8.png"
									alt=""
								/>
								<h6 className="m-0 poppins-bold color-blue">Can reschedule</h6>
							</div>
							<div className="d-flex align-items-center mt-4 justify-content-between">
								<h6 className="m-0 poppins-bold">Total Payment</h6>
								<h6 className="m-0 poppins-bold color-blue" name="totalPrice">
									$ {form.totalPrice},00
								</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default Flight;
