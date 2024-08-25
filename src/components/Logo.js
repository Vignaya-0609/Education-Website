import React from 'react'
import { TiSocialFacebook, TiSocialInstagram, TiSocialYoutube } from "react-icons/ti";
function Logo() {
  return (
    <>
    <div className='logo'>
            <div className='name'>
                <h1>EDUPURSUIT</h1>
                <p>ONLINE EDUCATION & LEARNING</p>
            </div>
            <div className='social-icons'>
                <a href='https://www.facebook.com' target='_blank' rel="noopener noreferrer" aria-label="Visit our Facebook page">
                    <TiSocialFacebook />
                </a>
                <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer" aria-label="Visit our Instagram page">
                    <TiSocialInstagram />
                </a>
                <a href='https://www.youtube.com' target='_blank' rel="noopener noreferrer" aria-label="Visit our Youtube channel">
                    <TiSocialYoutube />
                </a>
            </div>
        </div>
    </>
  )
}

export default Logo