(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(3);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
	var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
	var render = function render(Comp) {
		renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
	};

	// Render!
	render(_App2.default);
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

var _reactHotLoader = __webpack_require__(6);

var _reactHelmet = __webpack_require__(7);

var _requestPromise = __webpack_require__(8);

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _Home = __webpack_require__(9);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(12);

var _About2 = _interopRequireDefault(_About);

var _reactGa = __webpack_require__(14);

var _reactGa2 = _interopRequireDefault(_reactGa);

__webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var POST_URI = 'https://websitebackend.lobe.ai/';

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			location: false
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_reactGa2.default.initialize('UA-86855870-1'); // Unique Google Analytics tracking number
			if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
				if (this.state.location != window.location.href) {}
			}
		}
	}, {
		key: 'onLocationUpdate',
		value: function onLocationUpdate() {
			// console.log('location update!!')
			if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
				if (this.state.location !== window.location.href) {
					this.setState({ location: window.location.href });
				}
				_reactGa2.default.pageview(window.location.pathname + window.location.search);
			}
			return null;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    signupModal = _state.signupModal,
			    signupValues = _state.signupValues,
			    signupErrors = _state.signupErrors;


			return _react2.default.createElement(
				_reactStatic.Router,
				{
					onUpdate: this.onLocationUpdate,
					autoScrollToTop: false,
					autoScrollToHash: false
				},
				_react2.default.createElement(
					'div',
					{ id: 'bodyWrapper' },
					_react2.default.createElement(
						_reactHelmet.Helmet,
						null,
						_react2.default.createElement('meta', { charSet: 'utf-8' }),
						_react2.default.createElement(
							'title',
							null,
							'Adam Menges'
						),
						_react2.default.createElement('link', { rel: 'canonical', href: 'https://lobe.ai/' }),
						_react2.default.createElement('meta', {
							property: 'og:title',
							content: 'Adam Menges'
						}),
						_react2.default.createElement('meta', { property: 'og:url', content: 'https://lobe.ai' }),
						_react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
						_react2.default.createElement('meta', {
							property: 'og:description',
							content: 'An easy-to-use visual tool that lets you build custom deep learning models, quickly train them, and ship them in your app without writing code.'
						}),
						_react2.default.createElement('meta', {
							property: 'og:image',
							content: 'https://launch.lobe.ai/Lobe-OGImage.jpg'
						}),
						_react2.default.createElement('meta', {
							name: 'description',
							content: 'Lobe is an easy-to-use visual tool that lets you build custom deep learning models, quickly train them, and ship them directly in your app without writing any code.'
						}),
						_react2.default.createElement('meta', {
							name: 'keywords',
							content: 'deep learning, machine learning, ai, artificial intelligence, ML, neural network, tool, editor, graph, programming, visualization, bounding boxes, image classification, regression, convolution, learn, education, design, developer, development, node, code'
						}),
						_react2.default.createElement('meta', {
							name: 'viewport',
							content: 'maximum-scale=1, width=device-width'
						}),
						_react2.default.createElement('meta', { name: 'twitter:card', content: 'summary' }),
						_react2.default.createElement('meta', { name: 'twitter:site', content: '@lobe_ai' }),
						_react2.default.createElement('meta', {
							name: 'viewport',
							content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
						}),
						_react2.default.createElement('meta', { name: 'fb:app_id', content: '1627242127371964' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'content', id: 'allContent' },
						_react2.default.createElement(_reactStatic.Route, { path: '/', component: this.onLocationUpdate.bind(this) }),
						_react2.default.createElement(
							_reactStatic.Switch,
							null,
							_react2.default.createElement(_reactStatic.Route, {
								exact: true,
								path: '/',
								onEnter: this.onLocationUpdate,
								onChange: this.onLocationUpdate,
								render: function render(props) {
									return _react2.default.createElement(_Home2.default, _extends({}, props, {
										signupModal: signupModal,
										enableSignupModal: _this2.enableSignupModal
									}));
								}
							}),
							_react2.default.createElement(_reactStatic.Route, {
								path: '/about',
								strict: false,
								component: _About2.default,
								onEnter: this.onLocationUpdate,
								onChange: this.onLocationUpdate
							})
						)
					)
				)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("request-promise");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _projects = __webpack_require__(10);

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Home);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			width: 0,
			height: 0,
			scrollTo: undefined,
			ready: undefined
		}, _this.makeReady = function () {
			if (!_this.state.ready) {
				_this.setState({
					ready: true
				});
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Home, [{
		key: 'getWindowSize',
		value: function getWindowSize() {
			var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

			var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

			return [width, height];
		}

		// 404 solution from here https://github.com/nozzle/react-static/issues/345

	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (this.props.fourOhFour) {
				this.makeReady();
			}

			if ('scrollRestoration' in window.history) {
				window.history.scrollRestoration = 'manual';
			}
			window.scrollTo(0, 0);
			var updateSize = function updateSize() {
				var size = _this2.getWindowSize();
				_this2.setState({
					width: size[0],
					height: size[1]
				});
			};
			window.onresize = updateSize;
			updateSize();
			this.changeBackground();
		}
	}, {
		key: 'changeBackground',
		value: function changeBackground(color) {
			var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

			if (iOS) {
				document.body.style.background = 'rgb(243,242,243)';
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    width = _state.width,
			    height = _state.height,
			    ready = _state.ready;
			var _props = this.props,
			    signupModal = _props.signupModal,
			    enableSignupModal = _props.enableSignupModal,
			    fourOhFour = _props.fourOhFour;

			return fourOhFour && ready || !fourOhFour ? _react2.default.createElement(
				'div',
				{ id: 'theHomeBody' },
				_react2.default.createElement(_projects2.default, null)
			) : null;
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_React$PureComponent) {
	_inherits(Projects, _React$PureComponent);

	function Projects() {
		_classCallCheck(this, Projects);

		return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));
	}

	_createClass(Projects, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'projectsContainer', className: 'section' },
				_react2.default.createElement(
					'div',
					{
						className: 'HeadingLarge nameHeader',
						'data-aos': 'fade-up',
						'data-aos-anchor-placement': 'top-bottom',
						'data-aos-anchor': '#projectsContainer',
						'data-aos-duration': '1000',
						'data-aos-delay': '0'
					},
					'Adam Menges'
				),
				_react2.default.createElement('div', { className: 'horizontalBar' }),
				_react2.default.createElement(
					'div',
					{
						className: 'BodyLarge',
						'data-aos': 'fade-up',
						'data-aos-anchor-placement': 'top-bottom',
						'data-aos-anchor': '#projectsContainer',
						'data-aos-duration': '1000',
						'data-aos-delay': '200'
					},
					_react2.default.createElement(
						'div',
						{
							className: 'WorkSectionHeader'
						},
						'Work'
					),
					_react2.default.createElement(
						'div',
						{ className: 'WorkSectionBody' },
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyCompany' },
							'Lobe',
							' ',
							' \u2013 ',
							' '
						),
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyTitle' },
							' ',
							'Founder & CEO'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'WorkSectionBody' },
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyCompany' },
							'Apple',
							' ',
							' \u2013 ',
							' '
						),
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyTitle' },
							' ',
							'Machine Learning Engineer / Product Manager'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'WorkSectionBody' },
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyCompany' },
							'SendGrid',
							' ',
							' \u2013 ',
							' '
						),
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyTitle' },
							' ',
							'Machine Learning Engineer'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{
						className: 'BodyLarge',
						'data-aos': 'fade-up',
						'data-aos-anchor-placement': 'top-bottom',
						'data-aos-anchor': '#projectsContainer',
						'data-aos-duration': '1000',
						'data-aos-delay': '200'
					},
					_react2.default.createElement(
						'div',
						{
							className: 'WorkSectionHeader'
						},
						'Projects'
					),
					_react2.default.createElement(
						'div',
						{ className: 'WorkSectionBody' },
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyCompany' },
							'Lobe'
						),
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyImage' },
							'[image or video]'
						),
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyContent' },
							'Visual programing language for developing nural networks. Passion / research project done along side my two co founders -- Mike Matas and Markus Beisinger',
							_react2.default.createElement(
								'div',
								{ className: 'WorkSectionBodyContentListHeader' },
								'Resources:'
							),
							_react2.default.createElement(
								'div',
								{ className: 'WorkSectionBodyContentList' },
								'- website ',
								_react2.default.createElement('br', null),
								'- some article'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'WorkSectionBody' },
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyCompany' },
							'Cloud of Petals'
						),
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyImage' },
							'[image]'
						),
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyContent' },
							'Art peiece that traveled art galiries around the world including Paris, New York, Brussels, Portland, and more. I designed and build the nural network used in Lobe, and generated new rose petals based on a dataset collected by workers in a rented out old Bell Labs building. Sarah and I gathered in my apartment, pointed a RED camera at my iMac, and began filmming the on screen parts of the video over the course of several days.',
							_react2.default.createElement(
								'div',
								{ className: 'WorkSectionBodyContentListHeader' },
								'Resources:'
							),
							_react2.default.createElement(
								'div',
								{ className: 'WorkSectionBodyContentList' },
								'- website ',
								_react2.default.createElement('br', null),
								'- some article'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'WorkSectionBody' },
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyCompany' },
							'Fresh Eyes'
						),
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyImage' },
							'[image or video]'
						),
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyContent' },
							'I lead a workshop at Smart Geoamary 2018. We used machine learning in the generative artitecture process. Letting computers build new buildings all on their own.',
							_react2.default.createElement(
								'div',
								{ className: 'WorkSectionBodyContentListHeader' },
								'Resources:'
							),
							_react2.default.createElement(
								'div',
								{ className: 'WorkSectionBodyContentList' },
								'- website ',
								_react2.default.createElement('br', null),
								'- some article'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'WorkSectionBody' },
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyCompany' },
							_react2.default.createElement(
								'a',
								{ href: 'http://headline.adammenges.com' },
								'Headline'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyImage' },
							'[image or video]'
						),
						_react2.default.createElement(
							'div',
							{ className: 'WorkSectionBodyContent' },
							'Headline sources Hacker News, various sub-reddits, and twitter; then it uses machine learning to extract the best articles (based on my liked and disliked articles over the years), and automatically adds them to a users Pocket/Instapaper account. Thousands of users accross the word.',
							_react2.default.createElement(
								'div',
								{ className: 'WorkSectionBodyContentListHeader' },
								'Resources:'
							),
							_react2.default.createElement(
								'div',
								{ className: 'WorkSectionBodyContentList' },
								'- ',
								_react2.default.createElement(
									'a',
									{ href: 'http://headline.adammenges.com' },
									'Headline'
								),
								_react2.default.createElement('br', null)
							)
						)
					)
				)
			);
		}
	}]);

	return Projects;
}(_react2.default.PureComponent);

exports.default = Projects;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutUs = function (_React$PureComponent) {
	_inherits(AboutUs, _React$PureComponent);

	function AboutUs() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, AboutUs);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AboutUs.__proto__ || Object.getPrototypeOf(AboutUs)).call.apply(_ref, [this].concat(args))), _this), _this.contactUsLink = function () {
			return _react2.default.createElement(
				'a',
				{
					href: 'mailto:info@lobe.ai',
					target: '_top',
					className: 'mainAboutHeaderContactUsLink'
				},
				'Contact Us'
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(AboutUs, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if ('scrollRestoration' in window.history) {
				window.history.scrollRestoration = 'manual';
			}
			window.scrollTo(0, 0);
		}
	}, {
		key: 'render',
		value: function render() {
			// return (
			// 	<div className="section">
			// 		<div className="mainAboutHeader">
			// 			<div className="mainAboutHeaderContactUs BodySmall noMobile">
			// 				{this.contactUsLink()}
			// 			</div>
			// 			<div className="mainAboutHeaderTitle HeadingLarge">Why we care.</div>
			// 			<div className="BodyLarge aboutBody">
			// 				Building deep learning models can be a slow and complicated process.
			// 				It's hard to figure out how to get started, there's a lot of
			// 				technical language to learn, and even once you're all set up, it's
			// 				hard to visualize and understand what you're doing. Most people
			// 				don't stand a chance. That's why we created Lobe, to give more
			// 				people from diverse backgrounds and disciplines the ability to
			// 				invent with deep learning and enable the next wave of intelligent
			// 				products and experiences.
			// 			</div>
			// 			<div className="mainAboutHeaderContactUs BodySmall mobile">
			// 				<br />
			// 				{this.contactUsLink()}
			// 			</div>
			// 		</div>
			// 		<div className="mainAboutHumans">
			// 			<div className="mainAboutHuman">
			// 				<div
			// 					className="mainAboutHumanPhoto"
			// 					style={{
			// 						background: `url(${adamImage}) no-repeat 0 0`,
			// 					}}
			// 				/>
			// 				<div className="mainAboutHumanRightSide">
			// 					<div className="mainAboutHumanName HeadingSmall">Adam Menges</div>
			// 					<div className="mainAboutHumanTitle BodySmall">
			// 						Co-Founder, AI Engineer
			// 					</div>
			// 					<div className="mainAboutHumanText BodySmall">
			// 						Adam is extremely passionate about computing creatively. Whether
			// 						it's through Jupyter style notebooks or through visual
			// 						programming, he believes that the feedback loop between action
			// 						and result needs to be as tight as possible, and that doing so
			// 						increases one’s ability to be creative. He's a strong believer
			// 						in making good technology more accessible, to encourage more
			// 						people to create and share their ideas with the world. In the
			// 						past he worked at Apple and SendGrid, and when he's not working,
			// 						you'll usually find him behind a lens.
			// 					</div>
			// 					<div className="mainAboutHumanNameSocial HeadingCapsXXSmall">
			// 						<a href="http://adammenges.com/" target="_blank">
			// 							Website
			// 						</a>
			// 						<a href="https://www.instagram.com/adammenges/" target="_blank">
			// 							Instagram
			// 						</a>
			// 						<a href="https://twitter.com/adammenges" target="_blank">
			// 							Twitter
			// 						</a>
			// 						<a
			// 							href="https://www.facebook.com/adammenges1337"
			// 							target="_blank"
			// 						>
			// 							Facebook
			// 						</a>
			// 					</div>
			// 				</div>
			// 			</div>
			// 			<div className="mainAboutHuman">
			// 				<div
			// 					className="mainAboutHumanPhoto"
			// 					style={{
			// 						background: `url(${markusImage}) no-repeat 0 0`,
			// 					}}
			// 				/>
			// 				<div className="mainAboutHumanRightSide">
			// 					<div className="mainAboutHumanName HeadingSmall">
			// 						Markus Beissinger
			// 					</div>
			// 					<div className="mainAboutHumanTitle BodySmall">
			// 						Co-Founder, AI Engineer
			// 					</div>
			// 					<div className="mainAboutHumanText BodySmall">
			// 						Markus Beissinger is a graduate of the Jerome Fisher Program in
			// 						Management & Technology at the University of Pennsylvania. He
			// 						continued for a Master's in Computer Science, using deep
			// 						learning for unsupervised sequence prediction problems. He wrote
			// 						OpenDeep, an open-source framework for deep learning using
			// 						Theano, and has a passion for enabling others to create and
			// 						apply machine learning to make all our apps and devices smarter.
			// 						In his free time, Markus likes to produce and listen to
			// 						electronic music.
			// 					</div>
			// 					<div className="mainAboutHumanNameSocial HeadingCapsXXSmall">
			// 						<a href="http://markus.com" target="_blank">
			// 							Website
			// 						</a>
			// 						<a href="https://www.instagram.com/mbeissinger" target="_blank">
			// 							Instagram
			// 						</a>
			// 						<a href="https://twitter.com/mbeissinger" target="_blank">
			// 							Twitter
			// 						</a>
			// 						<a href="http://facebook.com/mbeissinger" target="_blank">
			// 							Facebook
			// 						</a>
			// 					</div>
			// 				</div>
			// 			</div>
			// 			<div className="mainAboutHuman">
			// 				<div
			// 					className="mainAboutHumanPhoto"
			// 					style={{
			// 						background: `url(${mikeImage}) no-repeat 0 0`,
			// 					}}
			// 				/>
			// 				<div className="mainAboutHumanRightSide">
			// 					<div className="mainAboutHumanName HeadingSmall">Mike Matas</div>
			// 					<div className="mainAboutHumanTitle BodySmall">
			// 						Co-Founder, Designer
			// 					</div>
			// 					<div className="mainAboutHumanText BodySmall">
			// 						Mike Matas is an entrepreneur and designer who has helped bring
			// 						to life many groundbreaking products and interfaces over the
			// 						past 15 years. His work can be seen in the Apple iPhone & iPad, Facebook Paper & Instant Articles, Nest Learning Thermostat, Al Gore's Our Choice,
			// 						Origami Studio, and his two previous startups Delicious Library
			// 						and Push Pop Press. He believes the best user interfaces are the
			// 						ones that aren't there. That's why he's excited to explore how
			// 						artificial intelligence can be used to help make technology more
			// 						seamless and invisible in our lives. Outside of designing, Mike
			// 						is a passionate photographer, gardener, husband and dad.
			// 					</div>
			// 					<div className="mainAboutHumanNameSocial HeadingCapsXXSmall">
			// 						<a href="http://www.mikematas.com" target="_blank">
			// 							Website
			// 						</a>
			// 						<a href="https://www.instagram.com/mike_matas/" target="_blank">
			// 							Instagram
			// 						</a>
			// 						<a href="https://twitter.com/mike_matas" target="_blank">
			// 							Twitter
			// 						</a>
			// 						<a href="http://facebook.com/mikematas" target="_blank">
			// 							Facebook
			// 						</a>
			// 					</div>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// );
			return null;
		}
	}]);

	return AboutUs;
}(_react2.default.PureComponent);

exports.default = AboutUs;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.42926493.js.map