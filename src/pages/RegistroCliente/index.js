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

    showPassword1=()=>{

        this.pass1.type='text'
    }

    hidePassword1=()=>{

      this.pass1.type='password'
    }

    showPassword2=()=>{

        this.pass2.type='text'
    }

    hidePassword2=()=>{

      this.pass2.type='password'
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
            <div className="banner">
              <h2 className="bigTitle">Crear Cuenta</h2>
            </div>
            <section className='mainRegister'>
              <div  className='formRegister'>
                  <div className="nombreYApellido">
                        <input id="nombre" type="text"  placeholder='Nombre' required ></input>
                        <input id='apellido' type="text"  placeholder='Apellido' required ></input>
                      </div>
                      <input id='email'  type="email"  placeholder='Correo electrónico' required></input>
                      <select name="universidad">
                        <option value="1">Universidad Icesi</option>
                        <option value="2">Universidad Javeriana</option>
                        <option value="3">Universidad del Valle</option>
                      </select>
                      <div className='passwordContent'>
                        <input className='passwordField' ref={element=>{this.pass1=element}} id='password'type='password' minLength='6'   placeholder='Contraseña' required></input>
                        <img src={ojo} alt='' onMouseUp={this.hidePassword1} onMouseDown={this.showPassword1} id='eyeIcon' className='eye'></img>
                      </div>
                      <div className='passwordContent'>
                        <input className='passwordField' ref={element=>{this.pass2=element}} id='confirmPassword'type='password' minLength='6'   placeholder='Confirmar contraseña' required></input>
                        <img src={ojo} alt='' onMouseUp={this.hidePassword2} onMouseDown={this.showPassword2} id='eyeIcon' className='eye'></img>
                      </div>
                      <img className="masInfo" onClick={this.moreInfo} src={moreInfo} alt=' '></img>
                      <input id='phoneNumber'  type="text"  placeholder='Telefono' className="form"></input>
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
                      <p className="politicas">Al hacer click en "Registrarte", acepta nuestras Condiciones, la
                         la Política de datos y la Política de cookies. Es posible que te
                         enviemos notificaciones por SMS, que puedes desactivar
                         cuando quieras.</p>
                      <input  className="button" onClick={()=>{this.registerUser(this.parsingField('nombre'),this.parsingField('apellido'),this.parsingField('phoneNumber'), this.parsingField('password'))}} type='submit' value='Registrarte'></input>
                      <span ref={(element)=>{this.validations=element}} id='validation'></span>
                      <hr/>
                      <p className="ini">¿Ya tienes cuenta? <a href="">Inicia sesión</a></p>
                      <br></br>
              </div>
              <div className='imgRegister'>
                <img src={backgroundStudent} alt=''></img>
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
