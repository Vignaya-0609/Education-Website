import React from 'react'
import { BsSendFill } from "react-icons/bs";
import { FaAddressCard, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Contact() {
  return (
    <>
    <section className='contact' id='contact'>
        <h3>Contact Us</h3>
        <h2>Get in touch with us.</h2>
        <div className='address'>
            <div className='location'>
                <h5><FaAddressCard/></h5>
                <p>123 Sector 45, Gurgaon, TamilNadu, India</p>
            </div>
            <div className='phone'>
                <h5><FaPhoneAlt/></h5>
                <p>+91 98765 43210</p>
            </div>
            <div className='email'>
                <h5><MdEmail/></h5>
                <p>contactEduPursuit@gmail.in</p>
            </div>
        </div>
        <div className='news-letter'>
            <h3>Newsletter - Stay tune and get the latest update</h3>
            <div className='input-field'>
                <input type='email' placeholder='Enter your email'></input>
                <button><BsSendFill/></button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact