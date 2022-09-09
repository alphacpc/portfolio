import React from 'react';
import BodyComponent from './components/Body';
import HeadComponent from './components/Head';
import FooterComponent from './components/Footer';

import './assets/css/App.css';


const App = () => {
  
  
  return (
    <div className="PortfolioContainer">
      
      <HeadComponent/>

      <BodyComponent/>

      <FooterComponent/>

    </div>
  )
}

export default App
