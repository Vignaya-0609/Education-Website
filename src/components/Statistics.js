import React from 'react';
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { MdCastForEducation } from "react-icons/md";
import CountUp from 'react-countup';
const contents=[
    {
        icon:<PiStudentFill/>,
        title:"SUCCESS STORIES",
        count:3000
    },
    {
        icon:<FaChalkboardTeacher/>,
        title:"TRUSTED TUTORS",
        count:320
    },
    {
        icon:<AiFillSchedule/>,
        title:"SCHEDULES",
        count:1000
    },
    {
        icon:<MdCastForEducation/>,
        title:"COURSES",
        count:439
    }
]
function Statistics() {
  return (
    <>
    <section className='statistics'>
        {contents.map((item,index)=>(
            <div className='stats' key={index}>
                <h1>{item.icon}</h1>
                <h4>{item.title}</h4>
                <h2>
                    <CountUp start={0} end={item.count} duration={2.5} />
                </h2>
        </div>
        ))}
        
    </section>
    </>
  )
}

export default Statistics