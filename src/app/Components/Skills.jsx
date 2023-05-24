'use client'
import React from "react";
import "../Style/Skills.css"
import Spinner from "./spinner";
import { SiPhp } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import {SiMysql} from "react-icons/si";
import { SiCss3} from "react-icons/si";
import { DiJava } from "react-icons/di";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function Skills(props){
  useEffect(()=>Aos.init({duration:400}),[])
    
    return(
  <div className="skills">
    <h1>Skills</h1>
   <div className="spinners" data-aos="fade-in">
   <Spinner nome={<SiPhp/>} nivel="Básico" id="spine" delay="1"/>
   <Spinner nome={<SiPython/>} nivel="Básico" id="spin" delay="2"/>
   <Spinner nome={<SiJavascript/>} nivel="Básico" id="spin" delay="3"/>
   <Spinner nome={<SiHtml5/>} nivel="Intermediário" id="spin" delay="4"/>
   <Spinner nome={<SiMysql/>} nivel="Básico" id="spin" delay="5"/>
   <Spinner nome={<SiCss3/>} nivel="Intermediário" id="spin" delay="6"/>
   <Spinner nome={<DiJava/>} nivel="Básico" id="spin" delay="7"/>
   </div>
   </div>
    )





}