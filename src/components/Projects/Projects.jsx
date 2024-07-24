import React from 'react'
import './Projects.css'
import proj_arr from '../../assets/projects_data'


const Projects = () => {
  return (
    <div className = 'projects' id = 'project'>
        <div className = 'projects-title'>
            <h2>my projects</h2>
        </div>
        <div className = 'projects-container'>
            {proj_arr.map((proj, index) => {
                return <div key = {index}className = 'projects-format'>
                    <h4>{proj.proj_name}</h4>
                    <p>{proj.proj_desc}</p>
                    <p>technologies: {proj.proj_technologies}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Projects