import React , {Component} from 'react'
import SideBarHorizontalLayout from './components/sideBarHorizontal.js'

class SideBarHorizontal extends Component {

  handleClickFelchaAbajo = () => {
    this.contenido.style.display='none';
    this.flechaDerecha.style.display='block'
    this.flechaAbajo.style.display='none'
  }

  handleClickFelchaDerecha = () => {
    this.contenido.style.display='flex';
    this.flechaAbajo.style.display='block'
    this.flechaDerecha.style.display='none'
  }

  handleClickOcultarContenido = () => {
    this.contenido.style.display = 'none'
    this.flechaAbajo.style.display='none'
    this.flechaDerecha.style.display='block'
  }

  setRefContenido = element => {
    this.contenido = element;
  }

  setRefFlechaAbajo = element => {
    this.flechaAbajo = element;
  }

  setRefFlechaDerecha = element => {
    this.flechaDerecha = element;
  }
  render() {
    return (
      <div>
        <SideBarHorizontalLayout

          setRefContenido = {this.setRefContenido}
          setRefFlechaAbajo = {this.setRefFlechaAbajo}
          setRefFlechaDerecha  = {this.setRefFlechaDerecha}

          handleClickFelchaAbajo = {this.handleClickFelchaAbajo}
          handleClickFelchaDerecha = {this.handleClickFelchaDerecha}
          handleClickOcultarContenido = {this.handleClickOcultarContenido}
        />
      </div>
    )
  }
}

export default SideBarHorizontal;
