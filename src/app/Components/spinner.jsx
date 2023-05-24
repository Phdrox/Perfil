 'use client'
 import React from "react"
 import "../Style/spinner.css"
 import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
 export default function Spinner(props){
       useEffect(()=>Aos.init(),[])
    return(
        <>
 
         <div id="spin" data-aos="fade-in" data-aos-delay={props.delay}><span >{props.nome}</span><p id="texto">{props.nivel}</p></div>
         
        </>
     )
 }