import React from 'react';
import './update-info-client-layout.css';
import Divider from '@material-ui/core/Divider'
import flecha from '../../../img/flecha.png'

const UpdateInfoClientLayout =  (props) => (
  <div>
    <h2>Información personal</h2>
    <div className='divider'>
        <Divider />
    </div>
    <p>Información básica, como su nombre y foto que utiliza en la plataforma de RedTutores</p>
    <div className="bigContainer">
      <div className="container">
        <h3>Perfil</h3>
        <div className="infor">
          <label className="left">Foto</label>
          <label className="center">Personaliza tu perfil con tu mejor foto</label>
          <img className="flecha" src={flecha} alt="" onClick={props.handleClickEdit} ref={props.setRefArrow}/>
          <input className="guardar" type="submit" value="Guardar" ref={props.setRefGuardar} onClick={props.handleGuardarClick}/>
        </div>
        <hr/>
        <div className="infor">
          <label className="left">Nombre</label>
          <label className="center" ref={props.setRefNameLabel}>{props.name}</label>
          <input className="center editar" type="text" value={props.name} ref={props.setRefName} onChange={props.handleNameChange}/>
          <img className="flecha" src={flecha} alt="" onClick={props.handleClickEditName} ref={props.setRefArrowName}/>
          <input className="guardar" type="submit" value="Guardar" ref={props.setRefGuardarName} onClick={props.handleGuardarClickName}/>
        </div>
        <hr/>
        <div className="infor">
          <label className="left">Contraseña</label>
          <label className="center" ref={props.setRefPasswordLabel}>{props.password}</label>
          <input className="center editar" type="password" value={props.password} onChange={props.handlePasswordChange} ref={props.setRefPassword}/>
          <img className="flecha" src={flecha} alt="" onClick={props.handleClickEditPassword} ref={props.setRefArrowPassword}/>
          <input className="guardar" type="submit" value="Guardar" ref={props.setRefGuardarPassword} onClick={props.handleGuardarClickPassword}/>
        </div>
      </div>
      <div className="container">
        <h3>Información de contacto</h3>
        <div className="infor">
          <label className="left">Email</label>
          <label className="center" ref={props.setRefEmailLabel}>{props.email}</label>
          <input className="center editar" type="email" value={props.email} onChange={props.handleEmailChange} ref={props.setRefEmail}/>
          <img className="flecha" src={flecha} alt="" onClick={props.handleClickEditEmail} ref={props.setRefArrowEmail}/>
          <input className="guardar" type="submit" value="Guardar" ref={props.setRefGuardarEmail} onClick={props.handleGuardarClickEmail}/>
        </div>
        <hr/>
        <div className="infor">
          <label className="left">Celular</label>
          <label className="center" ref={props.setRefPhoneNumberLabel}>{props.phoneNumber}</label>
          <input className="center editar" type="text" value={props.phoneNumber} onChange={props.handlePhoneNumberChange} ref={props.setRefPhoneNumber} maxLength={10} minLength={10}/>
          <img className="flecha" src={flecha} alt="" onClick={props.handleClickEditPhoneNumber} ref={props.setRefArrowPhoneNumber}/>
          <input className="guardar" type="submit" value="Guardar" ref={props.setRefGuardarPhoneNumber} onClick={props.handleGuardarClickPhoneNumber}/>
        </div>
      </div>
      <div className="container">
        <h3>Información académica</h3>
        <div className="infor">
          <label className="left">Universidad</label>
          <label className="center" ref={props.setRefUniversityLabel}>{props.university}</label>
          <select className="center editar" value={props.university} onChange={props.handleUniversityChange} ref={props.setRefUniversity}>
            <option value="icesi">Universidad Icesi</option>
            <option value="javeriana">Universidad Javeriana</option>
            <option value="valle">Universidad del Valle</option>
          </select>
          <img className="flecha" src={flecha} alt="" onClick={props.handleClickEditUniversity} ref={props.setRefArrowUniversity}/>
          <input className="guardar" type="submit" value="Guardar" ref={props.setRefGuardarUniversity} onClick={props.handleGuardarClickUniversity}/>
        </div>
        <hr/>
        <div className="infor">
          <label className="left">Código universitario</label>
          <label className="center" ref={props.setRefUniversityCodeLabel}>{props.universityCode}</label>
          <input className="center editar" type="text" value={props.universityCode} onChange={props.handleUniversityCodeChange} ref={props.setRefUniversityCode}/>
          <img className="flecha" src={flecha} alt="" onClick={props.handleClickEditUniversityCode} ref={props.setRefArrowUniversityCode}/>
          <input className="guardar" type="submit" value="Guardar" ref={props.setRefGuardarUniversityCode} onClick={props.handleGuardarClickUniversityCode}/>
        </div>
      </div>
      <div className="container">
        <h3>Residencia</h3>
        <div className="infor">
          <label className="left">País</label>
          <label className="center" ref={props.setRefCountryLabel}>{props.country}</label>
          <select className="center editar" value={props.country} onChange={props.handleCountryChange} ref={props.setRefCountry}>
            <option value="colombia">Colombia</option>
            <option value="venezuela">Venezuela</option>
            <option value="chile">Chile</option>
          </select>
          <img className="flecha" src={flecha} alt="" onClick={props.handleClickEditCountry} ref={props.setRefArrowCountry}/>
          <input className="guardar" type="submit" value="Guardar" ref={props.setRefGuardarCountry} onClick={props.handleGuardarClickCountry}/>
        </div>
        <hr/>
        <div className="infor">
          <label className="left">Departamento</label>
          <label className="center" ref={props.setRefDepartmentLabel}>{props.department}</label>
          <select className="center editar" value={props.department} onChange={props.handleDepartmentChange} ref={props.setRefDepartment}>
            <option value="Valle del Cauca">Valle del Cauca</option>
            <option value="Nariño">Nariño</option>
            <option value="Huila">Huila</option>
          </select>
          <img className="flecha" src={flecha} alt="" onClick={props.handleClickEditDepartment} ref={props.setRefArrowDepartment}/>
          <input className="guardar" type="submit" value="Guardar" ref={props.setRefGuardarDepartment} onClick={props.handleGuardarClickDepartment}/>
        </div>
        <hr/>
        <div className="infor">
          <label className="left">Ciudad</label>
          <label className="center" ref={props.setRefCityLabel}>{props.city}</label>
          <select className="center editar" value={props.city} onChange={props.handleCityChange} ref={props.setRefCity}>
            <option value="Cali">Cali</option>
            <option value="Palmira">Palmira</option>
            <option value="Restrepo">Restrepo</option>
          </select>
          <img className="flecha" src={flecha} alt="" onClick={props.handleClickEditCity} ref={props.setRefArrowCity}/>
          <input className="guardar" type="submit" value="Guardar" ref={props.setRefGuardarCity} onClick={props.handleGuardarClickCity}/>
        </div>
      </div>
    </div>
  </div>
)

export default UpdateInfoClientLayout;
