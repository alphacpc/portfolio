import React from 'react'
import "./../assets/css/Project.css"
import { projects } from "../data"

const Projects = () => {


  return (
    <div id="projects" className="divProjectContainer">
        <h2 className="h2Label mg-bt-20">Projets réalisés</h2>
        <div className="divProjects dis-flex space">
           {
               projects.map( (project, id) => {
                   return (
                    <div className="divProjectItem dis-flex col" key={id}>
                        <h3>{project['name']}</h3>
                        <div className="">
                            <img src={project['capture'].default} alt="ecommerce" />
                        </div>
                        <a href={project['source']} target="_blank" className='pd-15'>Code Source</a>
                    </div>
                   )
               })
            }
        </div>
    </div>
  )
}

export default Projects