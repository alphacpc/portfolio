import React from 'react'
import { NavLink } from 'react-router-dom';


const LinkSocialComponent = ({icon, link}) => {
  return (
    <NavLink to={link} className={"link text-2xl first:ml-4 mr-4"} target='_blank'>{icon}</NavLink>
  )
}

export default LinkSocialComponent