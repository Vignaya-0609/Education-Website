import React from 'react'
import c1 from "../assets/img/courses/o1.png";
import cc1 from "../assets/img/courses/o1.1.png";
import c2 from "../assets/img/courses/o2.png";
import cc2 from "../assets/img/courses/o2.1.png";
import c3 from "../assets/img/courses/o3.png";
import cc3 from "../assets/img/courses/o3.1.png";
import c4 from "../assets/img/courses/o4.png";
import cc4 from "../assets/img/courses/o4.1.png";
import c5 from "../assets/img/courses/o5.png";
import cc5 from "../assets/img/courses/o5.1.png";
import c6 from "../assets/img/courses/o6.png";
import cc6 from "../assets/img/courses/o6.1.png";
import c7 from "../assets/img/courses/o7.png";
import cc7 from "../assets/img/courses/o7.1.png";
import c8 from "../assets/img/courses/o8.png";
import cc8 from "../assets/img/courses/o8.1.png";
import c9 from "../assets/img/courses/o9.png";
import cc9 from "../assets/img/courses/o9.1.png";
import c10 from "../assets/img/courses/o10.png";
import cc10 from "../assets/img/courses/o10.1.png";
import c11 from "../assets/img/courses/o9.png";
import cc11 from "../assets/img/courses/o9.1.png";
import c12 from "../assets/img/courses/o10.png";
import cc12 from "../assets/img/courses/o10.1.png";
const courses=[
    {
        img:c1,
        img2:cc1,
        title:"UI/UX Design Courses",
        course:25
    },
    {
        img:c2,
        img2:cc2,
        title:"Art & Design",
        course:25
    },
    {
        img:c3,
        img2:cc3,
        title:"Computer Science",
        course:10
    },
    {
        img:c4,
        img2:cc4,
        title:"History & Archeologic",
        course:15
    },
    {
        img:c5,
        img2:cc5,
        title:"Software Engineering",
        course:30
    },
    {
        img:c6,
        img2:cc6,
        title:"Information Software",
        course:60
    },
    {
        img:c7,
        img2:cc7,
        title:"Health & Fitness",
        course:10
    },
    {
        img:c8,
        img2:cc8,
        title:"Marketing",
        course:30
    },
    {
        img:c9,
        img2:cc9,
        title:"Graphic Design",
        course:80
    },
    {
        img:c10,
        img2:cc10,
        title:"Music",
        course:120
    },
    {
        img:c11,
        img2:cc11,
        title:"Business Administartion",
        course:17
    },
    {
        img:c12,
        img2:cc12,
        title:"Web Management",
        course:17
    },
]
function Courses() {
  return (
    <>
    <section className='courses' id='courses'>
        <h3>OUR COURSES</h3>
        <h2>Browse Our Online Courses</h2>
        <div className='course-cards'>
        {courses.map((course, index) => (
          <div key={index} className='course-card'>
            <div className='image-container'>
              <img src={course.img} alt={course.title} className='default-img' />
              <img src={course.img2} alt={course.title} className='hover-img' />
            </div>
            <h3>{course.title}</h3>
            <p>{course.course} Courses</p>
          </div>
        ))}
        </div>
    </section>
    </>
  )
}

export default Courses