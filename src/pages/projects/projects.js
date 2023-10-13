import React from "react"

import Listing from "../../components/listing/listings"

const Projects = () => {
    return (
        <>
            <section className="content-section" id="experience">
                <div className="content-section-content">
                    <h2 className="mb-5">Projects</h2>
                    <Listing 
                        title="Super secret project coming soon..."
                        description="A project based on an inspirational game called Candy box 2."/>
                    <Listing
                        title="This website!"
                        subTitle="Always an ongoing project"
                        description="This website was created to not only work on my front end skills, but a central place to display my achievements and to host my future projects on. 
                        This site was created using react. <a href='https://github.com/dannym08/Personal-Site' target='_blank'>Website repository</a>."/>
                    <Listing 
                        title="Search engine"
                        subTitle="Based on all website on the UCI domain."
                        description="This search engine would take all 50k+ websites within the UCI domain and use tf-idf statistical method to rank your search
                        results and display them back to you on a GUI. <a href='https://github.com/dannym08/Search-Engine' target='_blank'>Project repository</a>."/>
                    <Listing 
                        title="AI with minecraft"
                        subTitle="Maze solver in minecraft."
                        description="As part of the AI courses at UCI I was part of a team that created a reinforced learning maze solver within minecraft. This maze solver uses Q-learnining to learn on thousands of mazes
                        in order to learn the most optimal path when solving a random maze. <a href='https://github.com/dannym08/Dungeon-Masters' target='_blank'>Project repository</a>."/>
                    <Listing 
                        title="Autonomous rover Simultaneous localization and mapping."
                        subTitle="Research course at Glendale Community College."
                        description="Created a C++ repoistory that could, in real time, map the rovers surroundings using lidar and assist the rover in reaching its destination, which could be out of vision of the robot.
                        This project used a version of Dijkstra algorithm to help with the path planning and used various concept from graph thoery to plan and hold the state of the map.
                        <a href='https://github.com/dannym08/Navigation' target='_blank'>Project repository</a>."/>
                </div>
            </section>
        </>
    )
}

export default Projects