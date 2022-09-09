import React from 'react';
import { hobbies } from "../data";

import "./../assets/css/Hobbies.css";

const Hobbies = () => {
  return (
    <div id="hobbies" className="divHobbiesContainer">
        <h2 className="small text-center">Centre d'Interets</h2>
        <div className="dis-flex space align-center">
            <ul>
                { hobbies.map((hobbie, id) => <li key={id} className="mg-bt-20"><span>{hobbie}</span></li>) }
            </ul>
        </div>
    </div>
  )
}

export default Hobbies