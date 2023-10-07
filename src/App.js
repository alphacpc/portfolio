import ImageProjectComponent from "./Components/ImageProjectComponent";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";




function App() {
  return (
    <div className="App">


      <h2 className="text-4xl font-sans font-bold py-10 justify-center flex uppercase"><AiOutlineFundProjectionScreen className="mr-4"/> Projets réalisés</h2>
      <div className="divProjects flex flex-wrap bg-white">
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
  );
}

export default App;
