import { GithubOutlined, LinkedinOutlined, MediumOutlined, YoutubeOutlined, TwitterOutlined  } from "@ant-design/icons";
import './../assets/css/head.css';

import { langages } from "../data"


const HeadComponent = () => {

    return (
        <div className="HeaderContainer">

            <span className="bouleSmall boule"></span>
            <span className="bouleLittle boule"></span>


            <div className="Description">
                <div>
                    <h1>Ndambe <br></br> Mafe <br></br> FALL</h1>
                    <h2>FullStack Dev & <br></br>Data Engineer</h2>
                </div>
            </div>

            <div className="Photo">
                <div>
                    <div className="LinksSocial">
                        <a href="https://github.com/alphacpc" target="_blank"><GithubOutlined style={{ fontSize: '30px' }} /></a>
                        <a href="https://www.linkedin.com/in/alpha-amadou-diallo/" target="_blank"><LinkedinOutlined style={{ fontSize: '30px' }}  /></a>
                        <a href="https://medium.com/@alphacpc" target="_blank"><MediumOutlined style={{ fontSize: '30px' }}/></a>
                        <a href="https://www.youtube.com/channel/UCNpcpy42ZP0S-9milauA_qw" target="_blank"><YoutubeOutlined style={{ fontSize: '30px' }} /></a>
                        <a href="https://twitter.com/pie_alp" target="_blank"><TwitterOutlined style={{ fontSize: '30px' }} /></a>
                    </div>
                </div>
            </div>

            <div className="divLangages">
                { langages.map( (lang, id) => <img key={id} src={lang.default} alt={lang.default}/>)}
            </div>
            
            <div className="WhiteSpace">
                <div className="ListLinks">
                    <a href="#about">Présentation</a>
                    <a href="#projects">Projets</a>
                    <a href="#tools">Outils</a>
                    <a href="#hobbies">Centre d'Interet</a>
                    <a href="#contact">Contact</a>
                    <button type="download">Téléchager CV</button>
                </div>
            </div>

        </div>
    )
}

export default HeadComponent;
