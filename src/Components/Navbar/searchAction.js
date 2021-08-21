// import axios from 'axios';
// import {
// 	searchSuccess,
// 	searchFailed,
// } from '../../components/Navbar/searchSlice';

// const urlSearch = `${process.env.REACT_APP_API}/products/search/nama?p=shirt`;
// export const searchProduct = () => async (dispatch) => {
// 	try {
// 		axios.get(urlSearch).then((res) => {
// 			console.log(res.data.data);

// 			const { data } = res.data;
// 			const value = [];
// 			data.map((val) => {
// 				return value.push(val);
// 			});
// 			if (value) return dispatch(searchSuccess(res.data.data));
// 		});
// 	} catch (error) {
// 		console.error(searchFailed('product not found'));
// 	}
// };
