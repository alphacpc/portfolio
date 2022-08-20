import { GithubOutlined, LinkedinOutlined, MediumOutlined, YoutubeOutlined, TwitterOutlined  } from "@ant-design/icons";
import User from './../assets/images/photo3.png';
import './../assets/css/head.css';


const HeadComponent = () => {
    return (
        <div className="HeaderContainer">
            <div className="Description">
                <div>
                    <h1>Ndambe FALL</h1>
                    <h2>FullStack Dev & Data Engineer</h2>
                </div>
            </div>

            <div className="Photo">
                <div>
                <div className="LinksSocial">
                    <a href="#m"><GithubOutlined style={{ fontSize: '30px' }} /></a>
                    <a href="#m"><LinkedinOutlined style={{ fontSize: '30px' }}  /></a>
                    <a href="#m"><MediumOutlined style={{ fontSize: '30px' }}/></a>
                    <a href="#m"><YoutubeOutlined style={{ fontSize: '30px' }} /></a>
                    <a href="#m"><TwitterOutlined style={{ fontSize: '30px' }} /></a>
                </div>
                <div className="divUserPicture">
                    <img src={User} alt="me"/>
                </div>
                </div>
            </div>
            
            <div className="WhiteSpace">
                <div className="ListLinks">
                    <a href="/">A propos de moi</a>
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
