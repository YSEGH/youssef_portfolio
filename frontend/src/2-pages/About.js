import React from "react";
import "../1-css/About.css";
import { AiOutlineCode, AiOutlineTool } from "react-icons/ai";

export default function About() {
  return (
    <div className="about">
      <h1>
        Hey, c'est Youssef. <span>Enchanté.</span>
      </h1>
      <p>
        Jeune développeur qui s'est découvert une passion pour le développement
        web sur le tard. J'ai étudié le developpement front-end chez{" "}
        <span>Openclassroom </span>
        en 2019. Ma curiosité m'a ensuite amené à me tourner vers le
        développement back-end à travers une formation MERN stack chez
        <span> Eduforma</span>. Amoureux du code propre, d'interfaces simples et
        épurées, je souhaite mettre à profit mes compétences sur des projets
        intéressants et stimulants.
      </p>
      <div className="details-table">
        <div className="langages part">
          <AiOutlineCode size={60} />
          <h2>Languages</h2>
          <p>
            <span>Front-end : HTML, CSS, Javascript, React.</span>
          </p>
          <p>
            <span>Back-end : Node, MongoDB, MySQL, Express.</span>
          </p>
          <p>
            <span>Autre : Bootstrap, Redux.</span>
          </p>
        </div>
        <div className="utils part">
          <AiOutlineTool size={60} />
          <h2>Boîte à outils</h2>
          <p>
            <span>
              Outils : Visual Studio Code, Github, Terminal, Webpack, Heroku.
            </span>
          </p>
          <p>
            <span>Autre : Photoshop, AdobeXD.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
