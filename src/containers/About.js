import React from 'react';
import './about.css';

import adamImage from '../assets/us/adam.jpg';
import markusImage from '../assets/us/markus.jpg';
import mikeImage from '../assets/us/mike.jpg';

export default class AboutUs extends React.PureComponent {
	componentDidMount() {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}
		window.scrollTo(0, 0);
	}

	contactUsLink = () => {
		return (
			<a
				href="mailto:info@lobe.ai"
				target="_top"
				className="mainAboutHeaderContactUsLink"
			>
				Contact Us
			</a>
		);
	};

	render() {
		return (
			<div className="section">
				<div className="mainAboutHeader">
					<div className="mainAboutHeaderContactUs BodySmall noMobile">
						{this.contactUsLink()}
					</div>
					<div className="mainAboutHeaderTitle HeadingLarge">Why we care.</div>
					<div className="BodyLarge aboutBody">
						Building deep learning models can be a slow and complicated process.
						It's hard to figure out how to get started, there's a lot of
						technical language to learn, and even once you're all set up, it's
						hard to visualize and understand what you're doing. Most people
						don't stand a chance. That's why we created Lobe, to give more
						people from diverse backgrounds and disciplines the ability to
						invent with deep learning and enable the next wave of intelligent
						products and experiences.
					</div>
					<div className="mainAboutHeaderContactUs BodySmall mobile">
						<br />
						{this.contactUsLink()}
					</div>
				</div>
				<div className="mainAboutHumans">
					<div className="mainAboutHuman">
						<div
							className="mainAboutHumanPhoto"
							style={{
								background: `url(${adamImage}) no-repeat 0 0`,
							}}
						/>
						<div className="mainAboutHumanRightSide">
							<div className="mainAboutHumanName HeadingSmall">Adam Menges</div>
							<div className="mainAboutHumanTitle BodySmall">
								Co-Founder, AI Engineer
							</div>
							<div className="mainAboutHumanText BodySmall">
								Adam is extremely passionate about computing creatively. Whether
								it's through Jupyter style notebooks or through visual
								programming, he believes that the feedback loop between action
								and result needs to be as tight as possible, and that doing so
								increases one’s ability to be creative. He's a strong believer
								in making good technology more accessible, to encourage more
								people to create and share their ideas with the world. In the
								past he worked at Apple and SendGrid, and when he's not working,
								you'll usually find him behind a lens.
							</div>
							<div className="mainAboutHumanNameSocial HeadingCapsXXSmall">
								<a href="http://adammenges.com/" target="_blank">
									Website
								</a>
								<a href="https://www.instagram.com/adammenges/" target="_blank">
									Instagram
								</a>
								<a href="https://twitter.com/adammenges" target="_blank">
									Twitter
								</a>
								<a
									href="https://www.facebook.com/adammenges1337"
									target="_blank"
								>
									Facebook
								</a>
							</div>
						</div>
					</div>
					<div className="mainAboutHuman">
						<div
							className="mainAboutHumanPhoto"
							style={{
								background: `url(${markusImage}) no-repeat 0 0`,
							}}
						/>
						<div className="mainAboutHumanRightSide">
							<div className="mainAboutHumanName HeadingSmall">
								Markus Beissinger
							</div>
							<div className="mainAboutHumanTitle BodySmall">
								Co-Founder, AI Engineer
							</div>
							<div className="mainAboutHumanText BodySmall">
								Markus Beissinger is a graduate of the Jerome Fisher Program in
								Management & Technology at the University of Pennsylvania. He
								continued for a Master's in Computer Science, using deep
								learning for unsupervised sequence prediction problems. He wrote
								OpenDeep, an open-source framework for deep learning using
								Theano, and has a passion for enabling others to create and
								apply machine learning to make all our apps and devices smarter.
								In his free time, Markus likes to produce and listen to
								electronic music.
							</div>
							<div className="mainAboutHumanNameSocial HeadingCapsXXSmall">
								<a href="http://markus.com" target="_blank">
									Website
								</a>
								<a href="https://www.instagram.com/mbeissinger" target="_blank">
									Instagram
								</a>
								<a href="https://twitter.com/mbeissinger" target="_blank">
									Twitter
								</a>
								<a href="http://facebook.com/mbeissinger" target="_blank">
									Facebook
								</a>
							</div>
						</div>
					</div>
					<div className="mainAboutHuman">
						<div
							className="mainAboutHumanPhoto"
							style={{
								background: `url(${mikeImage}) no-repeat 0 0`,
							}}
						/>
						<div className="mainAboutHumanRightSide">
							<div className="mainAboutHumanName HeadingSmall">Mike Matas</div>
							<div className="mainAboutHumanTitle BodySmall">
								Co-Founder, Designer
							</div>
							<div className="mainAboutHumanText BodySmall">
								Mike Matas is an entrepreneur and designer who has helped bring
								to life many groundbreaking products and interfaces over the
								past 15 years. His work can be seen in the Apple iPhone & iPad, Facebook Paper & Instant Articles, Nest Learning Thermostat, Al Gore's Our Choice,
								Origami Studio, and his two previous startups Delicious Library
								and Push Pop Press. He believes the best user interfaces are the
								ones that aren't there. That's why he's excited to explore how
								artificial intelligence can be used to help make technology more
								seamless and invisible in our lives. Outside of designing, Mike
								is a passionate photographer, gardener, husband and dad.
							</div>
							<div className="mainAboutHumanNameSocial HeadingCapsXXSmall">
								<a href="http://www.mikematas.com" target="_blank">
									Website
								</a>
								<a href="https://www.instagram.com/mike_matas/" target="_blank">
									Instagram
								</a>
								<a href="https://twitter.com/mike_matas" target="_blank">
									Twitter
								</a>
								<a href="http://facebook.com/mikematas" target="_blank">
									Facebook
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
