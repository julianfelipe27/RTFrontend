import React, { Component } from 'react';
import BarNavigation from './../../components/BarNavigation'
import Footer from './../../components/Footer'
import mainLogo from './../../img/footer/mainLogoWhite.png'
import SideHome from './../../components/SideHome'
import Route from 'react-router-dom/Route'
import TutorialContent from './../../pages/TutorialContent'
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
                <div className='panelStudentContent'>
                <div className='navigationSideBar'>
                <SideHome/>
                </div>
                <div className='informationContent'>
                <HashRouter>
                    <Route path='/panelEstudiante/tutorias' component={TutorialContent}></Route>
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