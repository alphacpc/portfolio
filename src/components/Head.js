import React from 'react';
import './../assets/css/head.css';
import Discord from './../assets/images/icons1.png';
import Gmail from './../assets/images/icons2.svg';
import Linkedin from './../assets/images/icons3.png';
import Github from './../assets/images/icons4.png';
import User from './../assets/images/photo3.png';

const HeadComponent = () => {
    return (
        <div className="HeaderContainer">
            <div className="Description">
                <div>
                    <h2>Alpha amadou</h2>
                    <h1>DIALLO</h1>
                </div>
            </div>

            <div className="Photo">
                <div>
                <div className="LinksSocial">
                    <img src={Discord} width="20" height="20"/>
                    <img src={Linkedin} width="20" height="20"/>
                    <img src={Github} width="20" height="20"/>
                    <img src={Gmail} width="20" height="20"/>
                </div>
                <div className="divUserPicture">
                    <img src={User} />
                </div>
                </div>
            </div>
            
            <div className="WhiteSpace">
                <div className="ListLinks">
                    <a href="#">Telechager CV</a>
                    <a href="#">A propos de moi</a>
                    <a href="#">Projet Realises</a>
                    <a href="#">Formations</a>
                </div>
            </div>

        </div>
    )
}

export default HeadComponent;
