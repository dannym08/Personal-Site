import React from "react"
import Listing from "../../components/listing/listings";

const Resume = () => {
    return (
        <div className="content-section-content">
            <h2 className="mb-5">Experience</h2>
            <Listing
                title="Software Development Engineer"
                subTitle="Amazon"
                description="<ul>
                    <li>Part of the Amazon Music team.</li>
                    <li>Duties include: design, develop, experiment, test, and roll out new features.</li>
                </ul>"
                dateRange="Jan 2022 – June 2022" />
            <Listing
                title="Software Developer II"
                subTitle="Beyond Limits"
                description="<ul>
                    <li>Solely maintain and enhance a vital API endpoint essential to the project.</li>
                    <li>Work with technologies including: Python, AWS S3, docker, etc.</li>
                </ul>"
                dateRange="Aug 2021 – Dec 2021" />
            <Listing
                title="Software Developer"
                subTitle="UC Innovation"
                description="<ul>
                    <li>In charge of building and maintaining different modules and products within Salesforce.</li>
                    <li>Work with various software standards such as calling and creating RESTful/API endpoints, working with
                    RSS endpoints, and much more.</li>
                    <li>Vital member of a successful 2 year client implementation project for a very important client within the
                    higher education sector.</li>
                    <li>Part of a specialized team of four in charge of productizing our previous client implementation.</li>
                    <li>Trusted to design and implement various systems for client implementations and internal products.</li>
                    <li>Lead various meetings and demos with both technical and nn technical clients.</li>
                    <li>Created, designed and led various different sprints.</li>
                </ul>"
                dateRange="June 2019 – July 2021"/>
        </div>
    )
}

export default Resume;