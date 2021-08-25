import iCoper from '../../Assets/Vector-1.svg';
import iBurger from '../../Assets/Vector.svg';
import iWifi from '../../Assets/Vector-2.svg';
import { Card } from 'react-bootstrap';
import './CardSearch.scoped.css';

const CardSearch = (props) => {
	const data = props.data;
	return (
		<Card className="card-box border-0 my-3 p-3">
			<Card.Body>
				<div className="d-flex align-items-center">
					<img src={data.image} alt="maskapai.png" />
					<h6 className="ms-4 text-secondary">{data.maskapai}</h6>
				</div>
				<div className="d-flex align-items-center justify-content-between flex-wrap">
					<div className="d-flex align-items-center justify-content-between me-4 mt-3">
						<div className="dest">
							<h5 className="m-0 dest mt-2">{data.from}</h5>
							<p className="m-0">
								{console.log(data)}
								{/* <small className="time">{data.time.berangkat}</small> */}
							</p>
						</div>
						<svg
							width={20}
							height={18}
							viewBox="0 0 20 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="mx-3"
						>
							<path
								d="M18.5559 15.6H0.475875C0.213001 15.6 8.45316e-05 15.8685 8.45316e-05 16.2V17.4C8.45316e-05 17.7315 0.213001 18 0.475875 18H18.5559C18.8188 18 19.0317 17.7315 19.0317 17.4V16.2C19.0317 15.8685 18.8188 15.6 18.5559 15.6ZM2.39539 11.5977C2.58214 11.8542 2.84442 11.9997 3.11889 11.9993L7.00074 11.9926C7.30709 11.9921 7.60904 11.9006 7.88215 11.7256L16.5344 6.1888C17.3296 5.67993 18.0424 4.95357 18.5274 4.00221C19.0718 2.93423 19.131 2.16136 18.916 1.61537C18.7016 1.069 18.1803 0.66776 17.1838 0.586011C16.2962 0.513263 15.4133 0.808008 14.6181 1.3165L11.6888 3.1911L5.18531 0.113894C5.10711 0.0474663 5.01627 0.00858352 4.92216 0.00126566C4.82806 -0.0060522 4.73412 0.0184604 4.65004 0.0722692L2.69484 1.32363C2.37755 1.5265 2.30083 2.06049 2.5411 2.39348L7.1866 6.07218L4.11746 8.0364L1.96599 6.6688C1.89187 6.62167 1.80999 6.59718 1.72698 6.59731C1.64397 6.59744 1.56215 6.62219 1.48812 6.66955L0.294777 7.43341C-0.015676 7.63216 -0.0974525 8.1504 0.129143 8.48639L2.39539 11.5977Z"
								fill="#979797"
							/>
						</svg>
						<div className="dest">
							<h5 className="m-0 dest mt-2">{data.to}</h5>
							<p className="m-0">
								{/* <small className="time">{data.time.arrived}</small> */}
							</p>
						</div>
					</div>
					<div className="me-4 text-center mt-3">
						<p className="text-muted m-0">3 hours 11 minutes</p>
						<p className="m-0">
							{/* <small className="time">({data.time.transit} transit)</small> */}
						</p>
					</div>
					<div className="d-flex align-items-center justify-content-between mt-3">
						<div className="me-4">
							<img className="mx-2" src={iCoper} alt="" />
							<img className="mx-2" src={iBurger} alt="" />
							<img className="mx-2" src={iWifi} alt="" />
						</div>
					</div>
					<div className="d-flex me-4 mt-3">
						<p className="text-primary dest m-0">$ {data.price.adult},00</p>
						<span className="text-secondary"> /pax</span>
					</div>
					<div className="ms-auto me-4 mt-3">
						<button className="btn-select ms-auto">Select</button>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default CardSearch;
