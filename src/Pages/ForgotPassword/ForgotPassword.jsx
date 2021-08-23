import './ForgotPassword.scoped.css'
import logo from '../../Assets/logo.svg'
import ilustration from '../../Assets/illustration.png'
import { useState } from 'react'
import FormData from 'form-data'

const ForgotPassword = () => {
    const [handleChange, sethandleChange] = useState('')


    const send = () => {
        let formData = new FormData()
        formData.append('email', handleChange)
        console.log(formData.get('email'))
    }

    return (
        <>
            <div className="d-flex">
                <div className="baground-img">
                    <img src={ilustration} alt="" />
                </div>
                <div className="content-wrap">
                    <div className="card border-0">
                        <div className="logo">
                            <img src={logo} alt="logo.svg" />
                            <h3>Ankasa</h3>
                        </div>
                        <h1 className="text-black text-center mb-3">Forgot Password</h1>
                        <div className="form-input">
                            <input className="input-email" placeholder="Email" type="email" onChange={(e) => sethandleChange(e.target.value)}/>
                        </div>
                        <button className="btn-send" onClick={send}>Send</button>
                        <div className="text-center">
                            <small>You'll get message soon your email</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword