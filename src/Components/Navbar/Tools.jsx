import React from 'react';
import { Container } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './style/Tools.scoped.css';
import { useForm } from 'react-hook-form';

const Tools = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {};
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
