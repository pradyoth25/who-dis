import React, { Component } from 'react'

class Testimonials extends Component {

    render() {
        return (
            <React.Fragment>

                {/* Testimonials Section
   ================================================== */}
                <section id="testimonials">
                    <div className="text-container">
                        <div className="row">
                            <div className="two columns header-col">
                                <h1><span>Client Testimonials</span></h1>
                            </div>
                            <div className="ten columns flex-container">
                                <div className="flexslider">
                                    <ul className="slides">
                                        <li>
                                            <blockquote>
                                                <p>In order to prosper in life, one must always be greedy</p>
                                                <cite>Hegde, Pradyoth</cite>
                                            </blockquote>
                                        </li> {/* slide ends */}
                                        <li>
                                            <blockquote>
                                                <p>If Prad's working on something, I know it'll get done.</p>
                                                <cite>Former Manager</cite>
                                            </blockquote>
                                        </li> {/* slide ends */}
                                    </ul>
                                </div> {/* div.flexslider ends */}
                            </div> {/* div.flex-container ends */}
                        </div> {/* row ends */}
                    </div>  {/* text-container ends */}
                </section> {/* Testimonials Section End*/}

            </React.Fragment>
        )
    }

}

export default Testimonials