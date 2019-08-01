import React, { Component } from 'react';
import BarNavigation from '../../components/BarNavigation'
import Footer from '../../components/Footer'
import Divider from '@material-ui/core/Divider'
import mainLogo from './../../img/mainLogo.png'
import backgroundStudent from './../../img/registro/backgroundStudent.jpg'
import ojo from './../../img/registro/ojo.png'
import moreInfo from './../../img/moreInfo.png'
import './styles.css'

import axios from 'axios'

class RegistroE extends Component {
  constructor(props){
    super(props)
    this.state={
      countries:[],
      states:[],
      cities:[],
      instituions:[]
    }
  }
  showPassword1 = () => {
    this.pass1.type = 'text'
  }
  hidePassword1 = () => {
    this.pass1.type = 'password'
  }
  showPassword2 = () => {
    this.pass2.type = 'text'
  }
  hidePassword2 = () => {
    this.pass2.type = 'password'
  }
  moreInfo() {
    var elementsHiden = document.getElementsByClassName('form');
    if (elementsHiden[0].style.display !== 'block') {
      for (let i = 0; i < elementsHiden.length; i++) {
        elementsHiden[i].style.display = "block";
      }
    } else {
      for (let i = 0; i < elementsHiden.length; i++) {
        elementsHiden[i].style.display = "none";
      }
    }
  }
  verifyPassword=()=>{
    if(this.pass1.value===this.pass2.value){
      this.errorPassword.hidden=true
    }
    else{
      this.errorPassword.hidden=false
    }
  }
  componentDidMount() {
    this.getCountry()
  }
  
  async getCountry(){
    let url='http://localhost:8080/location/countries'
    let countriesN= await axios.get(`${url}`,{},{
    headers: {
      'Content-Type': 'application/json',
    }
   }).then(data=>data.map(<option key={data} value={data}></option>))
   this.setState({
     countries:countriesN,
     states:this.state.states,
     cities:this.state.cities,
     instituions:this.state.instituions
   })
  }
  async getStates(){
    let url='http://localhost:8080/location/states'
    let statesN= await axios.get(`${url}`,{countryName:this.country.value},{
      headers: {
        'Content-Type': 'application/json',
      }
     }).then(data=>data.map(<option key={data} value={data}></option>))
     this.setState({
       countries:this.state.countries,
       states:statesN,
       cities:this.state.cities,
       instituions:this.state.instituions
     })
  }
  async getCities(){
    let url='http://localhost:8080/location/cities'
    let citiesN= await axios.get(`${url}`,{
      countryName:this.country.value,
      stateName:this.departament.value
    },{
      headers: {
        'Content-Type': 'application/json',
      }
     }).then(data=>data.map(<option key={data} value={data}></option>))
     this.setState({
       countries:this.state.countries,
       states:this.state.states,
       cities:citiesN,
       instituions:this.state.instituions
     })
  }
  async getInstitutions(){
    let url='http://localhost:8080/location/institutions'
    let instituionsN= await axios.get(`${url}`,{
      countryName:this.country.value,
      stateName:this.departament.value,
      cityName:this.city.value
    },{
      headers: {
        'Content-Type': 'application/json',
      }
     }).then(data=>data.map(<option key={data} value={data}></option>))
     this.setState({
       countries:this.state.countries,
       states:this.state.states,
       cities:this.state.cities,
       instituions:instituionsN
     })
  }
  registerUser = () => {
    const user = {
      name: (this.name.value?this.name.value:null),
      lastName: (this.lastName.value?this.lastName.value:null),
      institutionName:(this.university.value?this.university.value:null),
      email: (this.email.value?this.email.value:null),
      password:(this.pass1.value?this.pass1.value:null) ,
      phoneNumber:(this.phone.value?this.phone.value:null),
      studentCode:(this.code.value?this.code.value:null),
      semester: (this.semester.value?this.semester.value:null),
      countryName:(this.country.value?this.country.value:null),
      stateName:(this.departament.value?this.departament.value:null),
      cityName:(this.city.value?this.city.value:null)
    }
    const url = 'http://localhost:8080/registration/students'
    console.log(user)
    axios.post(url, user, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      if (response.status === 200) {
        console.log(response)
      }
    }
    ).catch(error => {
      var errors=error.response.data
      console.log(errors)
    })
  }
  render() {
    return (
      <div className='divRegister'>
        <BarNavigation className='bar' classBar='barNavigation2' mainLogo={mainLogo} />
        <div className="banner">
          <h2 className="bigTitle">Crear Cuenta</h2>
        </div>
        <section className='mainRegister'>
          <div className='formRegister'>
            <div className="nombreYApellido">
              <input ref={element=>{this.name=element}}id="nombre" type="text" placeholder='Nombre' required ></input>
              <input  ref={element=>{this.lastName=element}} id='apellido' type="text" placeholder='Apellido' required ></input>
            </div>
            <input id='email' type="email" placeholder='Correo electrónico' ref={element=>{this.email=element}} required></input>
            <select id='university' name="universidad" ref={element=>{this.university=element}}>
              {this.state.instituions}
            </select>
            <div className='passwordContent'>
              <input onChange={this.verifyPassword} className='passwordField' ref={element => { this.pass1 = element }} id='password' type='password' minLength='6' placeholder='Contraseña' required></input>
              <img src={ojo} alt='' onMouseUp={this.hidePassword1} onMouseDown={this.showPassword1} id='eyeIcon' className='eye'></img>
            </div>
            <div className='passwordContent'>
              <input onChange={this.verifyPassword}className='passwordField' ref={element => { this.pass2 = element }} id='confirmPassword' type='password' minLength='6' placeholder='Confirmar contraseña' required></input>
              <img src={ojo} alt='' onMouseUp={this.hidePassword2} onMouseDown={this.showPassword2} id='eyeIcon' className='eye'></img>
            </div>
            <span className='error' ref={element=>{this.errorPassword=element}}hidden={true}>Las contraseñas no coinciden</span>
            <img className="masInfo" onClick={this.moreInfo} src={moreInfo} alt=' '></img>
            <input id='phoneNumber' ref={element=>{this.phone=element}}type="text" placeholder='Telefono' className="form"></input>
            <input id='code' ref={element=>{this.code=element}}type='text' placeholder='Codigo Universitario' className="form"></input>
            <select ref={element=>{this.country=element}} className="form" id="country" name="pais">
            {this.state.countries}
            </select>
            <select ref={element=>{this.departament=element}}className="form" id="department" name="departamento">
            {this.state.states}
            </select>
            <select ref={element=>{this.city=element}}className="form" id="city"name="ciudad" placeholder='Ciudad'>
            {this.state.cities}
            </select>
            <input className='form' ref={element=>{this.semester=element}} type='text' id='semester' placeholder='Semestre'></input>
            <p className="politicas">Al hacer click en "Registrarte", acepta nuestros
                         <a href="#/"> Terminos y condiciones</a> y la <a href="#/">Política de Privacidad </a>
              Es posible que te enviemos notificaciones por SMS, que puedes
                         desactivar cuando quieras.</p>
            <input className="button" onClick={() => { this.registerUser() }} type='submit' value='Registrarte'></input>
            <span ref={(element) => { this.validations = element }} id='validation'></span>
            <hr />
            <p className="ini">¿Ya tienes cuenta? <a href="#/loginEstudiante">Inicia sesión</a></p>
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
          <Footer classColor='black' />
        </section>
      </div>
    );
  }
}


export default RegistroE;
