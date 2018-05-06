import React from 'react';
import {Link, NavLink} from 'react-static';
import {withRouter} from 'react-router-dom';
import logoImg from '../../../assets/logo.png';

import './header.css';

const isBaseActive = location => {
	return location && (location.pathname === '/' || location.pathname === '');
};

const isAboutActive = location => {
	return (
		location &&
		(location.pathname === '/about' || location.pathname === '/about/')
	);
};

const isExamplesActive = location => {
	return location && location.pathname.startsWith('/examples');
};

export default class Header extends React.PureComponent {
	componentDidMount() {
		var el = document.getElementById('hello');
		if (el) {
			el.className += el.className ? ' someClass' : 'someClass';
		}
	}

	// https://github.com/nozzle/react-static/issues/469

	render() {
		const {signupModal, enableSignupModal} = this.props;
		let isSignup = false;
		let aboutClasses = 'navText navCenter'; // + (aboutActive ? " navSelected " : '')
		let examplesClasses = 'navText navCenter'; // + (examplesActive ? " navSelected " : '')
		let baseClasses = 'navText navCenter'; // + (baseActive ? " navSelected " : '')

		// if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
		if (this.props.locationHref) {
			if (this.props.locationHref.includes('about')) {
				console.log('readding navSelected');
				aboutClasses += ' navSelected';
			} else if (this.props.locationHref.includes('example')) {
				examplesClasses += ' navSelected';
			} else if (this.props.locationHref.includes('signup')) {
				isSignup = true;
			} else {
				baseClasses += ' navSelected';
			}
		}

		return (
			<div className="headerContainer">
				<div className="headerPeek" />
				<nav className="header">
					<div className="headerLogo">
						<Link to="/">
							<img src={logoImg} alt="Lobe" />
						</Link>
					</div>
					<div className="headerBetaSignup">
						<div
							className="navText"
							onClick={
								!signupModal && !isSignup ? enableSignupModal : () => null
							}
						>
							Join Beta
						</div>
					</div>
					<div className="headerNav">
						<NavLink
							to="/"
							className={baseClasses}
							isActive={isAboutActive}
							activeClassName={'navSelected'}
						>
							Overview
						</NavLink>
						<NavLink
							to="/examples"
							href="/examples"
							className={examplesClasses}
							isActive={isAboutActive}
							activeClassName={'navSelected'}
						>
							Examples
						</NavLink>
						<NavLink
							to="/about"
							className={aboutClasses}
							isActive={isAboutActive}
							activeClassName={'navSelected'}
						>
							About
						</NavLink>
					</div>
				</nav>
			</div>
		);
	}
}

// export default withRouter(Header);
