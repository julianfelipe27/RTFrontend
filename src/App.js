import React from 'react';
import './App.css';
import Route from 'react-router-dom/Route'
import Home from './pages/Home'
import LoginE from './pages/LoginEstudiante'
import LoginT from './pages/LoginTutor'
import RegistroE from './pages/RegistroCliente'
import PanelE from './pages/PanelEstudiante'
import SolicitarT from './pages/SolicitarTutoria'
import { HashRouter } from 'react-router-dom'
import VerificarCuenta from './pages/VerificarCuenta/verificar-cuenta.js'
import RecuperarCuenta from './pages/RecuperarCuenta/recuperar-cuenta.js'
import EnviarCorreo from './pages/RecuperarCuenta/envio-correo.js'


function App() {

  return (
    <div className="App">
      <HashRouter>
       <Route exact path="/" component={Home} />
        <Route path="/loginEstudiante" component={LoginE} />
        <Route path="/loginTutor" component={LoginT} />
        <Route  path='/registroEstudiante' component={RegistroE} />
        <Route path='/panelEstudiante'component={PanelE} />
        <Route path='/pedidoTutoria'component={SolicitarT} />
        <Route path='/verificarCuenta'component={VerificarCuenta} />
        <Route path='/recuperarCuenta'component={RecuperarCuenta} />
        <Route path='/envioCorreo'component={EnviarCorreo} />
      </HashRouter>
    </div>
  );
}

export default App;
