import React, { Component } from 'react';
import BarNavigation from './../../components/BarNavigation'
import Footer from './../../components/Footer'
import Divider from '@material-ui/core/Divider'

import mainLogo from './../../img/footer/mainLogoWhite.png'
import './styles.css'

class LoginE extends Component {
    render() {
        return (
            <div className='divLogin'>
                <header className='loginHeader'>
                    <BarNavigation className='bar' classBar='barNavigation2' mainLogo={mainLogo}/>
                </header>
                <section className='mainLogin'>
                  <form className='formLogin'>
                    <h2 className='session'>Iniciar sesión</h2>
                    <input type="email" required placeholder='Correo electrónico' ></input>
                    <input type='password' required placeholder='Contraseña'></input>
                    <input type='submit' value='Ingresar' href="#"></input>
                    <hr/>
                    <p>¿No tienes una cuenta? <a href="#/registroEstudiante"> Crea una</a></p>
                    <a href="#/recuperarCuenta">Olvide mi contraseña</a>
                  </form>

                </section>
                <div className='divider'>
                 <Divider />
                </div>

                <section className='footerMain'>
                    <Footer classColor='transparent'/>
                </section>
            </div>
        );
    }
}

export default LoginE;
