import React from 'react';
import BarNavigation from '../../components/BarNavigation'
import Footer from '../../components/Footer'
import mainLogo from './../../img/mainLogo.png'
import userCorreo from './../../img/userCorreo.png'
import './envio-correo.css'

const EnviarCorreo = props  => (
  <div className='sendEmailContent'>
    <BarNavigation className='bar' classBar='barNavigation2' mainLogo={mainLogo}/>
    <div className="enviarCorreo">
      <img src={userCorreo} alt="" />
      <p>Te hemos enviado un código a tu dirección de correo para restablecer la contraseña.</p>
    </div>
    <Footer classColor='black'/>
  </div>
)

export default EnviarCorreo;
