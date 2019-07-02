import React, { Component } from 'react';
import BarNavigation from '../../components/BarNavigation'
import Footer from '../../components/Footer'
import Divider from '@material-ui/core/Divider'

import user from './../../img/usuario.png'

import mainLogo from './../../img/mainLogo.png'
import backgroundStudent from './../../img/registro/backgroundStudent.jpg'
import moreInfo from './../../img/moreInfo.png'
import './styles.css'

class RegistroE extends Component {
    moreInfo() {
      var elementsHiden = document.getElementsByClassName('form');
      if(elementsHiden[0].style.display === "none") {
        for (let i = 0; i < elementsHiden.length; i++) {
          elementsHiden[i].style.display = "block";
        }
      } else {
        for (let i = 0; i < elementsHiden.length; i++) {
          elementsHiden[i].style.display = "none";
        }
      }
    }
    render() {
        return (
            <div className='divRegister'>
                <header className='registerHeader'>
                    <BarNavigation className='bar' classBar='barNavigation2' mainLogo={mainLogo}/>
                </header>
                <section className='mainRegister'>
                    <div className='imgRegister'>
                        <p><span className='title'>¿Sabias que?</span><br></br>
                        El 99.9% de los estudiantes que han tomado tutorias<br></br>
                        con Red tutores consiguen excelentes resultados  en <br></br>
                        sus exámenes. Anímate y compruebalo.</p>
                        <img src={backgroundStudent} alt=''></img>
                     </div>
                    <form className='formRegister'>
                    <div className='formIcon'>
                    <img src={user} alt=' '></img>
                    </div>
                    <p className='session'>Crea tu cuenta</p>
                    <input type="text" required placeholder='Nombre(s) y Apellidos'></input>
                    <input type="email" required placeholder='Ingresa tu correo' ></input>
                    <input type='password' required placeholder='Contraseña'></input>
                    <img className="masInfo" onClick={this.moreInfo} src={moreInfo} alt=' '></img>
                    <input type='text' required placeholder='Teléfono' className="form"></input>
                    <input type='text' required placeholder='Codigo Universitario' className="form"></input>
                    <select className="form" name="pais">
                      <option value="default">País</option>
                      <option value="1">Colombia</option>
                      <option value="2">Venezuela</option>
                      <option value="3">Chile</option>
                    </select>
                    <select className="form" name="departamento">
                      <option value="default">Departamento</option>
                      <option value="1">Valle del Cauca</option>
                      <option value="2">Nariño</option>
                      <option value="3">Huila</option>
                    </select>
                    <select className="form" name="ciudad">
                      <option value="default">Ciudad</option>
                      <option value="1">Cali</option>
                      <option value="2">Palmira</option>
                      <option value="3">Restrepo</option>
                    </select>
                    <select className="form" name="universidad">
                      <option value="default">Universidad</option>
                      <option value="1">Universidad Icesi</option>
                      <option value="2">Universidad Javeriana</option>
                      <option value="3">Universidad del Valle</option>
                    </select>
                    <input type='submit' value='Registrarme' formMethod='POST'></input>
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

export default RegistroE;
