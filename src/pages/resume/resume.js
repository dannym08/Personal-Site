import React from "react"
import Listing from "../../components/listing/listings";

const Resume = () => {
    return (
        <>
            <section className="content-section" id="experience">
                <div className="content-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <Listing 
                        title="Application Developer II"
                        subTitle="Los Angeles County Assessors"
                        description="<ul>
                            <li>Assist in maintaining and adding modules to the Assessor project in preparation for going live.</li>
                            <li>Duties vary anywhere from frontend, backend, DB management, and creating standalone
                            applications.</li>
                        </ul>"
                        dateRange="Jan 2023 - Present"/>
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
            </section>
            <hr class="m-0" />

            <section className="content-section" id="education">
                <div className="content-section-content">
                <h2 className="mb-5">Education</h2>
                <Listing
                    title="University of California Irvine"
                    subTitle="B.S. Computer Science"
                    description="<ul>
                        <li>Grade Point Average: 3.82.</li>
                        <li>Bachelor of Science in Computer Science with a focus in Intelligent Systems.</li>
                        <li>Relevant Courses: Search systems, graph theory, algorithms, machine learning and deep learning.</li>
                    </ul>"
                    dateRange="September 2017 - September 2019"/>
                
                <Listing
                    title="Glendale Community College"
                    subTitle="A.S in Mathematics"
                    description="<ul>
                        <li>Grade Point Average: 3.75 (Major Grade Point Average: 4.0).</li>
                        <li>Relevant Courses: Multivariable Calculus, Data Structures, Linear algebra, and Differential equations.</li>
                    </ul>"
                    dateRange="August 2014 - June 2017"/>
                </div>
            </section>    

            <hr class="m-0" />

            <section className="content-section" id="research">
                <div className="content-section-content">
                    <h2 className="mb-5">Leadership Experience / Research</h2>
                    <Listing 
                        title="Research in Engineering"
                        subTitle="Glendale Community College"
                        description="<ul>
                            <li>Our team used ROS, C++, and various mathematical concepts to create and implement our own
                            version of SLAM (simultaneous localization and mapping) onto a 4 wheeled robot.</li>
                            <li>As team leader my role was to create a high level picture of what modules had to be built and how
                            they worked together.</li>
                            <li>My role as team member was to create the navigation and pathfinding modules.</li>
                            <li>By the end of the semester, we had fully functional pathfinding, navigation, mapping, lidar and
                            communication modules built and tested.</li>
                        </ul>"
                        dateRange="February 2017 - August 2017"/>
                    <Listing 
                        title="Jet Propulsion Laboratory Undergraduate Scholar (JPLUS)"
                        subTitle="Jet Propulstion Laboratory (JPL)"
                        description="<ul>
                            <li>Chosen to represent Glendale Community College for an internship preparation program.</li>
                            <li>Interacted with JPL employees and had access to their ongoing projects.</li>
                            <li>Attended lectures and events hosted by Jet Propulsion Laboratory employees aimed at skill building.</li>
                        </ul>"
                        dateRange="July 2016 – February 2017"/>
                </div>
            </section>
        </>
    )
}

export default Resume;