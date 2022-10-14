import React from 'react'
import './../assets/css/About.css';
import Photo from "./../assets/images/photo3.png"


const About = () => {
  return (
    <div id="about" className="divAboutContainer align-center">
        
        <h2 className="mg-bt-20">Présentation</h2>
        
        <div className="dis-flex space divDisplay">
          
          <div className="divAbout">
            <div>
              <span className='circle'></span>
              <p>
                <span>Jeune passioné des nouvelles technologies...</span> <br></br>
                J'ai commencé à programmer à partir de la serie <strong><a href="https://www.allocine.fr/series/ficheserie_gen_cserie=20225.html" target="_blank" rel="noreferrer">Startup</a></strong>. 
                C'est dans ce dernier que j'ai entendu pour la 
                première fois le mot <a href="https://fr.wikipedia.org/wiki/JavaScript" target="_blank" rel="noreferrer"><em>"JAVASCRIPT"</em></a>, lors d'une discussion entre
                l'actrice principale et le fils d'un de ses collaborateurs, et depuis 
                je m'en sépare plus [ il est devenu mon quotidien en quelque sorte !!! ]. 
                Il y a environ 5 ans, je ne connaissais rien de la 
                programmation mais aujourd'hui je fais parti des <em>50 développeurs sénégalais </em>
                basé au Sénégal les plus actifs sur <a href="https://commits.top/senegal.html" rel="noreferrer" target="_blank">Github</a>. 
                Aujourd'hui je touche presque à tous dans le cycle de développement de logiciel.
              </p>
           
            </div>
          </div>
 
          <div className="divImageMe">
            <img src={Photo} alt="Alpha amadou DIALLO" />
          </div>

        </div>
    </div>
  )
}

export default About