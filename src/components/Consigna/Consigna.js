import React, {Component} from "react";
import Opciones from "../Opciones/Opciones";
import Recordatorio from "../Recordatorio/Recordatorio";
import data from "../data.json";
import swal from'sweetalert2';


class Consigna extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            ids: 1,
            id: "1",
            arrayOpciones: [],

        }
    }
    
    componentDidMount(){swal.fire("Bienvenido a la aventura")}

    componentDidUpdate = (prevProps, prevState ) => {

        
        const {ids, id, arrayOpciones} = this.state;

        if (prevState.ids !== ids && ids <= 5) {
            arrayOpciones.push(id.substring(1).toUpperCase());
            
        }  

    }


    handleBotonA = () => {
        const {ids} = this.state;

        if (ids < 5) {

            this.setState(
                {
                    ids: ids + 1,
                    id: ids + 1 + 'a',
        
                }
            )
           
        }
    };

    handleBotonB = () => {
        const {ids} = this.state;

        if (ids < 5) {

            this.setState(
                {
                    ids: ids + 1,
                    id: ids + 1 + 'b',
        
                }
            )
           
        }
    };


    render(){

        const { id, arrayOpciones} = this.state;
        const filtrarData = data.find((objeto) => objeto.id.includes(id))
        console.log({filtrarData});
        let handles = {
            botonA: this.handleBotonA,
            botonB: this.handleBotonB,
        }
       

        return (
            <div className="layout">
            <h1 className="consigna">{filtrarData.historia}</h1>

                <Opciones handles={handles} opciones={filtrarData.opciones}/>
                <Recordatorio opcionesPasadas={id.substring(1).toUpperCase()} 
                arrayOpciones={arrayOpciones}/>
            </div>
        )
    }

}


export default Consigna;


/*import React, {Component} from "react";


class Historia extends Component {
render (){
   return (<p>TEXTOUUU </p>
)


}}

*/
