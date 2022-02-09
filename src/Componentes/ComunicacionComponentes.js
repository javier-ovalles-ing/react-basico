import react, {Component} from "react";

export default class Padre extends Component {

    state = {
        contador: 0,
    }

    incrementoContador = (e)=> {
        this.setState({
            contador:this.state.contador+1
        })
    }
    render(){
        return(
            <>
              <h2>Comunicacion entre Componentes</h2>
              <p>
                  Contador <b>{this.state.contador}</b>
               </p>
              <Hijo mensaje="Mensaje para el hijo 1" incrementoContador={this.incrementoContador}></Hijo>
              <Hijo mensaje="Mensaje para el hijo 2" incrementoContador={this.incrementoContador}></Hijo>
            </>
        );
    }
}

function Hijo(props){
    return( 
         <>
           <h3>{props.mensaje}</h3>
           <button onClick={props.incrementoContador}></button>
        </>
           )
}