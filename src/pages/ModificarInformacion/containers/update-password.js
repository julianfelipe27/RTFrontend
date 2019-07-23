import React, {Component} from 'react'
import UpdatePasswordLayout from '../components/update-password-layout.js'

class UpdatePassword extends Component {

  hidePassword1=()=>{
    this.pass1.type='password'
  }

  showPassword1=()=>{
    this.pass1.type='text'
  }

  setInputRef1 = element => {
    this.pass1 = element;
  }

  hidePassword2=()=>{
    this.pass2.type='password'
  }

  showPassword2=()=>{
    this.pass2.type='text'
  }

  setInputRef2 = element => {
    this.pass2 = element;
  }

  hidePassword3=()=>{
    this.pass3.type='password'
  }

  showPassword3=()=>{
    this.pass3.type='text'
  }

  setInputRef3 = element => {
    this.pass3 = element;
  }

  render() {
    return (
      <section>
        <UpdatePasswordLayout
          hidePassword1 = {this.hidePassword1}
          showPassword1 = {this.showPassword1}
          setRef1 = {this.setInputRef1}
          hidePassword2 = {this.hidePassword2}
          showPassword2 = {this.showPassword2}
          setRef2 = {this.setInputRef2}
          hidePassword3 = {this.hidePassword3}
          showPassword3 = {this.showPassword3}
          setRef3 = {this.setInputRef3}
        />
      </section>
    )
  }
}

export default UpdatePassword;
