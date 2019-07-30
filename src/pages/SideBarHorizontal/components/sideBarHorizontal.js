import React from 'react'
import './sideBarHorizontal.css'
import flechaAbajo from '../img/flechaAbajo.png'
import flechaDerecha from '../img/flechaDerecha.png'
import user from '../img/usuario.png'
import fecha from '../img/calendar.png'
import badge from '../img/badge.png'
import identification from '../img/identification.png'
import lock from '../img/lock.png'
import comment from '../img/comment.png'
import help from '../img/help.png'
import creditcard from '../img/credit-card.png'

const SideBarHorizontalLayout  = props => (
  <div className="sideBarHorizontal">
    <div className="presentation">
      <p>Cuenta Estandar</p>
      <img className="flechaDerecha" src={flechaDerecha} alt="" onClick={props.handleClickFelchaDerecha} ref={props.setRefFlechaDerecha}/>
      <img className="flechaAbajo" src={flechaAbajo} alt="" ref={props.setRefFlechaAbajo} onClick={props.handleClickFelchaAbajo} />
    </div>
    <div className="contenido" ref={props.setRefContenido}>
      <div className='option'>
        <div className='separator' href='#/panelEstudiante'>
          <img src={user} alt=''></img>
          <label>Home</label>
        </div>
        <a className='separator' href='#/panelEstudiante/tutorias' onClick={props.handleClickOcultarContenido}>
          <img src={fecha} alt=''></img>
          <label>Mis tutorias</label>
        </a>
        <a className='separator'  href='#/panelEstudiante' onClick={props.handleClickOcultarContenido}>
          <img src={badge} alt=''></img>
          <label>Logros</label>
        </a>
        <a className='separator' href='#/panelEstudiante/informacion' onClick={props.handleClickOcultarContenido}>
          <img src={identification} alt=''></img>
          <label>Información personal</label>
        </a>
        <a className='separator' href='#/panelEstudiante/contraseña' onClick={props.handleClickOcultarContenido}>
          <img src={lock} alt=''></img>
          <label>Modificar Contraseña</label>
        </a>
        <a className='separator' href='#/panelEstudiante' onClick={props.handleClickOcultarContenido}>
          <img src={creditcard} alt=''></img>
          <label>Pagos</label>
        </a>
        <a className='separator' href='#/panelEstudiante' onClick={props.handleClickOcultarContenido}>
          <img src={help} alt=''></img>
          <label>Ayuda</label>
        </a>
        <a className='separator' href='#/panelEstudiante' onClick={props.handleClickOcultarContenido}>
          <img src={comment} alt=''></img>
          <label>Envianos comentarios</label>
        </a>
      </div>
    </div>
  </div>
)

export default  SideBarHorizontalLayout;
