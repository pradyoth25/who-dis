import React, { Component } from 'react'
import { ReactDOM } from 'react';
import emailjs from 'emailjs-com';
import Alert from 'react-popup-alert';
import { ToastContainer, toast } from 'react-toastify';

const TEMPLATE_ID = 'template_djj9cck';
const SERVICE_ID = 'service_7p2qbcf';
const USER_ID = 'user_B5T2cI2ZJz5gWl9frcsnO';

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {emailSuccess: false}
    }
    
    
    render() {
        
        function clearFields(e) {
            document.getElementById('contactName').value = "";
            document.getElementById('contactName').disabled=true;
            document.getElementById('contactName').style.backgroundColor = "#CCCCCC";

            document.getElementById('contactEmail').value = "";
            document.getElementById('contactEmail').disabled=true;
            document.getElementById('contactEmail').style.backgroundColor = "#CCCCCC";

            document.getElementById('contactSubject').value = "";
            document.getElementById('contactSubject').disabled=true;
            document.getElementById('contactSubject').style.backgroundColor = "#CCCCCC";

            document.getElementById('contactMessage').value = "";
            document.getElementById('contactMessage').disabled=true;
            document.getElementById('contactMessage').style.backgroundColor = "#CCCCCC";
            return (<div id="message-success">
                    <i className="fa fa-check" />Your message was sent, thank you!<br />
                    </div>)

        }

        function successEmail(params) {
            return (<div id="message-success">
                        <i className="fa fa-check" />Your message was sent, thank you!<br />
                        </div>)
        }

        function failureEmail(params) {
            return (<div id="message-warning"> Error boy</div>)
        }

        function onClickTest(e) {
            console.log("AIDSSDSDSFDSDSDSDS clicked HERE");
        }

        function sendEmail(e) {
            e.preventDefault();
            console.log("ONSUBMIT!!!!!!!!");
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
                .then((result) => {
                    console.log(result.text);
                    clearFields();
                    // Popup.alert('Your message was sent, thank you!');
                    window.alert('Your message was sent, thank you!');
                }, (error) => {
                    console.log(error.text);
                    // Popup.alert('Error boy');
                    window.alert('Error boy');
                });

            return 

        }


        return (
            <React.Fragment>

                {/* Contact Section
   ================================================== */}
                <section id="contact">
                    <div className="row section-head">
                        <div className="two columns header-col">
                            <h1><span>Get In Touch.</span></h1>
                        </div>
                        <div className="ten columns">
                            <p className="lead">Find something on this page that you like? <br/>
                            Just want to talk? <br/>
                            Have any questions? <br/>
                            Feel free to reach out!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="eight columns">
                            {/* form */}
                            <form 
                            // action method="post" 
                            id="contactForm" name="contactForm" onSubmit={sendEmail}>
                                <fieldset>
                                    <div>
                                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                                        <input type="text" placeholder="First Last" size={35} id="contactName" name="contactName" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                        <input type="text" placeholder="name@email-address.com" size={35} id="contactEmail" name="contactEmail" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="contactSubject">Subject</label>
                                        <input type="text" placeholder="Subject" size={35} id="contactSubject" name="contactSubject" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                        <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} required/>
                                    </div>
                                    <div>
                                        <button className="submit" onClick={onClickTest}>Submit</button>
                                        <span id="image-loader">
                                            <img alt="" src="images/loader.gif" />
                                        </span>
                                    </div>
                                </fieldset>
                            </form> {/* Form End */}
                            {/* contact-warning */}
                            <div id="message-warning"> Error boy</div>
                            {/* contact-success */}
                            <div id="message-success">
                                <i className="fa fa-check" />Your message was sent, thank you!<br />
                            </div>
                        </div>

                        <aside className="four columns footer-widgets">
                            <div className="widget widget_contact">
                                <h4>Address and Phone</h4>
                                <p className="address">
                                    Pradyoth Hegde<br />
                                    Chicago, IL <br />
                                    <span>(224)-409-9709 <br /></span>
                                    <span>hegdepradyoth@gmail.com</span>
                                </p>
                            </div>

                            {/* <div className="widget widget_tweets">
                                <h4 className="widget-title">Latest Tweets</h4>
                                <ul id="twitter">
                                    <li>
                                        <span>
                                            This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                                        </span>
                                        <b><a href="#">2 Days Ago</a></b>
                                    </li>
                                    <li>
                                        <span>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                            eaque ipsa quae ab illo inventore veritatis et quasi
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                                        </span>
                                        <b><a href="#">3 Days Ago</a></b>
                                    </li>
                                </ul>
                            </div> */}

                        </aside>
                    </div>
                </section> {/* Contact Section End*/}

            </React.Fragment>
        )
    }

}