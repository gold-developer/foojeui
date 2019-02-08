import React from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Feature from './components/feature';
import Team from './components/team';
import Blog from './components/blog';
import Price from './components/price';
import Contact from './components/contact';
import Subscribe from './components/subscribe';
import Footer from './components/footer';
import Tilt from 'react-tilt';

class HomeOne extends React.Component {
  render() {
  	document.body.classList.remove('landing-page');
	document.body.classList.remove('home-style');
  	document.body.classList.remove('three');
  	document.body.classList.remove('home-style-two');
  	return (
  		<div>
  			{/* Navbar Component*/}
  			<Navbar />

  			{/* Home One Section Start */}
  			<section id="home" className="home">
			   <div className="home-decor">
			      <div className="home-circle1"><img  src="assets/images/main-banner3.png" alt="" /></div>
			      <div className="home-circle2"><img src="assets/images/main-banner12.png" alt="" /></div>
			      <div className="home-circle3"><img src="assets/images/main-banner1.png" alt="" /></div>
			   </div>
			   <div className="container">
			      <div className="row">
			         <div className="col-md-5">
			            <div className="home-contain">
			               <div>
									<div>
			                  <span style={{textAlign:'center'}}><h4>Welcome to</h4></span>
										<span style={{textAlign:'center'}}><h1><span className="f-bold">FOOJE </span> LLC</h1></span>
										<span style={{textAlign:'center'}}><h4>Home of the Visual IVR</h4></span>
									</div>
									<br/>

			                  <p>What is an IVR? The better question should be "What should an IVR do?"<br/>

The answer to that question is "what ever your business require". Sounds simple enough right? Well, it depends on your provider.<br/>

At FooJe our job is to listen, take notes, make suggestions when needed and build kick ass solutions. We're a team of 5 developers with a combine 40 years of Telecom experience. We've work with CLECs as well as some Fortune 1000 companies. However, your treatment isn't based on your size. Whether you're a team of 5 like we are or a fortune 500 company. We will cater a solution for you.</p>
			               </div>
			            </div>
			         </div>
			         <div className="col-sm-6 offset-md-1">
			            <div className="home-right">
				            <Tilt options={{ perspective: 110, speed: 400, max: 1.2, scale:1 }}>
				               <img src="assets/images/mobile.png" className="img-fluid" alt="mobile" />
				            </Tilt>
			            </div>
			         </div>
			      </div>
			   </div>
			</section>
  			{/* Home One Section End */}

			{/* About Component*/}
			<About />

			{/*Feature Component*/}
			<Feature />

			{/*Team Component*/}
			<Team />

			{/*Blog Component*/}
			<Blog />

			{/*Price Component*/}
			<Price />
			
			{/*Contact Component*/}
			<Contact />

			{/*Subscription Component*/}
			<Subscribe />

			{/*Footer Component*/}
			<Footer />
  		</div>
  	);
  }
}

export default HomeOne;