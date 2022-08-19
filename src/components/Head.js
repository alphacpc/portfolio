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
                    <h1>Ndambe FALL</h1>
                    <h2>FullStack Dev & Junior Data Engineer</h2>
                </div>
            </div>

            <div className="Photo">
                <div>
                <div className="LinksSocial">
                    <img src={Discord} width="20" height="20" alt="discord"/>
                    <img src={Linkedin} width="20" height="20" alt="Linkedin"/>
                    <img src={Github} width="20" height="20" alt="github"/>
                    <img src={Gmail} width="20" height="20" alt="gmail"/>
                    <img src={Gmail} width="20" height="20" alt="medium"/>
                    <img src={Gmail} width="20" height="20" alt="twitter"/>
                    <img src={Gmail} width="20" height="20" alt="youtube"/>
                </div>
                <div className="divUserPicture">
                    <img src={User} alt="me"/>
                </div>
                </div>
            </div>
            
            <div className="WhiteSpace">
                <div className="ListLinks">
                    <a href="/">Présentation</a>
                    <a href="/">Quelques projets</a>
                    <a href="/">Outils & Technos</a>
                    <a href="/">Telechager CV</a>
                </div>
            </div>

        </div>
    )
}

export default HeadComponent;
