import React, {useState} from 'react'
import CardService from '../components/CardService'
import Navbar from '../components/Navbar'

import image from "./../assets/images/photo3.png"


const Home = () => {



    const servicesList = ["DevOps", "Data enginer", "Blockchain", "Computer vision", "Automatisation"]


    return (
        <div className="divContainer divHomePage">
            <div className="divIntro">
                <Navbar/>

                <div className="divSectionHeader">
                    <div className="divLeft">
                        <h1>AMIGO AAAAAA AAAAA</h1>
                        <h3>FullStack Developer</h3>
                        <h2>Junior Data Engineer</h2>
                        <p>Devops - Automatisation - Blockchain - Computer Vision</p>
                    </div>
                    <div className="divRight">
                        <div className='one'></div>
                        <div className='second'></div>
                        <img src={image}/>
                    </div>
                </div>


                <div className="divConatinerService">
                    {
                        servicesList.map( service =>  <CardService title={service} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Home