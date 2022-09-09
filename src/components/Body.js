import React from 'react'
import About from './About';
import Contact from './Contact';
import Hobbies from './Hobbies';
import Projects from './Projects';
import Tools from './Tools';


const BodyComponent = () => {
    return (
        <div className="divBodyContainer">
            <About/>
            <Projects/>
            <Tools/>
            <Hobbies/>
            <Contact/>
        </div>
    )
}

export default BodyComponent;
