import React from 'react';
import Projects from './components/projects/projects';


export default class Home extends React.Component {
	state = {
		width: 0,
		height: 0,
		scrollTo: undefined,
		ready: undefined,
	};

	getWindowSize() {
		const width =
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth;

		const height =
			window.innerHeight ||
			document.documentElement.clientHeight ||
			document.body.clientHeight;

		return [width, height];
	}

	// 404 solution from here https://github.com/nozzle/react-static/issues/345
	makeReady = () => {
		if (!this.state.ready) {
			this.setState({
				ready: true,
			});
		}
	};

	componentDidMount() {
		if (this.props.fourOhFour) {
			this.makeReady();
		}

		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}
		window.scrollTo(0, 0);
		const updateSize = () => {
			const size = this.getWindowSize();
			this.setState({
				width: size[0],
				height: size[1],
			});
		};
		window.onresize = updateSize;
		updateSize();
		this.changeBackground();
	}

	changeBackground(color) {
		const iOS =
			/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

		if (iOS) {
			document.body.style.background = 'rgb(243,242,243)';
		}
	}

	render() {
		const {width, height, ready} = this.state;
		const {signupModal, enableSignupModal, fourOhFour} = this.props;
		return (fourOhFour && ready) || !fourOhFour ? (
			<div id="theHomeBody">
				<Projects />
			</div>
		) : null;
	}
}
