import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./css/styles.css"

import HomePage from "./pages/Homepage/homepage"
import Projects from "./pages/projects/projects"
import NavBar from "./components/NavBar/NavBar"
import Resume from "./pages/resume/resume"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <section className="content-section">
                    <Routes>
                        <Route path="/" element = {<HomePage />}></Route>
                        <Route path="/projects" element={<Projects/>}></Route>
                        <Route path="/resume" element={<Resume/>}></Route>
                    </Routes>
                </section>
            </BrowserRouter>
        </>
    )
}

export default App