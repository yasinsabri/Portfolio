import React from 'react'
import Hero from '../component/element/Hero'
import About from '../component/element/About'
import Skills from '../component/element/Skills'
import Portfolio from '../component/element/Portfolio'

const Home = () => {
  return (
    <React.Fragment>
        <Hero/>
        <About/>
        <Skills/>
        <Portfolio/>
    </React.Fragment>
  )
}

export default Home
