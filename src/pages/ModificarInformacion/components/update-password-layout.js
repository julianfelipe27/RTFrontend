import React from 'react';
import ojo1 from '../../../img/registro/ojo.png'
import ojo2 from '../../../img/registro/ojo.png'
import ojo3 from '../../../img/registro/ojo.png'
import './update-info-client-layout'

const UpdatePasswordLayout = props => (
  <form className="formUpdate">
    <div className='passwordContent'>
      <input className='passwordField' onChange={props.handlePasswordChange} ref={props.setRef1} id='password'type='password' minLength='6'   placeholder='Contraseña Actual' required />
      <img src={ojo1} alt='' onMouseUp={props.hidePassword1} onMouseDown={props.showPassword1} id='eyeIcon' className='eye'></img>
    </div>
    <div className='passwordContent'>
      <input className='passwordField' onChange={props.handlePasswordChange} ref={props.setRef2} id='newPassword'type='password' minLength='6'   placeholder='Nueva Contraseña' required />
      <img src={ojo2} alt='' onMouseUp={props.hidePassword2} onMouseDown={props.showPassword2} id='eyeIcon' className='eye'></img>
    </div>
    <div className='passwordContent'>
      <input className='passwordField' onChange={props.handlePasswordChange} ref={props.setRef3} id='confirmPassword'type='password' minLength='6'   placeholder='Confirmar Contraseña' required />
      <img src={ojo3} alt='' onMouseUp={props.hidePassword3} onMouseDown={props.showPassword3} id='eyeIcon' className='eye'></img>
    </div>
    <input type="submit" value="Actualizar"/>
  </form>
)

export default UpdatePasswordLayout;
