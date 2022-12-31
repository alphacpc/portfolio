import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <header>
        <div className="divLogo">AAD</div>
        <nav>
            <ul>
                <li><Link>Accueil</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Projets</Link></li>
                <li><Link>Videos</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar