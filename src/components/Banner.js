import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
function Banner() {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    <div className='banner'>
        <h3>Welcome to EduPursuit</h3>
        <h2>Best Online Education</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <div className='buttons'>
            <button onClick={()=>scrollToElement("about")}>Get Started Now &nbsp;  <FaLongArrowAltRight/></button>
            <button onClick={()=>scrollToElement("courses")}>View Courses &nbsp;  <FaLongArrowAltRight/></button>
        </div>
    </div>
    </>
  )
}

export default Banner