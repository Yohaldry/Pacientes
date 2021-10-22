import React, {Fragment} from 'react'
import FormPacienteRegistro from '../Components/FormPacienteRegistro'
import {Link} from "react-router-dom";

const About_PacienteNuevo = () => {
    return (
      <Fragment>
      <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <Link to="./" className="btn btn-danger">Salir</Link>
                <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="45" height="34" class="d-inline-block align-text-top" />
                Registro de nuevo Paciente
              </a>
            </div>
      </nav>

      <FormPacienteRegistro />
</Fragment>
    )
}

export default About_PacienteNuevo
