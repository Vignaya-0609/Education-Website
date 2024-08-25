import React from 'react'
import t1 from "../assets/img/team/t1.webp";
import t2 from "../assets/img/team/t2.webp";
import t3 from "../assets/img/team/t3.webp";
import t4 from "../assets/img/team/t5.jpg";
import t5 from "../assets/img/team/t4.webp";
import t6 from "../assets/img/team/t7.jpg";
import t7 from "../assets/img/team/t6.jpg";
import t8 from "../assets/img/team/t8.jpg";
const team = [
    {
        img: t1,
        name: "Dr. Adrian Molises",
        role: "Developer and Lead Instructor"
    },
    {
        img: t2,
        name: "Dr. Arthur MaGregor",
        role: "Senior Data Scientist"
    },
    {
        img: t3,
        name: "Dr. Evelyn Turner",
        role: "AI Specialist"
    },
    {
        img: t4,
        name: "Dr. Rachel Gonzalez",
        role: "Project Manager"
    },
    {
        img: t5,
        name: "Dr. Brian Johnson",
        role: "Software Engineer"
    },
    {
        img: t6,
        name: "Dr. Emily Zhang",
        role: "UI/UX Designer"
    },
    {
        img: t7,
        name: "Dr. Marcus Lee",
        role: "Machine Learning Engineer"
    },
    {
        img: t8,
        name: "Dr. Sophia Patel",
        role: "Cloud Solutions Architect"
    },
];

function Team() {
  return (
    <>
    <section className='team' id='team'>
        <h3>OUR TEAM</h3>
        <h2>Dedicated, Innovative, Collaborative, Passionate</h2>
        <div className='team-cards'>
            {team.map((item,index)=>(
                <div className='team-card' key={index}>
                    <div className='img-container'>
                        <img src={item.img} alt={item.name}></img>
                    </div>
                    <h2>{item.name}</h2>
                    <p>{item.role}</p>
                </div>
            ))}
        </div>
    </section>
    </>
  )
}

export default Team