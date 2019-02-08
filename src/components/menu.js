import React from 'react';

class Menu extends React.Component {
    render() {
        var divStyle = {
            padding: 0,

        };
        return (
            // OwlCarousel Option for Testimonial
            <section className="home_recent_news_wrap column-6">
                <ul className="newsticker clearfix" style={divStyle}>
                    <li>
                        <h6>Food &amp; Health</h6>
                        <h5><a
                            href="https://demo.accesspressthemes.com/bloger-pro/main/weddings-this-flawless-wakesurfing-proposal-is-as-romantic-as-it-is-impressive/">
                            Learn by Connection</a></h5>
                    </li>
                    <li>
                        <h6>Food &amp; Health</h6>
                        <h5><a href="https://demo.accesspressthemes.com/bloger-pro/main/health-tips/">
                            Learn by Category</a></h5>
                    </li>
                    <li>
                        <h6>Food &amp; Health</h6>
                        <h5><a href="https://demo.accesspressthemes.com/bloger-pro/main/vivamus-elementum/">
                            Learn by Languages</a></h5>
                    </li>
                    <li>
                        <h6>Food &amp; Health</h6>
                        <h5><a href="https://demo.accesspressthemes.com/bloger-pro/main/summer-outfits/">
                            Learn by Popular</a>
                        </h5>
                    </li>
                    <li>
                        <h6>Food &amp; Health</h6>
                        <h5><a href="https://demo.accesspressthemes.com/bloger-pro/main/high-above-the-sky/">
                            Learn by plan</a></h5>
                    </li>
                    <li>
                        <h6>Learn By Interviews</h6>
                        <h5><a href="https://demo.accesspressthemes.com/bloger-pro/main/best-blogging-theme/">Learn by
                            Interviews</a></h5>
                    </li>
                </ul>
            </section>
        );
    }
}


export default Menu;