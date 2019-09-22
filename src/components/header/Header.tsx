import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

type Props = {
	currentUser: any;
};

const Header: React.FC<Props> = ({ currentUser }) => (
	<div className="header">
		<Link to="/" className="logo-container">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/shop">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					{' '}
					SIGNOUT
				</div>
			) : (
				<Link to="/signin">SIGN IN</Link>
			)}
		</div>
	</div>
);

const mapStateToProps = (state: any) => ({
	currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
