'use client'
import Image from "next/image"
import "../Style/pictures.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

    

export default function Pictures(props){
useEffect(()=>Aos.init({duration:300}),[]);


return(
    
       <span id="picture" data-aos="flip-down"><Image src={props.url} width={500} height={300} /></span> 

)



}