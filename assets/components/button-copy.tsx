import * as React from 'react';

interface ButtonCopyProps {
	link: string;
}

interface ButtonCopyState {
	label: string;
	color: string;
}

// Button Shorten Component
export default class ButtonCopy extends React.Component<
	ButtonCopyProps,
	ButtonCopyState
> {
	constructor(props) {
		super(props);
		this.state = { label: 'Copy', color: 'btn-primary' };
		this.handleClick = this.handleClick.bind(this);
	}

	// User Click On Copy Button
	handleClick(): void {
		// Keep Link On ClipBoard
		navigator.clipboard.writeText(this.props.link);
		// Change Temporary Label Color And Button Color
		this.setState({ label: 'Copied!', color: 'btn-success' });
		setTimeout(
			() => this.setState({ label: 'Copy', color: 'btn-primary' }),
			1000
		);
	}

	render() {
		return (
			<button
				className={`btn d-block d-lg-inline-block btn-sm mt-2 mt-lg-0 ${this.state.color} `}
				onClick={this.handleClick}
			>
				{this.state.label}
			</button>
		);
	}
}
