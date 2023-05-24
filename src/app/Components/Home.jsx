'use client'
import About from "./About";
import {ImGithub} from "react-icons/im";
import {ImFacebook2} from "react-icons/im";
import {ImLinkedin} from "react-icons/im";

import "../Style/PageHome.css";
import { MaquinaDeEscrever } from "./efeitoescrita";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";





 

export default function PageHome(){

   useEffect(()=>Aos.init({duration:250}),[]);


return(
    
    <div className="inicial">

        <div className="home">
     

       {<MaquinaDeEscrever id="name" text=" PEDRO XIMENES" />}
        
        
           <ul className="icons">
        <li><a href="https://www.facebook.com/profile.php?id=100049351781303" target="_blank"><ImFacebook2/></a></li>
        <li><a href="https://www.linkedin.com/in/phmx-o-o-0b5a6a220/" target="_blank"><ImLinkedin/></a></li>
        <li><a href="https://github.com/Phdrox" target="_blank"><ImGithub/></a></li>
        </ul>
         </div>

         
       </div>
)
}