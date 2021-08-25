import './style/SignupButton.scoped.css';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const SignupButton = () => {
	return (
		<div>
			<Link to="/signup" style={{ textDecoration: 'none' }}>
				<Button className="signup-button">SignUp</Button>
			</Link>
		</div>
	);
};

export default SignupButton;
