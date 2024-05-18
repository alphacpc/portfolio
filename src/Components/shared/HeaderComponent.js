import React from 'react'
import LinkSocialComponent from '../LinkSocialComponent'
import { BsMedium } from 'react-icons/bs'
import { FiGithub, FiLinkedin, FiTwitter, FiYoutube, FiMap, FiCalendar, FiArrowDown, FiMail } from 'react-icons/fi'
import url_image from "./../../Assets/Images/image.png"

const HeaderComponent = () => {
  return (
        <header className="min-h-screen relative">
                <div className="link-socials bg-orange-300 flex justify-center">
                        <div className="bg-orange-600 flex p-4">
                                <LinkSocialComponent icon={<BsMedium/>} link="/"/>
                                <LinkSocialComponent icon={<FiLinkedin/>} link="/"/>
                                <LinkSocialComponent icon={<FiGithub/>} link="/"/>
                                <LinkSocialComponent icon={<FiYoutube/>} link="/"/>
                                <LinkSocialComponent icon={<FiTwitter/>} link="/"/>
                        </div>
                </div>

                <div className="relative flex items-center justify-between px-[10%] py-[5%]">
                        <div className="flex-1">
                                <div>
                                        <span className="bg-orange-700 p-2 rounded-md shadow-lg mr-2">Fullstack Developer</span>
                                        <span className="bg-orange-700 p-2 rounded-md shadow-lg mr-2">Junior DevOps</span>
                                        <span className="bg-orange-700 p-2 rounded-md shadow-lg mr-2">Data Engineer</span>
                                        <span className="bg-orange-700 p-2 rounded-md shadow-lg">Fraud Analyst</span>
                                </div>
                                <h1 className="font-semibold text-6xl mt-10 text-white">Alpha amadou DIALLO</h1>
                                <p className="my-10 text-xl text leading-8">
                                        Versatile developer with skills in web development, DevOps, 
                                        data engineering and fraud analysis. Passionate about technology, mathematics and agriculture.
                                </p>
                                <div>
                                        <a href='#' className="p-4 uppercase rounded-md bg-green-500">Download CV</a>
                                </div>
                        </div>
                        <div className="relative flex justify-center flex-1">
                                <img src={url_image} alt="image" className=""/>
                                <div className="bg-red-300 bg-po p-[250px] z-2 opacity-75 absolute top-10 right-0 rounded-full " />
                        </div>
                </div>


                <div className="p-4 bg-amber-200 absolute bottom-0 w-full flex items-center justify-between">
                        <FiMap/> Senegal, Dakar
                        <FiCalendar/> 12/12/2024
                        <FiMail /> alphacpc@gmail.com
                        <FiArrowDown className="bg-emerald-500 rounded-full p-2" size={50} color='white'/>
                </div>
      </header>
  )
}

export default HeaderComponent