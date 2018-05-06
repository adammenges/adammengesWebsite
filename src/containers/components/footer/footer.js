import React from 'react';
import {withRouter} from 'react-router-dom';

import './footer.css';

class Footer extends React.PureComponent {
	render() {
		const {location: {pathname}} = this.props;
		const isSignup = pathname === '/signup';
		const style = isSignup ? {paddingBottom: 0} : {};
		let signupButtonClasses = 'footerJoinBetaLink BodyLarge mobile';
		if (isSignup) {
			signupButtonClasses += ' noDisplay';
		}
		return (
			<div className="footerContainer" style={style}>
				<div className="footer">
					<div className="footerLeft">
						<div className="footerSection">
							<div className="footerHeader">Lobe</div>
							<a className="footerText footerLink" href="/">
								Overview
							</a>
							<a className="footerText footerLink" href="/examples">
								Examples
							</a>
							<a className="footerText footerLink" href="/about">
								About
							</a>
						</div>
						<div className="footerSection">
							<div className="footerHeader">Links</div>
							<a className="footerText footerLink" href="/signup">
								Join Beta
							</a>
							<a
								className="footerText footerLink"
								href="mailto:info@lobe.ai"
								target="_top"
							>
								Contact
							</a>
							<div className="footerText footerLink">Press Kit</div>
						</div>
						<div className="footerSection">
							<div className="footerHeader">Share</div>
							<a
								className="footerText footerLink"
								href="https://twitter.com/lobe_ai"
							>
								Twitter
							</a>
							<a
								className="footerText footerLink"
								href="https://facebook.com/lobeai"
							>
								Facebook
							</a>
						</div>
					</div>
					<div className="footerRight">
						<div className="footerText">Copyright © 2018</div>
						<div className="footerText">Lobe Artificial Intelligence, Inc.</div>
						<div className="footerText">All rights reserved.</div>
					</div>
				</div>
				<div className="footerPeek" />
				<div className={signupButtonClasses}>
					<a href="/signup" className="examplesJoinBeta" target="_blank">
						Join Beta
					</a>
				</div>
			</div>
		);
	}
}

export default withRouter(Footer);
