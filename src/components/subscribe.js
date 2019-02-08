import React from 'react';


class Subscribe extends React.Component {
  render() {
		
  	return (
  		<section>
         <div className="container">
            <div className="row">
               <div className="col-md-8 offset-md-2">
                  <div className="footer-text">
                     <img src="assets/images/email.png" alt="email" />
                     <h2 className="title text-center md-margin-top">subscribe to <span>newsletter</span></h2>
                     <p>  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                     <form className="footer-form">
                        <div className="form-group">
                           <input type="email" className="form-control" placeholder="enter your email" />
                        </div>
                        <div className="form-button">
                           <button type="submit" className="btn btn-custom theme-color">send</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
  	);
  }
}


export default Subscribe;