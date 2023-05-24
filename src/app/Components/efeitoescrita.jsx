'use client';
import { useEffect, useState } from "react";
import "../Style/PageHome.css";

export function MaquinaDeEscrever(props) {
  const [text, setText] = useState("");
  
  const escreverNaTela = (text, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => escreverNaTela(text, i + 1), 100);
    } 
  };

  useEffect(() => {
    setTimeout(() => escreverNaTela(props.text), props?.delay ?? 200);
  }, []);

  return (
    <div id="name">
      {text}
   
    </div>
  );
}


