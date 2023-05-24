'use client'
import Pictures from "./pictures"
import "../Style/Project.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Projects(){
    useEffect(()=>Aos.init({duration:300}),[]);
    return(
     
     <div className="code">
      <h1>Projetos</h1>
     <div className="projetos">
     <Pictures url />
     <Pictures url />
     <Pictures url />
     <Pictures url />
     </div>
     </div>
    )
}