import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ChangeImageBtn.scoped.css';
import { previewImage, updateImage } from '../../Storages/Slices/profileSlice';

const ChangeImageBtn = () => {
	const [image, setImage] = useState();

	const dispatch = useDispatch();

	const onSubmit = async (data) => {
		if (data.image[0] !== 0) {
			setImage(URL.createObjectURL(data.image[0]));
		}

		try {
			let formData = new FormData();
			formData.append('image', data.image[0]);
			dispatch(updateImage(data.image[0]));
		} catch (error) {
			console.log(error);
		}
	};
	dispatch(previewImage(image));

	const { register, handleSubmit } = useForm();
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="btn-wrapper">
					<input
						type="file"
						className="btn-change-img poppins-bold"
						id="upload-btn"
						required
						{...register('image')}
						hidden
					/>
					<label for="upload-btn">choose Photo</label>
					<button type="submit" className="btn-change-img poppins-bold">
						Select Photo
					</button>
				</div>
			</form>
		</div>
	);
};

export default ChangeImageBtn;
