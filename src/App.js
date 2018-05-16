import React from 'react';
import {Router, Route, Switch} from 'react-static';
import {hot} from 'react-hot-loader';
import {Helmet} from 'react-helmet';
import rp from 'request-promise';
import Home from './containers/Home';
import About from './containers/About';
import ReactGA from 'react-ga';

import './app.css';

const POST_URI = 'https://websitebackend.lobe.ai/';

class App extends React.Component {
	state = {
		location: false,
	};

	componentDidMount() {
		ReactGA.initialize('UA-86855870-1'); // Unique Google Analytics tracking number
		if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
			if (this.state.location != window.location.href) {
			}
		}
	}

	onLocationUpdate() {
		// console.log('location update!!')
		if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
			if (this.state.location !== window.location.href) {
				this.setState({location: window.location.href});
			}
			ReactGA.pageview(window.location.pathname + window.location.search);
		}
		return null;
	}

	render() {
		const {signupModal, signupValues, signupErrors} = this.state;

		return (
			<Router
				onUpdate={this.onLocationUpdate}
				autoScrollToTop={false}
				autoScrollToHash={false}
			>
				<div id="bodyWrapper">
					<Helmet>
						<meta charSet="utf-8" />
						<title>Adam Menges</title>
						<link rel="canonical" href="https://lobe.ai/" />
						<meta
							property="og:title"
							content="Adam Menges"
						/>
						<meta property="og:url" content="https://lobe.ai" />
						<meta property="og:type" content="website" />
						<meta
							property="og:description"
							content="An easy-to-use visual tool that lets you build custom deep learning models, quickly train them, and ship them in your app without writing code."
						/>
						<meta
							property="og:image"
							content="https://launch.lobe.ai/Lobe-OGImage.jpg"
						/>
						<meta
							name="description"
							content="Lobe is an easy-to-use visual tool that lets you build custom deep learning models, quickly train them, and ship them directly in your app without writing any code."
						/>
						<meta
							name="keywords"
							content="deep learning, machine learning, ai, artificial intelligence, ML, neural network, tool, editor, graph, programming, visualization, bounding boxes, image classification, regression, convolution, learn, education, design, developer, development, node, code"
						/>
						<meta
							name="viewport"
							content="maximum-scale=1, width=device-width"
						/>

						<meta name="twitter:card" content="summary" />
						<meta name="twitter:site" content="@lobe_ai" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
						/>
						<meta name="fb:app_id" content="1627242127371964" />
					</Helmet>
					<div className="content" id="allContent">
						{/* https://github.com/ReactTraining/react-router/issues/4278 */}
						<Route path="/" component={this.onLocationUpdate.bind(this)} />
						<Switch>
							<Route
								exact
								path="/"
								onEnter={this.onLocationUpdate}
								onChange={this.onLocationUpdate}
								render={props => (
									<Home
										{...props}
										signupModal={signupModal}
										enableSignupModal={this.enableSignupModal}
									/>
								)}
							/>
							<Route
								path="/about"
								strict={false}
								component={About}
								onEnter={this.onLocationUpdate}
								onChange={this.onLocationUpdate}
							/>
							{/*404 solution from here https://github.com/nozzle/react-static/issues/345*/}
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default hot(module)(App);
