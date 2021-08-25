import './flight.scoped.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards(props) {
	function handleChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		props.callback({ [name]: value });
	}

	return (
		<div className="mt-4 card p-4">
			<div className="user-box d-grid pt-2 m-2">
				<input type="text" name="namePerson" onChange={handleChange} required />
				<label>Full Name</label>
			</div>
			<div className="user-box d-grid pt-2 mt-3 m-2">
				<input
					type="email"
					name="emailPerson"
					onChange={handleChange}
					required
				/>
				<label>Email</label>
			</div>
			<div className="user-box d-grid pt-2 mt-3 m-2">
				<input
					type="number"
					name="phonePerson"
					onChange={handleChange}
					min="0"
					required
				/>
				<label>Phone Number</label>
			</div>
			<div className="mt-5 card trust-box p-3 align-items-center">
				<img
					className="img-danger"
					src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629480838/Assets%20Ticket/danger_zebly2.png"
					alt=""
				/>
				<h6 className="m-0 poppins-reguler px-3">
					Make sure the customer data is correct
				</h6>
			</div>
		</div>
	);
}

export default Cards;
