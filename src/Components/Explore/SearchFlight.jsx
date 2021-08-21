import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import './style/SearchFlight.scoped.css';
import { Controller, useForm } from 'react-hook-form';
<<<<<<< HEAD
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Dropdown } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from 'react-datepicker';
=======
import DatePicker from 'react-date-picker';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Dropdown } from 'react-bootstrap';
>>>>>>> cd9c56accfe066871a48c107831c0078209d50f1

const SearchFlight = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm();
<<<<<<< HEAD
	const [startDate, setStartDate] = useState(new Date());
=======
>>>>>>> cd9c56accfe066871a48c107831c0078209d50f1

	const [value, onChange] = useState(new Date());
	return (
		<div>
			<div className="wrapper">
				<div className="title">
					<p className="p1">Hey,</p>
					<p className="p2">Where you want to go?</p>
				</div>
				<button className="recent-search">
					Recently Searched
					<FaAngleRight className="angle-right" />
				</button>
				<div className="destination-box">
					<div className="destination">
						<ul>
							<li className="from">From</li>
							<li className="city">
								<input type="text" placeholder="city" />
							</li>
							<li className="country">Indonesia</li>
						</ul>
					</div>
					<button className="reverse-btn">
						<img
							src="https://res.cloudinary.com/calvin-cloud/image/upload/v1629413027/Ankasa/two-arrow_c85ml3.svg"
							alt=""
						/>
					</button>

					<div className="destination">
						<ul>
							<li className="from">To</li>
							<li className="city">
								<input type="text" placeholder="city" />
							</li>
							<li className="country">Japan</li>
						</ul>
					</div>
				</div>
				<div className="destination-btn">
					<button className="one-way">
						<img
							src="https://res.cloudinary.com/calvin-cloud/image/upload/v1629408814/Ankasa/plane_sh9zcp.svg"
							alt=""
						/>
						One way
					</button>

					<button className="round-trip">
						<img
							src="https://res.cloudinary.com/calvin-cloud/image/upload/v1629409362/Ankasa/redo_qu2ezu.svg"
							alt=""
						/>
						Round trip
					</button>
				</div>
				<div className="departure-box">
					<p>Departure</p>
					<div className="date-box">
						<DatePicker
<<<<<<< HEAD
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							dateFormat="dd MMMM yyyy"
							className="datePicker"
							minDate={new Date()}
							customStyles={{ dateInput: { borderWidth: 0 } }}
=======
							className="DatePicker"
							onChange={onChange}
							value={value}
>>>>>>> cd9c56accfe066871a48c107831c0078209d50f1
						/>
					</div>
				</div>
				<div className="person-box">
					<p>How many person?</p>
					<div className="person-btn">
						<div className="person">
							Child <FaAngleRight className="angle-right" />
						</div>
						<div className="person">
							Adult <FaAngleRight className="angle-right" />
						</div>
					</div>
				</div>
				<div className="class-box">
					<p>Which class do you want?</p>
					<div className="radio-box">
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="baru-radio"
								defaultValue="baru"
							/>
							<label className="form-check-label" htmlFor="inlineRadio1">
								<p>Economy</p>
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="bekas-radio"
								defaultValue="bekas"
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								<p>Business</p>
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="bekas-radio"
								defaultValue="bekas"
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								<p>First Class</p>
							</label>
						</div>
					</div>
				</div>
				<button className="search-flight">
					SEARCH FLIGHT
					<img
						src="https://res.cloudinary.com/calvin-cloud/image/upload/v1629417902/Ankasa/long-arrow_xlgymx.svg"
						alt=""
					/>
				</button>
			</div>
		</div>
	);
};

export default SearchFlight;
