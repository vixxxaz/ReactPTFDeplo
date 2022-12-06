import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import { projects } from "../../Data/data";
import Loader from 'react-loaders'
import AnimLetters from '../AnimLetters/index'
import { useState } from 'react';
import { useEffect } from 'react';



const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      },[])

  return (

    <section id="projects" className="main-container">

        <header className="header-container">
          <FontAwesomeIcon icon={faCode} color='#ffd700' className='icon' />
          <h1 className="head-title">
          <AnimLetters
                    letterClass={letterClass} 
                    strArray={['T', 'h', 'e', ' ', 'p', 'r', 'o', 'j', 'e', 'c', 't', ' ', 'i', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'd' ]}
                    idx={12}
                />
          </h1>
          <p className="head-para">
            I have done those projects in my certification course :
          </p>
        </header>

      <div className="project-container">        
        <article className="card-container">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="card-link">
              <div className="card">
                <img
                  alt="gallery"
                  className="image-project"
                  src={project.image}
                />
                <div className="card-desc">
                  <h2 className="project-subtitle">
                    {project.subtitle}
                  </h2>
                  <h1 className="project-title">
                    {project.title}
                  </h1>
                  <p className="project-description">{project.description}</p>
                </div>
               </div>
            </a>
          ))}
        </article>
      </div>
      <Loader type='pacman' />       
    </section>
  );
}

export default Projects