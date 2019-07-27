import React, {Component} from 'react'
import BarNavigation from '../../components/BarNavigation'
import Footer from '../../components/Footer'
import mainLogo from './../../img/mainLogo.png'
import './recuperar-cuenta.css'

class RecuperarCuenta extends Component {
  render() {
    return  (
      <div>
        <BarNavigation className='bar' classBar='barNavigation2' mainLogo={mainLogo}/>
        <div className="recuperarCuenta">
          <h2>Recupera tu cuenta</h2>
          <hr/>
          <p>Por favor, ingresa la dirección de correo electrónico de la cuenta que deseas recuperar</p>
          <input type="email" name="" placeholder="Tu correo"/>
          <input type="submit" name="" value="Empezar" />
        </div>
        <Footer classColor='black'/>
      </div>
    )
  }
}

export default RecuperarCuenta;
