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
	return (
		<div>
			<Container className="tools">
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
