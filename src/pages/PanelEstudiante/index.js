import React, { Component } from 'react';
import BarNavigation from './../../components/BarNavigation'
import Footer from './../../components/Footer'
import mainLogo from './../../img/footer/mainLogoWhite.png'
import SideHome from './../../components/SideHome'
import Route from 'react-router-dom/Route'
import TutorialContent from './../../pages/TutorialContent'
import ModificarInformacion from './../../pages/ModificarInformacion/containers/update-info-client.js'
import UpdatePassword from './../../pages/ModificarInformacion/containers/update-password.js'
import SideHomeHorizontal from './../../pages/SideBarHorizontal/index.js'
import InicioEstudiante from './InicioEstudiante/index.js'
import { HashRouter } from 'react-router-dom'
import './styles.css'

class PanelStudent extends Component {
    render() {
        return (
            <div className='panelStudent'>
              <header>
                <div className='headerNav'>
                  <BarNavigation mainLogo={mainLogo} classBar='barNavigation2'></BarNavigation>
                </div>
              </header>
              <section className='main'>
                <div className="navigatioSideHorizontal">
                  <SideHomeHorizontal />
                </div>
                <div className='panelStudentContent'>
                  <div className='navigationSideBar'>
                    <SideHome/>
                  </div>
                  <div className='informationContent'>
                    <HashRouter>
                      <Route path='/panelEstudiante/tutorias' component={TutorialContent}></Route>
                      <Route path='/panelEstudiante/informacion' component={ModificarInformacion}></Route>
                      <Route path='/panelEstudiante/contraseña' component={UpdatePassword}></Route>
                      <Route path='/panelEstudiante/inicioEstudiante' component={InicioEstudiante}></Route>
                    </HashRouter>
                  </div>
                </div>
              </section>
              <section className='footer'>
                <Footer classColor='black'/>
              </section>
            </div>
        );
    }

    }



export default PanelStudent;
