import React from 'react'

import "./../assets/css/Tools.css"

import { tools } from "../data"

const Tools = () => {


  return (
    <div className="divToolsContainer">
        <h2 className="mg-bt-20 small">Tools</h2>
        <div className="dis-flex space">
            { tools.tools.map( (logo,i) => <img className='mg-20' key={i} src={logo.default} alt="hello" />) }
        </div>
    </div>
  )
}

export default Tools