import './style/TopDestCarousel.scoped.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';

const TopDestCarousel = () => {
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

	const [city, setCity] = useState([])
	const [image, setImage] = useState([])

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API}/destination/all`)
		.then((res) => {
			const { result } = res.data
			console.log(result)

			let arrayCity = [];
				result.forEach(datum => arrayCity.push(datum.city))
			if (arrayCity) setCity(arrayCity)

			let arrayImg = [];
				result.forEach(datum => arrayImg.push(datum.image))
			if (arrayImg) setImage(arrayImg)
		});
	}, []);

	return (
		<div>
			<div>
				<div className="carousel-box">
					<Slider {...settings}>
						<div>
							<div className="card-box">
								<div className="circle">
									<img
										src={image[0]}
										alt=""
									/>
								</div>
								<p>{city[0]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img
										src={image[1]}
										alt=""
									/>
								</div>
								<p>{city[1]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img
										src={image[2]}
										alt=""
									/>
								</div>
								<p>{city[2]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img
										src={image[3]}
										alt=""
									/>
								</div>
								<p>{city[3]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img
										src={image[4]}
										alt=""
									/>
								</div>
								<p>{city[4]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img
										src={image[5]}
										alt=""
									/>
								</div>
								<p>{city[5]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img
										src={image[6]}
										alt=""
									/>
								</div>
								<p>{city[6]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img
										src={image[7]}
										alt=""
									/>
								</div>
								<p>{city[7]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img
										src={image[8]}
										alt=""
									/>
								</div>
								<p>{city[8]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img
										src={image[9]}
										alt=""
									/>
								</div>
								<p>{city[9]}</p>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default TopDestCarousel;
