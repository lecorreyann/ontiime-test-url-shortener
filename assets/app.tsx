// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/navbar';
import InputLink from './components/input-link';
import Links from './components/links';
import ButtonShorten from './components/button-shorten';
import APIService from './services/api';
import LinkType from './types/link';

interface AppProps {}

interface AppState {
	link: string | null;
	links: LinkType[];
	error: string;
}

class App extends React.Component<AppProps, AppState> {
	constructor(props) {
		super(props);
		this.handleCreateLink = this.handleCreateLink.bind(this);
		this.handleLinkChange = this.handleLinkChange.bind(this);
		this.handleOnPressKey = this.handleOnPressKey.bind(this);
		this.state = { error: null, link: '', links: [] };
	}

	componentDidMount() {
		this.getLinksFromLocalStorage();
	}

	// Update Link Inside State (without redux for ontiime test)
	handleLinkChange(link: string): void {
		this.setState({ link: link });
	}

	// Create Link
	handleCreateLink(): void {
		APIService.createLink({ link: this.state.link })
			.then((response) => {
				this.setState({ link: '', error: null });
				this.setLinkOnLocalStorage(response.data);
				this.getLinksFromLocalStorage();
			})
			.catch((error) => {
				console.log(error);
				this.setState({ error: error.response.data.violations[0].title });
			});
	}

	// Keep Link On LocalStorage
	setLinkOnLocalStorage(linkFromDb: LinkType) {
		let links = JSON.parse(localStorage.getItem('links')) || [];
		links = links.reverse();
		links.push(linkFromDb);
		console.log(links);
		localStorage.setItem('links', JSON.stringify(links.reverse()));
	}

	// Get Links From Db
	getLinks() {
		APIService.listLinks()
			.then((response) => {
				this.setState({ links: response.data });
			})
			.catch((error) => {
				this.setState({ error: error.response.data.violations[0].title });
			});
	}

	// Get Links From LocalStorage
	getLinksFromLocalStorage() {
		let links = JSON.parse(localStorage.getItem('links')) || [];
		this.setState({ links: links });
	}

	// Handle Press Key Enter
	handleOnPressKey(key: string): void {
		if (key.toLowerCase() === 'enter') {
			this.handleCreateLink();
		}
	}

	// Render App Template
	render() {
		return (
			<div>
				{/* navigation bar component */}
				<NavBar />
				<div className=' pt-24 pb-24 bg-dark'>
					<div className='container-xl'>
						<div className='row row-grid align-items-center'>
							<div className='col-lg-6'>
								{/* Title */}
								<h1 className='ls-tight font-bolder display-6 text-white mb-5'>
									Short links, big results
								</h1>
								{/* Text */}
								<p className='lead text-white text-opacity-80 mb-10'>
									A URL shortener built with powerful tools to help you grow and
									protect your brand.
								</p>
							</div>

							<div className='d-flex flex-wrap justify-content-between align-items-stretch'>
								{/* Form */}
								<InputLink
									col='col-12 col-lg-9 pe-lg-5'
									onPressKey={this.handleOnPressKey}
									onLinkChange={this.handleLinkChange}
									error={this.state.error ? this.state.error : null}
									link={this.state.link}
								/>

								{/* Button */}
								<div className='col-12 col-lg-3 mt-2 mt-lg-0'>
									<ButtonShorten handleCreateLink={this.handleCreateLink} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=' pt-24 pb-24'>
					{/* List */}
					<div className='container-xl'>
						<Links links={this.state.links} />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
