import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import { useState, useEffect } from 'react'
import AnimLetters from '../AnimLetters'
import Logo from './Logo'
import Loader from 'react-loaders'


const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['v', 'i', 'n', 'c', 'e', 'n', 't']
  const jobArray = ['w','e', 'b ',  'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  },[])
   
  return (
    <>
    <section className='container home-page'>
        <article className='text-zone'>
            <h1>
            <img src={LogoTitle} alt="developper" />
              <span className={{letterClass} }>H</span>
              <span className={`${letterClass} _12`}>i, </span>
              <br />
              <span className={`${letterClass} _13`}>I </span>
              <span className={`${letterClass} _14`}>'m </span>
              <br />           
            <AnimLetters 
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
              />           
            <br />
            <AnimLetters 
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
              />           
            </h1>
            <h2>full-stack developper / javascript / react / node/ express/ mongooDB / sass / </h2>
            <Link to='contact' className='flat-button'>CONTACT ME</Link>
            
        </article>
        <Logo />
    </section>
    <Loader type="pacman" />
    </>
  )
}

export default Home