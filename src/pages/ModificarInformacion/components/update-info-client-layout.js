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
          <img className="flecha" src={flecha} alt="" />
        </div>
        <hr/>
        <div className="infor">
          <label className="left">Nombre</label>
          <label className="center">{props.name}</label>
          <img className="flecha" src={flecha} alt="" />
        </div>
        <hr/>
        <div className="infor">
          <label className="left">Cumpleaños</label>
          <label className="center">coming soon</label>
          <img className="flecha" src={flecha} alt="" />
        </div>
        <hr/>
        <div className="infor">
          <label className="left">Contraseña</label>
          <label className="center">{props.password}</label>
          <img className="flecha" src={flecha} alt="" />
        </div>
      </div>
      <div className="container">
        <h3>Información de contacto</h3>
        <div className="infor">
          <label className="left">Email</label>
          <label className="center">{props.email}</label>
          <img className="flecha" src={flecha} alt="" />
        </div>
        <hr/>
        <div className="infor">
          <label className="left">Celular</label>
          <label className="center">{props.phoneNumber}</label>
          <img className="flecha" src={flecha} alt="" />
        </div>
      </div>
      <div className="container">
        <h3>Información académica</h3>
        <div className="infor">
          <label className="left">Universidad</label>
          <label className="center">{props.university}</label>
          <img className="flecha" src={flecha} alt="" />
        </div>
        <hr/>
        <div className="infor">
          <label className="left">Carrera</label>
          <label className="center">coming soon</label>
          <img className="flecha" src={flecha} alt="" />
        </div>
        <hr/>
        <div className="infor">
          <label className="left">Código universitario</label>
          <label className="center">{props.universityCode}</label>
          <img className="flecha" src={flecha} alt="" />
        </div>
      </div>
      <div className="container">
        <h3>Residencia</h3>
        <div className="infor">
          <label className="left">País</label>
          <label className="center">{props.country}</label>
          <img className="flecha" src={flecha} alt="" />
        </div>
        <hr/>
        <div className="infor">
          <label className="left">Departamento</label>
          <label className="center">{props.department}</label>
          <img className="flecha" src={flecha} alt="" />
        </div>
        <hr/>
        <div className="infor">
          <label className="left">Ciudad</label>
          <label className="center">{props.city}</label>
          <img className="flecha" src={flecha} alt="" />
        </div>
      </div>
    </div>
  </div>
)

export default UpdateInfoClientLayout;
