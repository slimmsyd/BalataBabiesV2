import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Heading from './components/Heading'
import Nav from './components/Nav/Nav'
import About from './components/About'
import JoinSection from './components/JoinSection'
import Inspire from './components/Inspire'
import Roadmap from './components/Roadmap'
import Card from './components/Card'
import Benefits from './components/Benefits'
import Divder from './components/Divider'
import Blog from './components/Blog'
import Team from './components/Team'
import Footer from './components/Footer'
import RoadMap from './components/Roadmap'
import Links from './components/Link-Icon'

import React, {useRef} from 'react';


export default function Home() {

  //scroll effects
  const aboutRef = useRef(null);
  const teamRef = useRef(null); 
  const benefitsRef = useRef(null); 
  const roadMapRef = useRef(null); 
  const homeRef = useRef(null);



  return (
   <div >
        <Nav
                homeRef={homeRef}
                aboutRef = {aboutRef}     
                teamRef = {teamRef}
                benefitsRef = {benefitsRef}
                roadMapRef = {roadMapRef}

            />
            <Links />
    <Heading
      homeRef = {homeRef}
    />
    <About
    aboutRef = {aboutRef}
    />
    <JoinSection />
    <Inspire />
    <RoadMap
    roadMapRef = {roadMapRef}
    />
    <Card />
    <Benefits
      benefitsRef = {benefitsRef}
    />
    <Divder /> 
    <Blog />
    <Team
      teamRef = {teamRef}
    />
    <Footer />
 
   </div>

  
   
  )
}
 