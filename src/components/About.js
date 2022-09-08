import React from 'react'
import './../assets/css/About.css';
import Photo from "./../assets/images/photo3.png"


const About = () => {
  return (
    <div className="divAboutContainer align-center">
        <h2 className="mg-bt-20">About</h2>
        
        <div className="dis-flex space divDisplay">
          <div className="divAbout">
            <div>
              <span></span>
              <p>Lorem, ipsum dolor sit amet consectetur excepturi soluta officia cum facere tempore harum omnis blanditiis odit et voluptatibus dolore laudantium aut natus ducimus officiis perspiciatis veniam tempora libero aperiam magni! Vel?</p>
            </div>
            <div>
              <span></span>
              <p>Lorem, ipsum dolor sit amet consectetur excepturi soluta officia cum facere tempore harum omnis blanditiis odit et voluptatibus dolore laudantium aut natus ducimus officiis perspiciatis veniam tempora libero aperiam magni! Vel?</p>
            </div>
          </div>

          
          <img src={Photo} alt="Alpha amadou DIALLO" />
          

          <div className="divAbout second">
            <div>
              <span></span>
              <p>Lorem, ipsum dolor sit amet consectetur excepturi soluta officia cum facere tempore harum omnis blanditiis odit et voluptatibus dolore laudantium aut natus ducimus officiis perspiciatis veniam tempora libero aperiam magni! Vel?</p>
            </div>
            <div>
              <span></span>
              <p>Lorem, ipsum dolor sit amet consectetur excepturi soluta officia cum facere tempore harum omnis blanditiis odit et voluptatibus dolore laudantium aut natus ducimus officiis perspiciatis veniam tempora libero aperiam magni! Vel?</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About