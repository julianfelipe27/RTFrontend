import React, { Component } from 'react';
import BarNavigation from '../../components/BarNavigation'
import Footer from '../../components/Footer'
import Divider from '@material-ui/core/Divider'

import user from './../../img/usuario.png'

import mainLogo from './../../img/mainLogo.png'
import backgroundStudent from './../../img/registro/backgroundStudent.jpg'
import ojo from './../../img/registro/ojo.png'
import moreInfo from './../../img/moreInfo.png'
import './styles.css'

import axios from 'axios'

class RegistroE extends Component {

    showPassword=()=>{

        this.pass.type='text'
    }

    hidePassword=()=>{

      this.pass.type='password'
    }
    moreInfo() {
      var elementsHiden = document.getElementsByClassName('form');
      if(elementsHiden[0].style.display !== 'block') {
        for (let i = 0; i < elementsHiden.length; i++) {
          elementsHiden[i].style.display = "block";
        }

      } else {
        for (let i = 0; i < elementsHiden.length; i++) {
          elementsHiden[i].style.display = "none";
        }
      }

    }

    parsingField=identificador=>{

      return (document.getElementById(identificador).value)
    }

    registerUser=(name,lastName,email,password)=>{

      const user= {

        name: name,
        lastName:lastName,
        email:email,
        password:password
      }
      const url='http://localhost:8080/clients/students'

      console.log(name,lastName,email,password)

      axios.post(url,user,{
        headers:{
          'Content-Type':'application/json',
        }
      }).then(response=>{
        if(response.status===200){
          console.log(response)
        }

      }
      ).catch(error=>{
       // var {errors}=error.response.data
      })
      this.validations.textContent='El campo no puede estar vacío'
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
                    <div  className='formRegister'>
                      <div className='formIcon'>
                        <img src={user} alt=' '></img>
                      </div>
                      <p className='session'>Crea tu cuenta</p>
                      <input id="nombre" type="text"  placeholder='Nombre(s)' required></input>
                      <input id='apellido' type="text"  placeholder='Apellido(s)' required></input>
                      <input type='text'  placeholder='Teléfono' ></input>
                      <select name="universidad" className="f">
                        <option value="1">Universidad Icesi</option>
                        <option value="2">Universidad Javeriana</option>
                        <option value="3">Universidad del Valle</option>
                      </select>
                      <div className='passwordContent'>
                        <input className='passwordField' ref={element=>{this.pass=element}} id='password'type='password' minLength='6'   placeholder='Contraseña' required></input>
                        <img src={ojo} alt='' onMouseUp={this.hidePassword} onMouseDown={this.showPassword} id='eyeIcon' className='eye'></img>
                      </div>
                      <img className="masInfo" onClick={this.moreInfo} src={moreInfo} alt=' '></img>
                      <input id='email' className="form" type="email"  placeholder='Ingresa tu correo' required></input>
                      <input type='text'  placeholder='Codigo Universitario' className="form"></input>
                      <select className="form" name="pais">
                        <option value="1">Colombia</option>
                        <option value="2">Venezuela</option>
                        <option value="3">Chile</option>
                      </select>
                      <select className="form" name="departamento">
                        <option value="1">Valle del Cauca</option>
                        <option value="2">Nariño</option>
                        <option value="3">Huila</option>
                      </select>
                      <select className="form" name="ciudad" placeholder='Ciudad'>
                        <option value="1">Cali</option>
                        <option value="2">Palmira</option>
                        <option value="3">Restrepo</option>
                      </select>
                      <input  onClick={()=>{this.registerUser(this.parsingField('nombre'),this.parsingField('apellido'),this.parsingField('email'), this.parsingField('password'))}} type='submit' value='Registrarme'></input>
                      <span ref={(element)=>{this.validations=element}} id='validation'></span>
                      <br></br>
                    </div>
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
