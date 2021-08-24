/* eslint-disable react-hooks/exhaustive-deps */
import "./SearchResult.scoped.css"
// import logo from "../../Assets/logo.svg"
// import iCoper from "../../Assets/Vector-1.svg"
// import iBurger from "../../Assets/Vector.svg"
// import iWifi from "../../Assets/Vector-2.svg"
// import SearchFlight from '../../Components/Explore/SearchFlight'
import NavbarHeader from '../../Components/Navbar/NavbarHeader'
import Footer from "../../Components/Footer/Footer"
import SidenavFilter from "../../Components/SidenavFilter/SidenavFilter"
import Card from "../../Components/CardSearch/CardSearch"
import standarResponApi from "./standarResponApi"
import { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios"

const SearchResult = (props) => {

	const history = useHistory()
	const [dataApi, setDataApi] =useState([])
	const [dataTicketFilter, setDataTicketFilter] = useState([])
	const [filter, setFilter] = useState({
		transit: "",
		facilities: "",
		departure: "0-0",
		arrived: "0-0",
		airlines: "",
	})



	const loadData = () => {
		if (filter.transit !== "") {
			const result = dataApi.filter((ticket) => String(ticket.times.transit).toLocaleLowerCase() === String(filter.transit).toLocaleLowerCase())
			setDataTicketFilter(result)
			// console.log("data", dataTicketFilter)
			// console.log("transit",result)
			
		}
		else if (filter.departure !== "0-0") {
			const start = String(filter.departure).split('-')
			const end = String(filter.departure).split('-')
			const result = dataApi.filter((ticket) => Number(ticket.times.berangkat) > Number(start[0]) && Number(ticket.times.berangkat) >= Number(end[0]))
			setDataTicketFilter(result)
			// console.log("depature",result)
			
		}
		else if (filter.arrived !== "0-0") {
			const start = String(filter.arrived).split('-')
			const end = String(filter.arrived).split('-')
			const result = dataApi.filter((ticket) => Number(ticket.times.tiba) > Number(start[1]) && Number(ticket.times.tiba) >= Number(end[1]))
			setDataTicketFilter(result)
			// console.log("arrived",result)
			
		}
		else if (filter.airlines !== "") {
			const result = dataApi.filter((ticket) => String(ticket.Maskapai.nameMaskapai).toLocaleLowerCase() === String(filter.airlines).toLocaleLowerCase())
			setDataTicketFilter(result)
			// console.log("airlines",result)
			
		} else {
			console.log("not found")
		}
	}

	const dataSearch = useSelector((state) => {
		const arr = state.search.data.split(',')
		return { from: arr[0], to: arr[1], Class: arr[2], time: arr[3], status: state.search.search}
	});

	const getSchedule = () => {
		if (dataSearch.status) {
			axios({
				method: 'get',
				url: `${process.env.REACT_APP_API}/search?from=${dataSearch.from}&to=${dataSearch.to}&Class=${dataSearch.Class}`
			}).then(result => {
				setDataApi(result.data.result)
				setDataTicketFilter(result.data.result)
			})
			.catch((error) => console.log(error))
		}
	}

	useEffect(() => {
		loadData()
	}, [filter])

	useEffect(() => {
		getSchedule()
	}, [props])

	return (
		<div className="section">
			<NavbarHeader/>
			<div className="baner">
					<svg
						width={217}
						height={172}
						viewBox="0 0 217 172"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="bg-plan"
						>
						<path
							d="M20.3188 166.013C22.5266 169.675 25.6273 171.752 28.8722 171.746L74.7643 171.65C78.386 171.642 81.9556 170.337 85.1844 167.838L187.473 88.8008C196.874 81.5367 205.3 71.1679 211.034 57.5872C217.471 42.3417 218.171 31.3091 215.629 23.5151C213.094 15.7157 206.932 9.98796 195.151 8.821C184.657 7.78251 174.219 11.99 164.819 19.2487L130.187 46.0086L53.3018 2.08152C52.3774 1.13327 51.3034 0.578218 50.1909 0.473756C49.0784 0.369293 47.9677 0.719211 46.9738 1.48733L23.859 19.3504C20.1079 22.2464 19.2009 29.8692 22.0414 34.6227L76.9615 87.136L40.6774 115.175L15.2424 95.6527C14.3661 94.98 13.3981 94.6304 12.4168 94.6323C11.4354 94.6341 10.4681 94.9873 9.59285 95.6634L-4.51508 106.568C-8.18533 109.405 -9.1521 116.803 -6.47325 121.599L20.3188 166.013Z"
							fill="#41A4FF"
						/>
					</svg>
				<div className="box">
					<div className="d-none d-md-block">
						<svg
							width={50}
							height={35}
							viewBox="0 0 50 35"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							>
							<path
								d="M6.29307 32.9371C6.78369 33.6656 7.47274 34.0788 8.19382 34.0777L18.3921 34.0586C19.1969 34.0571 19.9901 33.7973 20.7076 33.3003L43.4385 17.576C45.5275 16.1308 47.4001 14.068 48.6743 11.3661C50.1047 8.3331 50.2602 6.1382 49.6954 4.5876C49.1321 3.03594 47.7626 1.89642 45.1447 1.66425C42.8127 1.45765 40.4932 2.29472 38.4042 3.73882L30.7082 9.06261L13.6226 0.323454C13.4172 0.134803 13.1785 0.0243769 12.9313 0.00359444C12.6841 -0.017188 12.4373 0.052427 12.2164 0.205242L7.07978 3.75905C6.2462 4.3352 6.04464 5.85172 6.67588 6.79742L18.8803 17.2448L10.8172 22.8231L5.16497 18.9392C4.97023 18.8053 4.75514 18.7358 4.53706 18.7361C4.31898 18.7365 4.10401 18.8068 3.90952 18.9413L0.774426 21.1106C-0.0411833 21.6751 -0.256023 23.1469 0.339278 24.1011L6.29307 32.9371Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className="ms-3">
						<div className="d-flex text-white mb-2">
							<div>
								<p className="fw-bolder m-0"><small>From</small></p>
								<h5 className="fw-bolder m-0">{dataSearch.from}</h5>
							</div>
							<div className="mt-auto ms-3 me-3">
								<svg
									width={17}
									height={17}
									viewBox="0 0 17 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									>
									<path
										d="M16.6888 4.69033L13.8123 7.56688C13.6048 7.77437 13.3329 7.8781 13.0609 7.8781C12.789 7.8781 12.5171 7.77437 12.3096 7.56688C11.8947 7.15194 11.8947 6.47922 12.3096 6.06428L13.3724 5.00154H2.23291C1.64611 5.00154 1.17041 4.52584 1.17041 3.93904C1.17041 3.35225 1.64611 2.87654 2.23291 2.87654H13.3724L12.3096 1.81381C11.8947 1.39887 11.8947 0.726144 12.3096 0.311205C12.7246 -0.103735 13.3973 -0.103735 13.8123 0.311205L16.6888 3.18776C17.1037 3.60266 17.1037 4.27542 16.6888 4.69033ZM14.186 11.9984H3.62761L4.69037 10.9357C5.10528 10.5208 5.10528 9.84804 4.69037 9.4331C4.2754 9.01816 3.60271 9.01816 3.18773 9.4331L0.31118 12.3097C-0.103727 12.7246 -0.103727 13.3973 0.31118 13.8123L3.18773 16.6888C3.39522 16.8963 3.66712 17 3.93905 17C4.21099 17 4.48289 16.8963 4.69037 16.6888C5.10528 16.2739 5.10528 15.6011 4.69037 15.1862L3.62761 14.1235H14.186C14.7728 14.1235 15.2485 13.6478 15.2485 13.061C15.2485 12.4742 14.7728 11.9984 14.186 11.9984Z"
										fill="white"
									/>
								</svg>
							</div>
							<div>
								<p className="fw-bolder m-0"><small>To</small></p>
								<h5 className="fw-bolder m-0">{dataSearch.to}</h5>
							</div>
						</div>
						<div className="text-white">
							<small className="me-3">Monday, 20 july 20</small>
								<svg width={5} height={5} viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="2.5" cy="2.5" r="2.5" fill="white" />
								</svg>
							<small className="ms-3 me-3">6 Passenger</small>
							<svg width={5} height={5} viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="2.5" cy="2.5" r="2.5" fill="white" />
								</svg>
							<small className="ms-3 me-3">{dataSearch.Class}</small>
						</div>
					</div>
				</div>
			</div>

			<div className="d-flex container">
				<div className="box-left d-none d-md-block">
					<SidenavFilter change={setFilter} />
				</div>
				<div className="box-right p-3">
					<div className="d-flex justify-content-between mb-4">
						<span className="d-flex align-items-center">
							<h5 className="fw-bolder m-0">Select Ticket</h5>
							<small className="text-muted">( 6 flight found )</small>
						</span>
						<span className="fw-bold">Sort by 
							<svg
								width={14}
								height={14}
								viewBox="0 0 17 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="ms-2"
								>
								<path
									d="M12.3097 16.6888L9.43312 13.8123C9.22563 13.6048 9.1219 13.3329 9.1219 13.0609C9.1219 12.789 9.22563 12.5171 9.43312 12.3096C9.84806 11.8947 10.5208 11.8947 10.9357 12.3096L11.9985 13.3724L11.9985 2.23291C11.9985 1.64611 12.4742 1.17041 13.061 1.17041C13.6478 1.17041 14.1235 1.64611 14.1235 2.23291L14.1235 13.3724L15.1862 12.3096C15.6011 11.8947 16.2739 11.8947 16.6888 12.3096C17.1037 12.7246 17.1037 13.3973 16.6888 13.8123L13.8122 16.6888C13.3973 17.1037 12.7246 17.1037 12.3097 16.6888ZM5.00156 14.186L5.00156 3.62761L6.06429 4.69037C6.47923 5.10528 7.15196 5.10528 7.5669 4.69037C7.98184 4.2754 7.98184 3.6027 7.5669 3.18773L4.69035 0.311179C4.27541 -0.103727 3.60268 -0.103727 3.18774 0.311179L0.31119 3.18773C0.103704 3.39522 -2.30485e-05 3.66712 -2.30604e-05 3.93905C-2.30723e-05 4.21099 0.103704 4.48289 0.311189 4.69037C0.726129 5.10528 1.39886 5.10528 1.8138 4.69037L2.87653 3.62761L2.87653 14.186C2.87653 14.7728 3.35223 15.2485 3.93903 15.2485C4.52583 15.2485 5.00156 14.7728 5.00156 14.186Z"
									fill="black"
								/>
							</svg>
						</span>
					</div>
					<div>
						{
							dataTicketFilter.map((ticket, i) => {
								console.log(ticket)
								return (
									<Card data={ticket} key={i} />
								)
							})
						}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SearchResult;
