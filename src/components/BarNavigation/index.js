import React from 'react';
import './styles.css'
import menu from './../../img/menu.png'
import user from './../../img/usuario.png'



    //createElement
    //appendChild
    //setAttribute
    //parentNode
    //insertBefore
    //removeChild
    //replaceChild

    //addEventListener, removeEventListener

    //click, scroll, mouseenter

class BarNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
    this.updateDimensions=this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    var special = document.getElementsByClassName('options');
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
    var l = this.state.width;
    if (l > 600) {
      if(special[0].style.display === "none") {
        for (let i = 0; i < special.length; i++) {
          special[i].style.display = "inline-block";
        }
      }
    }
    if (l <= 600) {
      if(special[0].style.display !== "none") {
        for (let i = 0; i < special.length; i++) {
          special[i].style.display = "none";
        }
      }
    }
  }

  deployMenu() {
    var special = document.getElementsByClassName('options');
    if(special[0].style.display === "none") {
      for (let i = 0; i < special.length; i++) {
        special[i].style.display = "inline-block";
      }
    } else {
      for (let i = 0; i < special.length; i++) {
        special[i].style.display = "none";
      }
    }
  }

  // resize() {
  //   var special = document.getElementsByClassName('options');
  //   if (document.width() > 600) {
  //     if(special[0].style.display === "none") {
  //       for (let i = 0; i < special.length; i++) {
  //         special[i].style.display = "inline-block";
  //       }
  //     }
  //   }
  // }

  render() {
    return (

        <div className= {`barNavigation ${this.props.classBar} ${(this.props.fixed==='no-fixed')?'':'fixed'}`}>
            <div className='voidBox'></div>
              <a className='icon' href='./index.html'>
                <img  src={this.props.mainLogo} alt=''></img>
              </a>
              <nav className='menu'>
                <img  src={menu} alt='' className="menuBar" onClick={this.deployMenu}></img>
                <a className='options uniform' href="trabajar">Sé tutor</a>
                <a className='options uniform' href="tutorias">Tutorias</a>
                <a className='options uniform' href="contenido">Contenido</a>
                <a className='options uniform' href="contactanos">Contactanos</a>
                <a className='options uniform' href="miembros">Miembros</a>
              </nav>
              <div className='userContent'>
                <img src={user} alt='' className='user'></img>
              </div>
            </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}

 // const BarNavigation=({classBar, mainLogo, fixed}) =>{
 //
 //   function deployMenu() {
 //     var special = document.getElementsByClassName('options');
 //     if(special[0].style.display === "none") {
 //       for (let i = 0; i < special.length; i++) {
 //         special[i].style.display = "inline-block";
 //       }
 //     } else {
 //       for (let i = 0; i < special.length; i++) {
 //         special[i].style.display = "none";
 //       }
 //     }
 //   }
 //
 //   function resize() {
 //     var special = document.getElementsByClassName('options');
 //     if (document.width() > 600) {
 //       if(special[0].style.display === "none") {
 //         for (let i = 0; i < special.length; i++) {
 //           special[i].style.display = "inline-block";
 //         }
 //       }
 //     }
 //   }
 //        return (
 //
 //            <div className= {`barNavigation ${classBar} ${(fixed==='no-fixed')?'':'fixed'}`}>
 //                <div className='voidBox'></div>
 //                  <a className='icon' href='./index.html'>
 //                    <img  src={mainLogo} alt=''></img>
 //                  </a>
 //                  <nav className='menu'>
 //                    <img  src={menu} alt='' className="menuBar" onClick={deployMenu}></img>
 //                    <a className='options uniform' href="tutorias">Tutorias</a>
 //                    <a className='options uniform' href="trabajar">Sé tutor</a>
 //                    <a className='options uniform' href="contenido">Contenido</a>
 //                    <a className='options special' href="conocenos">Conócenos</a>
 //                  </nav>
 //                </div>
 //        );
 //    }


export default BarNavigation;
