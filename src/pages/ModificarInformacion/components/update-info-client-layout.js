import React from 'react';
import ojo from '../../../img/registro/ojo.png'
import moreInfo from '../../../img/moreInfo.png'
import user from '../../../img/usuario.png'
import './update-info-client-layout.css';

const UpdateInfoClientLayout =  (props) => (
  <div>
    <form className="formRegister">
      <div className='formIcon'>
        <img src={user} alt=' '></img>
      </div>
      <p className='session'>Actualiza tus datos</p>
      <input type="text" placeholder='Nombre(s)' value="" required/>
      <input type="text" placeholder='Apellido(s)' value="" required/>
      <input type="text" placeholder='Teléfono' value="" disabled="true"/>
      <select name="universidad" className="f">
        <option value="1">Universidad Icesi</option>
        <option value="2">Universidad Javeriana</option>
        <option value="3">Universidad del Valle</option>
      </select>
      <div className='passwordContent'>
        <input className='passwordField' id='password'type='password' minLength='6'   placeholder='Contraseña' required />
        <img src={ojo} alt='' onMouseUp={props.hidePassword} onMouseDown={props.showPassword} id='eyeIcon' className='eye'></img>
      </div>
      <img className="masInfo" onClick={props.moreInfo} src={moreInfo} alt=' '></img>
      <input id='email' className="optional" type="email"  placeholder='Ingresa tu correo' required></input>
      <input type='text'  placeholder='Codigo Universitario' className="optional"></input>
      <select className="optional" name="pais">
        <option value="1">Colombia</option>
        <option value="2">Venezuela</option>
        <option value="3">Chile</option>
      </select>
      <select className="optional" name="departamento">
        <option value="1">Valle del Cauca</option>
        <option value="2">Nariño</option>
        <option value="3">Huila</option>
      </select>
      <select className="optional" name="ciudad" placeholder='Ciudad'>
        <option value="1">Cali</option>
        <option value="2">Palmira</option>
        <option value="3">Restrepo</option>
      </select>
      <input type="submit" value="Actualizar"/>
    </form>
  </div>
)

export default UpdateInfoClientLayout;
