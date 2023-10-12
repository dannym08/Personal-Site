import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const HomePage = () => {
    return (
        <>
            <div className="content-section-content">
                <h1 className="mb-0">
                    Daniel
                    <span className="text-primary">Mardirousi</span>
                </h1>
                <div className="subheading mb-5">
                    Los Angeles, CA
                </div>
                <p className="lead mb-5">Profressional guy who plays with computer code.</p>
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/daniel-mardirousi-a57116183/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a className="social-icon" href="https://github.com/dannym08" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                </div>
            </div>
        </>
    )

}

export default HomePage