import React, { Component } from 'react'

class Resume extends Component {

    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>

                {/* Resume Section
   ================================================== */}
                <section id="resume">
                    {/* Education
      ----------------------------------------------- */}
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Northwestern University</h3>
                                    <p className="info">Master of Science (M.S.) in Computer Engineering <span>•</span> <em className="date">Dec 2017</em></p>
                                    <ul>
                                        <li>GPA: 3.89/4.0</li>
                                        <li>Relevant coursework: Machine Learning, Computer Vision, Database Systems</li>
                                    </ul>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Rashtreeya Vidyalaya College of Engineering</h3>
                                    <p className="info">Bachelor of Engineering (B.E.) in Electronics and Instrumentation (Instrumentation Technology) <span>•</span> <em className="date">May 2016</em></p>
                                    <ul>
                                        <li>GPA: 8.76/10</li>
                                        <li>Honors: First class with distinction</li>
                                        <li>Relevant coursework: Data structures and algorithms, OOPS, Java, Android application development, Artificial neural networks</li>
                                    </ul>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Work
      ----------------------------------------------- */}
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>eBay</h3>
                                    <p className="info">Software Engineer - II<span>•</span> <em className="date">Oct 2020 - Present</em></p>
                                    <ul>
                                        <li>Engineer working in the Identity Platform responsible all User related information on ebay.com</li>
                                        <li>Subject matter expert for multiple micro-servies which serve traffic of over a billion requests in a day</li>
                                        <li>Led the development effort which involved collaboration with internal teams and external clients to integrate with third party APIs</li>
                                    </ul>
                                </div>
                            </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Grubhub</h3>
                                    <p className="info">Software Engineer - II<span>•</span> <em className="date">Jan 2020 - Oct 2020</em></p>
                                    <ul>
                                        <li>Interfaced with cross-functional team of business analysts, developers and senior leadership to determine comprehensive list of requirement specifications to Re-Architect existing legacy service.</li>
                                        <li>Led the previous development initiative as Subject Matter Expert and primary point-of-contact for leadership and operations staff.</li>
                                        <li>Partnered with Data Engineering teams on product development, offered support to integrate with a real time streaming platform.</li>
                                    </ul>
                                </div>
                            </div>
                            {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Grubhub</h3>
                                    <p className="info">Software Engineer - I<span>•</span> <em className="date">Feb 2018 - Dec 2019</em></p>
                                    <ul>
                                        <li>Collaborated with cross-functional development team members to analyze potential system solutions in an agile environment.</li>
                                        <li>Became versed in complete software life cycle from preliminary needs analysis to enterprise-wide deployment and support.</li>
                                        <li>Compiled specifications, testing methods and other information for existing services into technical manuals for future use.</li>
                                    </ul>
                                </div>
                            </div>
                            {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Feinberg School of Medicine, Northwestern University</h3>
                                    <p className="info">Graduate Software Intern<span>•</span> <em className="date">Oct 2017 - Dec 2017</em></p>
                                    <ul>
                                        <li>Worked in an agile environment as an iOS developer to build laboratory applications using Swift and Objective-C.</li>
                                        <li>Collaborated with medical staff to understand requirements and provide technical solutions.</li>
                                    </ul>
                                </div>
                            </div>
                            {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>McAfee</h3>
                                    <p className="info">Graduate Software Intern<span>•</span> <em className="date">Oct 2017 - Dec 2017</em></p>
                                    <ul>
                                        <li>Developed a plugin which performed descriptive analytics on proprietary datasets and generated summary reports</li>
                                        <li>Designed and implemented a "Statistical Anomaly Detector" framework using python and advanced statistics</li>
                                        <li>Built a "Sentiment Analysis" module in the domain of cybersecurity and extended that to performing "Topic Modeling"</li>
                                    </ul>
                                </div>
                            </div>
                            {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Work */}
                    
                    {/* Skills
      ----------------------------------------------- */}
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <p>Typical backend engineering skills.</p>
                            <div className="bars">
                                <ul className="skills">
                                    <li><span className="bar-expand css" /><em>Spring/Spring Boot</em></li>
                                    <li><span className="bar-expand html5" /><em>Java</em></li>
                                    <li><span className="bar-expand photoshop" /><em>NoSQL Databases</em></li>
                                    <li><span className="bar-expand illustrator" /><em>Amazon SNS/SQS</em></li>
                                    <li><span className="bar-expand wordpress" /><em>SQL Databases</em></li>
                                    <li><span className="bar-expand jquery" /><em>Python</em></li>
                                </ul>
                            </div>{/* end skill-bars */}
                        </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section> {/* Resume Section End*/}

            </React.Fragment>
        )
    }

}

export default Resume