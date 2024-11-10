import Image from "next/image";
import { AiFillHome } from 'react-icons/ai'; // Using Ant Design Icons
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import Section2 from "./section2/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Footer from "./components/Footer"

import React from 'react';

export default function Home(){
  return(
    <div className="Parent" id="Home">
    <div className="content">
      <div className="image">
      <Image src={"/1.png"} alt="profile" width={470} height={100}/>
    </div>
    
    <div className="socialbutton">
<a href="https://www.facebook.com/iffatul.fatima?mibextid=kFxxJD" target="blank"><CiFacebook/></a>
    </div>
  <div className="socialbutton2">
<a href="https://www.linkedin.com/in/iffat-ul-fatima-191128179/" target="blank"><TiSocialLinkedinCircular/></a>
    </div>
    <div className="socialbutton3">
<a href="https://github.com/iffatulfatima" target="blank"><FaGithub/></a>
    </div>
    <div className="tracking-in-expand-scale">
    <div className="h1first">
      <h1>Hi I'm <span>Iffat ul Fatima</span><br /> Web Developer<br /><span>Designing The Future Of <br/>Web development</span></h1>
    </div></div>
    <div className="buttons">
  <a href="/cv.png" download="Iffat Resume"><button className="button1">Download Resume</button></a>    
    </div>




    <div className="check">
    <h1>Check Out My</h1>
    </div>
    </div>
    <Section2/>
    <Skills/>
    <Projects/>
    <Contact/>
<Footer/>
    </div>
  )
}