import React from 'react'

import "./../assets/css/Hobbies.css";
import Photo from "./../assets/images/photo3.png";

const Hobbies = () => {
  return (
    <div className="divHobbiesContainer">
        <h2 className="small text-center">Our Big Hobbies</h2>
        <div className="dis-flex space align-center">
            <img src={Photo} alt="Alpha amadou DIALLO" />
            {/* <ul>
                <li className="mg-bt-20"><span>Football</span></li>
                <li className="mg-bt-20"><span>HipHop</span></li>
                <li className="mg-bt-20"><span>E-learning</span></li>
                <li className="mg-bt-20"><span>Documentary</span></li>
                <li className="mg-bt-20"><span>Devoxxx</span></li>
                <li className="mg-bt-20"><span>Teaching</span></li>
                <li className="mg-bt-20"><span>Travel</span></li>
                <li><span>Jogging</span></li>
            </ul> */}
        </div>
    </div>
  )
}

export default Hobbies