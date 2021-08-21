import './style/TrendingCarousel.scoped.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

export default function TrendingCarousel() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
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
						<div className="card">
							<div className="title">
								<div className="location">
									<p>Tokyo</p>
									<p>Japan</p>
								</div>
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
						<div className="card">
							<div className="title">
								<div className="location">
									<p>Tokyo</p>
									<p>Japan</p>
								</div>
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
						<div className="card">
							<div className="title">
								<div className="location">
									<p>Tokyo</p>
									<p>Japan</p>
								</div>
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
						<div className="card">
							<div className="title">
								<div className="location">
									<p>Tokyo</p>
									<p>Japan</p>
								</div>
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
						<div className="card">
							<div className="title">
								<div className="location">
									<p>Tokyo</p>
									<p>Japan</p>
								</div>
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
						<div className="card">
							<div className="title">
								<div className="location">
									<p>Tokyo</p>
									<p>Japan</p>
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
