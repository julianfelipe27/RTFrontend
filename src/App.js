import React from 'react';
import './App.css';
import Route from 'react-router-dom/Route'
import Home from './pages/Home'
import LoginE from './pages/LoginEstudiante'
import LoginT from './pages/LoginTutor'
import RegistroE from './pages/RegistroCliente'
import PanelE from './pages/PanelEstudiante'
import SolicitarT from './pages/SolicitarTutoria'
import UpdateInfoClient from './pages/ModificarInformacion/containers/update-info-client.js'
import { HashRouter } from 'react-router-dom'


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
        <Route path='/editProfile'component={UpdateInfoClient} />
      </HashRouter>
    </div>
  );
}

export default App;
