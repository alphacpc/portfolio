import React from 'react'
import LinkSocialComponent from '../LinkSocialComponent'
import { BsMedium } from 'react-icons/bs'
import { FiGithub, FiLinkedin, FiTwitter, FiYoutube, FiMap, FiCalendar, FiArrowDown, FiMail } from 'react-icons/fi'
import url_image from "./../../Assets/Images/image.png"

const HeaderComponent = () => {
  return (
        <header className="min-h-screen relative">
                <div className="link-socials flex justify-center">
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
                                <h1 className="font-bold uppercase text-6xl mt-10 text-white">Alpha amadou DIALLO</h1>
                                <p className="my-10 text-xl text leading-8 text-white">
                                        Versatile developer with skills in web development, DevOps, 
                                        data engineering and fraud analysis. Passionate about technology, mathematics and agriculture.
                                </p>

                                <div className="flex py-4 bg-yellow- mb-20 justify-between">
                                        <div className="flex flex-col bg-lime200 w-1/3 justify-center items-center border-l-2">
                                                <span className="bg-lime-500 px-8 py-6 text-4xl font-bold rounded-full mb-2">3</span> 
                                                <span>Entreprise</span>
                                        </div>
                                        <div className="flex flex-col bg-pink20 w-1/3 justify-center items-center border-l-2">
                                                <span className="bg-lime-500 px-8 py-6 text-4xl font-bold rounded-full mb-2">3</span> 
                                                <span>Entreprise</span>
                                        </div>
                                        <div className="flex flex-col bg-teal-0 w-1/3 justify-center items-center border-l-2">
                                                <span className="bg-lime-500 px-8 py-6 text-4xl font-bold rounded-full mb-2">3</span> 
                                                <span>Entreprise</span>
                                        </div>
                                        <div className="flex flex-col bg-tea200 w-1/3 justify-center items-center border-x-2">
                                                <span className="bg-lime-500 px-8 py-6 text-4xl font-bold rounded-full mb-2">3</span> 
                                                <span>Entreprise</span>
                                        </div>
                                        {/* <div>+2ans d'expériances</div>
                                        <div>+50 repositories github</div> */}
                                </div>

                                <div className="">
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
                        freelencer
                        <FiArrowDown className="bg-emerald-500 rounded-full p-2" size={50} color='white'/>
                </div>
      </header>
  )
}

export default HeaderComponent