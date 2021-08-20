import SearchFlight from '../../Components/Explore/SearchFlight';
import TrendingCarousel from '../../Components/Explore/TrendingCarousel';
import NavbarHeader from '../../Components/Navbar/NavbarHeader';
import './Explore.scoped.css';

const Explore = () => {
	return (
		<div className="wrapper">
			<NavbarHeader />
			<div className="SearchFlight">
				<SearchFlight />
			</div>
			<TrendingCarousel />
		</div>
	);
};

export default Explore;
