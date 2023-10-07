import React from 'react'
import { NavLink } from 'react-router-dom';


const LinkSocialComponent = ({icon, link}) => {
  return (
    <NavLink to={link} className={"link"}>{icon}</NavLink>
  )
}

export default LinkSocialComponent