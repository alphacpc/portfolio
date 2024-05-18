import React from 'react'
import LinkSocialComponent from '../LinkSocialComponent'
import { BsMedium } from 'react-icons/bs'
import { FiGithub, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi'

const HeaderComponent = () => {
  return (
        <header className="min-h-screen ">
        <div className="link-socials p-2 bg-orange-600 flex">
          <LinkSocialComponent icon={<BsMedium/>} link="/"/>
          <LinkSocialComponent icon={<FiLinkedin/>} link="/"/>
          <LinkSocialComponent icon={<FiGithub/>} link="/"/>
          <LinkSocialComponent icon={<FiYoutube/>} link="/"/>
          <LinkSocialComponent icon={<FiTwitter/>} link="/"/>
        </div>
      </header>
  )
}

export default HeaderComponent