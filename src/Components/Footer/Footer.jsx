import './Footer.scoped.css'
import logo from '../../Assets/logo.svg'
import appStore from '../../Assets/app-store.svg'
import googleStore from '../../Assets/google-play.svg'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="content">
                    <div className="about">
                        <div className="img-logo">
                            <img src={logo} alt="" />
                            <h3>Ankasa</h3>
                        </div>
                        <p>Find your Flight and explore the 
                            <br /> world with us. We will take care of the rest</p>
                    </div>
                    <div className="features">
                        <ul>
                            <h5>Features</h5>
                            <li><p>Find Ticket</p></li>
                            <li><p>My Booking</p></li>
                            <li><p>Chat</p></li>
                            <li><p>Notification</p></li>
                        </ul>
                    </div>
                    <div className="download">
                        <h5>Download Angkasa app</h5>
                        <div>
                            <img src={appStore} alt="" />
                        </div>
                        <div>
                            <img src={googleStore} alt="" />
                        </div>
                    </div>
                    <div className="follow">
                        <h5>Follow Us</h5>
                        <div className="sosmed">
                            <span className="facebook">
                                <svg
                                    width={13}
                                    height={22}
                                    viewBox="0 0 13 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
                                        stroke="#595959"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <span className="twiter">
                                <svg
                                    width={24}
                                    height={21}
                                    viewBox="0 0 24 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M23 2.00005C22.0424 2.67552 20.9821 3.19216 19.86 3.53005C19.2577 2.83756 18.4573 2.34674 17.567 2.12397C16.6767 1.90121 15.7395 1.95724 14.8821 2.2845C14.0247 2.61176 13.2884 3.19445 12.773 3.95376C12.2575 4.71308 11.9877 5.61238 12 6.53005V7.53005C10.2426 7.57561 8.50127 7.18586 6.93101 6.39549C5.36074 5.60513 4.01032 4.43868 3 3.00005C3 3.00005 -1 12 8 16C5.94053 17.398 3.48716 18.099 1 18C10 23 21 18 21 6.50005C20.9991 6.2215 20.9723 5.94364 20.92 5.67005C21.9406 4.66354 22.6608 3.39276 23 2.00005V2.00005Z"
                                        stroke="#595959"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <span className="instagram">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                                        stroke="#595959"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M15.9997 11.3701C16.1231 12.2023 15.981 13.0523 15.5935 13.7991C15.206 14.5459 14.5929 15.1515 13.8413 15.5297C13.0898 15.908 12.2382 16.0397 11.4075 15.906C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1903 8.22744 13.4229 8.09377 12.5923C7.96011 11.7616 8.09177 10.91 8.47003 10.1584C8.84829 9.40691 9.45389 8.7938 10.2007 8.4063C10.9475 8.0188 11.7975 7.87665 12.6297 8.00006C13.4786 8.12594 14.2646 8.52152 14.8714 9.12836C15.4782 9.73521 15.8738 10.5211 15.9997 11.3701Z"
                                        stroke="#595959"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M17.5 6.5H17.51"
                                        stroke="#595959"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <span className="youtube">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M22.5396 6.42C22.4208 5.94541 22.1789 5.51057 21.8382 5.15941C21.4976 4.80824 21.0703 4.55318 20.5996 4.42C18.8796 4 11.9996 4 11.9996 4C11.9996 4 5.1196 4 3.3996 4.46C2.92884 4.59318 2.50157 4.84824 2.16094 5.19941C1.82031 5.55057 1.57838 5.98541 1.4596 6.46C1.14481 8.20556 0.990831 9.97631 0.999595 11.75C0.988374 13.537 1.14236 15.3213 1.4596 17.08C1.59055 17.5398 1.8379 17.9581 2.17774 18.2945C2.51758 18.6308 2.93842 18.8738 3.3996 19C5.1196 19.46 11.9996 19.46 11.9996 19.46C11.9996 19.46 18.8796 19.46 20.5996 19C21.0703 18.8668 21.4976 18.6118 21.8382 18.2606C22.1789 17.9094 22.4208 17.4746 22.5396 17C22.852 15.2676 23.0059 13.5103 22.9996 11.75C23.0108 9.96295 22.8568 8.1787 22.5396 6.42V6.42Z"
                                        stroke="#595959"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9.75 15.02L15.5 11.75L9.75 8.47998V15.02Z"
                                        stroke="#595959"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p> Ankasa. All Rights Reserved</p>
                    <div className="country">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        <p>Jakarta Indonesia</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer