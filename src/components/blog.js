import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class Blog extends React.Component {
  render() {
      // OwlCarousel Option for Blogs
      const options = {
          0:{
              items:1,
              dots:true,
              margin:5,
          },
          600:{
              items:1,
              dots:true,
              margin:0,
          },
          768:{
              items:2,
              dots:true,
          },
          992:{
              items:3,
          },
          1000:{
              items:2
          }
      };
		
      // Dynamic Blog Data Easy to Update
      let data = [
        {title: 'Custom Phone systems', link:'blog-details', date:'28 December 2017', photo:'9.jpg', username:'Wala Boni', hits:'10', comments:'15'},
        {title: 'Custom Phone systems', link:'blog-details', date:'15 jun 2016', photo:'6.png', username:'johanson let', hits:'15', comments:'30'},
        {title: 'Custom Phone systems', link:'blog-details', date:'10 February 2012', photo:'7.jpg', username:'John Shipmen', hits:'6', comments:'8'},
        {title: 'Custom Phone systems', link:'blog-details', date:'12 march 2015', photo:'8.jpg', username:'Mark jkcno', hits:'10', comments:'50'},
      ];

      // Dynamic Blog Data Loop
      let DataList = data.map((val, i) => {
          return (
            <div className="blog-item" key={i}>
              <div className="blog-block">
                 <div className="blog-box">
                    <div className="overflow-hidden"><a href={val.link}><img src={`assets/images/blog/${val.photo}`} alt="" /></a></div>
                 </div>
              </div>
              <div className="blog-text">
                 <h6>{val.date}</h6>
                 <a href={val.link}>
                    <h3>{val.title}</h3>
                 </a>
                  <h5>Are you tired of paying outrageous prices for an enterprise phone system? Is your vendor trying to nickel and dime you?</h5>
                  <h5>Do you find that hosted PBXs don't offer the features that you need? Look no further than Fooje. We are expert voice developers. We have built anything from call center solutions with webrtc support to conference systems with desktop sharing capabilities. If you can think it, we can build it.</h5>
                  <h5>Let FooJe turn your vision into reality. Seat back, relax, we've got you covered.</h5>
              </div>
           </div>
          );
      });

  	return (
  		<section id="blog" className="blog">
         <div className="about-decor">
            <div className="about-circle1"><img src="assets/images/team1.png" alt="" /></div>
            <div className="about-circle2"><img src="assets/images/main-banner1.png" alt="" /></div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h2 className="title">latest <span>blog</span></h2>
               </div>
               <div className="col-sm-12">
                  <OwlCarousel
                      className="blog-carousel owl-carousel owl-theme"
                      loop={true}
                      margin={30}
                      nav={false}
                      dots={true}
                      responsive={options}
                  >
                     {DataList}
                  </OwlCarousel>
               </div>
            </div>
         </div>
       </section>
  	);
  }
}


export default Blog;