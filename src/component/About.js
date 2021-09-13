import React, { Component } from 'react';

class About extends Component {

    render() {
      let aboutmeData = this.props.aboutmeData;
        return (
            <React.Fragment>

                 {/* About Section
   ================================================== */}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p> {aboutmeData.about} </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{aboutmeData.contact.name}</span><br />
                  <span>{aboutmeData.contact.address}
                  </span><br />
                  <span>{aboutmeData.contact.phone}</span><br />
                  <span>{aboutmeData.contact.email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="Pradyoth_Resume.pdf" className="button" download> <i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}

            </React.Fragment>
        )
    }

}

export default About