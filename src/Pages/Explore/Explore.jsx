import SearchFlight from '../../Components/Modals/SearchFlight';
import NavbarHeader from '../../Components/Navbar/NavbarHeader';
import './Explore.scoped.css';

const Explore = () => {
	return (
		<div className="wrapper">
			<NavbarHeader />
			<div className="SearchFlight">
				<SearchFlight />
			</div>
		</div>
	);
};

export default Explore;
