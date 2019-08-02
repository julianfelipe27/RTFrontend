import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider'
import user from './../../img/usuario.png'
import fecha from './../../img/solicitud/calendar.png'
import badge from './../../img/home/badge.png'
import identification from './../../img/home/identification.png'
import lock from './../../img/home/lock.png'
import comment from './../../img/home/comment.png'
import help from './../../img/home/help.png'
import creditcard from './../../img/home/credit-card.png'
import './styles.css'

class index extends Component {
    render() {
        return (
          <div>
            <div className='sideBarHome'>
              <p>Cuenta estándar</p>
              <div className='optio'>
                <a className='separator' href='#/panelEstudiante/inicioEstudiante'>
                  <img src={user} alt=''></img>
                  <label>Home</label>
                </a>
                <a className='separator' href='#/panelEstudiante/tutorias'>
                  <img src={fecha} alt=''></img>
                  <label>Mis tutorias</label>
                </a>
                <a className='separator'  href='#/panelEstudiante'>
                  <img src={badge} alt=''></img>
                  <label>Logros</label>
                </a>
                <a className='separator' href='#/panelEstudiante/informacion'>
                  <img src={identification} alt=''></img>
                  <label>Información personal</label>
                </a>
                <a className='separator' href='#/panelEstudiante/contraseña'>
                  <img src={lock} alt=''></img>
                  <label>Modificar Contraseña</label>
                </a>
                <a className='separator' href='#/panelEstudiante'>
                  <img src={creditcard} alt=''></img>
                  <label>Pagos</label>
                </a>
                <div className='divider'>
                <Divider/>
                </div>
                <a className='separator' href='#/panelEstudiante'>
                    <img src={help} alt=''></img>
                    <label>Ayuda</label>
                </a>
                <a className='separator' href='#/panelEstudiante'>
                    <img src={comment} alt=''></img>
                    <label>Envianos comentarios</label>
                </a>
              </div>
            </div>
          </div>
        );
    }
}

export default index;
