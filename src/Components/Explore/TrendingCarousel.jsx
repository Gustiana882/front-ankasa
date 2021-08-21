import './style/TrendingCarousel.scoped.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

export default function TrendingCarousel() {
<<<<<<< HEAD
	const settings = {
=======
	var settings = {
>>>>>>> cd9c56accfe066871a48c107831c0078209d50f1
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
<<<<<<< HEAD
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
=======
>>>>>>> cd9c56accfe066871a48c107831c0078209d50f1
	};

	const cities = [
		{
			city: 'Tokyo',
			country: 'Japan',
		},
		{
			city: 'Tokyo',
			country: 'Japan',
		},
		{
			city: 'Tokyo',
			country: 'Japan',
		},
		{
			city: 'Tokyo',
			country: 'Japan',
		},
		{
			city: 'Tokyo',
			country: 'Japan',
		},
	];

	const [destination, setDestination] = useState([]);

	return (
		<div>
			<div className="carousel-box">
				<Slider {...settings}>
					<div>
<<<<<<< HEAD
						<div
							className="card"
							style={{
								backgroundImage: `url(https://res.cloudinary.com/calvin-cloud/image/upload/v1629502768/Ankasa/Paris_uqckxq.jpg)`,
								backgroundSize: ' 100% 100%',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<div className="title">
								<div className="location">
									<h1>Tokyo</h1>
									<h2>Japan</h2>
								</div>
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
						<div
							className="card"
							style={{
								backgroundImage: `url(https://res.cloudinary.com/calvin-cloud/image/upload/v1629502768/Ankasa/Paris_uqckxq.jpg)`,
								backgroundSize: ' 100% 100%',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<div className="title">
								<div className="location">
									<h1>Tokyo</h1>
									<h2>Japan</h2>
=======
						<div className="card">
							<div className="location">
								<p>Tokyo</p>
								<p>Japan</p>
							</div>
							<FaAngleRight />
						</div>
					</div>
					<div>
						<div className="card">
							<div className="title">
								<div className="location">
									<p>Tokyo</p>
									<p>Japan</p>
>>>>>>> cd9c56accfe066871a48c107831c0078209d50f1
								</div>
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
<<<<<<< HEAD
						<div
							className="card"
							style={{
								backgroundImage: `url(https://res.cloudinary.com/calvin-cloud/image/upload/v1629502768/Ankasa/Paris_uqckxq.jpg)`,
								backgroundSize: ' 100% 100%',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<div className="title">
								<div className="location">
									<h1>Tokyo</h1>
									<h2>Japan</h2>
								</div>
=======
						<div className="card">
							<div className="title">
								<p>Tokyo</p>
								<p>Japan</p>
>>>>>>> cd9c56accfe066871a48c107831c0078209d50f1
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
<<<<<<< HEAD
						<div
							className="card"
							style={{
								backgroundImage: `url(https://res.cloudinary.com/calvin-cloud/image/upload/v1629502768/Ankasa/Paris_uqckxq.jpg)`,
								backgroundSize: ' 100% 100%',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<div className="title">
								<div className="location">
									<h1>Tokyo</h1>
									<h2>Japan</h2>
								</div>
=======
						<div className="card">
							<div className="title">
								<p>Tokyo</p>
								<p>Japan</p>
>>>>>>> cd9c56accfe066871a48c107831c0078209d50f1
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
<<<<<<< HEAD
						<div
							className="card"
							style={{
								backgroundImage: `url(https://res.cloudinary.com/calvin-cloud/image/upload/v1629502768/Ankasa/Paris_uqckxq.jpg)`,
								backgroundSize: ' 100% 100%',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<div className="title">
								<div className="location">
									<h1>Tokyo</h1>
									<h2>Japan</h2>
								</div>
=======
						<div className="card">
							<div className="title">
								<p>Tokyo</p>
								<p>Japan</p>
>>>>>>> cd9c56accfe066871a48c107831c0078209d50f1
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
<<<<<<< HEAD
						<div
							className="card"
							style={{
								backgroundImage: `url(https://res.cloudinary.com/calvin-cloud/image/upload/v1629502768/Ankasa/Paris_uqckxq.jpg)`,
								backgroundSize: ' 100% 100%',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<div className="title">
								<div className="location">
									<h1>Tokyo</h1>
									<h2>Japan</h2>
								</div>
=======
						<div className="card">
							<div className="title">
								<p>Tokyo</p>
								<p>Japan</p>
>>>>>>> cd9c56accfe066871a48c107831c0078209d50f1
								<FaAngleRight />
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
}
