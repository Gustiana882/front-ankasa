import './style/TrendingCarousel.scoped.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import axios from 'axios';

const TrendingCarousel = () => {
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

	const [city, setCity] = useState([]);
	const [country, setCountry] = useState([]);
	const [image, setImage] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API}/destination/all`).then((res) => {
			const { result } = res.data;

			let arrayCity = [];
			result.forEach((datum) => arrayCity.push(datum.city));
			if (arrayCity) setCity(arrayCity);

			let arrayCount = [];
			result.forEach((datum) => arrayCount.push(datum.country));
			if (arrayCount) setCountry(arrayCount);

			let arrayImg = [];
			result.forEach((datum) => arrayImg.push(datum.image));
			if (arrayImg) setImage(arrayImg);
		});
	}, []);

	return (
		<div>
			<div className="carousel-box">
				<Slider {...settings}>
					<div>
						<div
							className="card"
							style={{
								backgroundImage: `url(${image[0]})`,
								backgroundSize: ' 100% 100%',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<div className="title">
								<div className="location">
									<h1>{city[0]}</h1>
									<h2>{country[0]}</h2>
								</div>
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
						<div
							className="card"
							style={{
								backgroundImage: `url(${image[1]})`,
								backgroundSize: ' 100% 100%',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<div className="title">
								<div className="location">
									<h1>{city[1]}</h1>
									<h2>{country[1]}</h2>
								</div>
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
						<div
							className="card"
							style={{
								backgroundImage: `url(${image[2]})`,
								backgroundSize: ' 100% 100%',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<div className="title">
								<div className="location">
									<h1>{city[2]}</h1>
									<h2>{country[2]}</h2>
								</div>
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
						<div
							className="card"
							style={{
								backgroundImage: `url(${image[3]})`,
								backgroundSize: ' 100% 100%',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<div className="title">
								<div className="location">
									<h1>{city[3]}</h1>
									<h2>{country[3]}</h2>
								</div>
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
						<div
							className="card"
							style={{
								backgroundImage: `url(${image[4]})`,
								backgroundSize: ' 100% 100%',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<div className="title">
								<div className="location">
									<h1>{city[4]}</h1>
									<h2>{country[4]}</h2>
								</div>
								<FaAngleRight />
							</div>
						</div>
					</div>
					<div>
						<div
							className="card"
							style={{
								backgroundImage: `url(${image[5]})`,
								backgroundSize: ' 100% 100%',
								backgroundRepeat: 'no-repeat',
							}}
						>
							<div className="title">
								<div className="location">
									<h1>{city[5]}</h1>
									<h2>{country[5]}</h2>
								</div>
								<FaAngleRight />
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default TrendingCarousel;
