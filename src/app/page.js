import { IoIosArrowDown} from "react-icons/io";
import Skills from "./Components/Skills";
import PageHome from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projetos";
export default function Home() {





  return (
  <>
  <div><PageHome/>
  <a id="scroll" href="#about"><IoIosArrowDown id="scroll1" /><IoIosArrowDown id="scroll1"  /></a>
  </div>
   
   <span id="about" ><About /></span>
  
   <Skills/>
   <Projects/>
  
  </>
 
  )
}
