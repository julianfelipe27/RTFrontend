import React from 'react';
import ojo from '../../../img/registro/ojo.png'
import './update-info-client-layout'
import user from '../../../img/usuario.png'

const UpdatePasswordLayout = props => (
  <form className="formUpdate">
    <div className='formIcon'>
      <img src={user} alt=' '></img>
    </div>
    <div className='passwordContent'>
      <input className='passwordField' onChange={props.handlePasswordChange} ref={props.setRef} id='password'type='password' minLength='6'   placeholder='Contraseña' required />
      <img src={ojo} alt='' onMouseUp={props.hidePassword} onMouseDown={props.showPassword} id='eyeIcon' className='eye'></img>
    </div>
    <div className='passwordContent'>
      <input className='passwordField' onChange={props.handlePasswordChange} ref={props.setRef} id='newPassword'type='password' minLength='6'   placeholder='Nueva Contraseña' required />
      <img src={ojo} alt='' onMouseUp={props.hidePassword} onMouseDown={props.showPassword} id='eyeIcon' className='eye'></img>
    </div>
    <div className='passwordContent'>
      <input className='passwordField' onChange={props.handlePasswordChange} ref={props.setRef} id='confirmPassword'type='password' minLength='6'   placeholder='Confirmar Contraseña' required />
      <img src={ojo} alt='' onMouseUp={props.hidePassword} onMouseDown={props.showPassword} id='eyeIcon' className='eye'></img>
    </div>
    <input type="submit" value="Actualizar"/>
  </form>
)

export default UpdatePasswordLayout;
