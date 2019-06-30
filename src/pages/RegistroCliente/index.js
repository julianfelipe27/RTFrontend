import React, { Component } from 'react';
import BarNavigation from '../../components/BarNavigation'
import Footer from '../../components/Footer'
import Divider from '@material-ui/core/Divider'

import user from './../../img/usuario.png'

import mainLogo from './../../img/mainLogo.png'
import backgroundStudent from './../../img/registro/backgroundStudent.jpg'

import './styles.css'

class RegistroE extends Component {
    render() {
        return (
            <div className='divRegister'>
                <header className='registerHeader'>
                    <BarNavigation className='bar' classBar='barNavigation2' mainLogo={mainLogo}/>
                </header>
                <section className='mainRegister'>
                    <div className='imgRegister'>
                        <p><span className='title'>¿Sabias que?</span><br></br>
                        El 99.9% de los estudiantes que han tomado tutorias<br></br>
                        con Red tutores consiguen excelentes resultados  en <br></br>
                        sus exámenes. Anímate y compruebalo.</p>
                        <img src={backgroundStudent} alt=''></img>
                     </div>   
                    <form className='formRegister'> 
                    <div className='formIcon'>
                    <img src={user} alt=' '></img>
                    </div>
                    <p className='session'>Crea tu cuenta</p>
                    <input type="text" required placeholder='Nombre(s) y Apellidos'></input>
                    <input type="email" required placeholder='Ingresa tu correo' ></input>
                    <input type='password' required placeholder='Contraseña'></input>
                    <input type='submit' value='Registrarme' formMethod='POST'></input>
                    <br></br>
                    </form>
                </section>
                <div className='divider'>
                 <Divider />
                 <br></br>
                </div>

                <section className='footerLogin'>
                    <Footer classColor='black'/>
                </section>
            </div>
        );
    }
}

export default RegistroE;