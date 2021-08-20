import "./sidenav.scoped.css"
import React, { useState } from 'react'
// import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"

function Cards(props) {
    const [image, setImage] = useState(props.image)

    // menyesuaikan kebutuhan

    // const ChangePhoto = async function ChangePhoto(id) {
    //     const body = new FormData();
    //     body.append('id', this.state.id_product);
    //     body.append('name_product', this.state.name_product);
    //     body.append('price_product', price);
    //     body.append('brand_product', this.state.brand_product);
    //     body.append('store_name', this.state.store_name);
    //     body.append('id_category', categories);
    //     body.append('image', this.state.image);
    //     body.append('description', this.state.description);
    //     axios({
    //         method: "POST",
    //         url: `${process.env.REACT_APP_API}/bag/add`,
    //         data: body,
    //         headers: { 'Content-type': 'application/x-www-form-urlencoded', }
    //     }).then((res) => {
    //         alert('berhasil menambahkan product ke keranjang')
    //         console.log(res)
    //     }).catch((err) => {
    //         alert('gagal menambahkan product ke keranjang')
    //     })
    // }

    // const inputImage = (e) => {
    //     const file = e.target.files[0];
    //     if (file.type === "image/jpg" || file.type === "image/png" || file.type === "image/jpeg"){
    //         this.setImage({ image: file })
    //     }
    // }

    return (
        <div className="col">
            <div className="card h-100">
                <div className="mx-auto mt-5 mb-3">
                    <img className="rounded-image" src={props.image} alt="" />
                </div>
                <div className="mx-auto" href="#">
                    <button className="btn-change-img poppins-bold">Change Photo</button>
                </div>
                <h3 className="m-0 mt-3 poppins-bold mx-auto">{props.name}</h3>
                <h6 className="m-0 mt-3 poppins-reguler mx-auto">{props.city}</h6>
                <div className="mt-4 d-flex justify-content-between align-items-center mb-3 container">
                    <h6 className="m-0 poppins-bold">Cards</h6>
                    <h6 className="m-0 poppins-bold color-blue">+ Add</h6>
                </div>
                <div className="pay-card container">
                    <div className="m-2">
                        <h6 className="m-0 poppins-bold text-white">4441 1235 5512 5551</h6>
                        <div className="d-flex mt-1 justify-content-between align-items-center">
                            <small className="m-0 poppins-reguler text-white">X Card</small>
                            <small className="m-0 poppins-reguler text-white">$ Saldo</small>
                        </div>
                    </div>
                </div>
                <div className="mt-4 container mb-5">
                    <div className="d-flex mt-1 align-items-center">
                        <img className="m-0 me-5" src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629425765/Assets%20Ticket/user_alose1.png" alt="" />
                        <small className="m-0 poppins-bold color-blue">Profile</small>
                    </div>
                    <div className="d-flex mt-5 align-items-center">
                        <img className="m-0 me-5" src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629425765/Assets%20Ticket/Vector_dti66l.png" alt="" />
                        <small className="m-0 poppins-bold">My Review</small>
                    </div>
                    <div className="d-flex mt-5 align-items-center">
                        <img className="m-0 me-5" src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629425765/Assets%20Ticket/Vector_1_f1yvuf.png" alt="" />
                        <small className="m-0 poppins-bold">Setting</small>
                    </div>
                    <div className="d-flex mt-5 align-items-center">
                        <img className="m-0 me-5" src="https://res.cloudinary.com/dyli6i0pw/image/upload/v1629425765/Assets%20Ticket/Vector_2_mf7o9r.png" alt="" />
                        <small className="m-0 poppins-bold text-danger">Logout</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards