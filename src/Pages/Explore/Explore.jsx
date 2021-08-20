import { Container } from 'react-bootstrap';
import SearchFlight from '../../Components/Explore/SearchFlight';
import TrendingCarousel from '../../Components/Explore/TrendingCarousel';
import NavbarHeader from '../../Components/Navbar/NavbarHeader';
import './Explore.scoped.css';

const Explore = () => {
	return (
		<div>
			<div className="navbar-header">
				<NavbarHeader />
			</div>

			<div className="SearchFlight">
				<SearchFlight />
			</div>
			<div className="trending-box">
				<div className="title-trending">
					<div className="left">
						<p>TRENDING</p>
						<p>Trending destinations</p>
					</div>
					<div className="right">
						<p>View all</p>
					</div>
				</div>
				{/* <TrendingCarousel /> */}
			</div>
		</div>
	);
};

export default Explore;
