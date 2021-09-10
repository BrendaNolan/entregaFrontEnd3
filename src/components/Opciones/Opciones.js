import React, {Component} from 'react';


class Opciones extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){

        const {handles, opciones} = this.props;

        return (
        <div className="opciones">
            <div className="opcion">
                <button id="A" className="botones" onClick={handles.botonA}>A</button>
                <h2>{opciones.a}</h2>
           </div>
                               
            <div className="opcion">
                 <button id="B" className="botones" onClick={handles.botonB}>B</button>
                 <h2>{opciones.b}</h2>
             </div>
        </div>
        )
    }

}
export default Opciones;