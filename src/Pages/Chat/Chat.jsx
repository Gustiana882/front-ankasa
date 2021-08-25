import React from 'react';

import './Chat.scoped.css';
import Navbar from '../../Components/Navbar/NavbarHeader';
import Footer from '../../Components/Footer/Footer';

function Chat() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<div className="container content card">
				<div className="m-5 px-5">
					<h6 className="text-blue">C H A T</h6>
					<div className="d-flex justify-content-between">
						<h3>Chat</h3>
						<h6 className="text-blue pointer">Filter</h6>
					</div>
					<br /> <br />
					<div className="d-flex justify-content-between">
						<div className="d-flex">
							<div className="image me-3">
								<img
									src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629690899/tiketing/Group_261_dwyfxr.png"
									alt=""
								/>
							</div>
							<div className="chat">
								<h5 className="card-title">Soham Henry</h5>
								<p className="card-text text-secondary">Me: Bro, just f off</p>
							</div>
						</div>
						<div className="time">
							<p className="card-text text-secondary float">8.30</p>
							<i class="bi bi-check2-all text-blue" />
						</div>
					</div>
					<hr />
					<div className="d-flex justify-content-between">
						<div className="d-flex">
							<div className="image me-3">
								<img
									src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629690899/tiketing/Group_782_ctxtw2.png"
									alt=""
								/>
							</div>
							<div className="chat">
								<h5 className="card-title">Theresa Webb</h5>
								<p className="card-text text-blue">Why did you do that? </p>
							</div>
						</div>
						<div className="time">
							<p className="card-text text-secondary float">15.20</p>
							<p className="text-blue">1</p>
						</div>
					</div>
					<hr />
					<div className="d-flex justify-content-between">
						<div className="d-flex">
							<div className="image me-3">
								<img
									src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629690899/tiketing/Group_303_fscp73.png"
									alt=""
								/>
							</div>
							<div className="chat">
								<h5 className="card-title">Milky Choco</h5>
								<p className="card-text text-secondary">
									Me: Yes, of course come, ...{' '}
								</p>
							</div>
						</div>
						<div className="time">
							<p className="card-text text-secondary float">7.20</p>
							<i class="bi bi-check2-all" />
						</div>
					</div>
					<hr />
					<div className="d-flex justify-content-between">
						<div className="d-flex">
							<div className="image me-3">
								<img
									src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629690899/tiketing/Group_262_hjmthw.png"
									alt=""
								/>
							</div>
							<div className="chat">
								<h5 className="card-title">Calvin Flores</h5>
								<p className="card-text text-blue">
									Hi, bro! Come to my house!
								</p>
							</div>
						</div>
						<div className="time">
							<p className="card-text text-secondary float">15.13</p>
							<span className="rounded text-blue">1</span>
						</div>
					</div>
					<hr />
					<div className="d-flex justify-content-between">
						<div className="d-flex">
							<div className="image me-3">
								<img
									src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629690899/tiketing/Group_304_masyor.png"
									alt=""
								/>
							</div>
							<div className="chat">
								<h5 className="card-title">Brother</h5>
								<p className="card-text text-secondary">Ok. Goood Bay!</p>
							</div>
						</div>
						<div className="time">
							<p className="card-text text-secondary float">Yesterday</p>
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

export default Chat;
