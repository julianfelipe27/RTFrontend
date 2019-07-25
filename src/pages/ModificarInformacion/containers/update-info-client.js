import React, {Component} from 'react';
import UpdateInfoClientLayout from '../components/update-info-client-layout.js'
import axios from 'axios'

class UpdateInfoClient extends Component {

  state = {
    name: "Luisa",
    lastName: "",
    phoneNumber: "",
    university: "valle",
    universityCode: "",
    country: "",
    department: "",
    city: "",
    email: ""
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

  handlePhoneNumberChange = event => {
    this.setState({
      phoneNumber: event.target.value
    })
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  getUser = () => {
    axios.get()
    .then(response => {

    })
    .catch (function (error) {

    });
  }

  render() {
    return (
      <div>
        <section>
          <UpdateInfoClientLayout
            name = {this.state.name}
            lastName = {this.state.lastName}
            phoneNumber = {this.state.phoneNumber}
            password = {this.state.password}
            universityCode = {this.state.universityCode}
            university = {this.state.university}
            country = {this.state.country}
            department = {this.state.department}
            city = {this.state.city}
            email = {this.state.email}
            handleUniversityChange = {this.handleUniversityChange}
            handleNameChange = {this.handleNameChange}
            handleLastNameChange = {this.handleLastNameChange}
            handleUniversityCodeChange = {this.handleUniversityCodeChange}
            handlePasswordChange = {this.handlePasswordChange}
            handleCountryChange = {this.handleCountryChange}
            handleDepartmentChange = {this.handleDepartmentChange}
            handleCityChange = {this.handleCityChange}
            handlePhoneNumberChange = {this.handlePhoneNumberChange}
            handleEmailChange = {this.handleEmailChange}
          />
        </section>
      </div>
    )
  }
}

export default UpdateInfoClient;
