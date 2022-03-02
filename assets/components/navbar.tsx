import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavBarProps {}

export default class NavBar extends React.Component<NavBarProps> {
	render() {
		return (
			<Router>
				<nav className='navbar navbar-expand-lg navbar-light bg-white px-0 py-3'>
					<div className='container-xl'>
						{/* Logo */}
						<a className='navbar-brand' href='#'>
							<img
								src='https://wio.blob.core.windows.net/werecruit/82d7d4aa-41c7-404c-85f1-68304bbeefef.png?sv=2016-05-31&sr=b&sig=LYEPMlQgKDBGeA%2BOoXaky47%2BYENKlFuXpjgwI7%2Fd4SI%3D&st=2022-02-28T23%3A19%3A55Z&se=2025-02-28T23%3A24%3A55Z&sp=r'
								className='h-8'
								alt='...'
							/>
						</a>
						{/* Navbar toggle */}
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarCollapse'
							aria-controls='navbarCollapse'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						{/* Collapse */}
						<div className='collapse navbar-collapse' id='navbarCollapse'>
							{/* Nav */}
							<div className='navbar-nav mx-lg-auto'>
								<a
									className='nav-item nav-link active'
									href='#'
									aria-current='page'
								>
									Home
								</a>
								<a className='nav-item nav-link' href='#'>
									Product
								</a>
								<a className='nav-item nav-link' href='#'>
									Features
								</a>
								<a className='nav-item nav-link' href='#'>
									Pricing
								</a>
							</div>
							{/* Right navigation */}
							<div className='navbar-nav ms-lg-4'>
								<a className='nav-item nav-link' href='#'>
									Sign in
								</a>
							</div>
							{/* Action */}
							<div className='d-flex align-items-lg-center mt-3 mt-lg-0'>
								<a href='#' className='btn btn-sm btn-primary w-full w-lg-auto'>
									Register
								</a>
							</div>
						</div>
					</div>
				</nav>
			</Router>
		);
	}
}
