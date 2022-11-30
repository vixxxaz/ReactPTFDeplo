import './index.scss';
import { useEffect, useState } from 'react';
import AnimLetters from '../AnimLetters/index'
import Loader from 'react-loaders'
import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import Maps from '../Maps';


const Contact = () => {

    const [mapCenter, setMapCenter] = useState({ lat: 40.607344, lng:22.975985 })
    const [mapZoom, setMapZoom] = useState(16)
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      },[])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_3t9mbnc',
                'template_0g69zz2',
                refForm.current,
                '63D_I2R_B4b_pqVL6'
            )
            .then(() => {
                alert('message send')
                window.location.reload(false)
            })
            .catch(() => {
                alert('message not send')
                window.location.reload(true)
            })
    }

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimLetters
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t', ' ', 'm' ,'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I'm interested in all job in web developpement from freelance to long term contract.
                    Or if you have a request or a question, don't hesitate to contact me
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                
                                    <input type="text" name='name' placeholder='name' required />
                               
                            </li>
                            <li className='half'>
                               
                                    <input type="email" name='email' placeholder='email' required />
                             
                            </li>
                            <li className='half'>
                               
                                    <input type="text" name='subject' placeholder='subject' required />
                                
                            </li>
                            <li>
                               
                                    <textarea placeholder='message' name="message" id="message" cols="30" rows="10" required></textarea>
                              
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value='SEND' />
                            </li>                       
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Gardet Vincent
                <br />
                Greece
                <br />
                81 Vosporou 54454 Thessaloniki
                <br />
                <span>vgardet73@gmail.com</span>
            </div>
            <div id='map' className="map-wrap">                
                <Maps center={mapCenter} zoom={mapZoom} ></Maps>               
            </div>
        </div>        
        <Loader type='pacman' />
    </>
  )
}

export default Contact