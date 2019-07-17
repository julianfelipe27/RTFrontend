import React, {Component} from 'react';
import BarNavigation from '../../../components/BarNavigation'
import Footer from '../../../components/Footer'
import Divider from '@material-ui/core/Divider'
import UpdateInfoClientLayout from '../components/update-info-client-layout.js'
import mainLogo from '../../../img/mainLogo.png'
import axios from 'axios'

class UpdateInfoClient extends Component {

  state = {
    name: "Luisa",
    lastName: "",
    phoneNumber: "",
    university: "valle",
    password: "",
    email: "",
    universityCode: "",
    country: "",
    department: "",
    city: ""
  }

  hidePassword=()=>{
    this.pass.type='password'
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  handleUniversityCodeChange = event => {
    this.setState({
      universityCode: event.target.value
    })
  }

  handleUniversityChange = event => {
    this.setState({
      university: event.target.value
    })
  }

  handleCountryChange = event => {
    this.setState({
      country: event.target.value
    })
  }

  handleDepartmentChange = event => {
    this.setState({
      department: event.target.value
    })
  }

  handleCityChange = event => {
    this.setState({
      city: event.target.value
    })
  }

  getUser = () => {
    axios.get()
    .then(function (response) {

    })
    .catch (function (error) {

    });
  }

  showPassword=()=>{
    this.pass.type='text'
  }

  setInputRef = element => {
    this.pass = element;
  }

  moreInfo() {
    var elementsHiden = document.getElementsByClassName('optional');
    if(elementsHiden[0].style.display !== 'block') {
      for (let i = 0; i < elementsHiden.length; i++) {
        elementsHiden[i].style.display = "block";
      }

    } else {
      for (let i = 0; i < elementsHiden.length; i++) {
        elementsHiden[i].style.display = "none";
      }
    }

  }

  render() {
    return (
      <div>
        <header className="registerHeader">
          <BarNavigation className='bar' classBar='barNavigation2' mainLogo={mainLogo}/>
        </header>
        <section>
          <UpdateInfoClientLayout
            hidePassword = {this.hidePassword}
            showPassword = {this.showPassword}
            moreInfo = {this.moreInfo}
            setRef = {this.setInputRef}
            name = {this.state.name}
            lastName = {this.state.lastName}
            phoneNumber = {this.state.phoneNumber}
            password = {this.state.password}
            email = {this.state.email}
            universityCode = {this.state.universityCode}
            university = {this.state.university}
            country = {this.state.country}
            department = {this.state.department}
            city = {this.state.city}
            handleUniversityChange = {this.handleUniversityChange}
            handleNameChange = {this.handleNameChange}
            handleLastNameChange = {this.handleLastNameChange}
            handleUniversityCodeChange = {this.handleUniversityCodeChange}
            handleEmailChange = {this.handleEmailChange}
            handlePasswordChange = {this.handlePasswordChange}
            handleCountryChange = {this.handleCountryChange}
            handleDepartmentChange = {this.handleDepartmentChange}
            handleCityChange = {this.handleCityChange}
          />
        </section>
        <div className="divider">
          <Divider />
          <br></br>
        </div>
        <section className="footerLogin">
          <Footer classColor="black"/>
        </section>
      </div>
    )
  }
}

export default UpdateInfoClient;
