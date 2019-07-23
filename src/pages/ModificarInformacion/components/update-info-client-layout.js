import React from 'react';
import user from '../../../img/usuario.png'
import './update-info-client-layout.css';
import Divider from '@material-ui/core/Divider'

const UpdateInfoClientLayout =  (props) => (
  <div>
    <h2>Actualizar Información</h2>
    <div className='divider'>
        <Divider />
    </div>
    <p>Aqui podrás ver tu información personal y actualizarla cuando lo desees</p>
    <form className="formUpdate">
      <div className='formIcon'>
        <img src={user} alt=' '></img>
      </div>
      <input type="text" placeholder='Nombre(s)' value={props.name} onChange={props.handleNameChange}/>
      <input type="text" placeholder='Apellido(s)' value={props.lastName} onChange={props.handleLastNameChange}/>
      <input type="text" placeholder='Teléfono' value={props.phoneNumber} disabled="true"/>
      <select name="universidad" className="f" value={props.university} onChange={props.handleUniversityChange}>
        <option value="icesi">Universidad Icesi</option>
        <option value="javeriana">Universidad Javeriana</option>
        <option value="valle">Universidad del Valle</option>
      </select>
      <input type='text'  placeholder='Codigo Universitario' value={props.universityCode} onChange={props.handleUniversityCodeChange}></input>
      <select name="pais" value={props.country} onChange={props.handleCountryChange}>
        <option value="colombia">Colombia</option>
        <option value="venezuela">Venezuela</option>
        <option value="chile">Chile</option>
      </select>
      <select name="departamento" value={props.department} onChange={props.handleDepartmentChange}>
        <option value="valle">Valle del Cauca</option>
        <option value="nariño">Nariño</option>
        <option value="huila">Huila</option>
      </select>
      <select name="ciudad" value={props.city} onChange={props.handleCityChange}>
        <option value="cali">Cali</option>
        <option value="palmira">Palmira</option>
        <option value="restrepo">Restrepo</option>
      </select>
      <input type="submit" value="Actualizar"/>
    </form>
  </div>
)

export default UpdateInfoClientLayout;
