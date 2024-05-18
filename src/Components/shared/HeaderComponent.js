import React from 'react'
import LinkSocialComponent from '../LinkSocialComponent'
import { BsMedium } from 'react-icons/bs'
import { FiGithub, FiLinkedin, FiTwitter, FiYoutube, FiMap, FiCalendar, FiArrowDown, FiMail, FiUser } from 'react-icons/fi'
import url_image from "./../../Assets/Images/image.png"
import { Link } from 'react-router-dom'
import SkillComponent from './SkillComponent'

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

                                <div className="flex py-4 bg-yellow- mb-20 justify-between">
                                        <div className="flex flex-col bg-lime200 w-1/3 justify-center items-center border-l-2">
                                                <span className="border-2 p-4 py- text-4xl text-white font-bold rounded mb-2">3</span> 
                                                <span className="text-white font-bold italic text-lg">Entreprises</span>
                                        </div>
                                        <div className="flex flex-col bg-pink20 w-1/3 justify-center items-center border-l-2">
                                                <span className="border-2 p-4 text-4xl text-white font-bold rounded mb-2">+3</span> 
                                                <span className="text-white font-bold italic text-lg">Ans d'expériences</span>
                                        </div>
                                        <div className="flex flex-col bg-teal-0 w-1/3 justify-center items-center border-l-2">
                                                <span className="border-2 p-4 text-4xl text-white font-bold rounded mb-2">+50</span> 
                                                <span className="text-white font-bold italic text-lg">Repositories Github</span>
                                        </div>
                                        <div className="flex flex-col bg-tea200 w-1/3 justify-center items-center border-x-2">
                                                <span className="border-2 p-4  text-4xl text-white font-bold rounded mb-2">4</span> 
                                                <span className="text-white font-bold italic text-lg">Formations</span>
                                        </div>
                                        
                                </div>

                                <div className="">
                                        <Link to='/#' className="p-4 uppercase font-bold shadow-xl rounded-md bg-orange-300">Download CV</Link>
                                </div>
                        </div>
                        <div className="relative flex justify-center bg-pink-100 shadow-xl ml-40 rounded-full flex-1">
                                <img src={url_image} alt="image" className=""/>
                        </div>
                </div>


                <div className="p-4 bg-amber-20 absolute bottom-0 w-full flex items-center justify-between">
                        
                        <div className="flex items-center text-white font-bold">
                        <FiMap className="mr-4"/> Senegal, Dakar
                        </div>
                        <div className="flex items-center text-white font-bold">
                        <FiCalendar className="mr-4"/> 12/12/2024
                        </div>

                        <FiArrowDown className="bg-emerald-500 rounded-full p-2" size={50} color='white'/>
                        
                        <div className="flex items-center text-white font-bold">
                        <FiMail className="mr-4"/> alphacpc@gmail.com
                        </div>
                        <div className="flex items-center text-white font-bold">
                        <FiUser className="mr-4"/> freelancer
                        </div>
                </div>
      </header>
  )
}

export default HeaderComponent