import React from 'react';
import BarNavigation from '../../components/BarNavigation'
import Footer from '../../components/Footer'
import mainLogo from './../../img/mainLogo.png'
import './verificar-cuenta.css'
import verificarCuenta from './../../img/registro/verificarCuenta.png'

const VerificarCuenta = props => (
  <div>
    <BarNavigation className='bar' classBar='barNavigation2' mainLogo={mainLogo}/>
    <div className="verificaCuenta">
      <h2>Verifica tu cuenta</h2>
      <hr/>
      <div className="imgVerificar"> 
        <img src={verificarCuenta} alt='' ></img>
      </div>
      <p>Hemos enviado un mensaje de confirmación a tu dirección de correo electrónico, por favor ingresa y sigue las
         instrucciones para acceder a tu cuenta.</p>
    </div>
    <Footer classColor='black'/>
  </div>
)

export default VerificarCuenta;
