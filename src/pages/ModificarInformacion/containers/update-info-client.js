import React, {Component} from 'react';
import BarNavigation from '../../../components/BarNavigation'
import Footer from '../../../components/Footer'
import Divider from '@material-ui/core/Divider'
import UpdateInfoClientLayout from '../components/update-info-client-layout.js'
import mainLogo from '../../../img/mainLogo.png'

class UpdateInfoClient extends Component {

  hidePassword=()=>{
    this.pass.type='password'
  }

  showPassword=()=>{
    this.pass.type='text'
  }

  moreInfo() {
    var elementsHiden = document.getElementsByClassName('form');
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
