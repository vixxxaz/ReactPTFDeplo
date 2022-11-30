import './index.scss'
import AnimLetters from '../AnimLetters/index'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faAreaChart, faDeaf, faFaceAngry, faGuitar, faTShirt } from '@fortawesome/free-solid-svg-icons'



const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      },[])

  return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimLetters
                    letterClass={letterClass} 
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e' ]}
                    idx={15}
                />
            </h1>
            <p>I'like spend time to code in every languages, to try to learn more technique.
                I' m looking for every contract you can offer me to start my carrier 
                it is a reconversion for me from tourism to it 
            </p>
            <p>I m french, and i peak english. I have a lot of experience in comercial, customer service and tourism</p>
            <p>feel free to contact me for any project you want  to create</p>
        </div>

        <div className='stage-cube-cont'>
            <div className='cubeSpinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAreaChart} color='#DD0031' />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faAddressBook} color='#F06229' />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faFaceAngry} color='#044712' />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faGuitar} color='#351374' />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faDeaf} color='#7aa034' />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faTShirt} color='#e6881d' />
                </div>
            </div>
        </div>

    </div>
    <Loader type='pacman' />
    </>
  )
}

export default About