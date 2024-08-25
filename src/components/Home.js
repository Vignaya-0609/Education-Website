import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Banner from './Banner'
function Home() {
  return (
    <>
    <section className='home' id="home">
        <Logo/>
        <Navbar/>
        <Banner/>
    </section>
    </>
  )
}

export default Home