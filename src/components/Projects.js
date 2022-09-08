import React from 'react'
import "./../assets/css/Project.css"

import cap1 from "./../assets/images/projects/ecommerce/capture1.png"

const Projects = () => {
  return (
    <div className="divProjectContainer">
        <h2 className="h2Label mg-bt-20">Projets réalisés</h2>
        <div className="divProjects dis-flex space">
           {
               [1,2,3,4,1,2,4,3,3].map( el => {
                   return (
                    <div className="divProjectItem dis-flex col">
                        <h3>ecommerce</h3>
                        <div className="">
                            <img src={cap1} alt="ecommerce" />
                        </div>
                        <button className='pd-15'>Code Source</button>
                    </div>
                   )
               })
            }
        </div>
    </div>
  )
}

export default Projects