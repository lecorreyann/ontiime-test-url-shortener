import * as React from 'react';
import LinkType from '../types/link';
import ButtonCopy from './button-copy';

interface LinksProps {
	links: LinkType[];
}

// Links list
export default class ButtonShorten extends React.Component<LinksProps> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.links.map((link, index) => (
					<div className='mb-10 mb-lg-2'>
						<div
							className='d-flex flex-column flex-lg-row flex-wrap justify-content-between gap-2'
							key={index}
						>
							<div>{link.origin}</div>
							<div className='d-flex flex-column flex-lg-row flex-wrap gap-2 align-items-lg-center'>
								<a
									href={process.env.BASE_URL + '/' + link.short}
									target='_blank'
								>
									{process.env.BASE_URL + '/' + link.short}
								</a>
								<ButtonCopy link={process.env.BASE_URL + '/' + link.short} />
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}
