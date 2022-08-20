import React from 'react'
import About from './About';
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
        </div>
    )
}

export default BodyComponent;
