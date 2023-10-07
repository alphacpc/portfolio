import ImageProjectComponent from "./Components/ImageProjectComponent";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { FiLinkedin, FiGithub, FiYoutube, FiTwitter  } from "react-icons/fi";
import { NavLink } from 'react-router-dom';



function App() {
  return (
    <div className="App flex flex-col items-center">

      <header className="min-h-screen">
        <div className="link-socials p-2 bg-amber-400">
          <NavLink to="/" className={"link"}>
            <BsMedium/>
          </NavLink>
        </div>
      </header>

      <div className="container div-project-pending py-4">
        <h2 className="text-4xl font-sans font-bold py-10 justify-centr flex uppercase"><AiOutlineFundProjectionScreen className="mr-4 text-orange-600"/> Projet encours</h2>
        <div className="flex items-center">
          <ImageProjectComponent width="flex-1" className="border-none border-0" alt_image="Project 4" url_image={require("./../src/Assets/Images/project_current.png")}/>
          <div className="flex-1 px-4">
            <p>
              Après une période de concentration intense, je suis ravi de partager un nouveau chapitre de ma carrière en tant que développeur spécialisé en Big Data ! 🌟 En ce moment, je me consacre à un projet personnel passionnant axé sur l'optimisation du trafic routier au Sénégal, en mettant en œuvre des solutions informatiques novatrices. 
            </p><br/>
            <p>
            En tant que développeur, je mets à profit mes compétences en Big Data et en analyse pour élaborer des solutions intelligentes qui visent à améliorer l'efficacité des systèmes de Bus Rapid Transit (BRT), de Transport Express Régional (TER) et de péages. 🌐💻
            </p><br/>
            <p>
            Mon objectif est de transformer les données en informations exploitables, afin de prendre des décisions éclairées et d'optimiser la mobilité dans la région. Je suis enthousiaste à l'idée de partager plus sur le processus, les défis et les résultats de ce projet au fil du temps. Si vous êtes intéressés par les détails techniques ou si vous souhaitez simplement échanger des idées, n'hésitez pas à me contacter. 📊🤝
            </p><br/>
            <p>
            Restez connectés pour des mises à jour régulières, car je documente cette expérience unique dans le monde de la Big Data appliquée à la mobilité. Ensemble, utilisons la puissance des données pour façonner l'avenir du transport au Sénégal ! 🇸🇳💡
            </p><br/>
            <p className="font-bold">
              #ProjetInformatique #BigData #AnalyseDeDonnées #MobilitéIntelligente #DakarScript #SonatelAcademy #OrangeDigitalCenter #Sénégal
            </p>
          </div>
        </div>
      </div>

      <div className="div-project-done  bg-slate-50 py-8">
        <h2 className="text-4xl font-sans font-bold py-10 justify-center flex uppercase"><AiOutlineFundProjectionScreen className="mr-4 text-orange-600"/> Projets réalisés</h2>
        <div className="divProjects flex flex-wrap  bg-slate-50">
          <ImageProjectComponent width="w-1/3" alt_image="Project 4" url_image={require("./../src/Assets/Images/project4.png")}/>
          <ImageProjectComponent width="w-1/3" alt_image="Project 5" url_image={require("./../src/Assets/Images/project5.png")}/>
          <ImageProjectComponent width="w-1/3" alt_image="Project 6" url_image={require("./../src/Assets/Images/project6.png")}/>
          
          <ImageProjectComponent width="w-1/2" alt_image="Project 9" url_image={require("./../src/Assets/Images/project9.png")}/>
          <ImageProjectComponent width="w-1/2" alt_image="Project 3" url_image={require("./../src/Assets/Images/project3.png")}/>
          
          <ImageProjectComponent width="w-1/3" alt_image="Project 9" url_image={require("./../src/Assets/Images/project11.png")}/>
          <ImageProjectComponent width="w-1/3" alt_image="Project 1" url_image={require("./../src/Assets/Images/project1.png")}/>
          <ImageProjectComponent width="w-1/3" alt_image="Project 8" url_image={require("./../src/Assets/Images/project8.png")}/>
          
          <ImageProjectComponent width="w-1/2" alt_image="Project 9" url_image={require("./../src/Assets/Images/project10.png")}/>
          <ImageProjectComponent width="w-1/2" alt_image="Project 9" url_image={require("./../src/Assets/Images/project13.png")}/>
          
          <ImageProjectComponent width="w-1/3" alt_image="Project 2" url_image={require("./../src/Assets/Images/project2.png")}/>
          <ImageProjectComponent width="w-1/3" alt_image="Project 7" url_image={require("./../src/Assets/Images/project7.png")}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
