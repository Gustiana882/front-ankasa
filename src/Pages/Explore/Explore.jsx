import { Container } from 'react-bootstrap';
import SearchFlight from '../../Components/Explore/SearchFlight';
import TopDestCarousel from '../../Components/Explore/TopDestCarousel';
import TrendingCarousel from '../../Components/Explore/TrendingCarousel';
import NavbarHeader from '../../Components/Navbar/NavbarHeader';
import './Explore.scoped.css';

const Explore = () => {
	return (
		<div className="wrapper">
			<div>
				<NavbarHeader />
			</div>

			<div className="SearchFlight">
				<div className="title-hero">
					<p>
						<span className="black">
							Find your <span className="blue">Flight</span>
						</span>
						<br /> <span className="bottom">and explore the world with us</span>
					</p>
				</div>
				<SearchFlight />
			</div>
			<div className="trending-box">
				<Container>
					<div className="title-trending">
						<div className="left">
							<p className="trending-text">TRENDING</p>
							<p className="trending-dest-text">Trending destinations</p>
						</div>
						<div className="right">
							<p className="view-text">View all</p>
						</div>
					</div>
				</Container>
				<div className="trending-carousel">
					<TrendingCarousel />
				</div>
			</div>
			<Container className="top-dest-box">
				<div className="top10-title-box">
					<p className="top10-title">
						<span className="title">TOP 10</span> <br />
						<span className="desc">Top 10 destinations</span>
					</p>
				</div>

				<div className="top-dest-carousel">
					<TopDestCarousel />
				</div>
			</Container>
		</div>
	);
};

export default Explore;
