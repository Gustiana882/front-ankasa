import React from 'react';
import './style/TopDestCarousel.scoped.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


const TopDestCarousel = () => {
	const [slider, setslider] = useState({ slickNext: function(){}, slickPrev: function(){} })

	function next() {
		slider.slickNext();
	}

	function previous() {
		slider.slickPrev();
	}

	const settings = {
		dots: false,
		dotsClass: 'd-none',
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrows: false,
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
	const [image, setImage] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API}/destination/all`).then((res) => {
			const { result } = res.data;

			let arrayCity = [];
			result.forEach((datum) => arrayCity.push(datum.city));
			if (arrayCity) setCity(arrayCity);

			let arrayImg = [];
			result.forEach((datum) => arrayImg.push(datum.image));
			if (arrayImg) setImage(arrayImg);
		});
	}, []);

	return (
		<div>
			<div>
				<div className="carousel-box">
					<Slider ref={c => setslider(c)} {...settings}>
						<div>
							<div className="card-box">
								<div className="circle">
									<img src={image[0]} alt="" />
								</div>
								<p>{city[0]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img src={image[1]} alt="" />
								</div>
								<p>{city[1]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img src={image[2]} alt="" />
								</div>
								<p>{city[2]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img src={image[3]} alt="" />
								</div>
								<p>{city[3]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img src={image[4]} alt="" />
								</div>
								<p>{city[4]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img src={image[5]} alt="" />
								</div>
								<p>{city[5]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img src={image[6]} alt="" />
								</div>
								<p>{city[6]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img src={image[7]} alt="" />
								</div>
								<p>{city[7]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img src={image[8]} alt="" />
								</div>
								<p>{city[8]}</p>
							</div>
						</div>
						<div>
							<div className="card-box">
								<div className="circle">
									<img src={image[9]} alt="" />
								</div>
								<p>{city[9]}</p>
							</div>
						</div>
					</Slider>
				</div>
			</div>
			<div style={{ marginTop: "25px", display: "flex", justifyContent: "center"}}>
				<button className='slick-previous' onClick={previous}>
					<svg width={14} height={18} viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.6005 1.99992L2.40812 11.1923C2.01759 11.5828 2.01759 12.216 2.40812 12.6065L11.6005 21.7989" stroke="white" strokeWidth={4} />
					</svg>
				</button>
				<button className='slick-nexts' onClick={next}>
					<svg width={14} height={18} viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M2.39949 1.99992L11.5919 11.1923C11.9824 11.5828 11.9824 12.216 11.5919 12.6065L2.39949 21.7989" stroke="#2395FF" strokeWidth={4} />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default TopDestCarousel;
