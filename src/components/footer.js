import React from 'react';


class Footer extends React.Component {
  render() {
		
  	return (
      <div>
    		<section className="p-0">
           <div className="container-fluid">
           <div className="bottom-section">
              <div className="row">
                 <div className="col-md-6 p-0">
                    <div className="address-bar">
                       <div>
                          <ul className="footer-style">
                             <li>
                                <div className="footer-icon">
                                   <img src="assets/images/locate.png" alt="locate" />
                                </div>
                                <div className="footer-address">
                                   <a href={null}>Miami, Florida</a>
                                </div>
                             </li>
                             <li>
                                <div className="footer-icon">
                                   <img src="assets/images/telephone.png" alt="telephone" />
                                </div>
                                <div className="footer-address">
                                    <a href={null}>Coming Soon</a>
                                </div>
                             </li>
                             <li>
                                <div className="footer-icon">
                                   <img src="assets/images/fotter-email.png" alt="fotter-email" />
                                </div>
                                <div className="footer-address">
                                    <a href={null}>fooje@fooje.com</a>
                                </div>
                             </li>
                             <li>
                                <div className="footer-icon">
                                   <img src="assets/images/fax.png" alt="" />
                                </div>
                                <div className="footer-address">
                                    <a href={null}>Coming Soon</a>
                                </div>
                             </li>
                          </ul>
                       </div>
                    </div>
                 </div>
                 <div className="col-md-6 p-0">
                    <iframe title="google-map" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Miami+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed" allowFullScreen className="md-height"></iframe>
                 </div>
              </div>
           </div>
           </div>
        </section>

        <div className="copyright-section index-footer">
            <p>&copy;2019 copyright by Fooje LLC</p>
        </div>

        <div className="tap-top">
           <div>
              <i className="fa fa-angle-double-up"></i>
           </div>
        </div>
      </div>
  	);
  }
}


export default Footer;