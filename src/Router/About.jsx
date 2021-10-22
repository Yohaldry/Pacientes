import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import AboutInicio from '../Containers/AboutInicio'
import About_PacienteNuevo from '../Containers/About_PacienteNuevo';

const router = () => {
    return (
                   <Router>
                        <Switch>
                              <Route exact path="/" component={AboutInicio} />
                              <Route exact path="/pacientenuevo" component={About_PacienteNuevo}/>
                        </Switch>
                 </Router>
    )
}

export default router
