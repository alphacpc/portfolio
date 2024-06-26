import LinkSocialComponent from './LinkSocialComponent';
import { BsMedium, BsPersonWorkspace } from 'react-icons/bs';
import { FiGithub, FiLinkedin, FiYoutube, FiDownload,
        FiMap, FiCalendar, FiArrowDown, FiMail, FiUser } 
from 'react-icons/fi';
import url_image from "./../../Assets/Images/image.png";
import { Link } from 'react-router-dom';
import SkillComponent from './SkillComponent';
import StatComponent from './StatComponent';
import IconTextComponent from './IconTextComponent';


const FORMAT_DATE = (input_date, type_date) => {
  
        let datetime_sep = input_date.split("T");
        let date_split = datetime_sep[0].split("-");
      
      
        if(type_date === "datetime"){
              return `${date_split[2]}/${date_split[1]}/${date_split[0]} ${datetime_sep[1].split(".")[0]}`;
        } 
        
        else if(type_date === "date") {
              return `${date_split[2]}/${date_split[1]}/${date_split[0]}`;
        }
        
        else return "01/01/1900"
      
};


const HeaderComponent = () => {

        const currentDate = new Date().toISOString();

        return (
        <header className="min-h-screen relative">
                <div className="link-socials flex justify-center">
                        <div className="bg-orange-500 flex p-4">
                                <LinkSocialComponent icon={<BsMedium/>} link="https://medium.com/@alphacpc"/>
                                <LinkSocialComponent icon={<FiLinkedin/>} link="https://www.linkedin.com/in/alpha-amadou-diallo/"/>
                                <LinkSocialComponent icon={<FiGithub/>} link="https://github.com/alphacpc"/>
                                <LinkSocialComponent icon={<FiYoutube/>} link="https://www.youtube.com/@phonse444"/>
                        </div>
                </div>

                <div className="relative flex items-center justify-between px-[10%] py-[5%]">
                        <div className="flex-1">
                                <div className="div-skills">
                                        <SkillComponent bg="bg-yellow-500" text="Fullstack Developer"/>
                                        <SkillComponent bg="bg-orange-500" text="Junior DevOps"/>
                                        <SkillComponent bg="bg-pink-500" color="text-white" text="Data Engineer"/>
                                        <SkillComponent bg="bg-sky-500" text="Fraud Analyst" />
                                </div>
                                
                                <h1 className="font-bold uppercase text-6xl mt-10 text-white">
                                        Alpha amadou DIALLO
                                </h1>
                                
                                <p className="my-10 text-xl text leading-8 text-white">
                                        Versatile developer with skills in web development, DevOps, 
                                        data engineering and fraud analysis. Passionate about technology, mathematics and agriculture.
                                </p>

                                <div className="div-stats flex py-4 bg-yellow- mb-20 justify-between">
                                        <StatComponent value="3" label="Compagnies"/>
                                        <StatComponent value="+3" label="Years of Experience"/>
                                        <StatComponent value="+50" label="Repositories Github"/>
                                        <StatComponent value="4" label="Training"/>
                                </div>

                                <div className="flex">
                                        <Link to='/#' className="p-4 flex uppercase font-bold shadow-xl rounded-md bg-orange-300">
                                                <FiDownload size={20} className="mr-4"/>
                                                Download CV
                                        </Link>
                                </div>
                        </div>
                        <div className="relative flex justify-center bg-pink-100 shadow-xl ml-40 rounded-full flex-1">
                                <img src={url_image} alt="alphacp"/>
                        </div>
                </div>


                <div className="p-4 bg-amber-20 absolute bottom-0 w-full flex items-center justify-between">
                        <IconTextComponent icon={<FiMap className="mr-4"/> } text="Senegal, Dakar" />
                        <IconTextComponent icon={<FiCalendar className="mr-4"/> } text={FORMAT_DATE(currentDate, "date")} />
                        <IconTextComponent icon={<FiUser className="mr-4"/> } text="alphacpc" />
                        
                        <FiArrowDown className="bg-emerald-500 rounded-full p-2" size={50} color='white'/>
                        
                        <IconTextComponent icon={<FiMail className="mr-4"/> } text="alphacpc@gmail.com" />
                        <IconTextComponent icon={<BsPersonWorkspace className="mr-4"/> } text="freelancer" />
                        <IconTextComponent text="&copy; Copyright reserved alphacpc" />
                </div>
      </header>
  )
}

export default HeaderComponent;