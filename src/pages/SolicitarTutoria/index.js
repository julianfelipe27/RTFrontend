import React, { Component } from 'react';
import BarNavigation from '../../components/BarNavigation'
import Footer from '../../components/Footer'
import Divider from '@material-ui/core/Divider'

import banner from './../../img/banner.jpg'
import fecha from './../../img/fecha.png'
import hora from './../../img/hora.png'
import materias from './../../img/materias.png'
import temas from './../../img/temas.png'
import cantidadPersonas from './../../img/cantidadPersonas.png'
import mainLogo from './../../img/mainLogo.png'

import './styles.css'

class SoiicitarTutoria extends Component {
    render() {
        return (
            <div className='divRegister'>
                <header className='registerHeader'>
                    <BarNavigation className='bar' classBar='barNavigation2' mainLogo={mainLogo}/>
                </header>

                <section className=''>
                    <form className='formTutorial'>
                      <div>
                        <img src={banner} alt=' ' className="banner"></img>
                        <p className="leyenda">
                          Aquí podrás pedir la tutoria que necesites
                          el día y a la hora que quieras
                        </p>
                      </div>
                      <div className="spaceB">
                        <img src={fecha} alt=' ' className="icon"></img>
                        <label for="fecha" className="labels">Fecha: </label>
                        <input name="fecha" type="date" required className="inputs"></input>
                      </div>
                      <div className="spaceB">
                        <img src={hora} alt=' ' className="icon"></img>
                        <label className="labels">Hora: </label>
                        <input type="time" required className="inputs"></input>
                      </div>
                      <div className="spaceB">
                        <img src={materias} alt=' ' className="icon"></img>
                        <label for="materia" className="labels">Materias: </label>
                        <select name="materia" className="inputs">
                          <option value="default">-------</option>
                          <option value="1">Cálculo de Varias</option>
                          <option value="2">Ingeniería Económica</option>
                          <option value="3">Econometría</option>
                        </select>
                      </div>
                      <div className="spaceB">
                        <img src={temas} alt=' ' className="icon"></img>
                        <label for="temas" className="labels">Temas: </label>
                        <select name="temas" className="inputs">
                          <option value="default">-------</option>
                          <option value="1">Derivadas</option>
                          <option value="2">Integrales</option>
                          <option value="3">Elasticidad</option>
                        </select>
                      </div>
                      <div className="spaceB">
                        <img src={cantidadPersonas} alt=' ' className="icon"></img>
                        <label for="cantidadPersonas" className="labels">Cantidad de Personas: </label>
                        <input type='number' className="inputs" min="1" max="5"></input>
                      </div>
                      <div className="spaceB">
                        <img src={cantidadPersonas} alt=' ' className="icon"></img>
                        <input type='text' className="precio" disabled="disabled" placeholder='Valor'></input>
                        <input type='submit' value='Solicitar Monitoria' formMethod='POST' className="btnTutoria"></input>
                      </div>
                      <br></br>
                    </form>
                </section>

                <div className='divider'>
                 <Divider />
                 <br></br>
                </div>

                <section className='footerLogin'>
                    <Footer classColor='black'/>
                </section>
            </div>
        );
    }
}

export default SoiicitarTutoria;
