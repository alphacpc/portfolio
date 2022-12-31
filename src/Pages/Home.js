import React from 'react'
import Navbar from '../components/Navbar'

import image from "./../assets/images/photo3.png"


const Home = () => {
  return (
    <div className="divContainer divHomePage">
        <div className="divIntro">
            <Navbar/>

            <div className="divSectionHeader">
                <div className="divLeft">
                    <h1>AMIGO AAAAAA AAAAA</h1>
                    <h3>FullStack Developer</h3>
                    <h2>Junior Data Engineer</h2>
                    <p>Devops - Automatisation - Blockchain</p>
                </div>
                <div className="divRight">
                    <div className='one'></div>
                    <div className='second'></div>
                    <img src={image}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home