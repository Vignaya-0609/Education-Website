import React from 'react'
import img from "../assets/img/about.webp";
import { FaBookReader } from "react-icons/fa";
import { GrCertificate, GrUserExpert } from "react-icons/gr";
const features = [
    {
        icon: <FaBookReader />,
        title: "Online Courses",
        description: "Access a diverse range of expertly crafted online courses, available anytime, anywhere, to boost your knowledge and skills."
    },
    {
        icon: <GrCertificate />,
        title: "Earn A Certificate",
        description: "Receive accredited certificates upon course completion, showcasing your proficiency and commitment to personal and professional development."
    },
    {
        icon: <GrUserExpert />,
        title: "Learn with Experts",
        description: "Engage with experienced industry professionals and educators who provide personalized guidance to enhance your learning experience and career growth."
    }
];


function About() {
  return (
    <>
    <section className='about' id='about'>
        <div className='img'>
            <img src={img} alt='about'></img>
        </div>
        <div className='us'>
            <h4>LEARN ANYTHING</h4>
            <h2>Benefits About Online Learning Expertise</h2>
            <div className='contents'>
            {features.map((item, index) => (
                <div key={index} className='card'>
                    <div className='icon'>
                        <h1>{item.icon}</h1>
                    </div>
                    <div className='icon-content'>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
          ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default About