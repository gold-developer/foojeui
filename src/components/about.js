import React from 'react';


class About extends React.Component {
  render() {
		
  	return (
  		<section id="about" className="about">
         <div className="about-decor">
            <div className="about-circle1"><img src="assets/images/team1.png" alt="team1" /></div>
            <div className="about-circle2"><img src="assets/images/main-banner1.png" alt="banner1" /></div>
         </div>
         <div className="container">
            <div className="row ">
               <div className="col-md-5">
                  <div className="about-right">
                     <div className="about-phone">
                        {<img  src="assets/images/aboutus.png" className="img-fluid" alt="aboutus" />}
                     </div>
                  </div>
               </div>
               <div className="col-md-7 d-medium-none">
                  <div className="about-contain">
                     <div>
                        <h2 className="title">about <span>FOOJE LLC</span></h2>
                        <p className="caption-about">we would like to let you know a little about Fooje LLC. We started out as VT Scripters LLC, our goal was to build and provide a world class PBX application. In the middle of it all a funny thing happened. We started getting lots and lots of consultant work. In order to accomodate our customers, a whole new approach was needed</p>
                        <div className="row sm-mb">We needed a company that would not only benefit our customers but something that would work equally well for the partners. While VT Scripters was a good name, it did not fully reflect who we are. We've not just Virtual Telecom Scripters, we're more.. We're sons of Haitian refugees and we thought that our company should refelect that. We're the product of hard work, sweat and lots of tears. While we're a technology company we're blue color folks. We believe and doing whatever it takes to get the work done.
                           <div className="col-6">
                              <ul className="about-style">
                                 <li className="abt-hover">
                                    
                                 </li>
                                 <li className="abt-hover">
                                    
                                 </li>
                              </ul>
                           </div>
                           <div className="col-6">
                              <ul className="about-style">
                                 <li className="abt-hover">
                                    
                                 </li>
                                 <li className="abt-hover">
                                    
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="top-margin">
                           <button type="button" className="btn btn-custom theme-color theme-color">view more</button>
                        </div>
                     </div>
                  </div>
               </div>               
            </div>
         </div>
      </section>
  	);
  }
}


export default About;