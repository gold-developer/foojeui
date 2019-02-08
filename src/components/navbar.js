import React from 'react';

const logoimg = {
        width: '132px',
        height: '40px',
    };

class Navbar extends React.Component {
  render() {
  	return (
  		<nav className="navbar navbar-expand-lg navbar-light theme-nav fixed-top">
		   <div className="container">
		      <a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}><img src="assets/images/logo.png" alt="logo" style={logoimg} /></a>
		      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		         <span className="navbar-toggler-icon"></span>
		      </button>
		      <div className="collapse navbar-collapse default-nav" id="navbarSupportedContent">
		         	<ul className="navbar-nav ml-auto" id="mymenu">
			            <li className="nav-item">
			               <a className="nav-link" href="#home">Home</a>
			            </li>
			            <li className="nav-item">
			               <a className="nav-link" href="#about">about</a>
			            </li>
			            <li className="nav-item">
			               <a className="nav-link" href="#feature">feature</a>
			            </li>
			            <li className="nav-item dropdown">
			               <a className="nav-link" href="#blog">blog</a>			               
			            </li>
			            <li className="nav-item">
			               <a className="nav-link" href="#contact" data-menuanchor="contact">contact us</a>
			            </li>
							<li className="nav-item">
			               <a className="nav-link" href={`${process.env.PUBLIC_URL}/sign-in`} data-menuanchor="contact">sign in</a>
			            </li>
							<li className="nav-item">
			               <a className="nav-link" href={`${process.env.PUBLIC_URL}/sign-up`} data-menuanchor="contact">sign up</a>
			            </li>
		         	</ul>
		      </div>
		   </div>
		</nav>
  	);
  }
}

export default Navbar;