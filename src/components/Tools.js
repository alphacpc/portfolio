import React from 'react'

import "./../assets/css/Tools.css"

import { tools } from "../data"

const Tools = () => {


  return (
    <div className="divToolsContainer">
        <h2 className="mg-bt-20 small">Tools</h2>
        <div className="dis-flex space">
            { tools.tools.map( (logo,i) => <img className='mg-20' key={i} src={logo.default} alt="hello" />) }
            <span>Neo4j</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>ReactJS</span>
            <span>Angular</span>
            <span>Flask</span>
            <span>Django</span>
            <span>Wordpress</span>
            <span>React Native</span>
            <span>NodeJS</span>
            <span>Figma</span>
            <span>API Rest</span>
            <span>GraphQL</span>
            <span>BeautifulSoup</span>
            <span>Pupperteer</span>
            <span>Selenium</span>
            <span>Docker</span>
        </div>
    </div>
  )
}

export default Tools