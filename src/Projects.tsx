import { useState, useEffect } from 'react'
import "./Projects.css"
import "./App.css"
import projectData from "../public/projects.json"

type Project = {
    title: String,
    key: number,
    time: String,
    description: String,
    link: String,
    linktype: String,
    tags: String[]
}

function Projects() {

    const projects = projectData.projects


    return (
        <div>
        <div className="sun"/>
        <div className="projects-main-div">
            

            <div className="mainpage-title-div cloud">
            <h1 className="mainpage-title-text spline-sans-mono-700">Projects</h1>
            </div>
            {projects.map((project) => (
                <div className="projects-project-div" key={project.key}>

                <div style={{"display": "flex", "justifyContent": "space-between", "gap": "5px"}}>
                    <h2 className="mainpage-title-text spline-sans-mono-600">{project.title}</h2>

                    <span className="spline-sans-mono-300">{project.time}</span>
                </div>
                <div style={{"display": "flex", "gap": "10px", "alignItems": "center"}}>

                    {project.link !== "" && (<a href={project.link} target="_blank" className="project-link spline-sans-mono-500">{project.linktype}</a>)}
                    
                </div>

                <span className="spline-sans-mono-400">{project.description}</span>

                <div className="projects-tag-div">
                    {project.tags.map((tag) => (
                        <span className="projects-tag-text spline-sans-mono-500" key={tag}>{tag}</span>
                    ))}
                </div>

                </div>
            ))}
            

        </div>
        </div>
    )
}

export default Projects