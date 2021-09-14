import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import './style/SearchFlight.scoped.css';

import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';

import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { search } from '../../Storages/Slices/flashData';
import { useDispatch } from 'react-redux';

const SearchFlight = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [startDate, setStartDate] = useState(new Date());
	const [destination, setDestination] = useState([]);
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');
	const [Class, setClass] = useState('Economy');
	const num = [1, 2, 3, 4, 5];

	const getDestination = () => {
		axios({
			method: 'get',
			url: `${process.env.REACT_APP_API}/destination/all`,
		}).then((result) => setDestination(result.data.result));
	};

	useEffect(() => {
		getDestination();
	}, []);

	const searchClick = () => {
		if (from === '' || to === '') {
			return alert('from to not null');
		}

		dispatch(search(`${from},${to},${Class},${startDate}`));
		history.push(`/search`);
	};

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
								<select
									className="form-select border-0"
									name="from"
									onChange={(e) => setFrom(e.target.value)}
								>
									<option selected>city</option>
									{destination.map((des, i) => (
										<option value={des.country} key={i}>
											{des.city}
										</option>
									))}
								</select>
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
								<select
									className="form-select border-0"
									name="to"
									onChange={(e) => setTo(e.target.value)}
								>
									<option selected>city</option>
									{destination.map((des, i) => (
										<option value={des.country} key={i}>
											{des.city}
										</option>
									))}
								</select>
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
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							dateFormat="dd MMMM yyyy"
							className="datePicker"
							minDate={new Date()}
							customStyles={{ dateInput: { borderWidth: 0 } }}
						/>
					</div>
				</div>
				<div className="person-box">
					<p>How many person?</p>
					<div className="person-btn">
						<select className="person form-select border-0" name="to">
							<option selected>Child</option>
							{num.map((jum, i) => (
								<option value={jum} key={i}>
									{jum}
								</option>
							))}
						</select>
						<select className="person form-select border-0" name="to">
							<option selected>Adult</option>
							{num.map((jum, i) => (
								<option value={jum} key={i}>
									{jum}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="class-box">
					<p>Which class do you want?</p>
					<div className="radio-box">
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="class"
								onChange={(e) => setClass(e.target.value)}
								id="baru-radio"
								defaultValue="Economy"
							/>
							<label className="form-check-label" htmlFor="inlineRadio1">
								<p>Economy</p>
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="class"
								onChange={(e) => setClass(e.target.value)}
								id="bekas-radio"
								defaultValue="Business"
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								<p>Business</p>
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="class"
								onChange={(e) => setClass(e.target.value)}
								id="bekas-radio"
								defaultValue="First Class"
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								<p>First Class</p>
							</label>
						</div>
					</div>
				</div>
				<button className="search-flight" onClick={searchClick}>
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
