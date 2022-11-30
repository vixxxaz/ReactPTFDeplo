import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode, faEnvelope, faHome, faLink, faUser} from '@fortawesome/free-solid-svg-icons';
import LogoSubtitle from '../../assets/images/logo-sub.png';
import React from 'react'

const Sidebar = () => 
   
<div className='nav-bar'>
    <Link className='logo' to='/'>
        <img className='logo' src={LogoSubtitle} alt="Logo" />
    </Link>
    <nav>
        <NavLink to='/' activeclassname="active">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink  to='/about' activeclassname="active" className="about-link">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink to='/contact' activeclassname="active" className="contact-link" >
            <FontAwesomeIcon icon={faEnvelope}  color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/vincent-gardet-6a8920235/'>
                <FontAwesomeIcon icon={ faLink } color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href='https://github.com/vixxxaz'>
                <FontAwesomeIcon icon={ faCode } color="#4d4d4e" />
            </a>
        </li>
    </ul>
</div>
  
export default Sidebar