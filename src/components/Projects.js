import React from 'react'
import "./../assets/css/Project.css"

import cap1 from "./../assets/images/projects/ecommerce/capture1.png"
import cap2 from "./../assets/images/projects/ecommerce/capture2.png"
import cap3 from "./../assets/images/projects/ecommerce/capture3.png"

const Projects = () => {
  return (
    <div className="divProjectContainer">
        <h2 className="h2Label mg-bt-20">Some Projects About me</h2>
        <div className="divProjects dis-flex space">
           {
               [1,2,3, 4].map( el => {
                   return (
                    <div className="divProjectItem dis-flex col">
                        <h3 className="mg-bottom-20">ecommerce</h3>
                        <div className="">
                            <img src={cap1} alt="ecommerce" />
                            <img src={cap2} alt="ecommerce" />
                            <img src={cap3} alt="ecommerce" />
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