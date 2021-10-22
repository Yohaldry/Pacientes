import React from 'react'
import {Link} from "react-router-dom";

const Init = () => {
    return (

             <div className="About_Inicio">
      
                 <Link to="./pacientenuevo" className="BTN_pacienteNuevo">Paciente Nuevo</Link>
                <img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1634866387/Imagen1_zavegl.png" alt="" />
                <button className="BTN_ServiciosGenerales">Servicios Generales</button>
             </div>
        
    )
}

export default Init
