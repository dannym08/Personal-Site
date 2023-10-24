import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./css/styles.css"

import HomePage from "./pages/Homepage/homepage"
import Projects from "./pages/projects/projects"
import NavBar from "./components/NavBar/NavBar"
import Resume from "./pages/resume/resume"
import Dotl from "./pages/dotl/dotl"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <div className="container-fluid p-0">
                    <Routes>
                        <Route path="/" element = {<HomePage />}></Route>
                        <Route path="/projects" element={<Projects/>}></Route>
                        <Route path="/resume" element={<Resume/>}></Route>
                        <Route path="/dotl" element={<Dotl/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App