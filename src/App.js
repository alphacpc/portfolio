import React from 'react';
import BodyComponent from './components/Body';
import HeadComponent from './components/Head';
import FooterComponent from './components/Footer';

import { FileOutlined } from "@ant-design/icons";


import './assets/css/App.css';

import Logo from "./assets/images/logo.png"


const App = () => {
  
  
  window.addEventListener('scroll', ()=>{
    const divNavbarFixed = document.querySelector(".divNavbarFixed");
    const btnCV = document.querySelector(".downloadCV");

    if(window.scrollY > 980){
      divNavbarFixed && divNavbarFixed.classList.add('fixed');
      btnCV && btnCV.classList.add('bottom');
    }
    else{
      divNavbarFixed && divNavbarFixed.classList.remove('fixed');
      btnCV && btnCV.classList.remove('bottom');
    }

    console.log(window.scrollY)
});


  return (
    <div className="PortfolioContainer">
      
      <HeadComponent/>
      
      <div className="divNavbarFixed">
        <img src={ Logo } alt="Hello"/>
        <nav>
          <ul>
            <li><a href="#about">Présentation</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#tools">Outils</a></li>
            <li><a href="#hobbies">Centre d'Interet</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      <button className="downloadCV bottom">
        <FileOutlined/>
      </button>

      <BodyComponent/>

      <FooterComponent/>

    </div>
  )
}

export default App;
