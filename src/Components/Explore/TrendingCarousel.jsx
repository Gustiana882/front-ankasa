import './style/TrendingCarousel.scoped.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

export default function TrendingCarousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
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
								</div>
								<FaAngleRight />
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
}
