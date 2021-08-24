import React from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import { FaFilter, FaSearch } from 'react-icons/fa';
import './style/Tools.scoped.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { searchSuccess } from './searchSlice';

const Tools = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		// dispatch(searchSuccess(data));
	};

// 	const [allData, setAllData] = useState([]);
//   const [filteredData, setFilteredData] = useState(allData);


//   const handleSearch = (event) => {
//     let value = event.target.value;
//     let result = [];
//     result = allData.filter((data) => {
//       return data.kota.search(value) !== -1;
//     });
//     setFilteredData(result);
//   };

const baseUrl = `${process.env.REACT_APP_API}/destination/all`

const handleSearch = (data) => {
    console.log(data)
		try {
			axios.get(baseUrl, data).then((res) => {
				console.log(res.data);
			});
		} catch (error) {
			console.log(error)
		}
	};

	return (
		<div>
			<Container className="tools d-flex">
				<Container className="search-bar">
					<form
						className="d-flex search-box bg-transparent "
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							type="text"
							placeholder="Where do you want to go?"
							className="search"
							aria-label="Search"
							// onChange={(event) => handleSearch(event)}
							{...register('search')}
						/>

						<button className="btn" variant="primary">
							<FaSearch className="search-icon" type="submit" />
						</button>
					</form>
				</Container>
			</Container>
		</div>
	);
};

export default Tools;
