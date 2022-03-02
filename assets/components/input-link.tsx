import * as React from 'react';

interface InputLinkProps {
	col: string;
	onPressKey: any;
	onLinkChange: any;
	error: string | null;
	link: string;
}

// Input Link Component
export default class InputLink extends React.Component<InputLinkProps> {
	constructor(props) {
		super(props);
		this.state = { value: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handlePressKey = this.handlePressKey.bind(this);
	}

	// Input Value (link) Has Changed
	handleChange(event: React.BaseSyntheticEvent): void {
		this.props.onLinkChange(event.target.value);
	}

	// On User Press Key Check If Pressed Key Is Key Enter
	handlePressKey(event: React.KeyboardEvent<HTMLInputElement>): void {
		this.props.onPressKey(event.key);
	}

	render() {
		return (
			<div className={'form-floating ' + this.props.col}>
				<input
					type='link'
					className={`form-control ${this.props.error ? 'is-invalid' : ''}`}
					id='formInputLink'
					placeholder='Domain.com'
					onChange={this.handleChange}
					onKeyDown={this.handlePressKey}
					value={this.props.link}
				/>
				<span className='mt-2 invalid-feedback'>{this.props.error}</span>
				<label htmlFor='formInputLink'>Shorten your link</label>
			</div>
		);
	}
}
