import React, { Component } from 'react';
import BarNavigation from '../../components/BarNavigation'
import Footer from '../../components/Footer'
import Divider from '@material-ui/core/Divider'

import mainLogo from './../../img/footer/mainLogoWhite.png'
import './../LoginEstudiante/styles.css'

class LoginT extends Component {
    render() {
        return (
            <div className='divLogin'>
                <header className='loginHeader'>
                    <BarNavigation className='bar' classBar='barNavigation2' mainLogo={mainLogo}/>
                </header>
                <section className='mainLogin'>
                    <h3>Bienvenid@ al portal de tutores</h3>
                    <form className='formLogin'> 
                    <p className='session'>Inicia sesión</p>
                    <input type="email" required placeholder='Ingresa tu correo' ></input>
                    <input type='password' required placeholder='Contraseña'></input>
                    <a href='www'>Olvide mi contraseña</a>
                    <input type='submit' value='Ingresar' formMethod='POST'></input>
                    <br></br>
                    <a href=' '>Usar mi teléfono</a>
                    </form>
                </section>
                <div className='divider'>
                 <Divider />
                </div>

                <section className='footerLogin'>
                    <Footer classColor='transparent'/>
                </section>
            </div>
        );
    }
}

export default LoginT;