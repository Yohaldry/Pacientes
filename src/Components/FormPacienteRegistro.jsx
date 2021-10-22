import React, {useState} from 'react'

const FormPacienteRegistro = () => {

        // ---------------Seccion Niños------------------ handlechange

    const [datosniños, setDatosNiños] = useState({

        nombre:'',
        id:'',
        peso:'',
        estatura:'',
        edad:'',
        valor:''
    })

    const [valorNiños, setValorNiños] = useState()

    const handleChangeNiños = (e) => {

        setDatosNiños({
            ...datosniños,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmitNiños = (e) => {

        e.preventDefault();

        if(datosniños.valor === ''){
            alert('Verificar valor')
        }else{

        
        console.log(datosniños.nombre + ' ' + datosniños.apellido)
        }
    }

    const cuentaNiños = () => {

            const result = datosniños.peso - datosniños.estatura + 3
            alert('Ingresa este numero en el campo Valor' + '  ' + result)
    }

    // -----------------------

    // Seccion Joven

    const [fuma, setFuma] = useState(false)


    const [datosJoven, setDatosJoven] = useState({

        nombreJoven:'',
        id:'',
        pesoJoven:'',
        fumandoJoven:'',
        estaturaJoven:'',
        valorJoven:''
    })

    const [valorJoven, setValorJoven] = useState()

    const handleChangeJoven = (e) => {
        console.log(e.target.value)
        setDatosJoven({
            ...datosJoven,
            [e.target.name] : e.target.value
        })
    }

    const cuentaJoven = () => {

        const result = datosJoven.fumandoJoven / 4 + 2
        alert('Ingresa este numero en el campo Valor'  +  '  ' + result)
        console.log(result)
        }


        const handleSubmitJoven = (e) => {

            e.preventDefault();

            if(datosJoven.valorJoven === ''){
                alert('Verificar valor')
            }else{
    
            console.log(datosJoven.nombreJoven + ' ' + datosJoven.pesoJoven)
            }
        }
    // ------------------------


        // Seccion Anciano

        const [mayorA, setMayorA] = useState(false)


    const [datosAnciano, setDatosAnciano] = useState({

        nombreAnciano:'',
        id:'',
        pesoAnciano:'',
        fumandoAnciano:'',
        estaturaAnciano:'',
        valorAnciano:''
    })

    const [valorAnciano, setValorAnciano] = useState()

    const handleChangeAnciano = (e) => {
        console.log(e.target.value)
        setDatosAnciano({
            ...datosAnciano,
            [e.target.name] : e.target.value
        })
    }

    const cuentaAnciano = () => {

        if( datosAnciano.mayorA > 0){
            const resultAnciano = datosAnciano.mayorA / 20 + 4
            alert('Ingresa este numero en el campo Valor'  +  '  ' + resultAnciano)
        }else if( datosAnciano.menorA > 0){

            const resultAnciano = datosAnciano.mayorA / 30 + 3
            alert('Ingresa este numero en el campo Valor'  +  '  ' + resultAnciano)
        }
    
    }



        const handleSubmitAnciano = (e) => {

            e.preventDefault();

    
            console.log(datosAnciano.nombreAnciano + ' ' + datosAnciano.pesoAnciano)
            
        }


        //----------------
    
    return (
        <div className="About_formRegistro">
            
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Niño</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Joven</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Anciano</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">


                <form onSubmit={handleSubmitNiños}>
                    <div class="mb-3">
                        <h5>El niño Se llama <p className="MuestraNombre">{datosniños.nombre}</p></h5>
                        <input type="text" class="form-control mb-3" id="nombre" name="id" aria-describedby="emailHelp" placeholder="Numero de historial" onChange={handleChangeNiños}/>
                        <input type="text" class="form-control mb-3" id="apellido" name="nombre" placeholder="Nombre" onChange={handleChangeNiños}/>
                        <input type="number" class="form-control mb-3" id="peso" name="peso" placeholder="Peso" onChange={handleChangeNiños}/>
                        <input type="number" class="form-control mb-3" id="estatura" name="estatura" placeholder="Estatura" onChange={handleChangeNiños}/>
                        <input type="number" class="form-control mb-3" id="edad" name="edad" placeholder="Edad" onChange={handleChangeNiños}/>
                        <input type="text" class="form-control mb-3" id="valor" name="valor" onChange={handleChangeNiños} placeholder="Valor"/>
                    </div>
                    <button class="btn btn-warning" onClick={cuentaNiños}>Ver Valor</button>
                    <button type="submit" class="btn btn-primary">Guardar</button>
            </form>



                </div>


                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    
                    
                <form onSubmit={handleSubmitJoven}>
                    <div class="mb-3">
                        <h5>El Joven Se llama <p className="MuestraNombre">{datosJoven.nombreJoven} </p></h5>
                        <input type="text" class="form-control mb-3" id="nombre" name="id" aria-describedby="emailHelp" placeholder="Numero de historial" onChange={handleChangeJoven}/>
                        <input type="text" class="form-control mb-3" id="apellido" name="nombreJoven" placeholder="Nombre" onChange={handleChangeJoven}/>
                        <input type="number" class="form-control mb-3" id="peso" name="pesoJoven" placeholder="Peso" onChange={handleChangeJoven}/>
                        <input type="number" class="form-control mb-3" id="peso" name="estaturaJoven" placeholder="Estatura" onChange={handleChangeJoven}/>

                        <div class="btn-group" role="group" aria-label="Basic example">
                        <label>Usted Fuma?</label><br/>
                            <button type="button" onClick={() => {
                                setFuma(true)
                            }} 
                            class="btn btn-danger">SI</button>
                            
                            <button type="button"
                            onClick={() => {
                                setFuma(false)
                                setValorJoven(2)
                            }}
                            class="btn btn-success">NO</button>
                                {
                                    fuma ?(
                                        <div>
                                            <input type="text" class="form-control mb-3" id="peso" name="fumandoJoven" placeholder="Años fumando?" onChange={handleChangeJoven}/>
                                        </div>
                                    ): (
                                        <div>

                                        </div>
                                    )
                                }
                           
                           
                        </div>

                        <input type="text" class="form-control mb-3" id="valor" value={valorJoven}  name="valorJoven" placeholder="Valor"/>
                    </div>
                    <button onClick={cuentaJoven} class="btn btn-warning" >Ver Valor</button>
                    <button type="submit" class="btn btn-primary">Guardar</button>
            </form>

                    </div>

                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">


                <form onSubmit={handleSubmitAnciano}>
                    <div class="mb-3">
                        <h5>El Señor Mayor Se llama <p className="MuestraNombre">{datosAnciano.nombreAnciano} </p></h5>
                        <input type="text" class="form-control mb-3" id="nombre" name="id" aria-describedby="emailHelp" placeholder="Numero de historial" onChange={handleChangeAnciano}/>
                        <input type="text" class="form-control mb-3" id="apellido" name="nombreAnciano" placeholder="Nombre" onChange={handleChangeAnciano}/>
                        <input type="number" class="form-control mb-3" id="peso" name="pesoAnciano" placeholder="Peso" onChange={handleChangeAnciano}/>
                        <input type="number" class="form-control mb-3" id="peso" name="estaturaAnciano" placeholder="Estatura" onChange={handleChangeAnciano}/>

                        <div class="btn-group" role="group" aria-label="Basic example">
                        <label>Tiene mas de 60 años ?</label><br/>

                            <button type="button" onClick={() => {
                                setMayorA(true)
                            }} 
                            class="btn btn-danger">SI</button>
                            
                            <button type="button"
                            onClick={() => {
                                setMayorA(false)
                            }}
                            class="btn btn-success">NO</button>
                                {
                                    mayorA ?(
                                        <div>
                                            <input type="text" class="form-control mb-3" id="peso" name="mayorA" placeholder="Su Edad mayor a 60 es?" onChange={handleChangeAnciano}/>
                                        </div>
                                    ): (
                                        <div>
                                            <input type="text" class="form-control mb-3" id="peso" name="menorA" placeholder="Su Edad menor a 60 es?" onChange={handleChangeAnciano}/>
                                        </div>
                                    )
                                }
                           
                           
                        </div>

                        <input type="text" class="form-control mb-3" id="valor" value={valorJoven}  name="valorJoven" placeholder="Valor"/>
                    </div>
                    <button onClick={cuentaAnciano} class="btn btn-warning" >Ver Valor</button>
                    <button type="submit" class="btn btn-primary">Guardar</button>
            </form>


                </div>
            </div>
            
          

        </div>
    )
 }

export default FormPacienteRegistro
