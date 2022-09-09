import React from 'react';

import "./../assets/css/Tools.css";

import { tools } from "../data";

const Tools = () => {


  return (
    <div id="tools" className="divToolsContainer">
        
        <h2 className="mg-bt-20 small">Compétences techniques</h2>

        <div className="divTools">
            { tools.map( (logo,i) => {
              return <div className="toolsItem" key={i}>
                <h3> <span></span> {logo["title"]}</h3>
                {logo["images"].map( (image, id) => <img className='mg-20' key={id} src={image.default} alt={image} /> )}
              </div>
            })
            }
        </div>
    </div>
  )
}

export default Tools;