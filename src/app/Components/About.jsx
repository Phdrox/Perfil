'use client'
import Image from "next/image"
import perfil from "../Images/perfil.gif"
import Aos from "aos";
import "aos/dist/aos.css"
import "../Style/Sobremim.css"
import { useEffect } from "react";
export default function About(){
 
useEffect(()=>Aos.init({duration:100}),[])


return(
   <div className="sobre">
    <Image src={perfil}  height={500} width={700} alt="Pedrin" id="img" data-aos="fade-right"/>
    <div className="texto" data-aos="fade-left" >
      <h1 id="titulo">Sobre mim</h1>
        <p>Olá me chamo Pedro, desde meus 10 anos de idade gostava de coisas relacionadas a tecnologia e computadores, 
         quando cheguei aos meus 16 anos, quando terminava de estudar minhas matérias do colégio, tirava um tempo para estudar
          liguagens de marcação como HTML e CSS, após isso decidir aprender javascript. 
          Hoje estou em fase de desenvolvimento na faculdade Estácio de Sá no curso Ciência de Computação, 
         me encontro ainda no 5° período, buscando sempre aperfeiçoar minhas habilidades com cursos externos.
          Realizo projetos para relembrar algumas linhas de código ou exercitar o que estou  aprendendo nas aulas.</p>

    </div>
   </div>
)



}