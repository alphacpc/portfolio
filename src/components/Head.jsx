import { GithubOutlined, LinkedinOutlined, MediumOutlined, YoutubeOutlined, TwitterOutlined  } from "@ant-design/icons";
import User from './../assets/images/photo3.png';
import './../assets/css/head.css';

import { langages } from "../data"


const HeadComponent = () => {

    return (
        <div className="HeaderContainer">
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
                    <a href="/">Ndambe ???</a>
                    <a href="/">Quelques projets</a>
                    <a href="/">Outils & Technos</a>
                    <a href="/">Hobbies</a>
                    <a href="/">Telechager CV</a>
                </div>
            </div>

        </div>
    )
}

export default HeadComponent;
