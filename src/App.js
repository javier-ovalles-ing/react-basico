import React from "react";
import logo from './logo.svg';
import Componente from "./Componentes/Componente";
import Propiedades from "./Componentes/Propiedades";
import Estado from "./Componentes/Estado";
import RenderizadoCondicional from "./Componentes/RenderizadoCondicional";
import RenderizadoElementos from "./Componentes/RenderizadoElementos";
import {EventosES6, EventosES7,MasSobreEventos} from "./Componentes/Eventos";
import ComunicacionComponentes from "./Componentes/ComunicacionComponentes";
import CicloVida from "./Componentes/CicloVida";
import AjaxApis from "./Componentes/AjaxApis";
import ContadorHooks from "./Componentes/ContadorHooks";
import ScrollHooks from "./Componentes/scrollHook";
import RelojHooks from "./Componentes/RelojHooks";
import AjaxHooks from "./Componentes/AjaxHooks";
import HooksPersonalizados from "./Componentes/HooksPersonalizados";
import Referencias from "./Componentes/Referencias";
import Formularios from "./Componentes/Formularios";
import Estilos from "./Componentes/Estilos";
import './App.css';
import ComponentesEstilizados from "./Componentes/ComponentesEstilizados";





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
        <Componente msg="soy una propiedad" />
        <hr />
        <Propiedades cadena="Esto es uuna cadena"
                     numero={19}
                     booleano={false}
                     arreglo={[1,2,3]}
                     objeto={{nombre:"jon",correo:"jonmircha@gmail.com"}}
                     elementoReact={<i>Esto es un elemento react</i>}
                     funcion={(num)=>num*num}
                     ComponenteReact={<Componente msg="Soy un componente pasado como props" />}
        />
        <hr />
      <Estado/>
      <hr/>
      <RenderizadoCondicional/>
      <hr/>
      <RenderizadoElementos/>
      <hr />
      <EventosES6/>
      <hr />
      <EventosES7/>
      <hr />
      <MasSobreEventos/>
      <hr />
{/*       <ComunicacionComponentes/>
      <hr/>
      <CicloVida/>
      <hr/>
      <AjaxApis/>
      <hr/>
      <ContadorHooks/>
      <hr/>
      <ScrollHooks/>
      <hr/>
      <RelojHooks/>
      <hr/>
      <AjaxHooks/> 
      <hr/>
      <HooksPersonalizados/>
      <hr/>
      <Referencias/> */}
      <hr/>
      <Formularios/>
      <br/>
      <Estilos/>
      <br/>
      <ComponentesEstilizados/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        </section>
      </header>

    </div>
  );
}

export default App;
