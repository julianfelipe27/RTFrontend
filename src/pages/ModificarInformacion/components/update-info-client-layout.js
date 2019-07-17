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
      <input type="text" placeholder='Nombre(s)' value={props.name} onChange={props.handleNameChange}/>
      <input type="text" placeholder='Apellido(s)' value={props.lastName} onChange={props.handleLastNameChange}/>
      <input type="text" placeholder='Teléfono' value={props.phoneNumber} disabled="true"/>
      <select name="universidad" className="f" value={props.university} onChange={props.handleUniversityChange}>
        <option value="icesi">Universidad Icesi</option>
        <option value="javeriana">Universidad Javeriana</option>
        <option value="valle">Universidad del Valle</option>
      </select>
      <div className='passwordContent'>
        <input className='passwordField' value={props.password} onChange={props.handlePasswordChange} ref={props.setRef} id='password'type='password' minLength='6'   placeholder='Contraseña' required />
        <img src={ojo} alt='' onMouseUp={props.hidePassword} onMouseDown={props.showPassword} id='eyeIcon' className='eye'></img>
      </div>
      <img className="masInfo" onClick={props.moreInfo} src={moreInfo} alt=' '></img>
      <input id='email' className="optional" type="email"  placeholder='Ingresa tu correo' value={props.email} onChange={props.handleEmailChange}></input>
      <input type='text'  placeholder='Codigo Universitario' className="optional" value={props.universityCode} onChange={props.handleUniversityCodeChange}></input>
      <select className="optional" name="pais" value={props.country} onChange={props.handleCountryChange}>
        <option value="colombia">Colombia</option>
        <option value="venezuela">Venezuela</option>
        <option value="chile">Chile</option>
      </select>
      <select className="optional" name="departamento" value={props.department} onChange={props.handleDepartmentChange}>
        <option value="valle">Valle del Cauca</option>
        <option value="nariño">Nariño</option>
        <option value="huila">Huila</option>
      </select>
      <select className="optional" name="ciudad" value={props.city} onChange={props.handleCityChange}>
        <option value="cali">Cali</option>
        <option value="palmira">Palmira</option>
        <option value="restrepo">Restrepo</option>
      </select>
      <input type="submit" value="Actualizar"/>
    </form>
  </div>
)

export default UpdateInfoClientLayout;
