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


  handleClickEditName = event => {
    this.arrowName.style.display = 'none';
    this.guardarName.style.display = 'inline-block';
    this.name.style.display = "inline-block";
    this.nameLabel.style.display = "none";
  }
  handleGuardarClickName = event => {
    this.arrowName.style.display = 'inline-block';
    this.guardarName.style.display = 'none';
    this.name.style.display = "none";
    this.nameLabel.style.display = "inline-block";
  }
  setRefArrowName = element =>  {
    this.arrowName = element;
  }
  setRefGuardarName = element => {
    this.guardarName = element;
  }
  setRefName = element => {
    this.name = element;
  }
  setRefNameLabel = element => {
    this.nameLabel = element;
  }


  handleClickEditPassword = event => {
    this.arrowPassword.style.display = 'none';
    this.guardarPassword.style.display = 'inline-block';
    this.password.style.display = "inline-block";
    this.passwordLabel.style.display = "none";
  }
  handleGuardarClickPassword = event => {
    this.arrowPassword.style.display = 'inline-block';
    this.guardarPassword.style.display = 'none';
    this.password.style.display = "none";
    this.passwordLabel.style.display = "inline-block";
  }
  setRefArrowPassword = element =>  {
    this.arrowPassword = element;
  }
  setRefGuardarPassword = element => {
    this.guardarPassword = element;
  }
  setRefPassword = element => {
    this.password = element;
  }
  setRefPasswordLabel = element => {
    this.passwordLabel = element;
  }


  handleClickEditEmail = event => {
    this.arrowEmail.style.display = 'none';
    this.guardarEmail.style.display = 'inline-block';
    this.email.style.display = "inline-block";
    this.emailLabel.style.display = "none";
  }
  handleGuardarClickEmail = event => {
    this.arrowEmail.style.display = 'inline-block';
    this.guardarEmail.style.display = 'none';
    this.email.style.display = "none";
    this.emailLabel.style.display = "inline-block";
  }
  setRefArrowEmail = element =>  {
    this.arrowEmail = element;
  }
  setRefGuardarEmail = element => {
    this.guardarEmail = element;
  }
  setRefEmail = element => {
    this.email = element;
  }
  setRefEmailLabel = element => {
    this.emailLabel = element;
  }


  handleClickEditPhoneNumber = event => {
    this.arrowPhoneNumber.style.display = 'none';
    this.guardarPhoneNumber.style.display = 'inline-block';
    this.phoneNumber.style.display = "inline-block";
    this.phoneNumberLabel.style.display = "none";
  }
  handleGuardarClickPhoneNumber = event => {
    this.arrowPhoneNumber.style.display = 'inline-block';
    this.guardarPhoneNumber.style.display = 'none';
    this.phoneNumber.style.display = "none";
    this.phoneNumberLabel.style.display = "inline-block";
  }
  setRefArrowPhoneNumber = element =>  {
    this.arrowPhoneNumber = element;
  }
  setRefGuardarPhoneNumber = element => {
    this.guardarPhoneNumber = element;
  }
  setRefPhoneNumber = element => {
    this.phoneNumber = element;
  }
  setRefPhoneNumberLabel = element => {
    this.phoneNumberLabel = element;
  }


  handleClickEditUniversity = event => {
    this.arrowUniversity.style.display = 'none';
    this.guardarUniversity.style.display = 'inline-block';
    this.university.style.display = "inline-block";
    this.universityLabel.style.display = "none";
  }
  handleGuardarClickUniversity = event => {
    this.arrowUniversity.style.display = 'inline-block';
    this.guardarUniversity.style.display = 'none';
    this.university.style.display = "none";
    this.universityLabel.style.display = "inline-block";
  }
  setRefArrowUniversity = element =>  {
    this.arrowUniversity = element;
  }
  setRefGuardarUniversity = element => {
    this.guardarUniversity = element;
  }
  setRefUniversity = element => {
    this.university = element;
  }
  setRefUniversityLabel = element => {
    this.universityLabel = element;
  }


  handleClickEditUniversityCode = event => {
    this.arrowUniversityCode.style.display = 'none';
    this.guardarUniversityCode.style.display = 'inline-block';
    this.universityCode.style.display = "inline-block";
    this.universityCodeLabel.style.display = "none";
  }
  handleGuardarClickUniversityCode = event => {
    this.arrowUniversityCode.style.display = 'inline-block';
    this.guardarUniversityCode.style.display = 'none';
    this.universityCode.style.display = "none";
    this.universityCodeLabel.style.display = "inline-block";
  }
  setRefArrowUniversityCode = element =>  {
    this.arrowUniversityCode = element;
  }
  setRefGuardarUniversityCode = element => {
    this.guardarUniversityCode = element;
  }
  setRefUniversityCode = element => {
    this.universityCode = element;
  }
  setRefUniversityCodeLabel = element => {
    this.universityCodeLabel = element;
  }


  handleClickEditCountry = event => {
    this.arrowCountry.style.display = 'none';
    this.guardarCountry.style.display = 'inline-block';
    this.country.style.display = "inline-block";
    this.countryLabel.style.display = "none";
  }
  handleGuardarClickCountry = event => {
    this.arrowCountry.style.display = 'inline-block';
    this.guardarCountry.style.display = 'none';
    this.country.style.display = "none";
    this.countryLabel.style.display = "inline-block";
  }
  setRefArrowCountry = element =>  {
    this.arrowCountry = element;
  }
  setRefGuardarCountry = element => {
    this.guardarCountry = element;
  }
  setRefCountry = element => {
    this.country = element;
  }
  setRefCountryLabel = element => {
    this.countryLabel = element;
  }


  handleClickEditDepartment = event => {
    this.arrowDepartment.style.display = 'none';
    this.guardarDepartment.style.display = 'inline-block';
    this.department.style.display = "inline-block";
    this.departmentLabel.style.display = "none";
  }
  handleGuardarClickDepartment = event => {
    this.arrowDepartment.style.display = 'inline-block';
    this.guardarDepartment.style.display = 'none';
    this.department.style.display = "none";
    this.departmentLabel.style.display = "inline-block";
  }
  setRefArrowDepartment = element =>  {
    this.arrowDepartment = element;
  }
  setRefGuardarDepartment = element => {
    this.guardarDepartment = element;
  }
  setRefDepartment = element => {
    this.department = element;
  }
  setRefDepartmentLabel = element => {
    this.departmentLabel = element;
  }


  handleClickEditCity = event => {
    this.arrowCity.style.display = 'none';
    this.guardarCity.style.display = 'inline-block';
    this.city.style.display = "inline-block";
    this.cityLabel.style.display = "none";
  }
  handleGuardarClickCity = event => {
    this.arrowCity.style.display = 'inline-block';
    this.guardarCity.style.display = 'none';
    this.city.style.display = "none";
    this.cityLabel.style.display = "inline-block";
  }
  setRefArrowCity = element =>  {
    this.arrowCity = element;
  }
  setRefGuardarCity = element => {
    this.guardarCity = element;
  }
  setRefCity = element => {
    this.city = element;
  }
  setRefCityLabel = element => {
    this.cityLabel = element;
  }


  render() {
    return (
      <div style={{width: '100%'}}>
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

            setRefArrowName = {this.setRefArrowName}
            handleClickEditName = {this.handleClickEditName}
            setRefGuardarName = {this.setRefGuardarName}
            setRefName =  {this.setRefName}
            setRefNameLabel = {this.setRefNameLabel}
            handleGuardarClickName = {this.handleGuardarClickName}

            setRefArrowPassword = {this.setRefArrowPassword}
            handleClickEditPassword = {this.handleClickEditPassword}
            setRefGuardarPassword = {this.setRefGuardarPassword}
            setRefPassword =  {this.setRefPassword}
            setRefPasswordLabel = {this.setRefPasswordLabel}
            handleGuardarClickPassword = {this.handleGuardarClickPassword}

            setRefArrowEmail = {this.setRefArrowEmail}
            handleClickEditEmail = {this.handleClickEditEmail}
            setRefGuardarEmail = {this.setRefGuardarEmail}
            setRefEmail =  {this.setRefEmail}
            setRefEmailLabel = {this.setRefEmailLabel}
            handleGuardarClickEmail = {this.handleGuardarClickEmail}

            setRefArrowPhoneNumber = {this.setRefArrowPhoneNumber}
            handleClickEditPhoneNumber = {this.handleClickEditPhoneNumber}
            setRefGuardarPhoneNumber = {this.setRefGuardarPhoneNumber}
            setRefPhoneNumber =  {this.setRefPhoneNumber}
            setRefPhoneNumberLabel = {this.setRefPhoneNumberLabel}
            handleGuardarClickPhoneNumber = {this.handleGuardarClickPhoneNumber}

            setRefArrowUniversity = {this.setRefArrowUniversity}
            handleClickEditUniversity = {this.handleClickEditUniversity}
            setRefGuardarUniversity = {this.setRefGuardarUniversity}
            setRefUniversity =  {this.setRefUniversity}
            setRefUniversityLabel = {this.setRefUniversityLabel}
            handleGuardarClickUniversity = {this.handleGuardarClickUniversity}

            setRefArrowUniversityCode = {this.setRefArrowUniversityCode}
            handleClickEditUniversityCode = {this.handleClickEditUniversityCode}
            setRefGuardarUniversityCode = {this.setRefGuardarUniversityCode}
            setRefUniversityCode =  {this.setRefUniversityCode}
            setRefUniversityCodeLabel = {this.setRefUniversityCodeLabel}
            handleGuardarClickUniversityCode = {this.handleGuardarClickUniversityCode}

            setRefArrowCountry = {this.setRefArrowCountry}
            handleClickEditCountry = {this.handleClickEditCountry}
            setRefGuardarCountry = {this.setRefGuardarCountry}
            setRefCountry =  {this.setRefCountry}
            setRefCountryLabel = {this.setRefCountryLabel}
            handleGuardarClickCountry = {this.handleGuardarClickCountry}

            setRefArrowDepartment = {this.setRefArrowDepartment}
            handleClickEditDepartment = {this.handleClickEditDepartment}
            setRefGuardarDepartment = {this.setRefGuardarDepartment}
            setRefDepartment =  {this.setRefDepartment}
            setRefDepartmentLabel = {this.setRefDepartmentLabel}
            handleGuardarClickDepartment = {this.handleGuardarClickDepartment}

            setRefArrowCity = {this.setRefArrowCity}
            handleClickEditCity = {this.handleClickEditCity}
            setRefGuardarCity = {this.setRefGuardarCity}
            setRefCity =  {this.setRefCity}
            setRefCityLabel = {this.setRefCityLabel}
            handleGuardarClickCity = {this.handleGuardarClickCity}
          />
      </div>
    )
  }
}

export default UpdateInfoClient;
