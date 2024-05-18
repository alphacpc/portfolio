import LinkSocialComponent from './LinkSocialComponent';
import { BsMedium } from 'react-icons/bs';
import { FiGithub, FiLinkedin, FiTwitter, FiYoutube, FiDownload,
        FiMap, FiCalendar, FiArrowDown, FiMail, FiUser } 
from 'react-icons/fi';
import url_image from "./../../Assets/Images/image.png";
import { Link } from 'react-router-dom';
import SkillComponent from './SkillComponent';
import StatComponent from './StatComponent';
import IconTextComponent from './IconTextComponent';

const HeaderComponent = () => {
  return (
        <header className="min-h-screen relative">
                <div className="link-socials flex justify-center">
                        <div className="bg-orange-500 flex p-4">
                                <LinkSocialComponent icon={<BsMedium/>} link="/"/>
                                <LinkSocialComponent icon={<FiLinkedin/>} link="/"/>
                                <LinkSocialComponent icon={<FiGithub/>} link="/"/>
                                <LinkSocialComponent icon={<FiYoutube/>} link="/"/>
                                <LinkSocialComponent icon={<FiTwitter/>} link="/"/>
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
                                        <StatComponent value="3" label="Entreprises"/>
                                        <StatComponent value="+3" label="Ans d'expériences"/>
                                        <StatComponent value="+50" label="Repositories Github"/>
                                        <StatComponent value="4" label="Formations"/>
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
                        <IconTextComponent icon={<FiCalendar className="mr-4"/> } text="12/12/2024" />
                        <FiArrowDown className="bg-emerald-500 rounded-full p-2" size={50} color='white'/>
                        <IconTextComponent icon={<FiMail className="mr-4"/> } text="alphacpc@gmail.com" />
                        <IconTextComponent icon={<FiUser className="mr-4"/> } text="freelancer" />
                </div>
      </header>
  )
}

export default HeaderComponent;