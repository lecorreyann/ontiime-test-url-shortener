import { State } from '@popperjs/core';
import * as React from 'react';

interface ButtonShortenProps {
	handleCreateLink: any;
}

// Button Shorten Component
export default class ButtonShorten extends React.Component<ButtonShortenProps> {
	constructor(props) {
		super(props);
		this.state = { value: '' };
		this.handleClick = this.handleClick.bind(this);
	}

	// User Click On Shorten Button
	handleClick(event: React.BaseSyntheticEvent): void {
		this.props.handleCreateLink();
	}

	render() {
		return (
			<button
				className='d-block btn btn-lg btn-primary pb-5 col-12'
				onClick={this.handleClick}
			>
				Shorten
			</button>
		);
	}
}
